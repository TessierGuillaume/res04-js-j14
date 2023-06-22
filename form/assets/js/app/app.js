// new Vue({
//     el: "#app",
//     data: {
//       tasks: [],
//       newTask: ""
//     },
    methods: {
      addTask() 
        if (this.newTask !== "") {
          this.tasks.push(this.newTask);
          this.newTask = "";
        }
      }
      removeTask(index) 
        this.tasks.splice(index, 1);
      

  ;
  