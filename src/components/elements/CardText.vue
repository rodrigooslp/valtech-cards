<template>
  <h4 class="card__text">
    <slot></slot>
  </h4>
</template>

<style>
.card__text {
  color: #ffffffbf;
  font-size: 0.95rem;
  text-align: center;
  padding-left: 2rem;
  padding-right: 2rem;
  font-family: Helvetica, Arial, sans-serif;
  font-weight: 400;
}

@media (min-width: 768px) {
  .card__text {
    padding-left: 14rem;
    padding-right: 14rem;
  }
}
</style>
