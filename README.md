## 添加

let user = new LoginInfo({

	"account": '13540050551',
	"password": 'administrator'

});
user.save();


## 查询
LoginInfo.find({"account":'13540050551'}, (err,docs) => {

	if(err) console.log(err)
	console.log(docs);
	console.log('查询完成！')

});

## 修改
LoginInfo.find({"_id" : "5d13221be9feba0dad6571f2"} , (err,docs) => {

	let data = docs[0];
    data.password = "administrator";
	data.save();
	console.log('修改完成！')

});

## 删除
LoginInfo.deleteOne({ "password": "administrator" }, (err) => {

	if (err) console.log(err);
	console.log('删除完成！')
    
});