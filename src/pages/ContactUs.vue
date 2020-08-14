<template>
  <contact-form></contact-form>
</template>

<script>
import MainFooter from '@/layout/MainFooter';
import ContactForm from './components/ContactForm';
import axios from 'axios'
export default {
  name: 'contactUsPage',
  bodyClass: 'contact-us-page',
  components: {
      ContactForm
  }
}
</script>
<style>
</style>