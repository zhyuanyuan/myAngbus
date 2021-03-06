var fs = require('fs');
rmdirSync('./node_modules'); // 你要删除的目录
console.log('done!');
/**
 * 删除 node 模块目录
 * @param {string} filepath 目录名
 */
function rmdirSync(filepath) {
	console.log(filepath);
  if (!fs.existsSync(filepath)) { // 无效路径退出
    return false;
  }
  var files = fs.readdirSync(filepath); // 获取目录下文件
  files.forEach(function (file, i) { // 遍历文件
    var subpath = filepath + '/' + file; // 拼接文件路径
    if (fs.statSync(subpath).isDirectory()) { // 判断目录还是文件
      var newpath = filepath + '/' + i; // 生成新的目录名
      fs.renameSync(subpath, newpath); // 重命名目录
      rmdirSync(newpath); // 递归遍历目录
    } else {
      fs.unlinkSync(subpath); // 删除文件
    }
  });
  fs.rmdirSync(filepath); // 删除目录
}