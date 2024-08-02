<template>
    <v-card>
        <v-img class="align-end" :src="image"></v-img>
        <v-card-title>{{ title }}</v-card-title>
        <v-card-subtitle>{{ subtitle }}</v-card-subtitle>
        <v-card-text>
            <div>{{ description }}</div>
            <v-icon v-for="icon in icons" :key="icon" :icon="icon" color="primary" size="20"></v-icon>
        </v-card-text>
        <v-card-actions v-if="actions">
            <v-btn v-for="action in actions" :key="action.icon" :variant="action.variant" :color="action.color"
                :icon="action.icon"></v-btn>
        </v-card-actions>
    </v-card>
</template>

<script setup>
import { defineProps } from 'vue';

const props = defineProps({
    image: String,
    title: String,
    subtitle: String,
    description: String,
    icons: Array,
    actions: Array,
});
</script>

<style scoped>
.align-end {
    align-items: flex-end;
}
</style>