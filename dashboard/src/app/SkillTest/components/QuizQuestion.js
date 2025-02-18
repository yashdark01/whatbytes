
"use client";

import { useState } from "react";

const questions = [
  {
    question: "What does HTML stand for?",
    options: [
      "Hyper Text Markup Language",
      "Hyperlinks and Text Markup Language",
      "Home Tool Markup Language",
      "High-Level Text Management Language",
    ],
    answer: "Hyper Text Markup Language",
  },
  {
    question: "Which programming language is used for React?",
    options: ["Python", "C++", "JavaScript", "Java"],
    answer: "JavaScript",
  },
  {
    question: "What is the purpose of CSS?",
    options: [
      "To structure web pages",
      "To style web pages",
      "To add interactivity",
      "To store data",
    ],
    answer: "To style web pages",
  },
];

export default function QuizSection() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);

  const handleOptionSelect = (option) => {
    setSelectedOption(option);
  };

  const handleNextQuestion = () => {
    if (selectedOption === questions[currentQuestion].answer) {
      setScore(score + 1);
    }

    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
      setSelectedOption(null);
    } else {
      setShowScore(true);
    }
  };

  return (
    <div className="border p-6 rounded-md shadow-md bg-white max-w-md mx-auto">
      <h2 className="text-xl font-bold text-center mb-4">Quiz Section</h2>
      {showScore ? (
        <div className="text-center">
          <p className="text-lg font-semibold">
            Your Score: {score} / {questions.length}
          </p>
          <button
            className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-md"
            onClick={() => {
              setCurrentQuestion(0);
              setScore(0);
              setSelectedOption(null);
              setShowScore(false);
            }}
          >
            Restart Quiz
          </button>
        </div>
      ) : (
        <div>
          <p className="text-lg font-semibold">{questions[currentQuestion].question}</p>
          <div className="mt-3 space-y-2">
            {questions[currentQuestion].options.map((option, index) => (
              <button
                key={index}
                onClick={() => handleOptionSelect(option)}
                className={`block w-full text-left px-4 py-2 rounded-md border ${
                  selectedOption === option ? "bg-blue-200" : "bg-gray-100"
                }`}
              >
                {option}
              </button>
            ))}
          </div>
          <button
            onClick={handleNextQuestion}
            disabled={!selectedOption}
            className="mt-4 w-full px-4 py-2 bg-green-500 text-white rounded-md"
          >
            Next Question
          </button>
        </div>
      )}
    </div>
  );
}