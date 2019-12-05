"use strict";

class Order extends React.Component {
    render() {
        return (
            <main>
                <nav className="nav">
                    <a className="bar" href="javascript:">
                        <div className="icon active"></div>
                        <p className="word">全部</p>
                    </a>
                    <a className="bar" href="javascript:">
                        <div className="icon"></div>
                        <p className="word">充值订单</p>
                    </a>
                    <a className="bar" href="javascript:">
                        <div className="icon"></div>
                        <p className="word">提现订单</p>
                    </a>
                    <a className="bar" href="javascript:">
                        <div className="icon"></div>
                        <p className="word">取消</p>
                    </a>
                </nav>

                <section className="completed recharge order-list">
                    <div className="details">
                        <h2 className="h2-title">会员充值</h2>
                        <div className="discribe">
                            <span className="order-num">订单号：100000001</span>
                            <span className="order-time">时间：2019-7-5  10:02:30</span>
                        </div>
                    </div>
                    <div className="summary">
                        <h3 className="h3-title">订单金额(元)</h3>
                        <span className="number">20.00</span>
                    </div>
                </section>

                <section className="cancelled cash-out order-list">
                    <div className="details">
                        <h2 className="h2-title">提现订单</h2>
                        <div className="discribe">
                            <span className="order-num">订单号：100000001</span>
                            <span className="order-time">时间：2019-7-5  10:02:30</span>
                        </div>
                    </div>
                    <div className="summary">
                        <h3 className="h3-title">订单金额(元)</h3>
                        <span className="number">20.00</span>
                    </div>
                </section>
            </main>
        );
    }
}

ReactDOM.render(<Order />, document.getElementById('root'));