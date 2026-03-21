"use client";
import {
  Download,
  Mail,
  GitHub,
  LinkedIn,
  WavingHand,
} from "@mui/icons-material";
import Image from "next/image";

import {PROFILE} from "../constants";

const Hero = () => {
  return (
    <section className="my-16">
      <div className="flex md:flex-row flex-col justify-between gap-8">
        <div className="flex gap-2 items-start flex-col text-2xl">
          <div className="flex gap-2">
            <WavingHand className="wave text-yellow-400" />
            <span className="mr-2">Hello I'm</span>
          </div>
          <span className="font-bold md:text-8xl text-6xl">{PROFILE.NAME}</span>
          <span className="text-subheading text-2xl mt-2 text-blue-400">
            {PROFILE.ROLE}
          </span>
          <div className="flex gap-4 items-baseline my-4">
            <a className="flex gap-2 items-center bg-button-primary text-white px-4 py-2 rounded-md hover:bg-blue-600 transition-colors self-stretch"
              href={PROFILE.RESUME_URL}
              download="Resume.pdf"
            >
              <span className="text-base">Resume</span>
              <Download />
            </a>
            <a className="bg-button-secondary px-4 py-2 rounded-md" href={`mailto:${PROFILE.EMAIL}`} target="_blank" rel="noopener noreferrer">
              <Mail />
            </a>
            <a className="bg-button-secondary px-4 py-2 rounded-md" href={PROFILE.GITHUB_URL} target="_blank" rel="noopener noreferrer">
              <GitHub />
            </a>
            <a className="bg-button-secondary px-4 py-2 rounded-md" href={PROFILE.LINKEDIN_URL} target="_blank" rel="noopener noreferrer">
              <LinkedIn />
            </a>
          </div>
        </div>
        <Image
          src="/Images/Photo.jpg"
          alt="Saravanan"
          width={250}
          height={300}
          className="mt-4 rounded-lg shadow-lg"
        />
      </div>
    </section>
  );
};

export default Hero;
