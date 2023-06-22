export default {  
    data() {  
        return {  
            tasks : [ ]  
        }  
    },  
    methods : {  
        addTask (event) {  
            let value = event.target.elements.task.value;  
            this.tasks.push({content: value, done: false});
            event.target.elements.task.value = "";
        },
        didTask(task) {
            task.done = true;
        }  
    }  
}