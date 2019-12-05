'use strict';

class Gverify {
    constructor(options) {
        this.options = { //默认options参数值
            id: "", //容器Id
            size: 5, //验证码长度
            canvasId: "verifyCanvas", //canvas的ID
            width: "100", //默认canvas宽度
            height: "30", //默认canvas高度
            type: "blend", //图形验证码默认类型blend:数字字母混合类型、number:纯数字、letter:纯字母
            code: "",
            numArr: "0,1,2,3,4,5,6,7,8,9".split(","),
            letterArr: this.getAllLetter()
        }
        if (Object.prototype.toString.call(options) == "[object Object]") {//判断传入参数类型
            for (let i in options) { //根据传入的参数，修改默认参数值
                this.options[i] = options[i];
            }
        } else {
            this.options.id = options;
        }

        this._init();
        this.refresh();
    }

    //初始化方法
    _init() {
        let con = document.getElementById(this.options.id);
        let canvas = document.createElement("canvas");
        this.options.width = con.offsetWidth > 0 ? con.offsetWidth : "100";
        this.options.height = con.offsetHeight > 0 ? con.offsetHeight : "30";
        canvas.id = this.options.canvasId;
        canvas.width = this.options.width;
        canvas.height = this.options.height;
        canvas.style.cursor = "pointer";
        canvas.style.borderRadius = "6px";
        canvas.innerHTML = "您的浏览器版本不支持canvas";
        con.appendChild(canvas);
        let parent = this;
        canvas.onclick = function () {
            parent.refresh();
        }
    }

    //生成一个随机数
    randomNum(min, max) {
        return Math.floor(Math.random() * (max - min) + min);
    }

    //生成一个随机色
    randomColor(min, max) {
        let r = this.randomNum(min, max);
        let g = this.randomNum(min, max);
        let b = this.randomNum(min, max);
        return "rgb(" + r + "," + g + "," + b + ")";
    }

    getAllLetter() {
        let letterStr = "a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,A,B,C,D,E,F,G,H,I,J,K,L,M,N,O,P,Q,R,S,T,U,V,W,X,Y,Z";
        return letterStr.split(",");
    }

    //生成验证码
    refresh() {
        this.options.code = "";
        let canvas = document.getElementById(this.options.canvasId);
        let ctx, txtArr;
        if (canvas.getContext) {
            ctx = canvas.getContext('2d');
        } else {
            return;
        }

        ctx.textBaseline = "middle";

        ctx.fillStyle = this.randomColor(180, 240);
        ctx.fillRect(0, 0, this.options.width, this.options.height);

        if (this.options.type == "blend") { //判断验证码类型
            txtArr = this.options.numArr.concat(this.options.letterArr);
        } else if (this.options.type == "number") {
            txtArr = this.options.numArr;
        } else {
            txtArr = this.options.letterArr;
        }

        for (let i = 1; i <= this.options.size; i++) {
            let txt = txtArr[this.randomNum(0, txtArr.length)];
            this.options.code += txt;
            ctx.font = this.randomNum(this.options.height / 2, this.options.height) + 'px SimHei'; //随机生成字体大小
            ctx.fillStyle = this.randomColor(50, 160); //随机生成字体颜色
            ctx.shadowOffsetX = this.randomNum(-3, 3);
            ctx.shadowOffsetY = this.randomNum(-3, 3);
            ctx.shadowBlur = this.randomNum(-3, 3);
            ctx.shadowColor = "rgba(0, 0, 0, 0.3)";
            let x = this.options.width / (this.options.size + 1) * i - 12;
            let y = this.options.height / 2;
            let deg = this.randomNum(-30, 30);
            /**设置旋转角度和坐标原点**/
            ctx.translate(x, y);
            ctx.rotate(deg * Math.PI / 180);
            ctx.fillText(txt, 0, 0);
            /**恢复旋转角度和坐标原点**/
            ctx.rotate(-deg * Math.PI / 180);
            ctx.translate(-x, -y);
        }
        //
        for (let i = 0; i < 4; i++) {
            ctx.strokeStyle = this.randomColor(40, 180);
            ctx.beginPath();
            ctx.moveTo(this.randomNum(0, this.options.width), this.randomNum(0, this.options.height));
            ctx.lineTo(this.randomNum(0, this.options.width), this.randomNum(0, this.options.height));
            ctx.stroke();
        }
        //
        for (let i = 0; i < this.options.width / 4; i++) {
            ctx.fillStyle = this.randomColor(0, 255);
            ctx.beginPath();
            ctx.arc(this.randomNum(0, this.options.width), this.randomNum(0, this.options.height), 1, 0, 2 * Math.PI);
            ctx.fill();
        }
    }

    //
    validate(code) {
        code = code.toLowerCase();
        let v_code = this.options.code.toLowerCase();
        return code == v_code ? true : false;
    }
}