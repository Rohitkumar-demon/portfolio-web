"use client";
import React from "react";
import dynamic from "next/dynamic";

const AnimatedNumbers = dynamic(
  () => {
    return import("react-animated-numbers");
  },
  { ssr: false },
);

const AchievementList = [
  {
    metric: "Projects",
    value: "5",
    postfix: "+",
  },
  {
    prefix: "~",
    metric: "Stars",
    value: "100",
  },
  {
    metric: "Awards",
    value: "7",
  },
  {
    metric: "Years",
    value: "1",
  },
];

const AchievementsSections = () => {
  return (
    <div className="py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
      <div className="sm:border-[#33353f] sm:border rounded-md py-8 px-16 flex flex-col sm:flex-row items-center border-[#33353f] border justify-between">
        {AchievementList.map((achievement, index) => (
          <div
            key={index}
            className="flex flex-col items-center justify-center mx-4 my-4 sm:my-0"
          >
            <h2 className="text-4xl font-bold text-white flex flex-row">
              {achievement.prefix}
              <AnimatedNumbers
                includeComma
                animateToNumber={parseInt(achievement.value)}
                locale="en-US"
                className="text-4xl font-bold text-white"
                configs={(_, index) => {
                  return {
                    mass: 1,
                    friction: 100,
                    tension: 140 * (index + 1),
                  };
                }}
              />
              {achievement.postfix}
            </h2>
            <p className="text-[#ADB7BE] text-base">{achievement.metric}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AchievementsSections;
