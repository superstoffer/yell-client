<template>
    <div id="auth">
        <div class="container">
            <div class="row">
                <div class="col-md-4 offset-md-4">
                    <h1 class="text-center">Yell</h1>
                    <transition name="fade">
                        <router-view></router-view>
                    </transition>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "auth"
    }
</script>

<style>
    .fade-enter-active {
        transition: opacity .5s;
        -webkit-transition: opacity .5s;
        opacity: 1;
    }
    .fade-enter {
        opacity: 0;
    }
    .fade-leave {
        display: none;
    }
    .fade-leave-active {
        display: none;
    }
</style>