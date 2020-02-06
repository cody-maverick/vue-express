<template>
    <div class="nav-wrapper"
         ref="nav">
        <button @click="toggleNav($event)"
                class="nav-button">
            x
        </button>
        <div class="nav">
            <h3>
                Nav
            </h3>
            <ul class="nav-list">
                <li class="nav-list__item"
                    v-for="{name, path} in links">
                    <router-link
                            :to="path"
                            class="nav-list__link"
                            active-class="nav-list__link--active"
                            exact>
                        {{name}}
                    </router-link>
                </li>
            </ul>
        </div>
    </div>

</template>

<script>
    export default {
        name: "Nav",
        data() {
            return {
                links: [
                    {
                        name: 'Home',
                        path: "/",
                    },
                    {
                        name: 'About',
                        path: "/about",
                    },
                ],
                show: false
            }
        },
        methods: {
            toggleNav: function ($event) {
                this.show = !this.show;
                this.$refs.nav.classList.toggle('nav-wrapper__active')
            }
        }
    }
</script>

<style scoped
       lang="scss"
       src="./Nav.scss">
</style>