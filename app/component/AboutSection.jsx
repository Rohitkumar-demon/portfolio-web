"use client";
import React, { useTransition, useState } from "react";
import Image from "next/image";
import TabButton from "./TabButton";

const TAB_DATA = [
  {
    title: "Skills",
    id: "skills",
    content: (
      <ul className="list-disc pl-2">
        <li>Java script</li>
        <li>React</li>
        <li>Next.js</li>
        <li>HTML</li>
        <li>MongoDB</li>
        <li>Python</li>
        <li>CSS</li>
        <li>Tailwind Css</li>
        
      </ul>
    ),
  },
  {
    title: "Education",
    id: "education",
    content: (
      <ul className="list-disc pl-2">
        <li>Bachelor of technology in computer science</li>
        <li>Nanhi pari seemant engineering institute, Pithoragarh </li>
      </ul>
    ),
  },
  {
    title: "Certifications",
    id: "certifications",
    content: (
      <ul className="list-disc pl-2 ">
        <li>Programming with JavaScript by Meta</li>
        <li>Basic of python</li>
        <li>Crash course on Python</li>
        <li>Build a Face Recognition Application Using Python</li>
        <li>Modern JavaScript: ES6 Basics</li>
        <li>Google Professional Workspace Administrator by Google</li>

      </ul>
    ),
  },
];

const AboutSection = () => {
  const [tab, setTab] = useState("skills");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <section id="about" className=" text-white ">
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16 ">
        <Image
          src="/images/about-image.png"
          width={500}
          height={500}
          alt="about image"
        />
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-4xl font-bold text-white mb-4 ">About Me</h2>
          {/* <p className=" text-base lg:text-lg">
            I am a full stack web developer with a passion for creating
            beautiful and functional websites. I have experience in building
            websites and web applications using JavaScript, React, Node.js,
            Express, MongoDB, and MySQL. I am a quick learner and a team player
            who is always looking to learn new technologies and improve my
            skills.
          </p> */}
          <p className=" text-base lg:text-lg">
            Graduate in Computer Science and Engineering, I am an enthusiastic
            and dedicated professional, ready to start my journey as a React App
            Developer. I have a solid foundation in front-end technologies,
            including HTML, CSS, and JavaScript, with a particular focus on
            React.js. I have a deep
            understanding of React hooks.
            always eager to familiarize myself with the latest industry trends
            and best practices. In addition to my technical skills, I am a team
            player with excellent communication skills. I am ready to
            collaborate effectively in dynamic work environments and contribute
            to the team&apos;s success. I look forward to bringing my unique energy to
            creating impactful and sophisticated web
            applications that provide a seamless user experience.
          </p>
          <div className="flex flex-row justify-start mt-8">
            <TabButton
              selectTab={() => handleTabChange("skills")}
              active={tab === "skills"}
            >
              {" "}
              Skills{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("education")}
              active={tab === "education"}
            >
              {" "}
              Education{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("certifications")}
              active={tab === "certifications"}
            >
              {" "}
              Certifications{" "}
            </TabButton>
          </div>
          <div className="mt-8">
            {TAB_DATA.find((t) => t.id === tab).content}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
