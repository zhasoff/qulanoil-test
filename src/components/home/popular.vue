<template>
    <div class="popular">
        <div class="popular__content container">
            <div class="popular__title">
                <span class="title30">ПОПУЛЯРНЫЕ ТОВАРЫ</span>
                <button>Все товары</button>
            </div>
            <div class="popular__items">
                <div v-for="n in 8" :key="n">
                    <product  />
                </div>
            </div>
            <div class="popular__all">
                <button class="btn__out-gray">Показать еще</button>
            </div>
        </div>
    </div>
</template>

<script>
import product from '../product.vue'
export default {
    components: { product },

}
</script>

<style>

</style>