// use createApp object to create a vue app
const app = Vue.createApp({

    //data
    data() {
        return {
            website: 'https://lasallecollege.lcieducation.com/',
            students: 1,
            showClasses: true,
            x: 0,
            y: 0,
            classes: [
                {name: 'Trends in Technology', time: '14:00pm EST', img:'assets/1.png', isClosed:true},
                {name: 'Artificial Intelligence', time: '16:00pm EST', img:'assets/2.jpg', isClosed:true},
                {name: 'Mathematics for Machine Learning', time: '20:00pm EST', img:'assets/3.jpg', isClosed:false }
            ]
        }
    },


    //functions
    methods: {
        
        removeStudent() {
            this.students = this.students - 1
        },

        toggleShowClasses(){
            this.showClasses = !this.showClasses
        },

        handleEvent(e, data){
            console.log(e.type)
            if (data){
                console.log(data)
            }
        },
        
        handleMouseMove(e){
            this.x = e.offsetX
            this.y = e.offsetY
        },

        toggleClosed(item){
            item.isClosed = !item.isClosed
        }

    },

    //computed
    computed: {
        filteredClasses(){
            return this.classes.filter((item) => item.isClosed )
        }
    }

    //templates
    //template: '<h2> You are welcome to the class. </h2>'

})

// specify part of web page to control
app.mount('#app')
