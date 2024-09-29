

import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";
//import ErrorPage from "/src/assets/component/Errorpage.jsx";

import About from '/src/component/About.jsx'
import Contact from '/src/component/Contact.jsx'

import App from '/src/App.jsx'

const router = createBrowserRouter([
   /* {
        path: "/",
        element: <App />,
        errorElement: <ErrorPage />
    },*/
    {
        path: "/home",
        element: <App></App>
    },
    {
        path: "/about",
        element: <About></About>
    },
    {
        path: "/contact",
        element: <Contact></Contact>
    },
]);
function Router() {
    return (
        <div>
            <RouterProvider router={router} />

        </div>
    )
}

export default Router