<!-- 登录页面 -->
<template>
<div class='login-wrap'>
    <div class="login-content">
        <div class="logo">
            <img :src="logo" alt="">
        </div>
        <div class="tabs">
            <div class="tabs-item" :class="{active:loginFlag==0}" @click="changeLoginTabs(0)">短信登录</div>
            <div class="tabs-item" :class="{active:loginFlag==1}" @click="changeLoginTabs(1)">账号登录</div>
        </div>
        <div class="tabs-content">
            <div class="tabs-message" v-if="loginFlag ==0">
                <div class="tabs-input">
                    <input type="text" placeholder="验证码" name="captcha" v-model="captcha">
                    <img src="http://localhost:3000/adminapi/captcha" @click="getCaptcha" ref="captcha" alt="">
                </div>
                <div class="tabs-input">
                    <input type="text" placeholder="请输入手机号" name="phone" maxlength="11" v-model.number="phone">
                    <button v-if="!num" @click="getPhoneCode">{{text}}</button>
                    <button v-else>已发送{{num}}s</button>
                </div>
                <div class="tabs-input">
                    <input type="text" placeholder="输入短信验证码" style="width:100%" name="code" v-model="code">
                </div>
                <div class="tabs-input">
                    <input type="button" @click="phoneLoginFn" style="width:100%;background:#f44;color:#fff" value="短信登录">
                </div>
            </div>
        </div>
        <div class="tabs-content tabs-login" v-if="loginFlag==1">
            <div class="tabs-message">
                <div class="tabs-input">
                    <input type="text" placeholder="验证码" name="captcha" v-model="captcha">
                    <img src="http://localhost:3000/adminapi/captcha" @click="getCaptcha" ref="captcha" alt="">
                </div>
                <div class="tabs-input">
                    <input type="text" placeholder="用户名" v-model="UserName" name="UserName">
                </div>
                <div class="tabs-input">
                    <input type="password" placeholder="密码" name="login_password" v-model="password">
                </div>
                <div class="tabs-input">
                    <input type="button" style="width:100%;background:#f44;color:#fff" value="用户登录" @click="login">
                </div>
            </div>
        </div>
        <div class="toRegister">
            <router-link to="/register">没有账号，去注册</router-link>
        </div>
    </div>
    <Footer />
</div>
</template>
<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';
import {getPhoneCode,getPhoneLogin,getLogin} from "@/api/api";
import Footer from "@/components/Footer"
export default {
//import引入的组件需要注入到对象中才能使用
components: {
    Footer,
},
data() {
//这里存放数据
return {
    logo:require("@/assets/logo.png"),
    loginFlag:0,
    num:0,
    phone:"",
    timer:null,
    text:"获取验证码",
    code:"",
    captcha:'',
    UserName:'',
    password:''
};
},
//监听属性 类似于data概念
computed: {
    validataPhone(){
        return /^1[3|5|6|7|8][0-9]{9}$/.test(this.phone);
    }
},
//监控data中的数据变化
watch: {},
//方法集合
methods: {
changeLoginTabs(index){
    this.loginFlag = index;
},
getCaptcha(){
    console.log(this.$refs.captcha);
    this.$refs.captcha.src = "http://localhost:3000/adminapi/captcha?t="+new Date().getTime();
},
async getPhoneCode(){
    if(this.validataPhone){
        this.num = 10;
        this.text = "重新获取验证码";
        this.timer = setInterval(()=>{
            this.num--;
            if(this.num == 0){
                clearInterval(this.timer);
            }
        },1000)
    }else{
        alert("手机号格式不正确");
    }
    let result = await getPhoneCode("/getcode",this.phone,"post");
    console.log(result);
},
async phoneLoginFn(){
    // console.log(result);
    var params = {
        captcha: this.captcha,
        phone:this.phone,
        code:this.code,
    }
    let result = await getPhoneLogin("/phonelogin",params,"post");
    if(result.status == 200){
        this.$router.push("/home");
    }
},
async login(){
    var params = {
        captcha:this.captcha,
        user_name:this.UserName,
        login_password:this.password
    };
    let result = await getLogin("/login",params,"post");
    console.log(this.$store);
    this.$store.dispatch("setUserInfo",result);
    console.log(result);
    if(result.status ==200){
        this.$router.push("/home");
    }
}
},
beforeCreate() {}, //生命周期 - 创建之前
//生命周期 - 创建完成（可以访问当前this实例）
created() {

},
beforeMount() {}, //生命周期 - 挂载之前
//生命周期 - 挂载完成（可以访问DOM元素）
mounted() {
    this.loginFlag = this.$route.query.id;
},
beforeUpdate() {}, //生命周期 - 更新之前
updated() {}, //生命周期 - 更新之后
beforeDestroy() {}, //生命周期 - 销毁之前
destroyed() {}, //生命周期 - 销毁完成
activated() {}, //如果页面有keep-alive缓存功能，这个函数会触发
}
</script>
<style lang="less">
.login-wrap{
    width: 100%;
    height: 100%;
    position:fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom:0;
    background: #fff;
    z-index: 9999;
    display: flex;
    justify-content: center;
    align-items: center;
    // text-align: center;
    .toRegister{
        text-align: center;
        line-height: 4.4rem;
        text-decoration: underline;
        a{
            color:#f44;
        }
    }
    .login-content{
        width:100%;
        // text-align: center;
        margin:0 1rem;
        width:calc(100% - 2rem);
        
        .logo{
            width: 5rem;
            height: 5rem;
            border: 0.1rem solid #efefef;
            border-radius: 50%;
            margin:0 auto;
            overflow: hidden;
            img{
                width:5rem;
                height: 5rem;
            }
        }
        .tabs{
            width: 100%;
            height: 4.4rem;
            background: #efefef;
            display: flex;
            justify-content: center;
            align-items: center;
            text-align: center;
            font-size: 1.4rem;
            line-height: 4.4rem;
            margin-top: 2rem;
        }
        .tabs-item{
            flex: 1;
        }
        .active{
            background: #f44;
            color: #fff;
        }
    }
    .tabs-content{
        width: 100%;
        .tabs-message{
            width: 100%;
            .tabs-input{
                height: 4rem;
                margin: 1rem 0;
                display: flex;
                input{
                    border: 0.1rem solid #efefef;
                    height: 4rem;
                    box-sizing: border-box;
                    text-indent: 1rem;
                    width: 100%;
                }
                button{
                    height: 4rem;
                    width: 30%;
                }
            }
        }
    }
}
</style>