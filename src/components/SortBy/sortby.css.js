export default (theme) => {
  return {
    menu: {
      "& .MuiList-root": {
        background: "#ececec",
      },
    },
    select: {
      padding: "0 0 0 105px",
      borderRadius: "40px",
      fontWeight: 700,
      height: "34px",
      marginBottom: "24px",
      boxShadow: "2px 3px 3px #ccc",
      background: "#dddddd",
      "& .MuiSelect-select": {
        paddingLeft: "120px",
        marginLeft: "-98px",
        zIndex: 1000,
      },
      img: {
        position: "absolute",
        top: "4px",
        left: "10px",
      },
      fieldset: {
        border: "none",
        top: "6px",
        left: "32px",
        legend: {
          visibility: "visible",
          opacity: 1,
          height: "auto",
          width: "auto",
          maxWidth: "unset",
          span: {
            opacity: 1,
            fontSize: "16px",
            fontWeight: 600,
          },
        },
      },
    },
  };
};
