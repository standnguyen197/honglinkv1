<template>
<div>
 <vue-headful
            :title="title"
        />
  <div class="headerWrapper">
    <navbar/>
    <b-container>
        <div style="text-align:center;margin-top:15px">
          <h1>XIN CHÀO! CÁC <span class="font-bungee">ADAM CHÂN CHÍNH</h1>
          <p style="margin-top:10px">
    <img src="@/assets/logo-men.jpg" 
    style="display: block;
    margin-left: auto;
    margin-right: auto;
    width: 120px;"/></p>
        </div>
    </b-container>
  </div>
<div class="formChat">
<b-container>
  <b-row>
    <b-col cols="12">
      <h2 style="text-align:center;margin-top:70px;margin-bottom:30px;" class="font-voll">
        CHỨC NĂNG HÓNGLINK
      </h2>
    <!-- Main chat -->
    <div>
      <b-col sm="12" md="8" offset-md="2">
        <div class="mainChatA" style="margin-bottom:100px;">
          <div class="headerChat">
            <h3 style="
                background: #fbc524;
                padding: 10px;
                text-align: center;
                color: #FFF;">
              Tokuda (Boss)
            </h3>
          </div>
          <div style="height: auto;" id="container">
            <ul style="margin-top:40px">
                    <li v-if="isActive"><img src="@/assets/tokuda.jpg" class="coverImage"/><span class="botMessage">Clink vào đây để tới link : <b-btn @click="goLinkDone(pushLink)" variant ="warning" style="font-weight:700;color:#FFF">TRUY CẬP</b-btn></span></li>
                    <li v-else><img src="@/assets/tokuda.jpg" class="coverImage"/><span class="botMessage">Không tìm thấy link! Do link đã bị xóa hoặc một số lý do nào đó!</li>
           <li><img src="@/assets/tokuda.jpg" class="coverImage"/><span class="botMessage">💖 Mình đặt Quảng cáo chỉ với mong muốn duy trình Website cho mọi người dùng. Đừng ích kỷ mà chặn Quảng Cáo trang nhé :( Ai có lòng hảo tâm xin hãy click vào AdBlock và bỏ chọn trang này nhé :(( Thank các huynh! 💖</b-btn>
            </ul>
          </div>
        </div>
      </b-col>
    </div>
    </b-col>
  </b-row>
</b-container>
</div>
  </div>
</template>

<script>

import axios from 'axios'
import navbar from '@/components/layout/navbar'


export default {
  name: 'indexPage',
  components: {
    navbar
  },
  data () {
    return {
        isActive: false,
        errors:[],
        getLink:'',
        pushLink: '',
        title:''
    }
    
  },
  created(){
      var _this = this;
      console.log(`${this.$route.params.id}`);
      var base_url = window.location.hostname;
    axios.get(`http://honglink.club/getLink/${this.$route.params.id}`)
    .then(response => {
      _this.getLink = response.data;
      if(_this.getLink.statusCode == true){
           _this.isActive = true;
           _this.pushLink = _this.getLink.content;
           _this.title = `Đang hóng code: ${_this.getLink.code}`;
      }else{
          _this.title = 'Không hóng được code rồi :((';
      }
     
    })
    .catch(e => {
      _this.errors.push(e)
      console.log(e);
    })
  },
  methods: {
    goLinkDone(item){
        location.href = item;
    }
  } // ok chem thu xem
}

</script>
<style>
/* width */
::-webkit-scrollbar {
    width: 10px;
    border-radius:4px
}

/* Track */
::-webkit-scrollbar-track {
    background: #f1f1f1;
    border-radius:4px
}
 
/* Handle */
::-webkit-scrollbar-thumb {
    background: #ccc;
    border-radius:4px
}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
    
    background: #ffc107; 
}
.mainChatA{
    border-radius: 20px;
    overflow: hidden;
    background-color: #fff;
    width: 100%;
    -webkit-transition: all .2s ease-out;
    transition: all .2s ease-out;
    -webkit-box-shadow: 0 2px 43px -4px rgba(0,0,0,.19);
    box-shadow: 0 2px 43px -4px rgba(0,0,0,.19);
    min-height:400px;
}
.font-bungee{
  font-family: 'Bungee Outline', cursive;
}
.font-voll{
  font-family: 'Bungee Inline', cursive;
}
.chooseFunc{
    border: 2px solid #fbc524;
    padding: 10px 19px;
    border-radius: 30px;
    font-weight: 500;
    font-size: 18px
}
.headerWrapper{
    background: #18191c;
    color:#FFF;
    height:300px;
}
.footerChat{
    position: absolute;
    bottom: -43px;
    width: 96%;
}
.formChat li{
  list-style: none;
  margin-top: 30px;
  margin-left:-30px;
},
.botMessage{
    background: #efefef;
    padding: 10px 19px;
    border-radius: 20px;
    font-weight: 500;
    font-size: 18px;
    font-weight: 600;
    margin-right: 15px;
    display: inline-block;
    position: relative;
    max-width: 78%;
    word-wrap: break-word;
}
.botMessage::after{
    content: '';
    display: block;
    position: absolute;
    border: 8px solid transparent;
    border-right-color: #efefef;
    left: -15px;
    bottom: 15px;
}
.personMessage{
    background: #333030;
    padding: 10px 20px;
    border-radius: 20px;
    color: #fff;
    font-weight: 600;
    margin-right: 15px;
    margin-top: 8px;
    display: inline-block;
    position: relative;
    max-width: 78%;
    word-wrap: break-word;
    text-align: left;
}
.personMessage::after{
    content: "";
    display: block;
    position: absolute;
    border: 8px solid transparent;
    border-left-color: #333030;
    right: -14px;
    bottom: 14px;
}
.rightMessage{
  text-align:right;
}
.coverImage{
    width: 42px;
    border: 2px solid #ccc;
    border-radius: 30px;
    margin-right: 6px;
}
</style>