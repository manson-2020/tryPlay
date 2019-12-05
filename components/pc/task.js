"use strict";

class Task extends React.Component {
    constructor() {
        super();
        let [trialCon, business] = [[], []];
        let trialValue = { img: '', title: '纵剑仙界多服16期', type: '每人奖励：', reward: '1000万' };

        for (let i = 0; i < 12; i++) {
            trialCon = [...trialCon, trialValue]
            business = [...business, '']
        }

        this.state = {
            screenWidth: window.innerWidth - this.getScrollbarWidth(),
            recommend: [
                { img: '', title: '纵剑仙界多服16期', describe: '试玩奖励约为530.6元' },
                { img: '', title: '纵剑仙界多服16期', describe: '试玩奖励约为530.6元' }
            ],
            trialBar: ['棋牌', '手游'],
            trialCon: trialCon,
            business: business,
            slider: ['/images/slider_0.jpg', '/images/slider_1.jpg', '/images/slider_2.jpg']
        }
    }

    componentDidMount() {
        this.refs.dots.children[0].className = "active";
        this.refs.imgs.children[0].style.display = "inline-block";
        let i = 0;
        setInterval(() => {
            i++;
            if (i > (this.refs.imgs.children.length - 1)) {
                i = 0;
            }
            this.slider(i)
        }, 3000)
    }

    //获取滚动条宽度
    getScrollbarWidth() {
        let odiv = document.createElement('div'),//创建一个div
            styles = {
                width: '100px',
                height: '100px',
                overflowY: 'scroll'//让他有滚动条
            }, i, scrollbarWidth;
        for (let i in styles) odiv.style[i] = styles[i];
        document.body.appendChild(odiv);//把div添加到body中
        scrollbarWidth = odiv.offsetWidth - odiv.clientWidth;//相减
        odiv.remove();//移除创建的div
        return scrollbarWidth;//返回滚动条宽度
    }


    //轮播图
    slider(index) {
        Array.from(this.refs.dots.children).forEach(item => item.className = "");
        Array.from(this.refs.imgs.children).forEach(item => item.style.display = "none");
        this.refs.imgs.children[index].style.display = "inline-block";
        this.refs.imgs.children[index].style.animation = "1.5s gc";
        this.refs.dots.children[index].className = "active";
    }


    render() {
        return (
            <main>
                <Header />
                <section className="slider">
                    <ul className="imgs" ref="imgs">
                        {this.state.slider.map((item, index) =>
                            <li key={index}><img width={this.state.screenWidth} src={item} /></li>
                        )}
                    </ul>
                    <ul className="dots" ref="dots">
                        {this.state.slider.map((item, index) =>
                            <li onMouseMove={this.slider.bind(this, index)} key={index}></li>
                        )}
                    </ul>

                    <div className="vip-info">
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
                        </ul>

                        <div className="sign-in" onClick={() => location.href = "signin.html"}>
                            <i className="icon-signIn"></i><span>签到</span>
                        </div>
                    </div>
                </section>
                <section className="recommend">
                    <div className="re-game-content">
                        {this.state.recommend.map((item, index) =>
                            <div className="re-game" key={index} onClick={() => location.href = "/details.html"}>
                                <div className="game-img"><img src={item.img} /></div>
                                <div className="text">
                                    <p className="title">{item.title}</p>
                                    <p className="describe">{item.describe}</p>
                                </div>
                            </div>
                        )}
                    </div>
                    <div className="experience">
                        <img src="/images/step.png" />
                    </div>
                </section>
                <section className="trial">
                    <div className="tab">
                        <h2 className="title">游戏试玩</h2>
                        <ul className="tab-bar">
                            <li className="active">全部任务</li>
                            {this.state.trialBar.map((item, index) =>
                                <li key={index}>{item}</li>
                            )}
                        </ul>
                    </div>
                    <ul className="trial-content">
                        {this.state.trialCon.map((item, index) =>
                            <li key={index}>
                                <div className="game-image">
                                    <img src={item.img} />
                                </div>
                                <div className="text">
                                    <h2 className="game-title">{item.title}</h2>
                                    <p className="game-reward">
                                        <span className="type">{item.type}</span>
                                        <span className="reward">{item.reward}</span>
                                        <i className="icon-ub"></i>
                                    </p>
                                </div>
                            </li>
                        )}
                    </ul>
                    <span className="more">查看更多</span>
                </section>

                <section className="business">
                    <div className="tab">
                        <div className="title">合作商家</div>
                    </div>
                    <ul className="business-ul">
                        {this.state.business.map((item, index) =>
                            <li key={index}>
                                <img src={item} />
                            </li>
                        )}
                    </ul>
                </section>
                <Footer />
            </main>
        )
    }
}

ReactDOM.render(<Task />, document.getElementById('root'));

