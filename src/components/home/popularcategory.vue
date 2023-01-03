<template>
  <div class="catpop">
    <div class="catpop__content container">
        <div class="catpop__title">
            <span class="title30">ПОПУЛЯРНЫЕ КАТЕГОРИИ</span>
        </div>
        <div class="catpop__items">
            <button v-for="(item , idx ) in btns" :key="idx" class="btn_out_blue">{{ item.name }}</button>
        </div>
    </div>
  </div>
</template>

<script>
export default {
    data: () => ({
        btns: [
            {
                name: 'КУХНИ'
            },
            {
                name: 'КРОВАТИ'
            },
            {
                name: 'ГОСТИННЫЕ'
            },
            {
                name: 'ШКАФ-КУПЕ'
            },
            {
                name: 'СПАЛЬНИ'
            },
            {
                name: 'ПРИХОЖИЕ'
            },
            {
                name: 'ДИВАНЫ'
            },
            {
                name: 'ДЕТСКИЕ'
            },
            {
                name: 'СТУЛЬЯ'
            },
            {
                name: 'СТОЛЫ'
            },
            {
                name: 'ШКАФ-КУПЕ'
            },
            {
                name: 'ШКАФ-КУПЕ'
            },
            {
                name: 'ПРИХОЖИЕ'
            },
            {
                name: 'ДИВАНЫ'
            },
            {
                name: 'ГОСТИННЫЕ'
            },
            {
                name: 'КУХНИ'
            },
            {
                name: 'КРОВАТИ'
            },
            {
                name: 'ГОСТИННЫЕ'
            },
            {
                name: 'ШКАФ-КУПЕ'
            },
            {
                name: 'СПАЛЬНИ'
            },
            {
                name: 'ПРИХОЖИЕ'
            },
            {
                name: 'ДИВАНЫ'
            },
            {
                name: 'ДЕТСКИЕ'
            },
        ]
    })
}
</script>

<style>

</style>