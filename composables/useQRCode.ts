// Define QRCodeStyling constructor type from the module
import type QRCodeStylingType from "qr-code-styling";

export function useQRCode(
  initialUrl: string,
  fileExt: "png" | "jpeg" | "webp" | "svg" = "png"
) {
  const qrCodeRef = ref<HTMLElement | null>(null);
  const url = ref(initialUrl);
  const extension = ref(fileExt);

  const qrCode = shallowRef<InstanceType<typeof QRCodeStylingType> | null>(
    null
  );

  const initQRCode = (QRCodeStyling: typeof QRCodeStylingType) => {
    if (import.meta.server) return;

    qrCode.value = new QRCodeStyling({
      width: 500,
      height: 500,
      type: "svg",
      data: url.value,
      image:
        "https://upload.wikimedia.org/wikipedia/commons/5/51/Facebook_f_logo_%282019%29.svg",
      dotsOptions: {
        color: "#4267b2",
        type: "rounded",
      },
      backgroundOptions: {
        color: "#fff",
      },

      imageOptions: {
        saveAsBlob: true,
        crossOrigin: "anonymous",
        margin: 20,
      },
    });

    onMounted(() => {
      if (qrCodeRef.value && qrCode.value) {
        qrCode.value.append(qrCodeRef.value);
      }
    });

    watch(url, (newUrl) => {
      qrCode.value?.update({ data: newUrl });
    });
  };

  const download = () => {
    qrCode.value?.download({ extension: extension.value });
  };

  return {
    qrCodeRef,
    url,
    extension,
    initQRCode,
    download,
  };
}
