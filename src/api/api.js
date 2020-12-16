import ajax from "./ajax";
const Base_URL = "/api";
const Base_URL2 = "http://localhost:3000/adminapi";
export const getHomeList = (url, params) => {
    return ajax(Base_URL + url, params)
}
export const getHomeList1 = (params) => {
    return ajax(Base_URL + "/visual/visual_second_category", params)
}
export const getCategoryLeft = () => {
    return ajax(Base_URL + "/catalog/list")
}
export const getCategoryRight = (cat_id) => {
    // console.log(cat_id);  //858
    // console.log( Base_URL + "/catalog/list" + cat_id);
    return ajax(Base_URL + "/catalog/list/" + cat_id)
}
export const getCategoryList = (url, params, type) => {
    // console.log(Base_URL + url + params + type);
    // console.log(ajax(Base_URL + url + params + type));
    return ajax(Base_URL + url, params, type);
}

// 商品详情
export const getDatailSwipe = (url, params,type) => {
    return ajax(Base_URL + url,params, type);
}
// 手机获取验证码
export const getPhoneCode = (url,params,type)=> ajax(Base_URL2+url,params,type);
// 短信登录
export const getPhoneLogin = (url,params,type)=> ajax(Base_URL2+url,params,type);
// 账号登录
export const getLogin = (url,params,type) => ajax(Base_URL2 + url,params,type);