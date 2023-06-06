<template>
    <div class="max-w-screen-xl mx-auto hidden md:block">
        <nav class="flex mb-4" aria-label="Breadcrumb">
            <ol class="inline-flex items-center space-x-1 md:space-x-3">
                <li class="inline-flex items-center">
                    <NuxtLink to="/"
                        class="inline-flex items-center text-sm font-medium text-gray-700 hover:text-rose-500 dark:text-gray-400 dark:hover:text-white">
                        <svg aria-hidden="true" class="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z">
                            </path>
                        </svg>
                        Home
                    </NuxtLink>
                </li>
                <li>
                    <div class="flex items-center">
                        <svg aria-hidden="true" class="w-6 h-6 text-gray-400" fill="currentColor" viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd"
                                d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                                clip-rule="evenodd"></path>
                        </svg>
                        <div class="h-5 bg-gray-200 rounded-sm dark:bg-gray-700 w-28 mb-1"></div>
                    </div>
                </li>
                <li aria-current="page">
                    <div class="flex items-center">
                        <svg aria-hidden="true" class="w-6 h-6 text-gray-400" fill="currentColor" viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd"
                                d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                                clip-rule="evenodd"></path>
                        </svg>
                        <div class="h-5 bg-gray-200 rounded-sm dark:bg-gray-700 w-28 mb-1"></div>
                    </div>
                </li>
            </ol>
        </nav>
        <div class="flex flex-col gap-1">
            <div class="flex gap-10">
                <div class="w-1/4 h-[35vh] overflow-hidden rounded-xl relative flex gap-2 z-0">
                    <div class="h-full bg-gray-200 rounded-sm dark:bg-gray-700 w-full mb-1"></div>
                </div>
                <div class="w-2/6">
                    <div class="text-2xl font-bold">
                        <div class="h-8 bg-gray-200 rounded-sm dark:bg-gray-700 w-32 mb-1"></div>
                    </div>
                    <div class="flex items-center gap-2">
                        <div class="h-5 bg-gray-200 rounded-sm dark:bg-gray-700 w-64 mb-1"></div>
                    </div>
                    <div class="text-4xl font-bold my-6">
                        <div class="h-10 bg-gray-200 rounded-sm dark:bg-gray-700 w-32 mb-1"></div>
                    </div>
                    <div class="mt-3">
                        <hr>
                        <div class="text-lg font-semibold text-rose-500 px-5 py-3 border-b-2 w-1/5 border-rose-500">
                            Detail
                        </div>
                        <hr class="mb-4">
                        <div class="h-5 bg-gray-200 rounded-sm dark:bg-gray-700 w-96 mb-1"></div>
                        <div class="h-5 bg-gray-200 rounded-sm dark:bg-gray-700 w-96 mb-1"></div>
                        <div class="h-5 bg-gray-200 rounded-sm dark:bg-gray-700 w-96 mb-1"></div>
                    </div>
                </div>
                <div class="w-1/4">
                    <div
                        class="p-4 rounded-lg border-[1px] border-black/[0.1] shadow-md flex-col gap-4 sticky top-0 right-0 md:flex hidden">
                        <div class="flex flex-col">
                            <div class="text-xl font-bold">
                                Set amount and notes
                            </div>
                        </div>
                        <div class="flex items-center gap-2">
                            <div class="flex items-center justify-center border p-1 rounded-md">
                                <div class="text-rose-500 bg-white px-3 py-1 rounded text-xl hover:bg-neutral-300">-</div>
                                <input type="number" class="mx-1 w-[50px] text-center appearance-none" value="1">
                                <div class="text-rose-500 bg-white px-3 py-1 rounded text-xl hover:bg-neutral-300">+</div>
                            </div>
                            <div>
                                <div class="h-5 bg-gray-200 rounded-sm dark:bg-gray-700 w-28 mb-1"></div>
                            </div>
                        </div>
                        <div>
                            <div class="flex items-center text-rose-500 font-semibold cursor-pointer">
                                <Icon name="mdi:pencil-outline" />
                                Add Note
                            </div>
                            <div v-show="false">
                                <input
                                    class="shadow appearance-none border border-rose-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                                    type="text" placeholder="Example: White color, Size M">
                            </div>
                        </div>
                        <div class="flex justify-between items-center">
                            <div class="text-neutral-400">
                                Subtotal
                            </div>
                            <div class="font-bold text-xl">
                                <div class="h-8 bg-gray-200 rounded-sm dark:bg-gray-700 w-24 mb-1"></div>
                            </div>
                        </div>
                        <div class="flex flex-col gap-4">
                            <button :disabled="true"
                                class="bg-rose-500 w-full p-3 rounded-md text-white text-center text-[15px] font-bold">
                                <Icon name="eos-icons:bubble-loading" v-if="true" />
                                Loading..
                            </button>
                            <button :disabled="true" :class="'cursor-not-allowed'"
                                class="bg-white border border-rose-500 w-full p-3 rounded-md text-rose-500 text-center text-[15px] font-bold">
                                <Icon name="eos-icons:bubble-loading" v-if="true" />
                                Loading..
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <!-- Mobile -->
    <div class="max-w-screen-xl mx-auto md:hidden">
        <nav class="flex mb-4" aria-label="Breadcrumb">
            <ol class="inline-flex items-center space-x-1 md:space-x-3">
                <li class="inline-flex items-center">
                    <NuxtLink to="/"
                        class="inline-flex items-center text-sm font-medium text-gray-700 hover:text-rose-500 dark:text-gray-400 dark:hover:text-white">
                        <svg aria-hidden="true" class="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z">
                            </path>
                        </svg>
                        Home
                    </NuxtLink>
                </li>
                <li>
                    <div class="flex items-center">
                        <svg aria-hidden="true" class="w-6 h-6 text-gray-400" fill="currentColor" viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd"
                                d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                                clip-rule="evenodd"></path>
                        </svg>
                        <div class="h-5 bg-gray-200 rounded-sm dark:bg-gray-700 w-28 mb-1"></div>
                    </div>
                </li>
                <li aria-current="page">
                    <div class="flex items-center">
                        <svg aria-hidden="true" class="w-6 h-6 text-gray-400" fill="currentColor" viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd"
                                d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                                clip-rule="evenodd"></path>
                        </svg>
                        <div class="h-5 bg-gray-200 rounded-sm dark:bg-gray-700 w-28 mb-1"></div>
                    </div>
                </li>
            </ol>
        </nav>
        <div class="flex flex-col gap-1">
            <div class="w-full gap-10">
                <div class="w-full h-[55vh] overflow-hidden rounded-xl relative flex gap-2 z-0 mb-3">
                    <div class="h-full bg-gray-200 rounded-sm dark:bg-gray-700 w-full mb-1"></div>
                </div>
                <div class="w-full">
                    <div class="text-2xl font-bold">
                        <div class="h-8 bg-gray-200 rounded-sm dark:bg-gray-700 w-32 mb-1"></div>
                    </div>
                    <div class="flex items-center gap-2">
                        <div class="h-5 bg-gray-200 rounded-sm dark:bg-gray-700 w-64 mb-1"></div>
                    </div>
                    <div class="text-4xl font-bold my-6">
                        <div class="h-10 bg-gray-200 rounded-sm dark:bg-gray-700 w-32 mb-1"></div>
                    </div>
                    <div class="mt-3">
                        <hr>
                        <div class="text-lg font-semibold text-rose-500 px-5 py-3 border-b-2 w-1/5 border-rose-500">
                            Detail
                        </div>
                        <hr class="mb-4">
                        <div class="h-5 bg-gray-200 rounded-sm dark:bg-gray-700 w-full mb-1"></div>
                        <div class="h-5 bg-gray-200 rounded-sm dark:bg-gray-700 w-full mb-1"></div>
                        <div class="h-5 bg-gray-200 rounded-sm dark:bg-gray-700 w-full
                         mb-1"></div>
                    </div>
                </div>
                <div class="w-1/4">
                    <div
                        class="p-4 rounded-lg border-[1px] border-black/[0.1] shadow-md flex-col gap-4 sticky top-0 right-0 md:flex hidden">
                        <div class="flex flex-col">
                            <div class="text-xl font-bold">
                                Set amount and notes
                            </div>
                        </div>
                        <div class="flex items-center gap-2">
                            <div class="flex items-center justify-center border p-1 rounded-md">
                                <div class="text-rose-500 bg-white px-3 py-1 rounded text-xl hover:bg-neutral-300">-</div>
                                <input type="number" class="mx-1 w-[50px] text-center appearance-none" value="1">
                                <div class="text-rose-500 bg-white px-3 py-1 rounded text-xl hover:bg-neutral-300">+</div>
                            </div>
                            <div>
                                <div class="h-5 bg-gray-200 rounded-sm dark:bg-gray-700 w-28 mb-1"></div>
                            </div>
                        </div>
                        <div>
                            <div class="flex items-center text-rose-500 font-semibold cursor-pointer">
                                <Icon name="mdi:pencil-outline" />
                                Add Note
                            </div>
                            <div v-show="false">
                                <input
                                    class="shadow appearance-none border border-rose-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                                    type="text" placeholder="Example: White color, Size M">
                            </div>
                        </div>
                        <div class="flex justify-between items-center">
                            <div class="text-neutral-400">
                                Subtotal
                            </div>
                            <div class="font-bold text-xl">
                                <div class="h-8 bg-gray-200 rounded-sm dark:bg-gray-700 w-24 mb-1"></div>
                            </div>
                        </div>
                        <div class="flex flex-col gap-4">
                            <button :disabled="true"
                                class="bg-rose-500 w-full p-3 rounded-md text-white text-center text-[15px] font-bold">
                                <Icon name="eos-icons:bubble-loading" v-if="true" />
                                Loading..
                            </button>
                            <button :disabled="true" :class="'cursor-not-allowed'"
                                class="bg-white border border-rose-500 w-full p-3 rounded-md text-rose-500 text-center text-[15px] font-bold">
                                <Icon name="eos-icons:bubble-loading" v-if="true" />
                                Loading..
                            </button>
                        </div>
                    </div>
                </div>
            </div>
    </div>
</div>
</template>