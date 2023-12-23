<<<<<<< HEAD
import React from "react";
import Option from "../Ui/Option";

const Question = ({
  questionData,
  currentQuestionIndex,
  myChoixIndex,
  selectedAnswers,
}) => {
  const handleOptionChange = (optionIndex) => {
    myChoixIndex(optionIndex);
  };

  return (
    <>
      <div className="question" data-question-id={questionData.id}>
        <h3>{`${currentQuestionIndex}. ${questionData.question}`}</h3>
        <Option
          selectedAnswers={selectedAnswers}
          options={questionData.option}
          selectedOption={handleOptionChange}
        />
      </div>
    </>
  );
=======
import React, { useState } from "react";
import Option from "../Ui/Option";

const Question = ({ questionData, currentQuestionIndex, myChoixIndex ,selectedAnswers}) => {
    

    const handleOptionChange = (optionIndex) => {
        myChoixIndex(optionIndex)
    };

    return (
        <>
            <div className="question" data-question-id={questionData.id}>
                <h3>{`${currentQuestionIndex}. ${questionData.question}`}</h3>
                <Option
                    selectedAnswers={selectedAnswers}
                    options={questionData.option}
                    selectedOption={handleOptionChange}
                />
            </div>
        </>

    );
>>>>>>> origin/main
};

export default Question;
