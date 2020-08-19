import React, { useState, useEffect } from 'react';
import Routers from './routers';
import apiRequest from './api/postApi';
import cateApiRequest from './api/cateApi';
import userApiRequest from './api/userApi';
import commentApiRequest from './api/commentApi';
import { Router, Switch } from 'react-router-dom';
function App() {

  const [posts, setPosts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [users, setUsers] = useState([]);
  const [comments, setComments] = useState([]);
  
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(12);

  //Change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  //POST
  //show post
  useEffect(() => {
    const getPosts = async () => {
      try {
        const { data } = await apiRequest.getAll();
        setPosts(data);
      } catch (error) {
        console.log('failed to request API: ', error)
      }
    }
    getPosts();
  }, []);
  

  //PAGINATION
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);

  //show comments
  useEffect(() => {
    const getComments = async () => {
      try {
        const { data } = await commentApiRequest.getAll();
        setComments(data);
      } catch (error) {
        console.log('failed to request API: ', error)
      }
    }
    getComments();
  }, []);

  //show usser
  useEffect(() => {
    const getUsers = async () => {
      try {
        const { data } = await userApiRequest.getAll();
        setUsers(data);
      } catch (error) {
        console.log('failed to request API: ', error)
      }
    }
    getUsers();
  }, []);

  // CATEGORY
  //show category
  useEffect(() => {
    const getCategories = async () => {
      try {
        const { data } = await cateApiRequest.getAll();
        setCategories(data);
      } catch (error) {
        console.log('failed to request API: ', error)
      }
    }
    getCategories();
  }, []);

  // Xóa bài viết
  const onHandleRemove = async (id) => {
    try {
      const { data } = await apiRequest.remove(id);
      const newPosts = posts.filter(post => post.id !== data.id);
      setPosts(newPosts);
    } catch (error) {
      console.log('failed to request API: ', error)
    }

  }


  // Xóa danh mục
  const onHandleRemoveCate = async (id) => {
    try {
      const { data } = await cateApiRequest.remove(id);
      const newCategories = categories.filter(category => category.id !== data.id);
      setCategories(newCategories);
      //console.log(newCategories);
    } catch (error) {
      console.log('failed to request API: ', error)
    }

  }

  //xoas comment
  // Xóa danh mục
  const onHandleRemoveComments = async (id) => {
    try {
      const { data } = await commentApiRequest.remove(id);
      const newComments = comments.filter(comment => comment.id !== data.id);
      setComments(newComments);
    } catch (error) {
      console.log('failed to request API: ', error)
    }

  }


  // Thêm bài viết
  const onHandleAdd = async (post) => {
    try {
      console.log(post);
      const { data } = await apiRequest.create(post);
      setPosts([
        ...posts,
        data
      ])
    } catch (error) {
      console.log('failed to request API: ', error)
    }
  }

  // Thêm danh mục
  const onHandleAddCate = async (category) => {
    try {
      const { data } = await cateApiRequest.create(category);
      setCategories([
        ...categories,
        data
      ])
    } catch (error) {
      console.log('failed to request API: ', error)
    }
  }

  // Dang ky tai khoan
  const onHandleAddUser = async (user) => {
    try {
      const { data } = await userApiRequest.create(user);
      setUsers([
        ...users,
        data
      ])
    } catch (error) {
      console.log('failed to request API: ', error)
    }
  }

  // Binhf luaanj
  const onHandleAddComment = async (comment) => {
    try {
      const { data } = await commentApiRequest.create(comment);
      setComments([
        ...comments,
        data
      ])
    } catch (error) {
      console.log('failed to request API: ', error)
    }
  }

  // Cập nhật bài viết
  const onHandleUpdate = async (updatePost) => {
    try {
      const newPosts = posts.map(post => (
        post.id === updatePost.id ? updatePost : post  
        // Nếu product.id bằng với id của bài viết vừa chỉnh sửa thì trả về mảng có object mới
      ));
      //console.log(updatePost.id)
      localStorage.setItem('posts', JSON.stringify(newPosts))
      const { data } = await apiRequest.update(updatePost.id, updatePost );
      setPosts(newPosts);
    } catch (error) {
      console.log('failed to request API: ', error)
    }
  }

  //Cập nhật danh mục
  const onHandleUpdateCate = async (updateCate) => {
    try{
      const newCategories = categories.map(category => (
        category.id === updateCate.id ? updateCate : category
      ));
      localStorage.setItem('categories', JSON.stringify(newCategories))
      const { data } = await cateApiRequest.update(updateCate.id, updateCate );
      setCategories(newCategories);
    } catch (error){
      console.log('failed to request API: ', error)
    }
  }

  //Cập nhật taif khoanr
  const onHandleUpdateUser = async (updateUser) => {
    try{
      const newUsers = users.map(user => (
        user.id === updateUser.id ? updateUser : user
      ));
      localStorage.setItem('users', JSON.stringify(newUsers))
      const { data } = await userApiRequest.update(updateUser.id, updateUser );
      setUsers(newUsers);
    } catch (error){
      console.log('failed to request API: ', error)
    }
  }

 
 

  return (
    <div className="App">
      <Routers categories={categories} onAddCate={onHandleAddCate} onRemoveCate={onHandleRemoveCate} onUpdateCategory={onHandleUpdateCate}
       posts={currentPosts} onRemove={onHandleRemove} onAdd={onHandleAdd} onUpdate={onHandleUpdate} 
       users = {users} onUpdateUser={onHandleUpdateUser} onAddUser={onHandleAddUser}
       comments = {comments} onAddComment={onHandleAddComment} onRemoveComment={onHandleRemoveComments}
      loading = {loading}
       
      postsPerPage={postsPerPage}
      totalPosts={posts.length}
      paginate={paginate}
       />
      {/* onRemove={onHandleRemove} onAdd={onHandleAdd} onUpdate={onHandleUpdate} */}
      {/* onAddCate={onHandleAddCate}  onRemoveCate={onHandleRemoveCate} */}
    </div>
  )

}
export default App;