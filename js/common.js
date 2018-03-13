// 前缀参数
// 前缀参数
var prefixParamUrl =  {
    urlPrefix : "http://www.argen3630.com:88/"
};
// API接口路径
var urlParam = {
    register: prefixParamUrl.urlPrefix + "admin.php/Company/register",                      // 注册接口
    login: prefixParamUrl.urlPrefix + "admin.php/Login/index",                              // 登录
    getPeopleInfo: prefixParamUrl.urlPrefix + "admin.php/Member/get",                       // 个人信息
    modifyPwd: prefixParamUrl.urlPrefix + "admin.php/Member/resetPassword",                 // 修改个密码
    orderList: prefixParamUrl.urlPrefix + "admin.php/Order/list1",                          // 获取订单列表,
    addOrder: prefixParamUrl.urlPrefix + "admin.php/Order/add",                             // 添加订单,
    deleteOrder: prefixParamUrl.urlPrefix + "admin.php/Order/delete",                       // 添加订单,
    memberSetReply: prefixParamUrl.urlPrefix + "admin.php/Member/setReply",                 // 富文本提交
    modifyPeoleInfo: prefixParamUrl.urlPrefix + "admin.php/Member/modify",                  // 修改个人信息
    getProductList: prefixParamUrl.urlPrefix + "admin.php/Product/list1",                   // 修改个人信息
    getProductDetaile: prefixParamUrl.urlPrefix + "admin.php/Product/get",                  // 获取套餐详情,
    getWebsiteList: prefixParamUrl.urlPrefix + "admin.php/Website/list1",                   // 获取站点列表,
    addWebsite: prefixParamUrl.urlPrefix + "admin.php/Website/add",                         // 增加站点,
    webSiteDelelte: prefixParamUrl.urlPrefix + "admin.php/Website/delete",                  // 删除站点,
    modifyWebSite: prefixParamUrl.urlPrefix + "admin.php/Website/modify",                   // 修改站点,
    memberList: prefixParamUrl.urlPrefix + "admin.php/Member/list1",                        // 客服管理列表
    addSupport: prefixParamUrl.urlPrefix + "admin.php/Member/add",                          // 增加客服人员
    getRoleDetail: prefixParamUrl.urlPrefix + "admin.php/Role/get",                         // 角色详情权限
    modifyRoleDetail: prefixParamUrl.urlPrefix + "admin.php/Role/modifyNodes",              // 修改角色详情权限
    getRoleList: prefixParamUrl.urlPrefix + "admin.php/Role/list1",                         // 角色列表
    addRole: prefixParamUrl.urlPrefix + "admin.php/Role/add",                               // 增加角色
    deleteRole: prefixParamUrl.urlPrefix + "admin.php/Role/delete",                         // 删除角色
    modifyRole: prefixParamUrl.urlPrefix + "admin.php/Role/modify",                         // 修改角色
    getCommentList: prefixParamUrl.urlPrefix + "admin.php/Comment/list1",                   // 获取评价记录列表
    getMemberWorkDetail: prefixParamUrl.urlPrefix + "admin.php/memberWork/get",             // 获取客服团队详情
    getMemberWorkList: prefixParamUrl.urlPrefix + "admin.php/memberWork/list1",             // 获取客服团队列表
    getCommentSetting: prefixParamUrl.urlPrefix + "admin.php/CommentSetting/get",           // 获取评价详情
    modifyCommentSetting: prefixParamUrl.urlPrefix + "admin.php/CommentSetting/modify",     // 修改评价详情
    getNotifies: prefixParamUrl.urlPrefix + "admin.php/CommentSetting/getNotifies",         // 获取通知对象姓名
    getNotifies: prefixParamUrl.urlPrefix + "admin.php/CommentSetting/getNotifies",         // 获取通知对象姓名
    addMember: prefixParamUrl.urlPrefix + "admin.php/CommentSetting/addMember",             //  添加 接收对象
    getCommentSetList: prefixParamUrl.urlPrefix + "admin.php/commentSetting /list1",        //  接收对象列表
    getVisitorList: prefixParamUrl.urlPrefix + "admin.php/Visitor/list1",                   //  访客列表
    getVisitorConfigList: prefixParamUrl.urlPrefix + "admin.php/VisitorConfig/list1",       //  访客配置列表
    getVisitorConfig: prefixParamUrl.urlPrefix + "admin.php/VisitorConfig/get",             //  访客配置详情，
    addVisitorConfig: prefixParamUrl.urlPrefix + "admin.php/VisitorConfig/add",             //  访客配置详情
    getMessageList: prefixParamUrl.urlPrefix + "admin.php/Message/list1",                   // 获取消息中心列表
    getMessageLogList: prefixParamUrl.urlPrefix + "admin.php/MessageLog/list1",             // 获取留言列表
    getMessageCategoryList: prefixParamUrl.urlPrefix + "admin.php/MessageCategory/list1",   // 获取对话列表
    addMessageCategory: prefixParamUrl.urlPrefix + "admin.php/MessageCategory/add",         // 添加对话分类
    getCategoryList: prefixParamUrl.urlPrefix + "admin.php/Category/list1",                 // 客服分组名称列表
    addCategory: prefixParamUrl.urlPrefix + "admin.php/Category/add",                       // 添加客服分组名称
    getListByCategory: prefixParamUrl.urlPrefix + "admin.php/Member/listByCategory",        // 客服分组的人员
    getWordCategoryList: prefixParamUrl.urlPrefix + "admin.php/WordCategory/list1",         // 客服常用组语列表
    addWordCategory: prefixParamUrl.urlPrefix + "admin.php/WordCategory/add",               // 添加常用语组,
    deleteWordCategory: prefixParamUrl.urlPrefix + "admin.php/WordCategory/delete",         // 删除常用语组,
    getCommonWordList: prefixParamUrl.urlPrefix + "admin.php/CommonWord/list1",             // 客服常用语列表
    addCommonWord: prefixParamUrl.urlPrefix + "admin.php/CommonWord/add",                   // 增加常用语
    deleteCommonWord: prefixParamUrl.urlPrefix + "admin.php/CommonWord/delete",             // 删除常用语
    saveHtmlWinodw: prefixParamUrl.urlPrefix + "admin.php/Code/add",                        // 保存聊天弹窗HTML
    addFileCategory: prefixParamUrl.urlPrefix + "admin.php/FileCategory/add",               // 添加常用文件
    deleteFileCategory: prefixParamUrl.urlPrefix + "admin.php/FileCategory/delete",         // 删除常用文件
    getFileCategoryList: prefixParamUrl.urlPrefix + "admin.php/FileCategory/list1",         // 文件常用列表
    addCommonFile: prefixParamUrl.urlPrefix + "admin.php/CommonFile/add",               // 添加常用分类文件
    deleteCommonFile: prefixParamUrl.urlPrefix + "admin.php/CommonFile/delete",         // 删除常用分类文件
    getCommonFileList: prefixParamUrl.urlPrefix + "admin.php/CommonFile/list1",         // 文件常用分类列表
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