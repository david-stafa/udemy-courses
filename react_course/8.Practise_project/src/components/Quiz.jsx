import { useState, useCallback } from "react";
import QUESTIONS from "../questions";
import Summary from "./Summary";
import Question from "./Question";

export default function Quiz() {
  const [userAnswers, setUserAnswers] = useState([]);

  const activeQuestionIndex = userAnswers.length;
  // check if quiz is over
  const quizOver = activeQuestionIndex === QUESTIONS.length;

  // If you do not wrap this function passed as a prop to another component it will ALWAYS be a new function in a memory on every rerender
  // UNLESS wrapped in useCallback - that ensures the function is going to be always the same -> that mean no unwanted dependency triggering in useEffect
  const handleSelectAnswer = useCallback(function handleSelectAnswer(
    selectedAnswer
  ) {
    setUserAnswers((prev) => [...prev, selectedAnswer]);
  },
  []);

  const handleSkipAnswer = useCallback(
    () => handleSelectAnswer(null),
    [handleSelectAnswer]
  );

  if (quizOver) {
    return (
        <Summary userAnswers={userAnswers} />
    );
  }

  return (
    <div id="quiz">
      <Question
        key={activeQuestionIndex}
        onSkipAnswer={handleSkipAnswer} 
        onSelectAnswer={handleSelectAnswer}
        questionIndex={activeQuestionIndex}
      />
    </div>
  );
}
