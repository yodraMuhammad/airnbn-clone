<template>
    <div class="pt-64">
      <Container>
        <div class="flex w-full h-full justify-center">
            <div class="w-1/4">
                <img src="/images/success.png" alt="">
                <div class="text-center text-3xl font-bold">Success!!</div>
                <div class="text-center text-xl">Your order is being processed  Please wait.</div>
            </div>
        </div> 
      </Container>
    </div>
  </template>
  
<script setup>
import axios from 'axios'

onMounted(() => {
  // const cart = useCart();
  const id = useId()
  const displayPicture = useDP()
  const cart = useCart()
  cart.value = 0;
  if((sessionStorage.getItem('displayPicture'))){
    displayPicture.value = sessionStorage.getItem('displayPicture');
  }
  // if(sessionStorage.getItem('auth')){
  //   id.value = sessionStorage.getItem('auth');
  //   axios.get("https://6vbjxu.sse.codesandbox.io/carts?userId="+sessionStorage.getItem('auth'))
  //     .then((response) => cart.value = response.data.length)
  //     .catch(function (error) {
  //       console.log("Gagal :", error);
  //     });
  //   }
});

useHead({
  title: 'Airbnb'
})
</script>