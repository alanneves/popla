<template>
  <div class="table-wrapper">
    <div class="table-container">
      <div></div>
      <div class="table-top">
        <div class="table-player-wrapper">
          <div class="table-player-container">
            <div class="table-player-card-empty"></div>
            <div class="table-player-name">Alan</div>
          </div>
        </div>
      </div>
      <div></div>
      <div class="table-left"></div>
      <div class="table">

      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
</script>

<style scoped>
.table-wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
}

.table-wrapper .table-container {
  display: grid;
  grid-gap: 0.8rem;
  grid-template-areas: "left top right"
    "left table right"
    "left bottom right";
  grid-template-columns: 10.4rem 1fr 10.4rem;
  grid-template-rows: auto 1fr auto;
  width: auto;
  min-height: 200px;
}

.table-wrapper .table-container .table-top {
  grid-area: top;
  padding-bottom: 1.6rem;
  display: flex;
  justify-content: center;
}

.table-wrapper .table-container .table-player-wrapper {
  display: flex;
  max-width: 8rem;
  width: 8rem;
}

.table-wrapper .table-container .table-player-container {
  display: flex;
  justify-content: space-evenly;
  max-width: 100%;
  flex-direction: column;
  align-items: center;
}

.table-wrapper .table-container .table-player-card-empty {
  background: #e8e9ea;
  border-radius: 0.6rem;
  flex-shrink: 0;
  height: 6rem;
  width: 3.5rem;
}

.table-wrapper .table-container .table-player-name {
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  align-items: center;
  display: -webkit-box;
  font-size: 1.4rem;
  font-weight: 700;
  justify-content: center;
  line-height: 1.1em;
  overflow: hidden;
  padding-top: 0.8rem;
  text-align: center;
  width: 8rem;
}
</style>
