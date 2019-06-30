import Api from '@/services/Api'

export default {
  getProducts (page, filterData = {department_ids: [], category_ids: [], price_range: []}) {
    return Api().get(`api/products?page=${page}&filter=${JSON.stringify(filterData)}`)
      .then(response => {
        return response
      })
      .catch(error => {
        return error.response
      })
  },
  searchProducts (searchQuery = '', filterData = {department_ids: [], category_ids: [], price_range: []}) {
    return Api().get(`api/products/search?q=${searchQuery}&filter=${JSON.stringify(filterData)}`)
      .then(response => {
        return response
      })
      .catch(error => {
        return error.response
      })
  }
}
