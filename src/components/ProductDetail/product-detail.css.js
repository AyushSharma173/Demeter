export default (theme) => {
  return {
    pd: {
      border: "1px solid #DF0000",
      borderRadius: "20px",
      background: "#fff",
      position: "sticky",
      top: "5px",
      overflow: "hidden",
    },
    height: {
      padding: "8px 16px 10px",
      height: "calc(100vh - 105px)",
      overflowY: "scroll",
    },
    reasons: {
      fontWeight: 700,
    },
    reasonsList: {
      listStyleType: "disc",
      padding: "0 0 10px 30px",
      fontSize: "14px",
      lineHeight: "1.2",
    },
    reasonsListItem: {
      display: "list-item",
      padding: "1px 3px",
    },
    savingReasonsListItem: {
      display: "list-item",
      padding: "1px 3px",
      color: "#117600",
      fontWeight: 700,
    },
    brand: {
      lineHeight: 0,
      textAlign: "left",
      img: {
        maxHeight: "70px",
        width: "auto",
        height: "auto",
        maxWidth: "80%",
      },
    },
    image: {
      lineHeight: 0,
      textAlign: "center",
      marginBottom: "16px",
      img: {
        maxHeight: "230px",
        width: "auto",
        height: "auto",
        maxWidth: "90%",
      },
    },
    rating: {
      display: "flex",
      alignItems: "center",
    },
    title: {
      color: "#0021D6",
      fontSize: "20px",
      fontWeight: "900",
      padding: "10px 0",
      textDecoration: "underline",
    },
    prices: {
      display: "flex",
      fontWeight: 900,
      fontSize: "26px",
      justifyContent: "space-between",
      lineHeight: 1.2,
    },
    price: {
      color: "#EB1723",
    },
    priceSave: {
      color: "#117600",
      fontSize: "20px",
      paddingLeft: "20px",
    },
    saving: {
      color: "#117600",
      fontWeight: 800,
      fontSize: "14px",
      padding: "6px 0",
    },
    desc: {
      fontSize: "14px",
      color: "#000000",
      fontWeight: 600,
    },
    ratingText: {
      fontWeight: 600,
      alignItems: "center",
      paddingRight: "8px",
      fontSize: "14px",
    },
    actions: {
      display: "flex",
      justifyContent: "space-between",
      paddingTop: "10px",
      button: {
        textTransform: "none",
        borderRadius: "30px",
        padding: "4px 16px",
        border: "1px solid #000",
      },
    },
  };
};
