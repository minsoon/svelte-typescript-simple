<script lang="ts">
  import Router from 'svelte-spa-router';
  import routes from './routes';
</script>

<style>
  :global(body) {
    display: flex;
    justify-content: center;
    align-items: center;
  }
</style>

<Router {routes}/>
