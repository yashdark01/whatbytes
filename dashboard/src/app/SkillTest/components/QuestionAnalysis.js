"use-client";

import { useSelector } from "react-redux";

const ScoreAnalysis = () => {
  const { currentScore } = useSelector((state) => state.user);
  const total = 15;
  const percentage = (currentScore / total) * 100;

  return (
    <div className="border border-gray-200 rounded-lg p-6 min-w-full mx-auto font-sans ">
      <div className="flex justify-between items-start">
        <h3 className="text-lg font-semibold mb-3">Question Analysis</h3>
        <span className="text-blue-600 text-right font-semibold text-sm">
          {currentScore}/{total}
        </span>
      </div>
      <span className=" text-sm text-gray-600">
        <b>
          You scored {currentScore} questions correct out of {total}.
        </b>
        However, it still needs some improvements.
      </span>

      <div className="relative w-36 h-36 mx-auto mt-4">
        <svg className="w-full h-full" viewBox="0 0 36 36">
          <circle
            cx="18"
            cy="18"
            r="16"
            fill="none"
            stroke="#e5e7eb"
            strokeWidth="4"
          />

          <circle
            cx="18"
            cy="18"
            r="16"
            fill="none"
            stroke="#3b82f6"
            strokeWidth="4"
            strokeDasharray={`${percentage}, 100`}
            transform="rotate(90 18 18)"
          />
        </svg>
        <div className="absolute inset-0 flex items-center text-2xl justify-center">
          🎯
        </div>
      </div>
    </div>
  );
};

export default ScoreAnalysis;
