export default (theme) => {
  return {
    item: {
      position: "relative",
      height: "100%",
      maxWidth: "350px",
      margin: "0 auto",
    },
    serving: {
      background: "#df0000",
      color: "#fff",
      position: "absolute",
      top: "15px",
      right: 0,
      padding: "2px 10px",
      borderTopLeftRadius: "14px",
      borderBottomLeftRadius: "14px",
      fontSize: "14px",
      minWidth: "64px",
      textAlign: "center",
      fontWeight: 700,
    },

    image: {
      padding: "4px 0",
      textAlign: "left",
      img: {
        width: "auto",
        height: "auto",
        maxWidth: "100%",
        maxHeight: "246px",
        boxShadow: "0px 0px 4px 0px #aaa",
        "&:hover": {
          boxShadow: "0px 0px 12px 3px #aaa",
        },
      },
    },
    desc: {
      fontSize: "10px",
      textAlign: "left",
      margin: "0 5px",
      color: "#000",
    },
    title: {
      fontSize: "18px",
      fontWeight: 600,
      textAlign: "left",
      margin: "0 5px",
      color: "#000",
    },
  };
};
