"use strict";

class Recharge extends React.Component {
    constructor(prop) {
        super(prop);
        this.state = {};
    }

    render() {
        return (
            <main>
                <Header />
                <section className="banner">
                    <img src="/images/recharge.png" width="100%" height="100%" />
                    <div className="text">
                        <h1 className="title">会员计划</h1>
                        <div className="describe">
                            <p>成为我们的学员</p>
                            <p>享受最全面的服务与福利</p>
                        </div>
                        <span className="open-btn">开通会员</span>
                    </div>
                </section>
                <section className="details">
                    <table>
                        <thead>
                            <tr>
                                <th className="grey vip">会员权利</th>
                                <th className="purple">普通用户</th>
                                <th className="dark-purple">会员</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td className="grey">悬赏任务加成</td>
                                <td className="purple">/</td>
                                <td className="dark-purple">15%</td>
                            </tr>
                            <tr>
                                <td className="grey">游戏奖励加成</td>
                                <td className="purple">/</td>
                                <td className="dark-purple">15%</td>
                            </tr>
                            <tr>
                                <td className="grey">悬赏任务加成</td>
                                <td className="purple">/</td>
                                <td className="dark-purple">15%</td>
                            </tr>
                            <tr>
                                <td className="grey">游戏奖励加成</td>
                                <td className="purple">/</td>
                                <td className="dark-purple">15%</td>
                            </tr>
                        </tbody>

                        <tfoot>
                            <tr className="blue">
                                <td colSpan="3">立即开通会员</td>
                            </tr>
                        </tfoot>
                    </table>
                </section>

                <section className="footer-banner">
                    <div className="text">
                        <h1 className="ad">开通会员</h1>
                        <h1 className="ad">享受更多权益</h1>
                        <span className="open-btn">开通会员</span>
                    </div>
                </section>
                <Footer />
            </main>
        )
    }
}

ReactDOM.render(<Recharge />, document.getElementById('root'))