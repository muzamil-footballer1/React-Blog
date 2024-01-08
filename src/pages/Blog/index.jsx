import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { blogList } from '../../config/data';
import Chip from '../../components/common/Chip';
import EmptyList from '../../components/common/EmptyList';
import './styles.css';
import { Link } from 'react-router-dom';

const Blog = () => {
  const { id } = useParams();
  const [blog, setBlog] = useState(null);

  useEffect(() => {
    let blog = blogList.find((blog) => blog.id === parseInt(id));
    if (blog) {
      setBlog(blog);
    }
    //eslint-disable-next-line
  }, []);

  return (
    <>
      <Link className='blog-goBack' to='/'>
        <span> &#8592;</span> <span>Go Back</span>
      </Link>
      {blog ? (
        <div className='blog-wrap'>
          <header>
            <p className='blog-date'>Published {blog.createdAt}</p>
            <h1>{blog.title}</h1>
            <div className='blog-subCategory'>
              {blog.subCategory.map((category, i) => (
                <div key={i}>
                  <Chip label={category} />
                </div>
              ))}
            </div>
          </header>
          {/* <video className='blog-video' src={blog.video} alt='cover' /> */}
          <video width="400" controls autoPlay>
            <source src={blog.video} type="video/mp4"/>
            {/* <source src={blog.video} type="video/ogg"/> */}
              Your browser does not support HTML video.
          </video>
          
          <p className='blog-desc'>{blog.description}</p>
        </div>
      ) : (
        <EmptyList />
      )}
    </>
  );
};

export default Blog;
