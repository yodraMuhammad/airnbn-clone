<script setup>
</script>
<template>
     <div class="col-span-1 cursor-pointer group">
        <div class=" flex flex-col w-full">
            <div class="aspect-square w-full relative overflow-hidden rounded-xl">
                <img alt="listing" src="https://a0.muscache.com/im/pictures/4f70b681-a792-4530-8c52-f2a8d262942d.jpg?im_w=720" class="object-cover h-full w-full group-hover:scale-110 transition"/>
                <div class="absolute top-3 right-3">
                    <HeartButton/>
                </div>
            </div>
            <div class="font-semibold text-lg">
                Sidemen,Indonesia
            </div>
            <div class="font-light text-neutral-500">
                983 kilometers away <br>Oct 19 -24
            </div>
            <div class="flex flex-row items-center gap-1">
                <div class="font-semibold">
                    Rp7,783,019
                </div>
                <div class="font-light">
                    night
                </div>
            </div>
        </div>
     </div>
</template>