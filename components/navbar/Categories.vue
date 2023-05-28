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
        <div class="pt-4 flex flex-row items-center w-full">
            <div ref="scrollableContainer" class="flex overflow-x-scroll whitespace-nowrap gap-10 w-full" >
                <CategoryBox v-for="item in categories" :key="item.label" :icon="item.icon" :label="item.label" :description="item.description"  />
            </div>
                <div @click="scrollRight" class="mr-4 border-neutral-400 cursor-pointer toggle-dot my-[2px] mx-[1px] border-[1px] w-7 h-7 bg-white rounded-full inset-y-0 right-0">
                    <div class="text-center">
                        <Icon name="ph:caret-right-bold" style="font-size: 14;" />
                    </div>
                </div>
                <div class="flex flex-row gap-2 items-center min-w-fit cursor-pointer h-6 pl-3 pr-4 py-6 border border-gray-300 rounded-2xl">
                    <Icon name="mi:filter" style="font-size: 18;" />
                    <div class="text-neutral-950 text-sm font-medium">
                        Filters
                    </div>
                </div>
        </div>
    </Container>
</template>

<script>
export default {
  methods: {
    scrollRight() {
      const container = this.$refs.scrollableContainer;
      container.scrollBy({
        top: 0,
        left: 100,
        behavior: 'smooth'
      });
    }
  }
}
</script>

<style>
/* Mengatur tampilan scrollbar horizontal */
::-webkit-scrollbar {
  height: 0px; /* Tinggi scrollbar */
}

/* Track (jalur) scrollbar horizontal */
::-webkit-scrollbar-track {
  background: #f1f1f1; /* Warna latar belakang track */
}

/* Thumb (pegangan) scrollbar horizontal */
::-webkit-scrollbar-thumb {
  background: #888; /* Warna pegangan */
}

/* Ketika thumb scrollbar dihover */
::-webkit-scrollbar-thumb:hover {
  background: #555; /* Warna pegangan saat dihover */
}
</style>