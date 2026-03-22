import { ReactElement, ReactNode } from "react";
import {
  Download,
  Mail,
  GitHub,
  LinkedIn,
  WavingHand,
} from "@mui/icons-material";

export const ICON_MAPPING: Record<string, ReactElement> = {
    LinkedIn: <LinkedIn />,
    GitHub: <GitHub />,
    Email: <Mail />,
    Download: <Download />,
    WavingHand: <WavingHand />,
};

export const header_Wrapper = (name: string) => {
    return (
        <>
            <h1 className="font-bold">
                <span className="text-secondary">{"<"}</span>
                {name}
                <span className="text-secondary">{" />"}</span>
            </h1>
        </>
    );
};