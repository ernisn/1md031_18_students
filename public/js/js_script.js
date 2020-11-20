Vue.component('order-component', {
	props: ['order'],
	filters: {
		oneMoreBurger(amount) {
			return amount + 1;
		},
		fullName(value) {
			return `$(value.name)`;
		}
	},
	methods: {
    	placeOrder(order) {
    		order.amount = order.amount + 1;
    	},
	},
	template: `
	<div>
		<h4>{{order | fullName}}</h4>
		<h5>amount: {{order.amount}}</h5>
    	<button v-on:click="placeOrder(order)">Order</button>
    	<input v-model="order.name"/>
        <input v-model="order.name"/>
    </div>
	`

});

const ord = new Vue({
    el: "#butt",
    data:{
    	orders: [
    		{
    			name: "Super Giant Burger",
    			amount: 1,
			},
			{
				name: "Chicken Giant Burger",
				amount: 1,
			}
		],
    },
    template: `
    <div>
    	<order-component v-for="item in orders" v-bind:order="item"/>
    </div>
	`
})




