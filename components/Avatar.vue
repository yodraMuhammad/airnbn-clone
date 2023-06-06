<script setup>
const props = defineProps({
    src : String
})
</script>

<template>
    <img :src="'~/assets/image/'+src" alt="Avatar" class="rounded-full" height="30" width="30">
</template>