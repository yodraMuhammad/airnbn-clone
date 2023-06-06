<script setup>
import axios from 'axios'
const router = useRoute();
const { data: posts } = await useFetch('https://dummyjson.com/products/'+router.params.id)
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
</script>

<template>
    <div class="pt-48 pb-36">
        <Container>
            <Suspense>
              <template #default>
                <ListingClient :posts="posts"/>
                <!-- <ListingClientLoad/> -->
              </template>
              <template #fallback>
                  <!-- Loading.. -->
                <ListingClientLoad/>
              </template>
            </Suspense>
        </Container>
    </div>
</template>