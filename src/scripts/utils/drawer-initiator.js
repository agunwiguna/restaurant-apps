const DrawerInitiator = {
  init({ menu, hamMenuIcon, navBar, content }) {
    menu.addEventListener('click', () => {
      this._toggleDrawer(navBar, hamMenuIcon);
    });

    content.addEventListener('click', () => {
      this._closeDrawer(navBar, hamMenuIcon);
    });
  },

  _toggleDrawer(navBar, hamMenuIcon) {
    navBar.classList.toggle('active');
    hamMenuIcon.classList.toggle('fa-times');
  },

  _closeDrawer(navBar, hamMenuIcon) {
    navBar.classList.remove('active');
    hamMenuIcon.classList.toggle('fa-times');
  },
};

export default DrawerInitiator;
