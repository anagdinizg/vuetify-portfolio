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
        <CardCarrosel title="GlamBeauty E-commerce" subtitle="Vue.js | JavaScript"
          description="E-commerce for beauty products with user authentication, product catalog, shopping cart, and order management."
          :icons="['mdi-vuejs', 'mdi-language-javascript', 'mdi-firebase']" :actions="[
            { variant: 'tonal', color: 'primary', icon: 'mdi-github', href: 'https://github.com/anagdinizg/e-commerce' },
          ]">
          <template #image>
            <v-carousel hide-delimiters height="200">
              <v-carousel-item v-for="(img, i) in glambeautyImages" :key="i">
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
            { variant: 'tonal', color: 'primary', icon: 'mdi-github', href: 'https://github.com/anagdinizg/airbnb' },
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


    </v-row>
  </v-container>
</template>

<script setup>
import CardCarrosel from '@/components/CardCarrosel.vue';

const fastengImages = [
  '/assets/fasteng01.jpg',
  '/assets/fasteng02.jpg',
  '/assets/fasteng03.jpg',
  '/assets/fasteng04.jpg'
];

const airbnbImages = [
  '/assets/airbnb01.jpg',
  '/assets/airbnb02.jpg',
  '/assets/airbnb03.jpg'
];

const stocksImages = [
  '/assets/stocks01.jpg',
  '/assets/stocks02.jpg',
]

const githubImages = [
  '/assets/github01.jpg',
  '/assets/github02.jpg',
]

const shoppingImages = [
  '/assets/shopping01.jpg',
  '/assets/shopping02.jpg',
  '/assets/shopping03.jpg',
  '/assets/shopping04.jpg'
];

const coffeeImages = [
  '/assets/coffee01.jpg',
  '/assets/coffee02.jpg',
]

const cdcImages = [
  '/assets/cdc01.jpg',
  '/assets/cdc02.jpg',
  '/assets/cdc03.jpg',
  '/assets/cdc04.jpg',
  '/assets/cdc05.jpg',
  '/assets/cdc06.jpg',
  '/assets/cdc07.jpg',
  '/assets/cdc08.jpg',
  '/assets/cdc09.jpg',
  '/assets/cdc10.jpg'
]

const glambeautyImages = [
  '/assets/glambeauty1.jpg',
  '/assets/glambeauty2.jpg',
  '/assets/glambeauty3.jpg',
  '/assets/glambeauty4.jpg',
  '/assets/glambeauty5.jpg',
  '/assets/glambeauty6.jpg',
  '/assets/glambeauty7.jpg',
  '/assets/glambeauty8.jpg',
  '/assets/glambeauty9.jpg',
]
</script>
