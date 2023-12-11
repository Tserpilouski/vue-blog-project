<template>
  <div class="content">
    <label for="title">Title:</label>
    <input
      id="title"
      type="text"
      :value="modelValue.title"
      @input="updateValue({ ...modelValue, title: $event.target.value })"
      placeholder="Title"
    />
    <label for="tag">Tag:</label>
    <input
      id="tag"
      type="text"
      :value="modelValue.tags"
      @input="updateValue({ ...modelValue, tags: $event.target.value })"
      placeholder="Tags"
    />
    <label for="summary">Summary:</label>
    <textarea
      id="summary"
      :value="modelValue.summary"
      @input="updateValue({ ...modelValue, summary: $event.target.value })"
      placeholder="Summary"
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

<styl lang="scss" scoped>
.content {
  display: flex;
  flex-direction: column;
}
</styl>
