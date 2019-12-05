'use strict';

class Home extends React.Component {
    constructor() {
        super();
        this.state = {
            login_register: true,
            countdown: true
        };
        this.params = {
            platList: ['', '', '', ''],
            footerList: ['关于我们', '商务合作', '联系邮箱'],
            check: false,
            gverify: null,
            isRight: false,
        }
    }

    //组件挂载完成后实例化验证码类
    componentDidMount() {
        if (this.state.login_register) {
            this.params.gverify = new Gverify('v_container');
        }
        document.addEventListener("keydown", (e) => {
            e = e || window.event;
            if (e.code == 'Enter' || e.code == 'NumpadEnter') this.login()
        });
    }

    // 切换登录注册时重新实例化验证码类
    componentDidUpdate() {
        if (this.state.login_register) {
            this.params.gverify = new Gverify('v_container');
        }
    }

    slider(e) {
        //滚动条上下滑动
        let [osTop, speed] = [document.documentElement.clientHeight, 0];
        let timer = setInterval(() => {
            window.scrollBy(0, (e == 'bottom' ? speed++ : speed--));
        }, 10);


        switch (e) {
            case 'top-join':
                this.setState({ login_register: false });
                break;
            case 'top-login':
                this.setState({ login_register: true });
        }

        window.addEventListener("scroll", () => {
            let distanc = document.body.scrollTop || document.documentElement.scrollTop;
            if ((distanc >= osTop && e == 'bottom') || (distanc == 0 && (e == 'top-join' || e == 'top-login')))
                clearInterval(timer);
        })
    }

    //验证码是否正确
    verify() {
        let content = this.refs.verify.value,
            isRight = this.params.gverify.validate(content);
        this.refs.iconTF.className = isRight ? "iconTF right" : 'iconTF';
        this.refs.iconTF.style.display = content ? 'inline-block' : 'none';
        this.params.isRight = isRight;
    }

    //记住用户名复选框是否选中
    checked() {
        this.params.check = !this.params.check;
        this.refs.check.children[0].className = this.params.check ? 'iconChecked' : 'iconCheck';
    }

    //登录验证
    login() {
        //解构赋值
        let data = [this.refs.account.value, this.refs.password.value, this.params.isRight, this.params.check];
        let [account, password, isRight, isRemember] = data;
        if (account && password) {
            if (isRight) {
                if (/^1[3456789]\d{9}$/.test(account)) {
                    fetch('/api/login', {
                        method: 'POST',
                        mode: 'cors',
                        headers: {
                            'Content-Type': 'application/x-www-form-urlencoded'
                        },
                        body: `data=${JSON.stringify({
                            account,
                            password,
                            isRight,
                            isRemember
                        })}`
                    }).then(res => res.json())
                        .then(data => {
                            let code = parseInt(data.code);
                            alert(data.msg);
                            if (code == 1) location.href = '/login_success';
                        });
                } else {
                    alert('请输入正确的账号')
                }
            } else {
                alert('验证码输错了～')
            }
        } else {
            alert('请输入账号或密码～')
        }
    }

    to() {
        this.setState({
            login_register: !this.state.login_register
        });
        this.refs.verify.value = '';
    }

    countdown() {
        if (this.state.countdown) {
            this.setState({ countdown: false });
            let i = 60;
            this.refs.countdown.style.cursor = "not-allowed"
            this.refs.countdown.innerText = i + 's';
            let timer = setInterval(() => {
                i--;
                if (i) {
                    !this.state.login_register && (this.refs.countdown.innerText = i + 's');
                } else {
                    clearInterval(timer);
                    this.setState({ countdown: true });
                    this.refs.countdown.innerText = '重新获取';
                    this.refs.countdown.style.cursor = "pointer";
                }
            }, 1000)
        }
        return false;
    }

    //渲染页面
    render() {
        return (
            <div>
                <Header />
                <main className='headerMain'>
                    <div className='bgSec1'>
                        <section className='mainContent'>
                            {this.state.login_register ? (
                                <div className='loginWrapper'>
                                    <p className='loginTitle'><span className='loginIcon'></span> 用户登录</p>
                                    <p className='elInput'>
                                        <i className='iconAccount'></i>
                                        <input className='elInputInner' ref="account" placeholder="手机/邮箱/用户名" />
                                    </p>
                                    <p className='elInput'>
                                        <i className='iconPassword'></i>
                                        <input className='elInputInner' ref="password" type="password" placeholder="请输入你的登录密码" />
                                    </p>
                                    <div className='elInput vcp'>
                                        <div className="v_code">
                                            <i className="iconCode"></i>
                                            <input className='vc elInputInner' placeholder="请输入验证码" ref="verify" onChange={this.verify.bind(this)} id="code_input" />
                                        </div>
                                        <span id="v_container"></span>
                                        <i ref="iconTF" className="iconTF"></i>
                                    </div>
                                    <p className='elInput account'>
                                        <span onClick={this.checked.bind(this)} className="remenber-name" ref='check'>
                                            <i className="iconCheck"></i>
                                            <span>记住用户名</span>
                                        </span>
                                        <span className="forget-password">忘记密码</span>
                                    </p>
                                    <p className='elInput login'><button onClick={this.login.bind(this)}>立即登录</button></p>
                                    <p className='elInput register'>没有账户? <a onClick={this.to.bind(this)} href="javascript:">马上注册</a></p>
                                </div>
                            ) : (
                                    <div className='registerWapper'>
                                        <p className='loginTitle'><span className='loginIcon'></span> 用户注册</p>
                                        <p className='elInput'>
                                            <i className='iconAccount'></i>
                                            <input className='elInputInner' ref="account" placeholder="请输入你的手机号码" />
                                        </p>
                                        <p className='elInput'>
                                            <i className='iconPassword'></i>
                                            <input className='elInputInner' ref="password" type="password" placeholder="请输入你的登录密码" />
                                        </p>
                                        <div className='elInput vcp'>
                                            <div className="tel_v">
                                                <i className="iconCode"></i>
                                                <input className='vc elInputInner' placeholder="请输入短信验证码" ref="verify" id="code_input" />
                                            </div>

                                            <span onClick={this.countdown.bind(this)} ref="countdown" className="get-tel_v">获取验证码</span>
                                        </div>
                                        <p className='elInput account'>
                                            <span onClick={this.checked.bind(this)} ref='check'>
                                                <i className="iconCheck"></i>
                                                <span className="agree">同意</span>
                                            </span>
                                            <a className="agreements" href="javascript:">《注册服务协议》</a>
                                        </p>
                                        <p className='elInput login'><button>立即注册</button></p>
                                        <p className='elInput register'>已有账户? <a onClick={this.to.bind(this)} href="javascript:">马上登录</a></p>
                                    </div>
                                )}
                        </section>
                    </div>
                    <section className='decor-section'>
                        <div className='bottomarrow' onClick={() => this.slider('bottom')}>
                            <i></i>
                        </div>
                        <div className='img-container'></div>
                    </section>
                    <section className='service-intro-section'>
                        <main>
                            <h2>平台优势</h2>
                            <ul>
                                {this.params.platList.map((value, index) =>
                                    <li className='platList' key={index}>{value}</li>
                                )}
                            </ul>
                        </main>
                    </section>
                    <section className='creator-intro-section'>
                        <main>
                            <div className='content'>
                                <h1>开启你的游戏之旅</h1>
                                <p>全新游戏试玩平台 奖励更高更好玩</p>
                                <div className='option'>
                                    <span onClick={() => this.slider('top-join')}>加入我们</span>
                                    <span onClick={() => this.slider('top-login')}>登录</span>
                                </div>
                            </div>
                            <ul className='footer-list'>
                                {this.params.footerList.map((value, index) =>
                                    <li key={index}>
                                        <a href="javascript:">{value}</a>
                                        {index === this.params.footerList.length - 1 ? '' : <span>|</span>}
                                    </li>
                                )}
                            </ul>
                        </main>
                    </section>
                </main>
            </div>
        );
    }
}

//挂载到页面
ReactDOM.render(<Home />, document.getElementById('root'));