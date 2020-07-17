<template>
  <div class="section" id="carousel">
    <div class="container" style="max-width: 100%;">
      <div class="row justify-content-center">
        <div class="col-12">
          <el-carousel height="500px" arrow.height="2000px">
            <el-carousel-item>
              <parallax
                class="page-header-image d-block"
                style="background-image: url('img/company-parallax.jpg')"
              >
              </parallax>
              <!-- <img class="d-block" src="img/bg1.jpg" alt="First slide" /> -->
              <div class="carousel-caption d-none d-md-block">
                <h5>Nature, United States</h5>
              </div>
            </el-carousel-item>
            <el-carousel-item>
              <parallax
                class="page-header-image d-block"
                style="background-image: url('img/bg3.jpg')"
              >
              </parallax>
              <!-- <img class="d-block" src="img/bg3.jpg" alt="Second slide" /> -->
              <div class="carousel-caption d-none d-md-block">
                <h5>Somewhere Beyond, United States</h5>
              </div>
            </el-carousel-item>
            <el-carousel-item>
              <!-- <img class="d-block" src="img/bg4.jpg" alt="Third slide" /> -->
              <parallax
                class="page-header-image d-block"
                style="background-image: url('img/bg4.jpg')"
              >
              </parallax>
              <div class="carousel-caption d-none d-md-block">
                <h5>Yellowstone National Park, United States</h5>
              </div>
            </el-carousel-item>
          </el-carousel>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { Carousel, CarouselItem } from 'element-ui';

export default {
  components: {
    [Carousel.name]: Carousel,
    [CarouselItem.name]: CarouselItem
  }
};
</script>
<style></style>
