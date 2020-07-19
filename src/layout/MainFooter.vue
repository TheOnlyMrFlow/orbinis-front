<template>
  <footer
    class="footer"
    :class="{ [`footer-${type}`]: type }"
    :data-background-color="backgroundColor"
  >
    <div class="container">
      <!-- <nav>
        <ul>
          <li>
            <a href="https://www.creative-tim.com">
              Creative Tim
            </a>
          </li>
          <li>
            <a href="https:///presentation.creative-tim.com">
              About Us
            </a>
          </li>
          <li>
            <a href="https:///blog.creative-tim.com">
              Blog
            </a>
          </li>
        </ul>
      </nav> -->
      <div class="copyright content-center">
        &copy; {{ year }}, Designed and coded by
        <a href="https://www.linkedin.com/in/florian-comte-110918107" target="_blank" rel="noopener"
          >Florian Comte</a
        >
      </div>
    </div>
  </footer>
</template>
<script>
export default {
  props: {
    backgroundColor: String,
    type: String
  },
  data() {
    return {
      year: new Date().getFullYear()
    };
  }
};
</script>
<style></style>
