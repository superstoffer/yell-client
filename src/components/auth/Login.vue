<template>
    <div>
        <h3 class="text-center">Login</h3>
        <div class="form-group">
            <input type="text" class="form-control" placeholder="Username" v-model="user.username">
            <input type="password" class="form-control" placeholder="Password" v-model="user.password">
        </div>
        <button class="btn btn-lg btn-primary btn-block" @click="login">Log in</button>
        <hr>
        <p class="text-center">You don't have an account?</p>
        <p class="text-center"><router-link to="/auth/signup">Sign up</router-link></p>
    </div>
</template>

<script>
    export default {
        name: "login",
        data: () => {
            return {
                user: {
                    username: null,
                    password: null
                }
            }
        },
        methods: {
            login: function () {
                this.$http.post('/auth', this.user)
                    .then((res) => {
                        this.$auth.setToken(res.body.token, Date.now() + 1440000)
                        this.$router.push('/newsfeed')
                    })
            }
        }
    }
</script>

<style scoped>

</style>