<!-- ////////////////////////////////////////////////// -->
<!--                      TEMPLATE                      -->
<!-- ////////////////////////////////////////////////// -->

<template>
    <!-- Header -->
    <header>
        <div class="header-border header-border--1"></div>
        <div class="header-border header-border--2"></div>
        <a href="#experience"><h1>{{ title }}</h1></a>
    </header>

    <!-- Section -->
    <section class="section section__experience" id="experience">

      <!-- Contenu ligne + (texte et points) -->
      <div class="chronologie">

        <div id="ligne-chronologie"></div> <!-- Ligne rouge -->

        <!-- Contenu texte et points -->
        <div class="chronologie--contenu">
          <div id="point-chronologie"></div> <!-- Point vide -->

          <figure class="chronologie__image chronologie__image--right">
            <animated-component animation-type="fade">
              <img alt="image de jouet robot" src="/images/robot.png" id="first-img"/>
            </animated-component>
          </figure>
          <div class="chronologie--left" id="chrono-first"> <!-- Texte sur la partie de gauche -->
            <div class="point-chronologie__plein point-chronologie__plein--left"></div> <!-- Point plein -->
              <p class="chronologie--date"><strong>2022-En cours</strong></p>
            <h2>Développeuse web Bénévole</h2>
              <h3>Association Roudoudou et Galipette - France</h3>
                <p><strong>Réalisation d'un site vitrine</strong><br>
                Évaluation des besoins et création d'une charte graphique et d'une maquette<br>
                Création d'un site vitrine responsive laptop first</p>
          </div>
          
          
          <figure class="chronologie__image chronologie__image--left">
            <animated-component animation-type="fade">
              <img alt="image de web developpement" src="/images/web-programming.png"/>
            </animated-component>
          </figure>
          <div class="chronologie--right"> <!-- Texte sur la partie de droite -->
            <div class="point-chronologie__plein point-chronologie__plein--right"></div>
              <p class="chronologie--date"><strong>2022</strong></p>
            <h2>Diplôme en développement web</h2>
              <h3>OpenClassrooms</h3>
                <p>7 Projets professionnalisants mentorés</p>
                <ul>
                  <li><strong>Projet 1 :</strong> mise en place d'un planning et d'un système de veille</li>
                  <li><strong>Projet 2 :</strong> création d'une page web HTML/CSS à partir d'une maquette</li>
                  <li><strong>Projet 3 :</strong> réalisation d'un site responsive mobile-first avec animations</li>
                  <li><strong>Projet 4 :</strong> amélioration des performances SEO et d'accessibilité d'un site existant</li>
                  <li><strong>Projet 5 :</strong> construction d'un site de e-commerce en JavaScript</li>
                  <li><strong>Projet 6 :</strong> réalisation d'une API RESTful sécurisée et d'une base de donnée MongoDB</li>
                  <li><strong>Projet 7 :</strong> création d'un réseau social avec framework front-end, API et base de données SQL</li>
                </ul>
                <p>Code complet et détail des projets sur <a href="https://github.com/ClemenceBonneaud" target="_blank">GitHub</a></p>
          </div>

          <div id="chronologie-stop"> <!-- élément de séparation -->
            <p>Et avant ça</p>
          </div>

          <figure class="chronologie__image chronologie__image--right">
            <animated-component animation-type="fade">
              <img alt="image de chimpanzé" src="/images/monkey.png"/>
            </animated-component>
          </figure>
          <div class="chronologie--left">
            <div class="point-chronologie__plein point-chronologie__plein--left"></div>
              <p class="chronologie--date"><strong>10 mois (2018-2020)</strong></p>
            <h2>Collaboratrice scientifique</h2>
              <h3>Université de Neuchâtel - Suisse</h3>
                <p><strong>Réalisation de projets multiples en éthologie animale et humaine</strong><br>
                Programmation MatLab<br>
                Présentations, rapports et rédaction d'un article scientifique en anglais</p>
          </div>

          <figure class="chronologie__image chronologie__image--left">
            <animated-component animation-type="fade">
              <img alt="image d'oiseau" src="/images/bird.png"/>
            </animated-component>
          </figure>
          <div class="chronologie--right" id="chrono-last">
            <div class="point-chronologie__plein point-chronologie__plein--right"></div>
              <p class="chronologie--date"><strong>2018</strong></p>
            <h2>Diplôme en éthologie</h2>
              <h3>Université de Paris 13</h3>
                <h4>Stage de M2</h4>
                  <p class="chronologie-lieu">Université de St Andrews - Écosse <br>Budongo Conservation Field 
                  Station - Ouganda </p>
                  <p>Étude comportementale d'une population sauvage de chimpanzés</p><br>
                <h4>Stage de M1</h4>
                  <p class="chronologie-lieu">Université de St Andrews - Écosse<br></p>
                  <p>Participation à une étude comportementale de diamant mandarins</p>
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
  name: "Experiences",
  path: "/experiences",
  components: {
    AnimatedComponent
  },
  data() {
    return {
        hover: "",
        title: "Expériences",
    };
  }
};

</script>

<!-- ////////////////////////////////////////////////// -->
<!--                       STYLE                        -->
<!-- ////////////////////////////////////////////////// -->

<style lang="scss">

.chronologie {
  &--contenu {
    margin-top: -770px;
  }
  &--left {
    text-align: right;
    margin-right:  60%;
    margin-left:   5%;
    margin-bottom: 100px;
    margin-top:    100px;
  }
  &--right {
    text-align: left;
    margin-left:   60%;
    margin-right:  5%;
    margin-bottom: 100px;
    margin-top:    100px;
  }
  &__image {
    &--left {
      text-align: right;
      & img {
        position: absolute;
        height: 150px;
        margin-top: 20px;
        right: 60%;
        @media screen and (max-width: 1024px){
          right: 53%;
        }
      }
    }
    &--right {
      text-align: left;
      & img {
        position: absolute;
        height: 150px;
        margin-top: 20px;
        left: 70%;
      }
    }
  }
  & ul {
    margin-left: 60px;
    text-indent: -70px;
    list-style-type: none;
  }
  & li {
    margin-bottom: 10px;
  }
  & h4 {
    margin-left: 20px;
  }
}

#first-img {
  margin-top: 60px;
  margin-bottom: -100px;
}

#chrono-first {
  margin-top: 100px;
}

#chrono-last {
  margin-bottom: 200px;
}

.chronologie-lieu {
  font-weight: 400;
}

</style>