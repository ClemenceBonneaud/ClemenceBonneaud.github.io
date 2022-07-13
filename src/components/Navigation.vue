<!-- ////////////////////////////////////////////////// -->
<!--                      TEMPLATE                      -->
<!-- ////////////////////////////////////////////////// -->

<template>
  <nav class="navigation navigation--home shadow">
    <router-link to="/" @click="selectedTab(0)" class="groupe groupe--logo shadow-bottom">
      <figure>
        <img src="/images/Logo.png" alt="logo CB"/>
      </figure>
      <p> Développeuse web <br>Junior</p>
    </router-link>
    <div class="groupe groupe--liens">
      <router-link to="/about"       @click="selectedTab(1)"  :class="this.$store.state.activeTab === 1 ? 'nav-active' : 'nav-notActive' ">A PROPOS</router-link>
      <router-link to="/skills"      @click="selectedTab(2)"  :class="this.$store.state.activeTab === 2 ? 'nav-active' : 'nav-notActive' ">COMPÉTENCES</router-link>
      <router-link to="/experiences" @click="selectedTab(3)"  :class="this.$store.state.activeTab === 3 ? 'nav-active' : 'nav-notActive' ">EXPÉRIENCES</router-link>
      <router-link to="/projects"    @click="selectedTab(4)"  :class="this.$store.state.activeTab === 4 ? 'nav-active' : 'nav-notActive' ">PROJETS</router-link>
      <router-link to="/contact"     @click="selectedTab(5)"  :class="this.$store.state.activeTab === 5 ? 'nav-active' : 'nav-notActive' ">CONTACTEZ-MOI !</router-link>
      <router-link to="/game"        @click="selectedTab(6)"  :class="this.$store.state.activeTab === 6 ? 'nav-active' : 'nav-notActive' ">PAUSE JEU ?</router-link>
    </div>
    <div id="nav-logos">
      <div class="nav-logo">
        <a href="https://www.linkedin.com/in/clémence-bonneaud-570a9514b/" target="_blank">
          <figure>
            <img src="/images/linkedin.png" alt="logo linkedin" />
          </figure>
        </a>
      </div>
            <div class="nav-logo">
        <a href="https://github.com/ClemenceBonneaud" target="_blank">
          <figure>
            <img src="/images/github.png" alt="logo github" />
          </figure>
        </a>
      </div>
            <div class="nav-logo">
        <a href="mailto:clemence.bonneaud@gmail.com" target="_blank">
          <figure>
            <img src="/images/email.png" alt="logo email" />
          </figure>
        </a>
      </div>
    </div>
  </nav>
</template>

<!-- ////////////////////////////////////////////////// -->
<!--                       SCRIPT                       -->
<!-- ////////////////////////////////////////////////// -->
<script>

export default {
  methods: {
    selectedTab: function(tabNumber) {
      this.$store.commit("myTab", tabNumber);
    }
  }
}
</script>


<!-- ////////////////////////////////////////////////// -->
<!--                       STYLE                        -->
<!-- ////////////////////////////////////////////////// -->

<style lang="scss">



</style>
