<template>
    <div id="treaty">
        <!-- 条约 -->
        <div class="treaty">
            <div class="close"><img src="../assets/close.png" @click="close()"></div>
            <h2>Syarat dan Ketentuan</h2>
            <div class="content">
                <p>1.	User Caping yang berpartisipasi dalam permainan pemutaran Roda Keberuntungan ini wajib menggunakan aplikasi Caping versi terupdate.</p>
                <p>2.	User Caping hanya dapat berpartisipasi apabila sudah login ke akun Caping.</p>
                <p>3.	Setiap kali memutar Roda Keberuntungan membutuhkan 5000 koin.</p>
                <p>4.	User Caping yang mendapatkan reward Tabungan Caping, akan dikirimkan langsung ke akun Tabungan Caping.</p>
                <p>5.	User Caping yang mendapatkan reward Powerbank, USB, Caping Gift dan Speaker, wajib mengisi informasi identitas diri yang sebenar-benarnya. </p>
                <p>6.	Pengiriman reward Powerbank, USB, Caping Gift dan Speaker akan di proses dalam waktu lebih kurang 2 sampai dengan 4 minggu.</p>
                <p>7.	User Caping yang terbukti melakukan kecurangan dalam permainan Roda Keberuntungan ini akan otomatis didiskualifikasi dan akunnya  akan masuk dalam daftar hitam.</p>
                <p>8.	User Caping yang mengikuti event ini dianggap telah setuju dengan syarat & ketentuan yang berlaku. User Caping juga menyetujui bahwa seluruh keputusan Caping adalah mutlak dan tidak dapat diganggu gugat.</p>
                <p>9.	Syarat & ketentuan dapat berubah sewaktu-waktu tanpa pemberitahuan lebih lanjut. Mohon cek halaman ini secara berkala.</p>
                <br><br><br><br><br>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    methods:{
        close(){
            this.$emit('on-close')
        },
    }
}
</script>

<style scoped>
#treaty{
    position: fixed;
    z-index: 100;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(7, 17, 27, 0.8)
}
.treaty{
    width: 550px;
    height: 900px;
    background-color: #FFF;
    border-radius: 50px;
    margin: 150px auto 0;
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
h2{
    text-align: center;
    font-size: 40px;
    font-weight: 800;
    padding-top: 20px;
    padding-bottom: 20px;
    font-family:concertone;
}
.content{
    width: 500px;
    height: 810px;
    margin: 0 auto;
    overflow-y: auto;
}
p{
    font-size: 34px;
    line-height: 40px;
    margin-top: 20px;
    font-family:concertone;
}
</style>
