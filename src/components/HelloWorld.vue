<template>
  <div class="hello">
    <div>{{count}}</div>
    <button @click="buttonClick">dispatch</button>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  methods: {
    buttonClick() {
      this.$store.dispatch({
        type: 'incrementAsync',
        state: this.$store.state
      })
    }
  },
  computed: {
    count() {
      return this.$store.state.count
    }
  }
}
</script>