export const QUIZ_QUESTION = (data) => {
	return data.map((item,index) => (
		{
			no : index+1,
			questionText: item.question,
			type: item.question_type,
			correctAns: item.answer||"",
			options : item.options || ""
		}))
} 