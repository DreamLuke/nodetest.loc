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
                            <th>Цена</th>
                            <th>Действие</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="(url, index) in urldata">
                            <th>{{ url.title }}</th>
                            <th>{{ url.number }}</th>
                            <th>{{ url.price }}</th>
                            <th>{{ url.number*url.price }}</th>
                            <th>
                                <!--<button v-on:click="add(url)" class="btn btn-default text mb-1">+</button>-->
                                <button v-on:click="add(index)" class="btn btn-default text mb-1">+</button>
                                <button v-on:click="subtract(index)" class="btn btn-default text mb-1">-</button>
                                <button v-on:click="reset(index)" class="btn btn-default text mb-1">x</button>
                            </th>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data: function () {
            return {
                // newTitle: '',
                // newPrice: '',
                // balance:
            }
        },
        computed: {
            balance() {
                return this.$store.state.balance
            },
            count() {
                return this.$store.state.count
            },
            urldata() {
                return this.$store.state.urldata
            },
        },
        props: ['people'],
        mounted() {
            //this.init();
            console.log('Component mounted.');
            // alert('медвед');
            // this.update()
        },
        methods: {

            /*add: function (url) {
                if(this.balance >= url.price) {
                    this.balance -= url.price;
                    url.number++;
                }
            },*/
            add: function (index) {
                this.$store.dispatch('add', index);
            },

            /*subtract: function (url) {
                if(url.number > 0) {
                    this.balance += parseInt(url.price);
                    url.number--;
                }
            },*/
            subtract: function (index) {
                this.$store.dispatch('subtract', index);
            },

            /*reset: function (url) {
                while(url.number > 0) {
                    this.balance += parseInt(url.price);
                    url.number--;
                }
            },*/

            reset: function (index) {
                this.$store.dispatch('reset', index);
            },

        }
    }
</script>
