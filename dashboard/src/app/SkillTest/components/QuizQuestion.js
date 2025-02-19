"use client";

import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateUserData } from "../../redux/userSlice"; // Adjust path as needed

const SkillTest = () => {
  const dispatch = useDispatch();
  const { rank, percentile, currentScore } = useSelector((state) => state.user);
  const [update, setUpdate] = useState(false);

  const [isUpdate, setIsUpdate] = useState(false);
  const [errors, setErrors] = useState({});
  const [formData, setFormData] = useState({ rank, percentile, currentScore });
  const [currentDate, setCurrentDate] = useState("");

  useEffect(() => {
    console.log("Redux updated → Syncing formData", {
      rank,
      percentile,
      currentScore,
    });
    setTimeout(() => {
      setFormData({
        rank: formData.rank,
        percentile: formData.percentile,
        currentScore: formData.currentScore,
      });
    }, 4000);
    console.log("Redux updated → Syncing formData", {
      rank,
      percentile,
      currentScore,
    });
    setUpdate(false);
  }, [update, rank, percentile, currentScore]);

  useEffect(() => {
    setCurrentDate(
      new Date().toLocaleDateString("en-GB", {
        day: "2-digit",
        month: "long",
        year: "numeric",
      })
    );
  }, []);

  const updateData = () => setIsUpdate(true);
  const closeModal = () => {
    setIsUpdate(false);
    setErrors({});
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: "" }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let newErrors = {};

    if (!formData.rank || isNaN(formData.rank) || formData.rank <= 0)
      newErrors.rank = "Rank must be a number greater than zero.";

    if (
      !formData.percentile ||
      isNaN(formData.percentile) ||
      formData.percentile <= 0
    )
      newErrors.percentile = "Percentile must be a number greater than zero.";

    if (
      !formData.currentScore ||
      isNaN(formData.currentScore) ||
      formData.currentScore <= 0
    )
      newErrors.currentScore = "Score must be a number greater than zero.";

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }
    dispatch(
      updateUserData({
        rank: formData.rank,
        percentile: formData.percentile,
        currentScore: formData.currentScore,
      })
    );

    closeModal();
    setUpdate(true);
  };

  return (
    <div className="flex flex-col items-center gap-6 w-full">
      <div className="flex justify-between items-start border border-gray-300 rounded-lg p-6 w-full mx-auto">
        <div className="flex items-center space-x-4">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQEc9A_S6BPxCDRp5WjMFEfXrpCu1ya2OO-Lw&s"
            alt="HTML Logo"
            className="w-auto h-12"
          />
          <div>
            <h2 className="text-lg font-semibold">
              Hyper Text Markup Language
            </h2>
            <p className="text-gray-600 text-sm">
              Questions: 08 | Duration: 15 mins | Submitted on {currentDate}
            </p>
          </div>
        </div>
        <button
          className="px-4 py-2 bg-blue-800 text-white text-sm rounded hover:bg-blue-700"
          onClick={updateData}
        >
          Update
        </button>
      </div>

      {/* Statistics Section */}
      <div className="border border-gray-300 rounded-lg p-6 w-full mx-auto">
        <h3 className="text-lg font-semibold mb-4">Quick Statistics</h3>
        <div className="flex justify-around items-center text-center w-full">
          {[
            {
              label: "Rank",
              value: rank,
              color: "text-yellow-500",
              icon: "🏆",
              key: "rank",
            },
            {
              label: "Percentile",
              value: `${percentile}%`,
              color: "text-orange-600",
              icon: "📋",
              key: "percentile",
            },
            {
              label: "Correct Answers",
              value: `${currentScore} / 15`,
              color: "text-green-600",
              icon: "✅",
              key: "currentScore",
            },
          ].map(({ label, value, color, icon, key }) => (
            <div key={key} className="flex justify-around items-center gap-2">
              <div className="py-3 px-4 bg-gray-100 rounded-full text-2xl">
                {icon}
              </div>
              <div>
                <span className={`text-2xl font-bold ${color}`}>{value}</span>
                <p className="text-gray-400 uppercase text-sm">{label}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Update Modal */}
      {isUpdate && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg max-w-sm w-full">
            <h2 className="text-lg font-semibold mb-4">Update Score</h2>
            <form className="space-y-4" onSubmit={handleSubmit}>
              {[
                { label: "Rank", key: "rank" },
                { label: "Percentile", key: "percentile" },
                { label: "Current Score", key: "currentScore" },
              ].map(({ label, key }, index) => (
                <div key={key} className="flex justify-between items-center">
                  <label className="block text-sm font-medium text-gray-700">
                    <span className="py-1 px-2 mr-3 bg-blue-800 rounded-full text-white">
                      {index + 1}
                    </span>
                    Update your <b>{label}</b>
                  </label>
                  <input
                    type="number"
                    name={key}
                    value={formData[key]}
                    onChange={handleInputChange}
                    className="mt-1 w-28 px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-red-500 focus:border-red-500 sm:text-sm"
                  />
                  {errors[key] && (
                    <p className="text-red-600 text-sm">{errors[key]}</p>
                  )}
                </div>
              ))}
              <div className="flex justify-between mt-4">
                <button
                  type="button"
                  className="px-4 py-2 bg-gray-500 text-white text-sm rounded hover:bg-gray-600"
                  onClick={closeModal}
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 bg-green-600 text-white text-sm rounded hover:bg-green-700"
                >
                  Save
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default SkillTest;
