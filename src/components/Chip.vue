<template>
    <v-chip :color="color" class="my-1 mr-2 text-h6">
        {{ text }}
    </v-chip>
</template>

<script setup>
const props = defineProps({
    text: String,
    color: {
        type: String,
        default: 'primary'
    }
});
</script>