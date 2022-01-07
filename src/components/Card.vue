<template>
  <div class="card">
    <!-- @click="ctrlModal" -->
    <span>{{title}}</span>
  </div>
</template>

<script>
  import {defineComponent} from 'vue'

  export default defineComponent({

    props: ['title', 'id'],

    emits: ['openModal'],

    setup(props, {emit}) {

      let modal = false;

      const ctrlModal = () => {
        emit('openModal', props.id)
      }

      return {
        ctrlModal,
        modal
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