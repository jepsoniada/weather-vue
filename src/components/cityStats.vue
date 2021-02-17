<template>
    <div class="cityStats" @click="goToChart">
        <div>{{cityData.city}}</div>
        <div>{{cityData.country}}</div>
        <div>temp: {{temperature}}</div>
        <div>humidity: {{humidity}}%</div>
    </div>
</template>

<script lang="ts">
import Vue, { PropType } from 'vue'

interface cityInfo {
	city: string,
	country: string,
	cityId: number,
}

export default Vue.extend({
    name: "cityStats",
    props: {
        // city: String,
        // country: String,
        cityData: Object as PropType<cityInfo>,
        temperature: Number,
        humidity: Number,
    },
    methods: {
        goToChart () {
            this.$router.push({path: "/chart", query: {id: this.cityData.cityId.toString()}})
        }
    },
})
</script>

<style>
    .cityStats {
        padding: 16px;
        max-width: 150px;
    }
</style>