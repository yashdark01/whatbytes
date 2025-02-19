"use client";

import QuestionAnalysis from "./components/QuestionAnalysis";
import QuizSection from "./components/QuizQuestion";
import SyllabusAnalysis from "./components/SyllabusAnalysis";
import ComparisonGraph from "./components/Graph";

export default function SkillTest() {
  return (
    <div className="p-2 md:p-4 space-y-4 w-full">
      <h1 className="text-lg text-gray-600">Skill Test</h1>

      <div className="flex flex-col md:flex-row gap-4 sm:gap-8">
        
        <div className="w-full md:w-[60%] flex flex-col gap-4 sm:gap-6">
          <QuizSection/>
          <ComparisonGraph/>
        </div>
        <div className="w-full md:w-[40%] flex flex-col gap-4 sm:gap-6">
          <SyllabusAnalysis />
          <QuestionAnalysis />
        </div>
      </div>
    </div>
  );
}