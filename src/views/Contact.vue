<!-- ////////////////////////////////////////////////// -->
<!--                      TEMPLATE                      -->
<!-- ////////////////////////////////////////////////// -->

<template>
    <!-- Header -->
    <header>
        <div class="header-border header-border--1"></div>
        <div class="header-border header-border--2"></div>
        <a href="#contacts"><h1>{{ title }}</h1></a>
    </header>

    <section class="section section__contact" id="contacts">

      <article id="contact-recherche">
        <h2>En ce moment, je suis à la recherche de :</h2>
          <h3>Une opportunité en front-end en Suisse Romande (ou proche Suisse romande) ou en full-remote.</h3>
            <p>Je cherche avant tout une entreprise dans laquelle je pourrais travailler en équipe 
              avec d'autres développeurs, un endroit où je pourrais mettre à l'épreuve mes 
              capacités, relever des challenges, et surtout continuer encore et toujours 
              à apprendre et à progresser.
            </p><br>
      </article>

      <article id="contact-liens">
        <h2 id="titre-cartes">Alors si mon profil vous intéresse, ou si vous voulez simplement discuter :</h2>
          <ul>
            <li>
              <span>Retrouvez-moi directement sur <br><br><a href="https://www.linkedin.com/in/cl%C3%A9mence-bonneaud-570a9514b/" target= "_blank">
              LinkedIn</a><br><br> sous le nom "Clémence Bonneaud" (surprenant non ?)</span>
              <div class="open open__top open__top-left"></div>
              <div class="open open__top open--middle open__top-middle"></div>
              <div class="open open__top open--right open__top-right"></div>
              <div class="open open__bottom open--right open__bottom-right"></div>
              <div class="open open__bottom open--middle open__bottom-middle"></div>
              <div class="open open__bottom open__bottom-left"></div>
            </li>

            <li>
              <span>Si vous préférez les email, vous pouvez m'en envoyer un à l'adresse 
              <br><br><a href="mailto:clemence.bonneaud@gmail.com" target= "_blank">clemence.bonneaud@gmail.com</a><br><br> 
              (toujours aussi imprévisible !)</span>
              <div class="open open__top open__top-left"></div>
              <div class="open open__top open--middle open__top-middle"></div>
              <div class="open open__top open--right open__top-right"></div>
              <div class="open open__bottom open--right open__bottom-right"></div>
              <div class="open open__bottom open--middle open__bottom-middle"></div>
              <div class="open open__bottom open__bottom-left"></div>
            </li>

            <li>
              <span>Pour m'avoir directement, de vive voix, appelez moi au <br><br><a href="tel:+33683148024" target= "_blank">+33683148024</a><br><br> 
            (celui-là normalement vous n'aviez pas pu le deviner)</span>
              <div class="open open__top open__top-left"></div>
              <div class="open open__top open--middle open__top-middle"></div>
              <div class="open open__top open--right open__top-right"></div>
              <div class="open open__bottom open--right open__bottom-right"></div>
              <div class="open open__bottom open--middle open__bottom-middle"></div>
              <div class="open open__bottom open__bottom-left"></div>
            </li>
          </ul>
      </article>
    </section>

</template>

<!-- ////////////////////////////////////////////////// -->
<!--                       SCRIPT                       -->
<!-- ////////////////////////////////////////////////// -->

<script>

export default {
  name: "Contact",
  path: "/contact",
  props: [""],
  data() {
    return {
        hover: "",
        title: "Contactez-moi !",
    };
  }
};
</script>

<!-- ////////////////////////////////////////////////// -->
<!--                       STYLE                        -->
<!-- ////////////////////////////////////////////////// -->

<style lang="scss">

.section__contact {
  width: 90%;
  margin-left:  auto;
  margin-right: auto;

  & li {
    list-style-type: none;
  }
  & h2 {
    margin-bottom: 50px;
  }
  & #titre-cartes {
    margin-bottom: 100px;
  }
}

#contact-recherche {
  width: 100%;
  text-align: center;
  margin-bottom: 40px;
}

#contact-liens {
  width: 100%;
  text-align: center;
  & ul {
    display: flex;
    justify-content: space-between;
    width: 100%;
    padding: 0;
    @media screen and (max-width: 1180px){
      flex-direction: column;
    }
  }
  & li {
    margin-bottom: 10px;
    height: 200px;
    width: 300px;
    display: flex;
    align-items: center;
    & span {
      padding: 10px;
      z-index: 1;
    }
    & a {
      font-weight: 400;
    }
    &:hover {
      & .open {
        transform: rotate(180deg);
      }
    }
    @media screen and (max-width: 1180px){
      margin-left:  auto;
      margin-right: auto;
      margin-bottom: 100px;
    }
  }
}

.open {
  position: absolute;
  width: 100px;
  height: 100px;
  z-index: -1px;
  transition: all 1000ms ease-in-out;
  &__top {
    margin-top: -100px;
  }
  &__bottom {
    margin-top: 100px;
  }
  &--right {
    margin-left: 200px;
  }
  &--middle {
    margin-left: 100px;
  }
  &__top-left {
    transform-origin: top left;
  }
  &__top-middle {
    transform-origin: top;
  }
  &__top-right {
    transform-origin: top right;
  }
  &__bottom-right {
    transform-origin: bottom right;
  }
  &__bottom-middle {
    transform-origin: bottom;
  }
  &__bottom-left {
    transform-origin: bottom left;
  }
}

</style>