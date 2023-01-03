<template>
    <div class="catalog">
        <div class="catalog__content container">
            <div class="catalog__title">
                <span class="title30">КАТАЛОГ</span>
            </div>
            <div class="catalog__items">
                <div class="catalog__items-qw" v-for="(item, idx) in catalogs" :key="idx">
                    <router-link to="#" class="catalog__items-card"
                        >
                        <img :src="item.img" alt="">
                        <span>{{ item.name }}</span>
                    </router-link>
                </div>

            </div>
        </div>
    </div>
</template>

<script>
export default {
    data: () => ({
        catalogs: [
            {
                name: 'КУХНИ',
                img: require("@/assets/images/png/cat1.png")
            },
            {
                name: 'ГОСТИННЫЕ',
                img: require("@/assets/images/png/cat2.png")
            },
            {
                name: 'СПАЛЬНИ',
                img: require("@/assets/images/png/cat3.png")
            },
            {
                name: 'ПРИХОЖИЕ',
                img: require("@/assets/images/png/cat4.png")
            },
            {
                name: 'ШКАФЫ-КУПЕ',
                img: require("@/assets/images/png/cat5.png")
            }, {
                name: 'ДЕТСКИЕ',
                img: require("@/assets/images/png/cat6.png")
            },
            {
                name: 'ДИВАНЫ',
                img: require("@/assets/images/png/cat7.png")
            },
            {
                name: 'СТОЛЫ И СТУЛЬЯ',
                img: require("@/assets/images/png/cat8.png")
            },
        ]
    })
}
</script>

<style>

</style>