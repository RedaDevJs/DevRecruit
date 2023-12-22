import React, {useEffect} from "react";
const Option = ({ options, selectedOption, reset,selectedAnswers }) => {
    const handleOptionChange = (opt) => {
        selectedOption(opt);
    };

    return (
        <div className="container mx-auto p-4">
            <div className="flex flex-col ">
                {options.map((opt, index) => {

                    return (
                        <div className="mb-2" key={index}>
                            <input
                                checked={selectedAnswers === index}
                                type="radio"
                                id={`option${index}`}
                                name="options"
                                value={opt}
                                onChange={() => handleOptionChange(index)}
                                className="mr-2"
                            />
                            <label htmlFor={`option${index}`}>{opt}</label>
                        </div>
                    )
                })}
            </div>
        </div>
    );
};

export default Option;
