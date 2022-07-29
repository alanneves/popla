<template>
  <div class="container">
    <main>
      <section class="not-found">
        <img :src="NotFoundImage" alt="maintenance robot">
        <h2>Page Not Found</h2>
        <p>Sorry, we can’t find what you are looking for.</p>
        <Button class="button" text="Go Back" @click="returnToHomePage" />
      </section>
      <section class="divider" />
      <section class="maintenance-robot">
        <img :src="MaintenanceRobotImage" alt="maintenance robot" loading="lazy">
      </section>
    </main>
  </div>
</template>

<script setup lang="ts">
import { Button } from '@/components';
import { NotFoundImage, MaintenanceRobotImage } from '@assets/images';
import { useRouter } from 'vue-router';

const router = useRouter();

const returnToHomePage = () => {
  router.push({ path: '/' });
};

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
