<template>
    <div class="container">
        <div class="row">
            <div class="col-md-12">
                <span>Остаток: {{ balance }} грн.</span>
                {{title}}
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
                            <th>{{ url.number*url.price }}</th>
                            <th>
                                <button v-on:click="add(url)" class="btn btn-default text mb-1">+</button>
                                <button v-on:click="subtract(url)" class="btn btn-default text mb-1">-</button>
                                <button v-on:click="reset(url)" class="btn btn-default text mb-1">x</button>
                            </th>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div class="col-md-12">
                <label for="title">Наименование позиции</label>
                <input type="text" name="title" id="title" placeholder="Новая позиция" v-model="newTitle">
                <label for="price">Цена за штуку</label>
                <input type="number" name="price" min="0" id="price" placeholder="Цена за штуку" v-model="newPrice">
                <input type="submit" v-on:click="addPosition" value="Добавить">
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data: function () {
            return {
                balance: 70,
                urldata: [
                    {'title':'Позиция 1', 'number':0, 'price':10},
                    {'title':'Позиция 2', 'number':0, 'price':20},
                    {'title':'Позиция 3', 'number':0, 'price':30},
                ],

                newTitle: '',
                newPrice: '',
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
                    //console.log(this.urldata[0].title);

                    this.urldata = response.data;
                });
            },

            add: function (url) {
                if(this.balance >= url.price) {
                    this.balance -= url.price;
                    url.number++;
                }
            },

            subtract: function (url) {
                if(url.number > 0) {
                    this.balance += parseInt(url.price);
                    url.number--;
                }
            },

            reset: function (url) {
                while(url.number > 0) {
                    this.balance += parseInt(url.price);
                    url.number--;
                }
            },

            addPosition: function () {
                //console.log(this.urldata[this.urldata.length - 1]);
                if(this.newTitle == '') {
                    this.newTitle = 'Новая позиция';
                    // alert('Проверка');
                }
                if(this.newPrice == '') {
                    this.newPrice = 0;
                    // alert('Проверка');
                }

                //var arr = {'title':this.newTitle, 'number':0, 'price':this.newPrice};
                // console.log(arr);
                this.urldata.push({'title':this.newTitle, 'number':0, 'price':this.newPrice});

                console.log(this.urldata[this.urldata.length - 1].title);
                console.log(this.urldata[this.urldata.length - 1].number);
                console.log(this.urldata[this.urldata.length - 1].price);

                this.newTitle = '';
                this.newPrice = '';
            },


        }
    }
</script>
