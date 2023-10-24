export default (theme) => {
  return {
    header: {
      backgroundColor: theme.palette.primary.main,
      color: "#fff",
    },
    container: {
      maxWidth: "1400px",
      padding: "8px 30px",
      margin: "0 auto",
    },
    logo: {
      fontSize: "0",
      marginTop: "-8px",
      marginLeft: "-14px",
      maxHeight: "66px",
      overflow: "hidden",
    },
    menuList: {
      display: "block",
      paddingTop: "16px",
      paddingLeft: "20px",
      a: {
        color: "#fff",
        padding: "2px 20px",
        fontSize: "20px",
        display: "unset",
        borderLeft: "1px solid #fff",
        "&:first-of-type": {
          border: "none",
        },
        "&:hover, &.active": {
          color: "#1fd500",
        },
      },
    },
    profileMenu: {
      textAlign: "right",
      padding: 0,
      a: {
        display: "unset",
        color: "#fff",
        padding: 0,
        svg: {
          width: "40px",
          padding: "2px",
          height: "40px",
          margin: "10px 10px 0",
        },
        "&:hover": {
          color: "#1fd500",
        },
        "&:last-child svg": {
          marginRight: "0",
        },
      },
    },
  };
};
