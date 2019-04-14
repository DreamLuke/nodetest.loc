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
                </ul>
                <div class="col-md-10">
                    <router-view title="Главная страница сайта"></router-view>
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
        props: ['header']
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