class ImageCarousel extends HTMLElement {
  currentIndex = 0;
  figureNumber = 0;
  constructor() {
    super();
    this.handleNext = this.handleNext.bind(this);
    this.handlePrevious = this.handlePrevious.bind(this);
  }
  handlePrevious() {
    this.children[this.currentIndex].classList.add("hidden");
    this.currentIndex =
      this.currentIndex > 0 ? this.currentIndex - 1 : this.figureNumber - 1;
    this.children[this.currentIndex].classList.remove("hidden");
  }
  handleNext() {
    this.children[this.currentIndex].classList.add("hidden");
    this.currentIndex = (this.currentIndex + 1) % this.figureNumber;
    this.children[this.currentIndex].classList.remove("hidden");
  }
  createButtons() {
    let buttons = `<div class="button-row"><button id="previous-button" aria-label="Previous Image">
    <svg xmlns="http://www.w3.org/2000/svg" height="40px" viewBox="0 -960 960 960" width="40px" fill="#000000"><path d="M560.67-240 320-480.67l240.67-240.66L608-674 414.67-480.67 608-287.33 560.67-240Z"/></svg>
    </button>
    <button id="next-button" aria-label="Next Image">
    <svg xmlns="http://www.w3.org/2000/svg" height="40px" viewBox="0 -960 960 960" width="40px" fill="#000000"><path d="M521.33-480.67 328-674l47.33-47.33L616-480.67 375.33-240 328-287.33l193.33-193.34Z"/></svg>
    </button></div>`;
    this.innerHTML += buttons;
    document
      .querySelector("#previous-button")
      .addEventListener("click", this.handlePrevious);
    document
      .querySelector("#next-button")
      .addEventListener("click", this.handleNext);
  }
  connectedCallback() {
    this.figureNumber = this.children.length;
    this.innerHTML += `<style>
    image-carousel{
    position:relative;
    display:grid;
    grid-template:"carousel";
    place-items:center;
    width:var(--image-carousel-width,500px);
    aspect-ratio: 16/9;
    }
    .button-row{
    grid-area: 1/1;
  place-self: center;
  z-index: 10;
  display: flex;
  justify-content: space-between;
  width: 96%;
  button{
    background:var(--carousel-button-background,lightgray);
    border:var(--carousel-button-border,1px solid black);
    border-radius:var(--carousel-button-radius,100%);
    display:flex;
    justify-items:center;
    align-content:center;
    height:3rem;
    width:3rem;
    box-shadow: 0px 0px 5px black;
    svg{
    width:100%;
    height:100%;
    }
  }
    button:active{
        background:var(--carousel-button-active-background,grey);
    }
    }
    figure{
       display: flex;
      flex-direction:column;
      overflow: hidden;
      position:absolute;
      width:100%;
      height:100%;
        @starting-style{
            opacity:1;
        }
            transition:opacity var(--image-transition-speed,500ms);
    }
        img{
        width:100%;
        height:100%;
        object-fit:contain;
        }
        figcaption{
            background: rgba(0, 0, 0,.7);
            color: white;
            padding: 1rem;
            width: 100%;
        }

        .hidden{
        opacity:0;
        }
      </style>`;
    console.log("Loaded");

    for (let entry of this.children) {
      entry.classList.add("carousel");
      entry.classList.add("hidden");
    }
    this.children[0].classList.remove("hidden");
    this.createButtons();
  }
}
customElements.define("image-carousel", ImageCarousel);
