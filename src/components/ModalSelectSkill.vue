<template>
  <div class="skill-modal-container">
    <v-card class="skill-card glass-morphism" :class="$vuetify.breakpoint.mobile ? 'mobile-card' : 'desktop-card'">
      <!-- Header com botão de fechar -->
      <div class="modal-header">
        <v-btn icon small class="close-btn" @click="$emit('close')">
          <v-icon>mdi-close</v-icon>
        </v-btn>
      </div>

      <!-- Conteúdo principal com navegação -->
      <div class="modal-content">
        <!-- Botão anterior -->
        <v-btn
          v-if="!$vuetify.breakpoint.mobile"
          icon
          class="nav-btn prev-btn"
          @click="$emit('selectPrevSkill')"
        >
          <v-icon>mdi-chevron-left</v-icon>
        </v-btn>

        <!-- Conteúdo central -->
        <div class="skill-content">
          <div class="skill-image-container" :class="{ 'mobile': $vuetify.breakpoint.mobile }">
            <v-img
              :src="selectSkillCard.img"
              :width="$vuetify.breakpoint.mobile ? '50px' : '100px'"
              :height="$vuetify.breakpoint.mobile ? '50px' : '100px'"
              contain
              class="skill-image"
            />
          </div>

          <div class="skill-info" :class="{ 'mobile': $vuetify.breakpoint.mobile }">
            <h2 class="skill-title" :class="{ 'mobile': $vuetify.breakpoint.mobile }">
              {{ selectSkillCard.name || $t('skills.selectSkill') }}
            </h2>
            
            <p class="skill-description" :class="{ 'mobile': $vuetify.breakpoint.mobile }">
              {{ selectSkillCard.description }}
            </p>
          </div>
        </div>

        <!-- Botão próximo -->
        <v-btn
          v-if="!$vuetify.breakpoint.mobile"
          icon
          class="nav-btn next-btn"
          @click="$emit('selectNextSkill')"
        >
          <v-icon>mdi-chevron-right</v-icon>
        </v-btn>
      </div>

      <!-- Navegação mobile -->
      <div v-if="$vuetify.breakpoint.mobile" class="mobile-navigation">
        <v-btn icon class="nav-btn" @click="$emit('selectPrevSkill')">
          <v-icon>mdi-chevron-left</v-icon>
        </v-btn>
        <v-btn icon class="nav-btn" @click="$emit('selectNextSkill')">
          <v-icon>mdi-chevron-right</v-icon>
        </v-btn>
      </div>
    </v-card>
  </div>
</template>

<script>
export default {
  name: "ModalSelectSkill",
  props: ["selectSkillCard"],
};
</script>

<style scoped>
.skill-modal-container {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1rem;
}

.skill-card {
  background: rgba(30, 30, 30, 0.95) !important;
  backdrop-filter: blur(20px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 24px;
  overflow: hidden;
  position: relative;
}

.desktop-card {
  width: 500px;
  padding: 1.5rem;
}

.mobile-card {
  width: 300px;
  padding: 1rem;
}

.modal-header {
  position: absolute;
  top: 1rem;
  right: 1rem;
  z-index: 1;
}

.close-btn {
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(5px);
  transition: all 0.3s ease;
}

.close-btn:hover {
  background: rgba(255, 255, 255, 0.2);
  transform: rotate(90deg);
}

.modal-content {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
  padding: 1rem;
}

.skill-content {
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.5rem;
  text-align: center;
}

.skill-image-container {
  padding: 1.5rem;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 16px;
  transition: all 0.3s ease;
}

.skill-image-container:hover {
  transform: translateY(-5px);
  background: rgba(255, 255, 255, 0.15);
}

.skill-image-container.mobile {
  padding: 1rem;
}

.skill-image {
  filter: drop-shadow(0 4px 8px rgba(0, 0, 0, 0.3));
}

.skill-info {
  width: 100%;
  max-width: 300px;
}

.skill-info.mobile {
  max-width: 200px;
}

.skill-title {
  background: linear-gradient(to right, #FFD700, #FFA500);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  font-size: 1.5rem;
  font-weight: bold;
  margin-bottom: 1rem;
}

.skill-title.mobile {
  font-size: 1.2rem;
}

.skill-description {
  color: rgba(255, 255, 255, 0.9);
  font-size: 1rem;
  line-height: 1.6;
}

.skill-description.mobile {
  font-size: 0.9rem;
}

.nav-btn {
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(5px);
  transition: all 0.3s ease;
  margin: 0;
}

.nav-btn:hover {
  background: rgba(255, 255, 255, 0.2);
  transform: scale(1.1);
}

.mobile-navigation {
  display: flex;
  justify-content: center;
  gap: 2rem;
  margin-top: 1rem;
  padding-bottom: 0.5rem;
}

@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.skill-card {
  animation: fadeIn 0.3s ease-out;
}
</style>
