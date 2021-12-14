<template>
  <div class="container">
    <h2 class="container" >This is page control</h2>
    <button class="container" v-on:click="sendMessage('hello')">
      Run Hello
    </button>
    <button class="container" v-on:click="sendMessage('goodbye')">
      Run Goodbye
    </button>
    </div>
</template>

<script>
import io from "socket.io-client";

export default {
  data() {
    return {
      joined: false,
      text: "",
    };
  },
  methods: {
    join() {
      this.joined = true;
      this.socketInstance = io("http://localhost:3000");
    },
    sendMessage(text) {
      this.addMessage(text);

      this.text = "";
    },
    addMessage(text) {
      this.text = text;
      const message =this.text;
      console.log(message);
      this.socketInstance.emit("message", message);
    },
  },
  mounted(){
    this.socketInstance = io("http://localhost:3000");
      this.socketInstance.on("message:received", (data) => {
        this.messages = data;
      });
  },
  name: "ChatApp",
};
</script>

<style scoped>
.container{
  text-align: center;
   margin: auto;
  width: 50%;
  padding: 10px;
}


</style>
