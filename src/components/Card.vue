<template>
    <div :class="['flex flex-col shadow-md shadow-neutral-grayish-blue p-8 rounded-md aspect-[7/5] max-w-[350px]', borderColor]">
        <p class="font-semibold text-xl">{{ title }}</p>
        <p class="opacity-50 text-sm leading-6 tracking-wide mt-2 grow">{{ duty }}</p>
        <img :src="'./assets/images/' + icon" alt="icon" class="w-[57px] h-auto self-end desktop:w-[64px]" />
    </div>
</template>
<script>
export default {
    props: {
        title: String,
        duty: String,
        icon: String,
        color: String
    },
    computed: {
        borderColor() {
            return `border-t-2 border-t-${this.color}`
        }
    }
}
</script>