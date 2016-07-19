$(function(){

	var viewmodel = new Vue({
		el: '#myvueinstance',

		data: {
			libraries: ['angular.js', 'd3', 'node', 'jquery'],
			newlibrary: ''			
		},

		methods: {
			addLibrary: function(){
				this.libraries.push(this.newlibrary);
				this.newlibrary = '';
			},

			deleteLibraries: function(){
				this.libraries= [];
			}
		}
	});
});