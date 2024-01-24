<template>
    <div class="backdrop" @click.self="closeModal">
        <div class="modal" :class="{ sale: theme === 'sale' }">
            <slot></slot>
        </div>
        <button @click="">mostras outro modal</button>
        <div v-if="showModalTwo">
            <ModalTwo @close="toggleModal">
            </ModalTwo>
        </div>
    </div>
</template>
<script>
import ModalTwo from './ModalTwo.vue';

export default {
    props: ['theme'],
    components: {
    Modal,
    ModalTwo
},
    data() {
        return {
            showModalTwo: false
        }
    },
    methods: {
        closeModal() {
            this.$emit('close')
        },
        toggleModal(){
        this.showModalTwo = !this.showModalTwo
        }
    }

}
</script>
<style>
.modal {
    width: 400px;
    margin: 100px auto;
    background: white;
    border-radius: 10px;
    padding: 100px;

}

.sale {
    background: red;
    font-size: 20px;
}

p {
    color: black;
}

.backdrop {
    top: 0;
    position: fixed;
    background: rgba(0, 0, 0, 5);
    width: 100%;
    height: 100%;
}
</style>