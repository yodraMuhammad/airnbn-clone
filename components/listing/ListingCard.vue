<script setup>
const router = useRouter()

const props = defineProps({
    id: Number
})

const { data: posts } = await useFetch('https://dummyjson.com/products/'+props.id)
const navigateToPage = () => {
    router.push('/ListingPage/' + props.id);
}

</script>
<template>
    <div class="col-span-1 cursor-pointer group">
        <div class=" flex flex-col w-full">
            <div class="aspect-square w-full relative overflow-hidden rounded-xl">
                <div class="absolute top-3 right-3 z-10">
                    <HeartButton />
                </div>
                <!-- Swiper -->
                <Swiper class="h-full w-full"
                    :modules="[SwiperAutoplay, SwiperEffectCreative, SwiperPagination, SwiperNavigation]"
                    :slides-per-view="1" :loop="false" :effect="'creative'" :navigation="true" :hashNavigation="{
                        watchState: true,
                    }" 
                    :pagination="{ clickable: true }" :creative-effect="{
                        prev: {
                            shadow: false,
                            translate: ['-100%', 0, -1],
                        },
                        next: {
                            translate: ['100%', 0, 0],
                        },
                    }">
                    <SwiperSlide class="h-full w-200px" style="min-height: 300px;" v-for="(image, index) in posts.images" :key="index">
                        <img alt="listing"
                            :src="image"
                            class="object-cover h-full w-full" @click="navigateToPage()" />
                    </SwiperSlide>
                </Swiper>
            </div>
            <div @click="navigateToPage">
            <div class="flex flex-row items-center justify-between mt-2">
                <div class="font-semibold text-lg truncate">{{ posts.title }}</div>
                <div class="flex items-center gap-1">
                    <Icon name="ic:baseline-star" style="font-size: 15;" />
                    <div>{{ posts.rating }}</div>
                </div>
            </div>
            <div class="font-light text-neutral-500">
                {{ posts.brand }} - {{ posts.category }}
                <div class="truncate">
                    {{posts.description}}
                </div> 
            </div>
            <div class="flex flex-row items-center gap-1 mt-1">
                <div class="font-semibold">${{ posts.price }}</div>
            </div>
            </div>
        </div>
    </div>
</template>

<style>
.swiper-button-next {
    display: none;
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
    display: none;
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