const recast = require("recast");

/*
// 读文件
recast.run(function(ast,printSource){
    printSource(ast)
})*/

/**
 * AST节点遍历
 */

recast.run(function(ast, printSource) {
  recast.visit(ast, {
      visitExpressionStatement: function({node}) {
        console.log(node)
        return false
      }
    });
});
// 想输出AST对象，可以console.log(node)
// 想输出AST对象对应的源码，可以printSource(node)
