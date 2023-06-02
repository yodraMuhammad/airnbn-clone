<script setup>

const title = 'No exact matches';
const subtitle = 'Trying changing or removing some of your filters';

</script>
<template>
    <div class="h-[55vh] flex flex-col gap-2 justify-center items-center ">
        <heading :title="title" :subtitle="subtitle" :center="true"/>
        <div class="w-48 mt-4">
            <Button :outline="true" label="Remove all filters" @click="()=>{router.push({ path: '/' })}" />
        </div>
    </div>
</template>