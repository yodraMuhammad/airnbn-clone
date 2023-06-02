<script setup>
const categories = [
    {
        label: 'All',
        icon: 'la:border-all',
        slug: 'all'
    },
    {
        label: 'Smartphones',
        icon: 'bi:phone',
        slug: 'smartphones'
    },
    {
        label: 'Laptops',
        icon: 'ph:laptop',
        slug: 'laptops'
    },
    {
        label: 'Fragrances',
        icon: 'solar:perfume-outline',
        slug: 'fragrances'
    },
    {
        label: 'Skincare',
        icon: 'ph:mask-happy',
        slug: 'skincare'
    },
    {
        label: 'Groceries',
        icon: 'ph:coffee',
        slug: 'groceries'
    },
    {
        label: 'Home Decoration',
        icon: 'fluent-mdl2:picture-center',
        slug: 'home-decoration'
    },
    {
        label: 'Furniture',
        icon: 'streamline:shopping-catergories-sofa-decoration-furniture-interior-design-couch-sofa-decorate',
        slug: 'furniture'
    },
    {
        label: 'Tops',
        icon: 'ph:t-shirt',
        slug: 'tops'
    },
    {
        label: 'Womens dresses',
        icon: 'ph:dress',
        slug: 'womens-dresses'
    },
    {
        label: 'Womens shoes',
        icon: 'mingcute:shoe-2-line',
        slug: 'womens-shoes'
    },
    {
        label: 'Mens shirts',
        icon: 'ph:shirt-folded',
        slug: 'mens-shirts'
    },
    {
        label: 'Mens Shoes',
        icon: 'mingcute:shoe-line',
        slug: 'mens-shoes'
    },
    {
        label: 'Mens watches',
        icon: 'solar:watch-round-linear',
        slug: 'mens-watches'
    },
    {
        label: 'Womens watches',
        icon: 'solar:watch-square-linear',
        slug: 'womens-watches'
    },
    {
        label: "Womens bags",
        icon: 'ph:bag',
        slug: 'womens-bags'
    },
    {
        label: "Womens jewellery",
        icon: 'maki:jewelry-store',
        slug: 'womens-jewellery'
    },
    {
        label: "Sunglasses",
        icon: 'ph:sunglasses',
        slug: 'sunglasses'
    },
    {
        label: "Automotive",
        icon: 'ph:car',
        slug: 'automotive'
    },
    {
        label: "Motorcycle",
        icon: 'ph:motorcycle',
        slug: 'motorcycle'
    },
    {
        label: "Lighting",
        icon: 'ic:outline-light',
        slug: 'lighting'
    },
]
</script>

<template>
    <Container>
        <div class="pt-4 flex flex-row items-center w-full">
            <div ref="scrollContainer" class="flex overflow-x-scroll whitespace-nowrap gap-10 w-full"
                @scroll="handleScroll">
                <CategoryBox v-for="item in categories" :key="item.label" :icon="item.icon" :label="item.label"
                    :slug="item.slug" />
                <div class="absolute inset-y-0 right-0 bg-gradient-to-r from-transparent to-white w-8 pointer-events-none"></div>
            </div>
            <client-only>
                <div v-show="showButton2" @click="scrollLeft"
                    class="hidden md:block absolute border-neutral-400 cursor-pointer border-[1px] w-7 h-7 p-0 bg-white rounded-full hover:drop-shadow-xl">
                    <div class="text-center">
                        <Icon name="ph:caret-left-bold" style="font-size: 14;" />
                    </div>
                </div>
            </client-only>
            <client-only>
                <div @click="scrollRight" v-show="showButton"
                    class="hidden md:block absolute border-neutral-400 cursor-pointer right-36 lg:right-48 border-[1px] w-7 h-7 p-0 bg-white rounded-full transition-shadow hover:drop-shadow-xl">
                    <div class="text-center">
                        <Icon name="ph:caret-right-bold" style="font-size: 14;" />
                    </div>
                </div>
            </client-only>
            <div class="hidden md:block">
                <div class="flex flex-row gap-2 items-center min-w-fit cursor-pointer ml-8 h-6 pl-3 pr-4 py-6 border border-gray-300 rounded-2xl">
                    <Icon name="mi:filter" style="font-size: 18;" />
                    <div class="text-neutral-950 text-sm font-medium">
                        Filters
                    </div>
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
        scrollLeft() {
            const container = this.$refs.scrollContainer;
            container.scrollBy({
                top: 0,
                left: -120,
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