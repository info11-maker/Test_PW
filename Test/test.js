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
        Limbaj:{
            'JavaScript':1,
            'Python':0.7,
            'Java':1.3,
        },
        Experienta:{
             1:10000,
             2:12000,
             3:13000,
             4:14000,
             5:15000,
    },
},
    watch: {
        salariul: function (val) {
            this.Limbaj = val;
            this.Experienta = val * Experienta;
        },
    }
})
