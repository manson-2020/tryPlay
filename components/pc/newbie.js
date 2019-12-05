"use strict";

class Newbie extends React.Component {

    constructor() {
        super();
        this.dynamic = [
            { account: '**4564**', time: 5, number: 20 },
            { account: '**4564**', time: 5, number: 20 },
            { account: '**4564**', time: 5, number: 20 },
            { account: '**4564**', time: 5, number: 20 },
            { account: '**4564**', time: 5, number: 20 }
        ];
        this.taskStep = [
            { img: '/images/step_bg.png', target: '新用户首次报到', number: '200', progress: '0/1' },
            { img: '/images/step_bg1.png', target: '新用户首次报到', number: '200', progress: '0/1' },
            { img: '/images/step_bg2.png', target: '新用户首次报到', number: '200', progress: '0/1' },
            { img: '/images/step_bg3.png', target: '新用户首次报到', number: '200', progress: '0/1' }
        ];
        this.taskProgress = [
            { number: 1, gold: 10, progress: '0/5' },
            { number: 2, gold: 10, progress: '0/5' },
            { number: 3, gold: 10, progress: '0/5' },
            { number: 4, gold: 10, progress: '0/5' },
        ];
        this.recommendItem = [
            { title: '游戏试玩', introduce: '游戏等级奖励 冲级活动奖励让你U币转不停' },
            { title: '投资理财', introduce: '小投资 高盈利 u币轻松拿' },
            { title: '广告体验', introduce: '体验广告投放的乐趣 还有U币奖励拿' },
            { title: '每日任务', introduce: '每日必做任务 丰厚的奖励让你流连忘返' },
            { title: '邀请好友', introduce: '每日必做任务 丰厚的奖励让你流连忘返' },
        ]
    }

    render() {
        return (
            <main>
                <Header />
                <section className="banner">
                    <p className="dynamic">
                        <span className="title">玩家动态: </span>
                        {this.dynamic.map((item, index) =>
                            <span key={index} className="msg">{`${item.account}${item.time}分钟前提现了${item.number}元`}</span>
                        )}
                    </p>
                </section>
                <section className="introduction-task">
                    <h2 className="title">入门任务</h2>
                    <ul className="task-step">
                        {this.taskStep.map((item, index) =>
                            <li key={index} className="step">
                                <img src={item.img} width="100%" />
                                <p className="task-target">{item.target}</p>
                                <p className="reward">
                                    <span className="item">奖励：</span>
                                    <span className="number">{item.number}</span>
                                    <span className="unit">U币</span>
                                </p>
                                <p className="progress">已完成：{item.progress}</p>
                                <a href="javascript:" className="forward-btn">前往</a>
                            </li>
                        )}
                        <li className="symbol"></li>
                        <li className="result">
                            <p className="final">
                                <span className="important">2元</span>
                                <span className="conventional">提现</span>
                            </p>
                            <a href="javascript:" className="conditions">需完成前四项任务</a>
                        </li>
                    </ul>
                </section>
                <section className="newbie-task">
                    <h2 className="title">新手任务</h2>
                    <ul className="task-step">
                        {this.taskProgress.map((item, index) =>
                            <li key={index} className="task">
                                <div className="task-cont">
                                    <span className="task-number">{item.number}</span>
                                    <span className="task-target">累计签到3天，领奖金币<span className="orange-bg">{item.gold}</span>枚</span>
                                </div>
                                <div className="task-execute">
                                    <p className="progress">任务进度{item.progress}</p>
                                    <a href="javascript:" className="forward-btn">前往</a>
                                </div>
                            </li>
                        )}
                    </ul>
                </section>
                <section className="advertising">
                    <div className="recommend">
                        <h1 className="title">玩游戏可以获得更多u币</h1>
                        <p className="introduce">每款游戏试玩20分钟你就能提现20元、50元、100元、500元、1000元.....</p>
                        <p className="introduce">还有Q币、话费、游戏点卡、iphone手机、笔记本电脑供您兑换</p>
                        <p className="more">推荐试玩以下游戏获得更多奖励</p>
                    </div>
                    <ul className="re-try-play">
                        {this.recommendItem.map((item, index) =>
                            <li key={index} className="item">
                                <div className="avatar"></div>
                                <h2 className="title">{item.title}</h2>
                                <p className="introduce">{item.introduce}</p>
                            </li>
                        )}
                    </ul>
                </section>
                <Footer />
            </main>
        )
    }
}

ReactDOM.render(<Newbie />, document.getElementById('root'));