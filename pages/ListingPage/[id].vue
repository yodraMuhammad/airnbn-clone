<script setup>
const router = useRoute();

console.log(router.params.id)
const { data: posts } = await useFetch('https://dummyjson.com/products/'+router.params.id)
</script>

<template>
    <div class="pt-48 pb-36">
        <Container>
            <ListingClient :posts="posts"/>
        </Container>
    </div>
</template>