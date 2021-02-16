<template>
    <div>
        <h1>:chart:</h1>
        <div>
            {{arrOfStats}}
            <hr>
            {{dataHold}}
        </div>
    </div>
</template>

<script lang="ts">
import Vue from 'vue'

interface apiResponseObject {
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

interface apiResponseSimplified {
    readonly temp: number,
    readonly humidity: number,
}

export default Vue.extend({
    name: "Chart",
    data () {
        return {
            arrOfStats: new Array<apiResponseSimplified>(),
            localization: this.$route.query.id,
            dataHold: {} as apiResponseObject,
        }
    },
    watch: {
        dataHold () {
            console.log("this.dataHold changed")
            const result: apiResponseSimplified = {temp: this.dataHold.main.temp, humidity: this.dataHold.main.humidity}
            this.arrOfStats.push(result)
            if (this.arrOfStats.length > 120) {
                this.arrOfStats.shift()
            }
        }
    },
    methods: {
        async getWeather (): Promise<apiResponseObject> {
            console.log("called in chart")
            let result: any
            await fetch(`https://api.openweathermap.org/data/2.5/weather?id=${this.localization}&units=metric&appid=73a6e50cbb90a034018a7b761b97aaa8`)
                .then(res => res.json())
                .then(res => result = res)
            return <apiResponseObject>result
        },
    },
    mounted () {
        setInterval(async () => this.dataHold = await this.getWeather(), 6000)
    },
    async created () {
        this.dataHold = await this.getWeather()
    }
})
</script>