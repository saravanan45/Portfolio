"use client";
import { useTheme } from "../hooks/useTheme";

const CardComponent = ({
  title,
  body,
  width = "100%",
}: {
  title: string;
  body: React.ReactNode;
  width?: string;
}) => {   
  const { theme } = useTheme();
  return (
    <div
      className={`${theme === "dark" ? "glass-card" : "border"} p-4 rounded-lg shadow-md`}
      style={{ width }}
    >
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      {body}
    </div>
  );
};

export default CardComponent;
