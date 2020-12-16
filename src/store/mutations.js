// const { default: state } = require("./state")
import {MessageBox} from "mint-ui";
const mutations = {
    // 分类详情
    changeCategoryLeft(state, data) {
        state.categoryLeftDatas = data
    },
    changeCategoryRight(state, data) {
        state.categoryRightDatas = data
    },
    changeAd(state, data) {
        state.ad = data
    },
    changeShowLoading(state, data) {
        state.showLoading = data
    },
    changeId(state, data) {
        state.cat_id = data
    },
    changeCategoryList(state, data) {
        if (data.length > 0) {
            state.categoryListDatas = state.categoryListDatas.concat(data);
        }
    },
    changeToggleStyle(state, data) {
        state.toggleStyle = data
    },

    // 商品详情
    changDateilSwipe(state, data) {
        state.dateilSwipe = data
    },
    // 添加本地储存
    changShoppings(state, data) {
        if (data) {
            state.cartDatas.unshift(data);
        }
        localStorage.setItem("carts", JSON.stringify(state.cartDatas));
    },
    // 点击选择框
    changSelectStatus(state, data) {
        let selectStatus = state.cartDatas.every(item => {
            return item.isSelect == true
        })
        state.selectAll = selectStatus
        state.cartDatas[data.index] = data.cart
        localStorage.setItem("carts", JSON.stringify(state.cartDatas))
        localStorage.setItem("selectAll", state.selectAll)
    },
    // 点击全选按钮
    changeSelectAllStatus(state) {
        state.selectAll = !state.selectAll;
        state.cartDatas.forEach(item => {
            item.isSelect = state.selectAll
        });
        localStorage.setItem("carts", JSON.stringify(state.cartDatas));
        localStorage.setItem("selectAll", state.selectAll)
    },
    // 购物车 ++ 按钮
    addCart(state, index) {
        state.cartDatas[index].quantity++;
        localStorage.setItem("carts", JSON.stringify(state.cartDatas))
    },
    // 购物车 -- 按钮
    jianCart(state, index) {
        if (state.cartDatas[index].quantity == 1) {
            state.cartDatas[index].quantity = 1;
        } else {
            state.cartDatas[index].quantity--;
            localStorage.setItem("carts", JSON.stringify(state.cartDatas))
        }
    },
    // 点击删除按钮
    deleCart(state,index){
        MessageBox.confirm('亲，你确定要放弃该宝贝吗？').then(()=>{
            console.log('点击确定按钮');
            state.cartDatas.splice(index,1);
            localStorage.setItem("carts",JSON.stringify(state.cartDatas));
        },()=>{
            console.log('点击取消按钮');
        })
    },
    searchKeywords(state, data) {
        if (data) {
            for (var key in state.searchKeywords) {
                if (data == state.state.searchKeywords[key]) {
                    state.searchKeywords.unshift(data)
                }
            }
            state.searchKeywords.unshift(data)
        }
        localStorage.setItem("keywords", JSON.stringify(state.searchKeywords))
    },
    deleKeywords(state) {
        state.searchKeywords = [];
        localStorage.setItem("keywords", JSON.stringify(state.searchKeywords));
    },
    setUserInfo(state,data){
        console.log(data);
        console.log(state);
        state.userInfo = data,
        localStorage.setItem("userInfo",JSON.stringify(state.userInfo))
    }
}
export default mutations;