<template>
<div>
    
    <div id="index">
        <div class="logo"><img src="../assets/logo.png"></div>
      <div id="turntable">
            <div class="prize-list">
                <div class="prize-item" v-for="(item,index) in rewardList" :key="index">
                    <!-- 奖项名称 -->
                    <div class="prize-type">
                        {{item.name}}
                    </div>
                    <!-- 奖项图标 -->
                    <div class="prize-pic" v-show="item.icon">
                        <img src="../assets/c.png">
                    </div>
                </div>
            </div>
        </div>
        <div class="pointer"><img src="../assets/pointer.png"></div>
        <div class="user">
            <table>
                <tr>
                    <td><div class="username">
                        <div class="userImg"><img src="../assets/icon_username.png"></div>
                        <p>{{username}}</p>
                        </div></td>
                    <td><div class="usercoin">
                        <div class="coinImg"><img src="../assets/icon_rp.png"></div>
                        <p>{{usercoin}}</p>
                        </div></td>
                </tr>
            </table>
        </div>
        <div class="footer">
            <div class="button_list">
                <div class="button" v-show="buttonShow"><img src="../assets/button3.png" @click="openUsecoinShow"></div>
                <div class="button" v-show="!buttonShow"><img src="../assets/button3.png"></div>
                <!-- <div class="list" @click="listShow = true">Pemenang</div> -->
            </div>
        
            <div class="treaty"><p @click="treatyShow = true">*Syarat & Ketentuan</p></div>
        </div>
        <div class="components">
            <v-usecoin v-if="usecoinShow" @on-close="closeUsecoin"></v-usecoin>
            <v-getCoins v-if="getCoinsShow" @on-close="closeGetCoinsShow" :data='prizeName'></v-getCoins>
            <v-getArticle v-if="getArticleShow" @on-close='getArticleShow = false'></v-getArticle>
            <v-treaty v-if="treatyShow" @on-close='treatyShow = false'></v-treaty>
            <v-login v-if="loginShow" @on-close='loginShow = false;buttonShow = true'></v-login>
            <v-internetError v-if="internetErrorShow" @on-close='internetErrorShow = false'></v-internetError>
            <v-noCoin v-if="noCoinShow" @on-close='noCoinShow = false'></v-noCoin>
            <v-list v-if="listShow" @on-close='listShow = false'></v-list>
        </div>
    </div>
</div>
</template>

<script>
import $ from 'jquery'
import usecoin from '../components/usecoin'
import getCoins from '../components/getCoins'
import getArticle from '../components/getArticle'
import treaty from '../components/treaty'
import login from '../components/login'
import noCoin from '../components/noCoin'
import internetError from '../components/internetError'
import list from '../components/list'

export default {
    data(){
        return{
            username:'',
            usercoin:0,
            // 奖品
            rewardList:[
                {
                    icon:'../assets/c.png',
                    name:'1000',
                },
                {
                    icon:'../assets/c.png',
                    name:'50000',
                },
                {
                    icon:'../assets/c.png',
                    name:'2000',
                },
                {
                    icon:'../assets/c.png',
                    name:'500',
                },
                {
                    icon:'../assets/c.png',
                    name:'2500',
                },
                // 不可中
                {
                    icon:null,
                    name:'Power Bank',
                },
                {
                    icon:'../assets/c.png',
                    name:'5000',
                },
                // 不可中
                {
                    icon:null,
                    name:'USB',
                },
                {
                    icon:'../assets/c.png',
                    name:'10000',
                },
                // 不可中
                {
                    icon:null,
                    name:'Caping Gift',
                },
                {
                    icon:'../assets/c.png',
                    name:'20000',
                },
                // 不可中
                {
                    icon:null,
                    name:'Speaker',
                }
            ],
            user:{},
            usecoinShow:false,
            getCoinsShow:false,//获得金币弹框
            getArticleShow:false,//获得实物
            treatyShow:false,//条约
            loginShow:false,//未登录
            noCoinShow:false,//金币不足
            internetErrorShow:false,//网络错误
            buttonShow:true,
            prizeName:'',
            listShow:false
        }
    },
    components:{
        'v-usecoin': usecoin,
        'v-getCoins': getCoins,
        'v-getArticle': getArticle,
        'v-treaty': treaty,
        'v-login' : login,
        'v-internetError': internetError,
        'v-noCoin': noCoin,
        'v-list': list
    },
    mounted(){
        this.getUid()
    },
    methods:{
        closeGetCoinsShow(){
            this.getCoinsShow = false
            this.buttonShow = true
            this.getUserInfo()
        },
        openUsecoinShow(){
            if(this.user.uid == null || this.user.uid == 'null'){
                this.loginShow =true
            }else{
                this.usecoinShow = true
            }
        },
        closeUsecoin(yOrn){
            if(yOrn){
                this.usecoinShow = false
                if(this.user.uid == null || this.user.uid == 'null'){
                    this.loginShow =true
                }else{
                    this.buttonShow = false
                    this.lottery()
                }
            }else{
                this.usecoinShow = false
            }
        },
        //旋转
        rotate(type,prizeName){
            let num
            for(let i = 0;i<this.rewardList.length;i++){
                if(this.rewardList[i].name == prizeName){
                    num = i + 1
                    break
                }
            }
            var turntable = document.getElementById('turntable')
            turntable.style['transform'] = 'rotate(0deg)';
            // var num = Math.floor(Math.random() * 12)+1//由服务器获得
            var angle=360-(num-1)*30//停下来的角度
            turntable.className ='turntable_'+num
            var t = setTimeout( "turntable.style['transform'] = 'rotate("+angle+"deg)';turntable.className ='turntabled';",5900)
           
            let self = this;   // 当前this指向的是一个组件
            self.getCoinsShow = false;
            setTimeout(function(){ self.getCoinsShow = true;},6500)
        },
        // 从地址栏获取uid和deviceId
        getUid(){
            const url = window.location.href
            let uid = url.match(/[^a-zA-Z0-9]u{1,1}=([0-9]+)/)
            let did = url.match(/[^a-zA-Z0-9]c{1,1}=([a-z0-9]+)/)
            this.user.uid = uid[1]
            this.user.deviceId = did[1]
            if(this.user.uid == null || this.user.uid == 'null'){
                this.loginShow =true
            }else{
                this.getUserInfo()
            }
        },
        // 获取用户信息
        getUserInfo(){
             this.$axios.post(process.env.API_ROOT+'/active/user/info?uid='+this.user.uid)
            .then((response) => {
                if(response.data.code==301){
                    this.loginShow = true
                }else{
                    // 处理后台传来的数据
                    this.username = response.data.data.nickName
                    this.usercoin = response.data.data.money
                }
            })
        },
        //抽奖
        lottery(){
            this.$axios.post(process.env.API_ROOT+'/active/ramadan?uid='+this.user.uid+'&device_id='+this.user.deviceId)
            .then((response) => {
                if(response.data.code == 306){
                    this.noCoinShow = true
                }else if(response.data.code==301){
                    this.loginShow = true
                }else{
                    // 处理后台传来的数据
                    let type = response.data.data.type
                    let prizeName = response.data.data.prizeName
                    this.prizeName =prizeName
                    prizeName = prizeName.substring(3)
                    this.rotate(type,prizeName)
                    this.usercoin = this.usercoin -1000
                }
            }).catch((error)=>{
                this.internetErrorShow = true
                this.buttonShow = true
            })
        }
    }
}
</script>

<style scoped>
/* 旋转动画  2秒 1次 慢快慢*/
/* 1000 */
.turntable_1{
     -webkit-animation:circle_1 6s 1 ease
}
@-webkit-keyframes circle_1{
    0%{ transform:rotate(0deg) }
    100%{ transform:rotate(2160deg) }
}
/* 50000 */
.turntable_2{
     -webkit-animation:circle_2 6s 1 ease
}
@-webkit-keyframes circle_2{
    0%{ transform:rotate(0deg) }
    100%{ transform:rotate(2490deg) }
}
/* 2000 */
.turntable_3{
     -webkit-animation:circle_3 6s 1 ease
}
@-webkit-keyframes circle_3{
    0%{ transform:rotate(0deg) }
    100%{ transform:rotate(2460deg) }
}
/* 500 */
.turntable_4{
     -webkit-animation:circle_4 6s 1 ease
}
@-webkit-keyframes circle_4{
    0%{ transform:rotate(0deg) }
    100%{ transform:rotate(2430deg) }
}
/* 2500 */
.turntable_5{
     -webkit-animation:circle_5 6s 1 ease
}
@-webkit-keyframes circle_5{
    0%{ transform:rotate(0deg) }
    100%{ transform:rotate(2400deg) }
}
/* 1000 */
.turntable_6{
     -webkit-animation:circle_6 6s 1 ease
}
@-webkit-keyframes circle_6{
    0%{ transform:rotate(0deg) }
    100%{ transform:rotate(2370deg) }
}
/* 5000 */
.turntable_7{
     -webkit-animation:circle_7 6s 1 ease
}
@-webkit-keyframes circle_7{
    0%{ transform:rotate(0deg) }
    100%{ transform:rotate(2340deg) }
}
/* 15000 */
.turntable_8{
     -webkit-animation:circle_8 6s 1 ease
}
@-webkit-keyframes circle_8{
    0%{ transform:rotate(0deg) }
    100%{ transform:rotate(2310deg) }
}
/* 10000 */
.turntable_9{
     -webkit-animation:circle_9 6s 1 ease
}
@-webkit-keyframes circle_9{
    0%{ transform:rotate(0deg) }
    100%{ transform:rotate(2280deg) }
}
/* 3000 */
.turntable_10{
     -webkit-animation:circle_10 6s 1 ease
}
@-webkit-keyframes circle_10{
    0%{ transform:rotate(0deg) }
    100%{ transform:rotate(2250deg) }
}
/* 20000 */
.turntable_11{
     -webkit-animation:circle_11 6s 1 ease
}
@-webkit-keyframes circle_11{
    0%{ transform:rotate(0deg) }
    100%{ transform:rotate(2220deg) }
}
/* 500 */
.turntable_12{
     -webkit-animation:circle_12 6s 1 ease
}
@-webkit-keyframes circle_12{
    0%{ transform:rotate(0deg) }
    100%{ transform:rotate(2190deg) }
}
 img{
    width: 100%;
    height: 100%
}
.logo{
    width: 550px;
    margin: 0 auto;
    padding-top: 20px
}
.pointer{
    width: 80px;
    margin: 0 auto;
    float: left;
    position: relative;
    bottom: 560px;
    left: 335px
}
#turntable{
    width: 550px;
    height: 550px;
    margin: 0 auto;
    background: url("../assets/Turntable.png") no-repeat;
    background-size: 100% 100%;
    background-size: cover;
    border-radius: 300px
}
table{
    margin-top: 40px;
    width: 550px;
    margin-left: 120px
}
.userImg{
    width: 70px;
    float: left
}
.coinImg{
    width: 50px;
    float: left
}
.user p{
    float: left;
    font-size: 32px;
    line-height: 80px;
    color: #ffffff;
    padding-left: 10px
}
p{font-family: concertone}
.coins img{width: 850px}
.prize-pic{width: 30px}
.prize-type,.prize-pic{float: left}
.prize-list {
    width: 100%;
    height: 100%;
    position: relative;
    font-size: 30px;
    font-weight: 900
}
.prize-list .prize-item {
    position: absolute;
    top: 0;
    left: 0;
    z-index: 2
}
.prize-list .prize-item:first-child {
    top: 130px;
    left: 223px;
    transform: rotate(90deg);
    color: #009c78
 
}
.prize-list .prize-item:nth-child(2) {
    top: 140px;
    left: 282px;
    transform: rotate(120deg);
    color: #ffffff
}
.prize-list .prize-item:nth-child(3) {
    top: 198px;
    left: 333px;
    transform: rotate(150deg);
    color: #ffffff
}
.prize-list .prize-item:nth-child(4) {
    top: 260px;
    left: 347px;
    transform: rotate(180deg);
    color: #ffffff
}
.prize-list .prize-item:nth-child(5) {
    top: 325px;
    left: 335px;
    transform: rotate(210deg);
    color: #008Dc0
}
.prize-list .prize-item:nth-child(6) {
    top: 395px;
    left: 268px;
    transform: rotate(240deg);
    font-size: 24px;
    color: #ffffff
}
.prize-list .prize-item:nth-child(7) {
    top: 390px;
    left: 228px;
    transform: rotate(270deg);
    color: #ffffff
}
.prize-list .prize-item:nth-child(8) {
    top: 370px;
    left: 175px;
    transform: rotate(300deg);
    color: #ffffff
}
.prize-list .prize-item:nth-child(9) {
    top: 335px;
    left: 90px;
    transform: rotate(330deg);
    color: #d73a63
}
.prize-list .prize-item:nth-child(10) {
    top: 265px;
    left: 40px;
    transform: rotate(360deg);
    font-size: 26px;
    color: #ffffff
}
.prize-list .prize-item:nth-child(11) {
    top: 190px;
    left: 90px;
    transform: rotate(30deg);
    color: #ffffff
}
.prize-list .prize-item:nth-child(12) {
    top: 135px;
    left: 140px;
    transform: rotate(60deg);
    color: #ffffff
}
.list{
    width: 260px;
    height: 85px;
    background: url("../assets/btn_list.png") no-repeat;
    background-size: 100% 100%;
    background-size: cover;
    text-align: center;
    font-size: 42px;
    line-height: 70px;
    font-weight: 600;
    font-family: concertone;
    color: #B90914;
    float: left;
    margin-left: 50px
}
.button{
    width: 260px;
    margin: 0 auto
}
.button_list{
    width: 600px;
    height: 85px;
    margin: 10px auto 0
}
.treaty{
    width: 320px;
    font-size: 30px;
    margin: 0 auto;
    color: #ffffff;
    text-align: center;
    margin-top: 20px;
    border-bottom: #ffffff 2px solid;
    line-height: 50px
}
.aaa{
    width: 100%;
    height: 1330px;
    background-color: #00AEEF
}
.asa{padding-top: 200px}
</style>
