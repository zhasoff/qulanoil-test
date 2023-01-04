<template>
    <div class="navbar">
        <div class="navbar__content container">
            <div class="navbar__items">
                <div class="navbar__items-link" :class="item.type == 'button' ? 'btn_border_blue' : ''" v-for="( item, idx) in links" :key="idx">
                    <router-link :to="item.route">
                        {{ item.name }}
                    </router-link>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data: () => ({
        links: [
            {
                name: 'КУХНИ',
                route: '#',
                type: 'link',
            },
            {
                name: 'ГОСТИННЫЕ',
                route: '#',
                type: 'link',
            },
            {
                name: 'СПАЛЬНИ',
                route: '#',
                type: 'link',
            },
            {
                name: 'ПРИХОЖИЕ',
                route: '#',
                type: 'link',
            },
            {
                name: 'ШКАФЫ-КУПЕ',
                route: '#',
                type: 'link',
            },
            {
                name: 'ДЕТСКИЕ',
                route: '#',
                type: 'link',
            },
            {
                name: 'ДИВАНЫ',
                route: '#',
                type: 'link',
            },
            {
                name: 'ГДЕ ПОСМОТРЕТЬ',
                route: '/about',
                type: 'button',
            },
        ]
    })

}
</script>

<style>

</style>