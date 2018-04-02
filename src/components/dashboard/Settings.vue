<template>
    <div id="settings">
        <h2>Settings</h2>
        <form class="form-horizontal">
            <div class="form-group row">
                <label class="control-label col-sm-2">Avatar</label>
                <div class="text-center col-sm-10">
                    <img :src="user.avatar" class="img"><br>
                    <div class="fileUpload btn btn-info">
                        <span>Select a file</span>
                        <input type="file" class="upload" @change="fileChanged" id="iamgeFile">
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
                user: {}
            }
        },
        methods: {
            fileChanged (e) {

            },
            uploadAvatar () {

            },
            updateSettings () {

            }
        }
    }
</script>

<style scoped>

</style>