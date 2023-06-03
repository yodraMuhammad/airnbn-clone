<template>
    <div class="relative">
        <div class="flex flex-row items-center gap-0">
            <div @click="()=> {router.push('/cart')}" class="hidden items-center md:block text-sm font-semibold py-3 px-3 rounded-full hover:bg-neutral-100 transition cursor-pointer">
                <div class="relative scale-75">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="h-8 w-8 text-gray-600">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
                    </svg>
                    <span class="absolute -top-2 left-4 rounded-full bg-red-500 p-0.5 px-2 text-sm text-red-50">{{ cart }}</span>
                </div>
                <!-- <Icon name="bi:cart" style="font-size: 20px;"/> <span class="bg-rose-500 py-2 px-3 rounded-full">{{ cart }}</span>  -->
            </div>
            <!-- <div @click="()=> {}" class="hidden md:block text-sm font-medium py-3 px-4 rounded-full hover:bg-neutral-100 transition cursor-pointer">
                <GlobeAltIcon class="h-5 w-5"/>
            </div> -->
            <div @click="toggleOpen" class="p-4 md:py-1 md:px-2 border-[1px] border-neutral-200 flex flex-row items-center gap-3 rounded-full cursor-pointer hover:shadow-md transition text-gray-500">
                <Bars3Icon class="h-5 w-5"/>
                <div class="hidden md:block ">
                    <UserCircleIcon class="h-8 w-8"/>
                </div>
            </div>
        </div>
        <div v-if="isOpen" class="absolute z-50 rounded-xl drop-shadow-2xl w-[40vw] md:w-[200px] bg-white overflow-hidden right-0 top-12 text-sm">
            <div class="flex flex-col cursor-pointer">
                <MenuItem :onClick="()=>{}" label="Sign up"/>
            </div>
            <div class="flex flex-col cursor-pointer">
                <MenuItem :onClick="()=>{}" label="Login"/>
            </div>
            <hr>
            <div class="flex flex-col cursor-pointer">
                <MenuItem :onClick="()=>{}" label="Airbnb your home"/>
            </div>
            <div class="flex flex-col cursor-pointer">
                <MenuItem :onClick="()=>{}" label="Help"/>
            </div>
            <hr>
            <div class="flex flex-col cursor-pointer">
                <MenuItem :onClick="()=>{console.log('1');sessionStorage.removeItem('auth');sessionStorage.clear();useRouter().push('/')}" label="Logout"/>
            </div>
        </div>
        
    </div>
</template>
<script>
import { Bars3Icon } from '@heroicons/vue/24/solid'
import { UserCircleIcon } from '@heroicons/vue/24/solid'
import { GlobeAltIcon } from '@heroicons/vue/24/outline'
import MenuItem from '@/components/navbar/MenuItem.vue'

export default{
    setup() {
        const isOpen = ref(false);
        const toggleOpen = () => {
            isOpen.value = !isOpen.value;
        };

        const isOpenComputed = computed(() => isOpen.value);
        const router = useRouter()
        const cart = useCart()
        const logout = () => {
            sessionStorage.removeItem('auth')
            sessionStorage.clear()
            useRouter().push('/')
        }
        return{
            isOpen,
            toggleOpen,
            isOpenComputed,
            router,
            cart,
            logout
        }
    },
    components:{
        Bars3Icon,
        UserCircleIcon,
        GlobeAltIcon,
        MenuItem
    },
}
</script>
