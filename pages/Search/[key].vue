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
import axios from 'axios'
const isEmpty = ref(false)
const router = useRoute();
const { data: posts } = await useFetch('https://dummyjson.com/products/search?q=' + router.params.key)
onBeforeMount(() => {
  const cart = useCart();
  const id = useId()
  id.value = sessionStorage.getItem('auth');
  if(sessionStorage.getItem('auth')){
  axios.get("https://6vbjxu.sse.codesandbox.io/carts?userId="+sessionStorage.getItem('auth'))
    .then((response) => cart.value = response.data.length)
    .catch(function (error) {
      console.log("Gagal :", error);
    });
  }
});
if(posts._rawValue.total == 0){
    isEmpty.value = true;
}

useHead({
    title: router.params.key
})

</script>