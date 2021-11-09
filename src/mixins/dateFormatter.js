export default {
  methods: {
    formatDateLocal(date) {
      let array = [];
      array = date.split(' ');
      array = array[0].split('-');
      return (array[2] + "/" + array[1] + "/" + array[0]);
    },
    formatHour(hour){
      hour.replace(/\D/g,"");
      return hour.replace(/.*(\d{2}:\d{2}:\d{2}).*/, "$1");
    }
  }
}
