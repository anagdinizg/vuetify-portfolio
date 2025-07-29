<template>
    <v-container class="text-center pt-8">
        <v-row justify="center">
            <v-col cols="12" md="4">
                <v-avatar size="200" class="mx-auto mb-4">
                    <v-img src="/assets/profile.jpg" class="rounded-circle" cover />
                </v-avatar>
                <h1 class="text-h5 font-weight-bold">Ana Gabriela Diniz Gusmão</h1>
                <p class="text-subtitle-1">Software Developer</p>
            </v-col>
        </v-row>

        <v-row justify="center">
            <v-col cols="12" md="8">
                <v-expansion-panels variant="inset" elevation="1">
                    <v-expansion-panel>
                        <v-expansion-panel-title>
                            <v-icon start class="mr-2">mdi-account</v-icon>
                            Personal Information
                        </v-expansion-panel-title>
                        <v-expansion-panel-text>
                            My name is Ana Gabriela Diniz Gusmão. I am 26 years old, married, and I live in Campina
                            Grande, Paraíba, Brazil.
                            I am currently pursuing a degree in Information Systems at Facisa, attending classes in the
                            evening.
                        </v-expansion-panel-text>
                    </v-expansion-panel>

                    <v-expansion-panel>
                        <v-expansion-panel-title>
                            <v-icon start class="mr-2">mdi-gamepad-variant</v-icon>
                            Hobbies
                        </v-expansion-panel-title>
                        <v-expansion-panel-text>
                            I am passionate about gaming, with favorites such as <strong>The Last of Us</strong>,
                            <strong>Red Dead Redemption</strong>, <strong>God of War</strong>, <strong>Alan
                                Wake</strong>, <strong>Resident Evil</strong>, and <strong>Ori</strong>.
                            I also enjoy watching movies and series, especially in the fantasy genre — highlights
                            include <strong>Harry Potter</strong>, <strong>The Lord of the Rings</strong>, <strong>The
                                Hobbit</strong>, and <strong>Game of Thrones</strong>.
                        </v-expansion-panel-text>
                    </v-expansion-panel>

                    <v-expansion-panel>
                        <v-expansion-panel-title>
                            <v-icon start class="mr-2">mdi-music</v-icon>
                            Music and Art
                        </v-expansion-panel-title>
                        <v-expansion-panel-text>
                            My music taste is eclectic — I enjoy <strong>Metal</strong>, <strong>Blues</strong>,
                            <strong>Hip-Hop</strong>, <strong>Pop</strong>, and <strong>Lo-fi</strong>. I also love
                            drawing, especially portraits of people.
                        </v-expansion-panel-text>
                    </v-expansion-panel>

                    <v-expansion-panel>
                        <v-expansion-panel-title>
                            <v-icon start class="mr-2">mdi-lightbulb</v-icon>
                            Curiosities
                        </v-expansion-panel-title>
                        <v-expansion-panel-text>
                            I am a certified nursing technician and almost graduated in Biological Sciences before
                            transitioning to tech.
                        </v-expansion-panel-text>
                    </v-expansion-panel>
                </v-expansion-panels>
            </v-col>
        </v-row>
    </v-container>
</template>


<script setup>
</script>

<style scoped>
.v-img.rounded-circle {
    border-radius: 50%;
}

.rounded-circle {
    border-radius: 50%;
}
</style>