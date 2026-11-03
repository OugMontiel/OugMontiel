<template>
  <article class="resume" data-page="resume">
    <header>
      <h2 class="h2 articleTitle">{{ t('resume.title') }}</h2>
    </header>

    <section
      class="timeline"
      v-for="(section, index) in t('resume.resumeSections')"
      :key="index"
    >
      <div class="title-wrapper">
        <div class="icon-box">
          <ion-icon :name="section.icon"></ion-icon>
        </div>
        <h3 class="h3">{{ section.title }}</h3>
      </div>

      <ol class="timeline-list">
        <li
          class="timeline-item"
          v-for="(item, idx) in section.items"
          :key="idx"
        >
          <h4 class="h4 timeline-item-title">{{ item.title }}</h4>
          <span>{{ item.date }}</span>
          <p class="timeline-text">{{ item.description }}</p>
        </li>
      </ol>
    </section>

    <section class="skill">
      <h3 class="h3 skills-title">{{ t('resume.skillsTitle') }}</h3>
      <ul class="skills-list content-card">
        <li
          class="skills-item"
          v-for="(skill, index) in t('resume.skills')"
          :key="index"
        >
          <a :href="skill.link" target="_blank" rel="noreferrer">
            <img :src="skill.icon" :alt="skill.name" width="36" height="36" />
          </a>
        </li>
      </ul>
    </section>
  </article>
</template>

<script>
import { mapState } from 'pinia'
import { useI18nStore } from '../../stores/i18nStore'

export default {
  name: 'ResumeMyPortafolio',
  computed: {
    ...mapState(useI18nStore, ['t']),
  },
}
</script>

<style>
.articleTitle {
  margin-bottom: 30px;
}

/**
 * education and experience 
 */

.timeline {
  margin-bottom: 30px;
}

.timeline .title-wrapper {
  display: flex;
  align-items: center;
  gap: 15px;
  margin-bottom: 25px;
}

.timeline-list {
  font-size: var(--fs-6);
  margin-left: 45px;
}

.timeline-item {
  position: relative;
}

.timeline-item:not(:last-child) {
  margin-bottom: 20px;
}

.timeline-item-title {
  font-size: var(--fs-6);
  line-height: 1.3;
  margin-bottom: 7px;
}

.timeline-list span {
  color: var(--vegas-gold);
  font-weight: var(--fw-400);
  line-height: 1.6;
}

.timeline-item:not(:last-child)::before {
  content: '';
  position: absolute;
  top: -25px;
  left: -30px;
  width: 1px;
  height: calc(100% + 50px);
  background: var(--jet);
}

.timeline-item::after {
  content: '';
  position: absolute;
  top: 5px;
  left: -33px;
  height: 6px;
  width: 6px;
  background: var(--text-gradient-yellow);
  border-radius: 50%;
  box-shadow: 0 0 0 4px var(--jet);
}

.timeline-text {
  color: var(--light-gray);
  font-weight: var(--fw-300);
  line-height: 1.6;
}

/**
 * skills 
 */

.skills-title {
  margin-bottom: 20px;
}

.skills-list {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(100px, 1fr));
  padding: 20px;
}

.skills-item:not(:last-child) {
  margin-bottom: 15px;
}

.skill .title-wrapper {
  display: flex;
  align-items: center;
  gap: 5px;
  margin-bottom: 8px;
}

.skill .title-wrapper data {
  color: var(--light-gray);
  font-size: var(--fs-7);
  font-weight: var(--fw-300);
}

.skill-progress-bg {
  background: var(--jet);
  width: 100%;
  height: 8px;
  border-radius: 10px;
}

.skill-progress-fill {
  background: var(--text-gradient-yellow);
  height: 100%;
  border-radius: inherit;
}
</style>
