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
    tableHead: {
      th: {
        fontWeight: 600,
      },
      img: {
        width: "auto",
        maxWidth: "100%",
        height: "auto",
        maxHeight: "30px",
      },
    },
    tableFoot: {
      td: {
        fontWeight: 600,
        strong: {
          paddingRight: "35px",
          fontWeight: 600,
        },
        span: {
          fontSize: "10px",
          display: "block",
        },
      },
      th: {
        fontWeight: 600,
      },
    },
    tableDesc: {
      margin: "32px 0 0",
      textAlign: "right",
      fontSize: "14px",
      fontWeight: 600,
    },
    tableDesc2: {
      display: "inline",
      margin: "0 60px",
    },
    brandCell: {
      width: "170px",
    },
    tableBrand: {
      a: {
        fontSize: "10px",
        textDecoration: "underline",
        color: "#000AFF",
        marginLeft: "12px",
      },
    },
    InsHead: {
      textTransform: "uppercase",
      fontWeight: 600,
    },
    viewFull: {
      fontWeight: 600,

      a: {
        textDecoration: "underline",
        color: "#000",
      },
    },
    container: {
      maxWidth: "1400px",
      padding: "8px 30px",
      margin: "0 auto",
    },
    tabCont: {
      boxShadow: "1px 1px 10px #ccc",
    },
    image: {
      textAlign: "center",
      img: {
        maxWidth: "100%",
        height: "auto",
        maxHeight: "350px",
        width: "auto",
        margin: "0 auto",
      },
    },
    title: {
      textAlign: "center",
      fontSize: "28px",
      fontWeight: 600,
      marginBottom: "20px",
    },
    serving: { marginBottom: "30px" },
    calperServing: {
      fontSize: "18px",
      fontWeight: 600,
      marginBottom: "20px",
    },
    desc: {
      fontSize: "18px",
      fontWeight: 600,
    },
    table: {
      margin: "16px 0 50px",
    },
    backLink: {
      a: {
        background: "#117600",
        color: "#fff",
        fontSize: "16px",
        fontWeight: 600,
        borderRadius: "15px",
        border: "1px solid #000",
        display: "inline-block",
        padding: "5px 15px",
      },
    },
  };
};
