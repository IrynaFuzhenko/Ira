import {useParams} from "react-router-dom";

const Post = () => {
  const data = useParams();
  return <>
      <h1>Post Page ({data.postId})</h1>
  </>
}
export default Post;