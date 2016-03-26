var wrapper
var test = {
pole: function () {
	wrapper= document.createElement('div');
	wrapper.classList.add('wrapper');
	document.body.appendChild(wrapper);
	wrapper.innerHTML='<h3>Тест по программирорванию</h3>';
},
block1: function () {
	var block1 = document.createElement('div');
	block1.classList.add('block1');
	wrapper.appendChild(block1);
	block1.innerHTML= '<h4>1. Вопрос №1</h4>'
	+ '<p><input type="checkbox" name="a" value="1"> Вариант ответа №1</p>' 
	+ '<p><input type="checkbox" name="a" value="2"> Вариант ответа №2</p>' 
	+ '<p><input type="checkbox" name="a" value="3"> Вариант ответа №3</p>'; 
	},
block2: function () {
	var block2 = document.createElement('div');
	block2.classList.add('block2');
	wrapper.appendChild(block2);
	block2.innerHTML= '<h4>1. Вопрос №2</h4>'
	+ '<p><input type="checkbox" name="a" value="1"> Вариант ответа №1</p>' 
	+ '<p><input type="checkbox" name="a" value="2"> Вариант ответа №2</p>' 
	+ '<p><input type="checkbox" name="a" value="3"> Вариант ответа №3</p>'; 
	},
block3: function () {
	var block3 = document.createElement('div');
	block3.classList.add('block3');
	wrapper.appendChild(block3);
	block3.innerHTML= '<h4>1. Вопрос №3</h4>'
	+ '<p><input type="checkbox" name="a" value="1"> Вариант ответа №1</p>' 
	+ '<p><input type="checkbox" name="a" value="2"> Вариант ответа №2</p>' 
	+ '<p><input type="checkbox" name="a" value="3"> Вариант ответа №3</p>'; 
	},
submit: function () {
	var submit = document.createElement('p');
	submit.classList.add('button');
	wrapper.appendChild(submit);
	submit.innerHTML= '<input type="submit" value="Проверить мои результаты">' ; 
	}
}
test.pole();
test.block1();
test.block2();
test.block3();
test.submit();
