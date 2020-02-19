<template>
    <simplebar
            data-simplebar-auto-hide="false">
        <div class="content">
            <transition
                    enter-active-class="router-animation animated fadeInDown"
                    leave-active-class="router-animation animated fadeOutDown"
                    mode="out-in">
                <router-view/>
            </transition>
        </div>
    </simplebar>

</template>

<script>
    import simplebar
        from 'simplebar-vue'
    import 'simplebar/dist/simplebar.min.css';

    export default {
        name: "Content",
        components: {
            simplebar
        }
    }
</script>

<style scoped
       src="./Content.scss">
</style>