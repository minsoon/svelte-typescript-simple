import Main from './views/Main.svelte'
import Test from './views/Test.svelte'

const routes = {
    // Exact path
    '/': Main,
    '/test': Test,
    '*': Main,
}

export default routes;