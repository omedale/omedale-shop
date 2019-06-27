<template>
  <a-layout>
    <a-layout-content>
      <div
        :class="[$style.layout]"
      >
        <div :class="$style.header">
        </div>
        <div :class="$style.content">
          <router-view/>
        </div>
        <div :class="[$style.footer, 'text-center']">
          <ul class="list-unstyled list-inline mb-3">
            <li class="list-inline-item">
               <router-link :to="'/'">
                  Home
               </router-link>
            </li>
            <li class="list-inline-item">
              <a href="javascript: void(0);">Contacts</a>
            </li>
          </ul>
          <p>&copy; 2019 Omedale. All rights reserved.</p>
        </div>
      </div>
    </a-layout-content>
  </a-layout>
</template>

<script>
export default {
  name: 'LoginLayout',
  data: function () {
    return {
    }
  },
  methods: {
  }
}
</script>

<style lang="scss" module>
@import "./style.module.scss";
</style>
