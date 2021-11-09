<template>
  <b-row>
    <b-col>
      <b-table
        striped
        responsive
        hover
        outlined
        :items="items"
        :per-page="perPage"
        :fields="fields"
        :current-page="currentPage"
        :filter="filterCnab"
      >
        <template v-slot:cell(type)="data">
          {{ data.value }}
        </template>
        <template v-slot:cell(date)="data">
          {{ data.value }}
        </template>
        <template v-slot:cell(value)="data">
         {{ data.value }}
        </template>
        <template v-slot:cell(cpf)="data">
          {{ data.value }}
        </template>
        <template #table-caption>
         O valor total é {{ formatCurrency(valueTotal) }}
        </template>
      </b-table>

      <b-pagination
        v-model="currentPage"
        :total-rows="rows"
        :per-page="perPage"
        aria-controls="my-table"
      ></b-pagination>
    </b-col>
  </b-row>
</template>

<script>
import cpfFormatter from "@/mixins/cpfFormatter";
import numericFormatter from "@/mixins/numericFormatter";
import dateFormatter from "@/mixins/dateFormatter";

export default {
  name: "ListTable",
  mixins: [cpfFormatter,numericFormatter,dateFormatter],
  data: function () {
    return {
      fields: [
        {key: 'type', label: 'Tipo da Transação', sortable: true, formatter: this.typeTransaction},
        {key: 'date', label: 'Data', sortable: true, formatter: this.formatDateLocal},
        {key: 'value', label: 'Valor', sortable: true, formatter: this.formatCurrency},
        {key: 'cpf', label: 'CPF', sortable: true, formatter: this.formatCpf},
        {key: 'creditCard', label: 'Cartão de Crédito', sortable: true,},
        {key: 'hour', label: 'Hora', sortable: true, formatter: this.formatHour},
        {key: 'ownerName', label: 'Dono da loja', sortable: true},
        {key: 'storeName', label: 'Nome loja', sortable: true}
      ],
      items: [
        {
          type: 3,
          date: "2019-03-01",
          value: "00000142.00",
          cpf: "09620676017",
          creditCard: "4753****3153",
          hour: "15:34:53",
          ownerName: "JOÃO MACEDO",
          storeName: "BAR DO JOÃO"
        },
        {
          type: 5,
          date: "2019-03-01",
          value: "00000132.00",
          cpf: "55641815063",
          creditCard: "3123****7687",
          hour: "14:56:07",
          ownerName: "MARIA JOSEFINA",
          storeName: "LOJA DO Ó - MATRIZ"
        },
        {
          type: 3,
          date: "2019-03-01",
          value: "00000122.00",
          cpf: "84515254073",
          creditCard: "6777****1313",
          hour: "17:27:12",
          ownerName: "MARCOS PEREIRA",
          storeName: "MERCADO DA AVENIDA"
        },
        {
          type: 2,
          date: "2019-03-01",
          value: "00000112.00",
          cpf: "09620676017",
          creditCard: "3648****0099",
          hour: "23:42:34",
          ownerName: "JOÃO MACEDO",
          storeName: "BAR DO JOÃO"
        },
        {
          type: 1,
          date: "2019-03-01",
          value: "00000152.00",
          cpf: "09620676017",
          creditCard: "1234****7890",
          hour: "23:30:00",
          ownerName: "JOÃO MACEDO",
          storeName: "BAR DO JOÃO"
        },
        {
          type: 2,
          date: "2019-03-01",
          value: "00000107.00",
          cpf: "84515254073",
          creditCard: "8723****9987",
          hour: "12:33:33",
          ownerName: "MARCOS PEREIRA",
          storeName: "MERCADO DA AVENIDA"
        },
        {
          type: 2,
          date: "2019-03-01",
          value: "00000502.00",
          cpf: "84515254073",
          creditCard: "8473****1231",
          hour: "23:12:33",
          ownerName: "MARCOS PEREIRA",
          storeName: "MERCADO DA AVENIDA"
        },
        {
          type: 3,
          date: "2019-03-01",
          value: "00000602.00",
          cpf: "23270298056",
          creditCard: "6777****1313",
          hour: "17:27:12",
          ownerName: "JOSÉ COSTA",
          storeName: "MERCEARIA 3 IRMÃOS"
        },
        {
          type: 1,
          date: "2019-03-01",
          value: "00000200.00",
          cpf: "55641815063",
          creditCard: "1234****3324",
          hour: "09:00:02",
          ownerName: "MARIA JOSEFINA",
          storeName: "LOJA DO Ó - MATRIZ"
        },
        {
          type: 5,
          date: "2019-03-01",
          value: "00000802.00",
          cpf: "84515254073",
          creditCard: "3123****7687",
          hour: "14:56:07",
          ownerName: "MARCOS PEREIRA",
          storeName: "MERCADO DA AVENIDA"
        },
        {
          type: 2,
          date: "2019-03-01",
          value: "00000102.00",
          cpf: "23270298056",
          creditCard: "8473****1231",
          hour: "23:12:33",
          ownerName: "JOSÉ COSTA",
          storeName: "MERCEARIA 3 IRMÃOS"
        },
        {
          type: 3,
          date: "2019-03-01",
          value: "00006102.00",
          cpf: "23270298056",
          creditCard: "6777****1313",
          hour: "17:27:12",
          ownerName: "JOSÉ COSTA",
          storeName: "MERCEARIA 3 IRMÃOS"
        },
        {
          type: 4,
          date: "2019-03-01",
          value: "00000152.32",
          cpf: "55641815063",
          creditCard: "1234****6678",
          hour: "10:00:00",
          ownerName: "MARIA JOSEFINA",
          storeName: "LOJA DO Ó - FILIAL"
        },
        {
          type: 8,
          date: "2019-03-01",
          value: "00000102.03",
          cpf: "84515254073",
          creditCard: "2344****1222",
          hour: "12:32:22",
          ownerName: "MARCOS PEREIRA",
          storeName: "MERCADO DA AVENIDA"
        },
        {
          type: 3,
          date: "2019-03-01",
          value: "00000103.00",
          cpf: "23270298056",
          creditCard: "6777****1313",
          hour: "17:27:12",
          ownerName: "JOSÉ COSTA",
          storeName: "MERCEARIA 3 IRMÃOS"
        },
        {
          type: 9,
          date: "2019-03-01",
          value: "00000102.03",
          cpf: "55641815063",
          creditCard: "6228****9090",
          hour: "00:00:00",
          ownerName: "MARIA JOSEFINA",
          storeName: "LOJA DO Ó - MATRIZ"
        },
      ],
      filterCnab: "",
      perPage: 5,
      currentPage: 1,
      valueTotal: 0
    }
  },
  methods: {
    typeTransaction(value) {
      switch (value) {
        case 1:
          return "Débito"
        case 2:
          return "Boleto"
        case 3:
          return "Financiamento"
        case 4:
          return "Crédito"
        case 5:
          return "Recebimento Empréstimo"
        case 6:
          return "Vendas"
        case 7:
          return "Recebimento TED"
        case 8:
          return "Recebimento DOC"
        case 9:
          return "Aluguel";
      }
    },
    totalValues() {
      let arrItems = this.items
      arrItems.forEach((value) => {
        if (this.incrementId.indexOf(value.type) === -1) {
          this.valueTotal = +parseFloat(value.value)
          return
        }
        this.valueTotal = -parseFloat(value.value)
      })
    }
  },
  created() {
    this.totalValues()
  },
  computed: {
    rows() {
      return this.items.length;
    },
    incrementId() {
      return [1, 4, 5, 6, 7, 8]
    },
  },
}
</script>

<style scoped>

</style>
