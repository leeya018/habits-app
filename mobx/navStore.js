import { makeAutoObservable } from "mobx";

class Nav {
  activeNavItem = "MyRecords";

  constructor() {
    makeAutoObservable(this);
  }
  setActiveNavItem = (navItem) => {
    this.activeNavItem = navItem;
  };
}

export const navStore = new Nav();
