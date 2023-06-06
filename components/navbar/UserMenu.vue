<template>
    <div class="relative">
        <div class="flex flex-row items-center gap-0">
            <div @click="()=> {router.push('/cart')}" class="items-center md:block text-sm font-semibold py-3 px-3 rounded-full hover:bg-neutral-100 transition cursor-pointer">
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
                    <!-- <Avatar :src='"profile.png"'/> -->
                    <!-- <img src="~/assets/images/profile.png" alt="Avatar" class="rounded-full" height="30" width="30" v-if="displayPicture"> -->
                    <img :src="displayPicture" alt="Avatar" class="rounded-full" height="30" width="30">
                    <!-- <img :src="displayPicture" alt="Avatar" class="rounded-full" height="30" width="30" v-else> -->
                    <!-- <UserCircleIcon class="h-8 w-8" v-else/> -->
                    <!-- <Avatar src="images/profile.png"/> -->
                </div>
            </div>
        </div>
        <div v-if="isOpen" class="absolute z-50 rounded-xl drop-shadow-2xl w-[40vw] md:w-[200px] bg-white overflow-hidden right-0 top-12 text-sm">
            <div v-show="!id" @click="isShow=true" class="flex flex-col cursor-pointer">
                <MenuItem :onClick="()=>{}" label="Login"/>
            </div>
            <div v-show="!id" class="flex flex-col cursor-pointer">
                <MenuItem :onClick="()=>{}" label="Sign up"/>
            </div>
            <hr>
            <div v-show="id" @click="logout" class=" flex flex-col cursor-pointer">
                <MenuItem label="Logout"/>
            </div>
        </div>
        

        <!-- login -->
        <div class="modal" v-if="isShow">
            <div class="bg-white rounded-lg shadow relative dark:bg-gray-700 w-[450px]">
                <div class="flex justify-end p-2">
                    <button @click="isShow=!isShow" type="button" class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-800 dark:hover:text-white" data-modal-toggle="authentication-modal">
                        <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>  
                    </button>
                </div>
                <form class="space-y-6 px-6 lg:px-8 pb-4 sm:pb-6 xl:pb-8" action="#">
                    <h3 class="text-xl font-medium text-gray-900 dark:text-white">Sign in to our platform {{ visible }}</h3>
                    <div v-show="message" class="text-sm text-red-500 text-center py-3 rounded-lg bg-rose-100 border-[1px]">{{ message }}</div>
                    <div>
                        <label for="email" class="text-sm font-medium text-gray-900 block mb-2 dark:text-gray-300">Username</label>
                        <input type="text" name="email" id="email" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" placeholder="Username" required="" v-model="username">
                    </div>
                    <div>
                        <label for="password" class="text-sm font-medium text-gray-900 block mb-2 dark:text-gray-300">password</label>
                        <input type="password" name="password" id="password" placeholder="••••••••" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" required="" v-model="password">
                    </div>
                    <div class="flex justify-between">
                        <div class="flex items-start">
                            <div class="flex items-center h-5">
                                <input id="remember" aria-describedby="remember" type="checkbox" class="bg-gray-50 border border-gray-300 focus:ring-3 focus:ring-blue-300 h-4 w-4 rounded dark:bg-gray-600 dark:border-gray-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800">
                            </div>
                            <div class="text-sm ml-3">
                            <label for="remember" class="font-medium text-gray-900 dark:text-gray-300">Remember me</label>
                            </div>
                        </div>
                        <a href="#" class="text-sm text-rose-700 hover:underline dark:text-blue-500">Lost Password?</a>
                    </div>
                    <div :disabled="isDisabled3" class="w-full text-white bg-rose-500 hover:bg-rose-600 focus:ring-4 focus:ring-rose-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-rose-600 dark:hover:bg-rose-700 dark:focus:ring-rose-800" @click="login()"
                    :class="isDisabled || isDisabled2 ? 'cursor-not-allowed': 'cursor-pointer'"
                    >
                        <Icon name="eos-icons:bubble-loading" v-if="isDisabled3"/>
                        {{isDisabled3 ? ' Loading..' : 'Login'}}
                    </div>
                    <div class="text-sm font-medium text-gray-500 dark:text-gray-300">
                        Not registered? <a href="#" class="text-blue-700 hover:underline dark:text-rose-500">Create account</a>
                    </div>
                </form>
            </div> 
        </div>
    <!-- end -->

    </div>
</template>
<script>
import { Bars3Icon } from '@heroicons/vue/24/solid'
import { UserCircleIcon } from '@heroicons/vue/24/solid'
import { GlobeAltIcon } from '@heroicons/vue/24/outline'
import { useToast } from 'tailvue';
import MenuItem from '@/components/navbar/MenuItem.vue'
import axios from 'axios'

export default{
    setup() {
        onBeforeMount(() => {
        const cart = useCart();
        const id = useId();
        id.value = sessionStorage.getItem('auth');
        if(sessionStorage.getItem('auth')){
        // axios.get("https://6vbjxu.sse.codesandbox.io/carts?userId="+sessionStorage.getItem('auth'))
        //     .then((response) => cart.value = response.data.length)
        //     .catch(function (error) {
        //     console.log("Gagal :", error);
        //     });
        }
    });
    const isOpen = ref(false);
    const isShow = ref(false);
    const toggleOpen = () => {
        isOpen.value = !isOpen.value;
    };
    const toggleShow = () => {
        isShow.value = !isShow.value;
    };
    const isOpenComputed = computed(() => isOpen.value);
    const router = useRouter()
    const cart = useCart()
    const id = useId()
    const displayPicture = useDP()
    const logout = () => {
        cart.value = 0;
        id.value = 0;
        displayPicture.value = "https://ubd.edu.bn/wp-content/uploads/2021/12/NoPath-Copy-21_38_11zon-264x300.jpg";
        sessionStorage.removeItem('auth');
        sessionStorage.clear();
        const toast = useToast();
        toast.show({
                    type: 'success',
                    message: 'Thank you! You have successfully logged out.',
                    position: 'top-left',
                    timeout: 4,
                })
        useRouter().push('/')
    }
    const message = ref('')
    const username = ref('')
    const password = ref('')
    const isDisabled3 = ref(false)
    const login = async () => {
        isDisabled3.value = true
        axios.get('https://6vbjxu.sse.codesandbox.io/profile?username='+username.value+'&pass='+password.value)
            .then((response) => {
                if(response.data[0]){
                    sessionStorage.setItem('auth', JSON.stringify(response.data[0].id))
                    sessionStorage.setItem('displayPicture', response.data[0].image)
                id.value = response.data[0].id
                displayPicture.value = response.data[0].image
                axios.get("https://6vbjxu.sse.codesandbox.io/carts?userId="+sessionStorage.getItem('auth'))
                    .then((response) => cart.value = response.data.length)
                    .catch((error)=>console.log("Gagal :", error)
                );
                username.value ='';
                password.value = '';
                isDisabled3.value = false;
                isShow.value = false;
                }else{
                    isDisabled3.value = false;
                    message.value = "Wrong username or password !!";
                    password.value = ''
                }
            })
            .catch(function (error) {
                console.log("Gagal :", error);
            });
    }
    return{
        id,
        isOpen,
        toggleOpen,
        isOpenComputed,
        router,
        cart,
        logout,
        isShow,
        toggleShow,
        login,
        message,
        username,
        password,
        isDisabled3,
        displayPicture
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

<style scoped>
.modal {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0, 0, 0, 0.5);
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 100;
}
</style>