<template>
    <v-container>
        <h1 class="font-weight-medium text-h2 pb-4">Technologies</h1>

        <v-row>
            <v-col cols="12" md="3">
                <h3 class="font-weight-thin text-h5 pb-4">Frontend</h3>
                <Chip v-for="tech in frontendTechs" :key="tech" :text="tech" />
            </v-col>

            <v-col cols="12" md="3">
                <h3 class="font-weight-thin text-h5 pb-4">Design</h3>
                <Chip v-for="tech in designTechs" :key="tech" :text="tech" />
            </v-col>

            <v-col cols="12" md="3">
                <h3 class="font-weight-thin text-h5 pb-4">Backend</h3>
                <Chip v-for="tech in backendTechs" :key="tech" :text="tech" />
                <h3 class="font-weight-thin text-h5 pb-4">Database</h3>
                <Chip v-for="tech in databaseTechs" :key="tech" :text="tech" />
            </v-col>

            <v-col cols="12" md="3">
                <h3 class="font-weight-thin text-h5 pb-4">Agile Methodologies</h3>
                <Chip v-for="tech in agileTechs" :key="tech" :text="tech" />
                <h3 class="font-weight-thin text-h5 pb-4">Others</h3>
                <Chip v-for="tech in otherTechs" :key="tech" :text="tech" />
            </v-col>
        </v-row>
    </v-container>
</template>

<script setup>
import Chip from '@/components/Chip.vue'

const frontendTechs = [
    'React.js', 'Next.js', 'Vue.js', 'Vitest', 'Vue Test Utils',
    'Storybook', 'Redux', 'Vuex', 'Vue Router'
]

const backendTechs = ['Nest.js', 'Java', 'Python']

const databaseTechs = ['MongoDB', 'MySQL']

const designTechs = [
    'Material UI', 'Ant Design', 'Tailwind CSS', 'Styled Components',
    'Material Design Icons', 'Vuetify', 'Figma'
]

const agileTechs = ['Scrum']

const otherTechs = ['Git']
</script>