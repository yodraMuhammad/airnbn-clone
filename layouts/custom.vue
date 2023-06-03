<template>
    <SecondaryNavbar/>
    <div>
        <slot/>
    </div>

    <Footer />
</template>

<script setup>
import SecondaryNavbar from '@/components/navbar/SecondaryNavbar.vue'
</script>