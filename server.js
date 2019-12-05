const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const config = {
	port: 3000,
	host: '0.0.0.0',
	homePage: 'home',
	pcPath: `${__dirname}/html/pc`,
	mobilePath: `${__dirname}/html/mobile`,
	mongodbHost: 'mongodb://localhost',
	mongodbPort: 27017,
	mongodbName: 'try'
}

const charset = res => res.writeHead(200, { 'Content-Type': 'text/html;charset=utf-8' });
const isMoblie = req => (req.headers["user-agent"].toLowerCase()).match(/(iphone|ipod|ipad|android)/);
const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(__dirname));

// ========================================= 逻辑处理 ==================================================

class Controllor {
	login(req, res) {
		let data = JSON.parse(req.body.data);
		//mongodb匹配数据
		LoginInfo.find({ "account": data.account }, (err, docs) => {
			if (err) throw Error(err);
			if (!docs.length) res.send(JSON.stringify({ code: '-1', msg: '账号不存在！' }));
			else if (data.password != docs[0].password) res.send(JSON.stringify({ code: '0', msg: '密码错误！' }))
			else res.send(JSON.stringify({ code: '1', msg: '登录成功' }))
		});
	}
}
const controllor = new Controllor;

// -------------------------------------- 链接MongoDB ---------------------------------------------------

/* //链接数据库
mongoose.connect(`${config.mongodbHost}:${config.mongodbPort}/${config.mongodbName}`, { useNewUrlParser: true },
	(err, db) => {
		if (err) console.error(err);
	});

let i = 0;
//定义文档模型
const loginInfoSchema = {
	"account": String,
	"password": String
};
let LoginInfo = mongoose.model("loginInfo", loginInfoSchema);
 */
// ================================================== 定义路由 ==================================================

let Router = express.Router();

Router.post('/login', controllor.login);
Router.get('/register', (req, res) => res.end('use Router /register\n'));
app.use('/api', Router);

//针对一个路由不同方法的不同处理请求 这里为get和post两种不同的请求
app.route('/article')
	.get((req, res) => {
		res.end('use route /article get\m');
	})
	.post((req, res) => {
		res.end('use route /article post\n');
	});

//测试页面
app.get('/test.html', (req, res) => {
	if (isMoblie(req)) {
		console.log("手机访问");
		res.end('手机')
	} else {
		res.sendFile(`${config.pcPath}/test.html`);
	}
});

//登录成功返回页面
app.get('/login_success', (req, res) => {
	res.end('<h1>login success</h1>');
});

//主页
app.get('/', (req, res) => { res.sendFile(`${config.pcPath}/${config.homePage}.html`); console.log(isMoblie(req))});

//会员中心
app.get('/vip.html', (req, res) => res.sendFile(`${config.pcPath}/vip.html`));

//帮助中心
app.get('/help.html', (req, res) => res.sendFile(`${config.pcPath}/help.html`));

//任务中心
app.get('/task.html', (req, res) => res.sendFile(`${config.pcPath}/task.html`));

//任务中心
app.get('/recharge.html', (req, res) => res.sendFile(`${config.pcPath}/recharge.html`));

//登录注册
app.get('/login_register.html', (req, res) => res.sendFile(`${config[`${isMoblie(req) ? 'mobile' : 'pc'}Path`]}/login_register.html`));

//任务详情
app.get('/details.html', (req, res) => res.sendFile(`${config.pcPath}/details.html`));

//签到
app.get('/signin.html', (req, res) => res.sendFile(`${config[`${isMoblie(req) ? 'mobile' : 'pc'}Path`]}/signin.html`));

//新手任务
app.get('/newbie.html', (req, res) => res.sendFile(`${config.pcPath}/newbie.html`));

//个人中心
app.get('/personal.html', (req, res) => res.sendFile(`${config.mobilePath}/personal.html`));

//订单中心
app.get('/order.html', (req, res) => res.sendFile(`${config.mobilePath}/order.html`));

//安全设置
app.get('/setting.html', (req, res) => res.sendFile(`${config.mobilePath}/setting.html`));

//我的奖品
app.get('/prize.html', (req, res) => res.sendFile(`${config.mobilePath}/prize.html`));


// ====================================== 服务监听 ==========================================

app.listen(config.port, config.host, () => {
	console.log(`listen to http://${config.host}:${config.port}`);
});
