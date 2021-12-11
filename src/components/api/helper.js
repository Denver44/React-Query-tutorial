import axios from "components/api/axios";

async function fetchPosts(pageNo) {
  const response = await axios.get(`/posts?_limit=10&_page=${pageNo}`);
  return response;
}

async function fetchComments(postId) {
  const response = await axios.get(`/comments?postId=${postId}`);
  return response;
}

async function deletePost(postId) {
  const response = await axios.delete(`/postId/${postId}`);
  return response;
}

async function updatePost(postId, body = { title: "REACT QUERY FOREVER!!!!" }) {
  const response = await axios.put(`/postId/${postId}`, body);
  return response;
}

export { updatePost, deletePost, fetchComments, fetchPosts };
