import React from "react";

function QuestionList({ questions, onDeleteQuestion, onUpdateQuestion }) {

  return (
    <section>
      <h1>Quiz Questions</h1>
      <ul>
        {questions.map((question) => (
          <li key={question.id}>
            {question.prompt}
            <button onClick={() => onDeleteQuestion(question.id)}>Delete</button>
            <button onClick={() => onUpdateQuestion(question)}>Edit</button>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default QuestionList;
