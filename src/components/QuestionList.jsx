import QuestionItem from './QuestionItem';

function QuestionList(props) {
  // eslint-disable-next-line react/prop-types
  const { category } = props;
  const questionsList = [
    {
      id: 1,
      question: 'Comment déclarer une variable ?',
      techno: 'javascript',
    },
    {
      id: 2,
      question: 'Comment selectionner une table?',
      techno: 'sql',
    },
  ];
  return (
    <div className="QuestionsJavascript">
      <h1>{category}</h1>
      <div>
        {questionsList.map((element) => (
          <QuestionItem
            question={element.question}
            key={element.id}
            techno={element.techno}
          />
        ))}
      </div>
    </div>
  );
}

export default QuestionList;
