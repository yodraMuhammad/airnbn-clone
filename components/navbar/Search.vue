<script setup>
import { MagnifyingGlassIcon } from '@heroicons/vue/24/solid'
const router = useRouter();
const key = ref('');
const isInputFocused = ref(false);
const search = () => {
    if(key.value){
        const hasil = key.value.split(' ').join('+');
        router.push('/search/'+hasil);
        key.value = '';
    }
}
const handleInputFocus = () => {
    isInputFocused.value = true;
}
const handleInputBlur = ()=> {
    isInputFocused.value = false;
}
</script>
<template>
    <div class="seacrh border-[1px] w-full md:w-auto py-2 rounded-full shadow-sm hover:shadow-md transition cursor-pointer" :class="{'border-rose-500': isInputFocused}">
        <div class="flex flex-row items-center justify-between ">
            <!-- <div class="text-sm font-semibold px-6">
                Anywhere
            </div> -->
            <div class="sm:block text-sm font-semibold pl-4 border-x-[0px] flex-1 text-center">
                <input id="search" type="text" class="p-2 border-transparent focus:border-none focus:outline-none" placeholder="Search" v-model="key" @focus="handleInputFocus" @blur="handleInputBlur" @keyup.enter="search">
                <!-- Any week -->
            </div>
            <div class="text-sm pr-2 text-gray-600 flex flex-row items-center gap-3">
                <!-- <div class="hidden sm:block">
                    Add guests
                </div> -->
                <div class="py-2 px-2 bg-rose-500 rounded-full text-white hover:bg-rose-600" @click="search">
                    <MagnifyingGlassIcon class="h-4 w-4"/>
                </div>
            </div>
        </div>
    </div>
</template>