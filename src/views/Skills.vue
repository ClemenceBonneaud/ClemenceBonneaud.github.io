<!-- ////////////////////////////////////////////////// -->
<!--                      TEMPLATE                      -->
<!-- ////////////////////////////////////////////////// -->

<template>
    <!-- Header -->
    <header>
        <div class="header-border header-border--1"></div>
        <div class="header-border header-border--2"></div>
        <a href="#skills"><h1>{{ title }}</h1></a>
    </header>

    <section class="section section__skills" id="skills">

      <article class="skills skills__pro">
        <div class="skills__pro--classe">
          <p id="experte">Experte</p>
          <p id="debutante">Débutante</p>
        </div>

        <div class="skills__pro--fleche"></div>

        <div class="skills__pro--liste skills-pro">
          <p class="liste liste--1">Anglais</p>
          <div class="barre barre__anglais barre--1"></div>

          <p class="liste liste--2">HTML</p>
          <div class="barre barre__html barre--2"></div>

          <p class="liste liste--3">CSS / SCSS</p>
          <div class="barre barre__css barre--3"></div>

          <p class="liste liste--4">JavaScript / Vue.js / node.js</p>
          <div class="barre barre__js barre--4"></div>

          <p class="liste liste--5">Git</p>
          <div class="barre barre__git barre--5"></div>

          <p class="liste liste--6">API RESTful</p>
          <div class="barre barre__api barre--6"></div>

          <p class="liste liste--7">MySql</p>
          <div class="barre barre__sql barre--7"></div>

          <p class="liste liste--8">SEO / Accessibilité</p>
          <div class="barre barre__seo barre--8"></div>
        </div>

      </article>

      <article class="skills skills__perso">
        <div class="btn-wrapper" @mouseup="btnMouseUp">
          <button type="button" class="btn" ref="btn"  @click="btnClick"><a href="#comp__slide2">Mes soft skills</a></button>
          <!-- <p ref="comp"></p> -->
          <ol>
            <li id="comp__slide1"
                tabindex="0"
                class="comp__slide"> Clique sur le bouton </li>
            <li id="comp__slide2"
                tabindex="1"
                class="comp__slide">autonome</li>
            <li id="comp__slide3"
                tabindex="2"
                class="comp__slide">curieuse</li>
            <li id="comp__slide4"
                tabindex="3"
                class="comp__slide">envie d'apprendre</li>
            <li id="comp__slide5"
                tabindex="4"
                class="comp__slide">capable de s'adapter</li>
            <li id="comp__slide6"
                tabindex="5"
                class="comp__slide one-line">plutôt sympa</li>
            <li id="comp__slide7"
                tabindex="6"
                class="comp__slide two-lines">peut toucher son nez avec sa langue</li>
            <li id="comp__slide8"
                tabindex="7"
                class="comp__slide two-lines">a menti sur le point précédent</li>
            <li id="comp__slide9"
                tabindex="8"
                class="comp__slide one-line">// insert skill</li>
            <li id="comp__slide10"
                tabindex="9"
                class="comp__slide two-lines">a très bon sens de l'humour !</li>
          </ol>
        </div>
      </article>

    </section>

</template>

<!-- ////////////////////////////////////////////////// -->
<!--                       SCRIPT                       -->
<!-- ////////////////////////////////////////////////// -->

<script>

export default {
  name: "Skills",
  path: "/skills",
  props: [""],
  data() {
    return {
        hover: "",
        title: "Compétences",
        btnTxt: [
          '<a href="#comp__slide3">encore un !</a>',
          '<a href="#comp__slide4">pas encore convaincu ?</a>',
          '<a href="#comp__slide5">je peux faire ça toute la journée',
          '<a href="#comp__slide6">vous allez me faire rougir ..',
          '<a href="#comp__slide7">ça commence à être gênant',
          "<a href='#comp__slide8'>vous l'aurez cherché !",
          '<a href="#comp__slide9">je vous laisse vous amuser',
          '<a href="#comp__slide10">prévenez-moi quand vous aurez fini',
          '<a href="#comp__slide1">et bien évidemment ..'
        ],
        // compTxt: [
        //   'autonome',
        //   'curieuse',
        //   "envie d'apprendre",
        //   "capable de s'adapter",
        //   "plutôt sympa",
        //   "peut toucher son nez avec sa langue",
        //   "a menti sur le point précédent",
        //   "// insert skill",
        //   "a très bon sens de l'humour !"
        // ],
        btn: document.getElementsByClassName('btn')[0],
        txtPosition: 0,
        compPosition: 0,
        yValue: 0
    };
  },

  computed: {
    y () {
      return `transform: translateY(${ this.yValue }px)`
    }
  },

  methods: {
    changeText(){
      if(this.txtPosition !== this.btnTxt.length){
        this.$refs.btn.innerHTML = this.btnTxt[this.txtPosition];
        this.txtPosition += 1;
      } else {
        this.$refs.btn.innerHTML = "<a href='#comp__slide2'>Mes soft skills</a>";
        this.txtPosition = 0;
      }
    },

    // changeComp(){
    //   if(this.compPosition !== this.compTxt.length){
    //     this.$refs.comp.innerHTML = this.compTxt[this.compPosition];
    //     this.compPosition += 1;
    //   } else {
    //     this.$refs.comp.innerHTML = "";
    //     this.compPosition = 0;
    //   }
    // },

    changeStyle(){
      if(this.txtPosition == 0){
        this.$refs.btn.style.background = '';
        this.$refs.btn.style.fontSize = '';
      } else {
        this.$refs.btn.style.background = 'rgb(' + this.ranRgb() + ')';
        this.$refs.btn.style.fontSize = '20px';
      }
    },

    listUp(){
      if(this.yValue > 500){
        this.yValue = 0;
      } else {
        this.yValue -= 30;
      }
    },

    ranRgb(){
      var colors = [
        '233, 150, 122',
        '0, 101, 111',
        '102, 103, 171'
      ];
      
      var i = parseInt(Math.random() * 3);
      
      return colors[i];
    },

    btnClick(){
      this.changeText();
      // this.changeComp();
      this.changeStyle();
      this.listUp();
    },
  }
};

</script>

<!-- ////////////////////////////////////////////////// -->
<!--                       STYLE                        -->
<!-- ////////////////////////////////////////////////// -->

<style lang="scss">

.section__skills {
  display: flex;
  justify-content: space-between;
  margin-left: 50px;
  width: 90%;
  @media screen and (max-width: 1024px){
    flex-direction: column;
  }
}

.skills {
  &__pro {
    display: flex;
    justify-content: space-between;
    width: 300px;
    &--fleche {
      height: 500px;
      width: 5px;
      margin-left:  15px;
      margin-right: 15px;
      animation: allonge 2400ms both ease-in-out;
    
    }
    &--classe {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      text-align: right;
    }
    &--liste p {
      font-size: 15px;
      margin-bottom: 5px;
    }
    @media screen and (max-width: 1024px){
      margin-left:  auto;
      margin-right: auto;
    }
  }
  &__perso {
    width: 50%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    & p {
      width: 250px;
      margin-right: auto;
      margin-left:  auto;
      height: 100px;
      font-size: 25px;
      font-weight: 100;
    }
    @media screen and (max-width: 1024px){
      margin-left:  auto;
      margin-right: auto;
      width: 100%;
    }
  }
}

.barre {
  width: 300px;
  height: 3px;
  margin-bottom: 35px;
  &__anglais {
    width: 100%;
  }
  &__html {
    width: 90%;
  }
  &__css {
    width: 90%;
  }
  &__js {
    width: 70%;
  }
  &__git {
    width: 70%;
  }
  &__api {
    width: 60%;
  }
  &__sql {
    width: 50%;
  }
  &__seo {
    width: 50%;
  }
}

.btn-wrapper{
  position: fixed;
  top: calc(40% - 22px);
  width: 100%;
  height: 200px;
  text-align: center;
  @media screen and (max-width: 1024px){
    position: unset;
    margin-top:    80px;
    margin-bottom: 60px;
  }
  & a {
    color: black;
  }
  & ol {
    height: 74px;
    width: 200px;
    overflow-x: hidden;
    scroll-behavior: smooth;
    border-radius: 30px;
    list-style-type: none;
    padding: 0;
    margin-right: auto;
    margin-left: auto;
    -ms-overflow-style: none;
    scrollbar-width: none;
    &::-webkit-scrollbar {
      display: none;
    }
  }
  & li {
    padding-top: 25px;
    &:first-child {
      padding-top:    20px;
      padding-bottom: 30px;
    }
    &:last-child {
      padding-bottom: 20px;
    }
  }
}

.two-lines {
  padding-top: 15px !important;
}

.one-line {
  padding-bottom: 10px;
}

.btn {
  display: inline-block;
  box-shadow: none;
  appearance: none;
  border: 0;
  outline: 0;
  height: 45px;
  line-height: 42px;
  padding: 0 30px;
  font-size: 25px;
  border-radius: 30px;
  color: black;
  cursor: pointer;
  transition: all .5s;
  transition-timing-function: cubic-bezier(.2, 3, .4, 1);
  user-select: none;
  
  &:hover{
    transform: scale(1.1, 1.1);
  }
  
  &:active{
    transform: scale(1.05, 1.05);
  }
}

// Animations 

//// Ligne verticale qui s'allonge
.skills--fleche {
  animation: allonge 2400ms both ease-in-out;  
}

@keyframes allonge {
  0% {
    height: 50px;
  }
  100% {
    height: 500px;
  }
}

//// Mot "débutante" qui apparaît
#debutante {
  animation: apparition-debutante 1000ms both;
  animation-delay: 2000ms;
}

@keyframes apparition-debutante {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}

//// Mots de la liste de compétences qui apparaissent
.liste {
  animation: apparition 2400ms both;
  @for $i from 1 through 8 {
    &--#{$i} {
      animation-delay: 300ms * $i;
    }
  }
}

@keyframes apparition {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}

//// Barres de niveau de compétences qui apparaissent
.barre {
  animation: glissement 2400ms both;
  @for $i from 1 through 8 {
    &--#{$i} {
      animation-delay: 300ms * $i;
    }
  }
}

@keyframes glissement {
  0% {
    width: 0%;
  }
  100% {
    width: 100;
  }
}

</style>