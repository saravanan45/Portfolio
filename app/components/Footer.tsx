import { PROFILE } from "@/common/constants";
import { header_Wrapper } from "@/common/helper";

const Footer = () => {
  return (
    <footer className="footer pb-16 scroll-mt-20">
      <hr className="my-8 border-gray-300" />
      <div className="flex items-center gap-4 justify-between flex-wrap">
        <div className="flex flex-col items-start gap-2">
          <h3 className="text-lg font-bold">{header_Wrapper(PROFILE.NAME)}</h3>
          <p className="text-sm text-secondary">Designed & built with care.</p>
        </div>
        <p>&copy; 2026 {PROFILE.NAME}. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
