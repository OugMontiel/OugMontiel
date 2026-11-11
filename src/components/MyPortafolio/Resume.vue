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
          <ion-icon :name="section.icon" aria-hidden="true"></ion-icon>
        </div>
        <h3 class="h3">{{ section.title }}</h3>
      </div>

      <ol class="timeline-list">
        <li
          class="timeline-item"
          v-for="(item, idx) in showAllItems[index]
            ? section.items
            : section.items.slice(0, 3)"
          :key="idx"
        >
          <h4 class="h4 timeline-item-title">{{ item.title }}</h4>
          <time>{{ item.date }}</time>
          <p class="timeline-text">{{ item.description }}</p>
        </li>
      </ol>

      <button
        v-if="section.items.length > 3"
        type="button"
        class="resum-btn"
        @click="toggleSection(index)"
      >
        <ion-icon
          :name="showAllItems[index] ? 'chevron-up' : 'chevron-down'"
          aria-hidden="true"
        ></ion-icon>
        <span>{{
          showAllItems[index] ? t('resume.showLess') : t('resume.showMore')
        }}</span>
      </button>
    </section>

    <section class="skill">
      <h3 class="h3 skills-title">{{ t('resume.skillsTitle') }}</h3>

      <div class="skills-content content-card">
        <div
          class="skill-category"
          v-for="(group, index) in t('resume.skills')"
          :key="index"
        >
          <h4 class="h4 skill-category-title">{{ group.category }}</h4>

          <ul class="skills-list">
            <li
              class="skills-item"
              v-for="(skill, idx) in group.list"
              :key="idx"
            >
              <a
                :href="skill.link"
                target="_blank"
                rel="noopener noreferrer"
                :aria-label="skill.name"
                :title="skill.name"
              >
                <img
                  :src="skill.icon"
                  :alt="skill.name"
                  width="36"
                  height="36"
                />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </section>
  </article>
</template>

<script>
import { mapState } from 'pinia'
import { useI18nStore } from '../../stores/i18nStore'

export default {
  name: 'ResumeMyPortafolio',
  data() {
    return {
      showAllItems: {},
    }
  },
  computed: {
    ...mapState(useI18nStore, ['t']),
  },
  methods: {
    toggleSection(index) {
      this.showAllItems[index] = !this.showAllItems[index]
    },
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
  font-size: var(--fs-5);
  margin-left: 45px;
}

.timeline-item {
  position: relative;
}

.timeline-item:not(:last-child) {
  margin-bottom: 20px;
}

.timeline-item-title {
  font-size: var(--fs-3);
  line-height: 1.4;
  margin-bottom: 7px;
}

.timeline-list time {
  color: var(--vegas-gold);
  font-size: var(--fs-6);
  font-weight: var(--fw-500);
  line-height: 1.6;
  margin-bottom: 6px;
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

.resum-btn {
  position: relative;
  width: calc(100% - 45px);
  margin-top: 20px;
  margin-left: 45px;
  padding: 12px 20px;
  background: var(--border-gradient-onyx);
  color: var(--orange-yellow-crayola);
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  border-radius: 14px;
  font-size: var(--fs-6);
  box-shadow: var(--shadow-3);
  z-index: 1;
  transition: var(--transition-1);
}

.resum-btn::before {
  content: '';
  position: absolute;
  inset: 1px;
  background: var(--bg-gradient-jet);
  border-radius: inherit;
  z-index: -1;
  transition: var(--transition-1);
}

.resum-btn ion-icon {
  font-size: 16px;
}

.resum-btn:hover {
  background: var(--bg-gradient-yellow-1);
}

.resum-btn:hover::before {
  background: var(--bg-gradient-yellow-2);
}

/**
 * skills 
 */

.skills-title {
  margin-bottom: 20px;
}

.skills-content {
  padding: 25px;
  cursor: default;
}

.skill-category:not(:last-child) {
  margin-bottom: 25px;
  padding-bottom: 20px;
  border-bottom: 1px solid var(--jet);
}

.skill-category-title {
  color: var(--white-2);
  font-size: var(--fs-4);
  font-weight: var(--fw-500);
  margin-bottom: 15px;
}

.skills-list {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(80px, 1fr));
  gap: 15px;
  align-items: center;
}

.skills-item a {
  display: flex;
  justify-content: center;
  align-items: center;
  transition: transform var(--transition-1);
}

.skills-item a:hover {
  transform: scale(1.12);
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
