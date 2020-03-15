

const routes = [
    {
        path: '/',
        component: resolve => require(['../views/Home.vue'], resolve),
        children: [
            {
                path: '',
                component: resolve => require(['../components/Welcome.vue'], resolve),
            },
            {
                path: '/usuarios',
                component: resolve => require(['../components/Users.vue'], resolve),
            },
        ]
    },
]

export default routes
