import {
  Box,
  Button,
  IconButton,
  MobileStepper,
  Typography
} from "@mui/material";
import React, { useState } from "react";
import { autoPlay } from "react-swipeable-views-utils";
import SwipeableViews from "react-swipeable-views";
import { Player } from "@lottiefiles/react-lottie-player";
import { useNavigate } from "react-router-dom";

interface OnboardingProps {}

const slides: { label: string; description: string; image: string }[] = [
  {
    label: "Easy and Quick Loans",
    description: "Get loans instantly with very low interest rates",
    image: "https://assets6.lottiefiles.com/packages/lf20_kK73MQ.json"
  },
  {
    label: "Tailored Savings Plans",
    description: "Saving plans tailored to your needs with savings bonuses",
    image: "https://assets9.lottiefiles.com/private_files/lf30_koahgyos.json"
  },
  {
    label: "Secure and Effecient Processing",
    description: "Secure end to end loan processing with high confidentiality",
    image: "https://assets3.lottiefiles.com/packages/lf20_TGb1BQZYy0.json"
  }
];

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const Onboarding: React.FC<OnboardingProps> = () => {
  const [activeStep, setActiveStep] = useState(0);

  const maxSteps = slides.length;
  const navigate = useNavigate();
  return (
    <Box sx={{ overflow: "hidden", height: "100vh", background: "white" }}>
      <AutoPlaySwipeableViews
        axis={"x"}
        index={activeStep}
        onChangeIndex={step => setActiveStep(step)}
        enableMouseEvents
      >
        {slides.map(({ label, image, description }, index) => (
          <div key={index}>
            {Math.abs(activeStep - index) <= 2 ? (
              <Player
                autoplay
                loop
                src={image}
                style={{
                  height: "255px",
                  width: "100%",
                  background: "white"
                }}
              >
                <Box p={2} sx={{ backgroundColor: "white" }}>
                  <Typography fontWeight={700} align="center">
                    {label}
                  </Typography>
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    align="center"
                  >
                    {description}
                  </Typography>
                </Box>
              </Player>
            ) : null}
          </div>
        ))}
      </AutoPlaySwipeableViews>
      <MobileStepper
        steps={maxSteps}
        position="static"
        activeStep={activeStep}
        nextButton={<IconButton></IconButton>}
        backButton={<IconButton></IconButton>}
      />
      <Box
        p={2}
        pb={5}
        height="100vh"
        display="flex"
        style={{
          backgroundColor: "white",
          justifyContent: "flex-start",
          flexDirection: "column"
        }}
      >
        <Button
          variant="outlined"
          sx={{ marginBottom: 1 }}
          onClick={() => navigate("/login")}
        >
          Log In
        </Button>
        <Button variant="contained" onClick={() => navigate("/sign-up")}>
          Sign Up
        </Button>
      </Box>
    </Box>
  );
};

export default Onboarding;
