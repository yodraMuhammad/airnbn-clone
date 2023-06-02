<script setup>
const { data: response } = await useFetch('https://6vbjxu.sse.codesandbox.io/carts')

</script>

<template>
    <div class="pt-48">
        <Container>
        <li v-for="(item,index) in response" :key="index">
            {{ item.product.title }}
        </li>
        </Container>
    </div>    
</template>