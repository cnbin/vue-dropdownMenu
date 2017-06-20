<template>
<div>
  <drop-down-menu :title="menu_title" v-on:listenToChildEvent="showMsgFromChild"></drop-down-menu>
  <section>
        <ul class="sort_table_list_container">
            <li>1</li>
            <li>2</li>
            <li>3</li>
            <li>4</li>
            <li>5</li>
            <li>6</li>
        </ul>
  </section>
</div>
</template>

<script>
import dropDownMenu from '../components/DropDownMenu'
export default {
  name: 'index',
  components: {
    dropDownMenu
  },
  data () {
    return {
      menu_title: '下拉菜单'
    }
  },
  methods: {
    showMsgFromChild: function (data) {
      console.log('选择的是' + data)
    }
  }
}
</script>

<style lang="scss" scoped>
    @import 'src/style/mixin';
    .sort_table_list_container {
        position: absolute;
        top: 3em;
        bottom: 0;
        left: 0;
    }
</style>