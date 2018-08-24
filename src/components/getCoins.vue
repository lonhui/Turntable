<template>
    <div id="getCoins">
        <!-- 金币奖励 -->
        <div class="getCoins">
            <div class="close"><img src="../assets/close.png" @click="close()"></div>
            <div class="text">
                <p class="p">Selamat</p>
                <p>kamu mendapatkan</p>
                <p class="pp"><span>{{data}}!</span></p>
            </div>
            <div class="title"><img src="../assets/logo.png"></div>
        </div>
    </div>    
</template>

<script>
export default {
    props:['data'],
    methods:{
        close(){
            this.$emit('on-close')
        }
    }
}
</script>

<style scoped>
#getCoins{
    position: fixed;
    z-index: 100;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(7, 17, 27, 0.8)
}
img{
    width: 100%;
    height: 100%
}
.getCoins{
    width: 720px;
    height: 730px;
    margin: 200px auto 0;
    background: url("../assets/box1Back.png") no-repeat;
    background-size: 100% 100%;
    background-size:cover
}
.close{
    width: 90px;
    position:absolute;
    right: 80px;
    top: 180px;
    
}
p{  
    width: 500px;
    font-size: 42px;
    line-height: 60px;
    text-align: center;
    margin: 0 auto;
    font-family:concertone
}
.p{
    padding-top: 140px;
}
.pp{
    padding-bottom:100px;
}
span{
    color: red;
}
.title{
    width: 200px;
    margin: 140px auto 0;
}
.text{
    width: 500px;
    margin: 0 auto;
    border-bottom: 2px #dddddd solid;
}
</style>
