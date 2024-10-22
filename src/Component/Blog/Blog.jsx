import PropTypes from 'prop-types';
import { FaBookBookmark } from 'react-icons/fa6';
const Blog = ({blog, handleAddToBookMark}) => {
    // console.log(blog)
    const {title, cover, author, author_img, posted_date, reading_time, hashtags}= blog
    return (
        <div className='mb-20'>
            <img className='w-full mb-4' src={cover} alt={`Cover picture for ${title}`} />
            <div className='flex justify-between my-4'>
                <div className='flex'>
                    <img className='w-14' src={author_img} alt="" />
                    <div className='ml-6'>
                        <h3 className='text-2xl'>{author}</h3>
                        <p>{posted_date}</p>
                    </div>
                </div>
                <div>
                    <span>{reading_time} mins read</span>
                    <button className='ml-2'
                    onClick={()=>handleAddToBookMark(blog)}><FaBookBookmark /></button>
                </div>
            </div>
            <h2 className='text-3xl mb-4'>{title}</h2>
            {
                hashtags.map((hash, idx)=><span key={idx}><a href=''>#{hash}</a></span>)
            }
        </div>
    );
};

Blog.propTypes={
    blog: PropTypes.object.isRequired,
    handleAddToBookMark: PropTypes.func.isRequired
}

export default Blog;