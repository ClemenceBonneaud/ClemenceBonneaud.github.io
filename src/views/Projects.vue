<!-- ////////////////////////////////////////////////// -->
<!--                      TEMPLATE                      -->
<!-- ////////////////////////////////////////////////// -->

<template>
    <!-- Header -->
    <header>
        <div class="header-border header-border--1"></div>
        <div class="header-border header-border--2"></div>
        <a href="#projects"><h1>{{ title }}</h1></a>
    </header>

    <section class="section section__projects" id="projects">

      <!----- PROJETS DE FORMATION ----->
      <h2>Projets de formation</h2>

      <div class="contenu-cartes contenu-cartes__formation">

        <!-- Carte 1 : Booki -->

        <transition name="fade">
          <div class="bloc-modale" v-if="revele[0]">

            <div class="overlay" @click="toggleModale(0)"></div>
            <div class="modale">
                <div class="btn-modale" @click="toggleModale(0)">x</div>
                  <h3>Projet 2 : Booki</h3>

                  <ul>
                    <li>Tout premier code</li>
                    <li>HTML CSS</li>
                    <li>Responsive</li>
                    <li><a href="https://github.com/ClemenceBonneaud/OpenClassrooms_P2_Booki" target="_blank">Lien GitHub</a></li>
                  </ul>

                  <figure>
                    <img alt="image site complet" src="/images/booki-desktop.png"/>
                  </figure>
            </div>
          </div>
        </transition>

        <div class="carte" @click="toggleModale(0)">
          <figure class="figure-carte">
            <img alt="image du projet Booki" src="/images/booki.png"/>
          </figure>
          <div class="carte-overlay">
            <div class="carte-overlay__div">
              <div class="carte-overlay__texte">Ouvrir</div>
            </div>
          </div>
        </div>

        <!-- Carte 2 : OhMyFood -->

        <transition name="fade">
          <div class="bloc-modale" v-if="revele[1]">

            <div class="overlay" @click="toggleModale(1)"></div>
            <div class="modale">
                <div class="btn-modale" @click="toggleModale(1)">x</div>
                  <h3>Projet 3 : OhMyFood</h3>
                  <ul>
                    <li>HTML</li>
                    <li>SCSS</li>
                    <li>Animations</li>
                    <li><a href="https://github.com/ClemenceBonneaud/OpenClassrooms_P3_Ohmyfood" target="_blank">Lien GitHub</a></li>
                  </ul>

                  <video controls autoplay>
                      <source src="/images/ohmyfood-desktop.mov" type="video/mp4">
                      Votre navigateur ne prend pas en charge les vidéos MOV
                  </video>

                  <figure class="figure-flex">
                    <img alt="image site complet" src="/images/ohmyfood-mobile.png"/>
                    <img alt="image site complet" src="/images/ohmyfood-mobile-2.png"/>
                  </figure>
            </div>
          </div>
        </transition>

        <div class="carte" @click="toggleModale(1)">
          <figure class="figure-carte">
            <img alt="image du projet OhMyFood" src="/images/ohmyfood.png"/>
          </figure>
          <div class="carte-overlay">
            <div class="carte-overlay__div">
              <div class="carte-overlay__texte">Ouvrir</div>
            </div>
          </div>
        </div>

        <!-- Carte 3 : Kanap -->

        <transition name="fade">
          <div class="bloc-modale" v-if="revele[2]">

            <div class="overlay" @click="toggleModale(2)"></div>
            <div class="modale">
                <div class="btn-modale" @click="toggleModale(2)">x</div>
                  <h3>Projet 5 : Kanap</h3>

                  <ul>
                    <li>E-commerce</li>
                    <li>Javascript natif</li>
                    <li>Échanges avec API</li>
                    <li><a href="https://github.com/ClemenceBonneaud/OpenClassrooms_P5_Kanap" target="_blank">Lien GitHub</a></li>
                  </ul>

                  <figure>
                    <img alt="image site complet" src="/images/kanap-desktop-accueil.png"/>
                    <img alt="image site complet" src="/images/kanap-desktop-produit.png"/>
                    <img alt="image site complet" src="/images/kanap-desktop-panier.png"/>
                  </figure>
            </div>
          </div>
        </transition>

        <div class="carte" @click="toggleModale(2)">
          <figure class="figure-carte">
            <img alt="image du projet Kanap" src="/images/kanap.png"/>
          </figure>
          <div class="carte-overlay">
            <div class="carte-overlay__div">
              <div class="carte-overlay__texte">Ouvrir</div>
            </div>
          </div>
        </div>

        <!-- Carte 4 : Piiquante -->

        <transition name="fade">
          <div class="bloc-modale" v-if="revele[3]">

            <div class="overlay" @click="toggleModale(3)"></div>
            <div class="modale">
                <div class="btn-modale" @click="toggleModale(3)">x</div>
                  <h3>Projet 6 : Piiquante</h3>

                  <ul>
                    <li>API RESTful</li>
                    <li>Javascript natif</li>
                    <li>MongoDB</li>
                    <li><a href="https://github.com/ClemenceBonneaud/OpenClassrooms_P6_Piiquante" target="_blank">Lien GitHub</a></li>
                  </ul>

                  <video controls autoplay>
                      <source src="/images/piiquante-desktop.mov" type="video/mp4">
                      Votre navigateur ne prend pas en charge les vidéos MOV
                  </video>

                  <figure>
                    <img alt="image accueil"           src="/images/piiquante-desktop-accueil.png"/>
                    <img alt="image ajouter une sauce" src="/images/piiquante-desktop-ajouter.png"/>
                    <img alt="image page produit"      src="/images/piiquante-desktop-modifier.png"/>
                  </figure>
            </div>
          </div>
        </transition>

        <div class="carte" @click="toggleModale(3)">
          <figure class="figure-carte">
            <img alt="image du projet Piiquante" src="/images/piiquante.png"/>
          </figure>
          <div class="carte-overlay">
            <div class="carte-overlay__div">
              <div class="carte-overlay__texte">Ouvrir</div>
            </div>
          </div>
        </div>

        <!-- Carte 5 : Groupomania -->

        <transition name="fade">
          <div class="bloc-modale" v-if="revele[4]">

            <div class="overlay" @click="toggleModale(4)"></div>
            <div class="modale">
                <div class="btn-modale" @click="toggleModale(4)">x</div>
                  <h3>Projet 7 : Groupomania</h3>

                  <ul>
                    <li>Réseau social</li>
                    <li>Vue.js</li>
                    <li>Javascript</li>
                    <li>mySql</li>
                    <li><a href="https://github.com/ClemenceBonneaud/OpenClassrooms_P7_Groupomania" target="_blank">Lien GitHub</a></li>
                  </ul>

                  <figure>
                    <img alt="image accueil"    src="/images/groupomania-desktop-accueil.png"/>
                    <img alt="image profil"     src="/images/groupomania-desktop-profil.png"/>
                    <img alt="image incription" src="/images/groupomania-desktop-inscrire.png"/>
                  </figure>
            </div>
          </div>
        </transition>

        <div class="carte" @click="toggleModale(4)">
          <figure class="figure-carte">
            <img alt="image du projet Groupomania" src="/images/groupomania.png"/>
          </figure>
          <div class="carte-overlay">
            <div class="carte-overlay__div">
              <div class="carte-overlay__texte">Ouvrir</div>
            </div>
          </div>
        </div>

      </div>

      <!----- PROJETS DE BENEVOLAT ----->
      <h2>Projets en bénévolat</h2>

      <div class="contenu-cartes contenu-cartes__formation">

        <!-- Carte 1 : Roudoudou et Galipette -->

        <transition name="fade">
          <div class="bloc-modale" v-if="revele[5]">

            <div class="overlay" @click="toggleModale(5)"></div>
            <div class="modale">
                <div class="btn-modale" @click="toggleModale(5)">x</div>
                  <h3>Roudoudou et Galipette</h3>
                  <ul>
                    <li>HTML SCSS</li>
                    <li>Javascript natif</li>
                    <li>Animations</li>
                    <li><a href="#" target="_blank">Lien du site</a></li>
                  </ul>

                  <figure>
                    <img alt="image site complet" src="/images/roudoudou-desktop.png"/>
                  </figure>
            </div>
          </div>
        </transition>

        <div class="carte" @click="toggleModale(5)">
          <figure class="figure-carte">
            <img alt="image du projet Roudoudou et Galipette" src="/images/roudoudou.png"/>
          </figure>
          <div class="carte-overlay">
            <div class="carte-overlay__div">
              <div class="carte-overlay__texte">Ouvrir</div>
            </div>
          </div>
        </div>

      </div>

      <!----- PROJETS PERSONNELS ----->
      <h2>Projets personnels</h2>

      <div class="contenu-cartes contenu-cartes__formation">

        <!-- Carte 1 : Portfolio -->

        <div class="carte" @click="toggleModale">
          <figure class="figure-carte">
            <img alt="image du projet Portfolio" src="/images/Logo.png"/>
          </figure>
          <div class="carte-overlay">
            <div class="carte-overlay__div">
              <div class="carte-overlay__texte">Vous êtes dessus !</div>
            </div>
          </div>
        </div>

      </div>


    </section>

</template>

<!-- ////////////////////////////////////////////////// -->
<!--                       SCRIPT                       -->
<!-- ////////////////////////////////////////////////// -->

<script>

import AnimatedComponent from '@/components/AnimatedComponent.vue';

export default {
  name: "Projects",
  path: "/projects",
  props: [""],
  components: {
    'animatedComponent': AnimatedComponent
  },
  data() {
    return {
        hover: "",
        title: "Projets",
        revele: [
          false,
          false,
          false,
          false,
          false,
          false,
          false
        ]
    };
  },
  methods: {
    toggleModale: function(number){
      this.revele[number] = !this.revele[number]
    }
  }
};
</script>

<!-- ////////////////////////////////////////////////// -->
<!--                       STYLE                        -->
<!-- ////////////////////////////////////////////////// -->

<style lang="scss">


.bloc-modale {
    position: fixed;
    top:    0;
    bottom: 0;
    right:  0;
    left:   0;
    width:  100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 20;
}

.overlay {
    background: rgba(50,50,50,0.5);
    position: fixed;
    z-index: 5;
    top:    0;
    bottom: 0;
    right:  0;
    left:   0;
}

.modale {
    z-index: 10;
    position: fixed;
    overflow-y: scroll;
    color: #333;
    padding: 50px;
    border-radius: 10px;
    width: 50%;
    max-height: 60%;
    top: 100px;
    text-align: center;
    & figure {
      width: 90%;
      margin-left:  auto;
      margin-right: auto;
    }
    & img {
      width: 100%;
      margin-bottom: 60px;
    }
    & h3, li {
      list-style-type: none;
    }
    & ul {
      display: flex;
      justify-content: space-evenly;
      padding: 0;
      margin-bottom: 60px;
    }
    & video {
      width: 90%;
      margin-bottom: 60px;
    }
    & a {
      font-weight: 400;
    }
}

.btn-modale {
    position: absolute;
    top:   10px;
    right: 10px;
    padding: 3px 8px 4px 8px;
    border-radius: 5px;
    color: black;
    &:hover {
      cursor: pointer;
    }
}

.section__projects {
  & .carte {
    width:  20%;
    height: 200px;
    overflow: hidden;
    transition: all 300ms ease-in-out;
    &:hover {
      cursor: pointer;
      & .figure-carte {
        transform: translate(0px, -200px);
      }
      & .carte-overlay {
        transform: translate(0px, -200px);
      }
      & .carte-overlay__div {
        transform: scale(1);
        margin-top: 0px;
      }
    }
  }
  & .figure-carte {
    width:  100%;
    height: 100%;
    margin: 0;
    z-index: 0;
    transition: all 400ms ease-in-out;
    & img {
    width:  100%;
    height: 100%;
    object-fit: cover;
    }
  }
  & h2 {
    margin-left: 5%;
  }
}

.contenu-cartes {
  display: flex;
  margin-bottom: 100px;
}

.figure-flex {
  display: flex;
  justify-content: space-between;
  width: 90%;
  & img {
    width: 45%;
    height: 100%;
  }
}

.carte-overlay {
  width: 100%;
  height: 200px;
  display: flex;
  justify-content: center;
  transition: all 400ms ease-in-out;
  &__div {
    margin-top: -150px;
    width: 100%;
    display: flex;
    justify-content: center;
    transform: scale(0);
    transition: all 400ms ease-in-out;
  }
  &__texte {
    height: 100%;
    width:  100%;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    transition: all 400ms ease-in-out;
    font-size: 25px;
  }
}

.fade-enter-active,
.fade-leave-active {
  transition: all 300ms ease-in-out;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

</style>