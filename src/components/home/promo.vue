<template>
    <div class="promo">
        <div class="promo__content container">
            <div class="promo__title">
                <span class="title30">ТОВАРЫ ПО АКЦИИ</span>
            </div>
            <div class="promo__items">
                <swiper :breakpoints="breakpoints" :observer="true" :observeParents="true" :navigation="navigation1"
                    class="mySwiper promo__items-swiper">
                    <swiper-slide class="swipspromo__items-swiper__block item-slide" v-for="item in 6" :key="item">
                        <Product />
                    </swiper-slide>

                </swiper>

                <div class="promo__items-swiper__navigation">
                    <div class="swiper-button-next swpbtnnxt1">
                        <img src="@/assets/images/png/imggrright.svg" alt="">
                    </div>
                    <div class="swiper-button-prev swpbtnprv1">
                        <img src="@/assets/images/png/imggrleft.svg" alt="">
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { Swiper, SwiperSlide } from "swiper/vue";
import SwiperCore, { Navigation } from "swiper";
import Product from '../product.vue';
SwiperCore.use([Navigation]);
export default {
    components: {
        Swiper,
        SwiperSlide,
        Product,
    },
    data: () => ({
        breakpoints: {
            // when window width is >= 320px
            0: {
                slidesPerView: 1,
                spaceBetween: 20
            },
            // when window width is >= 480px
            600: {
                slidesPerView: 2,
                spaceBetween: 10
            },
            // when window width is >= 640px
            1000: {
                slidesPerView: 3,
                spaceBetween: 20
            },
            1300: {
                slidesPerView: 4,
                spaceBetween: 30
            }
        },
        navigation1: {
            nextEl: '.swpbtnnxt1',
            prevEl: '.swpbtnprv1',
        },
    })
}
</script>

<style scoped lang="scss">
.promo__items-swiper__navigation {
    width: 100%;
    height: 20px;
    position: absolute;
    top: 45%;
    
}

.swiper-button-prev {
    // width: 40px;
    // height: 20px;

    &::after {
        display: none;
    }
}

.swiper-button-next {
    &::after {
        display: none;
    }
}
</style>