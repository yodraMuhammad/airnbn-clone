<template>
  <Container>
    <div v-if="isEmpty">
        <EmptyState/>
    </div>
    <div v-else class="pt-52 pb-10 grid grid-cols-1  sm:grid-cols-2 md:gridcols-3 lg:grid-cols-4 xl:gridcols-5 2xl:grid-cols-6 gap-6">
      <ListingCard />
      <ListingCard />
      <ListingCard />
      <ListingCard />
      <ListingCard />
      <ListingCard />
    </div>
  </Container>
</template>

<script setup>
// import { useHead } from '@nuxtjs/composition-api'
const isEmpty = ref(false)
const listing = {
  id: 1,
}

useHead({
  title: 'Airbnb' // Ganti dengan judul baru yang Anda inginkan
})
</script>