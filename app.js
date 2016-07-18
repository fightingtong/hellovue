$(function () {
	new Vue({
	    el:'#app',
	    data: {
	        message:'hello vue.js.'
	    },
	    methods:{
	    	doSomething: function(){
	    		alert("vue");
	    	}
	    }
	});
});