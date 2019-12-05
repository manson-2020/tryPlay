"use strict";

class LoginRegister extends React.Component {
  constructor() {
    super();
    this.countdownState,
      this.login_isDataRight,
      this.login_isTelNum,
      this.register_isPwdRight,
      this.register_isDataRight,
      this.register_isTelNum,
      this.pwdLogin_isDataRight,
      this.pwdLogin_isPwdRight;
  }

  to(e) {
    switch (e.target.innerText) {
      case '密码登录':
        this.refs.passwordLogin.style.display = 'block';
        this.refs.main.style.top = "-100vh";
        this.refs.login.style.visibility = 'hidden';
        break;
      case '验证码登录':
        this.refs.passwordLogin.style.display = 'none';
        this.refs.main.style.top = "0";
        this.refs.login.style.visibility = 'visible';
        break;
      case '登录':
        this.refs.register.style.display = 'none';
        this.refs.main.style.top = "0";
        this.refs.login.style.visibility = 'visible';
        break;
      case '注册':
        this.refs.register.style.display = 'block';
        this.refs.main.style.top = "-100vh";
        this.refs.login.style.visibility = 'hidden';
    }
  }

  isShow(e) {
    let flag = e.target.className.indexOf('ciphertext') != -1;
    e.target.className = `get-verif ${flag ? 'plaintext' : 'ciphertext'}`;
    e.target.previousElementSibling.setAttribute('type', `${flag ? 'password' : 'text'}`);
  }

  countdown(e) {
    if (this.countdownState && e.target.getAttribute('class').indexOf('allowed') != -1) {
      this.countdownState = false;
      e.target.className = e.target.className.replace('allowed', '');
      let el = e.target;
      let i = 60;
      el.innerText = i + 's';
      let timer = setInterval(() => {
        i--;
        el.innerText = i + 's';
        if (i == 0) {
          clearInterval(timer);
          el.innerText = '重新获取';
          this.countdownState = true;
        }
      }, 1000)
    }
    return false;
  }

  dataVerif(value) {
    let e = event.target;
    switch (value) {
      case 'login':
        switch (e.getAttribute('placeholder')) {
          case '请输入手机号':
            let getVerifEl = e.parentNode.nextElementSibling.lastElementChild;
            if (e.value == 123) {
              getVerifEl.className = `${getVerifEl.className} allowed`;
              this.countdownState = this.login_isTelNum = true;
            } else {
              getVerifEl.className = getVerifEl.className.replace('allowed', '');
              this.countdownState = this.login_isTelNum = false;
            }
            break;
          case '请输入验证码':
            this.login_isDataRight = e.value == 123 ? true : false;
        }
        this.refs.loginBtn.className = this.login_isTelNum && this.login_isDataRight ?
          `${this.refs.loginBtn.className} completed` : this.refs.loginBtn.className.replace('completed', '');
        break;

      case 'register':
        switch (e.getAttribute('placeholder')) {
          case '请输入手机号':
            let getVerifEl = e.parentNode.nextElementSibling.lastElementChild;
            if (e.value == 123) {
              getVerifEl.className = `${getVerifEl.className} allowed`;
              this.countdownState = this.register_isTelNum = true;
            } else {
              getVerifEl.className = getVerifEl.className.replace('allowed', '');
              this.countdownState = this.register_isTelNum = false;
            }
            break;
          case '请输入验证码':
            this.register_isDataRight = e.value == 123 ? true : false;
            break;
          case '请输入密码':
            this.register_isPwdRight = e.value == 123 ? true : false;
        }
        this.refs.registerBtn.className = this.register_isTelNum && this.register_isDataRight && this.register_isPwdRight ?
          `${this.refs.registerBtn.className} completed` : this.refs.registerBtn.className.replace('completed', '');
        break;

      case 'pwdLogin':
        switch (e.getAttribute('placeholder')) {
          case '请输入账号':
            this.pwdLogin_isTelNum = e.value == 123 ? true : false;
            break;
          case '请输入密码':
            this.isPwdRight = e.value == 123 ? true : false;
        }

        this.refs.pwdLoginBtn.className = this.pwdLogin_isTelNum && this.isPwdRight ?
          `${this.refs.pwdLoginBtn.className} completed` : this.refs.pwdLoginBtn.className.replace('completed', '');
    }
  }

  render() {
    return (
      <main ref="main">
        <section className="login" ref="login">
          <div className="main">
            <div className="title">
              <a href="javascript:" className="selected">登录</a>
              <a href="javascript:" onTouchStart={this.to.bind(this)}>注册</a>
            </div>
            <div className="input">
              <label className="tel">
                <input type="text" onChange={this.dataVerif.bind(this, 'login')} placeholder="请输入手机号" />
              </label>
              <label className="verif">
                <input type="text" onChange={this.dataVerif.bind(this, 'login')} placeholder="请输入验证码" />
                <a href="javascript:" className="get-verif" onTouchStart={this.countdown.bind(this)} href="javascript:">获取验证码</a>
              </label>
            </div>
            <a href="javascript:" className="pwd-login" onTouchStart={this.to.bind(this)}>密码登录</a>
            <a href="javascript:" ref="loginBtn" className="login btn">登录</a>
          </div>
          <div className="bottom-bg"></div>
        </section>

        <section className="register" ref="register">
          <div className="main">
            <div className="title">
              <a href="javascript:" onTouchStart={this.to.bind(this)}>登录</a>
              <a href="javascript:" className="selected">注册</a>
            </div>
            <div className="input">
              <label className="tel">
                <input onChange={this.dataVerif.bind(this, 'register')} type="text" placeholder="请输入手机号" />
              </label>
              <label className="verif">
                <input onChange={this.dataVerif.bind(this, 'register')} type="text" placeholder="请输入验证码" />
                <a href="javascript:" className="get-verif" onTouchStart={this.countdown.bind(this)} href="javascript:">获取验证码</a>
              </label>
              <label className="verif">
                <input onChange={this.dataVerif.bind(this, 'register')} type="password" placeholder="请输入密码" />
                <a href="javascript:" onTouchStart={this.isShow.bind(this)} className="get-verif plaintext" href="javascript:"></a>
              </label>
            </div>
            <a href="javascript:" ref="registerBtn" className="register-btn btn">注册</a>
          </div>
          {/* <div className="bottom-bg"></div> */}
        </section>

        <section className="password-login" ref="passwordLogin">
          <div className="main">
            <div className="title">
              <a href="javascript:" className="selected">密码登录</a>
            </div>
            <div className="input">
              <label className="tel">
                <input onChange={this.dataVerif.bind(this, 'pwdLogin')} type="text" placeholder="请输入账号" />
              </label>
              <label className="verif">
                <input onChange={this.dataVerif.bind(this, 'pwdLogin')} type="password" placeholder="请输入密码" />
                <a href="javascript:" onTouchStart={this.isShow} className="get-verif plaintext" href="javascript:"></a>
              </label>
            </div>
            <div className="skip">
              <a href="javascript:" className="pwd-login" onTouchStart={this.to.bind(this)}>验证码登录</a>
              <a href="javascript:" className="pwd-login">忘记密码？</a>
            </div>
            <a href="javascript:" ref="pwdLoginBtn" className="login btn">登录</a>
          </div>
          <div className="bottom-bg"></div>
        </section>
      </main>
    )
  }
}

ReactDOM.render(<LoginRegister />, document.getElementById('root'));