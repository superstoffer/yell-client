<template>
    <div class="text-center">
        <div v-if="loggedIn">
            <h4 class="text-center">@{{ user.username }}</h4>
            <hr>
            <div class="row">
                <div class="col-sm-6">
                    <router-link :to="'/profile/' + user.username" class="btn btn-block btn-light">
                        <i class="fa fa-user"></i> Profile
                    </router-link>
                </div>
                <div class="col-sm-6">
                    <router-link :to="'/feed'" class="btn btn-block btn-light">
                        <i class="fa fa-newspaper-o"></i> Feed
                    </router-link>
                </div>
            </div>
            <hr>
            <div class="row">
                <div class="col-sm-12">
                <textarea id="yellArea"rows="15" class="form-control" placeholder="Start writing your yell here"
                          maxlength="320" v-model="newYell">
            </textarea>
                    <p class="text-muted">{{ 320 - newYell.length }} character{{ 320 - newYell.length == 1 ? '' : 's' }} left</p>
                    <p class="text-center no-margin">
                        <button class="btn btn-info btn-block">Yell now</button>
                    </p>
                </div>
            </div>
            <div class="row">
                <div class="col-sm-6">
                    <p class="text-center no-margin">
                        <a href="#" class="btn btn-block btn-light"><i class="fa fa-cog"></i> Settings</a>
                    </p>
                </div>
                <div class="col-sm-6">
                    <p class="text-center no-margin">
                        <a href="#" class="btn btn-block btn-light" @click.prevent="logout">
                            <i class="fa fa-power-off"></i> Log out
                        </a>
                    </p>
                </div>
            </div>
        </div>
        <div v-if="!loggedIn">
            <h1>Hello</h1>
            <p>Yell everything! Join us.</p>
            <p class="text-center">
                <router-link :to="'/auth/signup'" class="btn btn-block btn-info">Sign up</router-link>
                <router-link :to="'/auth/login'" class="btn btn-block btn-light">Log ind</router-link>
            </p>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'sidebar',
        created () {
            if (this.loggedIn) {
                this.getUser()
            }
        },
        data () {
            return {
                user: {},
                newYell: '',
                loggedIn: this.$auth.loggedIn()
            }
        },
        methods: {
            logout () {
                this.$auth.destroyToken()
                this.user = {}
                this.$router.push('/auth/login')
            },
            getUser () {
                this.$http.get('/users/me')
                    .then(function (res) {
                        this.user = res.body
                    })
            }
        }
    }
</script>

<style scoped>
    #yellArea {
        background: whitesmoke;
        border: transparent;
        box-shadow: none;
        resize: vertical;
    }
</style>