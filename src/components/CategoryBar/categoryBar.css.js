export default (theme) => {
  return {
    shadow: {
      boxShadow: "0px 3px 4px #999",
      background: "#fff",
    },
    container: {
      maxWidth: "1400px",
      padding: "8px 30px",
      margin: "0 auto",
    },
    list: {
      display: "flex",
    },
    listItem: {
      display: "unset",
      textAlign: "center",
    },
    image: {
      display: "inline-block",
      background: theme.palette.primary.main,
      borderRadius: "37px",
      padding: "10px",
      fontSize: "0",
      "&:hover": {
        boxShadow: "-2px -2px 7px #083800",
        transition: ".1s linear",
      },
    },
    nameLink: {
      padding: "4px 0",
      color: "#000",
    },
  };
};
