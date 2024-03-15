const { createApp } = Vue

createApp({
    data() {
        return {
            contacts: [
                {
                    image: 'assets/img/avatar_1.jpg',
                    name: 'Michele',
                    message: 'Ciao, come stai?',
                    hour: '16:15',
                },
                {
                    image: 'assets/img/avatar_2.jpg',
                    name: 'Fabio',
                    message: 'Ciao, come stai?',
                    hour: '16:05',
                },
                {
                    image: 'assets/img/avatar_3.jpg',
                    name: 'Samuele',
                    message: 'Ciao, come stai?',
                    hour: '16:03',
                },
                {
                    image: 'assets/img/avatar_4.jpg',
                    name: 'Alessandro B.',
                    message: 'Ciao, come stai?',
                    hour: '15:50',
                },
                {
                    image: 'assets/img/avatar_5.jpg',
                    name: 'Alessandro L.',
                    message: 'Ciao, come stai?',
                    hour: '15:45',
                },
                {
                    image: 'assets/img/avatar_6.jpg',
                    name: 'Giulia',
                    message: 'Ciao, come stai?',
                    hour: '14:30',
                },
                {
                    image: 'assets/img/avatar_7.jpg',
                    name: 'Lorenzo',
                    message: 'Ciao, come stai?',
                    hour: '14:00',
                },
                {
                    image: 'assets/img/avatar_8.jpg',
                    name: 'Gianluca',
                    message: 'Ciao, come stai?',
                    hour: '14:27',
                },
            ]

        }
    },
    methods: {
        next() {
            console.log('prossimo contatto');
            let contactInfo = document.querySelector('.contact_name')
            // at the click in the .contact_name the program need to change the name, the img and the access
            // after doing that the click had to change the messagges in the chat
        },
    }
}).mount('#contacts')

const { createMessages } = Vue

createMessages({
    data() {
        return {
            newMessages: '',
            usersMessages: [

            ],
        }
    },
    methods: {
        addMessages() {
            console.log(this.newMessages);
            this.usersMessages.unsift(this.newMessages)
        }
    }

}).mount('#messages')