import { keyframes } from "@emotion/react";

export default (theme) => {
  return {
    login: {
      background: "rgb(255,255,255)",
      background:
        "linear-gradient(180deg, rgba(255,255,255,1) 0%, rgba(228,240,227,1) 100%)",
      minHeight: "100vh",
    },
    loginCont: {
      maxWidth: "723px",
      textAlign: "center",
      margin: "80px auto 0",
    },
    logo: {},
    welcome: {
      background: theme.palette.primary.main,
      color: "#fff",
      display: "inline-block",
      padding: "10px 35px",
      borderRadius: "50px",
      fontSize: "24px",
      fontWeight: "800",
      margin: "16px 0 18px",
    },
    formCont: {
      background: "#fff",
      borderRadius: "21px",
      boxShadow: "0px -1px 8px #ccc",
      padding: "16px 40px",
    },
    formLinks: {
      display: "flex",
      justifyContent: "space-between",
      a: {
        color: "#DF0000",
        fontSize: "18px",
        fontWeight: 600,
        textDecoration: "underline",
      },
    },
    inputCont: {
      padding: "10px 0 20px",
      textAlign: "left",
      fontSize: "22px",
      fontWeight: "300",
      input: {
        background: "transparent",
        border: "none",
        width: "100%",
        fontSize: "22px",
        fontWeight: "300",
        padding: "12px",
        outline: "none",
      },
    },
    inputBox: {
      border: "1px solid #15830B",
      borderRadius: "15px",
      background: "#FBFBFB",
      textAlign: "left",
      display: "flex",
    },
    inputIcon: {
      margin: "5px 10px",
      fontSize: "48px",
      color: "#15830B",
      borderRight: "1px solid #15830B",
      paddingRight: "10px",
      width: "65px",
      height: "48px",
    },
    submitButton: {
      minWidth: "300px",
      padding: "10px 20px",
      borderRadius: "63px",
      fontSize: "21px",
      fontWeight: "600",
      textTransform: "none",
      color: "#E8E8E8",
      margin: "8px 0 16px",
    },
  };
};
