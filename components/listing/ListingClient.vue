<script setup>
const props = defineProps({
    posts: Object
})
const total=ref(1)

const decrement = () => {
    if(total.value>1){
        total.value-=1
    }
}

const increment = () => {
    total.value+=1
}

console.log(props.posts);
</script>

<template>
    <div class="max-w-screen-xl mx-auto">
        <nav class="flex mb-4" aria-label="Breadcrumb">
            <ol class="inline-flex items-center space-x-1 md:space-x-3">
                <li class="inline-flex items-center">
                    <NuxtLink to="/"
                        class="inline-flex items-center text-sm font-medium text-gray-700 hover:text-blue-600 dark:text-gray-400 dark:hover:text-white">
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
                        <NuxtLink to="/"
                            class="ml-1 text-sm font-medium text-gray-700 hover:text-blue-600 md:ml-2 dark:text-gray-400 dark:hover:text-white capitalize">
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
                <div class="w-2/6 h-[45vh] overflow-hidden rounded-xl relative flex gap-2">
                    <Swiper class="h-full w-full"
                        :modules="[SwiperAutoplay, SwiperEffectCreative, SwiperPagination, SwiperNavigation]"
                        :slides-per-view="1" :loop="false" :effect="'creative'" :navigation="true" :hashNavigation="{
                            watchState: true,
                        }" :pagination="{ clickable: true }" :creative-effect="{
    prev: {
        shadow: false,
        translate: ['-100%', 0, -1],
    },
    next: {
        translate: ['100%', 0, 0],
    },
}">
                        <SwiperSlide class="h-full w-full" style="min-height: 300px;" v-for="(image, index) in posts.images"
                            :key="index">
                            <img alt="listing" :src="image" class="object-cover h-full w-full" @click="navigateToPage()" />
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
                    <div class="p-4 rounded-lg border-[1px] border-black/[0.1] shadow-md flex-col gap-4 sticky top-[100px] right-0 md:flex hidden">
                            <div class="flex flex-col">
                                <div class="text-xl font-bold">
                                    Set amount and notes
                                </div>
                                <div class="flex items-center gap-2">
                                    <div class="flex items-center gap-2 text-[14px] font-[500]">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="black" viewBox="0 0 24 24"
                                            stroke-width="1.5" stroke="currentColor" class="w-4 h-4">
                                            <path stroke-linecap="round" stroke-linejoin="round"
                                                d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
                                        </svg>
                                        <p>{{ posts.rating }}</p>
                                    </div>
                                    <i class="fa-solid fa-circle text-[3px]"></i>
                                    <p class="text-[12px] underline">23 Ulasan</p>
                                </div>
                            </div>
                            <div class="flex items-center gap-2">
                                <div class="flex items-center justify-center border p-1 rounded-md">
                                    <button @click="decrement" class="text-rose-500 bg-white px-3 py-1 rounded text-xl hover:bg-neutral-300">-</button>
                                    <input type="number" class="mx-1 w-[50px] text-center appearance-none" :value="total">
                                    <button @click="increment" class="text-rose-500 bg-white px-3 py-1 rounded text-xl hover:bg-neutral-300">+</button>
                                </div>
                                <div>
                                    Total Stock: <span class="font-semibold">{{ posts.stock }}</span>
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
                                <button class="bg-[#E01461] w-full p-3 rounded-md text-white text-center text-[15px] font-bold">+ Cart</button>
                                <button class="bg-white border border-rose-500 w-full p-3 rounded-md text-rose-500 text-center text-[15px] font-bold">Buy Directly</button>
                            </div>
                </div>
            </div>
        </div>

        <!-- <div class="grid grid-cols-1 md:grid-cols-7 md:gap-10 mt-6">
                <ListingInfo user="user" category="category" description="" roomCount="" guestCount="" bathroomCOunt="" locationValue=""/>
            </div> -->
    </div>
</div>
</template>

<style>

input[type="number"]::-webkit-inner-spin-button,
input[type="number"]::-webkit-outer-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

.swiper-button-next {
    /* display: none; */
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
}

.swiper-button-prev {
    /* display: none; */
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
}

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
    opacity: 1;
}
</style>