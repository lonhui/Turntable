<template>
    <div id="usecoin">
        <!-- 是否确定消耗金币 -->
        <div class="usecoin">
            <div class="close"><img src="../assets/close.png" @click="close_no()"></div>
            <p>Apakah kamu yakin ingin menggunkana tabungan <span>Rp {{rp}}</span> untuk memutar Roda Keberuntungan?</p>
            <div class="button">
                <div class="no"><img src="../assets/button1.png" @click="close_no()"></div>
                <div class="yes"><img src="../assets/button2.png" @click="close_yes()"></div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return{
            rp:'1000',//消耗金币提示
        }
    },
    methods:{
        close_no(){
            this.$emit('on-close',false)
        },
        close_yes(){
            this.$emit('on-close',true)
        }

    }
}
</script>

<style scoped>
#usecoin{
    position: fixed;
    z-index: 100;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(7, 17, 27, 0.8)
}
.usecoin{
    width: 600px;
    height: 500px;
    background-color: #FFF;
    border-radius: 20px;
    margin: 300px auto 0;
    position: relative;
    border: 10px #FCCF4E solid
}
img{
    width: 100%;
    height: 100%
}
.close{
    width: 80px;
    position:absolute;
    top:-30px;
    right: -30px
}
.no{
    width: 200px;
    float: left;
}
.yes{
    width: 200px;
    float: left;
    margin-left: 50px;
}
.button{
    width: 450px;
    margin: 50px auto 0;
}
p{  
    width: 500px;
    font-size: 40px;
    line-height: 60px;
    text-align: center;
    margin: 0 auto;
    padding-top: 80px;
    font-family:concertone
}
span{
    color: red;
}
</style>
