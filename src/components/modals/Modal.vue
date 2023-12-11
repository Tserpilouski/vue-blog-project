<template>
  <div class="modal">
    <slot></slot>
    <div class="modal__btns">
      <button @click="$emit('close')">Cancel</button>
      <button @click="$emit('save')">Save</button>
    </div>
  </div>
</template>

<script setup>
defineProps({
  modelValue: {
    type: Object,
    required: true,
  },
});

defineEmits(["close", "save"]);
</script>

<style lang="scss" scoped>
.modal {
  display: flex;
  flex-direction: column;
  width: 50%;
  height: 10rem;
  margin: 0 auto;
  border: 0.1rem red solid;
  padding-top: 1rem;
  padding-left: 1rem;
  background-color: azure;

  &__btns {
    width: 100%;
  }
}
</style>
