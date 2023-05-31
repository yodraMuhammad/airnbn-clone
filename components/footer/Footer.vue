<template>
    <div class="fixed bottom-0 w-full bg-white z-10 shadow-sm hidden md:block">
        <div class="py-3 border-t-[1px]">
            <Container>
                <div class="flex justify-between items-center">
                    <div class="text-sm">
                        © 2023 Airbnb, Inc.
                    </div>
                    <div class="flex gap-4 items-center cursor-pointer">
                        <div class="flex gap-1 items-center hover:underline">
                            <GlobeAltIcon class="h-5 w-5"/>
                            English (US)
                        </div>
                        <div class="cursor-pointer hover:underline">
                            $ USD
                        </div>
                        <div class="flex items-center gap-1 cursor-pointer hover:underline">
                            <div>
                                Support & resources
                            </div>
                            <icon name="bytesize:chevron-top"/>
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    </div>
</template>

<script setup>
import { GlobeAltIcon } from '@heroicons/vue/24/outline'

</script>