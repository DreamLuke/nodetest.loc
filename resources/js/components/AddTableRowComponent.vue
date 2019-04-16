<template>
    <div class="container">
        <div class="row">
            <div class="col-md-12">
                <!--<form action="/table" method="post" @submit="addDataToOrderModel">-->


                    <!--<label for="title">Наименование позиции</label>-->
                    <!--<input type="text" name="title" id="title" placeholder="Новая позиция" v-model="newTitle">-->

                    <!--<label for="price">Цена за штуку</label>-->
                    <!--<input type="number" name="price" min="0" id="price" step="0.1" placeholder="Цена за штуку" v-model="newPrice">-->

                    <!--&lt;!&ndash;<input type="submit" v-on:click="addPosition([newTitle, newPrice])" value="Добавить">&ndash;&gt;-->
                    <!--<input type="submit" value="Добавить">-->
                <!--</form>-->

                <label for="title">Наименование позиции</label>
                <input type="text" name="title" id="title" placeholder="Новая позиция" v-model="newTitle">

                <label for="price">Цена за штуку</label>
                <input type="number" name="price" min="0" id="price" step="0.1" placeholder="Цена за штуку" v-model="newPrice">

                <input type="submit" v-on:click="addPosition([newTitle, newPrice])" value="Добавить">

            </div>
            <div class="success">
                {{success}}
            </div>

        </div>
    </div>
</template>

<script>
    export default {
        data: function () {
            return {
                newTitle: '',
                newPrice: '',
                success: '',
            }
        },
        computed: {
            /*newTitle() {
                return this.$store.state.newTitle
            },
            newPrice() {
                return this.$store.state.newPrice
            },*/
        },
        mounted() {
            console.log('Component mounted. AddTableComponent.');
        },
        methods: {
            addPosition: function ([newTitle, newPrice]) {
                this.$store.dispatch('addPosition', [newTitle, newPrice]);

                this.newTitle = '';
                this.newPrice = '';
            },

            addPosition: function ([newTitle, newPrice]) {
                this.$store.dispatch('addPosition', [newTitle, newPrice]);

                this.newTitle = '';
                this.newPrice = '';


                /*axios.post('/table', {
                    title: 'ТАЙТЛ 88888',
                    number: 0,
                    price: 77764,
                }).then((response) => {
                    console.log('add ' + response.data.title);
                });*/

            },
        },
    }
</script>

<style>
    .success {
        text-style: bold;
        color: green;
    }
</style>
