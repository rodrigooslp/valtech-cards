<template>
  <div class="card__background" :class="backgroundClass"></div>
</template>

<script>
export default {
  props: {
    backgroundModifier: String
  },
  computed: {
    backgroundClass () {
      if (!this.backgroundModifier) return
      return `card__background--${this.backgroundModifier}`
    }
  }
}
</script>

<style lang="scss">
$modifiers: 'venice', 'berlin', 'barcelona', 'paris', 'amsterdam', 'london';

.card__background {
  width: 100%;
  height: 100%;
  border-radius: 0.5rem;
  background-position: center;
  background-size: cover;
  background-image: url('/img/bg-default.jpg');
  z-index: -2;

  @at-root &--position-absolute {
    position: absolute;
  }

  @each $modifier in $modifiers {
    @at-root &--#{$modifier} {
      background-image: url('/img/bg-#{$modifier}.jpg');
    }
  }
}

.webp {
  .card__background {
    background-image: url('/img/bg-default.webp');
  }

  @each $modifier in $modifiers {
    .card__background--#{$modifier} {
      background-image: url('/img/bg-#{$modifier}.webp');
    }
  }
}

</style>
