<template>
    <div class="advantages">
        <div class="advantages__content container">
            <div class="advantages__title">
                <span class="title30">НАШИ ПРЕИМУЩЕСТВА</span>
            </div>
            <div class="advantages__items">
                <div v-for="(item, idx) in datas" :key="idx" class="advantages__items-all">
                    <img :src="item.icon" alt="">
                    <div class="advantages__items-all-title">
                        <h4>{{ item.title }}</h4>
                        <h5>{{ item.desc }}</h5>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data: () => ({
        datas: [
            {
                icon: require('@/assets/images/svg/ic1.svg'),
                title: 'Удобное расположение магазина',
                desc : ''
            },
            {
                icon: require('@/assets/images/svg/ic2.svg'),
                title: 'Быстрая доставка',
                desc : ''
            },
            {
                icon: require('@/assets/images/svg/ic4.svg'),
                title: 'Низкие цены',
                desc : 'Если найдете дешевле - сделаем скидку'
            },
            {
                icon: require('@/assets/images/svg/ic3.svg'),
                title: 'Гарантия качества',
                desc : ''
            },
        ]
    })

}
</script>

<style>

</style>