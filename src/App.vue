<script setup>
import { RouterLink, RouterView } from 'vue-router'
import Navigation from '@/components/Navigation.vue'
</script>

<template>
  <Navigation />

  <RouterView />
</template>

<style lang="scss">

////////////////////////////////////////////////////
///// Utils /////

// Variables

$color-primary: #E9967A;
$color-p-transparent: transparentize(#fff600, 0.2);

$color-s-dark: #000000;
$color-secondary: #111111;
$color-s-light: #181818;

$color-tertiary: #00656f;
$color-t-transparent: transparentize(#e3363c, 0.2);

$color-quaternary: #6667AB;

$color-text-dark: rgb(100,100,100);
$color-text: #d9d9d9;
$color-text-light: white;

$gradient:
  radial-gradient(ellipse at top left,     rgba(0,101,111,1)   5%,  rgba(102,103,171,0) 50%),
  radial-gradient(ellipse at top right,    rgba(233,150,122,1) 5%,  rgba(102,103,171,0) 70%),
  radial-gradient(ellipse at bottom,       rgba(102,103,171,1) 30%, rgba(233,150,122,0) 80%),
  radial-gradient(ellipse at bottom right, rgba(102,103,171,1) 30%, rgba(233,150,122,0) 90%),
  radial-gradient(ellipse at bottom left,  rgba(0,101,111,1)   10%, rgba(0,101,111,0)   90%),
  radial-gradient(ellipse at top,          rgba(102,103,171,1) 20%, rgba(0,101,111,0)   90%),
  radial-gradient(ellipse at left,         rgba(233,150,122,1) 5%,  rgba(0,101,111,0)   50%);

////////////////////////////////////////////////////
///// Général /////

body {
  background-color: $color-s-light;
  margin-left: 170px;
  margin-right:  0;
  margin-bottom: 0;
  margin-top:    0;
  height: calc(100vh - 100px);
}

#app {
  height: 100%;
}

a {
  text-decoration: none;
}

.shadow {
  box-shadow: $color-s-dark 0px 0px 10px 0px;
}

.shadow-bottom {
  box-shadow: $color-s-dark 0px 2px 10px -2px;
}

// Typology

h1,
h2,
h3,
h4,
p,
a,
li,
form,
button,
div {
  font-family: Roboto, Helvetica, Arial, sans-serif;
  color: $color-text;
}

h1 {
  color: $color-text-light;
}

h2 {
  font-weight: 600;
}

h3 {
  font-weight: 500;
}

h4 {
  font-weight: 300;
}

p, 
li {
  font-weight: 100;
  font-size: 18px;
}

a {
  text-decoration: none;
  color: $color-quaternary;
  font-weight: 400;
  &:hover {
    color: $color-primary;
  }
}

figcaption {
  color: $color-text-dark;
}

////////////////////////////////////////////////////
///// Components /////

// Navigation
nav {
  background-color: $color-secondary;
  display: flex;
  flex-direction: column;
  float: left;
  width: 170px;
  height: 100%;
  position: fixed;
  left: 0;
  top: 0;
  text-align: center;
  z-index: 5;
  & figure {
    width: 80px;
    display: block;
    margin-left:  auto;
    margin-right: auto;
  }
  & img {
    width: 100%;
  }
  & p {
    font-size: 18px;
  }
}

.groupe {
  &--logo {
    background-color: $color-s-dark;
    height: 180px;
    padding-top: 20px;
  }
  &--liens {
    display: flex;
    flex-direction: column;
    & a {
      color: $color-text;
      font-size: 14px;
      border-bottom: 1px solid transparentize($color-s-light, 0.1);
      padding-top:    15px;
      padding-bottom: 15px;
      &:first-child {
        margin-top: 30px;
        border-top: 1px solid transparentize($color-s-light, 0.1);
      }
      font-weight: 300;
      transition: background-color 400ms;
      &:hover {
          cursor: pointer;
          background-color: $color-primary;
          color: $color-s-dark;
          font-weight: 600;
      }
    }
  }
}

.nav-active {
  background-color: $color-quaternary;
  color: black;
  font-weight: 600;
}

#nav-logos {
  display: flex;
  justify-content: space-evenly;
}

.nav-logo {
  margin-top: 30px;
  background-color: $color-s-light;
  width:  40px;
  height: 40px;
  border-radius: 20px;
  transition: background-color 200ms;
  & a {
    width:  100%;
    height: 100%;
    border-radius: inherit;
  }
  & figure {
    width: 70%;
    margin-top: 6px;
  }
  &:hover {
    background-color: $color-tertiary;
  }
}

// Header
header {
  position: fixed;
  width: calc(100vw - 170px);
  height: 70px;
  margin-top:  -8px;
  background-color: $color-secondary;
  z-index: 10;
  text-align: center;
  & h1 {
    font-size: 30px;
    margin-top: 15px;
  }
  &:hover {
    & .header-border--1 {
      animation: headerRight 1000ms both ease-in-out;
    }
    & .header-border--2 {
      animation: headerLeft 1000ms both ease-in-out;
    }
  }
}

// Header animation
.header-border {
  position: fixed;
  width: 0%;
  height: 70px;
  z-index: -1;
  border-bottom: 3px solid $color-primary;
  &--1 {
    animation: header 1000ms both ease-in-out;
  }
}

@keyframes header {
  0% {
    width: 0%;
  }
  50% {
    width: 80%;
  }
  100% {
    width: 0%;
    right: 0;
  }
}

@keyframes headerRight {
  0% {
    width: 0%;
    right: 50%;
  }
  50% {
    width: 100%;
    right: 0%
  }
  100% {
    width: 0%;
    right: 0%;
  }
}

@keyframes headerLeft {
  0% {
    width: 0%;
    left: 50%;
  }
  50% {
    width: 100%;
    left: 0%;
  }
  100% {
    width: 0%;
    left: 0%;
  }
}

////////////////////////////////////////////////////
///// Pages /////

.section {
  padding-top: 100px;
  color: $color-text;
}

// Page d'accueil
.section__accueil {
  background: rgb(255,255,255);
  background: $gradient;
}

// Page compétences
.skills__pro--fleche {
  background: linear-gradient($color-primary, $color-tertiary, $color-quaternary);
}

.barre {
  &__anglais {
    background-color: $color-primary;
  }
  &__html {
    background-color: rgb(138, 129, 117);
  }
  &__css {
    background-color: rgb(82, 119, 115);
  }
  &__js {
    background-color: rgb(41, 106, 111);
  }
  &__git {
    background-color: rgb(38, 102, 119);
  }
  &__api {
    background-color: rgb(37, 101, 133);
  }
  &__sql {
    background-color: rgb(64, 101, 147);
  }
  &__seo {
    background-color: $color-quaternary;
  }
}

.btn {
  background: $gradient;
}

// Page expériences
#chronologie-stop {
  text-align: center;
  background-color: $color-s-light;
  width: 30%;
  margin-left: auto;
  margin-right: auto;
  z-index: 6;
  & p {
    font-size: 20px;
    font-weight: 100;
    padding-bottom: 60px;
    padding-top: 20px;
    border-top: 2px solid $color-tertiary;
  }
}

#ligne-chronologie {
  position: sticky;
  z-index: -1;
  margin-top: 20px;
  top: 100px;
  width: 50%;
  height: 770px;
  border-right: 2px solid $color-tertiary;
}

#point-chronologie {
  position: sticky;
  z-index: -1;
  height: 15px;
  width:  15px;
  margin-left: 49.3%;
  top: 240px;
  border: 2px solid $color-tertiary;
  border-radius: 10px;
  background-color: $color-s-light;
  @media screen and (max-width: 1024px){
    margin-left: 49%;
  }
}

.point-chronologie__plein {
  position: relative;
  z-index: -2;
  height: 5px;
  width:  5px;
  margin-bottom: -65px;
  border: 2px solid $color-tertiary;
  border-radius: 10px;
  background-color: $color-tertiary;
  &--left {
    left: 127.7%;
    @media screen and (max-width: 1024px){
      left: 127.3%;
    }
  }
  &--right {
    right: 29.3%;
    @media screen and (max-width: 1024px){
      right: 29.9%;
    }
  }
}

.chronologie--date {
  color: $color-primary;
}

// Page projets
.modale {
  background-color: $color-secondary;
}

.btn-modale {
  background-color: $color-primary;
}

.carte-overlay {
  color: $color-s-dark;
  background-color: $color-tertiary;
  &__texte {
    color: $color-text-light;
  }
}

// Page contact
.section__contact {
  & h2 {
    color: $color-primary;
    font-weight: 400;
  }
}

#contact-liens a {
  color: $color-text-light;
  &:hover {
    color: $color-primary;
  }
}

.open {
  background-color: $color-tertiary
}

// Page jeu
.score {
  background-color: $color-tertiary;
}

#snake {
    border: 1px solid $color-tertiary;
  }

</style>