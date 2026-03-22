"use client";
import { useTheme } from "../hooks/useTheme";

const CardComponent = ({
  title,
  body,
}: {
  title: string;
  body: React.ReactNode;
}) => {   
  const { theme } = useTheme();
  return (
    <div
      className={`${theme === "dark" ? "glass-card" : "border"} w-full shrink-0 rounded-lg p-4 shadow-md sm:basis-[calc((100%-1rem)/2)] lg:basis-[calc((100%-2rem)/2)]`}
    >
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      {body}
    </div>
  );
};

export default CardComponent;
