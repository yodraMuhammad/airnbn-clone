<template>
    <div class="pt-48">
      <Container>
        <div>
            Thank You :*
        </div> 
      </Container>
    </div>
  </template>
  
  <script setup>
  import axios from 'axios'
  const { data: response } = await useFetch('https://dummyjson.com/products')
  const isEmpty = ref(false)
  onBeforeMount(() => {
    const cart = useCart();
    const id = useId()
    id.value = sessionStorage.getItem('auth');
    console.log(id.value);
    if(sessionStorage.getItem('auth')){
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