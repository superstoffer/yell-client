<template>
    <div>
        <div class="container">
            <div class="row">
                <div class="col-md-3 offset-md-1 col-sm-5">
                    <sidebar></sidebar>
                </div>
                <div class="col-md-7 col-sm7">
                    <transition name="fade">
                        <router-view></router-view>
                    </transition>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import Sidebar from '../dashboard/Sidebar'
    import Feed from '../dashboard/Feed'

    export default {
        name: "dashboard",
        components: {
            Sidebar: Sidebar,
            Feed: Feed
        }
    }
</script>

<style scoped>

</style>