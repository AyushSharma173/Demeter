import { keyframes } from "@emotion/react";

export const rotate = keyframes`
  0%{
    transform: rotate(0deg);
  }
  100%{
    transform: rotate(360deg);
  }
`;

export const styles = (theme) => {
  return {
    loader: {
      width: "117px",
      height: "117px",
      margin: "20px auto",
      img: {
        maxWidth: "100%",
        height: "auto",
      },
    },
  };
};
