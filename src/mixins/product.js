import { mapGetters } from 'vuex'
import ProductService from '@/services/product'
import store from '@/store'
export default {
  computed: {
    ...mapGetters(['departments', 'categories', 'sizes', 'colors',
      'filterByPriceRange', 'filterByCategoryIds', 'filterByDepartmentIds'])
  },
  methods: {
    async findProdcut (searchQuery = '', type) {
      const filter = {
        department_ids: this.filterByDepartmentIds,
        category_ids: this.filterByCategoryIds,
        price_range: this.filterByPriceRange
      }
      let response = {}
      if (type === 'ALL_PRODUCTS') {
        response = await ProductService.getProducts(this.current, filter)
      } else {
        response = await ProductService.searchProducts(searchQuery, filter)
      }
      if (response.status === 200 && response.data && response.data.rows) {
        const data = response.data
        const currentPage = this.current
        store.commit('ADD_PRODUCTS', { data, currentPage })
      }
      this.isLoading = false
    },
    resetUrl () {
      this.$router.replace({'query': null})
    }
  }
}
