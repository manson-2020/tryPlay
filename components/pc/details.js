"use strict";

class Details extends React.Component {
    render() {
        return (
            <main>
                <Header />
                <section className="banner"></section>
                <section className="tryplay-step"></section>
                <section className="main-body clearfix">
                    <div className="list">
                        <div className="ranking-list">
                            <h2 className="title">试玩排行榜</h2>
                            <table className="rank-table">
                                <thead>
                                    <tr>
                                        <th>排名</th>
                                        <th>昵称ID</th>
                                        <th>试玩等级</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td className="first"></td>
                                        <td>ID1</td>
                                        <td>LV300</td>
                                    </tr>
                                    <tr>
                                        <td className="second"></td>
                                        <td>ID2</td>
                                        <td>LV200</td>
                                    </tr>
                                    <tr>
                                        <td className="third"></td>
                                        <td>ID3</td>
                                        <td>LV100</td>
                                    </tr>
                                    <tr>
                                        <td>4</td>
                                        <td>ID4</td>
                                        <td>LV50</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <div className="foreshow-list">
                            <h2 className="title">试玩预告</h2>
                            <p className="time clearfix">
                                <a href="javascript:" className="today active">07/10<b></b>今日</a>
                                <a href="javascript:" className="tomorrow">07/11<b></b>明日</a>
                            </p>

                            <table className="foreshow-table">
                                <tbody>
                                    <tr>
                                        <td>斩月屠龙专区56期</td>
                                        <td>1254万</td>
                                        <td>09：00上线</td>
                                    </tr>
                                    <tr>
                                        <td>麦游捕鱼8期 </td>
                                        <td>1255万</td>
                                        <td>10：00上线</td>
                                    </tr>
                                    <tr>
                                        <td>传奇荣耀8区</td>
                                        <td>1256万</td>
                                        <td>10：30上线</td>
                                    </tr>
                                    <tr>
                                        <td>飞龙传说二服</td>
                                        <td>1257万</td>
                                        <td>10：45上线</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                    <div className="details">
                        <div className="requirement">
                            <h3 className="title">试玩要求</h3>
                            <ul className="requirement-ul">
                                <li className="requirement-li">
                                    <span className="item">试玩时间：</span>
                                    <span className="text">07月01日-07月30日</span>
                                </li>
                                <li className="requirement-li">
                                    <span className="item">试玩区服：</span>
                                    <span className="text">仅限金装传奇002服，其他区服无效。</span>
                                </li>
                                <li className="requirement-li">
                                    <span className="item">试玩奖励：</span>
                                    <span className="text">请自行领取奖励，如错过奖励领取期限，则无法领取。</span>
                                </li>
                                <li className="requirement-li">
                                    <span className="item">注册提醒：</span>
                                    <span className="text">注册账号密码必须是由英文字母+数字，不能出现特殊字符和标点。</span>
                                </li>
                                <li className="requirement-li">
                                    <span className="item">问下提示：</span>
                                    <span className="text">严禁重复体验，统一IP，同一电脑注册多个账号登录体验将会以刷号行为进行处理。</span>
                                </li>
                            </ul>
                            <div className="position-countdown">
                                <p className="text">距离试玩结束还有</p>
                                <p className="time">
                                    <span className="number">1</span>
                                    <span className="number">1</span>
                                    <span className="unit">天</span>
                                    <span className="number">2</span>
                                    <span className="number">1</span>
                                    <span className="unit">时</span>
                                    <span className="number">1</span>
                                    <span className="number">1</span>
                                    <span className="unit">分</span>
                                </p>
                            </div>
                        </div>
                        <div className="describe">
                            <ul className="tab">
                                <li className="bar">试玩奖励</li>
                                <li className="bar">冲级奖励</li>
                                <li className="bar">体验规则</li>
                                <li className="bar active">游戏介绍</li>
                            </ul>
                            <div className="content">
                                <div className="game-describe">
                                    <p className="paragraph">
                                        《金装传奇》是一款角色扮演类（arpg）网页游戏。
                                        游戏以半兽人入侵传奇玛法大陆为前提背景，在游戏中玩家可以分别选择三种不同的职业，
                                        享受不一样的游戏体验，战斗模式自由，打击感强，而在攻城战中，
                                        公会中三种职业的玩家可以互相配合，通过团结合作获得胜利。
                                        游戏剧情跌宕起伏，场景精致、套装华丽，玩法丰富。
                                    </p>
                                    <a className="enter-btn" href="javascript:"></a>
                                </div>
                                <div className="image">
                                    <img src="/images/game_introduce.png" />
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <Footer />
            </main>
        )
    }
}

ReactDOM.render(<Details />, document.getElementById('root'));