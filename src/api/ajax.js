import Axios from "axios";
export default function ajax(url = "", params = {}, type = "get") {
    // console.log(url);
    // console.log(params);
    // console.log(type);
    let promise = null;
    return new Promise((resolve, reject) => {
        if (type === "get") {
            let paramsStr = "";
            Object.keys(params).forEach(key => {
                paramsStr += key + "=" + params[key] + "&";
            });
            paramsStr = paramsStr.slice(0, paramsStr.lastIndexOf("&"));
            url = url + "?" + paramsStr;
            promise = Axios.get(url)
        } else if (type === "post") {
            promise = Axios.post(url, params);
        }
        promise.then((res) => {
            resolve(res.data);
        }).catch((err) => {
            reject(err);
        })
    })
}