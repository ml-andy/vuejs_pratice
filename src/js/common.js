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
				// console.log(a);
				// console.log(b);
				if (value <= 10 ) return '太小'
				return value
			},
			checkNum2: function (value) {
				// console.log(value);
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
	
	var app11 = new Vue({
		el: '#app-11',
		data: {
			message: 'ANDY',
			ani: 'on'
		},
		computed: {
			changeMsg: function(){
				return this.message + ' 王逸賢' 
			}
		}
	});

	var app12 = new Vue({
		el: '#app-12',
		data: {
			firstName: 'Foo',
			lastName: 'Bar'
		},
		computed:{
			fullName: {
				// return this.firstName + ' ' + this.lastName
				// getter
				get: function () {
					return this.firstName + ' ' + this.lastName
				},
				// setter
				set: function (newValue) {
					console.log(newValue);
					var names = newValue.split(' ')
					this.firstName = names[0]
					this.lastName = names[names.length - 1]
				}
			}
		}
	});

	var app13 = new Vue({
		el: '#app-13',
		data: {
			question: '',
			answer: 'I cannot give you an answer until you ask a question!',
			timeout:''
		},
		watch: {
			// whenever question changes, this function will run
			question: function (newQuestion) {
				this.answer = 'Waiting for you to stop typing...';
				this.getAnswer();
			}
		},
		methods: {
			getAnswer: function () {
				clearTimeout(this.timeout);
				this.timeout = setTimeout(function(){
					var vm = this
					if (this.question.indexOf('?') === -1) {
						vm.answer = 'Questions usually contain a question mark. ;-)';
						return
					}
					vm.answer = 'Thinking...';
				}.bind(this),500);
			}
		}
	});

	var app14 = new Vue({
		el: '#app-14',
		data:{
			active: 'word',
			on: true
		}
	});

	var app15 = new Vue({
		el: '#app-15',
		data: {
			// classObject:{
				isOn: true,
				off: null 
			// }
		},
		computed: {
			classObject: function () {
				return {
					on: this.isOn && !this.off,
					off: true
				}
			}
		}
	});

	var app16 = new Vue({
		el: '#app-16',
		data: {
			styleObject:{
				fontSize: '20px',
				color: '#999'
			},
			mulitstyleObject: {
				opacity: 0.8,
				display: 'block'
			}
		}
	});
	
	var app17 = new Vue({
		el: '#app-17',
		data:{
			show: false
		},
		methods:{
			isShow:function(){
				if(this.show) this.show = false;
				else this.show = true;
			}
		}
	})

	var app18 = new Vue({
		el: '#app-18',
		data:{
			ok:true
		}
	})

	var app19 = new Vue({
		el: '#app-19',
		data:{
			ok:false
		}
	})

	var app20 = new Vue({
		el: '#app-20',
		data:{
			msgg:'parentYO',
			items:[
				{msg:'andy'},
				{msg:'jacky'},
				{msg:'mike'},
				{msg:'scars'}
			]
		}
	})

	var app21 = new Vue({
		el: '#app-21',
		data:{
			Object:{
				city: '台北',
				area: '大安區',
				address: '通化街39巷62弄35號2樓'
			}
		}
	})

	Vue.component('todo-item2', {
		template: '\
			<li>\
			{{ title }}\
			<button @click="$emit(\'remove\')">X</button>\
			</li>\
		',
		props: ['title']
	});
	new Vue({
		el: '#todo-list-example',
		data: {
			newTodoText: '',
			todos: [
				'Do the dishes',
				'Take out the trash',
				'Mow the lawn'
			]
		},
		methods: {
			addNewTodo: function () {
				this.todos.push(this.newTodoText)
				this.newTodoText = ''
			}
		}
	});

	var app22 = new Vue({
		el: '#app-22',
		data:{
			numbers:[ 'a', 'b', 'c', 'd', 'e' ]
		},
		computed:{
			evenNumbers: function () {
					return this.numbers.filter(function (number) {
						return number
					})
			}
		}
	});

	var app23 = new Vue({
		el: '#app-23',
		data:{
			clickTime: 0
		},
		methods:{
			addTime:function(e,word){
				alert(word);
				console.log('我是第' + $(e.target).index()+ '個!');
				this.clickTime +=1;
			}
		}
	});

	var app24 = new Vue({
		el: '#app-24',
		methods:{
			enterEvent:function(){
				alert('enter');
			},
			upEvent:function(){
				alert('up');
			}
		}
	});

	var app25 = new Vue({
		el: '#app-25',
		data: {
			msg: ''
		}
	})

	var app26 = new Vue({
		el: '#app-26',
		data:{
			msg:''
		}
	})

	var app27 = new Vue({
		el: '#app-27',
		data:{
			zzzz:false
		},
		methods:{
			checkAgree:function(){
				alert('checked:'+this.zzzz);
			}
		}
	})

	var app28 = new Vue({
		el:'#app-28',
		data:{
			checkname:[],
			checkname2:[],
			checkNum:[]
		},
		methods: {
			checkAgree:function(){
				alert('被選中的有:'+this.checkname + this.checkname2 + this.checkNum);
			}
		}
	})

	var app29 = new Vue({
		el: '#app-29',
		data:{
			selected:'123',
			selectedddd:'',
			numberinput:'',
			msg:'12',
			option:false
		}
	})
	
	Vue.component('my-component', { //不支援大寫寫法
		template: '<div>這是一個component!!</div>'
	})
	var app30 = new Vue({
		el: '#app-30'
	})
	
	var child = {
		template: '<span>這是一個component child!!</span>'
	};
	var app31 = new Vue({
		el: '#app-31',
		components:{
			'my-sec-component': child
		}
	})

	// Vue.component('bt-com', { //不支援大寫寫法
	// 	template: '<button @click="btclick" >{{ counter }}</button>',
	// 	data:function(){
	// 		return data
	// 	}
	// })
	var app32 = new Vue({
		el: '#app-32',
		data:{
			parentMsg: '這是一個parentMsg',
			pppMsg: '這是一個pppMsg'
		},
		components:{
			'bt-com': {
				data:function(){
					return {
						counter:2
					}
				},
				template: '<button @click="btclick">{{ counter }}</button>',
				methods:{
					btclick:function(){
						this.counter+=1;
					}
				}
			},
			'span-com': {
				props: ['message'],
				data:function(){
					return {
						spancounter:this.message
					}
				},
				template: '<button @click="btclick">{{ spancounter }}</button>',
				methods:{
					btclick:function(){
						this.spancounter+=1;
					}
				}
			},
			'b-com':{
				props: ['message'],
				computed: {
					normalizedSize: function () {
						// this.message = this.message +'?';
						return this.message
					}
				},
				template: '<b>{{ normalizedSize }}</b>',
			}
		},
		methods:{
			checkCounter:function(){
				console.log(this.$children[0].counter);
				console.log(this.$children[1].counter);
				console.log(this.$children[2].spancounter);
				this.pppMsg = this.pppMsg + '?';
			}
		}
	})

	var app33 = new Vue({
		el:'#app-33',
		data:{
			total:0
		},
		components:{
			'button-com':{
				data:function(){
					return {
						counter:0
					}
				},
				template: '<button class="btn" @click="goCounter">{{ counter }}</button>',
				methods:{
					goCounter:function(){
						this.counter+=1;
						this.$emit('count');
					}
				}
			}
		},
		methods:{
			goalert:function(){
				console.log('123');
			},
			countTotal:function(){
				this.total += 1;
			}
		}
	})
	
	var app34 = new Vue({
		el:'#app-34',
		data:{
			price:''
		},
		components:{
			'input-com':{
				props:['value'],
				template: '\
					<span>\
					$\
					<input\
						ref="input"\
						:value="value"\
						@input="updateValue($event.target.value)"\
					>\
					</span>\
				',
				methods:{
					updateValue:function(value){
						var formattedValue = value
						// 删除两侧的空格符
						.trim()
						// 保留 2 小数位
						.slice(0, value.indexOf('.') + 3)
						// 如果值不统一，手动覆盖以保持一致
						if (formattedValue !== value) {
							this.$refs.input.value = formattedValue
						}
						// 通过 input 事件发出数值
						this.$emit('input', Number(formattedValue))
					}
				}
			}
		},
		computed:{
			total:function(){
				return this.price
			}
		}
	})

	var app35 = new Vue({
		el:'#app-35',
		data:{
			price:'',
			many:''
		},
		components:{
			'input-com':{
				props:['value'],
				template: '<input\
						ref="input"\
						:value="value"\
						@input="updateValue($event.target.value)"\
					>',
				data:function(){
					return {
						checkTotal:this.total
					}
				},
				methods:{
					updateValue:function(value){
						var formattedValue = value
						// 删除两侧的空格符
						.trim()
						// 保留 2 小数位
						.slice(0, value.indexOf('.') + 3)
						// 如果值不统一，手动覆盖以保持一致
						if (formattedValue !== value) {
							this.$refs.input.value = formattedValue
						}
						// 通过 input 事件发出数值
						this.$emit('input', Number(formattedValue))
						// console.log(this.checkTotal);
					}
				}
			}
		},
		computed:{
			total:function(){
				var obj ={
					price:this.price,
					many:this.many
				};
				// console.log(obj);
				return obj
			}
		}
	})

	var app36 = new Vue({
		el:'#app-36',
		components:{
			'test-com':{
				template:'<div>\
					<h3>我是子组件的标题</h3>\
					<slot>\
					沒有內容時顯示這段\
					</slot>\
					</div>'
			}
		}
	})
	
	var app37 = new Vue({
		el:'#app-37',
		components:{
			'test-com':{
				template:'<div class="container">\
							<header>\
							<slot name="header"></slot>\
							</header>\
							<main>\
							<slot></slot>\
							</main>\
							<footer>\
							<slot name="footer"></slot>\
							</footer>\
						</div>'
			}
		}
	})

	var app38 = new Vue({
		el:'#app-38',
		components:{
			'child':{
				template:
				'<div class="child">\
					<slot text="hello from child" ans="hello from ans"></slot>\
				</div>'
			}
		}
	})

	var app39 = new Vue({
		el:'#app-39',
		data:{
			items:[
				{text:'aaaa'},
				{text:'bbb'},
				{text:'ccc'}
			],
			yo:[
				{text:'1111'},
				{text:'222'},
				{text:'3333'}
			]
		},
		components:{
			'test-com':{
				props:['words'],
				template:
				'<ul>\
					<slot name="item"\
					v-for="i in words"\
					:text="i.text">\
						<!-- 这里是备用内容 -->\
					</slot>\
				</ul>'
			}
		}
	})




	setTimeout(function(){
		//app12 demo
		// app12.fullName = 'John Doe' ;
		// console.log(app12.$data.firstName);
	},3000);
})//ready end  
