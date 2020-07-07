<template>
    <canvas width="600" height="400" class="canvas"></canvas>
</template>

<script>
export default {
    name: "AcidRainCanvas",
    props: {
        words: {
            type: Array,
            required: true
        },
        score: {
            type: Number,
            default: 0
        },
        leftLife: {
            type: Number,
            default: 0
        }
    },
    watch: {
        words() {
            this.draw(this.words);
        },
        leftLife() {
            if (this.leftLife === 0) {
                this.endGame();
            }
        }
    },
    mounted() {
        this.ctx = this.$el.getContext("2d");
        this.ctx.font = "italic 24px Calibri";

        this.draw(this.words);
    },
    methods: {
        endGame() {
            // black overlay
            this.ctx.globalAlpha = 0.75;
            this.ctx.fillStyle = "black";
            this.ctx.fillRect(0, 0, this.$el.width, this.$el.height);

            // white pop-up
            this.ctx.globalAlpha = 1;
            this.ctx.fillStyle = "white";
            this.ctx.fillRect(
                this.$el.width / 4,
                this.$el.height / 4,
                this.$el.width / 2,
                this.$el.height / 2
            );

            // score
            this.ctx.fillStyle = "black";
            const result = "Score: " + this.score;
            this.ctx.fillText(
                result,
                this.$el.width / 2 - result.length * 5,
                this.$el.height / 2 + 5
            );
        },
        draw(words) {
            // clear screen
            this.ctx.clearRect(0, 25, this.$el.width, this.$el.height - 25);
            
            // words
            this.ctx.fillStyle = "black";
            for (let i = 0; i < words.length; i++) {
                const word = words[i];

                this.ctx.fillText(word.text, word.x, word.y);
            }

            // menus
            this.ctx.fillStyle = "black";
            this.ctx.fillRect(0, 0, 600, 40);

            // score
            this.ctx.fillStyle = "white";
            this.ctx.fillText("Score: ", 5, 25);

            this.ctx.fillText(this.score, 70, 25);

            // life
            this.ctx.fillStyle = "red";
            for (let i = 5; i > 0; i--) {
                if (i <= this.leftLife) {
                    this.ctx.beginPath();
                    this.ctx.arc(600 - i * 25, 20, 10, 0, 2 * Math.PI);
                    this.ctx.fill();
                }
            }
        }
    }
};
</script>

<style>
</style>
