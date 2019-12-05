"use strict";

class LoginRegister extends React.Component {
    constructor(prop) {
        super(prop);
        this.state = {
            login_register: true
        }
    }

    componentDidMount() {
        return this.state.login_register ? new Gverify({ id: 'verification-container', size: 4 }) : false;
    }
    componentDidUpdate(){
        return this.state.login_register ? new Gverify({ id: 'verification-container', size: 4 }) : false;
    }
    to() {
        this.setState({
            login_register: !this.state.login_register
        })
    }

    render() {
        return (
            <main className="container">
                {this.state.login_register ?
                    (<section className="login">
                        <div className="wrapper">
                            <h1 className="title">登录</h1>
                            <p className="user-name">
                                <i className='iconAccount'></i>
                                <input type="text" placeholder="请输入用户名" />
                            </p>
                            <p className="password">
                                <i className='iconPassword'></i>
                                <input type="password" placeholder="请输入密码" />
                            </p>
                            <p className="verification">
                                <i className="iconCode"></i>
                                <input type="text" placeholder="请输入验证码" />
                                <span id="verification-container" className="verification-container"></span>
                            </p>
                            <p className="lr-btn">立即登录</p>
                            <p className="forget-pwd">忘记密码?</p>
                            <p className="fast-login">快捷登录</p>
                            <p className="select-login">
                                <a href="javascript:" className="QQ-login">
                                    <img src="/images/icon-qq.png" />
                                    <span>QQ</span>
                                </a>
                                <a href="javascript:" className="weibo-login">
                                    <img src="/images/icon-weibo.png" />
                                    <span>微博</span>
                                </a>
                            </p>
                            <p className="to">
                                <span>没有账户?</span>
                                <a onClick={this.to.bind(this)} href="javascript:">马上注册</a>
                            </p>
                        </div>
                    </section>) :
                    (<section className="register">
                        <div className="wrapper">
                            <h1 className="title">注册</h1>
                            <p className="user-name">
                                <i className='iconAccount'></i>
                                <input type="text" placeholder="请输入用户名" />
                            </p>
                            <p className="password">
                                <i className='iconPassword'></i>
                                <input type="password" placeholder="请输入密码" />
                            </p>
                            <p className="password-again">
                                <i className="iconCode"></i>
                                <input type="password" placeholder="请再次输入密码" />
                            </p>
                            <p className="agreement">
                                <label>
                                    <input type="checkbox" />
                                    <span>同意</span><a href="javascript:">《注册服务协议》</a>
                                </label>
                            </p>
                            <p className="lr-btn">立即注册</p>
                            <p className="fast-login">快捷登录</p>
                            <p className="select-login">
                                <a href="javascript:" className="QQ-login">
                                    <img src="/images/icon-qq.png" />
                                    <span>QQ</span>
                                </a>
                                <a href="javascript:" className="weibo-login">
                                    <img src="/images/icon-weibo.png" />
                                    <span>微博</span>
                                </a>
                            </p>
                            <p className="to">
                                <span>已有账号?</span>
                                <a onClick={this.to.bind(this)} href="javascript:">马上登录</a>
                            </p>
                        </div>

                    </section>)
                }
            </main >
        )
    }
}

ReactDOM.render(<LoginRegister />, document.getElementById('root'));