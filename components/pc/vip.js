"use strict";

class Vip extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            tryPlayGame: [
                {
                    name: '斩月屠龙专区52期', progress: '0/8', getUb: 0, surplus: '18, 690, 000',
                    offlineTime: '2019-08-09 09:08:00', lastUpdateTime: '--:--:--'
                },
                {
                    name: '斩月屠龙专区52期', progress: '0/8', getUb: 0, surplus: '18, 690, 000',
                    offlineTime: '2019-08-09 09:08:00', lastUpdateTime: '--:--:--'
                },
                {
                    name: '斩月屠龙专区52期', progress: '0/8', getUb: 0, surplus: '18, 690, 000',
                    offlineTime: '2019-08-09 09:08:00', lastUpdateTime: '--:--:--'
                },
                {
                    name: '斩月屠龙专区52期', progress: '0/8', getUb: 0, surplus: '18, 690, 000',
                    offlineTime: '2019-08-09 09:08:00', lastUpdateTime: '--:--:--'
                },
                {
                    name: '斩月屠龙专区52期', progress: '0/8', getUb: 0, surplus: '18, 690, 000',
                    offlineTime: '2019-08-09 09:08:00', lastUpdateTime: '--:--:--'
                },
            ]
        }
    }
    render() {
        return (
            <div>
                <Header />
                <main className="content">
                    <div className="content-left">
                        <ul className="user-info">
                            <li className="avatar">
                                <img src="/images/avatar.png" />
                            </li>
                            <li className="name">会员名称</li>
                            <li className="id">ID : 123123123</li>
                        </ul>
                        <ul className="account-info">
                            <li className="Ubi">
                                <span>U币金额：</span>
                                <span>10,000</span>
                                <i className="icon-ub"></i>
                                <span>提现</span>
                            </li>
                            <li className="Udou">
                                <span>U豆金额：</span>
                                <span>10,000</span>
                                <i className="icon-ud"></i>
                                <span>抽奖</span>
                            </li>
                            <li className="safe">账户安全系数：</li>
                            <li className="centage">
                                <span>
                                    <span className="ur" style={{ width: "40%" }}>40%</span>
                                </span>
                                <span>提升账号安全</span>
                            </li>
                        </ul>
                        <div className="sign-in">
                            <p onClick={() => location.href="/signin.html"}><i></i><span>我要签到</span></p>
                        </div>
                        <div className="category">
                            <ul className="category-I">
                                <li className="title active"><i className="icon-try"></i><span>我的体验</span></li>
                                <li>游戏试玩</li>
                                <li>棋牌试玩</li>
                                <li>悬赏任务</li>
                            </ul>
                            <ul className="category-II">
                                <li className="title active"><i className="icon-account"></i><span>我的账户</span></li>
                                <li>U币账户</li>
                                <li>U豆账户</li>
                                <li>我要提现</li>
                                <li>我的奖品</li>
                                <li>我的订单</li>
                                <li>安全设置</li>
                            </ul>
                        </div>
                    </div>

                    <div className="content-right">
                        <div className="banner"></div>
                        <p className="total">当前累计赚取U币：4 <i className="icon-ub"></i> （合计1元人民币）</p>
                        <ul className="total-content">
                            <li>
                                <div className="section">
                                    <h3 className="cumulative">累计游戏</h3>
                                    <b className="number">0个</b>
                                    <p className="draw">领取奖励：0 <i className="icon-ub"></i></p>
                                </div>
                            </li>
                            <li>
                                <div className="section">
                                    <h3 className="cumulative">累计棋牌</h3>
                                    <b className="number">0个</b>
                                    <p className="draw">领取奖励：0 <i className="icon-ub"></i></p>
                                </div>
                            </li>
                            <li>
                                <div className="section">
                                    <h3 className="cumulative">累计悬赏</h3>
                                    <b className="number">0个</b>
                                    <p className="draw">领取奖励：0 <i className="icon-ub"></i></p>
                                </div>
                            </li>
                        </ul>
                        <div className="J_gamesTbl">
                            <div className="table-tab">
                                <a href="javascript:" className="tab-a select">正在参与的游戏</a>
                                <a href="javascript:" className="tab-a">即将下线的游戏</a>
                                <a href="javascript:" className="tab-a">已经下线的游戏</a>
                                <a href="javascript:" className="tab-a">已经删除的游戏</a>
                            </div>
                            <table className="personal-tbl">
                                <thead>
                                    <tr>
                                        <th>选择</th>
                                        <th>试玩名称</th>
                                        <th>试玩进度</th>
                                        <th>已获得U币</th>
                                        <th>剩余可获得U币</th>
                                        <th>下线时间</th>
                                        <th>最后更新时间</th>
                                        <th>操作</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {this.state.tryPlayGame.map((item, index) =>
                                        <tr key={index}>
                                            <td className="width-66">
                                                <input type="checkbox" className="check-inp" />
                                            </td>
                                            <td className="left">
                                                <a href="#" target="_blank">{item.name}</a>
                                            </td>
                                            <td className="left">{item.progress}</td>
                                            <td className="right clr-ff6600">
                                                <span>{item.getUb}</span>
                                            </td>
                                            <td className="pad-right-40">
                                                <span>{item.surplus}</span>
                                            </td>
                                            <td className="left clr-999">{item.offlineTime}</td>
                                            <td className="left">{item.lastUpdateTime}</td>
                                            <td>
                                                <a href="#" target="_blank" className="jixu-a">继续试玩</a>
                                            </td>
                                        </tr>
                                    )}
                                </tbody>
                            </table>
                            <div className="bottom-btn-box">
                                <div className="left-btn">
                                    <input className="check-all J_check_all" type="checkbox" name="check-all" />
                                    <span className="s-all">全选</span>
                                    <a href="#" className="a-del">删除</a>
                                    <div className="right-page">
                                        <div id="J_trygames_page" className="splitpage-box"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </main>
                <Footer />
            </div >
        )
    }
}


ReactDOM.render(<Vip />, document.getElementById('root'));

