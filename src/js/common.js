$(document).ready(function(){
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
		created: function () {
			// `this` 指向 vm 实例
			console.log('name is: ' + this.name);
		},
		methods: {
			changeName: function(){
				this.name = 'Wang Yi Hsien';
				// o.exampleVM.name = 'Wang Yi Hsien';
				if(this.greeting) this.greeting = false;
				else this.greeting = true;
			}
		},
		watch: {
			greeting: function(){
				console.log('zzz');
			}
		}
	});
	
})//ready end  
