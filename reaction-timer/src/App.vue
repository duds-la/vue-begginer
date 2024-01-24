<script>
import Block from './components/Block.vue';

  export default {
    name: 'App',
    components:{
      Block
    },
    data(){
      return {
        isPlaying: false,
        delay: null,
        score: null,
        showResults: false,
      }
    },
    methods: {
      start(){
        this.delay = 2000 + Math.random() * 2000
        this.isPlaying = true;
        this.showResults = false;

      },
      endGame(reactionTime){
        this.score = reactionTime;
        this.isPlaying = false;
        this.showResults = true;
      }
    },
  }
</script>

<template>
  <h1>Ninja React Timer</h1>
  <button @click="start" :disabled="isPlaying">Play</button>
  <Block v-if="isPlaying" :delay="delay" @end="endGame"/>
  <p v-if="showResults">{{ score }} ms</p>
</template>

<style scoped>
  #app{
    justify-content: center;
    align-items: center;
    text-align: center;
  }
</style>
