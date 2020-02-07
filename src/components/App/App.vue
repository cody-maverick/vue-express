<template>
    <div id="app">
        <Nav/>
        <Content/>
    </div>
</template>

<script>
    import Nav
        from '../Nav/Nav.vue'
    import Content
        from '../Content/Content.vue'

    export default {
        name: 'App',
        components: {
            Nav,
            Content
        }
    }
</script>

<style lang="scss"
       src="./App.scss">
</style>
