<template>
  <div class="card card-page">
    <div class="card-body shadow">
      <div class="container">
        <button-open-upload-modal></button-open-upload-modal>
        <list-table></list-table>
      </div>
    </div>
  </div>
</template>

<script>
import ButtonOpenUploadModal from "@/components/UploadFile/ButtonOpenUploadModal";
import ListTable from "@/components/Table/ListTable";

export default {
  name: "Home",
  components: {
    ButtonOpenUploadModal,
    ListTable
  }
}
</script>
