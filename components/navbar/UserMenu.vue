<template>
    <div class="relative">
        <div class="flex flex-row items-center gap-0">
            <div @click="()=> {}" class="hidden md:block text-sm mr-[-10px] font-semibold py-3 px-4 rounded-full hover:bg-neutral-100 transition cursor-pointer">
                Airbnb your home 
            </div>
            <div @click="()=> {}" class="hidden md:block text-sm font-medium py-3 px-4 rounded-full hover:bg-neutral-100 transition cursor-pointer">
                <GlobeAltIcon class="h-5 w-5"/>
            </div>
            <div @click="toggleOpen" class="p-4 md:py-1 md:px-2 border-[1px] border-neutral-200 flex flex-row items-center gap-3 rounded-full cursor-pointer hover:shadow-md transition text-gray-500">
                <Bars3Icon class="h-5 w-5"/>
                <div class="hidden md:block ">
                    <UserCircleIcon class="h-8 w-8"/>
                </div>
            </div>
        </div>
        <div v-if="isOpen" class="absolute rounded-xl shadow-md w-[40vw] md:w-3/4 bg-white overflow-hidden right-0 top-12 text-sm">
            <div class="flex flex-col cursor-pointer">
                <MenuItem :onClick="()=>{}" label="Sign up"/>
            </div>
            <div class="flex flex-col cursor-pointer">
                <MenuItem :onClick="()=>{}" label="Login"/>
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
        // const [isOpen, setIsOpen] = useState(false);

        // const toggleOpen = useCallback(()=>{
        //     setIsOpen((value)=> !value);
        // }, []);

        const isOpen = ref(false);
        // console.log(isOpen.value);
        const toggleOpen = () => {
            isOpen.value = !isOpen.value;
            console.log("run");
            console.log(isOpen.value);
        };

        const isOpenComputed = computed(() => isOpen.value);

        return{
            isOpen,
            toggleOpen,
            isOpenComputed
        }
    },
    components:{
        Bars3Icon,
        UserCircleIcon,
        GlobeAltIcon,
        MenuItem
    },
    methods:{
    }
}
</script>
