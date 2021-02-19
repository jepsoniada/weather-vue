<template>
    <div>
        <header class="d-flex justify-content-between p-3">
            <h1>list of cities</h1>
            <button class="btn btn-primary" @click="goToCitySelect" >add city</button>
        </header>
        <WeatherChart/>
        <div class="col">
            <cityStats v-for="(weather, index) in APIresponse" :key="followedList[index].cityId" :cityData="followedList[index]" :weatherFromApi='weather'/>
        </div>
    </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { mapState } from "vuex"
import cityStats from "../components/cityStats.vue"
import WeatherChart from "../components/WeatherChart.vue"

interface currentApiResponse {
    coord: {
        lon: number,
        lat: number ,
    },
    weather: {
        id: number,
        main: string,
        description: string,
        icon: string,
    }[],
    base: string,
    main: {
        temp:number,
        feels_like: number,
        temp_min: number,
        temp_max: number,
        pressure: number,
        humidity: number,
    },
    visibility: number,
    wind: {
        speed: number,
        deg: number
    },
    snow: {
        "1h": number
    },
    clouds: {
        all: number
    },
    dt: number,
    sys: {
        type: number,
        id: number,
        country: string,
        sunrise: number,
        sunset: number
    },
    timezone: number,
    id: number,
    name: string,
    cod: number 
}

export default Vue.extend({
    components: {
        cityStats,
        WeatherChart,
    },
    data () {
        return {
            focusedAPIResponse: new Array<currentApiResponse>(),
            APIresponse: new Array<currentApiResponse>(),
        }
    },
    computed: {
        ...mapState([
            "followedList",
        ]),
    },
    methods: {
        async getCurrentWeatherFromApi() {
            for (let a of this.followedList) {
                await fetch(`https://api.openweathermap.org/data/2.5/weather?id=${a.cityId}&units=metric&appid=73a6e50cbb90a034018a7b761b97aaa8`, {method: "GET"})
                    .then(res => {
                        return res.json()
                    })
                    .then(res => {
                        let inedxInResArray = this.APIresponse.findIndex(e => e.sys.id == res.sys.id)
                        if (inedxInResArray == -1) {
                            this.APIresponse.push(res)
                        } else {
                            this.APIresponse.splice(inedxInResArray, 1, res)
                        }
                        console.log(res)
                    })
            }
        },
        goToCitySelect () {
            this.$router.push('/home')
        }
    },
	created () {
        this.getCurrentWeatherFromApi()
    },
    mounted () {
        setInterval(async () => {
            await this.getCurrentWeatherFromApi()
            console.log("regular API call")
        }, 60000)
    },
})
</script>