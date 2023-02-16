class HeroHeader extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
      <div class="hero">
        <div class="hero__inner">
          <h1 class="hero__title" data-aos="fade-up" data-aos-delay="100">
            <span class="hero__text-color">Delicious</span> Restaurant
          </h1>
          <p class="hero__tagline" data-aos="fade-up" data-aos-delay="200">
            Discover your next favorite restaurant today. Browse our 
            selection and start planning your next dining experience.
          </p>
        </div>
      </div>
    `;
  }
}

customElements.define('hero-header', HeroHeader);
