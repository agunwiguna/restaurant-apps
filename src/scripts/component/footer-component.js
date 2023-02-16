class FooterComponent extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
      <footer>
        <p>Copyright &#169; 2023 - Hunger Apps. All Rights Reserved.</p>
      </footer>
    `;
  }
}

customElements.define('footer-component', FooterComponent);
