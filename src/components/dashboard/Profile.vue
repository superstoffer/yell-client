<template>
    <div id="profile">
        <div>
            <p class="text-center"><img :src="user.avatar" class="yell-img rounded img-thumbnail"></p>
            <h2 class="text-center">@{{ user.username }}</h2>
            <hr>
            <p class="text-center">{{ user.about }}</p>
            <yell-list :endpoint="'/users/' + this.$route.params.username + '/beeps'"
                       :showUserInfo="false"></yell-list>
        </div>
    </div>
</template>

<script>
    import YellList from '../dashboard/YellList'

    export default {
        name: "profile",
        components: {
            yellList: YellList
        },
        created () {
            this.getUser()
        },
        data() {
            return {
                user: {}
            }
        },
        watch: {
            $route: 'getUser'
        },
        methods: {
            getUser () {
                this.$http.get('/users/' + this.$route.params.username)
                    .then(function (res) {
                        this.user = res.body
                    })
            }
        }
    }
</script>

<style scoped>
#profile img {
    max-width: 200px;
}
</style>