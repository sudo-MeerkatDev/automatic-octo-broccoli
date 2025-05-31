<template>
  <NuxtLayout :name="layout">
    <div>
      <Button>Click me</Button>
    </div>
    <QRCode />
  </NuxtLayout>
</template>

<script setup lang="ts">
import QRCode from "~/components/share/QRCode.vue";
const layout = "default";
</script>

<style scoped></style>
