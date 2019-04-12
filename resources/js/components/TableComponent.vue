<template>
    <div class="container">
        <div class="row">
            <div class="col-md-12">
                <button v-on:click="update" class="btn btn-default text mb-1" v-if="!is_refresh">Обновить - {{id}}...</button>
                <span class="badge badge-primary mb-1" v-if="is_refresh">Обновление...</span>
                <table class="table">
                    <thead>
                        <tr>
                            <th>Наименование</th>
                            <th>URL</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="url in urldata">
                            <td>{{ url.title }}</td>
                            <td>{{ url.url }}</td>
                        </tr>
                    </tbody>
                </table>


            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data: function () {
            return {
                urldata: [],
                is_refresh: false,
                id: 0
            }
        },
        mounted() {
            // console.log('Component mounted.')
            // alert('медвед');
            this.update()
        },
        methods: {
            update: function () {

                this.is_refresh = true ;
                axios.get('/start/get-json').then((response) => {
                    console.log(response);
                    this.urldata = response.data;
                    this.is_refresh = false;
                    this.id++;
                });

            }
        }
    }
</script>
