"use strict";

class Personal extends React.Component {
    render() {
        return (
            <main>
                <header className="header">
                    <div className="info-card">
                        <div className="avatar">
                            <img src="/images/avatar.png" width="100%" height="100%" />
                        </div>
                        <div className="user-info">
                            <h2 className="user-name">小水666</h2>
                            <p className="user-id">ID：13332502103</p>
                            <a className="sign" href="javascript:">签到领金币</a>
                        </div>
                        <div className="corner">
                            <p>VIP</p>
                            <p>会员充值</p>
                        </div>
                    </div>
                    <ul className="summary">
                        <li className="item">
                            <h3 className="item-num">1000</h3>
                            <p className="item-name">U币金额</p>
                        </li>
                        <li className="item">
                            <h3 className="item-num">1000</h3>
                            <p className="item-name">U币金额</p>
                        </li>
                        <li className="item">
                            <h3 className="item-num">1000</h3>
                            <p className="item-name">U币金额</p>
                        </li>
                        <li className="item">
                            <h3 className="item-num">1000</h3>
                            <p className="item-name">U币金额</p>
                        </li>
                    </ul>
                </header>
                <section className="experience">
                    <h3 className="title-h3">我的体验</h3>
                    <ul className="experience-ul">
                        <li className="experience-li">
                            <div className="img"></div>
                            <div className="text">游戏试玩</div>
                        </li>
                        <li className="experience-li">
                            <div className="img"></div>
                            <div className="text">棋牌游戏</div>
                        </li>
                        <li className="experience-li">
                            <div className="img"></div>
                            <div className="text">悬赏任务</div>
                        </li>
                    </ul>
                </section>

                <section className="account">
                    <h3 className="title-h3">我的账户</h3>
                    <ul className="account-ul">
                        <li className="account-li">
                            <div className="img"></div>
                            <div className="text">U币账户</div>
                        </li>
                        <li className="account-li">
                            <div className="img"></div>
                            <div className="text">U豆账户</div>
                        </li>
                        <li className="account-li">
                            <div className="img"></div>
                            <div className="text">我要提现</div>
                        </li>
                        <li className="account-li">
                            <div className="img"></div>
                            <div className="text">我的奖品</div>
                        </li>
                        <li className="account-li">
                            <div className="img"></div>
                            <div className="text">我的订单</div>
                        </li>
                        <li className="account-li">
                            <div className="img"></div>
                            <div className="text">安全设置</div>
                        </li>
                    </ul>
                </section>
            </main>
        )
    }
}

ReactDOM.render(<Personal />, document.getElementById('root'));