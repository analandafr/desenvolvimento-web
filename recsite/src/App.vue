<template>
  <div class="app">
    <v-app-bar 
      elevetion="0" 
      color="transparent" 
      light
    >
      <v-app-bar-nav-icon
        @click.stop="drawer = !drawer"
        class="icone-menu"
      >
      </v-app-bar-nav-icon>

      <img
        alt="Logo Developer Girls"
        class="logo-dev"
        contain
        src="@/assets/img/logo-dev.png"
        transition="scale-transition"
      />

      <div class="links-menu">
        <router-link class="link" exact to="/">Home</router-link>
        <router-link class="link" to="/equipe">Nossa Equipe</router-link>
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
        >
          <v-list-item>
            <v-list-item-icon>
              <v-icon>mdi-home</v-icon>
            </v-list-item-icon>
            <router-link class="link2" to="/">Home</router-link>
          </v-list-item>

          <v-list-item>
            <v-list-item-icon>
              <v-icon>mdi-account</v-icon>
              <router-link class="link2" to="/equipe">Nossa Equipe</router-link>
            </v-list-item-icon>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>
    <router-view></router-view>

    <v-footer class="footer" 
      fixed
    >
      <div>
        <a
          href="https://www.facebook.com/devgirlsofc"
          target="blank"
          class="material-icons link"
        >
          facebook
        </a>

        <a
          href="https://www.instagram.com/developergirls_/"
          target="blank"
          class="material-icons link"
        >
          party_mode
        </a>

        <a
          href="https://t.me/joinchat/M74xghvwK-IEZ-pSL9AkiQ"
          target="blank"
          class="material-icons link"
        >
          send
        </a>
        <p class="copyright">&copy; Copyright Developer Girls - 2017</p>
      </div>
    </v-footer>
  </div>
</template>

<script>
export default {
  data: () => ({
    drawer: false,
    group: null,
  }),

  watch: {
    group () {
      this.drawer = false
    },
  }, 
};
</script>

<style scoped>
  @import url(https://fonts.googleapis.com/css2?family=Poppins:wght@100;200;300;400;500;600;800;900&display=swap);

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

  .app {
    height: 100%;
    font-family: "Poppins";
  }

  .logo-dev { 
    width: 100px;
    margin: 0px 20px;
    
  }

  .links-menu {
    position: absolute;
    top: 15px;
    right: 50px;
    padding: 0 50px;
  }

  .link {
    text-decoration: none;
    color: #23121c;
    font-weight: bold;
    font-size: 22px;
    padding: 0 10px;
  }

  .link:hover {
    color: #947780;
    text-decoration: underline;
  }

  .link2 {
    text-decoration: none;
    color: #23121c;
    font-weight: bold;
    font-size: 10px;
    padding: 7px 5px 0;
    
  }

  .footer {
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
  }
  .copyright {
    color: #23121c;
    font-size: 14px;
  }
</style>