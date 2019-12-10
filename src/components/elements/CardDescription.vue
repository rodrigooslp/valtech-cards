<template>
  <h4 class="card__description">
    <slot></slot>
  </h4>
</template>

<style>
.card__description {
  text-align: center;
  font-size: 0.95rem;
  color: #ffffffbf;
  padding-left: 2rem;
  padding-right: 2rem;
}

.card__description--grow {
  flex-grow: 1;
}

.card__description--zero-height{
  max-height: 0;
}

.card__description--zero-opacity{
  opacity: 0;
}

@media (min-width: 768px) {
  .card__description {
    padding-left: 2.5rem;
    padding-right: 2.5rem;
  }
}
</style>
