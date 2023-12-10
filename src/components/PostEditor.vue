<template>
  <div>
    <input
      type="text"
      :value="modelValue.title"
      @input="updateValue({ ...modelValue, title: $event.target.value })"
      placeholder="Title"
    />

    <textarea
      :value="modelValue.summary"
      @input="updateValue({ ...modelValue, content: $event.target.value })"
      placeholder="Content"
    ></textarea>
  </div>
</template>

<script setup>
const props = defineProps({
  modelValue: {
    type: Object,
    required: true,
  },
});

const emit = defineEmits(["update:modelValue"]);

const updateValue = (newValue) => {
  emit("update:modelValue", newValue);
};
</script>
