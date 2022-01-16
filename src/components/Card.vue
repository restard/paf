<template>
  <div class="card">
    <span>{{data.title}}</span>
  </div>
</template>

<script>
  import { toRef, defineComponent } from 'vue'

  export default defineComponent({

    props: ['post'],

    setup(props) {

      const data = toRef(props, 'post')

      return {
        data
      }
    }
  })
</script>

<style scoped lang="scss">
.card {
  width: 320px;
  padding: 16px;
  border: 1px solid;
}
</style>