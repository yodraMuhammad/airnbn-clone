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
            <div ref="scrollContainer" class="flex overflow-x-scroll whitespace-nowrap gap-10 w-full"
                @scroll="handleScroll">
                <CategoryBox v-for="item in categories" :key="item.label" :icon="item.icon" :label="item.label"
                    :description="item.description" />
                <div class="absolute inset-y-0 right-0 bg-gradient-to-r from-transparent to-white w-8 pointer-events-none"></div>
            </div>
            <client-only>
                <div v-show="showButton2" @click="scrollLeft"
                    class="absolute border-neutral-400 cursor-pointer border-[1px] w-7 h-7 p-0 bg-white rounded-full hover:drop-shadow-xl">
                    <div class="text-center">
                        <Icon name="ph:caret-left-bold" style="font-size: 14;" />
                    </div>
                </div>
            </client-only>
            <client-only>
                <div @click="scrollRight" v-show="showButton"
                    class="absolute border-neutral-400 cursor-pointer right-48 border-[1px] w-7 h-7 p-0 bg-white rounded-full transition-shadow hover:drop-shadow-xl">
                    <div class="text-center">
                        <Icon name="ph:caret-right-bold" style="font-size: 14;" />
                    </div>
                </div>
            </client-only>
            <div
                class="flex flex-row gap-2 items-center min-w-fit cursor-pointer ml-8 h-6 pl-3 pr-4 py-6 border border-gray-300 rounded-2xl">
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
    data() {
        return {
            showButton: true,
            showButton2: false
        };
    },
    methods: {
        scrollRight() {
            const container = this.$refs.scrollContainer;
            container.scrollBy({
                top: 0,
                left: 120,
                behavior: 'smooth'
            });
        },
        handleScroll() {
            const scrollContainer = this.$refs.scrollContainer;
            if (scrollContainer.scrollLeft < scrollContainer.scrollWidth - scrollContainer.clientWidth) {
                this.showButton = true;
            } else {
                this.showButton = false;
            }

            if (scrollContainer.scrollLeft > 0) {
                this.showButton2 = true;
            } else {
                this.showButton2 = false;
            }
        },
        scrollToRight() {
            const scrollContainer = this.$refs.scrollContainer;
            scrollContainer.scrollBy({
                left: scrollContainer.clientWidth,
                behavior: 'smooth'
            });
        },
        scrollToLeft() {
            const scrollContainer = this.$refs.scrollContainer;
            // Logika untuk melakukan scroll ke kiri
            scrollContainer.scrollBy({
                left: -scrollContainer.clientWidth,
                behavior: 'smooth'
            });
        }
    }
}
</script>

<style>
::-webkit-scrollbar {
    height: 0px;
}
</style>