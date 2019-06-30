<template>
<div>
  <div class="products">
    <div class="row">
      <template v-for="product in products">
        <product-item @show-product-detail="showProductDetail" :key="product.id" :product="product"></product-item>
      </template>
    </div>
    <div class="row pagination-wrapper">
       <a-pagination  :defaultCurrent="1" :pageSize="20" @change="onPageChange" :current="currentPage" :total="totalProducts" />
    </div>
  </div>
  <product-detail
    :product="product"
    :showModal="showModal"
    @close-product-detail="closeProductModal"
  ></product-detail>
</div>
</template>

<script>
import { mapGetters } from 'vuex'
import ProductItem from './ProductItem.vue'
import ProductDetail from './ProductDetail'
import productMixin from '@/mixins/product'
export default {
  name: 'product-list',
  mixins: [productMixin],
  data () {
    return {
      current: 1,
      showModal: false,
      product: {},
      isLoading: false
    }
  },
  created () {
    const queryPage = this.$router.history.current.query.page || 1
    this.current = parseInt(queryPage)
    this.getProducts()
  },
  methods: {
    onPageChange (current) {
      this.current = current
      this.getProducts()
      this.$router.replace({query: {
        page: this.current
      }})
    },
    showProductDetail (product) {
      this.product = product
      this.showModal = true
    },
    closeProductModal () {
      this.showModal = false
      this.product = {}
    },
    getProducts () {
      this.findProdcut('', 'ALL_PRODUCTS')
    }
  },
  computed: {
    ...mapGetters(['products', 'totalProducts', 'currentPage'])
  },
  components: {
    'product-item': ProductItem,
    'product-detail': ProductDetail
  }
}
</script>

<style>
.products {
  background: #e5e5e5;
  padding: 30px 0;
  padding-left: 15px;
  padding-right: 15px;
}
.pagination-wrapper {
  justify-content: center;
}
</style>
