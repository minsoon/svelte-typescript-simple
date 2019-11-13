<script lang="ts">
    import {link} from 'svelte-spa-router'
    import Test from './test';
    
    const a: string = "Svelte",
        b: string = "Typescript",
        c: string = "Rollup";
    console.log(Test);
</script>

<h1><a href="/test" use:link>{a} + {b} + {c}</a></h1>
