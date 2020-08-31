const log = console.log;
//let url = 'http://jsonplaceholder.typicode.com/users';

var form = document.querySelector('form');
var output = document.querySelector('.output');
var template = document.querySelector('.template').textContent;
var items = 'ITEMS';

var keepingLocal = JSON.parse(localStorage.getItem(items)) || [];


form.addEventListener('submit', save);

function save(event){
	event.preventDefault();
	var elts = form.elements;
	var inputKey = elts[1];
	var inputValue = elts[2];
	
	if(inputKey.value && inputValue.value) {
		
		var obj = {key: inputKey.value, value: inputValue.value};
		keepingLocal.push(obj);
		localStorage.setItem(items, JSON.stringify(keepingLocal));
		keepingLocal = JSON.parse(localStorage.getItem(items));
		
		output.innerHTML= '';
		
		keepingLocal.forEach(cur => {
			var p = '';
			p = template.replace('{key}', cur.key);
			p = p.replace('{value}', cur.value);
			output.insertAdjacentHTML('beforeend', p);
		});
		
		event.target.reset();
	}
}

localStorage.clear();






























