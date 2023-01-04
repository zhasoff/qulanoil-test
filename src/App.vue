<template>
  <div>
    <Header class="m_none" />
    <Navbar  class="m_none"  />
    <router-view />
    <Footer />
  </div>
</template>

<script>
import Header from '@/components/layouts/Header.vue'
import Navbar from '@/components/layouts/Navbar.vue'
import Footer from '@/components/layouts/Footer.vue';
export default {
  components: {
    Header,
    Navbar,
    Footer
}
}
</script>

<style lang="scss">
.container{
  @media (min-width: 1400px) {
    max-width: 1520px!important;
  }
}
</style>
