<template>
  <div :class="$style.guide">
    <x-aside>
      引导页对于一些第一次进入项目的人很有用，你可以简单介绍下项目的功能。本 Demo 是基于
      <a href="https://github.com/kamranahmedse/driver.js" target="_blank">driver.js</a>
    </x-aside>

    <x-guide :key="$i18n.locale">
      <el-button icon="el-icon-question" type="primary">
        {{$t('m.guide')}}
      </el-button>
    </x-guide>
  </div>
</template>

<script>
import guide from 'components/guide/index.vue';
import aside from 'components/x-aside.vue';

export default {
  name: 'guide',
  components: {
    'x-guide': guide,
    'x-aside': aside,
  },
  data() {
    return {
    };
  },
  methods: {

  },
};
</script>

<style lang="scss" module>
.guide{
  background: #ffffff;
  padding: 16px;
}
</style>
