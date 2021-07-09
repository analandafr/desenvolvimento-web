<template>
  <div class="app"> 
    <v-container class="content-equipe">
      <div class="content-integrantes">
        <v-row
          no-gutters
          justify="center"
        >
          <v-col
            class="integrantes"
            md="3"
          >
            <h3>Laís Matie</h3>
            <img
              alt="lais"
              class="foto-integrantes"
              contain
              src="@/assets/img/lais.png"
              transition="scale-transition"
            />
            <p>Fundadora e Desenvolvedora</p>
          </v-col>

          <v-col
            class="integrantes"
            md="3"
          >
            <h3>Nalanda França</h3>
            <img
              alt="nalanda"
              class="foto-integrantes"
              contain
              src="@/assets/img/nalanda.png"
              transition="scale-transition"
            />
            <p>Social Media</p>
          </v-col>

          <v-col
            class="integrantes"
            md="3"
          >
            <h3>Gabriela Prado</h3>
            <img
              alt="gabi"
              class="foto-integrantes"
              contain
              src="@/assets/img/gabi.png"
              transition="scale-transition"
            />
            <p>Social Media</p>
          </v-col>
        </v-row>
      </div>

      <div class="content-texto">
        <p>
          O Dev Girls 2.0 é uma expansão do projeto Developer Girls, onde realizamos um estudo e desenvolvimento de um site 
          para mostrar os relatos de mulheres na TI. Através da criação da iniciativa, notamos dificuldades de divulgação e 
          patrocínio para eventos. Sendo assim, pensamos na criação dessa plataforma para facilitar o trabalho de integração 
          e engajamentos dos eventos, e por fim, favorecer futuras parcerias e patrocínios de empresas.
        </p>
      </div>
    </v-container>
  </div>
</template>

<style scoped>

  .integrantes {
    text-align: center;
    margin: 24px 12px;
  }

  .foto-integrantes {
    height: 200px;
  }
  
  .foto-integrantes:hover {
    color: #23121C;
    transition: all 0.1s;
    box-sizing: border-box;
    border: 2px solid #23121C;
    border-radius: 50%;
  }

  .content-equipe {
    display: flex;
    font-family: "Poppins";
  }

  .content-integrantes {
    width: 75%;
    margin: 25px;
  }

  .content-texto {
    width: 25%;
    margin: 25px;
  }
</style>

