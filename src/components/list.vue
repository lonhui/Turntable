<template>
    <div id="winningList">
        <div class="white">
            <div class="title">Daftar Pemenang</div>
            <div class="end" @click="closeWinningListShow">
                <img src="../assets/close.png">
            </div>
            <div class="centont" v-loading="loading">
                <div class="datas" v-for="item in tableData.list" :key="item.index">
                    <div class="date">{{item.day}}</div>
                    <div class="table">
                        <el-table :data="item.list" stripe style="width: 100%">
                            <el-table-column prop="user_name" label="Username" width="140px"></el-table-column>
                            <el-table-column prop="prize_name" label="Hadiah"></el-table-column>
                            <el-table-column prop="create_time" label="Waktu"></el-table-column>
                        </el-table>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
      return {
        tableData: [],
        loading:false
      }
    },
    mounted(){
        this.getTabelData1()
    },
    methods: {
        //得到获奖名单
        getTabelData1(){
            this.loading = true
            this.$axios.get(process.env.API_ROOT+'/active/win/list')
            .then((response)=>{
                console.log(response);
                //this.tableData = response.data.data
                const aa = response.data.data
                for(let i = 0;i<aa.list.length;i++){
                    for(let j=0; j<aa.list[i].list.length;j++){
                          aa.list[i].list[j].create_time=aa.list[i].list[j].create_time.substring(aa.list[i].list[j].create_time.indexOf(' ')+1)
                     }
                }
                this.tableData = aa
                this.loading = false
                console.log(this.tableData)
            })
            .catch(function (error) {
                console.log(error)
            })
        },
       
         closeWinningListShow() {
            this.$emit('on-close')
        }
    },
    beforeDestroy() {
        if(this.timer){
            clearInterval(this.timer)
        }
    }
}
</script>

<style scoped>
#winningList{
    position: fixed;
    z-index: 100;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(2, 17, 0, 0.6);
}
.white{
    width: 80%;
    height: 900px;
    background-color: #fff;
    margin:  150px auto;
    border-radius: 50px 50px 50px 50px;
    border: #FCCF50 10px solid;
    position: relative;
}
.end{
    width: 80px;
    height: 80px;
    position: absolute;
    right: -40px;
    top: -40px;
}
.end img{
    width: 100%;
    height: 100%;
}
.title{
    width: 75%;
    height: 60px;
    margin:  0 auto;
    color: #000;
    margin-top: 40px;
    font-size: 40px;
    font-weight: 600;
    text-align: center;
    border-bottom: #989898 2px solid;
}
#winningList .centont{
    width: 99%;
    height: 750px;
    margin: 20px auto;
    overflow-y:auto;
    overflow-x: hidden;
}
.datas{
    width: 99%;
    margin: 40px auto;
}
.date{
    width: 100%;
    height: 40px;
    color: #000;
    font-size: 26px;
    font-weight: 600;
    text-align: left;
    border-bottom: #989898 2px solid;
}
.table{
    text-align: left;
}

</style>

