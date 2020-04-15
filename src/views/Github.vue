<template>
    <div>
        <Header/>
        <div class="block">
            <input class="input" v-model="name" placeholder="Введите никнейм">
            <v-btn @click="api" class="search" color="rgba(0, 0, 0, 1)" fab x-small blue>
                <v-icon color="rgba(255, 255, 255, 1)">search</v-icon>
            </v-btn>
        </div>
        <span style="margin-left: 20px; color: rgba(255,45,12,0.42);">{{error}}</span>
        <div class="card-user" v-show=view>
            <v-card
                    class="mx-auto"
                    max-width="344"
                    outlined
            >
                <v-list-item three-line>
                    <v-list-item-content>
                        <div class="overline mb-4">{{info.name}}</div>
                        <v-list-item-title class="headline mb-1">ID: {{info.id}}</v-list-item-title>
                        <v-list-item-subtitle>{{info.html_url}}</v-list-item-subtitle>
                    </v-list-item-content>

                    <v-avatar
                            tile
                            size="80"
                    >
                        <img :src="info.avatar_url">
                    </v-avatar>
                </v-list-item>
            </v-card>
        </div>
        <div class="store">
            <p style="height: 30px; width: 100px; border: 1px solid #ccc; font-size: 20px; text-align: center">
                {{getValueFromStore}}</p>
            <!--            <p><v-btn @click="getValueFromStore" small >Получить</v-btn></p>-->
        </div>
    </div>
</template>

<script>
    import Header from '@/components/Header'
    import axios from 'axios'

    export default {
        name: "Github",
        components: {
            Header
        },

        data: () => {
            return {
                param_for_store: '',
                name: '',
                info: {},
                view: false,
                error: null
            }
        },
        methods: {
            // getValueFromStore() {
            //     this.param_for_store = this.$store.getters.getValue;
            // },

            api() {
                axios
                    .get('https://api.github.com/users/' + this.name)
                    .then((response) => {
                        console.log(response);
                        this.error = null;
                        if (response.data.id !== 'undefined') {
                            this.info = response.data;
                            this.view = true;
                        }
                    })
                    .catch(() => {
                            this.view = false;
                            this.error = 'Юзер не найден';
                        }
                    );


            }
        },

        computed: {

            getValueFromStore() {
                return this.$store.getters.getValue;
            },

        }

    }
</script>

<style scoped>

    .block {
        width: 250px;
        margin-top: 20px;
        margin-left: 20px;
        display: flex;
    }

    .input {
        border: 1px solid #d2d2d3;
        border-radius: 3px;
        padding-left: 10px;
    }

    .search {
        margin-left: 5px;
    }

    .card-user {
        position: absolute;
        margin-left: 20px;
    }

    .store {
        margin-left: 23px;
        margin-top: 120px;
        height: 150px;
    }

</style>