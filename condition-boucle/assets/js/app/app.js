export default {  
    data() {  
        return {  
            animal: "Dogs"
        };  
    },  
    methods: {  
        changeAnimal() {
            this.animal = this.animal === 'Dogs' ? 'Cats' : 'Dogs';
        }  
    }   
};
