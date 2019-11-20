
import { wrap } from 'svelte-spa-router';
import Main from './views/Main.svelte';
import Todolist from './views/Todolist.svelte';

const routes = {
    '/': Main,
    '/todo': wrap(
        Todolist,
        (location) => {
            return true;
        }
    ),
    '*': Main,
}

export default routes;