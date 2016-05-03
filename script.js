
var contentQuestion = [
	{question: 'Вопрос №1',
	answers: ['вариант ответа №1','вариант ответа №2','вариант ответа №3']},
	{question: 'Вопрос №2',
	answers: ['вариант ответа №1','вариант ответа №2','вариант ответа №3']},
	{question: 'Вопрос №3',
	answers: ['вариант ответа №1','вариант ответа №2','вариант ответа №3']}
];

var wrapper;
var buttonSub;

var content = {
	generateDiv: function () {
		wrapper = document.createElement('div');
		wrapper.classList.add('wrapper');
	},
	generateHeader: function () {
		document.body.appendChild(wrapper);
		wrapper.innerHTML='<h3>Тест по программирорванию</h3>';
	},
	
	generateQuestion: function () {
		for (var i = 0; i < contentQuestion.length; i++) {
			var questions = document.createElement("h4");
			questions.innerHTML = contentQuestion[i].question;
			wrapper.appendChild(questions);

			for (var j = 0; j < 3; j++) {

				var answer= document.createElement('p');

				var checkbox = document.createElement('input');
				checkbox.setAttribute('type', 'checkbox');

				var answerName = document.createElement("span");
				answerName.innerHTML = ' ' +  contentQuestion[i].answers[j];

				wrapper.appendChild(answer);

				answer.appendChild(checkbox);
				
				answer.appendChild(answerName);
			}
		}
	},
	generateSubmit: function () {
    	buttonSub = document.createElement('input');
    	buttonSub.classList.add('button');
    	buttonSub.setAttribute('type', 'submit');
    	buttonSub.setAttribute('value', 'Проверить мои результаты');
    	wrapper.appendChild(buttonSub);
    },
};

content.generateDiv();
content.generateHeader();
content.generateQuestion();
content.generateSubmit();
