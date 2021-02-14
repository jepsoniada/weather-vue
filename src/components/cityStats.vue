<template>
    <div class="cityStats">
        {{city}}, {{country}} | temp: {{temperature}}, humidity: {{humidity}}%
    </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
    name: "cityStats",
    props: {
        city: String,
        country: String,
        temperature: Number,
        humidity: Number,
    }
})
</script>

<style>
</style>