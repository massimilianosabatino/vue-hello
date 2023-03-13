'use strict';

//New application instance
const { createApp } = Vue;

createApp({
    //Root component
    data() {
        return {
            h1Content: 'Questo è sempre legato alla proprietà creata',
            imageSrc: 'https://picsum.photos/400/300'
        };
    }
}).mount('#app'); //Mounting app (metod)