<template>
    <div>
        <div id="yellWrapper">
            <yell v-for="yell in yells" :key="yell.id" :yell="yell" :showUserInfo="showUserInfo"></yell>
        </div>
        <div id="yellsLoading" class="text-center" v-show="yellsLoading">
            <br>
            <i class="fa fa-2x fa-spin fa-spinner"></i>
        </div>
    </div>
</template>

<script>
    import Yell from '../dashboard/Yell';

    export default {
        name: 'YellList',
        props: {
            endpoint: { type: String, default: "/beeps"},
            showUserInfo: { type: Boolean, default: true }
        },
        components: {
            yell: Yell,
        },
        created () {
            this.yells = []
            this.getYells(1)

            window.addEventListener('scroll', this.handleScroll)
        },
        destroyed () {
            window.removeEventListener('scroll', this.handleScroll)
        },
        data () {
            return {
                yells: [],
                page: {},
                yellsLoading: false
            }
        },
        watch: {
            endpoint () {
                this.yells = []
                this.getYells()
            }
        },
        methods: {
            getYells (page) {
                this.yellsLoading = true
                this.$http.get(this.endpoint + '?page=' + page)
                    .then(function (res) {
                        this.yells = this.yells.concat(res.body.data)
                        this.page = { current: res.body.current_page, last: res.body.last_page }
                        this.yellsLoading = false
                    })
                    .catch( function () {
                        this.yellsLoading = false
                })
            },
            handleScroll () {
                if (document.body.scrollHeight - window.innerHeight - document.body.scrollTop == 0) {
                    if (this.page.current < this.page.last) {
                        this.getYells(this.page.current+1)
                    }
                }
            }
        }
    }
</script>

<style scoped>
    #yellWrapper {
        margin: 0 -20px;
    }

    #beepsLoading {
        padding: 40px;
    }

    #beepsLoading i {
        font-size: 40px;
    }
</style>