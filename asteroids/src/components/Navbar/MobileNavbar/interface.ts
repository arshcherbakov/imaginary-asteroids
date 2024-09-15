interface IMobileNavbar {
  container: (() => HTMLElement) | undefined;
  mobileOpen: boolean;
  handleDrawerToggle: () => void;
  checked: boolean;
  handlerSwitch: () => void;
  handleShowDatePicker: () => void;
}

export default IMobileNavbar;
