import Main from './views/Main.svelte';
import Svelte from './views/Svelte.svelte'
import Typescript from './views/Typescript.svelte'
import NotFound from './views/NotFound.svelte'

const routes = {
    '/': Main,
    '/svelte': Svelte,
    '/typescript': Typescript,
    '*': NotFound
};

export default routes;