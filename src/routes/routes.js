import News from "../pages/News";
import About from "../pages/About";
import Detail from "../pages/Detail";
import Main from "../pages/Main";
import Contact from "../pages/Contact";

export const routes = [
    {
        path: '/',
        element: Main
    },
    {
        path: '/detail/:id',
        element: Detail
    },
    {
        path: '/about',
        element: About
    },
    {
        path: '/news',
        element: News
    },
    {
        path: '/contact',
        element: Contact
    }
]