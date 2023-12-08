<template>
  <section>
    <slot>
      <h4>Slot nie nazwany</h4>
    </slot>
    <div>
      <slot name="opis">
        <h5>Slot nazwany</h5>
      </slot>
    </div>
  </section>
</template>
