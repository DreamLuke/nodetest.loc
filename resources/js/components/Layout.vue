<template>
    <div>
        <header>
            <h1>{{header}}</h1>
        </header>
        <section>
            <div class="row">
                <ul>
                    <li>
                        <router-link to="/">Главная страница</router-link>
                    </li>
                    <li>
                        <router-link to="/table">Таблица</router-link>
                    </li>
                    <li>
                        <router-link to="/add-table-row">Добавить позицию</router-link>
                    </li>
                </ul>
                <div class="col-md-10">
                    <router-view title="Главная страница сайта" v-bind:urldata="urldata" @addPosition="addPositionToArray"></router-view>
                </div>
            </div>
        </section>
        <footer>
            Футер )
        </footer>
    </div>
</template>

<script>
    export default {
        data: function () {
            return {
                /*urldata: [
                    {'title':'Позиция 1', 'number':0, 'price':10},
                    {'title':'Позиция 2', 'number':0, 'price':20},
                    {'title':'Позиция 3', 'number':0, 'price':30},
                ],*/
                // people: ['111', '222', ],

                newTitle: '',
                newPrice: '',
            }
        },
        computed: {
            urldata() {
                return this.$store.state.urldata
            }
        },
        props: ['header'],
        mounted() {
            console.log('Component mounted.');
            // console.log(store.state.count);
        },
        methods: {
            addPositionToArray: function (arr) {
                // console.log(this.message)
                // this.people.push(arr);
                this.urldata.push(arr);
            },
        },

    }
</script>

<style>
    .row {
        margin: 0;
    }
    h1 {
        text-align: center;
    }
    ul {
        margin-left: 0;
        padding-left: 0;
    }
    li {
        list-style-type: none; /* Убираем маркеры */
        padding-left: 10px;
    }
</style>