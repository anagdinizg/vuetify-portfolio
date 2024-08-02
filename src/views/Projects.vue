<template>
    <v-container>
        <h1 class="font-weight-medium text-h2 pb-4">Projects</h1>
        <v-row>
            <v-col cols="12" sm="6" md="6" lg="4">
                <Card
                    image="https://media.licdn.com/dms/image/sync/C4D27AQHZNcohDr9xqA/articleshare-shrink_800/0/1712120784605?e=1723219200&v=beta&t=u7IWyRRuuPUvQvJWuWFn48SFXgo2t09BKV7-3Feuc-w"
                    title="FastEng" subtitle="Next.js | Nest.js | MongoDB"
                    description="Revolutionize your engineering workflow with FastEng, an innovative application designed to streamline calculations, manage test results, and automate repetitive tasks. Eliminate the need for manual data entry and spreadsheet errors, saving you valuable time and effort."
                    :icons="['mdi-language-typescript', 'mdi-material-ui']" :actions="[
                        { variant: 'tonal', color: 'primary', icon: 'mdi-link' }
                    ]" />
            </v-col>
            <v-col cols="12" sm="6" md="6" lg="4">
                <Card
                    image="https://media.licdn.com/dms/image/D4D2DAQFHuVbaITntOA/profile-treasury-image-shrink_800_800/0/1720709358188?e=1723226400&v=beta&t=SZ3OYwdGhE-JMC0QfymB8X-rpgxEWCUrYXlx9U40UJw"
                    title="Stocks View" subtitle="React.js | Redux"
                    description="Single screen application showing favorite stocks, and a graph of the main researched stock, showing its value, whether it is falling or rising over a period of time."
                    :icons="['mdi-language-javascript', 'mdi-tailwind', 'mdi-react', 'mdi-api']" :actions="[
                        { variant: 'tonal', color: 'primary', icon: 'mdi-github' },
                        { variant: 'tonal', color: 'primary', icon: 'mdi-link' }
                    ]" />
            </v-col>

            <v-col cols="12" sm="6" md="6" lg="4">
                <Card
                    image="https://media.licdn.com/dms/image/D562DAQHviLJfaghiMA/profile-treasury-image-shrink_800_800/0/1715018219895?e=1723219200&v=beta&t=VRNazHftTUlSKjIn32iLhc4aVxm9bshY49UZHWTaNOU"
                    title="Locale" subtitle="Next.js | Nest.js | MongoDB"
                    description="Locale Imóveis streamlines the real estate experience with an intuitive platform, comprehensive listings, and advanced search tools. Whether you're buying, selling, or renting, Locale Imóveis empowers you to make informed decisions with ease. Experience a secure and transparent real estate journey with Locale Imóveis, your trusted partner in finding your dream property."
                    :icons="['mdi-language-typescript', 'mdi-tailwind']" :actions="[
                        { variant: 'tonal', color: 'primary', icon: 'mdi-link' }
                    ]" />
            </v-col>

            <v-col cols="12" sm="6" md="6" lg="4">
                <Card
                    image="https://media.licdn.com/dms/image/D4D2DAQGZXUvNDHNBpQ/profile-treasury-image-shrink_800_800/0/1722619565713?e=1723226400&v=beta&t=21PFvtUAYGnVYmXUlt70d4By0ZyFjUDnLMZabqadro4"
                    title="Airbnb clone" subtitle="Next.js"
                    description="Airbnb clone also using Mapbox, Calendar and Date Picker."
                    :icons="['mdi-language-javascript', 'mdi-tailwind']" :actions="[
                        { variant: 'tonal', color: 'primary', icon: 'mdi-github' },
                        { variant: 'tonal', color: 'primary', icon: 'mdi-link' }
                    ]" />
            </v-col>

            <v-col cols="12" sm="6" md="6" lg="4">
                <Card
                    image="https://media.licdn.com/dms/image/D4D2DAQHQRSpe4YD-ZA/profile-treasury-image-shrink_800_800/0/1720705218697?e=1723226400&v=beta&t=oCSzZjRVmo35BwZiii3WSsWWMUTg-O4lc4j87jmlsJ4"
                    title="Coffee Connoisseur" subtitle="Next.js"
                    description="Project in Next.js to mapping the coffee shops close to the user's location, in addition to being able to give scores to the coffee shops using stars."
                    :icons="['mdi-language-javascript', 'mdi-language-css3', 'mdi-api']" :actions="[
                        { variant: 'tonal', color: 'primary', icon: 'mdi-github' },
                        { variant: 'tonal', color: 'primary', icon: 'mdi-link' }
                    ]" />
            </v-col>
        </v-row>
    </v-container>
</template>

<script setup>
import Card from '@/components/Card.vue';
import Navbar from '@/components/Navbar.vue';
</script>