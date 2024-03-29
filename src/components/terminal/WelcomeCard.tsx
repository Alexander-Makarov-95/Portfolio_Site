import clsx from "clsx";
import { useState } from "react";
import styles from "../terminal/styles/tailwind.module.css";
import { styled } from "@stitches/react";

function WelcomeCard({ onEnterMainframe }) {
  const [isOpen, setIsOpen] = useState(true);
  const welcomeFrame = '/welcome.svg';
  const welcomeSound = '/enter_sound.mp3';

  const handleClose = () => {
    const audio = new Audio(welcomeSound);
    audio.play();
    setIsOpen(false);
    onEnterMainframe();
  };

  return (
    <div
      className={clsx(
        "absolute p-1",
        "w-full",
        // Conditional classes for up to 600px screen width
        {"h-[400px]": "max-width: 600px"},
        // Conditional classes for screen width between 601px and 768px
        {"h-[400px] ": "min-width: 601px and max-width: 768px"},
        "bg-no-repeat bg-center bg-contain"
      )}
      style={{
        backgroundImage: `url(${welcomeFrame})`,
      }}
    >
      {isOpen && (
        <LightTextShadowWrapper className="flex h-full w-full flex-col items-center justify-center text-center px-2 sm:pl-4">
          <h1 className="text-[4vw] md:text-xl lg:text-2xl leading-tight md:leading-normal">//SingularityOS//</h1>
          <p className="text-[3vw] my-1 md:text-base lg:text-lg md:my-2 leading-tight md:leading-normal max-w-xs sm:max-w-none">
            Welcome to the Pathfinder's onboard operating system.
          </p>
          <p className="text-[3vw] my-1 md:text-base lg:text-lg md:my-2 leading-tight md:leading-normal">
            Click through the icons to view my projects.
          </p>
          <button className={clsx(styles.button, "text-sm sm:text-base md:text-lg")} onClick={handleClose}>
              Enter mainframe
          </button>
        </LightTextShadowWrapper>
      )}
    </div>
  );
}

const LightTextShadowWrapper = styled('div', {
    textShadow: `
    1px 1px 1px rgba(0, 0, 0, 0.5),
    -1px -1px 1px rgba(0, 0, 0, 0.5),
    1px -1px 1px rgba(0, 0, 0, 0.5),
    -1px 1px 1px rgba(0, 0, 0, 0.5),
    2px 1px 1px rgba(0, 0, 0, 0.5)
  `,
});

export default WelcomeCard;
