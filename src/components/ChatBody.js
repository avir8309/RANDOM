import React, { useEffect } from "react";
import { Icon } from "@iconify/react";
import Card from "./Card";
import { useState } from "react";

const ChatBody = ({ Post }) => {
  const [posts, setposts] = useState([]);
  const handleAdd = () => {
    let randomIndex = Math.floor(Math.random() * Post.length);
    let x = true;
    if (posts.length === Post.length) return;
    for (let i = 0; i < posts.length; i++) {
      if (posts[i].id === Post[randomIndex].id) {
        x = false;
      }
    }
    if (x === false) {
      handleAdd();
    }
    setposts([...posts, Post[randomIndex]]);
  };
  console.log(posts);
  const onHandleDelete = (postToDelete) => {
    const updatedPosts = posts.filter((post) => post.id !== postToDelete.id);
    setposts(updatedPosts);
  };

  useEffect(() => {}, [posts]);
  return (
    <>
      <header className="chat__mainHeader">
        <div class="flex flex-row">
          <div>
            <h1>Free Trial</h1>
            <p class="text-yellow-500 text-sm">Extend Free Trial</p>
          </div>

          <div class="flex flex-row">
            <p>|</p>
          </div>
          <div>
            <p className="ml-5 text-sm">2 days left</p>
          </div>
          <div className="m-auto ml-5">
            <Icon icon="iconoir:profile-circle" width="34" height="34" />
          </div>
          <div className="m-auto ml-3">
            <Icon icon="teenyicons:down-solid" width="24" height="24" />
          </div>
        </div>
      </header>

      {/*This shows messages sent from you*/}
      <div className="message__container">
        <div className="flex flex-row flex-wrap  ">
          <div className="pl-5 pt-5 pr-5 pb-3 border-2 w-50 bg-white rounded-md ml-20 mt-10 mb-10">
            <div className="division">
              <Icon
                icon="material-symbols:add-ad-outline"
                className="w-10 h-10 transition-transform transform-gpu hover:scale-125"
                width="28"
                height="28"
                onClick={handleAdd}
              />
            </div>
            <h1>Create a new project</h1>
            <h2>or Try a Sample</h2>
          </div>

          {posts.map((post) => {
            {
              console.log(post);
            }
            return (
              <div>
                <Card post={post} onHandleDelete={onHandleDelete} />
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default ChatBody;
