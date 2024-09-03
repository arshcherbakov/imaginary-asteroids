const useStyle = () => ({
  navbarWrapper: {},

  appBar: {
    backgroundColor: "#000",
    height: "86px",
    justifyContent: "center",
  },

  toolbar: {
    justifyContent: "space-between",
  },

  logoWrapper: {
    alignItems: "center",
  },

  logoNasa: {
    width: "60px",
    height: "60px",
  },

  mobileDrawer: {
    display: { xs: "block", sm: "none" },
    "& .MuiDrawer-paper": {
      boxSizing: "border-box",
      width: 240,
    },
  },

  mobileMenuCenter: {
    textAlign: "center",
  },

  menuWrapper: {
    display: { xs: "none", sm: "block" },
  },

  menuItem: {
    color: "#fff",
  },

  logoText: {
    flexGrow: 1,
    display: { xs: "none", sm: "block" },
  },

  logoButton: {
    p: 0,
    height: "60px",
  },

  iconButton: {
    mr: 2,
    display: { sm: "none" },
  },
});

export { useStyle };
