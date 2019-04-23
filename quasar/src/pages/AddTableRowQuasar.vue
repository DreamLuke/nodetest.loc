<template>
    <q-page>
        <header>
            <h1>{{header}}</h1>
        </header>
        <section>
            <div class="row">
                <!-- <div class="col-md-12"> -->
                <div>
                    <label for="title">Наименование позиции</label>
                    <input type="text" name="title" id="title" placeholder="Новая позиция" v-model="newTitle">

                    <label for="price">Цена за штуку</label>
                    <input type="number" name="price" min="0" id="price" step="0.1" placeholder="Цена за штуку" v-model="newPrice">
                    <input type="submit" v-on:click="addPosition([newTitle, newPrice])" value="Добавить">
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
      newTitle: '',
      newPrice: ''
    }
  },
  computed: {
    header () {
      return this.$store.state.header
    },
    balance () {
      return this.$store.state.balance
    }
  },
  methods: {
    addPosition: function ([newTitle, newPrice]) {
      this.$store.dispatch('addPosition', [newTitle, newPrice])
      this.newTitle = ''
      this.newPrice = ''
    }
  }
}
</script>

<style>
    .success {
        text-style: bold;
        color: green;
    }
</style>
