var app = new Vue({
    el:'#app',
    data: {
        title: 'Dien thoai Samsung'
  }, 
  methods: {
      say: function(text){
          return 'Hello' + text;
      }
  },
})
console.log(app);

setTimeout(() => {
    app.title =' Dien thoai Oppo ';
},3000);