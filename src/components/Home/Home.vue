<template>
    <h3>
        Ho</h3>
</template>

<script>
    export default {
        name: "Home",
        metaInfo: {
            title: 'Home',
            titleTemplate: '%s - Webpack!',
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
        },
        mounted() {
            console.log('dddddddddddd')
        }
    }
</script>

<style scoped>

</style>