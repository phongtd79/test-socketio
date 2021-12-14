<template>
  <div>
    <h2 >This is play audio page</h2>
    <div v-on:Change="play" >{{ messages }}</div>

    <audio
      controls
      autoplay
      :src="play(`${messages}`)"

      type="audio/mp3"
    ></audio>
  </div>
</template>

<script>
import io from "socket.io-client";
const hellomp3 = require("@/assets/hello.mp3");
const byemp3 = require("@/assets/bye.mp3");
export default {
  data() {
    return {
      so: hellomp3,
      messages: "",
      hellomp3,
      byemp3,
    };
  },
  methods:{
    play(mess) {
      if(mess==`hello`){
        this.$router.go()
        this.so=this.hellomp3;
        // this.so.currentTime=0;
        this.so.play;
      } if(mess==`goodbye`){
        this.$router.go()
        this.so=this.byemp3;
        // this.so.currentTime = 0;
        this.so.play;
      }
      return this.so;
    },
  },

  mounted() {
    this.socketInstance = io("http://localhost:3000");
    this.socketInstance.on("message:received", (data) => {
      this.messages = data;
    });
  },
  name: "PlayPage",
};
</script>

<style scoped>

</style>
