<template>
    <label class="cityNode">
        {{city}}, {{country}}
        <input type="checkbox" @click='addFocusedCity(cityObject)'>
    </label>
</template>

<script lang="ts">
import Vue from 'vue'
import { mapMutations } from "vuex"

interface cityInfo {
	city: string,
	country: string,
	cityId: number,
}

export default Vue.extend({
    name: "CityNode",
    props: {
        city: String,
        country: String,
        cityId: Number,
    },
    computed: {
        cityObject(): cityInfo {
            return {
                city: this.city,
                country: this.country,
                cityId: this.cityId,
            }
        }
    },
    methods: {
        ...mapMutations(['addFocusedCity']),
        // goToCityWeather() {
        //     this.addFocusedCity({
        //         city: this.city,
        //         country: this.country,
        //         citId: this.cityId,
        //     })
        //     this.$router.push("/main")
        // }
    }
})
</script>