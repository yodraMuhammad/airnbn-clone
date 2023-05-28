<script setup>
const router = useRouter()

const props = defineProps({
  label: String,
  icon: String,
  onClick: Function,
  selected: {
    type: Boolean,
    default: true,
    mutable: true,
    }
});

const addCategoryParam = (value) => {
    if(router.currentRoute.value.query.category == undefined){
        const router = useRouter()
        const newQuery = { category: value }
        router.push({ path: '/', query: newQuery })
    }else{
        if(router.currentRoute.value.query.category == props.label){
            router.push({ path: '/' })
        }else{
            const router = useRouter()
            const newQuery = { category: value }
            router.push({ path: '/', query: newQuery })
        }
    }
}
let a= ''
if(router.currentRoute.value.query.category == undefined && props.label=='Rooms'){
    a = true
} else{
    a = false
}

</script>

<template>
    <div @click="addCategoryParam(label)"
    :class="[
      'category',
      'flex',
      'flex-col',
      'items-center',
      'justify-center',
      'gap-2',
      'py-3.5',
      'border-b-2',
      'hover:text-neutral-900',
      'hover:border-b-neutral-400',
      'transition',
      router.currentRoute.value.query.category == label || a ? 'cursor-default': 'cursor-pointer',
      router.currentRoute.value.query.category == label || a  ? 'border-b-neutral-800' : 'border-transparent',
      router.currentRoute.value.query.category == label || a  ? 'text-neutral-800' : 'text-neutral-500'
    ]">
        <Icon :name="icon" style="font-size: 26;" />
        <div class="category-text font-light text-sm whitespace-nowrap">
            {{ label }}
        </div>
    </div>
</template>

