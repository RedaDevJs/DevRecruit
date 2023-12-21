import React from 'react';
import sadImg from "../assets/all-images/sad.png";

export default function NotFound() {
    return (
        <div className="flex items-center justify-center h-screen">
            <div className="text-center mx-auto max-w-3xl flex flex-col items-center">
                <img src={sadImg} alt="Sad Face"/>
                <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-6xl capitalize m-0">
                    404
                </h1>
                <h3 className="text-xl  font-bold tracking-tight text-gray-900 sm:text-3xl capitalize m-4">
                    Sorry, the page not found
                </h3>
                <h5 className=" text-xl font-bold tracking-tight text-gray-900 capitalize mb-20">
                    The link you followed is probably broken or the page has been removed
                </h5>
            </div>
        </div>
    )
}
