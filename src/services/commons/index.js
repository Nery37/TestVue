import http from "@/services/http";

const findCEP = (cep) => http.get(`cep/${cep}/search`);

export default {
  findCEP,
}
