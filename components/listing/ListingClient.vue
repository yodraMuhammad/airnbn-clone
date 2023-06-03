<script setup>
import { useToast, useModal } from 'tailvue';
import axios from 'axios';

const router = useRouter()
const props = defineProps({
    posts: Object
})
const show = ref(false)
const cart = useCart();
const auth = useAuth();
const id = useId();
const toast = useToast();
const $modal = useModal()
const total = ref(1);
const note = ref(false);
const isDisabled = ref(false);
const isDisabled2 = ref(false);
const isDisabled3 = ref(false);
const message = ref('')
const {data:recentCart} = await useFetch('https://6vbjxu.sse.codesandbox.io/carts?product.id='+props.posts.id+'&userId='+id.value)
console.log('data',recentCart);
if(recentCart._rawValue){
    // total.value = recentCart._rawValue[0].orderQuantity;
}
// console.log('data',recentCart._rawValue[0].orderQuantity);
// console.log('data',recentCart._rawValue[0].id);
const handleChange = (numb) =>{
    if(numb < 1){
        total.value = 1
    }else if(numb > props.posts.stock){
        total.value = props.posts.stock
    }
}
console.log(auth);
const decrement = () => {
    if(total.value>1){
        total.value-=1
    }
}

const increment = () => {
    total.value+=1
}

const addNote = () => {
    note.value = !note.value
}
const username = ref('')
const password = ref('')
const order = ref({"product": props.posts}) 
const login = async () => {
    isDisabled3.value = true
    console.log('username', username.value);
    id.value = sessionStorage.getItem('auth');
    axios.get('https://6vbjxu.sse.codesandbox.io/profile?username='+username.value+'&pass='+password.value)
        .then((response) => {
            console.log('login',response.data[0]);
            if(response.data[0]){
                sessionStorage.setItem('auth', JSON.stringify(response.data[0].id))
            id.value = response.data[0].id
            console.log(id.value)
            axios.get("https://6vbjxu.sse.codesandbox.io/carts?userId="+sessionStorage.getItem('auth'))
                .then((response) => cart.value = response.data.length)
                .catch((error)=>console.log("Gagal :", error)
            );

            isDisabled.value = false;
            show.value = false;
            }else{
                isDisabled3.value = false;
                const toast = useToast();
                message.value = "Wrong username or password !!";
                password.value = ''
            }
        })
        .catch(function (error) {
            console.log("Gagal :", error);
        });
}
const addCart = async () => {
    isDisabled.value = true;
    if(sessionStorage.getItem('auth')){
        if(recentCart._rawValue[0]){
            recentCart._rawValue[0].orderQuantity += total.value
            const responses = await $fetch( 'https://6vbjxu.sse.codesandbox.io/carts/'+recentCart._rawValue[0].id, {method: 'PUT',body: recentCart._rawValue[0]});
            toast.show({
                type: 'success',
                message: 'Successfully added to cart',
                position: 'top-left',
                timeout: 4,
            })

            $modal.show({
                type: 'success',
                title: 'Successfully Added',
                body: 'Item successfully added to cart',
                primary: {
                        label: 'Continue Shopping',
                        theme: 'red',
                        action: () => router.push('/'),
                    },
                secondary: {
                        label: 'View Cart',
                        theme: 'white',
                        action: () => router.push('/cart'),
                    },
            })
            isDisabled.value = false;
        }else{
            cart.value+=1;
            order.value.orderQuantity = total.value;
            order.value.userId = sessionStorage.getItem('auth');
            const responses = await $fetch( 'https://6vbjxu.sse.codesandbox.io/carts', {method: 'POST',body: order.value});
            toast.show({
                type: 'success',
                message: 'Successfully added to cart',
                position: 'top-left',
                timeout: 4,
            })

            const $modal = useModal()
            $modal.show({
                type: 'success',
                title: 'Successfully Added',
                body: 'Item successfully added to cart',
                primary: {
                        label: 'Continue Shopping',
                        theme: 'red',
                        action: () => router.push('/'),
                    },
                secondary: {
                        label: 'View Cart',
                        theme: 'white',
                        action: () => router.push('/cart'),
                    },
            })
            isDisabled.value = false;
        }
    }else{
        isDisabled.value = false;
        isShow();
    }
}

const buy = async () => {
    // if(Object.keys(auth.value).length){
    //     isDisabled2.value = true;
    //     cart.value+=1;
    //     order.value.orderQuantity = total.value;
    //     const responses = await $fetch('https://6vbjxu.sse.codesandbox.io/carts', {method: 'POST',body: order.value});
    //     router.push('/cart')
    // }else{
    //     isShow();
    // }
    isDisabled2.value = true;
    if(sessionStorage.getItem('auth')){
        if(recentCart._rawValue[0]){
            recentCart._rawValue[0].orderQuantity += total.value
            const responses = await $fetch( 'https://6vbjxu.sse.codesandbox.io/carts/'+recentCart._rawValue[0].id, {method: 'PUT',body: recentCart._rawValue[0]});
            router.push('/cart')
            isDisabled.value = false;
        }else{
            cart.value+=1;
            order.value.orderQuantity = total.value;
            order.value.userId = sessionStorage.getItem('auth');
            const responses = await $fetch( 'https://6vbjxu.sse.codesandbox.io/carts', {method: 'POST',body: order.value});
            router.push('/cart')
            isDisabled.value = false;
        }
    }else{
        isDisabled2.value = false;
        isShow();
    }
}

const isShow = () => {
    isDisabled.value = false;
    isDisabled2.value = false;
    message.value = '';
    username.value = '';
    show.value = !show.value;
}
</script>

<template>
    <div class="max-w-screen-xl mx-auto">
        <!-- login -->
        <div class="modal" v-if="show">
            <div class="bg-white rounded-lg shadow relative dark:bg-gray-700 w-[450px]">
                <div class="flex justify-end p-2">
                    <button @click="isShow()" type="button" class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-800 dark:hover:text-white" data-modal-toggle="authentication-modal">
                        <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>  
                    </button>
                </div>
                <form class="space-y-6 px-6 lg:px-8 pb-4 sm:pb-6 xl:pb-8" action="#">
                    <h3 class="text-xl font-medium text-gray-900 dark:text-white">Sign in to our platform {{ visible }}</h3>
                    <div v-show="message" class="text-sm text-red-500 text-center py-3 rounded-lg bg-rose-100 border-[1px]">{{ message }}</div>
                    <div>
                        <label for="email" class="text-sm font-medium text-gray-900 block mb-2 dark:text-gray-300">Username</label>
                        <input type="text" name="email" id="email" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" placeholder="Username" required="" v-model="username">
                    </div>
                    <div>
                        <label for="password" class="text-sm font-medium text-gray-900 block mb-2 dark:text-gray-300">password</label>
                        <input type="password" name="password" id="password" placeholder="••••••••" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" required="" v-model="password">
                    </div>
                    <div class="flex justify-between">
                        <div class="flex items-start">
                            <div class="flex items-center h-5">
                                <input id="remember" aria-describedby="remember" type="checkbox" class="bg-gray-50 border border-gray-300 focus:ring-3 focus:ring-blue-300 h-4 w-4 rounded dark:bg-gray-600 dark:border-gray-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800">
                            </div>
                            <div class="text-sm ml-3">
                            <label for="remember" class="font-medium text-gray-900 dark:text-gray-300">Remember me</label>
                            </div>
                        </div>
                        <a href="#" class="text-sm text-rose-700 hover:underline dark:text-blue-500">Lost Password?</a>
                    </div>
                    <div :disabled="isDisabled3" class="w-full text-white bg-rose-500 hover:bg-rose-600 focus:ring-4 focus:ring-rose-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-rose-600 dark:hover:bg-rose-700 dark:focus:ring-rose-800" @click="login()"
                    :class="isDisabled || isDisabled2 ? 'cursor-not-allowed': 'cursor-pointer'"
                    >
                        <Icon name="eos-icons:bubble-loading" v-if="isDisabled3"/>
                        {{isDisabled3 ? ' Loading..' : 'Login'}}
                    </div>
                    <div class="text-sm font-medium text-gray-500 dark:text-gray-300">
                        Not registered? <a href="#" class="text-blue-700 hover:underline dark:text-rose-500">Create account</a>
                    </div>
                </form>
            </div> 
        </div>
    <!-- end -->
        <nav class="flex mb-4" aria-label="Breadcrumb">
            <ol class="inline-flex items-center space-x-1 md:space-x-3">
                <li class="inline-flex items-center">
                    <NuxtLink to="/"
                        class="inline-flex items-center text-sm font-medium text-gray-700 hover:text-rose-500 dark:text-gray-400 dark:hover:text-white">
                        <svg aria-hidden="true" class="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z">
                            </path>
                        </svg>
                        Home
                    </NuxtLink>
                </li>
                <li>
                    <div class="flex items-center">
                        <svg aria-hidden="true" class="w-6 h-6 text-gray-400" fill="currentColor" viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd"
                                d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                                clip-rule="evenodd"></path>
                        </svg>
                        <NuxtLink :to="'/category/'+posts.category"
                            class="ml-1 text-sm font-medium text-gray-700 hover:text-rose-500 md:ml-2 dark:text-gray-400 dark:hover:text-white capitalize">
                            {{ posts.category }}</NuxtLink>
                    </div>
                </li>
                <li aria-current="page">
                    <div class="flex items-center">
                        <svg aria-hidden="true" class="w-6 h-6 text-gray-400" fill="currentColor" viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd"
                                d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                                clip-rule="evenodd"></path>
                        </svg>
                        <span class="ml-1 text-sm font-medium text-gray-500 md:ml-2 dark:text-gray-400 capitalize">{{
                            posts.title }}</span>
                    </div>
                </li>
            </ol>
        </nav>
        <div class="flex flex-col gap-1">
            <!-- <ListingHead :title="posts.title" :imageSrc="posts.images" locationValue="" id="id" curentUser="user"/> -->
            <div class="flex gap-10">
                <div class="w-1/4 h-[35vh] overflow-hidden rounded-xl relative flex gap-2 z-0">
                    <Swiper class="h-full w-full"
                        :modules="[SwiperAutoplay, SwiperEffectCreative, SwiperPagination, SwiperNavigation]"
                        watch-slides-progress
                        :slides-per-view="1" 
                        :loop="false" :effect="'creative'" 
                        :navigation="true" 
                        :hashNavigation="{
                            watchState: true,
                        }"
                        :autoplay="{
                            delay: 8000,
                            disableOnInteraction: true,
                            }" 
                        :pagination="{ clickable: true }" 
                        :creative-effect="{
                            prev: {
                                shadow: false,
                                translate: ['-100%', 0, -1],
                            },
                            next: {
                                translate: ['100%', 0, 0],
                            },
                        }">
                        <SwiperSlide class="self-center" style="min-height: 300px;" v-for="(image, index) in posts.images"
                            :key="index">
                            <img alt="listing" :src="image" class="object-cover self-center h-full max-w-full" @click="navigateToPage()" />
                        </SwiperSlide>
                    </Swiper>
                </div>
                <div class="w-2/6">
                    <div class="text-2xl font-bold">
                        {{ posts.title }}
                    </div>
                    <div class="flex items-center gap-2">
                        <div class="flex">
                            <div>Stock <span class="text-neutral-400"> {{ posts.stock }} pcs</span></div>
                        </div>
                        <div>
                            •
                        </div>
                        <div class="flex items-center">
                            <Icon name="ic:baseline-star" style="font-size: 15; color: yellow;" />
                            <div>{{ posts.rating }}</div>
                        </div>
                        <div>
                            •
                        </div>
                        <div class="capitalize">
                            {{ posts.category }}
                        </div>
                    </div>
                    <div class="text-4xl font-bold my-6">
                        ${{ posts.price.toLocaleString() }}
                    </div>
                    <div class="mt-3">
                        <hr>
                        <div class="text-lg font-semibold text-rose-500 px-5 py-3 border-b-2 w-1/5 border-rose-500">
                            Detail
                        </div>
                        <hr class="mb-4">
                        {{ posts.description }}
                    </div>
                </div>
                <div class="w-1/4">
                    <div class="p-4 rounded-lg border-[1px] border-black/[0.1] shadow-md flex-col gap-4 sticky top-0 right-0 md:flex hidden">
                        <div class="flex flex-col">
                            <div class="text-xl font-bold">
                                Set amount and notes
                            </div>
                        </div>
                        <div class="flex items-center gap-2">
                            <div class="flex items-center justify-center border p-1 rounded-md">
                                <div @click="decrement" class="text-rose-500 bg-white px-3 py-1 rounded text-xl hover:bg-neutral-300">-</div>
                                <input type="number" class="mx-1 w-[50px] text-center appearance-none" v-model="total" @change="handleChange(total)">
                                <div @click="increment" class="text-rose-500 bg-white px-3 py-1 rounded text-xl hover:bg-neutral-300">+</div>
                            </div>
                            <div>
                                Total Stock: <span class="font-semibold">{{ posts.stock }}</span>
                            </div>
                        </div>
                        <div>
                            <div @click="addNote" class="flex items-center text-rose-500 font-semibold cursor-pointer">
                                <Icon name="mdi:pencil-outline" />
                                Add Note
                            </div>
                            <div v-show="note">
                                <input class="shadow appearance-none border border-rose-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" type="text" placeholder="Example: White color, Size M">
                            </div>
                        </div>
                        <div class="flex justify-between items-center">
                            <div class="text-neutral-400">
                                Subtotal
                            </div>
                            <div class="font-bold text-xl">
                                ${{ (posts.price*total).toLocaleString() }}
                            </div>
                        </div>
                        <div class="flex flex-col gap-4">
                            <button :disabled="isDisabled || isDisabled2" @click="addCart" 
                            :class="isDisabled || isDisabled2 ? 'cursor-not-allowed': 'cursor-pointer'"
                            class="bg-rose-500 w-full p-3 rounded-md text-white text-center text-[15px] font-bold">
                                <Icon name="eos-icons:bubble-loading" v-if="isDisabled"/>
                                {{isDisabled ? ' Loading..' : '+ Cart'}}
                            </button>
                            <button :disabled="isDisabled || isDisabled2" @click="buy" 
                            :class="isDisabled || isDisabled2 ? 'cursor-not-allowed': 'cursor-pointer'"
                            class="bg-white border border-rose-500 w-full p-3 rounded-md text-rose-500 text-center text-[15px] font-bold">
                                <Icon name="eos-icons:bubble-loading" v-if="isDisabled2"/>
                                {{isDisabled2 ? ' Loading..' : 'Buy Now'}}
                            </button>
                        </div>
                </div>
            </div>
        </div>
    </div>
</div>
</template>

<script>
import Login from '@/components/auth/Login.vue';

export default {
    components: {
        Login,
    },
    data() {
    return {
      showModal: false
    };
  },
  methods: {
    openModal() {
        console.log('open', this.showModal);
        this.showModal = true;
        console.log('open', this.showModal);
    },
    closeModal() {
      this.showModal = false;
    }
  }
}
</script>

<style>
input[type="number"]::-webkit-inner-spin-button,
input[type="number"]::-webkit-outer-spin-button {
  -webkit-appearance: none;
  margin: 0;
}
.modal {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0, 0, 0, 0.5);
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 100;
}

 /* .swiper-button-next {
    display: block;
    color: white;
    background-color: rgba(255, 255, 255, 0.8);
    height: 34px;
    width: 34px;
    border-radius: 25px;
    background-image: url(images/chevron.png);
    background-repeat: no-repeat;
    background-size: 50% 50%;
    background-position: center;
    top: 53%;
    box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
    transition: transform 0.3s ease;
} */

/* .swiper-button-prev {
    @apply block;
    display: block;
    color: white;
    background-color: rgba(255, 255, 255, 0.8);
    height: 34px;
    width: 34px;
    border-radius: 25px;
    background-image: url(images/left-chevron.png);
    background-repeat: no-repeat;
    background-size: 50% 50%;
    background-position: center;
    top: 53%;
    box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
    transition: transform 0.3s ease;
} */
/*
.swiper-button-next:hover {
    transform: scale(1.05);
    background-color: rgba(255, 255, 255, 1);
}

.swiper-button-prev:hover {
    transform: scale(1.05);
    background-color: rgba(255, 255, 255, 1);
}

.swiper-button-next::after {
    display: none;
} 
.swiper-button-prev::after {
    display: none;
} 

.swiper-button-disabled {
    display: none;
    transform: scale(0);
}

.group:hover .swiper-button-prev {
    display: block;
}

.group:hover .swiper-button-next {
    display: block;
}

.swiper-pagination-bullet {
    width: 6px;
    height: 6px;
    background-color: white;
    opacity: 0.6;
}

.swiper-pagination-bullet-active {
    @apply opacity-100;
} */
</style>