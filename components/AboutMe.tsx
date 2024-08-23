import React from "react";
import { skills } from "@/data";

const AboutMe = () => {
  return (
    <section id="about-me" className="section relative">
      <div className="flex flex-col md:flex-row items-center justify-center p-4 gap-16 mt-10">
        <div className="md:w-1/2 w-full">
          <figure className="rounded-full overflow-hidden">
            <img src="/Johnny.jpg" alt="" />
          </figure>
        </div>
        <div className="md:w-1/2 w-full">
          <h2 className="heading mb-5">About Me</h2>
          <p>
            I am a web developer with 4+ years of experience specializing in custom WordPress and Shopify sites.

          </p>
          <h3 className="my-3 text-xl mb-5	underline-offset-8 underline">
            Primary Skills
          </h3>
          <ul className="skills flex flex-wrap gap-3">
            {skills.map((skill) => {
              return (
                <li key={skill} className=" border-white-200 border rounded-sm	py-1 px-2 ">
                  {skill}
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
