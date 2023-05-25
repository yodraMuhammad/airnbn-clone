<script setup>
const props = defineProps({
  nama: {
    type: String,
    default: 'John Doe'
  },
  umur: {
    type: Number,
    default: 25
  }
})
</script>

<template>
    <div class="max-w-[2520px] mx-auto xl:px-20 md:px-10 sm:px-2 px-4">
        <slot/>
    </div>
</template>