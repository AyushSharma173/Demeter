export default (theme) => {
  return {
    ms: {
      padding: "24px 0 48px"
    },
    container: {
      maxWidth: "1400px",
      padding: "8px 30px",
      margin: "0 auto"
    },
    title: {
      textAlign: "center",
      background: "rgb(229,43,0)",
      background:
        "linear-gradient(180deg, rgba(229,43,0,1) 0%, rgba(192,36,0,1) 100%)",
      maxWidth: "640px",
      margin: "10px auto 40px",
      color: "#fff",
      textTransform: "uppercase",
      fontSize: "20px",
      padding: "6px ",
      boxShadow: "3px 3px 5px #aaa"
    },
    list: {
      textAlign: "center"
    },
    item: {
      border: "1px solid #999",
      borderRadius: "12px"
    },
    image: {
      padding: "20px 0",
      img: {
        maxHeight: "150px",
        width: "auto",
        height: "auto",
        maxWidth: "75%"
      }
    },
    name: {
      background: theme.palette.primary.main,
      padding: "10px",
      color: "#fff",
      borderRadius: "12px"
    }
  };
};
