<template>
  <div class="pt-48">
    <Container>
      <TaxesCard/>
      <div v-if="isEmpty">
          <EmptyState />
      </div>
      <div v-else class="mt-6 grid grid-cols-1 sm:grid-cols-2 md:gridcols-3 lg:grid-cols-4 xl:gridcols-5 2xl:grid-cols-6 gap-6 pb-10">
        <Listing :posts="data"/>
      </div>
      <div class="flex justify-center w-full pb-20">
        <div class="flex justify-center w-full md:w-1/4 py-3 px-2 bg-rose-500 text-white rounded-lg" 
        :class="isDisabled?'cursor-not-allowed':'cursor-pointer'"
        @click="add()"
        v-show="isShow"
        >Show more</div>
      </div>
    </Container>
  </div>
</template>

<script setup>
import axios from 'axios'
// const { data: response } = await useFetch('https://dummyjson.com/products')
const limit = ref(12)
const skip = ref(24)
const data = ref()
const isDisabled = ref(false)
const isShow =ref(true)
const { data: response } = await useFetch('https://dummyjson.com/products?limit=24&skip=0')
data.value = response._rawValue;
const isEmpty = ref(false)
const add = async () => {
  isDisabled.value =true
  const { data: response } = await useFetch('https://dummyjson.com/products?limit='+12+'&skip='+skip.value)
  data.value.products = data.value.products.concat(response._rawValue.products)
  skip.value += 12;
  isDisabled.value = false
  if(data.value.products.length == 100){
    isShow.value = false
  }
}
onBeforeMount(() => {
  const cart = useCart();
  const id = useId()
  const displayPicture = useDP()
  if((sessionStorage.getItem('displayPicture'))){
    displayPicture.value = sessionStorage.getItem('displayPicture');
  }
  if(sessionStorage.getItem('auth')){
    id.value = sessionStorage.getItem('auth');
    axios.get("https://6vbjxu.sse.codesandbox.io/carts?userId="+sessionStorage.getItem('auth'))
      .then((response) => cart.value = response.data.length)
      .catch(function (error) {
        console.log("Gagal :", error);
      });
    }
});

useHead({
  title: 'Airbnb'
})
</script>