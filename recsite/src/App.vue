<template>
<div>
   <v-card
    class="mx-auto overflow-hidden"
    height="400"
  >
    <v-app-bar
    light
    elevation="0"
    >
      <v-app-bar-nav-icon 
        @click="drawer = true"
        class="icone-menu"
      >
      </v-app-bar-nav-icon>

      <div class="links-menu">
        <a href="#" class="link"> Home </a> 
        <a href="#" class="link"> Nossa equipe </a>
     </div>
    </v-app-bar>

    <v-navigation-drawer
      v-model="drawer"
      absolute
      temporary
    >
      <v-list
        nav
        dense
      >
        <v-list-item-group
          v-model="group"
          active-class="deep-purple--text text--accent-4"
        >
          <v-list-item>
            <v-list-item-icon>
              <v-icon>mdi-home</v-icon>
            </v-list-item-icon>
            <v-list-item-title>Home</v-list-item-title>
          </v-list-item>

          <v-list-item>
            <v-list-item-icon>
              <v-icon>mdi-account</v-icon>
            </v-list-item-icon>
            <v-list-item-title>Nossa equipe</v-list-item-title>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>
  </v-card>

  <v-footer
    padless
  >
    <v-row
      justify="center"
      no-gutters
    >

      <a href="#" class="material-icons">
        facebook
      </a>

      <a href="#" class="material-icons">
        party_mode
      </a>

      <a href="#" class="material-icons">
        mail
      </a>

      <a href="#" class="material-icons">
        send
      </a>

      <p class="copyright">&copy; Copyright Developer Girls - 2017</p>
      <v-col
        class="primary lighten-2 py-4 text-center white--text"
        cols="12"
      >
      </v-col>
    </v-row>
  </v-footer>
 </div>

</template>

<script>
  export default {
    data: () => ({
    drawer: false,
    group: null,
    })
  }
</script>

<style scoped>
  @media screen and (min-width: 600px) {
    .icone-menu {
      display: none;
    }
  }

  @media screen and (max-width: 600px) {
    .links-menu {
      display: none;
    }
  }

  .links-menu {
    position: absolute;
    top: 15px;
    right: 50px;
    padding: 0 50px;
  }

  .link {
    text-decoration: none;
    color: #23121C;
    font-weight: bold;
    font-size: 22px;
    padding: 0 10px;
  }

  .link:hover {
    color: #947780;
    text-decoration: underline;
  }

.copyright {
    color: #23121C;
    font-size: 14px;
    margin: 10px 0 0;
  }

</style>