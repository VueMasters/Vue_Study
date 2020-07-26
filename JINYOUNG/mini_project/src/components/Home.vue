<template>
  <v-container>
    <h1 class="display-2">Week 1</h1>
    <p>
      <span>1. Calculator</span>

      <v-dialog v-model="calModal" persistent width="400">
        <template #activator="{ on:dialog, attrs}">
          <v-tooltip bottom color="secondary">
            <template #activator="{ on: tooltip}">
              <v-btn
                dark
                text
                color="black"
                slot="activator"
                v-bind="attrs"
                v-on="{ ...dialog, ...tooltip }"
              >
                <v-icon>mdi-calculator</v-icon>
              </v-btn>
            </template>
            <span>계산기</span>
          </v-tooltip>
        </template>
        <calculator @close-modal="closeModal" @login-success="closeModal"></calculator>
      </v-dialog>

      <br />
      <span>2. Example</span>
      <br />
      <span>3. Directive</span>
      <br />
      <span>4. Todo</span>
      <br />
    </p>
    <h1 class="display-2">Week 2</h1>
    <p>
      <span>1. Computed & Watch</span>
      <br />
      <span>2. Event</span>
      <br />
      <span>3. Input binding</span>
      <br />
    </p>
    <h1 class="display-2">Week 3</h1>
    <p>
      <span>1. Componet</span>
      <br />
    </p>
    <h1 class="display-2">Week 4</h1>
    <p>
      <span>1. Vuetify</span>
      <br />
      <span>2. Dialog & Tooltip</span>
      <br />
    </p>
  </v-container>
</template>

<script>
import Calculator from "@/components/Calculator";
export default {
  components: { Calculator },
  data() {
    return {
      calModal: false
    };
  },
  methods: {
    closeModal() {
      this.calModal = false;
    }
  }
};
</script>

<style scoped>
h1 {
  background-color: #353866;
  color: white;
  padding: 5px;
}

p {
  padding: 5px;
}
</style>