import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import LayoutMain from '../pages/layouts/LayoutMain'
import LayoutAdmin from '../pages/layouts/LayoutAdmin'


//Admin
import Dashboard from '../pages/views/Admin/Dashboard'
import PostsManager from '../pages/views/Admin/Posts'

//Views
import About from '../pages/views/Main/About'
import Home from '../pages/views/Main/Home'
import Category from '../pages/views/Main/Category';
import Contact from '../pages/views/Main/Contact';
import PostDetail from '../pages/views/Main/PostDetails';
import Signin from '../pages/views/Main/Signin';
import LayoutSign from '../pages/layouts/LayoutSign';
import Signup from '../pages/views/Main/Signup';
import AddPost from '../pages/views/Admin/Posts/Add';
import Post from '../pages/views/Main/PostWrite';
import Account from '../pages/views/Main/Account';
import Error404 from '../pages/views/Main/Error/404';
import CategoriesManager from '../pages/views/Admin/Categories';
import AddCategory from '../pages/views/Admin/Categories/Add';
import EditCategory from '../pages/views/Admin/Categories/Edit';
import EditPost from '../pages/views/Admin/Posts/Edit';
import UserManager from '../pages/views/Admin/Users';
import EditUser from '../pages/views/Admin/Users/Edit';
import CommentsManager from '../pages/views/Admin/Comments';
import DetailComments from '../pages/views/Admin/Comments/DetailComments';


const Routers = ({categories, onAddCate, onUpdateCategory, onRemoveCate, 
    loading, postsPerPage,totalPosts,paginate,
    posts, onRemove, onAdd, onUpdate, users, onUpdateUser, onAddUser, comments, onAddComment,onRemoveComment }) => {
    const onHandleRemove = (id) => {
        onRemove(id)
    }
    const onHandleRemoveCate = (id) => {
        onRemoveCate(id)
    }
    const onHandleRemoveComment = (id) => {
        onRemoveComment(id)
    }
    const onHandleUpdate = (id, post) => {
        onUpdate(id, post)
    }
    const onHandleUpdateCate = (id, category) => {
        onUpdateCategory(id, category)
    }
    const onHandleUpdateUser = (id, user) => {
        onUpdateUser(id, user)
    }
    return (
        <Router>
            <Switch>
                <Route path="/admin/:path?/:path?" exact>
                    <LayoutAdmin>
                        <Switch>
                                <Route path='/admin' exact>
                                    <Dashboard posts={posts} categories={categories} users={users}  comments={comments}/>
                                </Route>
                                <Route path='/admin/posts' exact render={(props) =>
                                    <PostsManager {...props} users={users} posts={posts} onRemove={onHandleRemove} cate_name={categories} />
                                }>
                                </Route>
                                <Route path='/admin/posts/add' render={(props) =>
                                    <AddPost {...props} onAdd={onAdd} cate_name={categories} />}>
                                </Route>
                                <Route path='/admin/posts/:id'
                                    render={(props) =>
                                        <EditPost {...props} posts={posts} onUpdate={onHandleUpdate} cate_name={categories}/>
                                    }
                                >
                                </Route>
                                <Route path='/admin/categories' exact render={(props) =>
                                    <CategoriesManager {...props} categories={categories} posts={posts} onRemoveCate={onHandleRemoveCate}/>
                                }></Route>
                                <Route path='/admin/categories/add' render={(props) =>
                                    <AddCategory {...props} onAddCate={onAddCate} />}>
                                </Route>
                                <Route path='/admin/categories/:id'
                                    render={(props) =>
                                        <EditCategory {...props} categories={categories} onUpdateCategory={onHandleUpdateCate} />
                                    }
                                ></Route>

                                <Route path='/admin/users' exact render={(props) =>
                                    <UserManager {...props} users={users}/>
                                }>
                                </Route>
                                <Route path='/admin/users/:id'
                                    render={(props) =>
                                        <EditUser {...props} users={users} onUpdateUser={onHandleUpdateUser} />
                                    }
                                ></Route>
                                
                                <Route path='/admin/comments' exact render={(props) =>
                                    <CommentsManager {...props} posts={posts} comments={comments}/>
                                }>
                                </Route>
                                <Route path='/admin/comments/:id' render={(props) =>
                                    <DetailComments {...props} comments={comments} users={users} posts={posts} onRemoveComment={onHandleRemoveComment} />}>
                                </Route>
                        </Switch>
                    </LayoutAdmin>
                </Route>
                <Route path="/signin" exact>
                    <LayoutSign>
                        <Signin user={users} />
                    </LayoutSign>
                </Route>
                <Route path="/signup" exact>
                    <LayoutSign>
                        <Signup onAddUser={onAddUser}/>
                    </LayoutSign>
                </Route> 

                <Route>
                    <LayoutMain>
                        <Switch>
                            <Route path="/" exact> 
                                <Home  loading={loading} paginate={paginate} postsPerPage={postsPerPage} totalPosts={totalPosts}  posts={posts} cate_name={categories} users={users} />
                            </Route>
                            <Route path="/about">
                                <About />
                            </Route>
                            <Route path="/post">
                                <Post />
                            </Route>
                            <Route path="/category" exact>
                                <Category posts={posts} categories={categories}/>
                            </Route>
                            <Route path='/category/:id'
                                    render={(props) =>
                                        <Category id={props.match.params.id} posts={posts} categories={categories} />
                                    }
                            ></Route>
                            <Route path='/account/:id'
                                render={(props) =>
                                    <Account {...props} users={users} onUpdateUser={onHandleUpdateUser} />
                                }
                            ></Route>
                            <Route path="/contact">
                                <Contact/>
                            </Route>
                            <Route path="/postdetail" exact></Route>
                            <Route path='/postdetail/:id'
                                    render={(props) =>
                                        <PostDetail {...props} id={props.match.params.id} users={users} posts={posts} categories={categories} comments={comments} onAddComment={onAddComment}/>
                                    }
                            ></Route>
                            {/* <Route path="*" exact>
                                <LayoutSign>
                                    <Error404></Error404>
                                </LayoutSign>
                            </Route> */}
                        </Switch>
                    </LayoutMain>
                </Route>
            </Switch>
        </Router>
    )
}

Routers.propTypes = {

}

export default Routers
