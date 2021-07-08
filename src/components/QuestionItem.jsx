/* eslint-disable no-unused-vars */
import './questionItem.css';
import { Link } from 'react-router-dom';

function QuestionItem(props) {
  // eslint-disable-next-line react/prop-types
  const { title, techno, questionId } = props;
  return (
    <div className="QuestionItem">
      <div className="question" />
      <h3 className="title">{title}</h3>
      <button type="button">
        <Link to={`/detail-question/${questionId}`}>Plus de détails</Link>
      </button>
    </div>
  );
}

export default QuestionItem;
