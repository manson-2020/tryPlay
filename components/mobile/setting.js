"use strict";


class Setting extends React.Component {

    componentWillMount(){
    }
    render() {
        return (
            <main>
                <section className="avatar">
                    <span className="item">头像</span>
                    <span className="image"></span>
                </section>

                <section className="info">
                    <h1 className="h1-title">信息修改</h1>
                    <ul className="info-ul">
                        <li className="info-li">
                            <span className="item">昵称</span>
                            <span className="value">小水666</span>
                        </li>
                        <li className="info-li">
                            <span className="item">手机号</span>
                            <span className="value">135****1101</span>
                        </li>
                        <li className="info-li">
                            <span className="item">邮箱</span>
                            <span className="value">4136111111@qq.com</span>
                        </li>
                        <li className="info-li">
                            <span className="item">身份证号</span>
                            <span className="value">511011111111111111</span>
                        </li>
                    </ul>
                </section>

                <section className="password">
                    <h1 className="h1-title">密码修改</h1>
                    <ul className="password-ul">
                        <li className="password-li">
                            <span className="item">登录密码</span>
                            <span className="value"></span>
                        </li>
                        <li className="password-li">
                            <span className="item">支付密码</span>
                            <span className="value"></span>
                        </li>
                    </ul>
                </section>

                <a className="exit-btn" href="javascript:">安全退出</a>
            </main>
        )
    }
}

ReactDOM.render(<Setting />, document.getElementById('root'));