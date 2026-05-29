import { ReactElement } from "react";
import {
  Download,
  Mail,
  GitHub,
  LinkedIn,
  WavingHand,
} from "@mui/icons-material";

import { WORK_START_DATE, PROFILE } from "./constants";

export const ICON_MAPPING: Record<string, ReactElement> = {
  LinkedIn: <LinkedIn />,
  GitHub: <GitHub />,
  Email: <Mail />,
  Download: <Download />,
  WavingHand: <WavingHand />,
};

export const header_Wrapper = (name: string) => {
  return (
    <h1 className="font-bold">
      <span className="text-secondary">{"<"}</span>
      {name}
      <span className="text-secondary">{" />"}</span>
    </h1>
  );
};

export const getSummary = () => {
  const experience = experienceDurationCalculator();
  const summary = PROFILE.SUMMARY.replace("<EXPERIENCE_YEARS>", experience);
  return summary;
}

export const experienceDurationCalculator = () => {
  const currentDate = new Date();
  const startDate = WORK_START_DATE;

  let years = currentDate.getFullYear() - startDate.getFullYear();
  let months = currentDate.getMonth() - startDate.getMonth();

  if (months < 0) {
    years--;
    months += 12;
  }

  console.log(`Experience: ${years} year(s) and ${months} month(s)`);

  return `${years} year${years !== 1 ? "s" : ""}${
    months > 0 ? ` and ${months} month${months !== 1 ? "s" : ""}` : ""
  }`;

}
