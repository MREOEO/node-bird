export const initialState = {
  mainPosts: [
    {
      id: 1,
      User: {
        id: 1,
        nickname: "용",
      },
      content: "첫 게시글",
      Images: [
        {
          src:
            "https://img.insight.co.kr/static/2017/11/24/700/o9dpr6st38ut3e2wci4v.jpg",
        },
      ],
      Comments: [
        {
          User: {
            nickname: "hogo",
          },
          content: "hi",
        },
      ],
    },
  ],
  imagePaths: [],
  postAdded: false,
};

const ADD_POST = "ADD_POST";
export const addPost = {
  type: ADD_POST,
};
const dummyPost = {};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST:
      return {
        ...state,
        mainPosts: [dummyPost, ...state.mainPosts],
        postAdded: true,
      };
    default:
      return state;
  }
};

export default reducer;
