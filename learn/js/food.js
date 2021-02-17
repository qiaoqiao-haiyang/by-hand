//所有的js文件书写代码都是全局作用域

// function fn(){
//         //局部作用域
//         var n=1
// }
// fn()

//自调用函数   开启一个新的作用域，避免命名冲突
(function () {


    var position = 'absolute';
    //记录上一次创建的食物 为删除做准备
    var elements = []



    function Food(options) {
        options = options || {}
        this.x = options.x || 0;
        this.y = options.y || 0;
        this.width = options.width || 20;
        this.height = options.height || 20;
        this.color = options.color || 'green'
    }
    var position = 'absolute';
    Food.prototype.render = function (map) {
        remove()

        //动态创建div
        this.x = Tools.getRandom(0, map.offsetWidth / this.width - 1) * this.width
        this.y = Tools.getRandom(0, map.offsetHeight / this.height - 1) * this.height

        var div = document.createElement('div')
        map.appendChild(div)

        elements.push(div)
        //设置div的样式
        div.style.position = position
        div.style.left = this.x + 'px';
        div.style.top = this.y + 'px';
        div.style.width = this.width + 'px'
        div.style.height = this.height + 'px'
        div.style.backgroundColor = this.color
    }

    function remove() {
        for (var i = elements.length - 1; i >= 0; i--) {
            //删除div
            elements[i].parentNode.removeChild(elements[i])
            //删除数组中的元素
            elements.splice(i, 1)
        }
    }

    //把food构造函数让外部可以访问
    window.Food=Food;
})()


var map = document.getElementById('map');
var food = new Food()
food.render(map);

