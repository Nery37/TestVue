<template>
  <div>
    <ValidationObserver v-slot="{ handleSubmit }">
      <form @submit.prevent="handleSubmit(submit)">
        <b-modal
          :no-close-on-esc="true"
          :no-close-on-backdrop="true"
          v-model="modalShow"
        >
          <template #modal-header>
            <h5>Upload de formulário</h5>
            <b-button-close @click="closeModal()"></b-button-close>
          </template>
          <b-form-group label="CNAB:">
            <ValidationProvider
              name="Arquivo CNAB"
              rules="required"
              v-slot="{valid,errors}">
              <b-form-file
                v-model="fileCnab"
                accept=".txt"
                :state="valid"
                placeholder="Escolha um arquivo CNAB..."
              />
              <b-form-invalid-feedback id="input-live-feedback">
                {{ errors[0] }}
              </b-form-invalid-feedback>
            </ValidationProvider>
            <b-form-text id="input-live-help">Só é permitido arquivos do tipo .TXT .</b-form-text>
          </b-form-group>
          <template #modal-footer>
            <div class="w-100">
              <b-button
                variant="primary"
                class="float-right"
                type="submit"
              >
                Enviar
              </b-button>
              <b-button
                size="md"
                variant="danger"
                class="float-right"
                @click="closeModal"
              >
                Cancelar
              </b-button>
            </div>
          </template>
        </b-modal>
      </form>
    </ValidationObserver>
  </div>
</template>

<script>
import {ValidationObserver, ValidationProvider} from 'vee-validate';

export default {
  name: "ModalUploadFile",
  components: {
    ValidationProvider,
    ValidationObserver
  },
  props: {
    modalShow: {
      type: Boolean,
      required: true
    }
  },
  data() {
    return {
      fileCnab: null,
    }
  },
  methods: {
    submit() {
      alert('Arquivo feito upload com sucesso!')
    },
    closeModal() {
      this.$emit('closeModal', false)
    }
  },
}
</script>

<style scoped>

</style>
