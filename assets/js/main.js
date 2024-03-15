const { createApp } = Vue

createApp({
    data() {
        return {
            activeImage: 0,
            newMessages: '',

            contacts: [
                {
                    image: 'assets/img/avatar_1.jpg',
                    name:'Michele',
                    message: 'Ciao, come stai?',
                    hour: '16:15',
                },
                {
                    image: 'assets/img/avatar_2.jpg',
                    name:'Fabio',
                    message: 'Ciao, come stai?',
                    hour: '16:05',
                },
                {
                    image: 'assets/img/avatar_3.jpg',
                    name:'Samuele',
                    message: 'Ciao, come stai?',
                    hour: '16:03',
                },
                {
                    image: 'assets/img/avatar_4.jpg',
                    name:'Alessandro B.',
                    message: 'Ciao, come stai?',
                    hour: '15:50',
                },
                {
                    image: 'assets/img/avatar_5.jpg',
                    name:'Alessandro L.',
                    message: 'Ciao, come stai?',
                    hour: '15:45',
                },
                {
                    image: 'assets/img/avatar_6.jpg',
                    name:'Giulia',
                    message: 'Ciao, come stai?',
                    hour: '14:30',
                },
                {
                    image: 'assets/img/avatar_7.jpg',
                    name:'Lorenzo',
                    message: 'Ciao, come stai?',
                    hour: '14:00',
                },
            ]
        }
    },
    methods: {
        next() {
            console.log('prossimo contatto');
            // at the click in the .contact_name the program need to change the name, the img and the access
            // after doing that the click had to change the messagges in the chat
            this.activeImage--
            if (this.activeImage < 0) {
                this.activeImage = this.gameImages.image.length - 1
            
        },
        addMessages() {
            console.log(this.newMessages);
        }
    }
}).mount('#contacts')
