<template>
  <div class="section section-signup">
    <div class="container">
      <div class="row">
        <card class="card-signup" header-classes="text-center" color="orange">
          <template slot="header">
            <h3 class="card-title title-up">{{$lang === 'FR' ? 'Contactez nous' : 'Contact us'}}</h3>
          </template>
          <template v-if="! messageSent">
            <fg-input
              class="no-border"
              :placeholder="$lang === 'FR' ? 'Nom' : 'Name'"
              addon-left-icon="now-ui-icons users_circle-08"
              v-model="form.name"
            >
            </fg-input>

            <fg-input
              class="no-border"
              placeholder="Email"
              addon-left-icon="now-ui-icons ui-1_email-85"
              v-model="form.email"
              type="mail"
            >
            </fg-input>
            
            <div class="textarea-container">
              <textarea
                class="form-control"
                name="name"
                rows="10"
                cols="80"
                v-model="form.message"
                :placeholder="$lang === 'FR' ? 'Ecrivez ici votre message' : 'Write your message here'"
              ></textarea>
            </div>
          </template>
          <div class="card-footer text-center">
            <n-button v-if="! messageSent" type="neutral" round size="lg" @click="send()">{{$lang === 'FR' ? 'Envoyer' : 'Send'}}</n-button>
            <p v-else>{{ feedbackMessage }}</p>
          </div>
        </card>
      </div>
    </div>
  </div>
</template>
<script>
import { Card, FormGroupInput, Button } from '@/components';
import axios from 'axios';

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
        name: '',
        email: '',
        message: ''
      },
      messageSent: false,
      feedbackMessage: ''
    }
  },
  methods: {
    async send() {
      const payload = {
          customerName: this.form.name,
          customerAddress: this.form.email,
          customerMessage: this.form.message
        }
      try {
        await axios.post(`${process.env.VUE_APP_API_URL}/contact-us`, payload);
        this.feedbackMessage = 'Your message was successfully sent';
      } catch(error) {
        this.feedbackMessage = 'Sorry, an error occured. Please contact lucie@orbinis.dance directly';
      } finally {
        this.messageSent = true;
      }
    }
  }
};
</script>
<style></style>
