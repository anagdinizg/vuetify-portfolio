<template>
    <v-container>
        <h1 class="font-weight-medium text-h2 pb-4">Professional Experiences</h1>
        <v-row>
            <v-col cols="12" sm="6" md="6" lg="5">
                <Card title="Full Stack Web Developer" subtitle="Mutant"
                    description="I just joined the company, we haven't started working yet, but I will work with vue.js on the frontend and java on the backend."
                    :icons="['mdi-language-javascript', 'mdi-vuejs', 'mdi-language-java']" />
            </v-col>
            <v-col cols="12" sm="6" md="6" lg="5">
                <Card title="Frontend Web Developer" subtitle="Ingate"
                    description="At Ingate, a Japanese software house, I worked as a frontend developer on various projects. I used technologies such as React.js, Next.js, and Vue.js to create reusable components and efficient interfaces, contributing to the delivery of high-quality projects."
                    :icons="['mdi-language-typescript', 'mdi-vuejs', 'mdi-react', 'mdi-alpha-n', 'mdi-firebase']" />
            </v-col>
            <v-col cols="12" sm="6" md="6" lg="5">
                <Card title="Frontend Web Developer" subtitle="Locale"
                    description="Locale is a real estate platform where I developed the frontend using Next.js, TypeScript, and Tailwind CSS. I focused on user-friendly interfaces, leveraging Git, Figma, and agile methodologies."
                    :icons="['mdi-language-typescript', 'mdi-tailwind', 'mdi-alpha-n']" />
            </v-col>
            <v-col cols="12" sm="6" md="6" lg="5">
                <Card title="Full Stack Web Developer" subtitle="JBR Engenharia"
                    description="FastEng is construction workflow platform. As a full-stack developer, I built the frontend with Next.js, TypeScript, and Figma, migrating from React. For the backend, I used Nest.js, improving on a previous Express setup."
                    :icons="['mdi-language-typescript', 'mdi-react', 'mdi-alpha-n']" />
            </v-col>
        </v-row>
    </v-container>
</template>

<script setup>
</script>