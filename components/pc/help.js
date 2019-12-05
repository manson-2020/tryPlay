"use strict";

class Help extends React.Component {
    constructor() {
        super();
        let list = [];
        for (let i = 0; i < 5; i++) {
            list.push('模板内容仅供参考，包图网是正版商业图库，所有123');
        }
        this.state = {
            list: list
        }
    }
    render() {
        return (
            <div>
                <Header />
                <section className="banner">
                    <div className="text">
                        <p className="title">帮助中心</p>
                        <p className="describe">在这里，你可以找到更多的教程</p>
                    </div>
                </section>
                <section className="search">
                    <div className="search-content">
                        <input className="search-input" placeholder="点击搜索你想要的" />
                        <span className="search-btn">点击搜索</span>
                    </div>
                </section>
                <section className="list">
                    <ul className="left-list">
                        <li className="list-title">游戏技巧</li>
                        {this.state.list.map((item, index) =>
                            <li key={index} className="list-text">{item}</li>
                        )}
                    </ul>
                    <ul className="right-list">
                        <li className="list-title">操作教程</li>
                        {this.state.list.map((item, index) =>
                            <li key={index} className="list-text">{item}</li>
                        )}</ul>
                </section>
                <Footer />
            </div>
        )
    }
}

ReactDOM.render(<Help />, document.getElementById("root"))