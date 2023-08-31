import { Navigate, Route, Routes } from "react-router-dom";
import { Subreddits } from "./pages/Subreddits";
import { SubredditDetails } from "./pages/SubredditDetails";
import { Posts } from "./pages/Posts";
import { PostDetails } from "./pages/PostDetails";

export const RouteContainer = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Navigate to="/subreddits" />} />
        <Route path="/subreddits" element={<Subreddits />} />
        <Route path="/subreddits/:subredditId" element={<SubredditDetails />} />
        <Route path="/subreddits/:subredditId/posts" element={<Posts />} />
        <Route
          path="/subreddits/:subredditId/posts/:postId"
          element={<PostDetails />}
        />

        <Route path="*" element={<div>Error 404</div>} />
      </Routes>
    </>
  );
};
