<template>
  <div id="app">
    <SidebarMyPortafolio />
    <div class="main-content">
      <NavbarMyPortafolio />
      <AboutMyPortafolio />
      <ResumeMyPortafolio />
      <PortfolioMyPortafolio />
      <BlogMyPortafolio />
      <ContactMyPortafolio />
    </div>
  </div>
</template>

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
