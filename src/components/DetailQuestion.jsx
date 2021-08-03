import axios from 'axios';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

function DetailQuestion() {
  const { id } = useParams();
  const [question, setQuestion] = useState({ title: '', message: '' });

  useEffect(() => {
    axios.get(`http://localhost:8000/questions/${id}`).then((response) => {
      console.log('question', response);
      setQuestion(response.data);
    });
    axios
      .get(`http://localhost:8000/questions/${id}/message`)
      .then((response) => {
        console.log(response.data.message);
      });
  }, []);
  return (
    <div className="detail-question">
      <h1>Détail de la question</h1>
      <p>{question.title}</p>
    </div>
  );
}

export default DetailQuestion;
