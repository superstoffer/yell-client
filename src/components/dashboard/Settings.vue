<template>
    <div id="settings">
        <h2>Settings</h2>
        <form class="form-horizontal">
            <div class="form-group row">
                <label class="control-label col-sm-2">Avatar</label>
                <div class="text-center col-sm-10">
                    <img :src="image ? image : user.avatar" class="img"><br>
                    <div class="fileUpload btn btn-info">
                        <span>Select a file</span>
                        <input type="file" class="upload" @change="fileChanged" id="imageFile">
                    </div>
                    <button type="button" class="btn btn-primary" @click="uploadAvatar" v-show="image">Update</button>
                </div>
            </div>
            <div class="form-group row">
                <label class="col-sm-2 control-label">Username</label>
                <div class="col-sm-10">
                    <input type="text" class="form-control" v-model="user.username">
                </div>
                <label class="col-sm-2 control-label">About</label>
                <div class="col-sm-10">
                    <textarea rows="10" class="form-control" v-model="user.about"></textarea>
                </div>
            </div>
            <p class="text-right"><button class="btn btn-info" type="button" @click="updateSettings">Update information</button></p>
        </form>
    </div>
</template>

<script>
    import clone from 'lodash/clone'

    export default {
        name: 'settings',
        data () {
            return {
                image: null
            }
        },
        computed: {
            user () {
                return clone(this.$store.state.currentUser)
            }
        },
        methods: {
            fileChanged (e) {
                let reader = new FileReader()
                reader.readAsDataURL(e.target.files[0])

                let self = this
                reader.onload = function (e) {
                    self.image = e.target.result
                }
            },
            uploadAvatar () {
                let formData = new FormData()
                formData.append("avatar", document.getElementById('imageFile').files[0])

                this.$http.put('/users/me/avatar', formData)
                    .then(function (res) {
                        this.user.avatar = res.body.avatar
                        this.$store.commit('setCurrentUser', this.user)
                        this.image = null

                        alertify.success("Avatar updated")
                    })
            },
            updateSettings () {
                this.$http.put('/users/me', this.user)
                    .then(function (res) {
                        this.$store.commit('setCurrentUser', this.user)
                        alertify.success('Settings updated')
                    })
            }
        }
    }
</script>

<style scoped>
.img {
    max-width: 200px;
    margin-bottom: 20px;
}
</style>