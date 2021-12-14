<template>
  <div>
    <h2>This is page control</h2>
    <div v-if="!joined" class="parent-container">
      <div class="name-container">
        <button class="join-button" v-on:click="join">Server Join</button>
      </div>
    </div>
    <div v-if="joined">
      <p>Joined room</p>
      <button v-on:click="sendMessage('audio1')">Run audio 1</button>
      <button v-on:click="sendMessage('audio2')">Run audio 2</button>
    </div>
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
      const message = {
        id: new Date().getTime(),
        text: this.text,
      };
      console.log(message);

      this.socketInstance.emit("message", message);
    },
  },
  name: "ChatApp",
};
</script>

<style scoped>
.parent-container {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  position: fixed;
  padding-top: 150px;
}

.name-container {
  display: flex;
  flex-direction: column;
  width: 200px;
}

.user-name {
  height: 30px;
  font-size: 20px;
  padding: 5px;
  margin-bottom: 5px;
  text-align: center;
  font-weight: bold;
}

.join-button {
  height: 30px;
  font-size: 20px;
}

.text-input-container {
  height: 100vh;
}

.text-message {
  width: 100%;
  position: absolute;
  bottom: 0px;
  height: 70px;
  padding: 10px;
  box-sizing: border-box;
}
</style>
