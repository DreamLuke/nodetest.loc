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
                        <tr v-for="url in urldata">
                            <th>{{ url.title }}</th>
                            <th>{{ url.number }}</th>
                            <th>{{ url.price }}</th>
                            <th>{{ url.number * url.price }}</th>
                            <th><button v-on:click="add(url.price)" class="btn btn-default text mb-1">+</button></th>
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
                balance: 70,
                urldata: [],

                //urldata: [],
                //is_refresh: false,
                //id: 0
            }
        },
        mounted() {
            this.init();

            console.log('Component mounted.');
            // alert('медвед');
            // this.update()
        },
        methods: {
            init: function () {
                axios.get('/table/get-json').then((response) => {
                    // console.log(this.balance);
                    this.urldata = response.data;

                    console.log(this.urldata[0].title);
                    console.log(this.urldata[0].price);

                    console.log(this.urldata[1].title);
                    console.log(this.urldata[2].title);
                });
            },


            add: function (price) {

                if(this.balance >= price) {
                    this.balance -= price;
                }


                /*else if(this.balance == this.urldata[0].price) {
                    this.balance = 0;
                }*/

                /*axios.get('/table/get-json').then((response) => {
                    // console.log(this.balance);
                    this.urldata = response.data;
                    console.log(this.urldata[0].title);
                });*/
            }
        }
    }
</script>
