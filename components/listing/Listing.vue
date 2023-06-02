<script setup>
const router = useRouter()
const { data: response } = await useFetch('https://dummyjson.com/products')

const props = defineProps({
    posts : Object
})
const data = ref()
if(props.posts){
    data.value = props.posts
}else{
    data.value = response
}

</script>

<template>
    <Suspense v-for="(item, index) in data.products" :key="index">
        <template #default>
            <ListingCard :id="item.id"/>
        </template>
        <template #fallback>
            <ListingCardLoad/>
        </template>
    </Suspense>
</template>