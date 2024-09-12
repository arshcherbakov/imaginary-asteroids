interface IMobileNavbar {
  container: (() => HTMLElement) | undefined;
  mobileOpen: boolean;
  handleDrawerToggle: () => void;
  checked: boolean;
  handlerSwitch: () => void;
}

export default IMobileNavbar;
