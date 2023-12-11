<template>
  <div class="container">
    <header>
      <slot name="header" class="header"></slot>
    </header>
    <main>
      <slot></slot>
    </main>
    <footer>
      <slot name="footer"></slot>
    </footer>
  </div>
</template>

<style>
.container {
  color: white;
}
footer {
  border-top: 1px solid #ccc;
  font-size: 1rem;
}
</style>
