<template>
  <div class="container">
    <main>
      <section class="not-found">
        <img :src="NotFoundImage" alt="maintenance robot">
        <h2>Page Not Found</h2>
        <p>Sorry, we can’t find what you are looking for.</p>
        <Button class="button" text="Go Back" />
      </section>
      <section class="divider" />
      <section class="maintenance-robot">
        <img :src="MaintenanceRobotImage" alt="maintenance robot ">
      </section>
    </main>
  </div>
</template>

<script setup lang="ts">
import MaintenanceRobotImage from '@assets/images/maintenance_robot.svg';
import NotFoundImage from '@assets/images/404.svg';
import Button from '@components/Button.vue';

</script>

<style scoped>
.container {
  max-width: 1280px;
  height: 100vh;
  margin: 0 auto;
  overflow: hidden;
}

main {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  margin-top: 10%;
}

.divider {
  width: 80px;
}

.maintenance-robot img {
  max-width: 40rem;
}

.not-found h2 {
  margin-top: 40px;
}

.not-found p {
  margin-top: 12px;
}

.not-found .button {
  margin-top: 25px;
}
@media screen and (min-width: 1280px) {
  .maintenance-robot img {
    max-width: 56rem;
  }
}

@media screen and (max-width: 1050px) {
  .divider {
    display: none;
  }
}
</style>
