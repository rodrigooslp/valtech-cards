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
  z-index: -2;

  @at-root &--position-absolute {
    position: absolute;
  }
}

.webp {
  .card__background {
    background-image: url('../../assets/img/bg-default.webp');
  }

  @each $modifier in $modifiers {
    .card__background--#{$modifier} {
      background-image: url('../../assets/img/bg-#{$modifier}.webp');
    }
  }
}

.no-webp {
  .card__background {
    background-image: url('../../assets/img/bg-default.jpg');
  }

  @each $modifier in $modifiers {
    .card__background--#{$modifier} {
      background-image: url('../../assets/img/bg-#{$modifier}.jpg');
    }
  }
}

</style>
