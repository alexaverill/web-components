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
<svg xmlns="http://www.w3.org/2000/svg" height="40px" viewBox="0 -960 960 960" width="40px" fill="#000000"><path d="M518.33-480 390.67-352.33l46.66 47.66L612.67-480 437.33-655.33l-46.66 47.66L518.33-480ZM480-80q-83 0-156-31.5t-127-85.83q-54-54.34-85.5-127.34T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 155.67 31.5 72.66 31.5 127 85.5Q817-709 848.5-636T880-480q0 82.33-31.5 155.33-31.5 73-85.83 127.34-54.34 54.33-127 85.83Q563-80 480-80Zm0-66.67q138.67 0 236-97.33 97.33-97.33 97.33-236 0-139.33-97.33-236.33t-236-97q-139.33 0-236.33 97t-97 236.33q0 138.67 97 236 97 97.33 236.33 97.33ZM480-480Z"/></svg> </button>
    <button id="next-button" aria-label="Next Image">
  <svg xmlns="http://www.w3.org/2000/svg" height="40px" viewBox="0 -960 960 960" width="40px" fill="#000000"><path d="M518.33-480 390.67-352.33l46.66 47.66L612.67-480 437.33-655.33l-46.66 47.66L518.33-480ZM480-80q-83 0-156-31.5t-127-85.83q-54-54.34-85.5-127.34T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 155.67 31.5 72.66 31.5 127 85.5Q817-709 848.5-636T880-480q0 82.33-31.5 155.33-31.5 73-85.83 127.34-54.34 54.33-127 85.83Q563-80 480-80Zm0-66.67q138.67 0 236-97.33 97.33-97.33 97.33-236 0-139.33-97.33-236.33t-236-97q-139.33 0-236.33 97t-97 236.33q0 138.67 97 236 97 97.33 236.33 97.33ZM480-480Z"/></svg> </button></div>`;
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
    this.addCSS();
    this.initialize();
  }
  initialize() {
    for (let entry of this.children) {
      entry.classList.add("carousel");
      entry.classList.add("hidden");
    }
    this.children[0].classList.remove("hidden");

    this.createButtons();
  }
  addCSS() {
    this.innerHTML += `<style>
    image-carousel{
    position:relative;
    display:grid;
    grid-template:"carousel";
    place-items:center;
    width:var(--image-carousel-width,500px);
    aspect-ratio: 16/9;
    background:var(--image-carousel-background-color,none);
    border-radius:var(--image-carousel-border-radius,5px);
    }
    #previous-button{
      transform: rotate(180deg);
    }
    .button-row{
      grid-area: 1/1;
      place-self: center;
      z-index: 10;
      display: flex;
      justify-content: space-between;
      width: 96%;
      button{
        background:var(--image-carousel-button-background,none);
        border:var(--image-carousel-button-border,none);
        border-radius:var(--image-carousel-button-radius,100%);
        display:flex;
        justify-items:center;
        align-content:center;
        height:3rem;
        width:3rem;
            filter: drop-shadow(0px 0px 8px var(--image-carousel-button-shadow-color,lightgray));
        &:hover{
              filter: drop-shadow(0px 0px 8px var(--image-carousel-button-shadow-hover-color,gray));
        }
          &:active{
                filter: drop-shadow(0px 0px 8px var(--image-carousel-button-shadow-active-color,black));
        }
        svg{
        width:100%;
        height:100%;
        }
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
            transition:opacity var(--image-carousel-transition-speed,500ms);
    }
        img{
        width:100%;
        height:100%;
        object-fit:var(--image-carousel-object-fit,contain);
        }
        figcaption{
            background: var(--image-carousel-caption-background,rgba(0, 0, 0,.7));
            color: var(--image-carousel-caption-font-color,white);
            padding: var(--image-carousel-caption-padding,0);
            width: 100%;
        }

        .hidden{
        opacity:0;
        }
      </style>`;
  }
  setImages(imageArray) {
    console.log(imageArray);
    this.innerHTML = "";
    this.figureNumber = imageArray.length;
    for (let entry of imageArray) {
      let figure = document.createElement("figure");
      let image = document.createElement("img");
      image.src = entry;
      figure.appendChild(image);
      this.appendChild(figure);
    }

    for (let entry of this.children) {
      entry.classList.add("carousel");
      entry.classList.add("hidden");
    }
    this.addCSS();
    this.createButtons();
    this.children[0].classList.remove("hidden");
  }
}
customElements.define("image-carousel", ImageCarousel);
