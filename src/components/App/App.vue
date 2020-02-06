<template>
    <div id="app">
        <Nav/>
        <Content/>
    </div>
</template>

<script>
    import Nav
        from '../Nav/Nav'
    import Content
        from '../Content/Content'

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
