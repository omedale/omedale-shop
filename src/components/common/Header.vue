<template>
<div>
  <header class="section-header">
    <section class="section-wrapper">
      <div class="container">
        <div class="row align-items-center">
          <div class="col-lg-6 col-sm-12">
            <router-link :to="'/'" class="home">
              <h3>My Shop</h3>
            </router-link>
          </div>
          <div class="col-lg-6 col-sm-12">
            <div class="float-right no-gutters py-1">
                <a-input-search
                placeholder="search"
                class="search-bar"
                :size="'small'"
                @search="onSearch"
              />
              <router-link :to="'/cart'" class="">
                  <span>
                    <a-badge :count="1"><a-avatar shape="square" icon="shopping-cart" /></a-badge>
                  </span>
              </router-link>
            </div>
          </div>
        </div>
      </div>
    </section>
  </header>
</div>
</template>

<script>
export default {
  name: 'header',
  data () {
    return {
    }
  },
  created () {
  },
  methods: {
    onSearch (value) {
      console.log(value)
    }
  }
}
</script>

<style>
  .search-bar {
    width: 200px;
  }
  .search-bar input {
    border-radius: 12px;
  }
  .ant-avatar {
    width: 24px !important;
    height: 24px !important;
    border-radius: 12px !important;
    border-radius: 50% !important;
  }
  .anticon-shopping-cart {
    vertical-align: 0.35rem !important;
    margin-left: -0.10rem  !important;
  }
  .home {
    font-family: 'Merienda', cursive;
  }
</style>
