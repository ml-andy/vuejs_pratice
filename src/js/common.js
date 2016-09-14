﻿$(document).ready(function(){
	var o ={
		wrp: $('.wrapper')
	};

	o.app = new Vue({
		el: '#app',
		data: {
			message: 'Hello Vue.js!'
		}
	});

	o.app_ul = new Vue({
		el: '#app_ul',
		data: {
			todos: [
				{ text: 'Learn JavaScript' },
				{ text: 'Learn Vue.js' },
				{ text: 'Build Something Awesome' }
			]
		}
	});

	o.app_methods = new Vue({
		el: '#app_methods',
		data: {
			message: 'Hello Vue.js!'
		},
		methods: {
			reverseMessage: function () {
				console.log(this.message);
			}
		}
	});

	o.app_newTodo = new Vue({
		el: '#app_newTodo',
		data: {
			newTodo: 'here',
			todos: [
				{ text: 'Add some todos' }
			]
		},
		methods: {
			addTodo: function () {
				var text = this.newTodo.trim()
				if (text) {
					this.todos.push({ text: text })
					this.newTodo = ''
				}
			},
			removeTodo: function (index) {
				this.todos.splice(index, 1)
			}
		}
	});

	o.exampleVM = new Vue({
		el: '#example-1',
		data: {
			name: 'Andy',
			greeting: true,
			url:'https://tw.yahoo.com/',
			domclass:'p'
		},
		// created: function () {
		// 	console.log('created: ' + this.name);
		// },
		// compiled: function () {
		// 	console.log('compiled: ' + this.name);
		// },
		// ready: function () {
		// 	console.log('ready: ' + this.name);
		// },
		// destroyed: function () {
		// 	console.log('destroyed: ' + this.name);
		// },
		methods: {
			changeName: function(){
				this.name = 'Wang Yi Hsien';
				// o.exampleVM.name = 'Wang Yi Hsien';
				// o.example.fullName='Wang Yi-Hsien';
				if(this.greeting) this.greeting = false;
				else this.greeting = true;
			}
		},
		watch: {
			greeting: function(){
				// console.log('zzz');
			}
		}
	});
	o.example = new Vue({
		el: '#example',
		data: {
			firstName: 'Andy',
			lastName: 'Wang',
			isA: false,
			isB: true,
			a: 1,
			b: 100 //與 computed 衝突時，無效
		},
		created: function () {
			console.log('created: ' + this.b);
		},
		compiled: function () {
			console.log('compiled: ' + this.b);
		},
		ready: function () {
			console.log('ready: ' + this.b);
		},
		computed: {
			// 一个计算属性的 getter
			b: function () {
				return this.a + 1
			},
			fullName: {
				// getter
				get: function () {
					// console.log('get'+this.firstName+'/'+this.lastName);
					return this.firstName + ' ' + this.lastName
				},
				// setter
				set: function (newValue) {
					// console.log('set');
					var names = newValue.split(' ')
					this.firstName = names[0]
					this.lastName = names[names.length - 1]
				}
			}
		},
		methods:{
			changeClass:function(){
				if(this.isA){
					this.isA = false;
					this.isB = true;
				}else{
					this.isA = true;
					this.isB = false;
				}
			}
		}
	});
	o.example_2 = new Vue({
		el: '#example-2',
		data: {
			firstName: 'Andy',
			lastName: 'Wang',
			isC: false,
			isB: true,
			classA: 'class-a',
			a: 1,
			b: 100 //與 computed 衝突時，無效
		},
		computed: {
			// 一个计算属性的 getter
			b: function () {
				return this.a + 1
			},
			fullName: {
				// getter
				get: function () {
					// console.log('get'+this.firstName+'/'+this.lastName);
					return this.firstName + ' ' + this.lastName
				},
				// setter
				set: function (newValue) {
					// console.log('set');
					var names = newValue.split(' ')
					this.firstName = names[0]
					this.lastName = names[names.length - 1]
				}
			}
		},
		methods:{
			changeClass:function(){
				if(this.isC){
					this.isC = false;
					this.isB = true;
				}else{
					this.isC = true;
					this.isB = false;
				}
			}
		}
	});
	o.example_3 = new Vue({
		el: '#example-3',
		data: {
			fullName: '王逸賢',
			fullName2: '王婉宇',
			fullName3: '王安迪',
			classA: 'class-a',
			height: 200,
			if: true,
			show: false,
		},
		computed:{
			styleObject: function(){
				return {
					'background-color' : '#e8e8e8',
					height : this.height+'px'
				}
			}
		},
		methods: {
			changeHeight: function(){
				// this.height +=5;
				if(this.show) this.show = false;
				else this.show = true;
				if(this.if) this.if = false;
				else this.if = true;
			}
		}
	});
	
	o.example_4 = new Vue({
		el: '#example-4',
		data: {
			items:[
				{msg:'王'},
				{msg:'逸'},
				{msg:'賢'},
				{msg:'!'}
			]
		},
		methods: {
			appendItems:function(){
				this.items.push({msg:new Date()});
			}
		}
	});
	o.example_5 = new Vue({
		el: '#example-5',
		data: {
			items:{
				msg:'王',
				msg2:'逸',
				msg3:'賢',
				msg4:'!'
			}
		}
	});
})//ready end  
