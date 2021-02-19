<template>
    <div id="charts" class="row">
        <div class="col">
            <canvas id="temperature"></canvas>
        </div>
        <div class="col">
            <canvas id="humidity"></canvas>
        </div>
    </div>
</template>

<script lang="ts">
import Vue, { PropType } from 'vue'
import chart from "chart.js"
import { mapState } from 'vuex'

interface focusedCity {
	city: string,
	country: string,
	cityId: number,
	dt: number,
	temp: number,
	humidity: number,
}

export default Vue.extend({
    name: 'WeatherChart',
    computed: {
        ...mapState([
            "focusedCity",
            "weatherOfFocused",
        ]),
        temperatureChart() {
            return new chart("temperature", {
                type: 'bar',
                data: {
                    labels: (this.weatherOfFocused as Array<focusedCity>).map(e => {
                        const unixTime = new Date(e.dt * 1000)
                        return `${unixTime.getHours()}:${unixTime.getMinutes() < 10 ? "0"+unixTime.getMinutes().toString() : unixTime.getMinutes()}`
                    }),
                    datasets: [
                        {
                            label: 'temperature',
                            backgroundColor: '#f87979',
                            data: (this.weatherOfFocused as Array<focusedCity>).map(e => e.temp)
                        },
                    ]
                }
            }).update()
        },
        humidityChart() {
            return new chart("humidity", {
                type: 'bar',
                data: {
                    labels: (this.weatherOfFocused as Array<focusedCity>).map(e => {
                        const unixTime = new Date(e.dt * 1000)
                        return `${unixTime.getHours()}:${unixTime.getMinutes() < 10 ? "0"+unixTime.getMinutes().toString() : unixTime.getMinutes()}`
                    }),
                    datasets: [
                        {
                            label: 'humidity',
                            backgroundColor: '#aaaaff',
                            data: (this.weatherOfFocused as Array<focusedCity>).map(e => e.humidity)
                        }
                    ]
                }
            }).update()
        },
    },
    watch: {
        weatherOfFocused () {
            this.temperatureChart
            this.humidityChart
        },
    },
    mounted() {
        this.temperatureChart
        this.humidityChart
    }
})
</script>