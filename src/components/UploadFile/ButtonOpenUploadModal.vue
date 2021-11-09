<template>
  <div>
    <b-row>
      <b-col class="my-2">
        <b-button class="float-right" @click="modalShow = true">
          Upload de Arquivo
        </b-button>
      </b-col>
    </b-row>
    <modal-upload-file @closeModal="alterStatusModal" :modal-show="modalShow"/>
  </div>

</template>

<script>
import ModalUploadFile from "@/components/UploadFile/ModalUploadFile";

export default {
  name: "ButtonOpenUploadModal",
  components: {
    ModalUploadFile
  },
  data() {
    return {
      modalShow: false
    }
  },
  methods: {
    alterStatusModal() {
      return this.modalShow = false
    }
  }

}
</script>

<style scoped>

</style>
