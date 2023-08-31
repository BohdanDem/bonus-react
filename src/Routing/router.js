import {createBrowserRouter} from "react-router-dom";
import App from "../App";
import UsersPage from "../pages/UsersPage";
import PostsPage from "../pages/PostsPage";
import CommentsPage from "../pages/CommentsPage";
import {getAllUsers, getPostsOfCurrentUser} from "../services/UsersApiServices";
import PostsOfUsersPage from "../pages/PostsOfUsersPage";
import {getAllPosts} from "../services/PostsApiServices";
import CommentsOfPost from "../pages/CommentsOfPost";

export const routers = createBrowserRouter([
    {
        path:'/',
        element: <App/>,
        children: [
            {
                path: 'users',
                element: <UsersPage/>,
                loader: getAllUsers,
            },
            {
                path: 'posts',
                element: <PostsPage/>,
                loader: getAllPosts,
                children: [
                    {
                        path: ':id',
                        element: <CommentsOfPost/>
                    }
                ]
            },
            {
                path: 'comments',
                element: <CommentsPage/>
            },
            {
                path: 'users/:id',
                element: <PostsOfUsersPage/>,
                loader: getPostsOfCurrentUser
            }
        ]
    }
])