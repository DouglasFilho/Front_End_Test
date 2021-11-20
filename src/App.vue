<template>
  <v-app >
   <AppBar/> 
    <v-main >
      <Consulta 
        :instituicoes = instituicoes
        :convenios = convenios
        :parcelas = parcelas
      ></Consulta>
    </v-main>
  </v-app>
</template>

<script>
import http from './urlConfig'

import AppBar from './components/AppBar.vue';
import Consulta from './components/Consulta.vue'

export default {
  name: 'App',

  components: {
    AppBar,
    Consulta
  },

  methods:{
      getConvenios(){
        http.get('/api/convenio').then((response)=> {
            this.convenios = [];
            let data = response.data;
            data.forEach(element => {
                this.convenios.push(element.valor);
            });    
        }).catch(function (error) {
            console.log(error);
        });
      },

      getInstituicoes(){
        http.get('/api/instituicao').then((response)=> {
            this.instituicoes = [];
            let data = response.data;
            data.forEach(element => {
                this.instituicoes.push(element.chave);
            });
        }).catch(function (error) {
            console.log(error);
        });
      }
      
  },

  mounted(){
    this.getInstituicoes();
    this.getConvenios();
  },

  data: () => ({
    convenios: [],
    instituicoes:[],
    parcelas:[36, 48, 60, 72, 84]
  }),
};
</script>

