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
    <div @click="addCategoryParam(label)" class="flex flex-col items-center justify-center gap-2 p-3 border-b-2 hover:border-neutral-400 hover:text-neutral-800 transition cursor-pointer" 
    :class="[
      'flex',
      'flex-col',
      'items-center',
      'justify-center',
      'gap-2',
      'p-3',
      'border-b-2',
      'hover:text-neutral-800',
      'transition',
      'cursor-pointer',
      router.currentRoute.value.query.category == label || a  ? 'border-b-neutral-800' : 'border-transparent',
      router.currentRoute.value.query.category == label || a  ? 'text-neutral-800' : 'text-neutral-500'
    ]">
        <Icon :name="icon" style="font-size: 26;" />
        <div class="font-light text-sm">
            {{ label }}
        </div>
    </div>
</template>

