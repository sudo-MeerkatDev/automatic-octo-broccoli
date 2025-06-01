<template>
  <SidebarProvider>
    <LazyShareAppSidebar />
    <main>
      <SidebarTrigger />
      <slot />
    </main>
  </SidebarProvider>
</template>

<script setup lang="ts">
import { SidebarProvider, SidebarTrigger } from "~/components/ui/sidebar";
import { LazyShareAppSidebar } from "#components";
</script>

<style scoped></style>
