$( document ).ready(function() {
	console.log('list');
	let myInfo =
		`<div>
			Today user {{name}} is going to do next:
			<ul class="people_list">
  				{{#each people}}
    				<li>{{this}}</li>
  				{{/each}}
			</ul>
			{{#if author}}
    			<h1>Добрий вечір</h1>
    			{{else}}
    			<h1>Допобачення</h1>
  			{{/if}}
		</div>`;
	let template = Handlebars.compile(myInfo);
	let data = template({
		name: 'Andrew',
		people: [
			"Learn Handlebars",
			"Learn React",
			"Learn English",
		],
		author: false,
	});

	$('.todos').html(data);
});