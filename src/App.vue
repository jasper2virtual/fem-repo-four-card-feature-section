<template>
    <div class="flex flex-col min-h-screen min-w-[320px] bg-neutral-very-light-gray">
        <main class="grow flex flex-col justify-center items-center py-24 px-8 gap-16">
            <div class="max-w-screen-sm mx-auto text-center">
                <p class="font-extralight text-2xl tracking-wider">Reliable, efficient delivery</p>
                <p class="font-semibold text-2xl tracking-wider mt-3">Powered by Technology</p>
                <p class="tracking-wide opacity-50 mt-5">Our Artificial Intelligence powered tools use millions of project data points to ensure that your
                    project is successful</p>
            </div>

            <div class="max-w-fit mx-auto flex flex-col gap-8
            tablet:flex-row tablet:flex-wrap tablet:justify-center
            desktop:grid desktop:grid-flow-col-dense desktop:grid-cols-3 desktop:grid-rows-2">
                <Card v-for="(card,index) in cards" :title="card.title" :duty="card.duty" :icon="card.icon" :color="card.color"
                :class="(index==0 || index==cards.length-1)?'desktop:row-span-2 self-center':''"
                />
            </div>
        </main>
        <footer>
            <Attribution />
        </footer>
    </div>
</template>
<script>
import Attribution from './components/Attribution.vue'
import Card from './components/Card.vue'
export default {
    inject:['cards'],
    components: {
        Attribution,
        Card
    },
}
</script>
<style lang="scss" scoped>
</style>