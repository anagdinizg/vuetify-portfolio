<template>
    <v-container>
        <h1 class="font-weight-medium text-h2 pb-6">Professional Experiences</h1>
        <v-row dense>
            <v-col v-for="(experience, index) in experiences" :key="index" cols="12" sm="6" md="6" lg="5">
                <v-card elevation="4" class="pa-4 rounded-xl">
                    <v-card-title class="text-h6 font-weight-bold d-flex justify-space-between">
                        {{ experience.title }}
                        <v-chip color="primary" size="small" class="text-white" style="font-size: 0.9rem">
                            {{ experience.subtitle }}</v-chip>
                    </v-card-title>

                    <v-divider class="my-2"></v-divider>

                    <v-card-text class="description-text">
                        <ul class="pl-4">
                            <li v-for="(point, i) in experience.description" :key="i" class="mb-2">
                                {{ point }}
                            </li>
                        </ul>
                    </v-card-text>

                    <v-divider class="my-3"></v-divider>

                    <div class="d-flex flex-wrap gap-2">
                        <v-tooltip v-for="(icon, idx) in experience.icons" :key="idx" location="top">
                            <template #activator="{ props }">
                                <v-icon v-bind="props" :icon="icon" size="28" class="me-2" color="primary" />
                            </template>
                            <span>{{ formatIconLabel(icon) }}</span>
                        </v-tooltip>
                    </div>
                </v-card>
            </v-col>
        </v-row>
    </v-container>
</template>

<script setup>
const experiences = [
    {
        title: 'Frontend Web Developer',
        subtitle: 'Mutant',
        description: [
            "Project for Vivo",
            "Worked on applications using Vue.js within a microfrontend architecture.",
            "Deployed and managed modules in the cloud using Azure.",
            "Applied trunk-based development for continuous delivery.",
            "Managed state with Vuex and integrated APIs using Axios.",
            "Used MongoDB as the primary database.",
            "Wrote automated tests using Jest and Vue Test Utils (unit), Cypress (integration), and Cucumber (acceptance), including cross-browser testing.",
            "Built and documented UI components with Storybook.",
            "Handled containerization using Docker and orchestrated services with Kubernetes.",
            "Sent event data to Google Analytics via tagging.",
            "Collaborated in agile teams using Scrum and maintained code versioning with Git."
        ],
        icons: [
            'mdi-vuejs', 'mdi-language-javascript', 'mdi-language-java', 'mdi-database', 'mdi-vuetify',
            'mdi-docker', 'mdi-kubernetes', 'mdi-book-open-variant',
            'mdi-git', 'mdi-google-analytics'
        ]
    },
    {
        title: 'Frontend Web Developer',
        subtitle: 'Ingate',
        description: [
            "Worked as a frontend developer in a multicultural, English-speaking team at a Japanese software company.",
            "Built user interfaces using React.js, Next.js, Vue.js, and TypeScript.",
            "Used UI libraries such as Material-UI, Tailwind CSS, and Ant Design.",
            "Integrated with backends via Firebase.",
            "Collaborated in UI/UX design using Figma.",
            "Collaborated in agile teams using Scrum and maintained code versioning with Git."
        ],
        icons: [
            'mdi-react', 'mdi-alpha-n', 'mdi-vuejs', 'mdi-language-typescript',
            'mdi-material-ui', 'mdi-tailwind', 'mdi-alpha-a', 'mdi-firebase',
            'mdi-git'
        ]
    },
    {
        title: 'Frontend Web Developer',
        subtitle: 'Locale',
        description: [
            "Developed user-facing applications using Next.js, TypeScript, and Tailwind CSS.",
            "Integrated with a backend developed in Nest.js and stored data in MongoDB.",
            "Focused on web performance optimization and technical SEO.",
            "Worked with design systems via Figma.",
            "Collaborated in agile teams using Scrum and maintained code versioning with Git."
        ],
        icons: [
            'mdi-alpha-n', 'mdi-language-typescript', 'mdi-tailwind', 'mdi-database', 'mdi-git'
        ]
    },
    {
        title: 'Full Stack Web Developer',
        subtitle: 'JBR Engenharia',
        description: [
            "Developed and maintained frontend interfaces using React.js, Next.js, and Styled-components.",
            "Built backend APIs using Nest.js and Express.js, with MongoDB as the database.",
            "Led the progressive migration from JavaScript to TypeScript.",
            "Contributed to UI/UX design using Figma.",
            "Collaborated in agile teams using Scrum and maintained code versioning with Git."
        ],
        icons: [
            'mdi-react', 'mdi-alpha-n', 'mdi-language-typescript', 'mdi-language-javascript',
            'mdi-nodejs', 'mdi-database', 'mdi-git'
        ]
    }
]

function formatIconLabel(icon) {
    return icon.replace('mdi-', '').replace(/-/g, ' ').toUpperCase()
}
</script>

<style scoped>
.gap-2 {
    gap: 8px;
}

.description-text {
    font-size: 1rem;
    line-height: 1.6;
}
</style>
