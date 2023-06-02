<template>
    <div class="pt-48">
      <Container>
        <TaxesCard/>
        <div v-if="isEmpty">
            <EmptyState />
        </div>
        <div v-else class="mt-6 grid grid-cols-1 sm:grid-cols-2 md:gridcols-3 lg:grid-cols-4 xl:gridcols-5 2xl:grid-cols-6 gap-6 pb-20">
          <Listing :posts="posts"/>
        </div>
      </Container>
    </div>
  </template>
  
<script setup>
const isEmpty = ref(false)
const router = useRoute();
const { data: posts } = await useFetch('https://dummyjson.com/products/category/' + router.params.slug)

useHead({
  title: 'Airbnb'
})

</script>