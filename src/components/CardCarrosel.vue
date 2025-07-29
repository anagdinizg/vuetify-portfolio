<template>
    <v-card>
        <v-card-item>
            <slot name="image">
                <v-img :src="image" height="200px" cover />
            </slot>
        </v-card-item>

        <v-card-title class="text-h6">{{ title }}</v-card-title>
        <v-card-subtitle>{{ subtitle }}</v-card-subtitle>

        <v-card-text>
            {{ description }}
        </v-card-text>

        <v-card-actions>
            <v-btn v-for="(action, i) in actions" :key="i" :variant="action.variant" :color="action.color"
                :icon="!!action.icon" :href="action.href" target="_blank" rel="noopener">
                <v-icon v-if="action.icon" :icon="action.icon" />
            </v-btn>
        </v-card-actions>

    </v-card>
</template>

<script setup>
defineProps({
    image: String,
    title: String,
    subtitle: String,
    description: String,
    icons: Array,
    actions: Array
});
</script>
