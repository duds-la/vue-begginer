<template>
    <div class="backdrop" @click.self="closeModal">
        <div class="modal">
            hii
        </div>
    </div>
</template>
<script>
export default {
    props:['theme'],
    methods:{
        closeModal(){
            this.$emit('close')
        }
    }
    
}
</script>
<style>
    .modal{
        width: 400px;
        margin: 100px auto;
        background: white;
        border-radius:10px ;
        padding: 100px;

    }

    .sale{
        background: red;
        font-size: 20px;
    }
    p{
        color: black;
    }

    .backdrop{
        top: 0;
        position: fixed;
        background: rgba(0, 0, 0, 5);
        width: 100%;
        height: 100%;
    }
</style>