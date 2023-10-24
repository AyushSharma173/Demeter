export default (theme) => {
  return {
    searchBar: {
      color: "#fff",
      position: "relative",
      maxWidth: "750px",
      background: "#f9f7f7",
      margin: "0 auto",
      border: "1px solid #117600",
      boxShadow: "1px 3px 3px #aaa",
      padding: "18px 64px 16px 30px",
      borderRadius: "80px",
      input: {
        fontSize: "20px",
        border: "none",
        background: "transparent",
        width: "100%",
        color: "#333",
        "&:focus-visible": {
          outline: "none"
        }
      }
    },
    banner: {
    },
    listing: {
      height: "36px",
      padding: "6px 64px 8px 25px",
      input: {
        fontSize: "16px",
        border: "none",
        background: "transparent",
        width: "100%",
        color: "#333",
        "&:focus-visible": {
          outline: "none"
        }
      }
    },
    searchIcon: {
      position: "absolute",
      top: "11px",
      right: "12px"
    },
    searchIconlisting: {
      position: "absolute",
      top: "-2px",
      right: "12px"
    }
  };
};
