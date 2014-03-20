var AlumnoModel = Backbone.Model.extend();

var AlumnoCollection = Backbone.Collection.extend({
	model: AlumnoModel,
	url: '/api/alumnos'
});

var alumnos = new AlumnoCollection();

var AlumnoView = Backbone.View.extend({
	el: '.alumnos-lista',

	initialize: function(){
		alumnos.on('add', this.render);
		alumnos.fetch();
	},

	render: function(modelo){
		var vista = new AgregarLibroLista({model: modelo});
		$('.alumnos-lista').append(vista.el);
	}
});

var AgregarLibroLista = Backbone.View.extend({
	template: _.template( $('#listarAlumnostpl').html() ),
	initialize: function(){
		this.render();
	},
	render: function(){
		console.log(this.$el);
		this.$el.html( this.template( this.model.toJSON() ));
		return this;
	}
});