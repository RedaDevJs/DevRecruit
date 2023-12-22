import { useNavigate } from "react-router-dom";
import * as React from "react";

export default function Home() {
  const navigate = useNavigate();
  const StartQuiz = () => {
    navigate("/quiz");
  };
  return (
    <div className="bg-white">
      <div className="relative isolate flex items-center justify-center h-screen">
        <div className="mx-auto max-w-4xl   ">
          <div className="text-center">
            <h1 className="text-xl font-bold tracking-tight text-gray-900 sm:text-5xl capitalize">
              finding a job is not a challenge <br />
              when you possess tech talent.
            </h1>

            <p className="mt-6 text-lg leading-8 text-gray-600 capitalize">
              Ready to start your quiz?
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <button
                onClick={StartQuiz}
                className="rounded-md bg-teal-300 px-3.5 py-2.5 text-sm font-semibold text-black shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Get started
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
