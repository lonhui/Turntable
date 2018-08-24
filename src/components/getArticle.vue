<template>
    <div id="getArticle">
        <!-- 获得实物奖品弹框 -->
        <div class="close"><img src="../assets/close.png" @click="close()"></div>
        <div class="getArticle">
            <div class="h">
                <p>Selamat</p>
                <p>kamu mendapatkan</p>
                <span>{{article}}!</span>
            </div>
            <div class="p">
                <p>Mohon isi data dirimu dengan lengkap dan benar</p>
            </div>
            <div class="form">
                <input class="input" type="text" v-model="form.name" placeholder="isi nama lengkap seeuai KTP"><br>
                <textarea rows="3" cols="20" v-model="form.address" class="input" id="max" placeholder="isi dengan alamat lengkap beserta kode pos"></textarea>
                <input class="input" type="text" v-model="form.number" placeholder="isi dengan nomor hp aktifmu"><br>
                <input class="input" type="text" v-model="form.email" placeholder="isi dengan email aktifmu">
            </div>
            <div class="button"><img src="../assets/button4.png" @click="sublime"></div>
            <div class="title"><img src="../assets/logo.png"></div>
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return{
            article:'Power Bank',
            form:{
                name:'',
                address:'',
                number:'',
                email:''
            }
        }
    },
    methods:{
        close(){
            this.$emit('on-close')
        },
        sublime(){
            // 发送请求
            
            this.close()
        }
    }
}
</script>

<style scoped>
#getArticle{
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
.getArticle{
    width: 700px;
    height: 1045px;
    margin: 120px auto 0;
    background: url("../assets/article_back.png") no-repeat;
    background-size: 100% 100%;
    background-size:cover
}
.close{
    width: 80px;
    position:absolute;
    right: 90px;
    top: 110px;
    
}
.h{
    width: 480px;
    height: 130px;
    font-size: 36px;
    font-weight: 600;
    line-height: 40px;
    text-align: center;
    margin: 0 auto;
    padding-top: 80px;
    border-bottom: 3px #ddd solid;
}
span{
    color: red;
}
.p{
    width: 480px;
    margin: 10px auto 0;
    font-size: 26px;
    text-align: center;
    line-height: 32px;
    font-family:concertone
}
.form{
    width: 480px;
    margin: 0 auto;
}
.form .input{
    width: 480px;
    margin-top: 40px;
    height: 50px;
    border: 0 #fff solid;
    background-color: #ddd;
    border-radius: 25px;
    text-align: center;
}
#max{
    height: 80px;
}
.button {
    width: 200px;
    margin: 60px auto 0;
}
.title{
    width: 220px;
    margin: 50px auto 0;
}
</style>
