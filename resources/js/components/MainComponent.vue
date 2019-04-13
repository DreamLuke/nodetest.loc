<template>
    <div class="container">
        <b>Главная страница сайта</b>
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
