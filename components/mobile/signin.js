"use strict";

class Signin extends React.Component {
    constructor() {
        super();
        let time = new Date();
        this.state = {
            isUpdated: false
        }
        this.thisY = time.getFullYear();
        this.thisM = time.getMonth();
        this.thisD = time.getDate();

        this.startX;
        this.startY;
        this.moveX;
        this.moveY;
    }

    componentDidMount() {
        this.refs.calendar.innerHTML = this.calendar();
    }

    componentDidUpdate() {
        this.refs.calendar.innerHTML = this.calendar();
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
            if (i == 9 || i == 10) {
                lists.push(`<td class="signed-in ${str} day"><span>${i < 10 ? `0${i}` : i}</span></td>`);
            } else {
                lists.push(`<td class="unsigned ${str} day"><span>${i < 10 ? `0${i}` : i}</span></td>`);
            }
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

        return `<table class="calendar-table">${weeks}<tbody>${result}</tobody></table`;
    }

    calendarEvent(e) {
        this.refs.calendar.style.display = "none";
        setTimeout(() => {
            this.refs.calendar.style.display = "block";
        }, 3)
        if (e.target.className.indexOf('next') != -1) {
            this.thisM++;
            if (this.thisM > 11) {
                this.thisM = 0; this.thisY++;
            }
            this.refs.calendar.style.animation = "0.3s rightTransform"
        } else {
            this.thisM--;
            if (this.thisM < 0) {
                this.thisM = 11; this.thisY--;
            }
            this.refs.calendar.style.animation = "0.3s leftTransform"
        }
        this.setState({ isUpdated: true });
    }

    swiper(e) {
        this.refs.calendar.style.display = "none";
        setTimeout(() => {
            this.refs.calendar.style.display = "block";
        }, 3)
        switch (e.type) {
            case 'touchstart':
                this.moveX = 0;
                this.moveY = 0;
                this.startX = e.touches[0].clientX;
                this.startY = e.touches[0].clientY;
                break;
            case 'touchmove':
                this.moveX = e.touches[0].clientX;
                this.moveY = e.touches[0].clientY;
                break;
            default:
                if (this.moveX) {
                    let X = this.moveX - this.startX;
                    let Y = this.moveY - this.startY;
                    if (Math.abs(X) > Math.abs(Y) && X > 0) {
                        this.thisM--;
                        if (this.thisM < 0) {
                            this.thisM = 11; this.thisY--;
                        }
                        this.refs.calendar.style.animation = "0.3s leftTransform";
                    } else if (Math.abs(X) > Math.abs(Y) && X < 0) {
                        this.thisM++;
                        if (this.thisM > 11) {
                            this.thisM = 0; this.thisY++;
                        }
                        this.refs.calendar.style.animation = "0.3s rightTransform";
                    }
                    this.setState({ isUpdated: true });
                }
        }
    }

    render() {
        return (
            <main>
                <section className="background"></section>
                <section className="summary">
                    <div className="summary-list">
                        <h1 className="number">5</h1>
                        <p className="text">当前签到币数</p>
                    </div>
                    <div className="summary-list">
                        <h1 className="number">20</h1>
                        <p className="text">昨日签到币数</p>
                    </div>
                    <div className="summary-list">
                        <h1 className="number">1000</h1>
                        <p className="text">当前金币总数</p>
                    </div>
                </section>
                <section onTouchStart={this.swiper.bind(this)} onTouchMove={this.swiper.bind(this)} onTouchEnd={this.swiper.bind(this)} className="signin-calendar">
                    <div className="date">
                        <a className="previous" onTouchStart={this.calendarEvent.bind(this)} href="javascript:"></a>
                        <span className="cur-date">{`${this.thisY}/${(this.thisM + 1) < 10 ? `0${this.thisM + 1}` : this.thisM + 1}`}</span>
                        <a className="next" onTouchStart={this.calendarEvent.bind(this)} href="javascript:"></a>
                    </div>
                    <div ref="calendar" className="calendar"></div>
                </section>
                <section className="signin-btn">我要签到</section>
            </main>
        )
    }
}

ReactDOM.render(<Signin />, document.getElementById('root'));