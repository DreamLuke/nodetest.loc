<meta name="csrf-token" content="{{ csrf_token() }}">
<script src="{{ asset('js/app.js') }}" defer></script>
<link href="{{ asset('css/app.css') }}" rel="stylesheet">

<div id="app">
    <prop-component v-bind:urldata="{{ json_encode($url_data) }}"></prop-component>
</div>
