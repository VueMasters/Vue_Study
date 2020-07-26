<template>
  <v-card>
    <v-row class="calModal">
      <v-col class="calModal">
        <div class="calculator" align="center">
          <v-toolbar color="black" dark flat class="display">
            <v-icon left>mdi-calculator</v-icon>
            <v-spacer></v-spacer>
            <v-btn text :small="true" @click="closeModal">
              <v-icon :small="true">mdi-close</v-icon>
            </v-btn>
          </v-toolbar>

          <div class="display">{{ current || 0 }}</div>
          <div class="btn" @click="clear">C</div>
          <div class="btn" @click="change">+/-</div>
          <div class="btn" @click="percent">%</div>
          <div class="btn operator" @click="divide">÷</div>
          <div class="btn" @click="append('7')">7</div>
          <div class="btn" @click="append('8')">8</div>
          <div class="btn" @click="append('9')">9</div>
          <div class="btn operator" @click="times">×</div>
          <div class="btn" @click="append('4')">4</div>
          <div class="btn" @click="append('5')">5</div>
          <div class="btn" @click="append('6')">6</div>
          <div class="btn operator" @click="minus">-</div>
          <div class="btn" @click="append('1')">1</div>
          <div class="btn" @click="append('2')">2</div>
          <div class="btn" @click="append('3')">3</div>
          <div class="btn operator" @click="plus">+</div>
          <div class="btn zero" @click="append('0')">0</div>
          <div class="btn" @click="dot">.</div>
          <div class="btn operator" @click="equal">=</div>
        </div>
      </v-col>
    </v-row>
  </v-card>
</template>

<script>
export default {
  name: "Calculator",
  data() {
    return {
      current: "",
      operator: null,
      previous: null,
      isOperactor: false
    };
  },

  methods: {
    closeModal() {
      this.$emit("close-modal");
    },
    clear() {
      this.current = "";
    },
    change() {
      this.current = this.current != 0 ? `${this.current * -1}` : this.current;
    },
    percent() {
      if (this.current != 0) {
        this.current = `${parseFloat(this.current) / 100}`;
      }
    },
    append(number) {
      if (this.isOperactor) {
        this.current = "";
        this.isOperactor = false;
      }
      this.current = `${this.current}${number}`;
    },
    dot() {
      if (this.current.indexOf(".") === -1) {
        this.append(".");
      }
    },
    equal() {
      this.current = this.operator(
        parseFloat(this.previous),
        parseFloat(this.current)
      );
    },
    setOperactor() {
      this.isOperactor = true;
      this.previous = this.current;
    },

    plus() {
      this.operator = (a, b) => a + b;
      this.setOperactor();
    },
    minus() {
      this.operator = (a, b) => a - b;
      this.setOperactor();
    },
    times() {
      this.operator = (a, b) => a * b;
      this.setOperactor();
    },
    divide() {
      this.operator = (a, b) => a / b;
      this.setOperactor();
    }
  }
};
</script>

<style scoped>
.calModal {
  padding: 0;
  margin: 0;
}
.calculator {
  margin: 0 auto;
  width: 400px;
  display: grid;
  font-size: 40px;
  grid-template-columns: repeat(4, 1fr);
  grid-auto-rows: minmax(50px, auto);
}

.display {
  grid-column: 1/5;
  background-color: #333;
  color: white;
}

.zero {
  grid-column: 1/3;
}

.btn {
  background-color: #f2f2f2;
  border: 1px solid #999;
}
.btn:hover {
  background-color: #d9d9d9;
}

.operator {
  background-color: orange;
  color: white;
}
</style>
