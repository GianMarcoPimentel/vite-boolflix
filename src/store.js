// definisco uno stato globale
import { reactive } from 'vue'

//


export const store = reactive({
   movies : [],

   series : [],

   searchFilms: "",

   searchSeries: "",

}); 