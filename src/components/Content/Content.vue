<template>

    <div class="content">
        <transition
                name="content"
                mode="out-in">
            <router-view>
            </router-view>
        </transition>
    </div>
</template>

<script>
    export default {
        name: "Content"
    }
</script>

<style scoped
       src="./Content.scss">
</style>