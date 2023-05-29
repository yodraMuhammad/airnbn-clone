<script setup>
const { data: count } = await useFetch('https://dummyjson.com/products')
</script>

<template>
    <Suspense v-for="(item, index) in count.products" :key="index">
        <template #default>
            <ListingCard :id="item.id"/>
        </template>
        <template #fallback>
            <ListingCardLoad/>
        </template>
    </Suspense>
</template>