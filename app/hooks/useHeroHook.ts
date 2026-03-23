import { PROFILE } from "../common/constants";
import { useEffect, useState } from "react";

const useHeroHook = () => {
  const { ROLE: roles } = PROFILE;
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
  const [currentText, setCurrentText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    if (roles.length === 0) return;

    const currentRole = roles[currentRoleIndex];
    const isRoleFullyTyped = !isDeleting && currentText === currentRole;
    const isRoleDeleted = isDeleting && currentText.length === 0;
    const timeoutId = window.setTimeout(() => {
      if (isRoleFullyTyped) {
        setIsDeleting(true);
        return;
      }

      if (isRoleDeleted) {
        setIsDeleting(false);
        setCurrentRoleIndex((previousRoleIndex) =>
          (previousRoleIndex + 1) % roles.length,
        );
        return;
      }

      setCurrentText(
        currentRole.slice(0, currentText.length + (isDeleting ? -1 : 1)),
      );
    }, isRoleFullyTyped ? 1000 : isDeleting ? 100 : 150);

    return () => window.clearTimeout(timeoutId);
  }, [currentRoleIndex, currentText, isDeleting, roles]);

  return { currentRole: currentText };
};

export default useHeroHook;
