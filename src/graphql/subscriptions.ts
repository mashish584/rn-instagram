/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateLike = /* GraphQL */ `
  subscription OnCreateLike($filter: ModelSubscriptionLikeFilterInput) {
    onCreateLike(filter: $filter) {
      id
      userID
      postID
      User {
        id
        name
        email
        bio
        username
        website
        nofPosts
        nofFollowers
        Posts {
          nextToken
          startedAt
          __typename
        }
        Comments {
          nextToken
          startedAt
          __typename
        }
        Likes {
          nextToken
          startedAt
          __typename
        }
        nofFollowings
        image
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        __typename
      }
      Post {
        id
        description
        video
        image
        images
        nofComments
        nofLikes
        createdAt
        type
        userID
        User {
          id
          name
          email
          bio
          username
          website
          nofPosts
          nofFollowers
          nofFollowings
          image
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          __typename
        }
        Comments {
          nextToken
          startedAt
          __typename
        }
        Likes {
          nextToken
          startedAt
          __typename
        }
        updatedAt
        _version
        _deleted
        _lastChangedAt
        __typename
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
  }
`;
export const onUpdateLike = /* GraphQL */ `
  subscription OnUpdateLike($filter: ModelSubscriptionLikeFilterInput) {
    onUpdateLike(filter: $filter) {
      id
      userID
      postID
      User {
        id
        name
        email
        bio
        username
        website
        nofPosts
        nofFollowers
        Posts {
          nextToken
          startedAt
          __typename
        }
        Comments {
          nextToken
          startedAt
          __typename
        }
        Likes {
          nextToken
          startedAt
          __typename
        }
        nofFollowings
        image
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        __typename
      }
      Post {
        id
        description
        video
        image
        images
        nofComments
        nofLikes
        createdAt
        type
        userID
        User {
          id
          name
          email
          bio
          username
          website
          nofPosts
          nofFollowers
          nofFollowings
          image
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          __typename
        }
        Comments {
          nextToken
          startedAt
          __typename
        }
        Likes {
          nextToken
          startedAt
          __typename
        }
        updatedAt
        _version
        _deleted
        _lastChangedAt
        __typename
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
  }
`;
export const onDeleteLike = /* GraphQL */ `
  subscription OnDeleteLike($filter: ModelSubscriptionLikeFilterInput) {
    onDeleteLike(filter: $filter) {
      id
      userID
      postID
      User {
        id
        name
        email
        bio
        username
        website
        nofPosts
        nofFollowers
        Posts {
          nextToken
          startedAt
          __typename
        }
        Comments {
          nextToken
          startedAt
          __typename
        }
        Likes {
          nextToken
          startedAt
          __typename
        }
        nofFollowings
        image
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        __typename
      }
      Post {
        id
        description
        video
        image
        images
        nofComments
        nofLikes
        createdAt
        type
        userID
        User {
          id
          name
          email
          bio
          username
          website
          nofPosts
          nofFollowers
          nofFollowings
          image
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          __typename
        }
        Comments {
          nextToken
          startedAt
          __typename
        }
        Likes {
          nextToken
          startedAt
          __typename
        }
        updatedAt
        _version
        _deleted
        _lastChangedAt
        __typename
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
  }
`;
export const onCreateComment = /* GraphQL */ `
  subscription OnCreateComment($filter: ModelSubscriptionCommentFilterInput) {
    onCreateComment(filter: $filter) {
      id
      comment
      createdAt
      userID
      postID
      User {
        id
        name
        email
        bio
        username
        website
        nofPosts
        nofFollowers
        Posts {
          nextToken
          startedAt
          __typename
        }
        Comments {
          nextToken
          startedAt
          __typename
        }
        Likes {
          nextToken
          startedAt
          __typename
        }
        nofFollowings
        image
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        __typename
      }
      Post {
        id
        description
        video
        image
        images
        nofComments
        nofLikes
        createdAt
        type
        userID
        User {
          id
          name
          email
          bio
          username
          website
          nofPosts
          nofFollowers
          nofFollowings
          image
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          __typename
        }
        Comments {
          nextToken
          startedAt
          __typename
        }
        Likes {
          nextToken
          startedAt
          __typename
        }
        updatedAt
        _version
        _deleted
        _lastChangedAt
        __typename
      }
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
  }
`;
export const onUpdateComment = /* GraphQL */ `
  subscription OnUpdateComment($filter: ModelSubscriptionCommentFilterInput) {
    onUpdateComment(filter: $filter) {
      id
      comment
      createdAt
      userID
      postID
      User {
        id
        name
        email
        bio
        username
        website
        nofPosts
        nofFollowers
        Posts {
          nextToken
          startedAt
          __typename
        }
        Comments {
          nextToken
          startedAt
          __typename
        }
        Likes {
          nextToken
          startedAt
          __typename
        }
        nofFollowings
        image
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        __typename
      }
      Post {
        id
        description
        video
        image
        images
        nofComments
        nofLikes
        createdAt
        type
        userID
        User {
          id
          name
          email
          bio
          username
          website
          nofPosts
          nofFollowers
          nofFollowings
          image
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          __typename
        }
        Comments {
          nextToken
          startedAt
          __typename
        }
        Likes {
          nextToken
          startedAt
          __typename
        }
        updatedAt
        _version
        _deleted
        _lastChangedAt
        __typename
      }
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
  }
`;
export const onDeleteComment = /* GraphQL */ `
  subscription OnDeleteComment($filter: ModelSubscriptionCommentFilterInput) {
    onDeleteComment(filter: $filter) {
      id
      comment
      createdAt
      userID
      postID
      User {
        id
        name
        email
        bio
        username
        website
        nofPosts
        nofFollowers
        Posts {
          nextToken
          startedAt
          __typename
        }
        Comments {
          nextToken
          startedAt
          __typename
        }
        Likes {
          nextToken
          startedAt
          __typename
        }
        nofFollowings
        image
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        __typename
      }
      Post {
        id
        description
        video
        image
        images
        nofComments
        nofLikes
        createdAt
        type
        userID
        User {
          id
          name
          email
          bio
          username
          website
          nofPosts
          nofFollowers
          nofFollowings
          image
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          __typename
        }
        Comments {
          nextToken
          startedAt
          __typename
        }
        Likes {
          nextToken
          startedAt
          __typename
        }
        updatedAt
        _version
        _deleted
        _lastChangedAt
        __typename
      }
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
  }
`;
export const onCreatePost = /* GraphQL */ `
  subscription OnCreatePost($filter: ModelSubscriptionPostFilterInput) {
    onCreatePost(filter: $filter) {
      id
      description
      video
      image
      images
      nofComments
      nofLikes
      createdAt
      type
      userID
      User {
        id
        name
        email
        bio
        username
        website
        nofPosts
        nofFollowers
        Posts {
          nextToken
          startedAt
          __typename
        }
        Comments {
          nextToken
          startedAt
          __typename
        }
        Likes {
          nextToken
          startedAt
          __typename
        }
        nofFollowings
        image
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        __typename
      }
      Comments {
        items {
          id
          comment
          createdAt
          userID
          postID
          updatedAt
          _version
          _deleted
          _lastChangedAt
          __typename
        }
        nextToken
        startedAt
        __typename
      }
      Likes {
        items {
          id
          userID
          postID
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          __typename
        }
        nextToken
        startedAt
        __typename
      }
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
  }
`;
export const onUpdatePost = /* GraphQL */ `
  subscription OnUpdatePost($filter: ModelSubscriptionPostFilterInput) {
    onUpdatePost(filter: $filter) {
      id
      description
      video
      image
      images
      nofComments
      nofLikes
      createdAt
      type
      userID
      User {
        id
        name
        email
        bio
        username
        website
        nofPosts
        nofFollowers
        Posts {
          nextToken
          startedAt
          __typename
        }
        Comments {
          nextToken
          startedAt
          __typename
        }
        Likes {
          nextToken
          startedAt
          __typename
        }
        nofFollowings
        image
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        __typename
      }
      Comments {
        items {
          id
          comment
          createdAt
          userID
          postID
          updatedAt
          _version
          _deleted
          _lastChangedAt
          __typename
        }
        nextToken
        startedAt
        __typename
      }
      Likes {
        items {
          id
          userID
          postID
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          __typename
        }
        nextToken
        startedAt
        __typename
      }
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
  }
`;
export const onDeletePost = /* GraphQL */ `
  subscription OnDeletePost($filter: ModelSubscriptionPostFilterInput) {
    onDeletePost(filter: $filter) {
      id
      description
      video
      image
      images
      nofComments
      nofLikes
      createdAt
      type
      userID
      User {
        id
        name
        email
        bio
        username
        website
        nofPosts
        nofFollowers
        Posts {
          nextToken
          startedAt
          __typename
        }
        Comments {
          nextToken
          startedAt
          __typename
        }
        Likes {
          nextToken
          startedAt
          __typename
        }
        nofFollowings
        image
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        __typename
      }
      Comments {
        items {
          id
          comment
          createdAt
          userID
          postID
          updatedAt
          _version
          _deleted
          _lastChangedAt
          __typename
        }
        nextToken
        startedAt
        __typename
      }
      Likes {
        items {
          id
          userID
          postID
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          __typename
        }
        nextToken
        startedAt
        __typename
      }
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
  }
`;
export const onCreateUser = /* GraphQL */ `
  subscription OnCreateUser($filter: ModelSubscriptionUserFilterInput) {
    onCreateUser(filter: $filter) {
      id
      name
      email
      bio
      username
      website
      nofPosts
      nofFollowers
      Posts {
        items {
          id
          description
          video
          image
          images
          nofComments
          nofLikes
          createdAt
          type
          userID
          updatedAt
          _version
          _deleted
          _lastChangedAt
          __typename
        }
        nextToken
        startedAt
        __typename
      }
      Comments {
        items {
          id
          comment
          createdAt
          userID
          postID
          updatedAt
          _version
          _deleted
          _lastChangedAt
          __typename
        }
        nextToken
        startedAt
        __typename
      }
      Likes {
        items {
          id
          userID
          postID
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          __typename
        }
        nextToken
        startedAt
        __typename
      }
      nofFollowings
      image
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
  }
`;
export const onUpdateUser = /* GraphQL */ `
  subscription OnUpdateUser($filter: ModelSubscriptionUserFilterInput) {
    onUpdateUser(filter: $filter) {
      id
      name
      email
      bio
      username
      website
      nofPosts
      nofFollowers
      Posts {
        items {
          id
          description
          video
          image
          images
          nofComments
          nofLikes
          createdAt
          type
          userID
          updatedAt
          _version
          _deleted
          _lastChangedAt
          __typename
        }
        nextToken
        startedAt
        __typename
      }
      Comments {
        items {
          id
          comment
          createdAt
          userID
          postID
          updatedAt
          _version
          _deleted
          _lastChangedAt
          __typename
        }
        nextToken
        startedAt
        __typename
      }
      Likes {
        items {
          id
          userID
          postID
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          __typename
        }
        nextToken
        startedAt
        __typename
      }
      nofFollowings
      image
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
  }
`;
export const onDeleteUser = /* GraphQL */ `
  subscription OnDeleteUser($filter: ModelSubscriptionUserFilterInput) {
    onDeleteUser(filter: $filter) {
      id
      name
      email
      bio
      username
      website
      nofPosts
      nofFollowers
      Posts {
        items {
          id
          description
          video
          image
          images
          nofComments
          nofLikes
          createdAt
          type
          userID
          updatedAt
          _version
          _deleted
          _lastChangedAt
          __typename
        }
        nextToken
        startedAt
        __typename
      }
      Comments {
        items {
          id
          comment
          createdAt
          userID
          postID
          updatedAt
          _version
          _deleted
          _lastChangedAt
          __typename
        }
        nextToken
        startedAt
        __typename
      }
      Likes {
        items {
          id
          userID
          postID
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          __typename
        }
        nextToken
        startedAt
        __typename
      }
      nofFollowings
      image
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
  }
`;
