import Authorization from '@/pages/Authorization';
import Work from '@/pages/Work';
import Chat from '@/pages/Chat';
import E404 from '@/pages/E404';

const routes = [
    {
        name: 'authorization',
        path: '/',
        component: Authorization
    },
    {
        name: 'work',
        path: '/work',
        component: Work,
        exact: false
    },
    {
        name: 'chat',
        path: '/chat',
        component: Chat,
        exact: false
    },
    {
        path: '**',
        component: E404
    }
]

let routesMap = {};

routes.forEach(route => {
    if(route.hasOwnProperty('name')){
        routesMap[route.name] = route.path;
    }
});

export { routes, routesMap };
