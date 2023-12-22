import React, { useState, useEffect } from "react";
import { Button } from "@mui/material";
import { quizDataList } from "../assets/data/quizDataList";
import Question from "../components/Ui/Question";


const Quiz = () => {
    const [selectedOption, setSelectedOption] = useState("");
    const [showQuizForm, setShowQuizForm] = useState(false);
    const [showScore, setShowScore] = useState(false);
    const [isActive, setIsActive] = useState(false);
    const [questions, setQuestions] = useState([]);
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [seconds, setSeconds] = useState(300);
    const [countdown, setCountdown] = useState(10);
    const [selectedAnswers, setSelectedAnswers] = useState(0);
    const [score, setScore] = useState(0);
    const [userOptions, setUserOptions] = useState([]);


    const [resetOptions, setResetOptions] = useState(false);
    const handleOptionChange = (changeEvent) => {
        const selectedOptionIndex = changeEvent.target.value;
        setSelectedOption(selectedOptionIndex);
        setUserOptions((prevOptions) => [...prevOptions, selectedOptionIndex]);
    };


    const calculateScore = (answer) => {
        setSelectedAnswers(answer)

    };



    const startCountdown = () => {
        const intervalId = setInterval(() => {
            setCountdown((prevCountdown) => prevCountdown - 1);
        }, 1000);

        setTimeout(() => {
            clearInterval(intervalId);
        }, countdown * 1000);
    };

    useEffect(() => {
        if (isActive && seconds === 0) {
            setIsActive(false);
        }
    }, [isActive, seconds]);

    const startQuiz = () => {
        setShowQuizForm(true);
        setSelectedAnswers(9)
    };
    const handleNext = () => {
        const selectedOptionIndex = userOptions[currentQuestionIndex];

        if(selectedAnswers === questions[currentQuestionIndex].answer) {
            setScore(score + 1)
            setSelectedOption("");
        }
        setResetOptions(true);
        setSelectedOption("");

        setCurrentQuestionIndex(currentQuestionIndex + 1);
        setSelectedAnswers(9)

    };

   /* useEffect(() => {
        // Reset the options after rendering the next question
        setResetOptions(false);
    }, [currentQuestionIndex]);*/

    useEffect(() => {
        // Fetch or set quiz data here
        setQuestions(quizDataList);
    }, []); // Ensure the effect runs only once when the component mounts

    useEffect(() => {
        if (showQuizForm) {
            const timer = setInterval(() => {
                setSeconds(seconds - 1);
            }, 1000);
            return () => clearInterval(timer);
        }
    }, [showQuizForm, seconds]);

    useEffect(() => {
        if (currentQuestionIndex === 10) {
            setShowQuizForm(false);
        }
    }, [currentQuestionIndex]);

    useEffect(() => {
        if (seconds === 0) {
            calculateScore();
        }
    }, [seconds]);



    return (
        <div className="bg-gray-200 w-auto h-screen ">
            <div className="max-w-xl mx-auto py-10 sm:px-6 ">
                <div className="bg-white overflow-hidden shadow-xl sm:rounded-lg">
                    {!showQuizForm ? (
                        <>
                            <div className="flex flex-col items-center justify-center h-96">
                                <div className="flex items-center">

                                    <label className="mr-10">Choose your field :</label>
                                    <div className="flex items-center justify-center">
                                        <select
                                            id="option"
                                            name="option"
                                            value={selectedOption}
                                            onChange={(e) => setSelectedOption(e.target.value)}
                                            className="bg-transparent focus:ring-2 text-black w-60 rounded-md border-1 py-2 pr-2 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400"
                                        >
                                            <option value="">Select...</option>
                                            <option value="backend">Backend developer</option>
                                            <option value="frontend">Frontend developer</option>
                                            <option value="fullStack developer">FullStack developer</option>
                                        </select>
                                    </div>

                                </div>

                                <Button sx={{mt: 15, mr: 1}} variant="outlined" onClick={startQuiz}>
                                    Start Quiz
                                </Button>
                            </div>
                        </>
                    ) : (
                        <>
                            <div className=" p-6 bg-white border-b border-gray-200 flex text-xl font-bold justify-between">
                                <h1 className="text-3xl">Quiz</h1>

                                <h1 className="text-rose-600 ">{`${Math.floor(seconds / 60)}:${(seconds % 60)
                                    .toString()
                                    .padStart(2, "0")}`}</h1>
                            </div>
                            <div className="flex flex-col items-center justify-center h-80 ">
                                <div className="text-xl font-bold text-center mb-6">
                                    <h1>Question {[currentQuestionIndex + 1]}/10</h1>
                                </div>
                                <div className="justify-start ml-10 mr-10">

                                    {questions.length > 0 && currentQuestionIndex < questions.length ? (
                                        <Question
                                            questionData={questions[currentQuestionIndex]}
                                            currentQuestionIndex={currentQuestionIndex + 1}
                                            myChoixIndex={calculateScore}
                                            handleOptionChange={handleOptionChange}
                                            selectedAnswers={selectedAnswers}
                                        />
                                    ) : null}
                                </div>
                                <div className="flex justify-center">
                                    {currentQuestionIndex < 9 ? (
                                        <Button
                                            sx={{mt: 1, mr: 1, width: 6}}
                                            variant="outlined"
                                            onClick={handleNext}
                                        >
                                            Next
                                        </Button>
                                    ) : (
                                        <Button
                                            sx={{mt: 1, mr: 1, width: 6}}
                                            variant="outlined"
                                            onClick={() => {
                                                calculateScore();
                                                setShowQuizForm(false);
                                            }}
                                        >
                                            Finish
                                        </Button>

                                    )}
                                </div>
                            </div>
                        </>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Quiz;
