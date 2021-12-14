<template>
  <div>
    <h2>This is audio page</h2>
    <div v-if="!joined" class="parent-container">
      <div class="name-container">
        <button class="join-button" v-on:click="join">Client Join</button>
      </div>
    </div>
    <div v-if="joined">
      <p>joined</p>
      <b> {{ messages.text }} </b>
    </div>
    <!-- <div v-if="joined">
      <div class="list-container">
        <div v-for="message in messages" :key="message.id">
          <b>
            {{ message.user }}
          </b>
          : {{ message.text }}
        </div>
      </div>
      <div class="text-input-container">
        <textarea
          v-model="text"
          class="text-message"
          v-on:keyup.enter="sendMessage"
        ></textarea>
      </div>
    </div> -->
  </div>
</template>

<script>
import io from "socket.io-client";

export default {
  data() {
    return {
      joined: false,
      messages: "",
    };
  },
  methods: {
    join() {
      this.joined = true;
      this.socketInstance = io("http://localhost:3000");

      this.socketInstance.on("message:received", (data) => {
        this.messages = data;
      });
    },
  },
  name: "MakeSound",
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
