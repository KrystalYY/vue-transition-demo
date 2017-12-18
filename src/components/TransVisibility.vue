<template>
  <div>
    <button @click="showModal=!showModal">
    Toggle Modal
    </button>

    <transition name="fade">
      <div v-if="showModal" class="modal">
        <p>Hello World!</p>
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  name: 'trans-visibility',
  data() {
    return {
      showModal: false,
    };
  },
};
</script>

<style scoped>

.modal {
  width: 200px;
  height: 100px;
  border: 1px solid #48B884;
  margin: 30px auto;
}

.modal p {
  line-height: 100px;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 1s;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>
