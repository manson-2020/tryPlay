"use strict";


class Prize extends React.Component {

    constructor() {
        super();
        this.nav = ['虚拟奖品', '实物奖品']
    }

    showSearch(e) {
        this.refs.searchInput.style.display = "inline-block";
        e.target.parentNode.className = `${e.target.parentNode.className} icon-search`;
        e.target.style.display = "none";
    }

    hideSearch(e) {
        if (!e.target.value) {
            this.refs.searchText.style.display = "block";
            e.target.parentNode.className = e.target.parentNode.className.replace('icon-search', '');
            e.target.style.display = "none";
        }
    }

    submit(e) {
        let keyCode = e.keyCode || window.event.keyCode;
        if (keyCode == 13) {
            location.href = `https://www.baidu.com/#ie={inputEncoding}&wd=${e.target.value}`
        }
    }

    navigator(e) {
        if (e.target.className.indexOf('active') != -1) {
            return false;
        }

        Array.from(document.getElementsByClassName('order')[0].children).forEach(item => item.style.display = "none");
        Array.from(document.getElementsByClassName('header-nav')[0].children).forEach(item => {
            item.className = item.className.indexOf('active') != -1 ? item.className.replace('active', '') : item.className;
        })
        switch (e.target.innerText) {
            case "虚拟奖品":
                e.target.className = `${e.target.className} active`;
                Array.from(document.getElementsByClassName('virtual')).forEach(item => {
                    item.style.display = "block";
                });
                break;
            case "实物奖品":
                e.target.className = `${e.target.className} active`;
                Array.from(document.getElementsByClassName('reality')).forEach(item => {
                    item.style.display = "block";
                });
                break;
            default:
                e.target.className = `${e.target.className} active`;
                Array.from(document.getElementsByClassName('order')[0].children).forEach(item => {
                    item.style.display = "block";
                });
        }
    }

    render() {
        return (
            <main>
                <header>
                    <nav className="header-nav">
                        <a href="javascript:" onTouchStart={this.navigator.bind(this)} className="nav-list active">全部奖品</a>
                        {this.nav.map((item, index) =>
                            <a href="javascript:" onTouchStart={this.navigator.bind(this)} key={index} className="nav-list">{item}</a>
                        )}
                    </nav>
                </header>
                <section className="search">
                    <input onBlur={this.hideSearch.bind(this)} onKeyDown={this.submit.bind(this)} ref="searchInput" className="search-input" type="text" />
                    <p onTouchStart={this.showSearch.bind(this)} ref="searchText" className="search-text icon-search">搜索关键词</p>
                </section>
                <section className="order">
                    <div className="order-list virtual white-bg">
                        <p className="order-number">订单编号：10000000023</p>
                        <div className="prize">
                            <div className="prize-img"></div>
                            <div className="prize-info">
                                <h2 className="name">奖品名称奖品名称</h2>
                                <span className="price money yellow-font">5000.00</span>
                            </div>
                            <div className="prize-num multiply">1</div>
                        </div>
                        <ul className="state-ul">
                            <li className="state-li">
                                <p className="item">奖品状态</p>
                                <p className="val yellow-font">已发货</p>
                            </li>
                            <li className="partition-line"></li>
                            <li className="state-li">
                                <p className="item">兑奖时间</p>
                                <p className="val time">2017-05-20</p>
                            </li>
                            <li className="partition-line"></li>
                            <li className="state-li">
                                <p className="item">实际付款</p>
                                <p className="val num money yellow-font">0</p>
                            </li>
                        </ul>
                    </div>

                    <div className="order-list reality white-bg">
                        <p className="order-number">订单编号：10000000023</p>
                        <div className="prize">
                            <div className="prize-img"></div>
                            <div className="prize-info">
                                <h2 className="name">苹果X手机一部</h2>
                                <span className="price money yellow-font">5000.00</span>
                            </div>
                            <div className="prize-num multiply">1</div>
                        </div>
                        <ul className="state-ul">
                            <li className="state-li">
                                <p className="item">奖品状态</p>
                                <p className="val yellow-font">已发货</p>
                            </li>
                            <li className="partition-line"></li>
                            <li className="state-li">
                                <p className="item">兑奖时间</p>
                                <p className="val time">2017-05-20</p>
                            </li>
                            <li className="partition-line"></li>
                            <li className="state-li">
                                <p className="item">实际付款</p>
                                <p className="val num money yellow-font">0</p>
                            </li>
                        </ul>
                    </div>
                </section>
            </main>
        )
    }
}

ReactDOM.render(<Prize />, document.getElementById('root'));