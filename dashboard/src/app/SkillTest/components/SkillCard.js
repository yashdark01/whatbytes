"use client";

export default function SkillList() {
  const skills = ["JavaScript", "React", "Node.js", "MongoDB"];
  
  return (
    <div className="border p-4 rounded-md shadow-md">
      <h2 className="text-lg font-semibold">Available Skills</h2>
      <ul className="list-disc pl-5">
        {skills.map((skill, index) => (
          <li key={index}>{skill}</li>
        ))}
      </ul>
    </div>
  );
}