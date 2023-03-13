'use strict';

//New application instance
const { createApp } = Vue;

createApp({
    //Root component
    //Value for app instance binding
    data() {
        return {
            h1Content: 'Questo è sempre legato alla proprietà creata',
            imageSrc: 'https://picsum.photos/400/300'
        };
    },
    //Function used in the instance
    methods: {
        generateRandom(min, max){
            return Math.floor(Math.random() * (max - min + 1) ) + min; 
        },
        changeSize(){
            const min = this.generateRandom(100, 800);
            const max = this.generateRandom(100, 700);
            this.imageSrc = `https://picsum.photos/${min}/${max}`;
        }
    }
}).mount('#app'); //Mounting app (metod)