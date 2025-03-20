import { useRef } from "react";

export default function Answers({
  answers,
  selectedAnswer,
  answerState,
  onSelect,
}) {
  // REF does not changes during rerender
  const shuffledAnswers = useRef();

  if (!shuffledAnswers.current) {
    shuffledAnswers.current = [...answers];
    // shuffle answers
    shuffledAnswers.current.sort(() => Math.random() - 0.5);
  }

  return (
    <ul id="answers">
      {shuffledAnswers.current.map((answer) => {
        const isSelected = selectedAnswer === answer;
        let cssClass = "";
        if (answerState === "answered" && isSelected) {
          cssClass = "selected";
        }
        if (
          (answerState === "correct" || answerState === "wrong") &&
          isSelected
        ) {
          cssClass = answerState;
        }
        // when key is set to index -> the button wont loose focus -> the styling stays on it
        return (
          <li key={answer} className="answer">
            <button
              onClick={() => onSelect(answer)}
              className={cssClass}
              disabled={answerState !== ""}
            >
              {answer}
            </button>
          </li>
        );
      })}
    </ul>
  );
}
