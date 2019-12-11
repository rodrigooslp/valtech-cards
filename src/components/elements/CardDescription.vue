<template>
  <h4 class="card__description">
    <slot></slot>
  </h4>
</template>

<style lang="scss">
.card__description {
  text-align: center;
  font-size: 0.95rem;
  color: #ffffffbf;
  padding-left: 2rem;
  padding-right: 2rem;
  line-height: 1.2rem;
  font-family: Helvetica, Arial, sans-serif;
  font-weight: 400;

  @at-root &--grow {
    flex-grow: 1;
  }

  @at-root &--zero-height{
    max-height: 0;
  }

  @at-root &--zero-opacity{
    opacity: 0;
  }
}

@media (min-width: 768px) {
  .card__description {
    padding-left: 2.5rem;
    padding-right: 2.5rem;
  }
}
</style>
