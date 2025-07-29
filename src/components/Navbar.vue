<template>
    <div>
        <v-navigation-drawer permanent v-model="isDrawerOpen">
            <v-list>
                <v-list-subheader>Menu</v-list-subheader>

                <v-list-item :to="{ name: 'AboutMe' }" router-link>
                    <v-list-item-icon class="pr-3">
                        <v-icon>mdi-face-woman</v-icon>
                    </v-list-item-icon>
                    <v-list-item-content>About me</v-list-item-content>
                </v-list-item>

                <v-list-item :to="{ name: 'Projects' }" router-link>
                    <v-list-item-icon class="pr-3">
                        <v-icon>mdi-code-tags</v-icon>
                    </v-list-item-icon>
                    <v-list-item-content>Projects</v-list-item-content>
                </v-list-item>

                <v-list-item :to="{ name: 'ProfessionalExperiences' }" router-link>
                    <v-list-item-icon class="pr-3">
                        <v-icon>mdi-briefcase</v-icon>
                    </v-list-item-icon>
                    <v-list-item-content>Professional experiences</v-list-item-content>
                </v-list-item>

                <v-list-item :to="{ name: 'Technologies' }" router-link>
                    <v-list-item-icon class="pr-3">
                        <v-icon>mdi-monitor-shimmer</v-icon>
                    </v-list-item-icon>
                    <v-list-item-content>Technologies</v-list-item-content>
                </v-list-item>
            </v-list>
        </v-navigation-drawer>

        <v-app-bar flat class="border-b">
            <v-app-bar-nav-icon @click="isDrawerOpen = !isDrawerOpen"></v-app-bar-nav-icon>
            <v-app-bar-title>Ana Gusmão's Portfolio</v-app-bar-title>

            <template #append>
                <v-btn size="35" icon href="https://www.linkedin.com/in/anagdinizg/" target="blank" color="primary">
                    <v-icon>mdi-linkedin</v-icon>
                </v-btn>
                <v-btn size="35" icon href="https://github.com/anagdinizg" target="blank" color="primary">
                    <v-icon>mdi-github</v-icon>
                </v-btn>
                <v-avatar class="ml-2">
                    <v-img cover
                        src="https://media.licdn.com/dms/image/D4D03AQH8W86UD5coFA/profile-displayphoto-shrink_800_800/0/1712247393464?e=1727913600&v=beta&t=hbPC6ym9SMMjyz0isVek2CbvVwlXP0FyaO0ecOAA8lQ"></v-img>
                </v-avatar>
            </template>
        </v-app-bar>
    </div>
</template>

<script setup>
import { ref } from 'vue';

const isDrawerOpen = ref(false);
</script>