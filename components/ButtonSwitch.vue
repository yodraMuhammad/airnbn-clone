<script setup>
    const active=ref(true)

    const swicthActive = () =>{
        active.value = !active.value 
    }
</script>

<template>
    <label for="toggleButton" class="flex items-center cursor-pointer" @click="swicthActive">
        <div class="relative">
            <div v-if="active" class="flex items-center">
                <!-- <input id="toggleButton" type="checkbox" class="sr-only"> -->
                <div class="w-12 h-8 bg-neutral-900 rounded-full shadow-inner"></div>
                <div class="toggle-dot my-[2px] mx-[1px] border-[1px] absolute w-7 h-7 bg-white rounded-full shadow inset-y-0 right-0">
                    <div class="text-center">
                        <Icon name="material-symbols:check" style="font-size: 18;" />
                    </div>
                </div>
            </div>
            <div v-else class="flex items-center">
                <!-- <input id="toggleButton" type="checkbox" class="sr-only"> -->
                <div class="w-12 h-8 bg-neutral-400 rounded-full shadow-inner"></div>
                <div class="toggle-dot my-[2px] mx-[1px] border-[1px] absolute w-7 h-7 bg-white rounded-full shadow inset-y-0 left-0"></div>
            </div>
        </div>
    </label>
</template>