<template>
    <div class="container">
        <div class="row">
            <div class="col-md-12">
                <label for="title">Наименование позиции</label>
                <input type="text" name="title" id="title" placeholder="Новая позиция" v-model="newTitle">

                <label for="price">Цена за штуку</label>
                <input type="number" name="price" min="0" id="price" step="0.1" placeholder="Цена за штуку" v-model="newPrice">

                <!--<input type="submit" v-on:click="addPosition([newTitle, newPrice])" value="Добавить">-->
                <input type="submit" v-on:click="updatePosition([newTitle, newPrice, id])" value="Сохранить изменения">
            </div>
        </div>
        Сохранение...
    </div>
</template>

<script>
    export default {
        data: function () {
            return {
                newTitle: '',
                newPrice: '',
                success: '',
                id: this.$route.query.id,
            }
        },
        computed: {
        },
        mounted() {
            console.log('Component mounted. AddTableComponent.' +this.$route.query.id);
        },
        methods: {
            addPosition: function ([newTitle, newPrice]) {
                this.$store.dispatch('addPosition', [newTitle, newPrice]);

                this.newTitle = '';
                this.newPrice = '';
            },

            updatePosition: function ([newTitle, newPrice, id]) {
                this.$store.dispatch('updatePosition', [newTitle, newPrice, id]);

                this.newTitle = '';
                this.newPrice = '';
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
