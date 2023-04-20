const MobileMenuState = {
  CLOSED: "closed",
  OPEN: "open",
};

const MobileMenuIcon = {
  CLOSE: "close",
  MENU: "menu",
};

import { reactive } from "vue";

export const mobileMenuStore = reactive({
  mobileMenuState: MobileMenuState.CLOSED,
  mobileMenuIcon: MobileMenuIcon.MENU,
  isMobileMenuOpen() {
    return this.mobileMenuState === MobileMenuState.OPEN;
  },
  openMobileMenu() {
    this.mobileMenuState = MobileMenuState.OPEN;
    this.mobileMenuIcon = MobileMenuIcon.CLOSE;

    document.body.classList.add("mobile-scroll-lock");
  },
  closeMobileMenu() {
    this.mobileMenuState = MobileMenuState.CLOSED;
    this.mobileMenuIcon = MobileMenuIcon.MENU;

    document.body.classList.remove("mobile-scroll-lock");
  },
  toggleMobileMenu() {
    switch (this.mobileMenuState) {
      case MobileMenuState.OPEN: {
        this.closeMobileMenu();

        return;
      }

      case MobileMenuState.CLOSED: {
        this.openMobileMenu();

        return;
      }
    }
  },
});
