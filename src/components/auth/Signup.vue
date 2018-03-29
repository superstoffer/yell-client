<template>
    <div>
        <h3 class="text-center">Sign up</h3>
        <div class="form-group">
            <input type="text" class="form-control" placeholder="Username" v-model="user.username">
            <input type="email" class="form-control" placeholder="Email" v-model="user.email">
            <input type="password" class="form-control" placeholder="Password" v-model="user.password">
        </div>
        <div class="form-group">
            <button class="btn btn-lg btn-primary btn-block" @click="signup">Sign up</button>
        </div>
        <hr>
        <p class="text-center">Already have an account?</p>
        <p class="text-center"><router-link to="/auth/login">Go to login</router-link></p>
    </div>
</template>

<script>
    export default {
        name: "signup",
        data () {
            return {
                user: {
                    username: null,
                    email: null,
                    password: null
                }
            }
        },
        methods: {
            signup: function () {
                this.$http.post('http://localhost:9090/users', this.user)
                    .then(function (res) {
                        alertify.success('Success! You can now log in with your credentials');
                        this.$router.push('/auth/login');
                    }).catch( function (res) {
                        if (res.status == 422) {
                            res.body.errors.forEach(function (e) {
                                alertify.error(e)
                            })
                        }
                })
            }
        }
    }
</script>

<style scoped>

</style>