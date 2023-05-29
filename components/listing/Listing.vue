<script setup>
const { data: count } = await useFetch('https://dummyjson.com/products')
</script>

<template>
    <Suspense v-for="(item, index) in count.products" :key="index">
        <template #default>
            <NuxtLink :to="'/ListingPage'">
                <ListingCard :id="item.id"/>
            </NuxtLink>
        </template>
        <template #fallback>
            <ListingCardLoad/>
        </template>
    </Suspense>
</template>