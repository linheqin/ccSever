// 前缀参数
var prefixParamUrl =  {
    urlPrefix : "http://www.argen3630.com:88/"
};
// API接口路径
var urlParam = {
    register: prefixParamUrl.urlPrefix + "admin.php/Company/register",                  // 注册接口
    login: prefixParamUrl.urlPrefix + "admin.php/Login/index",                          // 登录
    getPeopleInfo: prefixParamUrl.urlPrefix + "admin.php/Member/get",                   // 个人信息
    modifyPwd: prefixParamUrl.urlPrefix + "admin.php/Member/resetPassword",             // 修改个密码
    orderList: prefixParamUrl.urlPrefix + "admin.php/Order/list1",                      // 获取订单列表,
    addOrder: prefixParamUrl.urlPrefix + "admin.php/Order/add",                         // 添加订单,
    deleteOrder: prefixParamUrl.urlPrefix + "admin.php/Order/delete",                   // 添加订单,
    memberSetReply: prefixParamUrl.urlPrefix + "admin.php/Member/setReply",             // 富文本提交
    modifyPeoleInfo: prefixParamUrl.urlPrefix + "admin.php/Member/modify",              // 修改个人信息
    getProductList: prefixParamUrl.urlPrefix + "admin.php/Product/list1",               // 修改个人信息
    getProductDetaile: prefixParamUrl.urlPrefix + "admin.php/Product/get",              // 获取套餐详情,
    getWebsiteList: prefixParamUrl.urlPrefix + "admin.php/Website/list1",               // 获取站点列表,
    addWebsite: prefixParamUrl.urlPrefix + "admin.php/Website/add",                     // 增加站点,
    webSiteDelelte: prefixParamUrl.urlPrefix + "admin.php/Website/delete",              // 删除站点,
    modifyWebSite: prefixParamUrl.urlPrefix + "admin.php/Website/modify",               // 修改站点,
    memberList: prefixParamUrl.urlPrefix + "admin.php/Member/list1",                    // 客服管理列表
    addSupport: prefixParamUrl.urlPrefix + "admin.php/Member/add",                      // 增加客服人员
    getRoleDetail: prefixParamUrl.urlPrefix + "admin.php/Role/get",                     // 角色详情权限
    modifyRoleDetail: prefixParamUrl.urlPrefix + "admin.php/Role/modifyNodes",          // 修改角色详情权限
    getRoleList: prefixParamUrl.urlPrefix + "admin.php/Role/list1",                     // 角色列表
    addRole: prefixParamUrl.urlPrefix + "admin.php/Role/add",                           // 增加角色
    deleteRole: prefixParamUrl.urlPrefix + "admin.php/Role/delete",                     // 删除角色
    modifyRole: prefixParamUrl.urlPrefix + "admin.php/Role/modify",                     // 修改角色
    getCommentList: prefixParamUrl.urlPrefix + "admin.php/Comment/list1",               // 获取评价记录列表
    getMemberWorkDetail: prefixParamUrl.urlPrefix + "admin.php/memberWork/get",         // 获取客服团队详情
    getMemberWorkList: prefixParamUrl.urlPrefix + "admin.php/memberWork/list1",         // 获取客服团队列表
    getCommentSetting: prefixParamUrl.urlPrefix + "admin.php/CommentSetting/get",       // 获取评价详情
    modifyCommentSetting: prefixParamUrl.urlPrefix + "admin.php/CommentSetting/modify", // 修改评价详情
    getNotifies: prefixParamUrl.urlPrefix + "admin.php/CommentSetting/getNotifies",     // 获取通知对象姓名
    getNotifies: prefixParamUrl.urlPrefix + "admin.php/CommentSetting/getNotifies",     // 获取通知对象姓名
    addMember: prefixParamUrl.urlPrefix + "admin.php/CommentSetting/addMember",         //  添加 接收对象
    getCommentSetList: prefixParamUrl.urlPrefix + "commentSetting /list1",              //  添加 接收对象列表
}
// 获取地址参数
function getQueryString(name) {
    var pos,str,para,parastr;
    var array =[]
    str = document.referrer;
    parastr = str.split("?")[1];
    var arr = parastr.split("&");
    for (var i=0;i<arr.length;i++){
        array[arr[i].split("=")[0]]=arr[i].split("=")[1];
    }
    return array;
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