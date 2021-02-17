//自调用函数开启一个新的局部作用域，防止命名冲突
(function(){

    var position ='absolute'
    function Snake(options){
        options=options || {};
        this.width = options.width || 20;
        this.height = options.height ||20;
        //运动方向
        this.driection = options.direction||'right'
        //蛇的身体
        this.body = [
            {x:3,y:2,color:'red'},
            {x:2,y:2,color:'blue'},
            {x:1,y:2,color:'blue'}
        ]
    }
    Snake.prototype.render=function(map){
        //把每一个蛇的身体渲染到地图上
        for(var i=0,len=this.body;i<len;i++){
            var object = this.body[];
            var div =document.createElement('div')
            map.appendChild(div);
            div.style.position= position;
            div.style.width=this.width +"px";
            div.style.height=this.height +"px";
            div.style.left = object.x*this.width +"px"
            div.style.top = object.x*this.height +"px"
            div.style.backgroundColor = object.color;

        }
    }
    // 暴露构造函数给外部
    window.Snake = Snake
})()
//测试代码
var map = document.getElementById('map')
var snake = new Snake();
snake.render(map)