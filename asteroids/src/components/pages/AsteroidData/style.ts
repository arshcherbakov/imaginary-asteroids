const useStyle = (BORD_SCRIN: string) => ({
  asteroidData: {
    backgroundColor: "#000",
  },

  asteroidDataContent: {
    height: "100vh",
    width: "100vw",
    backgroundImage: `url(${BORD_SCRIN})`,
  },

  wrapperContent: {
    paddingTop: "40px",
  },
});

export { useStyle };
