import Post from "./Post"

function PostList({post}){

  
return(
<>
  {post.map((val,index)=>(
    <div key={index}>
<Post post={val}>{val}</Post>
    </div>
    
  ))}
 </>
)
    
}
export default PostList

