<template>
  <button class="card__button"><slot></slot></button>
</template>

<style>
.card__button {
  color: #fff;
  font-size: 0.95rem;
  border-width: 1px;
  border-style: solid;
  border-color: #fff;
  border-radius: 0.25rem;
  padding-top: 0.35rem;
  padding-bottom: 0.35rem;
  padding-left: 1rem;
  padding-right: 1rem;
}

.card__button:focus {
  outline: none;
}

.card__button--invisible {
  visibility: hidden;
}

.card__button--zero-opacity{
  opacity: 0;
}
</style>
