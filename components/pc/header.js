"use strict";

class Header extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            navTitle: [
                { name: '首页', link: '/' },
                { name: '任务', link: '/task.html' },
                { name: '帮助', link: '/help.html' },
                { name: '会员', link: '/vip.html' },
                { name: '新手', link: '/newbie.html' }
            ]
        };
    }

    componentDidMount() {
        let url = (location.href.split("//")[1]);
        let len = url.indexOf("/");
        let path = url.substring(len);
        let result = path.indexOf("?") !== -1 ? path.split("?")[0] : path;

        Array.from(this.refs.navigation.children).forEach(el => {
            if (result === el.getAttribute("href")) {
                el.setAttribute("class", `${el.getAttribute("class")} active`)
            }
        });
    }

    render() {
        return (
            <header className='header'>
                <nav className='headerNav'>
                    <a href="/" className='navlLeft'>LOGO</a>
                    <div className='navRight' ref="navigation">
                        {this.state.navTitle.map((value, index) =>
                            <a href={value.link} key={index} className='navRightA'> {value.name} </a>
                        )}
                    </div>
                </nav>
            </header>
        )
    }
}


