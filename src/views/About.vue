<!-- ////////////////////////////////////////////////// -->
<!--                      TEMPLATE                      -->
<!-- ////////////////////////////////////////////////// -->

<template>
    <!-- Header -->
    <header>
        <div class="header-border header-border--1"></div>
        <div class="header-border header-border--2"></div>
        <a href="#about"><h1>{{ title }}</h1></a>
    </header>

    <section class="section section__about" id="about">

      <div class="about about__pro">
        <figure>
          <img alt="photo de Clémence Bonneaud AKA moi" src="/images/moi.jpg" /> 
          <figcaption>Une tentative d'immitation de la Joconde</figcaption>
        </figure>

        <div class="about--texte">
          <h2> Je suis une développeuse web junior avec une affinité pour le front-end.</h2>
            <p> J'ai découvert la programmation à travers mon ancien travail dans la recherche scientifique
              (R / MatLab) et j'ai décidé de tout arrêter pour me consacrer à cette discipline.</p>
            <p>J'ai suivi la formation complète d'OpenClassrooms à travers laquelle j'ai travaillé sur de 
              nombreux projets.</p>
            <p>Je travaille actuellement avec JavaScript via Vue.js (bien qu'il m'arrive d'utiliser du JS natif), 
              mais je ne suis pas contre apprendre un autre framework. J'ai déjà créé et travaillé avec des 
              API RESTful, des bases de données (sql et no-sql) et sur les qualités SEO et accessibilité 
              d'un site.
              </p>
        </div>
      </div>

      <div class="about about__perso">

        <div class="about--texte">
          <h2>Et en dehors du code ?</h2>
            <p>Dans une vie antérieure j'étudiais les capacités cognitives des animaux, et plus précisément 
              celle des chimpanzés. Qu'ils soient sauvages ou en parc animalier, mon but était de les observer, 
              parfois de leur proposer des jeux libre d'accès, programmés sur écran tactile, pour voir de quoi 
              ils sont capables.</p>
            <p>Je suis de manière générale très curieuse, j'ai toujours envie d'apprendre de nouvelles choses.
              C'est pourquoi à travers les années je me suis passionnée de voyages, de photo, de langues, de 
              sports, de moto, de lectures, ...
              </p>
        </div>

        <figure>
          <img alt="photo de Clémence Bonneaud AKA moi" src="/images/moi2.jpg" /> 
          <figcaption>Une tentative d'immitation de Jane Goodall</figcaption>
        </figure>
      </div>
    </section>

</template>

<!-- ////////////////////////////////////////////////// -->
<!--                       SCRIPT                       -->
<!-- ////////////////////////////////////////////////// -->

<script>

export default {
  name: "About",
  path: "/about",
  props: [""],
  data() {
    return {
        hover: "",
        title: "A propos",
    };
  }
};
</script>

<!-- ////////////////////////////////////////////////// -->
<!--                       STYLE                        -->
<!-- ////////////////////////////////////////////////// -->

<style lang="scss">

.section__about {
  margin-left: 50px;
  width: 90%;
  & figure {
    width:  200px;
    height: 200px;
  }
  & img {
    width:  100%;
    height: 100%;
    border-radius: 80px;
    object-fit: cover;
  }
  & figcaption {
    font-size: 14px;
    font-weight: 400;
    text-align: center;
    width: 90%;
    margin-left:  auto;
    margin-right: auto;
    margin-top:   5px;
  }
}

.about {
  display: flex;
  margin-bottom: 40px;
  margin-top:    10px;
  &--texte {
    width: 70%;
  }
}

</style>