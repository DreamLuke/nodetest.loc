<template>
    <div class="container">
        <div class="row">
            <div class="col-md-12">
                <label for="title">Наименование позиции</label>
                <input type="text" name="title" id="title" placeholder="Новая позиция" v-model="newTitle">

                <label for="price">Цена за штуку</label>
                <input type="number" name="price" min="0" id="price" placeholder="Цена за штуку" v-model="newPrice">

                <input type="submit" v-on:click="addPosition" value="Добавить">
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
                // newTitle: '',
                // newPrice: '',
                success: '',
            }
        },
        computed: {
            newTitle() {
                return this.$store.state.newTitle
            },
            newPrice() {
                return this.$store.state.newPrice
            },
        },
        mounted() {
            console.log('Component mounted. AddTableComponent.');
        },
        methods: {
            //saveMessage: function () {
            /*addPosition: function () {
                if(this.newTitle == '') {
                    this.newTitle = 'Новая позиция';
                    // alert('Проверка');
                }
                if(this.newPrice == '') {
                    this.newPrice = 0;
                    // alert('Проверка');
                }
                if(this.newTitle == '' && this.newPrice == '') {
                    this.success = '';
                }

                // console.log(this.message)
                //this.$emit('message', this.message);
                var arr = {'title':this.newTitle, 'number':0, 'price':this.newPrice};


                // this.$emit('addPosition', this.newTitle);
                this.$emit('addPosition', arr);

                this.newTitle = '';
                this.newPrice = '';

                alert('Позиция успешно сохранена!');
            },*/
            addPosition: function () {
                this.$store.dispatch('addPosition');
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
