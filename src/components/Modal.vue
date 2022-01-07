<template>
  <div
    class="modal"
    @click="ctrlModal"
  >
    <h2>{{article.title}}</h2>
    <div v-html="article.content" />
    <div @click="ctrlModal">close</div>
  </div>
</template>
<script>
  import {defineComponent} from 'vue'

  export default defineComponent({

    props: ['article'],
    emits: ['closeModal'],

    setup(props, {emit}) {

      const ctrlModal = () => {
        emit('closeModal')
      }

      return {
        ctrlModal
      }

    }

  })
</script>

<style scoped lang="scss">
  .modal {
    position: fixed;
    top: 0;
    left: 0;
    overflow-y: scroll;
    width: 100%;
    height: 100%;
    background: rgba(255, 255, 255, .9);
  }
</style>