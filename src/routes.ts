import Main from './views/Main.svelte';
import Todolist from './views/Todolist.svelte';

const routes: Object = {
    '/': Main,
    '/todo': Todolist,
    '*': Main,
}

export default routes;