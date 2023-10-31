const { createApp } = Vue
    
createApp({
  data() {
    return {
        list:[
            {
                text :'Andare in palestra',
                id : 1 ,
                done : false
            },
            {
                text :'Fare spesa',
                id : 2 ,
                done : false
            },
            {
                text :'Fare il tagliando',
                id : 3 ,
                done : false
            },
        ]
    }
  },
  methods:{
    check(index){
        this.list[index].done = !this.list[index].done;
    },

  }
}).mount('#app')