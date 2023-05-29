<script setup>
const props = defineProps({
    id: Number
})
const { data: posts } = await useFetch('https://dummyjson.com/products/'+props.id)

console.log(posts);
console.log(props.id);

</script>
<template>
    <div class="col-span-1 cursor-pointer group">
        <div class=" flex flex-col w-full">
            <div class="aspect-square w-full relative overflow-hidden rounded-xl">
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
                            class="object-cover h-full w-full" />
                    </SwiperSlide>
                </Swiper>

                <div class="absolute top-3 right-3 z-10">
                    <HeartButton />
                </div>
            </div>
            <div class="flex flex-row items-center justify-between mt-2">
                <div class="font-semibold text-lg">{{ posts.title }}</div>
                <div class="flex items-center gap-1">
                    <Icon name="ic:baseline-star" style="font-size: 15;" />
                    <div>{{ posts.rating }}</div>
                </div>
            </div>
            <div class="font-light text-neutral-500">
                <div class="truncate">
                    {{posts.description}}
                </div> 
                {{ posts.brand }} - {{ posts.category }}
            </div>
            <div class="flex flex-row items-center gap-1 mt-1">
                <div class="font-semibold">USD {{ posts.price }}</div>
                <!-- <div class="font-light">night</div> -->
            </div>
        </div>
    </div>
</template>

<style>
.swiper-button-next {
    display: none;
    color: white;
}

.swiper-button-prev {
    display: none;
    color: white;
}

.swiper-button-disabled {
    display: none;
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