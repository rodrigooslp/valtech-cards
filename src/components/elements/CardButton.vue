<template>
  <button class="card__button">
    <slot></slot>
  </button>
</template>

<style lang="scss">
.card__button {
  color: #fff;
  font-size: 0.95rem;
  border: 1px solid #fff;
  border-radius: 0.25rem;
  padding: 0.35rem 1rem;
  margin-top: 0.75rem;
  margin-bottom: 1.5rem;
  font-family: Helvetica, Arial, sans-serif;

  @at-root &:focus {
    outline: none;
  }

  @at-root &--invisible {
    visibility: hidden;
  }

  @at-root &--zero-opacity{
    opacity: 0;
  }

  @at-root &--position-bottom {
    position: absolute;
    bottom: 0;
  }
}
</style>
