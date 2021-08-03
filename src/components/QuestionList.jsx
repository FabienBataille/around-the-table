import axios from 'axios';
import { useEffect, useState } from 'react';
import QuestionItem from './QuestionItem';
import './questionList.css';

function QuestionList(props) {
  // eslint-disable-next-line react/prop-types
  const { category } = props;
  const [questions, setQuestions] = useState([]);
  useEffect(() => {
    axios
      .get(`http://localhost:8000/questions/technos/${category}`)
      .then((response) => {
        setQuestions(response.data);
      });
  }, []);

  return (
    <div className="QuestionsJavascript">
      <h1>{category}</h1>
      <div>
        {questions.map((element) => (
          <QuestionItem
            title={element.title}
            key={element.id}
            questionId={element.id}
          />
        ))}
      </div>
    </div>
  );
}

export default QuestionList;
