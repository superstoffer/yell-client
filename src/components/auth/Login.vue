<template>
    <div>
        <h3 class="text-center">Login</h3>
        <div class="form-group">
            <input type="text" class="form-control" placeholder="Email">
            <input type="password" class="form-control" placeholder="Password">
        </div>
        <button class="btn btn-lg btn-primary btn-block">Log in</button>
        <hr>
        <p class="text-center">You don't have an account?</p>
        <p class="text-center"><router-link to="/auth/signup">Sign up</router-link></p>
    </div>
</template>

<script>
    export default {
        name: "login"
    }
</script>

<style scoped>

</style>