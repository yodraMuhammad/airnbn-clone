<template>
    <div class="fixed w-full bg-white z-20">
        <div class="py-4 border-b-[1px]">
            <Container>
                <div class="flex flex-row items-center justify-between gap-3 md:gap-0">
                    <Logo />
                    <Search />
                    <UserMenu />
                </div>
            </Container>
        </div>
        <div class="scroll-shadow">
            <Categories />
        </div>
    </div>
</template>

<script>
import Logo from '@/components/navbar/Logo.vue';
import Search from '@/components/navbar/Search.vue';
import UserMenu from '@/components/navbar/UserMenu.vue';
import Categories from '@/components/navbar/Categories.vue';

export default {
    components: {
        Logo,
        Search,
        UserMenu,
        Categories
    },
    mounted() {
        window.addEventListener('scroll', this.handleScroll);
    },
    destroyed() {
        window.removeEventListener('scroll', this.handleScroll);
    },
    methods: {
        handleScroll() {
            const navbar = document.querySelector('.scroll-shadow');
            if (window.scrollY > 0) {
                navbar.classList.add('scroll-down');
            } else {
                navbar.classList.remove('scroll-down');
            }
        },
    },
}
</script>

<style scoped>
.scroll-shadow {
    transition: box-shadow 0.2s ease-in-out;
}

.scroll-down {
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    /* Sesuaikan dengan preferensi bayangan Anda */
}
</style>