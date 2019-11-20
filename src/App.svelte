<script>
  import Router from 'svelte-spa-router';
  import {location, querystring} from 'svelte-spa-router'
  import routes from './routes';
</script>

<svelte:head>
  <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css">
  <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons">
  <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,600,700">
  <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto+Mono">

  :global(body) {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  
</svelte:head>

<Router {routes}/>
