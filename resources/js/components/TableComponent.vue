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
                    <tr>
                        <th>Поозиция 1</th>
                        <th>1</th>
                        <th>10</th>
                        <th>10</th>
                        <th><button v-on:click="add" class="btn btn-default text mb-1">+</button></th>
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
                //urldata: [],
                //is_refresh: false,
                //id: 0
            }
        },
        mounted() {
            console.log('Component mounted.');
            // alert('медвед');
            // this.update()
        },
        methods: {
            add: function () {
                this.balance -= 10;

                if(this.balance <= 0) {
                    this.balance = 0;
                }

                /*this.is_refresh = true ;
                axios.get('/start/get-json').then((response) => {
                    console.log(response);
                    // this.urldata = response.data;
                    // this.is_refresh = false;
                    this.balance -= 10;
                });*/
            }
        }
    }
</script>
