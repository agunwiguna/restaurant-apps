class AppBar extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
        <nav>
            <a href="/" id="logo"> Hunger Apps </a>
            <button type="button" id="menu">
              <i class="fa-solid fa-bars" id="ham-menu"></i>
            </button>
            <ul id="nav-bar" class="nav-menu">
                <li><a href="#/" class="nav-item">Home</a></li>
                <li><a href="#/like" class="nav-item">Favorite</a></li>
                <li><a href="https://github.com/agunwiguna" class="nav-item" target="_blank" rel="noreferrer" id="github">About Us</a></li>
            </ul>
        </nav>
    `;
  }
}

customElements.define('app-bar', AppBar);
