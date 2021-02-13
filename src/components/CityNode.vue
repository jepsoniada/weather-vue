<template>
    <div class="cityNode">{{city}}, {{country}}</div>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
    name: "CityNode",
    props: {
        city: String,
        country: String,
        cityId: Number,
    }
})
</script>