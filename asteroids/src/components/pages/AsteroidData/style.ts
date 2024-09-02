const useStyle = (fonScrin: string) => ({
  asteroidData: {
    backgroundColor: "#000",
  },

  asteroidDataContent: {
    height: "100vh",
    width: "100vw",
    backgroundImage: `url(${fonScrin})`,
  },

  wrapperContent: {
    paddingTop: "40px",
  },
});

export { useStyle };
