<template>
    <v-container>
        <h1 class="font-weight-medium text-h2 pb-4">Projects</h1>
        <v-row>
            <v-col cols="12" sm="6" md="6" lg="4">
                <CardCarrosel title="FastEng" subtitle="Next.js | Nest.js | MongoDB"
                    description="FastEng is a web platform specifically designed to streamline various tasks for civil engineers. It offers a comprehensive suite of features, including: Material Registratio, Test Registration, Marshall Mix Design, Superpave Mix Design, Quantity Calculation and Report Generation."
                    :icons="['mdi-language-typescript', 'mdi-material-ui']"
                    :actions="[{ variant: 'tonal', color: 'primary', icon: 'mdi-link', href: 'https://fastengapp.com.br/' }]">
                    <template #image>
                        <v-carousel hide-delimiters height="200">
                            <v-carousel-item v-for="(img, i) in fastengImages" :key="i">
                                <v-img :src="img" cover></v-img>
                            </v-carousel-item>
                        </v-carousel>
                    </template>
                </CardCarrosel>
            </v-col>


            <!-- Projeto Stocks View -->
            <v-col cols="12" sm="6" md="6" lg="4">
                <CardCarrosel title="Stocks View" subtitle="React.js | Redux"
                    description="Single screen application showing favorite stocks, and a graph of the main researched stock, showing its value, whether it is falling or rising over a period of time."
                    :icons="['mdi-language-javascript', 'mdi-tailwind', 'mdi-react', 'mdi-api']" :actions="[
                        { variant: 'tonal', color: 'primary', icon: 'mdi-github', href: 'https://github.com/seu-repositorio-stocks' },
                        { variant: 'tonal', color: 'primary', icon: 'mdi-link', href: 'https://stocks-view.example.com' }
                    ]">
                    <template #image>
                        <v-carousel hide-delimiters height="200">
                            <v-carousel-item v-for="(img, i) in stocksImages" :key="i">
                                <v-img :src="img" cover></v-img>
                            </v-carousel-item>
                        </v-carousel>
                    </template>
                </CardCarrosel>
            </v-col>


            <v-col cols="12" sm="6" md="6" lg="4">
                <CardCarrosel title="Airbnb clone" subtitle="Next.js"
                    description="Airbnb clone using Mapbox, Calendar and Date Picker."
                    :icons="['mdi-language-javascript', 'mdi-tailwind']" :actions="[
                        { variant: 'tonal', color: 'primary', icon: 'mdi-github', href: 'https://github.com/seu-repositorio' },
                        { variant: 'tonal', color: 'primary', icon: 'mdi-link', href: 'https://airbnb-clone-pearl-mu.vercel.app/' }
                    ]">
                    <template #image>
                        <v-carousel hide-delimiters height="200">
                            <v-carousel-item v-for="(img, i) in airbnbImages" :key="i">
                                <v-img :src="img" cover></v-img>
                            </v-carousel-item>
                        </v-carousel>
                    </template>
                </CardCarrosel>
            </v-col>

            <v-col cols="12" sm="6" md="6" lg="4">
                <CardCarrosel title="Coffee Connoisseur" subtitle="Next.js"
                    description="Project in Next.js to map the coffee shops close to the user's location, and allow users to rate them using stars."
                    :icons="['mdi-language-javascript', 'mdi-language-css3', 'mdi-api']" :actions="[
                        { variant: 'tonal', color: 'primary', icon: 'mdi-github', href: 'https://github.com/anagdinizg/coffee-stores' },
                        { variant: 'tonal', color: 'primary', icon: 'mdi-link', href: 'coffee-stores-phi.vercel.app/' }
                    ]">
                    <template #image>
                        <v-carousel hide-delimiters height="200">
                            <v-carousel-item v-for="(img, i) in coffeeImages" :key="i">
                                <v-img :src="img" cover />
                            </v-carousel-item>
                        </v-carousel>
                    </template>
                </CardCarrosel>
            </v-col>


            <v-col cols="12" sm="6" md="6" lg="4">
                <CardCarrosel title="Shopping List" subtitle="React native | Expo | TypeScript"
                    description="Minimalist shopping list with local storage and intuitive interface, allowing you to quickly add and check off items."
                    :icons="['mdi-vuejs', 'mdi-language-javascript']" :actions="[
                        { variant: 'tonal', color: 'primary', icon: 'mdi-github', href: 'https://github.com/anagdinizg/shopping-list' }
                    ]">
                    <template #image>
                        <v-carousel hide-delimiters height="200">
                            <v-carousel-item v-for="(img, i) in shoppingImages" :key="i">
                                <v-img :src="img" cover />
                            </v-carousel-item>
                        </v-carousel>
                    </template>
                </CardCarrosel>
            </v-col>

            <v-col cols="12" sm="6" md="6" lg="4">
                <CardCarrosel title="GitHub User Finder" subtitle="React.js | TypeScript"
                    description="Application that allows searching for public GitHub user data, featuring search history, local cache and responsive layout."
                    :icons="['mdi-react', 'mdi-language-typescript', 'mdi-api']" :actions="[{ variant: 'tonal', color: 'primary', icon: 'mdi-github', href: 'https://github.com/anagdinizg/github-user-finder' }
                    ]">
                    <template #image>
                        <v-carousel hide-delimiters height="200">
                            <v-carousel-item v-for="(img, i) in githubImages" :key="i">
                                <v-img :src="img" cover></v-img>
                            </v-carousel-item>
                        </v-carousel>
                    </template>
                </CardCarrosel>
            </v-col>


            <v-col cols="12" sm="6" md="6" lg="4">
                <CardCarrosel title="Centelhas do Cristo" subtitle="Vue.js | JavaScript"
                    description="Responsive static website created to increase visibility for a non-profit organization in my city."
                    :icons="['mdi-react', 'mdi-language-typescript', 'mdi-api']" :actions="[
                        { variant: 'tonal', color: 'primary', icon: 'mdi-github', href: 'https://github.com/anagdinizg/cdc-versao2' },
                        { variant: 'tonal', color: 'primary', icon: 'mdi-link', href: 'https://centelhas-do-cristo.vercel.app/' }
                    ]">
                    <template #image>
                        <v-carousel hide-delimiters height="200">
                            <v-carousel-item v-for="(img, i) in cdcImages" :key="i">
                                <v-img :src="img" cover></v-img>
                            </v-carousel-item>
                        </v-carousel>
                    </template>
                </CardCarrosel>
            </v-col>

        </v-row>
    </v-container>
</template>

<script setup>
import CardCarrosel from '@/components/CardCarrosel.vue';

const fastengImages = [
    'src/assets/fasteng01.jpg',
    'src/assets/fasteng02.jpg',
    'src/assets/fasteng03.jpg',
    'src/assets/fasteng04.jpg'
];

const airbnbImages = [
    'src/assets/airbnb01.jpg',
    'src/assets/airbnb02.jpg',
    'src/assets/airbnb03.jpg'
];

const stocksImages = [
    'src/assets/stocks01.jpg',
    'src/assets/stocks02.jpg',
]

const githubImages = [
    'src/assets/github01.jpg',
    'src/assets/github02.jpg',
]

const shoppingImages = [
    'src/assets/shopping01.jpg',
    'src/assets/shopping02.jpg',
    'src/assets/shopping03.jpg',
    'src/assets/shopping04.jpg'
];

const coffeeImages = [
    'src/assets/coffee01.jpg',
    'src/assets/coffee02.jpg',
]

const cdcImages = [
    'src/assets/cdc01.jpg',
    'src/assets/cdc02.jpg',
    'src/assets/cdc03.jpg',
    'src/assets/cdc04.jpg',
    'src/assets/cdc05.jpg',
    'src/assets/cdc06.jpg',
    'src/assets/cdc07.jpg',
    'src/assets/cdc08.jpg',
    'src/assets/cdc09.jpg',
    'src/assets/cdc10.jpg'
]

</script>
