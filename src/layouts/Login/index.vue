<template>
  <a-layout>
    <a-layout-content>
      <div
        :class="[$style.layout]"
      >
        <div :class="$style.header">
          <div :class="$style.logo">
            <router-link to="/">
              <h3>Home</h3>
            </router-link>
          </div>
        </div>
        <div :class="$style.content">
          <router-view/>
        </div>
        <div :class="[$style.footer, 'text-center']">
          <ul class="list-unstyled list-inline mb-3">
            <li class="list-inline-item">
              <a href="javascript: void(0);">Terms of Use</a>
            </li>
            <li class="active list-inline-item">
              <a href="javascript: void(0);">Compliance</a>
            </li>
            <li class="list-inline-item">
              <a href="javascript: void(0);">Confidential Information</a>
            </li>
            <li class="list-inline-item">
              <a href="javascript: void(0);">Support</a>
            </li>
            <li class="list-inline-item">
              <a href="javascript: void(0);">Contacts</a>
            </li>
          </ul>
          <p>&copy; 2019 Mediatec. All rights reserved.</p>
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
