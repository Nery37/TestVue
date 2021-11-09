import accounting from 'accounting';

export default {
  methods: {
    formatCurrency(number) {
      return accounting.formatMoney(number, 'R$ ', 2, '.', ',');
    },
  }
}
