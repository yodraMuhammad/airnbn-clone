<script setup>
const props = defineProps({
    id: Number
})
const { pending, data: posts } = useLazyFetch('https://dummyjson.com/products/'+props.id)
const images = posts._rawValue.images 
console.log(posts._rawValue);

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
                    <SwiperSlide class="h-full w-200px" style="min-height: 300px;">
                        <img alt="listing"
                            src="https://a0.muscache.com/im/pictures/4f70b681-a792-4530-8c52-f2a8d262942d.jpg?im_w=720"
                            class="object-cover h-full w-full" />
                    </SwiperSlide>
                    <SwiperSlide class="h-full w-200px" style="min-height: 300px;">
                        <img alt="listing"
                            src="https://a0.muscache.com/im/pictures/miso/Hosting-811113927948467981/original/79a69b64-afef-4e84-8129-daa826408e4b.jpeg?im_w=1200"
                            class="object-cover h-full w-full" />
                    </SwiperSlide>
                    <SwiperSlide class="h-full w-200px" style="min-height: 300px;">
                        <img alt="listing"
                            src="https://a0.muscache.com/im/pictures/8a6d1edc-466b-4148-8c7a-5f5b396ec224.jpg?im_w=720"
                            class="object-cover h-full w-full" />
                    </SwiperSlide>
                    <SwiperSlide class="h-full w-200px" style="min-height: 300px;">
                        <img alt="listing"
                            src="https://a0.muscache.com/im/pictures/miso/Hosting-811113927948467981/original/b4c75269-f558-4b11-a527-e49841566523.jpeg?im_w=720"
                            class="object-cover h-full w-full" />
                    </SwiperSlide>
                    <SwiperSlide class="h-full w-200px" style="min-height: 300px;">
                        <img alt="listing"
                            src="https://a0.muscache.com/im/pictures/miso/Hosting-811113927948467981/original/8fbe90d3-3029-47db-8b02-690b158581c5.jpeg?im_w=720"
                            class="object-cover h-full w-full" />
                    </SwiperSlide>
                </Swiper>
                <!-- end Swiper -->
                <div class="absolute top-3 right-3 z-10">
                    <HeartButton />
                </div>
            </div>
            <div class="flex flex-row items-center justify-between mt-2">
                <div class="font-semibold text-lg">Sidemen,Indonesia</div>
                <div class="flex items-center gap-1">
                    <Icon name="ic:baseline-star" style="font-size: 15;" />
                    <div>4.92</div>
                </div>
            </div>
            <div class="font-light text-neutral-500">
                983 kilometers away <br />Oct 19 -24
            </div>
            <div class="flex flex-row items-center gap-1 mt-1">
                <div class="font-semibold">Rp7,783,019</div>
                <div class="font-light">night</div>
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