<script setup>
import axios from "axios";
import { useToast } from 'tailvue'
definePageMeta({
  layout: "custom",
});


const data = ref();

onMounted(async() => {
  const cart = useCart();
  const id = useId()
  const displayPicture = useDP()
  
  const { data: response } = await useFetch('https://6vbjxu.sse.codesandbox.io/carts?userId='+id.value)
  data.value = response._rawValue;

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

const router = useRouter()
const id = useId()
const cart = useCart()
const isDisabled = ref(false)
const { data: response } = await useFetch('https://6vbjxu.sse.codesandbox.io/carts?userId='+id.value)
data.value = response._rawValue;
const totalItemCost = ref();

if(data.value){
    totalItemCost.value = data.value.reduce((accumulator, currentValue) => {
    return accumulator + currentValue.product.price * currentValue.orderQuantity;
    }, 0);
}

const addItem = (index) => {
    if(data.value[index].product.stock>data.value[index].orderQuantity){
        data.value[index].orderQuantity+=1
    }
    totalItemCost.value = data.value.reduce((accumulator, currentValue) => {
        return accumulator + currentValue.product.price * currentValue.orderQuantity;
        }, 0);
}

const reduceItem = (index) => {
    if(data.value[index].orderQuantity>1){
        data.value[index].orderQuantity-=1
    }
    totalItemCost.value = data.value.reduce((accumulator, currentValue) => {
        return accumulator + currentValue.product.price * currentValue.orderQuantity;
        }, 0);
}
const deleteCart = async (id) =>{
    isDisabled.value = true
    cart.value -= 1
    axios.delete("https://6vbjxu.sse.codesandbox.io/carts/" + id)
        .then(async () => {
            console.log('deleted');
            const toast = useToast();
            toast.show({
                type: 'success',
                message: 'Successfully deleted item',
                position: 'top-left',
                timeout: 4,
            })
            const { data: response } = await useFetch('https://6vbjxu.sse.codesandbox.io/carts')
            data.value = response._rawValue;
            cartNumb.value = response._rawValue.length;
            isDisabled.value = false
        })
        .catch(function (error) {
          console.log("Gagal :", error);
          isDisabled.value = false
        });
}
const checkStock = (index) =>{
    if(data.value[index].orderQuantity<1){
        data.value[index].orderQuantity = 1
    }
    if(data.value[index].orderQuantity>data.value[index].product.stock){
        data.value[index].orderQuantity = data.value[index].product.stock
    }
    totalItemCost.value = data.value.reduce((accumulator, currentValue) => {
        return accumulator + currentValue.product.price * currentValue.orderQuantity;
        }, 0);
    console.log(totalItemCost.value);
}

const success = () =>{
    cart.value = 0;
    console.log(data.value);
    // data.value.map(function(item){
    //     console.log(item.id)
    //     return  axios.delete("https://6vbjxu.sse.codesandbox.io/carts/" + item.id)
    //         .then((res)=>console.log(res))
    //         .catch((error) => console.log("Gagal :", error));
    // })
    data.value.forEach((item) => {
        console.log(item.id)
        axios.delete("https://6vbjxu.sse.codesandbox.io/carts/" + item.id)
        .then((res)=>console.log(res))
        .catch((error) => console.log("Gagal :", error));
    });
    router.push('/success')
}
</script>

<template>
    <NuxtLayout name="custom">
    <div class="pt-20 pb-12">
        <Container>
        <Suspense>
            <template #default>
                <div class="container mx-auto mt-10">
                    <div class="flex flex-col md:flex-row shadow-md my-10">
                    <div class="w-full md:w-3/4 bg-white px-10 py-10">
                        <div class="flex justify-between border-b pb-8">
                        <h1 class="font-semibold text-2xl">Shopping Cart</h1>
                        <h2 class="font-semibold text-2xl">{{ data ? data.length : 0}} Items</h2>
                        </div>
                        <div class="flex mt-10 mb-5">
                        <h3 class="font-semibold text-gray-600 text-xs uppercase w-2/5">Product Details</h3>
                        <h3 class="font-semibold text-center text-gray-600 text-xs uppercase w-1/5 ">Quantity</h3>
                        <h3 class="font-semibold text-center text-gray-600 text-xs uppercase w-1/5 ">Price</h3>
                        <h3 class="font-semibold text-center text-gray-600 text-xs uppercase w-1/5 ">Total</h3>
                        </div>
                        <div class="flex items-center hover:bg-gray-100 -mx-8 px-6 py-5" v-for="(cart, index) in data" :key="index">
                            <div class="flex w-2/5"> <!-- product -->
                                <div class="w-20 h-20 overflow-hidden">
                                    <NuxtLink :to="'/listingpage/'+cart.product.id">
                                        <img class="object-cover w-full h-full" :src="cart.product.thumbnail" alt="">
                                    </NuxtLink>
                                </div>
                                <div class="flex flex-col justify-between ml-4 flex-grow">
                                <span class="font-bold text-sm">{{ cart.product.title }}</span>
                                <span class="text-red-500 text-xs">{{ cart.product.brand }}</span>
                                <div @click="deleteCart(cart.id)" 
                                class="font-semibold hover:text-red-500 text-gray-500 text-xs"
                                :class="isDisabled ? 'cursor-wait': 'cursor-pointer'"
                                >Remove</div>
                                </div>
                            </div>
                            <div class="flex justify-center w-1/5">
                                <svg @click="reduceItem(index)" class="cursor-pointer fill-current text-gray-600 w-3" viewBox="0 0 448 512"><path d="M416 208H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h384c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z"/>
                                </svg>

                                <input class="mx-2 border text-center w-8" type="text" v-model="cart.orderQuantity" @change="checkStock(index)">

                                <svg @click="addItem(index)" class="cursor-pointer fill-current text-gray-600 w-3" viewBox="0 0 448 512">
                                <path d="M416 208H272V64c0-17.67-14.33-32-32-32h-32c-17.67 0-32 14.33-32 32v144H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h144v144c0 17.67 14.33 32 32 32h32c17.67 0 32-14.33 32-32V304h144c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z"/>
                                </svg>
                            </div>
                            <span class="text-center w-1/5 font-semibold text-sm">${{ cart.product.price.toLocaleString() }}</span>
                            <span class="text-center w-1/5 font-semibold text-sm">${{ (cart.product.price*cart.orderQuantity).toLocaleString() }}</span>
                        </div>
                        <NuxtLink to="/" class="flex font-semibold text-rose-500 text-sm mt-10">
                            <svg class="fill-current mr-2 text-rose-500 w-4" viewBox="0 0 448 512">
                            <path d="M134.059 296H436c6.627 0 12-5.373 12-12v-56c0-6.627-5.373-12-12-12H134.059v-46.059c0-21.382-25.851-32.09-40.971-16.971L7.029 239.029c-9.373 9.373-9.373 24.569 0 33.941l86.059 86.059c15.119 15.119 40.971 4.411 40.971-16.971V296z"/>
                            </svg>
                            Let's continue shopping
                        </NuxtLink>
                    </div>

                    <div id="summary" class="w-full md:w-1/4 px-8 py-10 bg-neutral-100">
                        <h1 class="font-semibold text-2xl border-b pb-8">Order Summary</h1>
                        <div class="flex justify-between mt-10 mb-5">
                        <span class="font-semibold text-sm uppercase">Items {{ data ? data.length : 0}}</span>
                        <span class="font-semibold text-sm">${{ totalItemCost ? totalItemCost.toLocaleString() : 0 }}</span>
                        </div>
                        <div>
                        <label class="font-medium inline-block mb-3 text-sm uppercase">Shipping</label>
                        <select class="block p-2 text-gray-600 w-full text-sm">
                            <option>Standard shipping - $10.00</option>
                        </select>
                        </div>
                        <div class="py-10">
                        <label for="promo" class="font-semibold inline-block mb-3 text-sm uppercase">Promo Code</label>
                        <input type="text" id="promo" placeholder="Enter your code" class="p-2 text-sm w-full">
                        </div>
                        <button class="bg-neutral-400 hover:bg-rose-600 rounded-md px-5 py-2 text-sm text-white uppercase">Apply</button>
                        <div class="border-t mt-8">
                        <div class="flex font-semibold justify-between py-6 text-sm uppercase">
                            <span>Total cost</span>
                            <span>${{ (totalItemCost+10).toLocaleString() }}</span>
                        </div>
                        <button @click="success()"  
                        :disabled="!cart"
                        class="text-center bg-rose-500 rounded-md font-semibold hover:bg-rose-600 py-3 text-sm text-white uppercase w-full"
                        :class="cart ? 'cursor-pointer': 'cursor-not-allowed'"
                        >Checkout</button>
                        </div>
                    </div>
                    </div>
                </div>
            </template>
            <template #fallback>
                Loading...
            </template>
        </Suspense>
        </Container>
    </div> 
</NuxtLayout>   
</template>

<style>
.container{
    box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
}
</style>