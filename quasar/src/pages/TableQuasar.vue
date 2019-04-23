<template>
    <q-page>
        <header>
            <h1>{{header}}</h1>
        </header>
        <section>
            <div class="row">
                <!-- <div class="col-md-12"> -->
                <div>
                    <span class="center-text">Остаток: {{ balance }} грн.</span>
                    <table class="table">
                        <thead>
                            <tr>
                                <th>Наименование</th>
                                <th>Количество</th>
                                <th>Цена за единицу продукции</th>
                                <th>Общая цена</th>
                                <th class="center-text">Действие</th>
                            </tr>
                        </thead>
                        <tbody>
                        <tr v-for="(url, index) in urldata" :key="url.id">
                            <th class="left-text">{{ url.title }}</th>
                            <th class="center-text">{{ url.number }}</th>
                            <th class="center-text">{{ url.price }}</th>
                            <th class="center-text">{{ url.number*url.price }}</th>
                            <th>
                                <button v-on:click="add(index, url.id)" class="btn btn-default text mb-1">+</button>
                            </th>
                        </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </section>
        <footer>
            Футер )
        </footer>
    </q-page>
</template>

<script>
export default {
  name: 'PageIndex',
  data: function () {
    return {
    }
  },
  computed: {
    header () {
      return this.$store.state.header
    },
    balance () {
      return this.$store.state.balance
    },
    urldata () {
      return this.$store.state.urldata
    }
  },
  methods: {
    add: function (index, id) {
      this.$store.dispatch('add', [index, id])
    }
  }
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
    .left-text {
        text-align: left;
    }
    .center-text {
        text-align: center;
    }
    .table {
        padding-left: 200px;
    }
</style>
