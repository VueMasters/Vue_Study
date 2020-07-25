<template>
  <v-container>
    <h1 class="display-2">Week 1</h1>
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
    <span>2. example</span>
    <br />
    <span>3. directive</span>
    <br />
    <span>4. todo</span>
    <br />
    <h1 class="display-2">Week 2</h1>
    <span>1. Computed & Watch</span>
    <br />
    <span>2. Event</span>
    <br />
    <span>3. input binding</span>
    <br />
    <h1 class="display-2">Week 3</h1>
    <span>1. componet</span>
    <br />
    <span>2. vuetify</span>
    <br />
    <span>3. dialog & tooltip</span>
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
</style>