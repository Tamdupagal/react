export const questions = [
		{
			questionText: 'What is the capital of France?',
			answerDetail: {
				type : 'mcq',
				answerOptions : [
				{ answerText: 'New York', isCorrect: false },
				{ answerText: 'London', isCorrect: false },
				{ answerText: 'Paris', isCorrect: true },
				{ answerText: 'Dublin', isCorrect: false },
			]},
		},
		{
			questionText: 'Who is CEO of Tesla?',
			answerDetail: {
				type: 'mcq',
				answerOptions: [
					{ answerText: 'Jeff Bezos', isCorrect: false },
					{ answerText: 'Elon Musk', isCorrect: true },
					{ answerText: 'Bill Gates', isCorrect: false },
					{ answerText: 'Tony Stark', isCorrect: false },
				]
			},
		},
		{
			questionText: 'The iPhone was created by which company?',
			answerDetail: {
				type: 'mcq',
				answerOptions: [
					{ answerText: 'Apple', isCorrect: true },
					{ answerText: 'Intel', isCorrect: false },
					{ answerText: 'Amazon', isCorrect: false },
					{ answerText: 'Microsoft', isCorrect: false },
				]
			},
		},
		{
			questionText: 'How many Harry Potter books are there?',
			answerDetail: {
				type: 'mcq',
				answerOptions: [
					{ answerText: '1', isCorrect: false },
					{ answerText: '4', isCorrect: false },
					{ answerText: '6', isCorrect: false },
					{ answerText: '7', isCorrect: true },
				]
			},
		},
		{
			questionText: 'Tell me about yourself !',
			answerDetail: {
				type: 'text',
			},
		},
	];
