'use strict';

//New application instance
const { createApp } = Vue;

createApp({
    //Root component
    data() {
        return {
            h1Content: 'Questo è sempre legato alla proprietà creata'
        };
    }
}).mount('#app'); //Mounting app (metod)