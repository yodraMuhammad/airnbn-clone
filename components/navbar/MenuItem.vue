<script setup>
const props = defineProps({
  label: String,
  onClick: Function,
});

</script>
<template>
    <div @click="onclick" class="px-4 py-3 hover:bg-neutral-100 transition font-semibold">
        {{ label }}
    </div>
</template>