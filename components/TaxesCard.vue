<template>
    <div class="hidden md:block pt-5 lg:pt-3">
        <div class="flex justify-center">
            <div class="w-full lg:w-2/4 p-4 bg-white border border-gray-200 rounded-xl dark:bg-gray-800 dark:border-gray-700">
                <div class="flex justify-between items-center">
                    <div class="flex gap-2">
                        <div class="font-semibold">Display total price</div>
                        <div class="border-l-[2px] pl-2 text-md text-neutral-500">Includes all fees, before taxes</div>
                    </div>
                    <div>
                        <ButtonSwitch />
                    </div>
                </div>
            </div>
        </div>
    </div>
    <!-- Handphone -->
    <div class="block md:hidden pt-5">
        <div class="flex justify-center">
            <div class="w-full p-4 bg-white border border-gray-200 rounded-xl dark:bg-gray-800 dark:border-gray-700">
                <div class="flex justify-between items-center">
                    <div class="flex flex-col">
                        <div class="font-semibold">Display total price</div>
                        <div class="text-md text-neutral-500">Includes all fees, before taxes</div>
                    </div>
                    <div>
                        <ButtonSwitch />
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
  