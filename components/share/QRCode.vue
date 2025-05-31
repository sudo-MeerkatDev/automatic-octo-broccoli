<template>
  <div class="hello">
    <h1>QR code styling for Vue (Nuxt 3)</h1>
    <div id="qr-code" ref="qrCodeContainer" />
    <label>
      <input v-model="options.data" placeholder="Add data" />
      <select v-model="extension">
        <option value="svg">SVG</option>
        <option value="png">PNG</option>
        <option value="jpeg">JPEG</option>
        <option value="webp">WEBP</option>
      </select>
      <button @click="download">Download</button>
    </label>
  </div>
</template>

<script setup lang="ts">
const qrCodeContainer = ref<HTMLElement | null>(null);
const extension = ref<"svg" | "png" | "jpeg" | "webp">("svg");

const { options, initQRCode, updateQRCode, downloadQRCode } = useQRCode();

onMounted(() => {
  initQRCode();
});

watch(
  () => options.data,
  () => {
    updateQRCode();
  }
);

function download() {
  downloadQRCode(extension.value);
}
</script>
