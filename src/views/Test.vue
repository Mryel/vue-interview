<template>
  <div class="test">
    <div>
      平均值: {{average}}
    </div>
    <button @click="update">加载更多</button>
    <div class="list" v-for="item in dataList" :key="item.id">
      <div>{{item.id}}</div>
      <div>{{item.data}}</div>
      <div>{{item.time}}</div>
    </div>
    <transition name="fade">
      <NoData v-if="show" />
    </transition>
  </div>
</template>

<script>
import NoData from './NoData'
import { setTimeout } from 'timers'
export default {
  name: 'test',
  components: { NoData },
  data () {
    return {
      // dataList: [],
      // average: ''
      show: false
    }
  },
  computed: {
    dataList () {
      return this.$store.getters.getData
    },
    average () {
      return this.$store.getters.getAverage
    }
  },
  methods: {
    update () {
      var that = this
      if (this.$store.state.hasMoreData) {
        var count = Math.floor(Math.random() * 3)
        if (count === 0) {
          this.$store.dispatch('noData')
          this.show = true
          setTimeout(function () {
            that.show = false
          }, 3000)
        } else {
          this.$store.dispatch('getDataCall', { startIndex: this.dataList.length, count: this.dataList.length + count })
        }
      } else {
        this.show = true
        setTimeout(function () {
          that.show = false
        }, 3000)
      }
    }
  }
}
</script>

<style scoped lang="less">

.test{

  .list{
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    height: 50px;
    align-items: center;
  }
  button{
    margin-top: 10px;
    margin-bottom: 10px;
    background-color: blue;
    padding: 10px;
    font-size: 15px;
    color: white;
    width: 100%;
  }
}
.fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
}
.fade-enter, .fade-leave-to {
  opacity: 0;
}

</style>
