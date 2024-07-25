# Web Components

A collection of web components I use for random projects.

## Components:

### Image Carousel

An image carousel component that wraps figures and adds the ability to cycle through a bunch of images with animated changes

**Example**

```
<html>

<body>
    <image-carousel>
        <figure>
            <img
                src="https://upload.wikimedia.org/wikipedia/commons/3/37/Almonds_-_in_shell%2C_shell_cracked_open%2C_shelled%2C_blanched.jpg" />
            <figcaption>A long caption</figcaption>
        </figure>
        <figure>
            <img
                src="https://upload.wikimedia.org/wikipedia/commons/7/76/094_Wild_female_Alpine_Ibex_at_Creux_du_Van_Photo_by_Giles_Laurent.jpg" />
            <figcaption>An Image</figcaption>
        </figure>
        <figure>
            <img
                src="https://upload.wikimedia.org/wikipedia/commons/f/f8/Toco_Toucan_%28Ramphastos_toco%29_-_48153967707.jpg" />
            <figcaption>An Image</figcaption>
        </figure>
    </image-carousel>
</body>
<script type="text/javascript" src="./image-carousel.js"></script>

</html>

```

**Styling**
|Variable | Default | Description|
|-|-|-|
|--image-carousel-width| 500px | width of image carousel|
|--image-carousel-background-color | none | Background color for image carousel|
| --image-carousel-border-radius | 5px | border radius |
|--image-carousel-button-background | none | Button Background |
|--image-carousel-button-border|none| button border |
|--image-carousel-button-radius | 100%| button border radius |
|--image-carousel-button-shadow-color | lightgray | button dropshadow default color |
|--image-carousel-button-shadow-hover-color| gray | button dropshadow hover color |
|--image-carousel-button-shadow-active-color | black | button dropshadow active color |
|--image-carousel-transition-speed | 500ms | image opactity transition duration|
|--image-carousel-object-fit | contain | image object fit |
|--image-carousel-caption-background | rgba(0, 0, 0,.7) | Caption background color |
|--image-carousel-caption-font-color | white | font color for caption |
