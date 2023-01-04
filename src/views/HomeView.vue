<template>
  <div class="home">
    <Banner />
    <advantages />
    <Catalog />
    <Popular />
    <popularcategory />
    <Promo />
    <my-works class="m_none" />
    <my-insta />
  </div>
</template>

<script>
import Banner from '@/components/home/banner.vue'
import Advantages from '@/components/home/advantages.vue'
import Catalog from '@/components/home/catalog.vue'
import Popular from '@/components/home/popular.vue'
import Popularcategory from '@/components/home/popularcategory.vue'
import MyWorks from '@/components/home/myWorks.vue'
import MyInsta from '@/components/home/myInsta.vue'
import Promo from '@/components/home/promo.vue'

export default {
  name: 'HomeView',
  components: {
    Banner,
    Advantages,
    Catalog,
    Popular,
    Popularcategory,
    MyWorks,
    MyInsta,
    Promo
}
}
</script>
