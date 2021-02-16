<template>
    <label class="cityNode">
        {{city}}, {{country}}
        <input v-model="isChecked" type="checkbox" @click='validateAddingCity()'>
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
    data: () => {
        return {
            isChecked: false,
        }
    },
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
        ...mapMutations(['addFocusedCity', "removeFromFocusedCities"]),
        validateAddingCity () {
            if (this.isChecked) {
                console.log("removing")
                this.removeFromFocusedCities(this.cityObject)
            } else {
                console.log("adding")
                this.addFocusedCity(this.cityObject)
            }
        }
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

<style>
    .cityNode {
        display: block;
    }
</style>