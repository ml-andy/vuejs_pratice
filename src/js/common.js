$(function(){
	var app = new Vue({
		el:'#app',
		data:{
			message: 'Hello Andy'
		}
	});
	var app2 = new Vue({
		el:'#app-2',
		data:{
			message: 'Hello Andy' + new Date()
		}
	});
	var app3 = new Vue({
		el: '#app-3',
		data:{
			see: true
		}
	});
	var app4 = new Vue({
		el: '#app-4',
		data: {
			userid:[
				{text:'aaaa'},
				{text:'bbb'},
				{text:'ccc'}
			]
		}
	});
	var app5 = new Vue({
		el: '#app-5',
		data:{
			message: 'v-on click測試'
		},
		methods:{
			btnClick: function(){
				alert(this.message);
			}
		}
	});
	var app6 = new Vue({
		el: '#app-6',
		data:{
			message:"12345678"
		}
	});

	Vue.component('todo-item',
		{
			props: ['todo'],
			template: '<li>{{ todo.text }}</li>'
		}
	);

	var app7 = new Vue({
		el: '#app-7',
		data:{
			todos:[
				{text:'aaa'},
				{text:'bbb'},
				{text:'ccc'}
			]
		}
	});

	var app8 = new Vue({
		el: '#app-8',
		data: {
			msg:'andy',
			vhtml: '<a class="on" href="https://tw.yahoo.com/" target="blank">測試</a>'
		}
	});

	var app9 = new Vue({
		el: '#app-9',
		data: {
			msg:'我是OK',
			nomsg: '我是不OK',
			ok: true
		},
		methods: {
			change: function(){
				if(this.ok) this.ok = false;
				else this.ok = true;
			}
		}
	});

	var app10 = new Vue({
		el: '#app-10',
		data: {
			msg: 10,
			mgg: 10000
		},
		filters: {
			checkNum: function (value,a,b) {
				console.log(a);
				console.log(b);
				if (value <= 10 ) return '太小'
				return value
			}
		},
		methods: {
			change: function(){
				if(this.msg<=10) this.msg=11;
				else this.msg=5;
			}
		}
	});


	// setTimeout(function(){

	// },3000);
})//ready end  
