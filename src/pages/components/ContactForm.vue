<template>
  <div class="section section-signup">
    <div class="container">
      <div class="row">
        <card class="card-signup" header-classes="text-center" color="orange">
          <template slot="header">
            <h3 class="card-title title-up">Contact us</h3>
          </template>
          <template>
            <fg-input
              class="no-border"
              placeholder="First Name..."
              addon-left-icon="now-ui-icons users_circle-08"
            >
            </fg-input>

            <fg-input
              class="no-border"
              placeholder="Last Name..."
              addon-left-icon="now-ui-icons text_caps-small"
            >
            </fg-input>

            <fg-input
              class="no-border"
              placeholder="Email"
              addon-left-icon="now-ui-icons ui-1_email-85"
            >
            </fg-input>
            
            <div class="textarea-container">
              <textarea
                class="form-control"
                name="name"
                rows="10"
                cols="80"
                v-model="form.message"
                placeholder="Type a message..."
              ></textarea>
            </div>
          </template>
          <div class="card-footer text-center">
            <n-button type="neutral" round size="lg">Send</n-button>
          </div>
        </card>
      </div>
    </div>
  </div>
</template>
<script>
import { Card, FormGroupInput, Button } from '@/components';

export default {
  name: 'contactForm',
  bodyClass: 'contact-form',
  components: {
    Card,
    [Button.name]: Button,
    [FormGroupInput.name]: FormGroupInput
  },
  data() {
    return {
      form: {
        firstName: '',
        lastName: '',
        email: '',
        message: ''
      }
    }
  }
};
</script>
<style></style>
