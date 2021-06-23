/* eslint-disable no-unused-vars */
import './javascript.css';

function QuestionItem(props) {
  // eslint-disable-next-line react/prop-types
  const { question, techno } = props;
  return (
    <div className="QuestionItem">
      <div className="question">
        <p>{question}</p>
      </div>
    </div>
  );
}

export default QuestionItem;
