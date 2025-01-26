
import './App.css'
import "bootstrap/dist/css/bootstrap.min.css";
import PostList from './Components/PostList';
import CreatePost from './Components/CreatePost';

function App() {

  let Post_Item=[
    {
      id:1,
      title:"vacation",
      body:"I am going to mumbai",
      reactions:2,
      tags: ["vacation","mumbai","enjoy"]
    },
    {
      id:2,
      title:"School",
      body:"I am going to School",
      reactions:10,
      tags: ["Schoolies","Study"]
    }
  ]
  return (
    <>
  <PostList post={Post_Item}></PostList>
 <CreatePost></CreatePost>
 </>
  )
}

export default App
