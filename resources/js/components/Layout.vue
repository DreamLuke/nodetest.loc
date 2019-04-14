<template>
    <div>
        <header>
            <h1>Мой сайт по изучению Vue.js</h1>
        </header>
        <section>
            <div class="row">
                <div class="col-md-2 side__bar">
                    <ul>
                        <li>
                            <router-link to="/">Главная страница</router-link>
                        </li>
                        <li>
                            <router-link to="/table">Таблица</router-link>
                        </li>
                    </ul>
                </div>
                <div class="col-md-10">
                    <router-view></router-view>
                </div>
            </div>
        </section>
        <footer>
            Футер )
        </footer>
    </div>
</template>

<script>
</script>

<style>
    h1 {
        text-align: center;
    }
    ul {
        margin-left: 10px;
        padding-left: 10px;
    }
    li {
        list-style-type: none; /* Убираем маркеры */
    }
</style>