const app = Vue.createApp({
    //definimos esse objeto afim de controlar tudo o acontecer dentro 
    //de app
    //template: '<h2>i am the template</h2>' -> foi injetado dentro do dom

    data(){
        return {
            title:'Final Empire',
            author: 1,
        }
    },
    methods: {
        handleEvent(e){
             console.log(e)
        }
    },
})

app.mount('#app')