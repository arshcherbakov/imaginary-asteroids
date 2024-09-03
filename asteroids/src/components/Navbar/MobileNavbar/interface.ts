interface IMobileNavbar {
  container: (() => HTMLElement) | undefined;
  mobileOpen: boolean;
  handleDrawerToggle: () => void;
}

export default IMobileNavbar;
