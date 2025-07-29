<template>
    <v-container>
        <h1 class="font-weight-medium text-h2 text-left pb-8">Technologies</h1>

        <v-row dense>
            <v-col cols="12" sm="6" md="4" lg="3">
                <h3 class="font-weight-thin text-h5 pb-2">Frontend</h3>
                <div class="d-flex flex-wrap gap-2 pb-4">
                    <Chip v-for="tech in frontendTechs" :key="tech" :text="tech" />
                </div>

                <h3 class="font-weight-thin text-h5 pb-2">Design</h3>
                <div class="d-flex flex-wrap gap-2">
                    <Chip v-for="tech in designTechs" :key="tech" :text="tech" />
                </div>
            </v-col>

            <v-col cols="12" sm="6" md="4" lg="3">
                <h3 class="font-weight-thin text-h5 pb-2">Backend</h3>
                <div class="d-flex flex-wrap gap-2 pb-4">
                    <Chip v-for="tech in backendTechs" :key="tech" :text="tech" />
                </div>

                <h3 class="font-weight-thin text-h5 pb-2">Database</h3>
                <div class="d-flex flex-wrap gap-2">
                    <Chip v-for="tech in databaseTechs" :key="tech" :text="tech" />
                </div>
            </v-col>

            <v-col cols="12" sm="6" md="4" lg="3">
                <h3 class="font-weight-thin text-h5 pb-2">Testing</h3>
                <div class="d-flex flex-wrap gap-2 pb-4">
                    <Chip v-for="tech in testingTools" :key="tech" :text="tech" />
                </div>

                <h3 class="font-weight-thin text-h5 pb-2">Versioning & Collaboration</h3>
                <div class="d-flex flex-wrap gap-2">
                    <Chip v-for="tech in versioningTools" :key="tech" :text="tech" />
                </div>
            </v-col>

            <v-col cols="12" sm="6" md="4" lg="3">
                <h3 class="font-weight-thin text-h5 pb-2">DevOps & Architecture</h3>
                <div class="d-flex flex-wrap gap-2 pb-4">
                    <Chip v-for="tech in devOpsTools" :key="tech" :text="tech" />
                </div>

                <h3 class="font-weight-thin text-h5 pb-2">Monitoring & Analytics</h3>
                <div class="d-flex flex-wrap gap-2 pb-4">
                    <Chip v-for="tech in monitoringTools" :key="tech" :text="tech" />
                </div>

                <h3 class="font-weight-thin text-h5 pb-2">Agile Practices</h3>
                <div class="d-flex flex-wrap gap-2">
                    <Chip v-for="tech in agilePractices" :key="tech" :text="tech" />
                </div>
            </v-col>
        </v-row>
    </v-container>
</template>

<script setup>
import Chip from '@/components/Chip.vue'

const frontendTechs = [
    'Vue.js', 'React.js', 'Next.js', 'TypeScript',
    'Tailwind CSS', 'Styled-components', 'Material UI', 'Ant Design'
];

const backendTechs = [
    'Nest.js', 'Express.js', 'Firebase'
];

const databaseTechs = [
    'MongoDB'
];

const designTechs = [
    'Figma', 'Storybook'
];

const agilePractices = [
    'Scrum', 'Times remotos e multiculturais'
];

const versioningTools = [
    'Git', 'Trunk-based development'
];

const testingTools = [
    'Jest', 'Vue Test Utils', 'Cypress', 'Cucumber', 'Testes cross-browser'
];

const devOpsTools = [
    'Docker', 'Kubernetes', 'Azure', 'Microfrontends'
];

const monitoringTools = [
    'Google Analytics', 'Tagueamento de eventos'
];
</script>

<style scoped>
.gap-2 {
    gap: 8px;
}
</style>
