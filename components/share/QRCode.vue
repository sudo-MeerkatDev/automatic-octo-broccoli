<script setup lang="ts">
import type QRCodeStyling from "qr-code-styling";

const { $qrStyling } = useNuxtApp();

const { qrCodeRef, url, extension, initQRCode, download } = useQRCode(
  "https://qr-code-styling.com"
);

// Manually assert the type
initQRCode($qrStyling as typeof QRCodeStyling);
</script>

<template>
  <div class="qrcode-generator">
    <div class="input-wrapper">
      <input v-model="url" placeholder="Enter URL" />
      <select v-model="extension">
        <option value="png">PNG</option>
        <option value="jpeg">JPEG</option>
        <option value="webp">WEBP</option>
      </select>
      <button @click="download">Download</button>
    </div>
    <div ref="qrCodeRef" />
  </div>
</template>
