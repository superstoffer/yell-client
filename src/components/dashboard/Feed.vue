<template>
    <div class="feed">
        <h2>Latest Yells</h2>
        <yell-list></yell-list>
    </div>
</template>

<script>
import YellList from '../dashboard/YellList'
    export default {
        name: "feed",
        components: {
            yellList: YellList
        }
    }
</script>

<style scoped>

</style>