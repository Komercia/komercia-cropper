<template>
  <div class="cropper" v-show="cropperState">
    <div class="cropper_wrapper">
      <div class="cropper_loading" v-show="cropperLoading">
        <pulse-loader :loading="true" color="#3b434b" size="15px"></pulse-loader>
      </div>
      <div class="cropper_area">
        <img id="imageCropper" src="" alt="">
      </div>
      <div class="cropper_actions">
        <button id="closeCropper">Cancelar</button>
        <button id="createBlob">Crear {{ cropperType }}</button>
      </div>
    </div>
  </div>
</template>

<script>
import PulseLoader from 'vue-spinner/src/PulseLoader.vue'

export default {
  components: { PulseLoader }
}
</script>

<style lang="css">
  .cropper{
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: rgba(0,0,0,0.7);
    z-index: 6;
  }
  .cropper_wrapper{
    position: relative;
    max-width: 650px;
    width: 100%;
    box-sizing: border-box;
    padding: 10px 10px 0 10px;
    background-color: #FFF;
  }
  .cropper_loading{
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: grid;
    justify-content: center;
    align-content: center;
    background-color: rgba(255,255,255,0.5);
    z-index: 3;
  }
  .cropper_area{
    width: 100%;
    max-height: 500px;
    height: calc(100vh - 50px);
    background-color: rgba(0,0,0,0.5);
  }
  .cropper_actions{
    height: 50px;
    display: grid;
    grid-auto-flow: column;
    justify-content: center;
    align-content: center;
    grid-column-gap: 10px;
  }
  .cropper_actions button{
    display: inline-block;
    line-height: 1;
    white-space: nowrap;
    cursor: pointer;
    background: #fff;
    border: 1px solid #dcdfe6;
    color: #606266;
    -webkit-appearance: none;
    text-align: center;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    outline: 0;
    margin: 0;
    -webkit-transition: .1s;
    transition: .1s;
    padding: 12px 20px;
    font-size: 14px;
    border-radius: 4px;
  }
  .cropper_actions button#closeCropper:hover {
    color: #0F9380;
    border-color: rgb(183, 223, 217);
    background-color: rgb(231, 244, 242);
  }
  .cropper_actions button#createBlob{
    color: #fff;
    background-color: #0F9380;
    border-color: #0F9380;
  }
  .cropper_actions button#createBlob:hover {
    background: rgb(63, 169, 153);
    border-color: rgb(63, 169, 153);
    color: #fff;
  }
</style>
