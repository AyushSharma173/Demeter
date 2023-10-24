export default (theme) => {
  return {
    ms: {
      background: "#fff",
      position: "fixed",
      textAlign: "center",
      bottom: 0,
      left: 0,
      width: "100%",
    },
    brandItems: {
      display: "flex",
      "> div": {
        width: "20%",
      },
    },
    noImage: {
      lineHeight: "1.2",
      margin: "3px 0",
      fontSize: "12px",
      fontWeight: "bold",
      minHeight: "25px",
    },
    container: {
      maxWidth: "1400px",
      padding: "8px 30px",
      margin: "0 auto",
    },
    title: {
      display: "inline-block",
      background: "#df0000",
      fontSize: "16px",
      color: "#fff",
      padding: "4px 64px",
      borderTopLeftRadius: "18px",
      borderTopRightRadius: "18px",
      marginBottom: "0",
      position: "absolute",
      top: "-40px",
      left: "50%",
      marginLeft: "-125px",
      boxShadow: "-3px -1px 5px -1px #666",
    },
    list: {
      alignItems: "center",
      "& .slick-slide": {
        lineHeight: 0,
      },
    },
    item: {
      borderRadius: "12px",
    },
    allStores: {
      background: "#C5F3BE",
      lineHeight: "1.5",
      fontWeight: "700",
      "&:hover": {
        boxShadow: "2px 3px 3px #aaa",
        cursor: "pointer",
      },
    },
    selected: {
      background: "#EAEAEA",
    },
    selectedAll: {
      boxShadow: "2px 3px 3px #aaa",
    },
    image: {
      padding: "3px 10px",
      lineHeight: 0,
      textAlign: "center",
      margin: "0 4px",
      borderRadius: "20px",

      "&:hover": {
        background: "#EAEAEA",
        cursor: "pointer",
      },
      img: {
        maxHeight: "48px",
        width: "auto",
        height: "auto",
        maxWidth: "100%",
        margin: "0 auto",
      },
    },
  };
};
