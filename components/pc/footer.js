"use strict";


class Footer extends React.Component {
    constructor() {
        super();

        let link = [];
        for (let i = 0; i < 15; i++) {
            link.push('宝石星球');
        }

        this.state = {
            link: link
        }
    }
    render() {
        return (
            <footer className="footer">
                <div className="footer-top">
                    <div className="consult">
                        <div className="left-logo"></div>
                        <div className="right-btn">在线咨询</div>
                    </div>
                    <div className="consult-info">
                        <div className="describe">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. Proin gravida dolor sit amet lacus accumsan et viverra justo commodo. Proin sodales pulvinar sic tempor. pronin sapien nunc accuan eget.
                        </div>
                        <div className="remarks">
                            <p>(周一至周六10:30-20:30,周日&法定假日休息/不定期在线)</p>
                            <br />
                            <p>其他时间可发邮件咨询</p>
                            <p>hi@mail.nicetheme.cn</p>
                        </div>
                    </div>
                    <div className="identifier">@2019-020036260660BY</div>
                </div>
                <div className="footer-bottom">
                    <h2>友情链接</h2>
                    <ul>
                        {this.state.link.map((value, index) =>
                            <li key={index}>{value}</li>
                        )}
                    </ul>
                </div>
            </footer>
        )
    }
}