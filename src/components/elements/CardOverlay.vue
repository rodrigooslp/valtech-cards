<template>
  <div class="card__overlay"></div>
</template>

<style lang="scss">
$overlay-color: rgba(60, 60, 60, 0.4);
$overlay-color-light: rgba(113, 113, 113, 0.3);

.card__overlay {
  width: 100%;
  height: 100%;
  background-image: linear-gradient($overlay-color, $overlay-color);
  z-index: -1;
  position: absolute;

  @at-root &--color-light {
    background-image: linear-gradient($overlay-color-light, $overlay-color-light);
  }
}
</style>
