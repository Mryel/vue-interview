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
  </div>
</template>

<script>

export default {
  name: 'test',
  data () {
    return {
      // dataList: [],
      // average: ''
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
      this.$store.dispatch('getDataCall', { startIndex: this.dataList.length, count: this.dataList.length + 10 })
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

</style>
