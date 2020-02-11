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
        },
        metaInfo: {
            title: 'My Example App',
            titleTemplate: '%s - Yay!',
            meta: [
                {
                    hid: 'og:title',
                    name: 'og:title',
                    content: 'Hello World'
                },
                {
                    hid: 'description',
                    name: 'description',
                    content: 'Hello World'
                }
            ]
        }

    }
</script>

<style lang="scss"
       src="./App.scss">
</style>
