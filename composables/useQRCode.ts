import type {
  DrawType,
  TypeNumber,
  Mode,
  ErrorCorrectionLevel,
  DotType,
  CornerSquareType,
  CornerDotType,
} from "qr-code-styling";

export default function () {
  const { $qrCodeStyling } = useNuxtApp();
  const QRCodeStyling = $qrCodeStyling;
  const qrCode = ref<InstanceType<typeof QRCodeStyling> | null>(null);
  const options = reactive({
    width: 300,
    height: 300,
    type: "svg" as DrawType,
    data: "https://example.com",
    image: "/favicon.ico",
    margin: 10,
    qrOptions: {
      typeNumber: 0 as TypeNumber,
      mode: "Byte" as Mode,
      errorCorrectionLevel: "Q" as ErrorCorrectionLevel,
    },
    imageOptions: {
      hideBackgroundDots: true,
      imageSize: 0.4,
      margin: 20,
      crossOrigin: "anonymous",
    },
    dotsOptions: {
      color: "#41b883",
      type: "rounded" as DotType,
    },
    backgroundOptions: {
      color: "#ffffff",
    },
    cornersSquareOptions: {
      color: "#35495e",
      type: "extra-rounded" as CornerSquareType,
    },
    cornersDotOptions: {
      color: "#35495e",
      type: "dot" as CornerDotType,
    },
  });
  const initQRCode = () => {
    if (import.meta.client) {
      qrCode.value = new QRCodeStyling(options);
    }
  };
  const updateQRCode = () => {
    if (qrCode.value) qrCode.value.update(options);
  };

  const downloadQRCode = (extension: "png" | "svg" | "jpeg" | "webp") => {
    if (qrCode.value) qrCode.value.download({ extension });
  };
  return {
    options,
    initQRCode,
    updateQRCode,
    downloadQRCode,
  } as const;
}
