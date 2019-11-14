<script lang="ts">
    import {link} from 'svelte-spa-router'
    
    const a: string = "Svelte",
        b: string = "Typescript",
        c: string = "Rollup";
</script>

<h1><a href="/todo" use:link>{a} + {b} + {c}</a></h1>
