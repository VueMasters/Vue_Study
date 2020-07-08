<template>
    <div>
        <audio autoplay loop hidden>
            <source :src="require('@/assets/sounds/heart-of-the-sea.mp3')" type="audio/mp3" />Your browser does not support the audio element.
        </audio>

        <div>
            <acid-rain-canvas :words="currentWords" :score="score" :left-life="leftLife"></acid-rain-canvas>
        </div>

        <acid-rain-input v-if="playing" @input-event="tryGuessing" autocomplete="off"></acid-rain-input>
    </div>
</template>

<script>
/**
 * further -> Autoplay Policy Changes
 * e.g. Chrome's autoplay policies:
 *      Muted autoplay is always allowed.
 *      Autoplay with sound is allowed if:
 *          User has interacted with the domain (click, tap, etc.).
 *          On desktop, the user's Media Engagement Index threshold has been crossed, meaning the user has previously played video with sound.
 *          The user has added the site to their home screen on mobile or installed the PWA on desktop.
 *      Top frames can delegate autoplay permission to their iframes to allow autoplay with sound.
 * @link https://developers.google.com/web/updates/2017/09/autoplay-policy-changes
 */
import Vue from "vue";
import AcidRainCanvas from "@/components/AcidRainCanvas";
import AcidRainInput from "@/components/AcidRainInput";
import AcidRainWords from "@/components/AcidRainWords.js";

const soundFail = new Audio(require("@/assets/sounds/acid-rain-fail.mp3"));
soundFail.volume = 0.3;
const soundSuccess = new Audio(
    require("@/assets/sounds/acid-rain-success.mp3")
);
soundSuccess.volume = 0.7;

const probability = function(p) {
    if (p) {
        return Math.random() < p;
    } else {
        return false;
    }
};

export default {
    name: "AcidRain",
    components: {
        AcidRainCanvas,
        AcidRainInput
    },
    data: () => ({
        playing: true,
        speedMax: 3,
        leftLife: 5,
        score: 0,
        currentWords: [],
        wordsPool: AcidRainWords.words,
        intervals: {}
    }),
    watch: {
        leftLife() {
            if (this.leftLife == 0) {
                this.endGame();
            }
        }
    },
    beforeDestroy() {
        this.endGame();
    },
    created() {
        const WIDTH_MAX = 550;
        const WIDTH_MIN = 50;

        const SPEED_MIN = 1;

        this.wordsPool = Array.from(new Set(this.wordsPool));

        const dropInterval = setInterval(() => {
            this.currentWords.forEach((currentWord, i) => {
                this.moveWord(currentWord, i);
            });
        }, 50);

        Vue.set(this.intervals, "drop", dropInterval);

        const wordSpeedInterval = setInterval(() => {
            if (probability(0.9)) {
                this.speedMax += Math.random() * 0.1;
            }
        }, 700);

        Vue.set(this.intervals, "wordSpeed", wordSpeedInterval);

        const generateWordInterval = setInterval(() => {
            if (probability(0.55)) {
                const wordIndex = Math.floor(
                    Math.random() * this.wordsPool.length
                );

                if (!this.wordsPool[wordIndex]) {
                    return;
                }

                const xPosition =
                    Math.random() * (WIDTH_MAX - WIDTH_MIN) + WIDTH_MIN;
                const length = this.wordsPool[wordIndex].length;

                this.currentWords.push({
                    text: this.wordsPool[wordIndex],
                    x: xPosition > 250 ? xPosition - length * 10 : xPosition,
                    y: 0,
                    speed:
                        Math.random() * (this.speedMax - SPEED_MIN) + SPEED_MIN
                });

                this.wordsPool.splice(wordIndex, 1);
            }
        }, 700);

        Vue.set(this.intervals, "generateWord", generateWordInterval);
    },
    methods: {
        moveWord(word, index) {
            word.y += word.speed;
            Vue.set(this.currentWords, index, word);
            if (word.y > 410) {
                this.missWord(word, index);
            }
        },
        missWord(word, index) {
            soundFail.play().catch(() => {});
            this.leftLife -= 1;
            this.currentWords.splice(index, 1);
            this.wordsPool.push(word.text);
        },
        endGame() {
            this.releaseIntervals();

            this.playing = false;
        },
        releaseIntervals() {
            Object.keys(this.intervals).forEach(key => {
                clearInterval(this.intervals[key]);
            });
        },
        tryGuessing(keyword) {
            if (!keyword) {
                return;
            }

            let success = false;

            this.currentWords = this.currentWords.filter(word => {
                if (word.text === keyword) {
                    success = true;
                    this.score += 1;
                    this.wordsPool.push(word.text);
                    return false;
                } else {
                    return true;
                }
            });

            if (!success) {
                this.leftLife -= 1;
                soundFail.play().catch(() => {});
            } else {
                soundSuccess.play().catch(() => {});
            }
        }
    }
};
</script>

<style scoped>
.canvas {
    border: 1px solid #000;
}
</style>
