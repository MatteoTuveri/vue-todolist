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
        ],
        lastId: 3,
        add : false,
        modify : false,
        toDoText : ''
    }
  },
  methods:{
    check(index){
        this.list[index].done = !this.list[index].done;
    },

    deleteItem(index){
        this.list.splice(index,1);
    },

    addWindow(){
        this.add = !this.add;
    },

    addToDo(){
        this.lastId ++;
        const newTodo ={
            text : this.toDoText,
            id : 0,
            done : false
        }
        this.list.unshift(newTodo);
    }

  }
}).mount('#app')