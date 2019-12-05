"use strict";

class Signin extends React.Component {

    constructor() {
        super();
        let time = new Date();
        this.signedParams = [1, 2];
        this.thisY = time.getFullYear();
        this.thisM = time.getMonth();
        this.thisD = time.getDate();

        this.state = {
            signedParams: this.signedParams
        }
    }

    componentDidMount() {
        this.refs.calendar.innerHTML = this.calendar();
    }

    componentDidUpdate() {
        this.refs.calendar.innerHTML = this.calendar();
    }

    calendarEvent(event) {
        if (event == 'next') {
            this.thisM++;
            if (this.thisM > 11) {
                this.thisM = 0; this.thisY++;
            }
            if ((new Date().getMonth()) < this.thisM) {
                this.setState({
                    signedParams: []
                });
            } else {
                this.setState({
                    signedParams: [3, 4]
                });
            }

        } else {
            this.thisM--;
            if (this.thisM < 0) {
                this.thisM = 11; this.thisY--;
            }
            if ((new Date().getMonth()) < this.thisM) {
                this.setState({
                    signedParams: []
                });
            } else {
                this.setState({
                    signedParams: [5, 6]
                });
            }
        }
    }

    calendar() {
        let monthDays = [31, null, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31],
            pastMleft = [0, 1, 2, 3, 4, 5, 6];

        monthDays[1] = (this.thisY % 400 == 0 || (this.thisY % 4 == 0 && this.thisY % 100 != 0)) ? 29 : 28;
        let pastM = this.thisM - 1, realM = this.thisM + 1;
        let firstDW = new Date(this.thisY, this.thisM, 1).getDay(),
            thisMD = monthDays[this.thisM],
            pastMD = pastMleft[firstDW];
        let nextMD = 42 - thisMD - pastMD;
        pastM = pastM < 0 ? 11 : pastM
        let lists = [];
        let pastM_lastD = monthDays[pastM];

        let curDate = `${this.thisY}-${realM < 10 ? 0 + '' + realM : realM}-${this.thisD}`;
        for (let i = 0; i < pastMD; i++)
            lists.push(`<td class="blank">${pastM_lastD - pastMD + i + 1}</td>`)
        for (let i = 1; i <= thisMD; i++) {
            let str = i == this.thisD ? 'today' : i < this.thisD ? 'past' : 'future';
            lists.push(`<td class="unsigned ${str}">${i}</td>`);
            this.state.signedParams.forEach(item => {
                if (i == item) {
                    lists[i + pastMD - 1] = `<td class="signed-in ${str}">${i}</td>`;
                }
            });
        }
        for (let i = 0; i < nextMD; i++) {
            lists.push(`<td class="blank">${i + 1}</td>`)
        }
        let result = String();
        lists.forEach((item, index) => {
            if (index % 7 == 0) {
                lists[index] = `<tr>${lists[index]}`;
                lists[index + 6] = `${lists[index + 6]}</tr>`;
            }
            result += item;
        });
        let weeks = String();
        `日,一,二,三,四,五,六`.split(',').forEach((item, index) => {
            if (index == 0) {
                weeks += `<thead><tr>`
            }
            weeks += `<th class="title">${item}</th>`;
            if (index == 6) {
                weeks += `</tr></thead>`
            }

        })

        return `${weeks}<tbody>${result}</tobody>`;
    }

    isSigned() {
        if ((new Date().getMonth()) == this.thisM) {
            this.setState({
                signedParams: [...this.state.signedParams, this.thisD]
            });
        }
    }

    render() {
        return (
            <main>
                <Header />
                <section className="banner"></section>
                <section className="summary">
                    <main className="content">
                        <ul className="tab">
                            <li className="bar">
                                <span className="item">当前签到币数：</span>
                                <span className="value">0</span>
                            </li>
                            <li className="partition-line"></li>
                            <li className="bar">
                                <span className="item">昨日签到币数：</span>
                                <span className="value">1</span>
                            </li>
                            <li className="partition-line"></li>
                            <li className="bar">
                                <span className="item">当前金币总数:</span>
                                <span className="value">1000</span>
                            </li>
                        </ul>
                    </main>
                </section>
                <section className="sign-in-award">
                    <main className="content">
                        <div className="clock">
                            <div className="everyday">
                                <h2 className="title">每日签到</h2>
                                <a className="previous" href="javascript:" onClick={this.calendarEvent.bind(this, 'previous')}></a>
                                <span className="cur-date">{`${this.thisY}-${this.thisM + 1}-${this.thisD}`}</span>
                                <a className="next" href="javascript:" onClick={this.calendarEvent.bind(this, 'next')}></a>
                            </div>
                            <div className="calendar">
                                <table id="calendar" ref="calendar"></table>
                            </div>
                        </div>
                        <div className="award">
                            <div className="si-btn">
                                <h2 className="date-title">{`${new Date().getMonth() + 1}月${this.thisD}日`}</h2>
                                <a href="javascript:" onClick={this.isSigned.bind(this)} className="sign-btn">签到</a>
                            </div>
                            <ul className="award-ul">
                                <li className="award-li">
                                    <span className="award-tel">135****</span>
                                    <span className="award-type">签到奖励</span>
                                    <span className="award-amount">20000</span>
                                </li>
                                <li className="award-li">
                                    <span className="award-tel">135****</span>
                                    <span className="award-type">签到奖励</span>
                                    <span className="award-amount">20000</span>
                                </li>
                                <li className="award-li">
                                    <span className="award-tel">135****</span>
                                    <span className="award-type">签到奖励</span>
                                    <span className="award-amount">20000</span>
                                </li>
                                <li className="award-li">
                                    <span className="award-tel">135****</span>
                                    <span className="award-type">签到奖励</span>
                                    <span className="award-amount">20000</span>
                                </li>
                                <li className="award-li">
                                    <span className="award-tel">135****</span>
                                    <span className="award-type">签到奖励</span>
                                    <span className="award-amount">20000</span>
                                </li>
                                <li className="award-li">
                                    <span className="award-tel">135****</span>
                                    <span className="award-type">签到奖励</span>
                                    <span className="award-amount">20000</span>
                                </li>
                            </ul>
                        </div>
                    </main>
                    <main className="content">
                        <div className="sign-info">
                            <h2 className="title">签到奖不停</h2>
                            <ul className="user-info">
                                <li className="user-li">
                                    <span className="item">昵称：</span>
                                    <span className="value">小水</span>
                                </li>
                                <li className="user-li">
                                    <span className="item">等级：</span>
                                    <span className="value">lv1</span>
                                </li>
                                <li className="user-li">
                                    <span className="item">连续签到：</span>
                                    <span className="value">10天</span>
                                </li>
                                <li className="user-li">
                                    <span className="item">签到获得：</span>
                                    <span className="value">10币</span>
                                </li>
                            </ul>
                            <h3 className="lv2-title">连续签到工资</h3>
                            <p className="text">
                                <span className="routine">钻友每天签到可累计签到天数，</span>
                                <span className="important">签到工资=连续天数+等级</span>
                            </p>
                            <h3 className="lv2-title">昨日试玩收益</h3>
                            <p className="text">
                                <span className="routine">钻友昨日通过游戏获得的收入，按照1%的比例进行奖励</span>
                            </p>
                            <p className="rule">
                                <span className="param"></span>
                                <span className="symbol">+</span>
                                <span className="param"></span>
                                <span className="symbol">=</span>
                                <span className="param"></span>
                            </p>
                            <p className="submit">
                                <a href="javascript:" className="select-btn">查看签到公式</a>
                            </p>
                        </div>
                    </main>
                </section>
                <Footer />
            </main >
        )
    }
}

ReactDOM.render(<Signin />, document.getElementById('root'));