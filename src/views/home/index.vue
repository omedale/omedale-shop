<template>
  <div>
      <filter-component></filter-component>
      <product-list></product-list>
  </div>
</template>

<script>
import ProductList from '@/components/product/ProductList'
import Filter from '@/components/common/Filter'
export default {
  name: 'Home',
  data () {
    return {
    }
  },
  components: {
    'product-list': ProductList,
    'filter-component': Filter
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->

<style scoped>

</style>
