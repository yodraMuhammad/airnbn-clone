<script setup>
const props = defineProps({
    src : String
})
</script>

<template>
    <img :src="src" alt="Avatar" class="rounded-full" height="50" width="50">
</template>