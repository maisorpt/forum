import React from "react";
import PropTypes from "prop-types";
import { postedAt } from "../utlis";
import ThreadInformation from "./ThreadInformation";
import ThreadComment from "./ThreadComment";

function ThreadDetail({
  id,
  title,
  body = "",
  category,
  createdAt,
  owner = [],
  upVotesBy,
  downVotesBy,
  comments = [],
  upvote,
  downvote,
  neutralvote,
  upvoteComment,
  downvoteComment,
  neutralvoteComment,
  addComment,
}) {
  const totalComments = comments.length;

  const newBody = body.replace(/"/g, "");
  return (
    <>
      <div className="thread">
        <header className="thread-header">
          <div className="thread-header__info">
            <h2 className="thread-header__title">{title}</h2>
            <p className="thread-header__category">#{category}</p>
            <div className="thread-header__profile">
              <img src={owner.avatar} alt="" />
              <div className="thread-header__detail">
                <p className="thread-header__user-name">
                  {owner.name}{" "}
                  <span className="thread-header__user-id">@{owner.name}</span>
                </p>
                <p className="thread-header__post-created">
                  {postedAt(createdAt)}
                </p>
              </div>
            </div>
          </div>
        </header>
        <article>
          <p
            className="thread-detail__body"
            dangerouslySetInnerHTML={{ __html: newBody }}
          />
        </article>
        <footer>
          <ThreadInformation
            id={id}
            upVotesBy={upVotesBy}
            downVotesBy={downVotesBy}
            comments={comments}
            totalComments={totalComments}
            upvote={upvote}
            downvote={downvote}
            neutralvote={neutralvote}
          />
        </footer>
      </div>
      <ThreadComment comments={comments} upvoteComment={upvoteComment} downvoteComment={downvoteComment} neutralvoteComment={neutralvoteComment} addComment={addComment} />
    </>
  );
}

const ownerShape = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
};

const commentShape = {
  id: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  createdAt: PropTypes.string.isRequired,
  owner: PropTypes.shape(ownerShape).isRequired,
  upVotesBy: PropTypes.arrayOf(PropTypes.string).isRequired,
  downVotesBy: PropTypes.arrayOf(PropTypes.string).isRequired,
};

ThreadDetail.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  createdAt: PropTypes.string.isRequired,
  owner: PropTypes.shape(ownerShape).isRequired,
  upVotesBy: PropTypes.arrayOf(PropTypes.string).isRequired,
  downVotesBy: PropTypes.arrayOf(PropTypes.string).isRequired,
  comments: PropTypes.arrayOf(PropTypes.shape(commentShape)).isRequired,
  upvote: PropTypes.func.isRequired,
  downvote: PropTypes.func.isRequired,
  neutralvote: PropTypes.func.isRequired,
  upvoteComment: PropTypes.func.isRequired,
  downvoteComment: PropTypes.func.isRequired,
  neutralvoteComment: PropTypes.func.isRequired,
  addComment: PropTypes.func.isRequired,
};

export default ThreadDetail;
