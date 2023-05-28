<template>
    <div class="fixed w-full bg-white z-20 shadow-sm">
        <div class="py-4 border-b-[1px]">
            <Container>
                <div class="flex flex-row items-center justify-between gap-3 md:gap-0">
                    <Logo/>
                    <Search/>
                    <UserMenu/>
                </div>
            </Container>
        </div>
        <Categories/>
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
}
</script>