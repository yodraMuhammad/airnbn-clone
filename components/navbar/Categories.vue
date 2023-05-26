<script setup>
const categories = [
    {
        label: 'Rooms',
        icon: 'ic:sharp-bed',
        description: 'This property is close to the beach'
    },
    {
        label: 'Beach',
        icon: 'fluent:beach-24-regular',
        description: 'This property is close to the beach'
    },
    {
        label: 'Camping',
        icon: 'streamline:travel-places-camping-tent-outdoor-recreation-camping-tent-teepee-tipi',
        description: 'This property has camping'
    },
    {
        label: 'Amazing pools',
        icon: 'fluent:swimming-pool-20-regular',
        description: 'This property has a pool!'
    },
    {
        label: 'OMG!',
        icon: 'solar:ufo-outline',
        description: 'This property has a pool!'
    },
    {
        label: 'Bed and breakfast!',
        icon: 'ph:coffee',
        description: 'This property has a pool!'
    },
    {
        label: 'Trending',
        icon: 'mingcute:fire-line',
        description: 'This property has camping'
    },
    {
        label: 'Island',
        icon: 'streamline:travel-places-beach-island-waves-outdoor-recreation-tree-beach-palm-wave-water',
        description: 'This property has camping'
    },
    {
        label: 'Vineyard',
        icon: 'mdi:fruit-grapes-outline',
        description: 'This property has camping'
    },
    {
        label: 'Artics',
        icon: 'bi:snow',
        description: 'This property has camping'
    },
    {
        label: 'Castles',
        icon: 'ph:castle-turret-light',
        description: 'This property has camping'
    },
    {
        label: 'Top of the world',
        icon: 'material-symbols:mountain-flag-outline',
        description: 'This property has camping'
    },
    {
        label: 'Iconic cities',
        icon: 'icon-park-outline:tower-of-pisa',
        description: 'This property has camping'
    },
    {
        label: 'Ski-in/out',
        icon: 'mdi:ski',
        description: 'This property has camping'
    },
    {
        label: 'Boats',
        icon: 'clarity:boat-line',
        description: 'This property has camping'
    },
    {
        label: "Desert",
        icon: 'ph:cactus',
        description: 'This property has camping'
    },
    {
        label: "Container",
        icon: 'clarity:container-line',
        description: 'This property has camping'
    },
    {
        label: "Golfing",
        icon: 'ic:baseline-sports-golf',
        description: 'This property has camping'
    },
    {
        label: "Chef's Kitchen",
        icon: 'tabler:chef-hat',
        description: 'This property has camping'
    },
    {
        label: "Campers",
        icon: 'tabler:camper',
        description: 'This property has camping'
    },
]
</script>

<template>
    <Container>
        <div class="pt-4 flex flex-row items-center justify-between overflow-x-auto">
            <CategoryBox v-for="item in categories" :key="item.label" :icon="item.icon" :label="item.label" :description="item.description"  />
        </div>
    </Container>
</template>