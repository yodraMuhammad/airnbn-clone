<script setup>
const router = useRouter()
const currentSlug = ref('all')
const props = defineProps({
  label: String,
  icon: String,
  slug: String,
  onClick: Function,
  selected: {
    type: Boolean,
    default: true,
    mutable: true,
    }
});
if(router.currentRoute.value.params.slug){
    currentSlug.value = router.currentRoute.value.params.slug
}
const  go = (slug) => {
    if(slug == 'all'){
        router.push('/')
    }else{
        router.push('/category/'+slug)
    }
}
</script>

<template>
    <NuxtLink :to="slug == 'all' ? '/': '/Category/'+slug" exact-active-class="active"
    :class="[
      'category',
      'flex',
      'flex-col',
      'items-center',
      'justify-center',
      'gap-1',
      'py-3',
      'border-b-2',
      'hover:text-neutral-900',
      'transition',
      currentSlug == slug ? '' : 'hover:border-b-neutral-400',
      currentSlug == slug  ? 'text-neutral-800' : 'text-neutral-600'
    ]">
        <Icon :name="icon" style="font-size: 26;" />
        <div class="category-text font-normal text-sm whitespace-nowrap">
            {{ label }}
        </div>
    </NuxtLink>
</template>

<style>
.category{
    @apply border-b-[2px] border-transparent;  
}

.active{
    @apply cursor-default border-black hover:cursor-default hover:border-black;
}
</style>
