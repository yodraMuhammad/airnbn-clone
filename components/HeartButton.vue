<script setup>

const hasFavorite = ref(false)


const toggleFavorite = () => {
    hasFavorite.value = !hasFavorite.value
    console.log('change');
}

</script>

<template>
    <div @click="toggleFavorite" class="relative opacity-80 transition cursor-pointer">
        <div class="fill-white absolute -to-[2px] -right-[2px]">
            <icon name="bx:heart" color="white" style="font-size: 28" />
        </div>
        <!-- <icon name="bxs:heart" :color="hasFavorite ? 'white' : 'black'" style="font-size: 24" /> -->
        <icon v-if="hasFavorite" name="bxs:heart" style="font-size: 25 ; color: #f43f5e ;" />
        <icon v-else name="bxs:heart" style="font-size: 25 ; color: rgba(128, 128, 128, 0.5) ;" />
    </div>
</template>