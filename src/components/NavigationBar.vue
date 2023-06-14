<template>
  <nav>
    <div class="top-section">
      <!-- Artist's name and language selection dropdown can go here -->
    </div>
    <div class="bottom-section">
      <!-- Links to portfolio categories can go here -->
    </div>
  </nav>
</template>

<script>
export default {
  name: 'NavigationBar',
}
</script>

<style scoped>
nav {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
}

.top-section {
  /* Your styling for the top section here */
}

.bottom-section {
  /* Your styling for the bottom section here */
}
</style>
