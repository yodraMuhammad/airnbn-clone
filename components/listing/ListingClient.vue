<script setup>
const props = defineProps({
    posts: Object
})

console.log(props.posts);
</script>

<template>
    <div class="max-w-screen-xl mx-auto">
        <div class="flex flex-col gap-1">
            <ListingHead title="" imageSrc="" locationValue="" id="id" curentUser="user"/>
            <div class="grid grid-cols-1 md:grid-cols-7 md:gap-10 mt-6">
                <ListingInfo user="user" category="category" description="" roomCount="" guestCount="" bathroomCOunt="" locationValue=""/>
            </div>
        </div>
    </div>
</template>
