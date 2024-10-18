<template>
  <main id="app">
    <SidebarMyPortafolio />
    <div class="main-content">
      <NavbarMyPortafolio />
      <AboutMyPortafolio />
      <ResumeMyPortafolio />
      <PortfolioMyPortafolio />
      <BlogMyPortafolio />
      <ContactMyPortafolio />
    </div>
  </main>
</template>

<style>
main {
  margin: 15px 12px;
  margin-bottom: 75px;
  min-width: 259px;
}
</style>

<script>
import SidebarMyPortafolio from './components/MyPortafolio/Sidebar.vue'
import NavbarMyPortafolio from './components/MyPortafolio/Navbar.vue'
import AboutMyPortafolio from './components/MyPortafolio/About.vue'
import ResumeMyPortafolio from './components/MyPortafolio/Resume.vue'
import PortfolioMyPortafolio from './components/MyPortafolio/Portfolio.vue'
import BlogMyPortafolio from './components/MyPortafolio/Blog.vue'
import ContactMyPortafolio from './components/MyPortafolio/Contact.vue'

export default {
  components: {
    SidebarMyPortafolio,
    NavbarMyPortafolio,
    AboutMyPortafolio,
    ResumeMyPortafolio,
    PortfolioMyPortafolio,
    BlogMyPortafolio,
    ContactMyPortafolio,
  },
}
</script>
