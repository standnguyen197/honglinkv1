<template>
<div>
 <vue-headful
            title="Honglink.Club - Hội hóng link"
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

    <p style="text-align:center;font-size: 20px;">Gõ <code style="background:#000">hd</code> rồi "GỬI" để xem hướng dẫn nhé các Huynh!</p>

    <div>
      <b-col sm="12" md="8" offset-md="2">
        <div class="mainChat" style="margin-bottom:100px;">
          <div class="headerChat">
            <h3 style="
                background: #fbc524;
                padding: 10px;
                text-align: center;
                color: #FFF;">
              Tokuda (Boss)
            </h3>
        <b-input-group size="lg" style="position: absolute;
    bottom: -50px;
    width: 95%;">
                <b-form-input   v-model="contentMessage" 
        style="border-color: #fbc524;border-radius:0px;
        box-shadow:none;
        box-shadow: none;
        border-bottom-left-radius: 20px;" placeholder="Nhập nội dung"></b-form-input>
                <b-input-group-append>
                  <b-btn size="lg"   @click="sendMessage(contentMessage)" variant="warning" 
                  style="box-shadow:none;border-radius:0px;color:#FFF;
                  font-weight:700;cursor:pointer;border-bottom-right-radius: 20px;">GỬI</b-btn>
                </b-input-group-append>
              </b-input-group>
          </div>
          <div style="overflow-y: scroll;
               height: 400px;" id="container">
          
            <ul style="margin-top:40px">
                    <li><img src="@/assets/tokuda.jpg" class="coverImage"/><span class="botMessage">Xin chào ADAM muốn làm gì ạ?</span></li>
                    <li v-for="items in messages" :class="checkWho(items.whoSend)"><img src="@/assets/tokuda.jpg" :style="styleObject(items.whoSend)" class="coverImage"/><div :class="checkWhoThemeMessage(items.whoSend)"><span v-html="items.content"><span></div></li>
            </ul>
          </div>
          <div class="footerChat">
          <!-- Using components -->

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
        contentMessage: '',
        messages: [],
        codeHTML: false
    }
    
  },
  sockets:{
    connect: function(){
      console.log('Socket connected')
    },
    replyMessage: function(data){
      const iMessage = {
        content: data.mes.content,
        whoSend:0
      }
      this.messages.push(iMessage);
      
    }
  },
  updated() { 
    this.scrollToEnd();
    },
  mounted(){
    this.scrollToEnd();
  },
  methods: {
     scrollToEnd() {    	
       var container = document.querySelector("#container");
       var scrollHeight = container.scrollHeight;
       container.scrollTop = scrollHeight;
    },
    sendMessage(contentMessage){
       const iMessage = {
        content:contentMessage,
        whoSend:1
      }
      this.messages.push(iMessage);
      this.$socket.emit('sendMessage', iMessage);
      this.contentMessage = ''
    },

    // testMessage(content, whoSend) {
    //   const testMessage = {
    //     content,
    //     whoSend
    //   }
    //   this.messages.push(testMessage);
    // },
    checkWho(item){
        if(item == 0){
          return ''
        }else{
          return 'rightMessage'
        }
    },
    checkWhoThemeMessage(item){
        if(item == 0){
          // server reply
          return 'botMessage'
        }else{
          // me chat
          return 'personMessage'
        }
    },
    styleObject(item){
        if(item == 0){
          return ''
        }else{
          return 'display:none'
        }
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
.mainChat{
    border-radius: 20px;
    overflow: hidden;
    background-color: #fff;
    width: 100%;
    -webkit-transition: all .2s ease-out;
    transition: all .2s ease-out;
    -webkit-box-shadow: 0 2px 43px -4px rgba(0,0,0,.19);
    box-shadow: 0 2px 43px -4px rgba(0,0,0,.19);
    min-height:400px;
    border-bottom-right-radius: 0px;
    border-bottom-left-radius: 0px;
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