<template>
    <div id="internetError">
        <!-- 网络错误 -->
        <div class="internetError">
            <div class="close"><img src="../assets/close.png" @click="close()"></div>
            <p>Koneksi internet tidak stabil. Silahkan coba lagi ya!</p>
        </div>
    </div>
</template>

<script>
export default {
    methods:{
        close(){
            this.$emit('on-close')
        }
    }
}
</script>

<style scoped>
#internetError{
    position: fixed;
    z-index: 100;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(7, 17, 27, 0.8)
}
.internetError{
    width: 550px;
    height: 400px;
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
p{  
    width: 500px;
    font-size: 40px;
    line-height: 60px;
    text-align: center;
    margin: 0 auto;
    padding-top: 100px;
    font-family:concertone
}
</style>
