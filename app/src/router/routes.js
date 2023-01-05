
import Login from '@/pages/Login'
import Register from '@/pages/Register'
import Detail from '@/pages/Detail'
import AddCartSuccess from '@/pages/AddCartSuccess'
import ShopCart from '@/pages/ShopCart'
import Center from '@/pages/Center'
import Trade from '@/pages/Trade'
import Pay from '@/pages/Pay'
import PaySuccess from '@/pages/PaySuccess'

//二级路由
import MyOrder from '@/pages/Center/myOrder'
import GroupOrder from '@/pages/Center/groupOrder'

export default [
    {
        path: '*',
        redirect: '/home'
    },
    {
        path: '/home',
        component: ()=>import('@/pages/Home'),
        meta: {
            showFooter: true,
        }
    },
    {
        name: 'search',
        path: '/search/:keyword?',
        component: ()=>import('@/pages/Search'),
        meta: {
            showFooter: true,
        }
    },
    {
        path: '/login',
        component: Login,
        meta: {
            showFooter: false,
        }
    },
    {
        path: '/register',
        component: Register,
        meta: {
            showFooter: false,
        }
    },
    {
        name: 'detail',
        path: '/detail/:skuid?',
        component: Detail,
        meta: {
            showFooter: true,
        }
    },
    {
        name: 'addcartsuccess',
        path: '/addcartsuccess/:skuid?',
        component: AddCartSuccess,
        meta: {
            showFooter: true,
        }
    },
    {
        name: 'shopcart',
        path: '/shopcart',
        component: ShopCart,
        meta: {
            showFooter: true,
        }
    },
    {
        name: 'trade',
        path: '/trade',
        component: Trade,
        meta: {
            showFooter: true,
        },
        beforeEnter: (to, from, next) => {
            if (from.path == '/shopcart') {
                next()
            }else{
                next(false)
            }
        }
    },
    {
        name: 'pay',
        path: '/pay',
        component: Pay,
        meta: {
            showFooter: true,
        },
        beforeEnter: (to, from, next) => {
            if (from.path == '/trade') {
                next()
            }else{
                next(false)
            }
        }
    },
    {
        name: 'paysuccess',
        path: '/paysuccess',
        component: PaySuccess,
        meta: {
            showFooter: true,
        },
        beforeEnter: (to, from, next) => {
            if (from.path == '/pay') {
                next()
            }else{
                next(false)
            }
        }
    },
    {
        name: 'center',
        path: '/center',
        component: Center,
        meta: {
            showFooter: true,
        },
        children: [
            {
                name: 'MyOrder',
                path: 'myorder',
                component: MyOrder,
            },
            {
                name: 'GroupOrder',
                path: 'grouporder',
                component: GroupOrder,
            },
            {
                path: '/center',
                redirect: '/center/myorder'
            }
        ]
    }
]