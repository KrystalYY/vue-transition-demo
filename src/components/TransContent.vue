<template>
  <div>
    <div>
      <button v-for="(c, idx) in choices"
              :key="idx"
              @click="choose(idx)">Component {{ idx + 1 }}</button>
    </div>
    <div class="container">
      <transition :name="name">
        <component :is="selected"></component>
      </transition>
    </div>
  </div>
</template>

<script>
import DemoCompoOne from './DemoCompoOne';
import DemoCompoTwo from './DemoCompoTwo';

export default {
  name: 'trans-content',

  components: { DemoCompoOne, DemoCompoTwo },

  data() {
    return {
      choices: [DemoCompoOne, DemoCompoTwo],
      selected: DemoCompoOne,
    };
  },

  computed: {
    name() {
      return this.selected === DemoCompoOne ? 'right' : 'left';
    },
  },

  methods: {
    choose(idx) {
      this.selected = this.choices[idx];
    },
  },
};
</script>

<style scoped>
button {
  margin: 0 15px 15px;
  cursor: pointer;
}

.container {
  position: relative;
  overflow: hidden;
  width: 300px;
  height: 300px;
  margin: auto;
}

.container > div {
  position: absolute;
  top: 0;
  left: 0;
}

.left-enter-active,
.left-leave-active,
.right-enter-active,
.right-leave-active {
  transition: all 1s;
}

.left-enter,
.right-leave-to {
  transform: translateX(100%);
}

.left-leave-to,
.right-enter {
  transform: translateX(-100%);
}
</style>



