<template>
    <hollow-dots-spinner class="loading-spinner"
        :animation-duration="1000"
        :dot-size="15"
        :dots-num="3"
        color="#856ef8"
      />
</template>

<script>
import { HollowDotsSpinner  } from 'epic-spinners'
export default {
  name: 'loadingSpinner',
  bodyClass: 'loading-spinner',
  components: {
      HollowDotsSpinner 
    }
}
</script>

<style lang="scss">
@import "../../assets/scss/now-ui-kit/_variables.scss";
.loading-spinner {
margin: auto;
}
</style>