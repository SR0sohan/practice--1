const app101= new Vue({
    el: "#app",
    data: {
        title: "sohan",
        desc: "welcome to vue.js",
        isItTrue: true,
        cars: ['ford','toyota','BMW','Lamborgini'],
        details:{
            name:"sulota",
            age:"18",
            address:"Cuadanga"
        },
        robot: {
            name: "jarvis"
        },
        src: "https://picsum.photos/seed/picsum/200/300",
        alt: "This is a plan",
        link: "https://www.facebook.com/",
        kotha: "My first love",
        rumu: "<strong>Bachpan ka peyaar</strong>",
        crush: "https://cdn.mos.cms.futurecdn.net/Rm76cdQPTfz2Pwiem8NNMN-1200-80.jpg",
        altr: "mi amour",
        mssg: "happy now",
        user: "Rocky",
        userAge: "20",
        expectedAge:"21",
        x: 0,
        y: 0,
        love: "Rocky",
        formData:{
            firstName:'',
            lastName:''
        },
        a:0,
        b:0,
        salary:10
    },
    methods: {
        greeting: function(){
            return this.desc;
        },
        greetings:()=>{
            return "hello world";
        },
        intro(){
            return "Introduction to vue.js";
        },
        changeUser(){
            return this.user==="rocky" ? true:false;
        },
        updateName(){
            setTimeout(()=>{
                this.user = 'Sulota'
            },3000)
        },
        getCoord(event){
            this.x = event.clientX;
            this.y = event.clientY;
        },
        reName(newName){
            this.love = newName;
        },
        handleForm(){
            console.log(this.formData);
        }
    },
    computed:{
        addToA(){
            console.log("add a");
            return this.a + this.salary;
        },
        addToB(){
            console.log("add b");
            return this.b + this.salary;
        }
    }
});
