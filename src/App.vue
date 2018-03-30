<template>
    <div id="app">
        <transition name="scale">
            <router-view></router-view>
        </transition>
    </div>
</template>

<script>

</script>

<style>
    #app {
        font-family: 'Open Sans', sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        color: #2c3e50;
        margin-top: 60px;
    }
    .scale-enter-active {

    }
    .scale-enter {

    }
    .scale-leave {
        transform: scale(1, 1);
    }
    .scale-leave-active {
        position: absolute;
        overflow: hidden;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        transition: transform 0.5s;
        -webkit-transition: transform 0.5s;
        transform: scale(0, 0);
        z-index: 20;
    }
</style>
