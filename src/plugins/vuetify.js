import Vue from 'vue';
import Vuetify from 'vuetify/lib/framework';

Vue.use(Vuetify);

export default new Vuetify({
    theme: {
        themes: {
          light: {
            primary: '#ff8000',
            secondary: '#ddd', 
            accent: '#3333ff',
          },
        },
      },

      
});
