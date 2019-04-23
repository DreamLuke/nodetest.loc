<template>
  <q-page>
    <header>
      <h1>{{header}}</h1>
    </header>
    <section>
      <div class="row">
        <div class="col-md-10">
          {{title}}
          <router-view></router-view>
        </div>
      </div>
    </section>
    <footer>
      Футер )
    </footer>
  </q-page>
</template>

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

<script>
export default {
  name: 'PageIndex',
  data: function () {
    return {
      // header: 'По изучению'
    }
  },
  computed: {
    header () {
      return this.$store.state.header
    },
    title () {
      return this.$store.state.title
    },
    balance () {
      return this.$store.state.balance
    }
  }
}
</script>
