import * as React from 'react';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import Button from '@mui/material/Button';
import {useEffect, useState} from 'react';

export default function Quiz() {
    const [dispQuestion, setDispQuestion] = useState(false);
    const [nextQuestion, setNextQuestion] = useState(false);
    const [currentQuestion, SetcurrentQuestion]=useState(0);
    const [selectedOption, setselectedOption] = useState('');
    const [score, setScore] = useState(0);
    const [quizEnd, setQuizEnd] = useState(false);


    const [isActive, setIsActive] = useState(false);
    const [showInputAndSelect, setShowInputAndSelect] = useState(true);

    const [showQuizForm, setShowQuizForm] = useState(false);
    const [seconds, setSeconds] = useState(300);
    const [countdown, setCountdown] = useState(10);

    useEffect(() => {
        let intervalId;

        if (isActive && seconds > 0) {
            intervalId = setInterval(() => {
                setSeconds((prevSeconds) => prevSeconds - 1);
            }, 1000);
        } else if (seconds === 0) {
            setIsActive(false);
        }
        return () => clearInterval(intervalId);
    }, [isActive, seconds]);

   /* const handleOptionChange = (event) => {
        setSelectedOption(event.target.value);
    };*/

    const handleStart = () => {
        setShowInputAndSelect(false);
        setShowQuizForm(true);
        setIsActive(true);
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
        if (showQuizForm) {
            startCountdown();
        }
    }, [showQuizForm]);

    let question="Question bank";
    return (<div className="bg-gray-200 h-screen">
        <div className="max-w-4xl  mx-auto py-10 sm:px-6 ">
            <div className="bg-white overflow-hidden shadow-xl sm:rounded-lg max-h-fit">

                {showInputAndSelect && (<>
                    <div
                        className="p-6 bg-white border-b border-gray-200 flex text-3xl font-bold justify-between">
                        <h1>Quiz</h1>
                    </div>
                    <div className="flex flex-col items-center justify-center h-96">
                        <div className="flex items-center">
                            <label className=" mr-10">Choose your field :</label>
                            <div className="flex items-center justify-center">
                                <select
                                    id="option"
                                    name="option"
                                    value={selectedOption}
                                    //onChange={handleOptionChange}
                                    className="bg-transparent focus:ring-2 text-black w-60 rounded-md border-1 py-2 pr-2 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400"
                                >
                                    <option value="">Select...</option>
                                    <option value="backend">Backend developer</option>
                                    <option value="frontend">Frontend developer</option>
                                    <option value="fullStack developer">FullStack developer</option>
                                </select>
                            </div>
                        </div>

                        <div className="flex items-center">
                            <label className="mt-10 mr-10">Enter your Email :</label>
                            <div>
                                <input
                                    type="text"
                                    name="email"
                                    id="email"
                                    className="bg-transparent focus:ring-2 focus:ring-inset focus:ring-indigo-600 text-black w-60 rounded-md border-1 mt-10 py-2 pl-2  ring-1 ring-inset placeholder:text-gray-400"
                                    placeholder="Email"
                                    required
                                />
                            </div>
                        </div>

                        <Button sx={{mt: 6, mr: 1}} variant="outlined" onClick={handleStart}>
                            Submit
                        </Button>
                    </div>
                </>)}
                {showQuizForm &&  (<>
                    <div
                        className="p-6 bg-white border-b border-gray-200 flex text-3xl font-bold justify-between">
                        <h1>Quiz</h1>
                        <h1 className="text-rose-600">{`${Math.floor(seconds / 60)}:${(seconds % 60).toString().padStart(2, '0')}`}</h1>
                    </div>
                    <form className="h-96">
                        <FormControl sx={{pt: 6, pl: 16}} variant="standard">
                            <label >{question}</label>
                            <RadioGroup
                                aria-labelledby="demo-error-radios"
                                name="quiz"
                                value={1}
                                onChange={null}
                                className="m-8"
                            >
                                <FormControlLabel value="1" control={<Radio/>} label="Response1"/>
                                <FormControlLabel value="2" control={<Radio/>} label="Response2"/>
                                <FormControlLabel value="3" control={<Radio/>} label="Response3"/>
                            </RadioGroup>
                            <div className="text-center">
                                <Button sx={{mt: 1, mr: 1, width: 6}} variant="outlined"
                                        onClick={handleStart}>
                                    Next
                                </Button>
                            </div>

                        </FormControl>
                    </form>
                </>)}

            </div>
        </div>
    </div>);
}
