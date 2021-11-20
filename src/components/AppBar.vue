<template>
    <div>
        <v-app-bar
            app
            color="#fff"
            elevation="0"
        >
            <div class="d-flex align-center">
                <v-img
                alt="Vuetify Name"
                class="shrink mt-1 mb-1"
                contain
                :src="require('../assets/logotipoEmpresta.png')"
                width="200"
                />
            </div>

            <v-spacer></v-spacer>

            <v-app-bar-nav-icon class="d-sm-none" v-on:click="drawer = !drawer"></v-app-bar-nav-icon>

            <v-btn
                href="https://www.instagram.com/emprestabemmelhor/"
                color = '#5f5e5e'
                text
                class="mt-2 d-none d-sm-block"
            >
                <v-icon>mdi-instagram</v-icon>
            </v-btn>

            <v-btn
                href="https://www.linkedin.com/company/empresta-solucoes-e-negocios/"
                color = '#5f5e5e'
                text
                class="mt-2 d-none d-sm-block"
            >
                <v-icon>mdi-linkedin</v-icon>
            </v-btn>

            <v-btn
                href="https://www.facebook.com/emprestabemmelhor/"
                color = '#5f5e5e'
                text
                class="mt-2 d-none d-sm-block"
            >
                <v-icon>mdi-facebook</v-icon>
            </v-btn>

            <v-btn
                href="https://www.youtube.com/channel/UCMAfESDHP3h-X9iDtUoyvTg"
                text
                class="mt-3 d-none d-sm-block"
            >
                <v-icon>mdi-youtube</v-icon>
            </v-btn>
        </v-app-bar>

        <v-navigation-drawer
            v-model="drawer"
            app
            temporary
        >
            <v-list dense>
                <v-list-item link href="https://www.instagram.com/emprestabemmelhor/"> 
                <v-list-item-content>
                    <v-list-item-title>Instagram</v-list-item-title>
                </v-list-item-content>
                <v-list-item-icon >
                    <v-icon>mdi-instagram</v-icon>
                </v-list-item-icon>
                </v-list-item>

                <v-list-item link href="https://www.linkedin.com/company/empresta-solucoes-e-negocios/"> 
                <v-list-item-content>
                    <v-list-item-title>Linkedin</v-list-item-title>
                </v-list-item-content>
                <v-list-item-icon >
                    <v-icon>mdi-linkedin</v-icon>
                </v-list-item-icon>
                </v-list-item>

                <v-list-item link href="https://www.facebook.com/emprestabemmelhor/"> 
                <v-list-item-content>
                    <v-list-item-title>Facebook</v-list-item-title>
                </v-list-item-content>
                <v-list-item-icon >
                    <v-icon>mdi-facebook</v-icon>
                </v-list-item-icon>
                </v-list-item>

                <v-list-item link href="https://www.youtube.com/channel/UCMAfESDHP3h-X9iDtUoyvTg"> 
                <v-list-item-content>
                    <v-list-item-title>YouTube</v-list-item-title>
                </v-list-item-content>
                <v-list-item-icon >
                    <v-icon>mdi-youtube</v-icon>
                </v-list-item-icon>
                </v-list-item>
            </v-list>
        </v-navigation-drawer>
    </div>

</template>

<script>
export default {
  name: 'AppBar',

  components: {
    
  },

  data: () => ({
      drawer: false
  }),
};
</script>
