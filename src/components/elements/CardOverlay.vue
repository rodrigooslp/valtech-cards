<template>
  <div class="card__overlay"></div>
</template>

<style>
.card__overlay {
  width: 100%;
  height: 100%;
  border-radius: 0.5rem;
  background-image: linear-gradient(#33333380, #33333380);
  z-index: -1;
}

.card__overlay--absolute {
  position: absolute;
}
</style>
