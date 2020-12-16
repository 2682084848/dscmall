import { getCategoryLeft, getCategoryRight, getCategoryList, getDatailSwipe } from "@/api/api.js";
const actions = {
    // 商品分类
    actChangeNum(context, data) {
        context.commit("changeNumX", data)
    },
    async actChangeCategoryLeft(context) {
        let tesult = await getCategoryLeft();
        context.commit("changeCategoryLeft", tesult.data);
    },
    async actChangeCategoryRight(context, cat_id) {
        context.commit("changeShowLoading", false)
        let resultRight = await getCategoryRight(cat_id)
        // console.log(resultRight.data);
        let resultLeft = await getCategoryLeft()
        resultLeft.data.forEach(item => {
            if (item.cat_id == cat_id) {
                context.commit("changeAd", item.touch_catads)
            }
        })
        if (resultRight.status == "success") {
            context.commit("changeShowLoading", true)
            context.commit("changeCategoryRight", resultRight.data)
            context.commit("changeId", cat_id)
        }
    },
    async actChangeCategoryList(context, params) {
        // console.log(params.params);

        let resultList = await getCategoryList(params.url, params.params, "post");
        // console.log(resultList.data);
        context.commit("changeCategoryList", resultList.data)
    },

    // 商品详情
    async actChangeDateilSwipe(context, params) {
        // let lo = null
        let resultSwipe = await getDatailSwipe(params.url, params.params, params.type)
        // console.log(resultSwipe);
        context.commit("changDateilSwipe", resultSwipe.data)
    },
    setUserInfo(context,data){
        context.commit("setUserInfo",data)
    }
}
export default actions;