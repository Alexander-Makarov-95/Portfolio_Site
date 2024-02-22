import { styled } from "@stitches/react";
import React, { useState } from "react";
import { useApps } from "../../hooks/useApp";
import AppIcon from "../../AppIcon";
import Application from "../../Application";
import { AppsOnDesktop } from "./helper";
import WelcomeCard from "../../WelcomeCard";
import Loading from "../Loading"; // Import Loading component

const Desktop = () => {
  const { apps, addApp } = useApps();
  const [isDesktopVisible, setIsDesktopVisible] = useState(false); // State to control visibility
  const topHeaderImage = "/top_bar.svg";
  const [loading, setLoading] = useState(false);

  const handleEnterMainframe = () => {
    // Immediately trigger loading
    setLoading(true);

    // Wait for some time then show the desktop and hide loading
    setTimeout(() => {
      setLoading(false);
      setIsDesktopVisible(true);
    }, 2100); // Adjust the delay as needed
  };

  return (
    <>
      {/* {loading && <Loading />} */}
      <WelcomeCardContainer>
        <WelcomeCard onEnterMainframe={handleEnterMainframe} />
        {loading && (
          <LoadingWrapper>
            <Loading />
          </LoadingWrapper>
        )}
        {isDesktopVisible && ( // Conditional rendering based on isDesktopVisible
          <DesktopBox>
            <DottedBackground>
              <TopBar
                style={{ backgroundImage: `url(${topHeaderImage})` }}
              ></TopBar>
              {apps.map((app) => (
                <Application key={app.id} {...app} />
              ))}
              {AppsOnDesktop.map((app) => (
                <AppIcon
                  key={app.id}
                  isDraggable
                  onDoubleClick={() => addApp({ name: app.id })}
                  defaultPosition={{ x: 20, y: 10 }}
                  icon={app.icon}
                  title={app.title}
                />
              ))}
              <TopBar
                style={{
                  backgroundImage: `url(${topHeaderImage})`,
                  transform: "rotate(180deg)",
                }}
              ></TopBar>
            </DottedBackground>
          </DesktopBox>
        )}
      </WelcomeCardContainer>
    </>
  );
};

const WelcomeCardContainer = styled("div", {
  position: "relative",
  height: "400px",
  width: "600px",
  // overflow: "hidden",
  display: "flex", // Make it a flex container
  justifyContent: "center", // Center children horizontally
  alignItems: "center",
});

const DesktopBox = styled("main", {
  position: "absolute", // Position it absolutely to control its placement precisely
  height: "292px", // Set the height as required
  width: "502px", // Set the width as required
  backgroundColor: "$cyan9",
  backgroundImage: "url(/brand/singularity.png)",
  backgroundSize: "150px 150px",
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
  margin: "auto", // Center the box
  top: 0,
  bottom: 8,
  left: 0,
  right: 6,
  overflow: "hidden",
});

const DottedBackground = styled("div", {
  height: "100%",
  width: "100%",
  background: "url(/pattern/dotted/lightAlt.svg)",
  backgroundSize: "10px",
  backgroundRepeat: "repeat",
});

const TopBar = styled("div", {
  position: "relative",
  height: "36px",
  width: "100%",
  backgroundSize: "425px 40px",
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
});

const LoadingWrapper = styled("div", {
  position: "absolute",
  height: "293px", // Ensure this matches DesktopBox height
  width: "500px", // Ensure this matches DesktopBox width
  top: "49%", // Center vertically
  left: "49.5%", // Center horizontally
  transform: "translate(-50%, -50%)", // Adjust based on the size to center properly
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
});

export default Desktop;