declare module "#app" {
  interface NuxtApp {
    $qrStyling: typeof import("qr-code-styling").default;
  }
}
