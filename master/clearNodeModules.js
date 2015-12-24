var fs = require('fs');
rmdirSync('./node_modules'); // ��Ҫɾ����Ŀ¼
console.log('done!');
/**
 * ɾ�� node ģ��Ŀ¼
 * @param {string} filepath Ŀ¼��
 */
function rmdirSync(filepath) {
	console.log(filepath);
  if (!fs.existsSync(filepath)) { // ��Ч·���˳�
    return false;
  }
  var files = fs.readdirSync(filepath); // ��ȡĿ¼���ļ�
  files.forEach(function (file, i) { // �����ļ�
    var subpath = filepath + '/' + file; // ƴ���ļ�·��
    if (fs.statSync(subpath).isDirectory()) { // �ж�Ŀ¼�����ļ�
      var newpath = filepath + '/' + i; // �����µ�Ŀ¼��
      fs.renameSync(subpath, newpath); // ������Ŀ¼
      rmdirSync(newpath); // �ݹ����Ŀ¼
    } else {
      fs.unlinkSync(subpath); // ɾ���ļ�
    }
  });
  fs.rmdirSync(filepath); // ɾ��Ŀ¼
}