<!-- ////////////////////////////////////////////////// -->
<!--                      TEMPLATE                      -->
<!-- ////////////////////////////////////////////////// -->

<template>

  <section class="section section__accueil">
    <div id="accueil-titre">
        <p>Bonjour,</p><br>
        <p>je suis</p>
      <h1>
          <span class="move-prim">C</span>
          <span class="move-sec">l</span>
          <span class="move-ter">é</span>
          <span class="move-sec">m</span>
          <span class="move-prim">e</span>
          <span class="move-ter">n</span>
          <span class="move-prim">c</span>
          <span class="move-ter">e</span>&nbsp
          <span class="move-sec">B</span>
          <span class="move-ter">o</span>
          <span class="move-prim">n</span>
          <span class="move-ter">n</span>
          <span class="move-sec">e</span>
          <span class="move-prim">a</span>
          <span class="move-ter">u</span>
          <span class="move-sec">d</span></h1>
        <p>développeuse web avec une affinité pour le front-end. <br>Anciennement aventurière 
          et toujours en quête de nouvelles compétences à aquérir.</p><br>
        <p>Bienvenue sur mon portfolio!</p>
    </div>
  </section>

</template>

<!-- ////////////////////////////////////////////////// -->
<!--                       SCRIPT                       -->
<!-- ////////////////////////////////////////////////// -->

<script>
export default {
  name: "Accueil",
  path: "/",
  props: [""]
};
</script>

<!-- ////////////////////////////////////////////////// -->
<!--                       STYLE                        -->
<!-- ////////////////////////////////////////////////// -->

<style lang="scss">

.section__accueil {
  padding-left: 50px;
  height: 100%;
  min-height: 100%;
  overflow-x: hidden;
  overflow-y: hidden;
}

#accueil-titre{
  width: 90%;
  margin-top: 100px;
  @media screen and (max-width: 1024px){
    margin-top: 50px;
  }
  & p {
    font-size: 25px;
    color: black;
    font-weight: 400;
    &:first-child, &:last-child {
      font-size: 35px;
      @media screen and (max-width: 1024px){
        font-size: 30px;
      }
    }
    &:last-child {
      width: 100%;
      text-align: right;
    }
    @media screen and (max-width: 1024px){
      font-size: 20px;
    }
  }
  & h1 {
    color: black;
    font-size: 60px;
    font-weight: 600;
    position: absolute;
    top: 240px;
    left: 310px;
    @media screen and (max-width: 1024px){
      font-size: 40px;
      top: 205px;
      left: 290px;
    }
  }
}

/* ANIMATIONS */

.move-prim {
  display: -moz-inline-stack;
  display: inline-block;
  &:hover {
    animation: move-sec 2000ms;
    cursor: none;
  }
}

.move-sec {
  display: -moz-inline-stack;
  display: inline-block;
  &:hover {
    animation: move-sec 2000ms;
    cursor: none;
  }
}

.move-ter {
  display: -moz-inline-stack;
  display: inline-block;
  &:hover {
    animation: move-ter 2000ms;
    cursor: none;
  }
}

@keyframes move-prim {
  0% {
    color: black;
  }
  83% {
    transform: scale(0.5, 2.5) translateY(-13px);
    color: #E9967A;
  }
  88% {
    transform: scale(2,0.5);
  }
  95% {
    transform: scale(0.9,1.2);
  }
  100% {
    color: black;
    transform: scale(1,1);
  }
}

@keyframes move-sec {
  0% {
    color: black;
  }
  83% {
    color: #00656f;
    transform: scale(0.5, 2.5) translateY(-13px);
  }
  88% {
    transform: scale(2,0.5);
  }
  95% {
    transform: scale(0.9,1.2);
  }
  100% {
    color: black;
    transform: scale(1,1);
  }
}

@keyframes move-ter {
  0% {
    color: black;
  }
  83% {
    color: #6667AB;
    transform: scale(0.5, 2.5) translateY(-13px);
  }
  88% {
    transform: scale(2,0.5);
  }
  95% {
    transform: scale(0.9,1.2);
  }
  100% {
    color: black;
    transform: scale(1,1);
  }
}

</style>