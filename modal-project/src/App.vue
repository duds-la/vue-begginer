<template>
  <div v-if="showModal">
    <Modal theme="salqe" @close="toggleModal">
      <h1>Teste</h1>
      <p>Vamos estudar porra</p>
    </Modal>
  </div>
  <button @click="toggleModal">open modal</button>
</template>

<script>
import Modal from './components/Modal.vue';

export default{
  name: 'App',
  components: {
    Modal
  },
  data(){
    return {
      header: 'App',
      showModal: false
    }
  },
  methods: {
    toggleModal(){
      this.showModal = !this.showModal
    }
  }
}
</script>



<style>
  #app{
    width: 100%;
    margin: 0;
    padding: 0;
    
  }
  h1{
    color: blue;
  }

  button{
        background:white;
        border-radius:10px ;
        position: flex;
        justify-content: center;
        justify-items: center;
        padding: 2rem;
    }
</style>
