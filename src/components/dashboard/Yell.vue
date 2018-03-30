<template>
    <div class="yell">
        <div class="row">
            <div class="col-sm-2 text-center">
                <router-link :to="'/profile/'+yell.author.username">
                    <img :src="yell.author.avatar" class="yell-img rounded img-thumbnail">
                </router-link>
            </div>
            <div class="col-sm-10">
                <router-link :to="'/profile/'+yell.author.username">@{{yell.author.username}}</router-link>
                <small class="text-muted">said:<br><br></small>
                <p :class="{
                    small: yell.text.length >= 150,
                    medium: yell.text.length <150 && yell.text.length > 50,
                    big: yell.text.length <= 50
                }">
                    {{ yell.text }}
                </p>
            </div>
        </div>
        <div class="yellFooter">
            <button class="btn" @click="likeYell" :class="[yell.liked ? 'btn-primary' : ' btn-default']">
                <i class="fa fa-heart" :class="[yell.liked ? 'fa-heart' : 'fa-heart-o']"></i>
                {{yell.likes}} like{{yell.likes != 1 ? 's' : ''}}
            </button>
            <strong class="pull-right">
                <i class="fa fa-calendar"></i> {{ yellDate(yell.created_at) }}
                <i class="fa fa-clock-o"></i> {{ yellTime(yell.created_at) }}
            </strong>
        </div>
    </div>
</template>



<script>
    import moment from 'moment'

    export default {
        name: 'yell',
        props: {yell:{}},
        methods: {
            likeYell: function () {
                this.$http.patch('/beeps/' + this.yell.id + '/like')
                    .then(function (res) {
                        if (this.yell.liked) {
                            this.yell.likes--
                            this.yell.liked = false
                        } else {
                            this.yell.likes++
                            this.yell.liked = true
                        }
                    })
            },
            yellDate (timestamp) {
                return moment(timestamp*1000).format('dddd - DD-MM-YYYY')
            },
            yellTime (timestamp) {
                return moment(timestamp*1000).format("HH:mm")
            }
        }
    }
</script>

<style scoped>
    .yell-img {
        width: 50px;
    }
    .yell {
        background: #f0f0f0;
        border-bottom: 1px solid #d6d6d6;
        padding: 40px 20px 0px;
    }

    .yell p {
        margin: 0;
    }

    .yell img {
        max-width: 100%;

    }

    .yell .row {
        display: flex;
        align-items: center;
    }

    .small {
        font-size: 13px;
    }

    .medium {
        font-size: 18px
    }

    .big {
        font-size: 23px;
    }

    .yellFooter {
        margin: 40px -20px 0;
        background: #f8f8f8;
        color: #734b6d;
        padding: 10px 20px;
    }

    .yellFooter .btn-default {
        color: #734b6d;
    }

    .yellFooter .btn-primary {
        background: #734b6d;
    }

    .yellFooter strong {
        margin-top: 7px;
    }
</style>