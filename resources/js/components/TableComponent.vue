<template>
    <div class="container">
        <div class="row">
            <div class="col-md-12">
                <span>Остаток: {{ balance }} грн.</span>
                <table class="table">
                    <thead>
                        <tr>
                            <th>Наименование</th>
                            <th>Количество</th>
                            <th>Цена за единицу продукции</th>
                            <th>Общая цена</th>
                            <th class="center-text">Действие</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="(url, index) in urldata">
                            <th>{{ url.title }}</th>
                            <th class="center-text">{{ url.number }}</th>
                            <th class="center-text">{{ url.price }}</th>
                            <th class="center-text">{{ url.number*url.price }}</th>
                            <th>
                                <button v-on:click="add(index, url.id)" class="btn btn-default text mb-1">+</button>
                                <button v-on:click="subtract(index, url.id)" class="btn btn-default text mb-1">-</button>
                                <button v-on:click="reset(index, url.id)" class="btn btn-default text mb-1">x</button>
                                <router-link :to="{path: 'update-table-row', query: { id: url.id }}" class="btn btn-default text mb-1">Редактировать</router-link>
                                <button v-on:click="remove(index, url.id)" class="btn btn-default text mb-1">Удалить</button>
                            </th>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
        {{ date }}
    </div>
</template>

<script>
    export default {
        data: function () {
            return {
                //urldata: []
            }
        },
        computed: {
            balance() {
                return this.$store.state.balance
            },
            urldata() {
                return this.$store.state.urldata
            },
            date() {
                return this.$store.state.date
            },
        },
        mounted() {
            console.log('Component mounted.');
            /*this.getDataFromOrderModel()*/
        },
        methods: {

            first: function () {

            },

            add: function (index, id) {
                // alert('id ' +id);
                this.$store.dispatch('add', [index, id]);
            },

            subtract: function (index, id) {
                this.$store.dispatch('subtract', [index, id]);
            },

            reset: function (index, id) {
                this.$store.dispatch('reset', [index, id]);
            },

            remove: function (index, id) {
                this.$store.dispatch('remove', [index, id]);
            },


        }
    }
</script>

<style>
    .center-text {
        text-align: center;
    }
</style>