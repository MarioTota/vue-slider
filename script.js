var app = new Vue({
    el: '#root',
    data: {
      imageIndex: 0,
      images: [
        "https://iso.500px.com/wp-content/uploads/2014/06/W4A2827-1.jpg",
        "https://www.edizionigoree.it/wp-content/uploads/2017/09/landscape-definizioni-varie.jpg",
        "https://photographylife.com/wp-content/uploads/2017/01/What-is-landscape-photography.jpg",
        "https://loadedlandscapes.com/wp-content/uploads/2019/07/lighting-1280x720.jpg"
      ],
      autoPlay: ''
    },
    created: function () {
      this.autoPlay = setInterval(
        () => {
          this.nextImage();
        }, 3000
      )
    },
    methods: {
      clickNextImage: function () {
        clearInterval(this.autoPlay);
        this.nextImage();
      },
      clickPrevImage: function () {
        clearInterval(this.autoPlay);
        this.prevImage();
      },
      nextImage: function () {
        this.imageIndex++;

        if(this.imageIndex == this.images.length) {
          this.imageIndex = 0;
        }
      },
      prevImage: function () {
        this.imageIndex--;

        if(this.imageIndex == -1) {
          this.imageIndex = this.images.length - 1;
        }
      }


    }








});
