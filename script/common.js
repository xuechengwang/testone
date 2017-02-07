/*
 * intel公共文件
 */
// var BASE_URL = "http://intel.apithink.com"; //页面跳转URL 
   var INTEL_API_URL_B = "http://42.159.145.69:3005/api"; //数据请求URL(42的是测试环境)
   var INTEL_API_URL = "http://54.223.191.19/api"; //数据请求URL(精英汇正式地址已换成54了，亲们注意了)
// var INTEL_API_URL = "http://52.198.155.166/api"; //数据请求URL(正式环境，csp已占用)
var BASE_URL = "file:///E:/中物/intel";//本地路径
// 获取时间格式 (精确到天)
function formatTime(timeStr){
    var str = timeStr.substr(0, 10);
    str = str.replace(/-/g,"/");
    return str;
}

