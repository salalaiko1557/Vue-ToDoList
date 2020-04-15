<template>
    <div>
        <v-footer
                color="#E1E1E1"
                padless
        >
            <v-row
                    justify="left"
                    no-gutters
            >
                <v-btn
                        v-for="(link, index) in links"
                        :key="index"
                        color="black"
                        style="font-weight:300"
                        text
                        rounded
                        class="my-2"
                        @click="redirect(link.url)"

                >
                    {{ link.name }}
                </v-btn>
                <div class="input">
                    <v-text-field
                            v-model="value"
                            color="black"
                    ></v-text-field>
                </div>
            </v-row>
        </v-footer>
    </div>
</template>

<script>
    export default {
        name: "Header",
        data: () => ({
            value: '',
            links: [
                {name: 'ToDoList', url: '/'},
                {name: 'GitHub', url: '/github'},
                {name: 'Value', url: '/value'}
            ],
            placeholder: ''
        }),
        methods: {
            redirect(url) {
                if (url === '/value' && this.value) {
                    this.$router.push({
                        name: 'Value',
                        params: {value: this.value}
                    })
                } else {
                    this.$router.push(url)
                }
            }
        }
    }

</script>

<style scoped>

    .input {
        width: 80px;
        margin-top: -10px;
    }

</style>