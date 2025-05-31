import QRCodeStyling from "qr-code-styling";

export default defineNuxtPlugin(() => {
  return {
    provide: {
      qrStyling: QRCodeStyling,
    },
  };
});
