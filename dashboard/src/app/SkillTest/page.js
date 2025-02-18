"use client";

import SkillList from "./components/SkillCard";
import ProgressTracker from "./components/ProgressBar";
import QuizSection from "./components/QuizQuestion";

export default function SkillTest() {
  return (
    <div className="p-5 space-y-4">
      <h1 className="text-2xl font-bold">Skill Test</h1>
      <ProgressTracker />
      <SkillList />
      <QuizSection />
    </div>
  );
}