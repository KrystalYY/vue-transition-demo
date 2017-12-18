<template>
  <div>
    <div class="button-container">
      <button @click="shuffle">Shuffle</button>
      <button @click="add">Add</button>
      <button @click="remove">Remove</button>
    </div>

    <transition-group name="list" tag="div" class="list-container">
      <span v-for="item in items"
            :key="item"
            class="item">{{ item }}</span>
    </transition-group>
  </div>
</template>

<script>
import _ from 'lodash';

export default {
  name: 'trans-list',
  data() {
    return {
      items: [1, 2, 3, 4, 5, 6, 7, 8, 9],
      nextNum: 10,
    };
  },

  methods: {
    randomIndex() {
      return Math.floor(Math.random() * this.items.length);
    },
    add() {
      this.items.splice(this.randomIndex(), 0, this.nextNum += 1);
    },
    remove() {
      this.items.splice(this.randomIndex(), 1);
    },
    shuffle() {
      this.items = _.shuffle(this.items);
    },
  },
};
</script>

<style scoped>
button {
  margin: 5px;
}

.button-container {
  margin-bottom: 20px;
}

.list-container {
  position: relative;
}

.item {
  padding: 5px;
  margin-right: 10px;
  border: 1px solid #2c3e50;
  border-radius: 3px;
  background-color: white;

  display: inline-block;
}

.list-move,
.list-enter-active,
.list-leave-active {
  transition: all 1s
}

.list-enter,
.list-leave-to {
  opacity: 0
}

.list-leave-active {
  position: absolute;
}

.list-leave-to {
  transform: translateX(-80%);
}
</style>
