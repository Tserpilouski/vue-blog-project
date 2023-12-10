<template>
  <div class="modal">
    <div class="modal-content">
      <slot></slot>
      <!-- Здесь будет PostEditor -->
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

<style scoped></style>
