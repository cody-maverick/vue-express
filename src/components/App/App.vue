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
    // import '../../assets/_vars.scss'
    import '../../assets/_global.scss'

    export default {
        name: 'App',
        components: {
            Nav,
            Content
        },
        beforeCreate: () => {
        }
    }
</script>

<style lang="scss"
       src="./App.scss">
</style>
