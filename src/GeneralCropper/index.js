import Cropper from 'cropperjs'
import GeneralCropper from './index.vue'

export default {
  install (Vue, options) {
    Vue.mixin({
      data () {
        return {
          instanceCropper: null
        }
      }
    })

    Vue.prototype.$cropper = {
      upload: (data) => {
        if (!this.instanceCropper) {
          const CropperComponent = Vue.extend(GeneralCropper)

          let cropperDom = document.createElement('div')
          cropperDom.setAttribute('is', 'GeneralCropper')
          let appended = document.getElementById('app').appendChild(cropperDom)

          this.instanceCropper = new CropperComponent({
            el: appended,
            data: {
              cropperLoading: false,
              cropper: null,
              cropperState: false,
              cropperType: 'Banner'
            }
          })
        }

        this.instanceCropper.cropperType = data.type

        if (this.cropper) {
          this.cropper.destroy()
        }
        if (data.file) {
          document.getElementById('imageCropper').src = URL.createObjectURL(data.file)
        } else {
          document.getElementById('imageCropper').src = data.url
        }
        var image = document.getElementById('imageCropper')
        this.cropper = new Cropper(image, {
          aspectRatio: data.ratio,
          viewMode: 1,
          zoomable: false
        })
        this.instanceCropper.cropperState = true

        return new Promise((resolve, reject) => {
          document.getElementById('createBlob').addEventListener('click', () => {
            this.cropper.getCroppedCanvas().toBlob(blob => {
              resolve(blob)
              this.instanceCropper.cropperLoading = true
            })
          })
          document.getElementById('closeCropper').addEventListener('click', () => {
            this.instanceCropper.cropperState = false
            reject(new Error('Cancelated'))
          })
        })
      },
      complete: () => {
        this.instanceCropper.cropperLoading = false
        this.instanceCropper.cropperState = false
      }
    }
  }
}
