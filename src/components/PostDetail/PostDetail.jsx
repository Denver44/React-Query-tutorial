import { useState, useEffect } from "react";
import { fetchComments } from "components/api/helper";
import { useQuery } from "react-query";
import { Spinner, Alert } from "reactstrap";

const PostDetail = ({ post }) => {
  const [comments, setComments] = useState([]);
  const { data, isLoading, isError, error } = useQuery(`post-${post.id}`, () =>
    fetchComments(post.id)
  );

  useEffect(() => {
    if (data?.data) setComments(data.data);
  }, [data]);

  if (isLoading) {
    return <Spinner animation="border" />;
  }
  if (isError) {
    return <Alert variant={"info"}>{error.toString()}</Alert>;
  }

  return (
    <>
      <h3 style={{ color: "blue" }}>{post?.title}</h3>
      <button>Delete</button> <button>Update title</button>
      <p>{post?.body}</p>
      <h4>Comments</h4>
      {comments?.map((comment) => (
        <li key={comment?.id}>
          {comment?.email}: {comment?.body}
        </li>
      ))}
    </>
  );
};

export default PostDetail;
