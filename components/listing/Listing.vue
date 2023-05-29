<script setup>
// const { data: count } = await useFetch('https://dummyjson.com/products')
// console.log(count._rawValue.products);
// data = count._rawValue.products
</script>

<template>
    <Suspense v-for="(item, index) in 39" :key="index">
        <template #default>
            <ListingCard :id="item"/>
        </template>
        <template #fallback>
            <ListingCardLoad/>
        </template>
    </Suspense>
</template>