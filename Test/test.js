const username = new Vue({
    el: '#app',
    data: {
        userName: "Alexandrina"
    }
})

var application = new Vue({
    el: '#application',
    data: {
        birthDate: new Date()
    },
        computed:{
          calculateAge() {
            var today = new Date();
            var birthDate = new Date();
            var age = today.getFullYear() - birthDate.getFullYear();
            return age;
          }
          
        }
      })
 
var app3 = new Vue({
    el: '#application',
    data: {
        JavaScript:1,
        Python:0.7,
        Java:1.3,
    }
})