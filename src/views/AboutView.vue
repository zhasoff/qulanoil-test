<template>
  <div class="about">
    <input @input="convertValute" v-model="textValute" type="text" />
    Result: {{ result }} <br />
    <!-- <div>Selected: {{ selected }}</div> -->
    <h2>Базовая валюта RUB</h2>
    <div>
      <select v-model="selected">
        <option v-for="(item, idx) in GET_VALUTE" :value="item" :key="idx">{{ item.CharCode }}</option>
      </select>
      <br/>
      <span v-if="selected"><p v-if="selected.Previous">{{ selected.Previous }}</p> = <p v-if="selected.Value">{{ selected.Value }}</p></span>
    </div>

  </div>
</template>
<script>
import { mapActions, mapGetters } from 'vuex'
export default {
  data: () => ({
    getVallet: null,
    textValute: null,
    result: null,
    selected: ''
  }),
  created() {
    this.FETCH_VALUTE();
    if(this.GET_VALUTE){
      this.selected = this.GET_VALUTE[0]

    }
  },
  mounted(){
   
  },
  computed: {
    ...mapGetters(['GET_VALUTE'])
  },
  methods: {
    ...mapActions(['FETCH_VALUTE']),
    convertValute() {
      let text1 = this.textValute.split(" ")
      let value1, value2
      if (text1[3]) {
        if (text1[3].length === 3) {
          for (const key in this.GET_VALUTE) {
            if (text1[3].toUpperCase() === key) {
              value1 = (this.GET_VALUTE[key].Previous / this.GET_VALUTE[key].Nominal)
            }
            if (text1[1].toUpperCase() === key) {
              value2 = (this.GET_VALUTE[key].Previous / this.GET_VALUTE[key].Nominal) * parseInt(text1[0])
            }
            this.result = value2 / value1
          }
        }
      }
    }
  }
}
</script>
<style scoped lang="scss">
.about {
  min-height: 100vh;
  margin-top: 10%;
  text-align: center;
}
</style>
