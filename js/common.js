// 前缀参数
var prefixParamUrl =  {
    urlPrefix : "http://www.argen3630.com:88/"
};
// API接口路径
var urlParam = {
    register: prefixParamUrl.urlPrefix + "admin.php/Company/register",              // 注册接口
    login: prefixParamUrl.urlPrefix + "admin.php/Login/index",                      // 登录
    getPeopleInfo: prefixParamUrl.urlPrefix + "admin.php/Member/get",               // 个人信息
    modifyPwd: prefixParamUrl.urlPrefix + "admin.php/Member/resetPassword",         // 修改个密码
    orderList: prefixParamUrl.urlPrefix + "admin.php/Order/list1",                  // 获取订单列表,
    modifyPeoleInfo: prefixParamUrl.urlPrefix + "admin.php/Member/modify",          // 修改个人信息
    getProductList: prefixParamUrl.urlPrefix + "admin.php/Product/list1",           // 修改个人信息
    getProductDetaile: prefixParamUrl.urlPrefix + "admin.php/Product/get",          // 获取套餐详情,
    getWebsiteList: prefixParamUrl.urlPrefix + "admin.php/Website/list1",           // 获取站点列表,
    addWebsite: prefixParamUrl.urlPrefix + "admin.php/Website/add",                 // 增加站点,
    webSiteDelelte: prefixParamUrl.urlPrefix + "admin.php/Website/delelte",         // 删除站点,
    modifyWebSite: prefixParamUrl.urlPrefix + "admin.php/Website/modify",           // 修改站点,
}
// 获取地址参数
function getQueryString(name) {
    var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");
    var r = parent.window.location.search.substr(1).match(reg);
    if (r != null) return unescape(r[2]);
    return null;
}
// 获取当前iframe的地址参数
function getIframeQueryString(name) {
    var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");
    var r = window.location.search.substr(1).match(reg);
    if (r != null) return unescape(r[2]);
    return null;
}
// 弹创提示
function msgMask(val,type){
    if(type == 1) {
        parent.layer.msg(val,{
            shade: 0.2,
            time: 1000,
        });
    } else {
        layer.msg(val,{
            shade: 0.2,
            time: 1000,
        });
    }
}