<script setup>
const props = defineProps({
  title: String,
  locationValue: String,
  imageSrc: Array,
  id: String,
  curentUser: String,

})
</script>

<template>
    <div class="text-2xl font-semibold">{{ title }}</div>
    <div class="flex justify-between">
        <div class="flex gap-2">
            <div class="flex gap-1 items-center">
                <Icon name="material-symbols:star"/>
                <div>
                    4.85
                </div>
            </div> 
            <div class="flex gap-1 items-center">
                <div class="underline cursor-pointer">
                    122 reviews
                </div>
            </div> 
            <div class="flex gap-1 items-center">
                <Icon name="icon-park-outline:five-star-badge"/>
                <div>
                    Superhost
                </div>
            </div> 
            <div class="flex gap-1 items-center">
                <div class="underline cursor-pointer">
                    Sideaman, bali, Indonesia
                </div>
            </div> 
        </div>
        <div class="flex gap-2">
            <div class="underline cursor-pointer hover:bg-neutral-200 px-2 py-2 rounded-lg">
                Share
            </div>
            <div class="underline cursor-pointer hover:bg-neutral-200 px-2 py-2 rounded-lg">
                Save
            </div>
        </div> 
    </div>
    <div class="w-full h-[60vh] overflow-hidden rounded-xl relative flex gap-2">
        <div class="w-full h-full flex">
            <img src="https://a0.muscache.com/im/pictures/4f70b681-a792-4530-8c52-f2a8d262942d.jpg?im_w=720" alt="Image" class="object-cover cursor-pointer hover:brightness-75 transition">
        </div>
        <div class="w-full h-full flex flex-col gap-2">
            <div class="flex w-full h-full flex-row gap-2">
                <div class="w-full h-full flex">
                    <img src="https://a0.muscache.com/im/pictures/e15ee353-0861-44ed-868a-56091755e513.jpg?im_w=720" alt="Image" class="object-cover cursor-pointer hover:brightness-75 transition">
                </div>
                <div class="w-full h-full flex">
                    <img src="https://a0.muscache.com/im/pictures/miso/Hosting-43629767/original/ec85ccc0-281c-44fc-a061-bc1e87ea0081.jpeg?im_w=720" alt="Image" class="object-cover cursor-pointer hover:brightness-75 transition">
                </div>
            </div>
            <div class="flex flex-row w-full h-full gap-2">
                <div class="w-full h-full flex">
                    <img src="https://a0.muscache.com/im/pictures/45a3aa2b-ce00-4068-9ebe-9f83ca281fe4.jpg?im_w=720" alt="Image" class="object-cover cursor-pointer hover:brightness-75 transition">
                </div>
                <div class="w-full h-full flex">
                    <img src="https://a0.muscache.com/im/pictures/f474dfbe-557a-4d07-8d6e-76aba506b5a6.jpg?im_w=720" alt="Image" class="object-cover cursor-pointer hover:brightness-75 transition">
                </div>
            </div>
        </div>
    </div>
</template>