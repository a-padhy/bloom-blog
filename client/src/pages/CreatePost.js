import React from "react";

const CreatePost = () => {
  return (
    <form>
      <input type="title" placeholder="title" />
      <input type="summary" placeholder="summary" />
      <input type="file" />
      {/* <textarea name="" rows="10" cols="30" id=""></textarea> */}
    </form>
  );
};

export default CreatePost;
