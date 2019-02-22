$( document ).ready(function() {
	console.log('greet');
	let myInfo = "<p>My name is {{name}}, I am {{age}} years old and I live in {{city}}</p>";
	let template = Handlebars.compile(myInfo);
	let data = template({
		name: 'Andrew',
		age: '32',
		city: 'Kyiv',
	});

	$('#info').html(data);
});