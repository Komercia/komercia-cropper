<template>
  <div id="app">
    <button type="button" name="button" @click="test">test</button>
    <input type="file" @change="upload">
  </div>
</template>

<script>

export default {
  name: 'App',
  methods: {
    test () {
      this.$cropper()
    },
    upload (event) {
      this.$cropper.upload({
        type: 'Favicon',
        ratio: 1,
        file: event.target.files[0],
      }).then((response) => {
        console.log(response)
        setTimeout(() => {
          this.$cropper.complete()
        }, 4000)
      })
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
