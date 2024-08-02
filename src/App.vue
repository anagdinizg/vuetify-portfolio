<template>
  <v-app>
    <Navbar />
    <v-main>
      <v-container>
        <router-view></router-view>
      </v-container>
    </v-main>
  </v-app>
</template>

<script setup>
import { ref } from 'vue';
import Navbar from './components/Navbar.vue';
import Projects from './views/Projects.vue';

const isDrawerOpen = ref(false);
</script>
