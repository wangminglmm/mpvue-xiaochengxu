<template>
  <div class="counter-warp">
    <p>Vuex counter：{{ count }}</p>
    <p>
      <button @click="increment(2)">+</button>
      <button @click="decrement(1)">-</button>
    </p>

    <button @click="toHome">去往首页</button>
  </div>
</template>

<script>
// Use Vuex
import { mapGetters, mapMutations } from 'vuex'

export default {
  computed: {
    ...mapGetters(['count'])
  },
  methods: {
    ...mapMutations({
      increment: 'increase',
      decrement: 'decrease'
    }),
    toHome(){
      wx.switchTab({ url: '/pages/index/main' });
    }
  }
}
</script>

<style>
.counter-warp {
  text-align: center;
  margin-top: 100px;
}
.home {
  display: inline-block;
  margin: 100px auto;
  padding: 5px 10px;
  color: blue;
  border: 1px solid blue;
}
</style>
