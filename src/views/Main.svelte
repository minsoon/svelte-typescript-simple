<script lang="ts">
    import {link} from 'svelte-spa-router';
    import { Toast, ToastBody, ToastHeader } from 'sveltestrap';
    const colors: object = [
        "primary", "secondary", "success", "danger", "warning", "info", "light", "dark"
    ];
    const a: string = "Svelte",
        b: string = "Typescript",
        c: string = "Rollup";
    console.log(location);
</script>

{#each colors as color}
  <div class="p-3 bg-{color} mb-3">
    <Toast class="mr-1" {color}>
      <ToastHeader>
        Sveltestrap
      </ToastHeader>
      <ToastBody>
        This is a toast on a {color} background — check it out!
      </ToastBody>
    </Toast>
  </div>
{/each}
<h1><a href="/todo" use:link>{a} + {b} + {c}</a></h1>
