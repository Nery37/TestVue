import {
  extend,
  localize
} from "vee-validate";
import ptBR from "vee-validate/dist/locale/pt_BR.json";
import { email, required, max, min, confirmed } from "vee-validate/dist/rules";

localize("pt_BR", ptBR);

extend('email', email);
extend('required', required);
extend('max', max);
extend('min', min);
extend('confirmed', confirmed);
