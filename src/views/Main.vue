<template>
    <div>
        <h1>:rain:</h1>
        <cityStats v-for="(weather, index) in APIresponse" :key="followedList[index].cityId" :city="followedList[index].city" :country="followedList[index].country" :temperature="weather.main.temp" :humidity="weather.main.humidity"/>
        <hr>
        {{APIresponse}}
    </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { mapState } from "vuex"
import cityStats from "../components/cityStats.vue"

// fill; to delete
function* iota () {
    let a = 0
    for (;;) {
        yield a++
    }
}

export default Vue.extend({
    components: {
        cityStats,
    },
    data () {
        return {
            APIresponse: new Array<Object>(),
            iota: iota(),
        }
    },
    computed: {
        ...mapState([
            "followedList",
        ])
    },
    methods: {
        async getWeatherFromApi() {
            for (let a of this.followedList) {
                await fetch(`https://api.openweathermap.org/data/2.5/weather?id=${a.cityId}&units=metric&appid=73a6e50cbb90a034018a7b761b97aaa8`, {method: "GET"})
                    .then(res => {
                        return res.json()
                    })
                    .then(res => {
                        this.APIresponse.push(res)
                    })
            }
        }
    },
	created () {
        this.getWeatherFromApi()
    },
    mounted () {
        setInterval(() => {console.log(`${this.iota.next().value}, 6 sec`)}, 6000)
    },
})
</script>