


import React, { createContext, useState } from 'react';

// Create a context for the comments
const CommentContext = createContext();

export const CommentProvider = ({ children }) => {
    const [comment, setComment] = useState("");

    return (
        <CommentContext.Provider value={{ comment, setComment }}>
            {children}
        </CommentContext.Provider>
    );
};

export default CommentContext;

// import React from 'react';
// import { CommentProvider } from './CommentContext';
// import HeaderComment from './HeaderComment';
// import SliderComment from './SliderComment';

// const App = () => {
//     return (
//         <CommentProvider>
//             <HeaderComment />
//             <SliderComment />
//         </CommentProvider>
//     );
// };

// export default App;
// import React, { useContext } from 'react';
// import CommentContext from './CommentContext';

// const HeaderComment = () => {
//     const { setComment } = useContext(CommentContext);

//     const handleUpdateComment = () => {
//         setComment("This comment was updated from Header!");
//     };

//     return (
//         <div>
//             <h1>Header Component</h1>
//             <button onClick={handleUpdateComment}>Update Comment</button>
//         </div>
//     );
// };

// export default HeaderComment;

// import React, { useContext } from 'react';
// import CommentContext from './CommentContext';

// const SliderComment = () => {
//     const { comment } = useContext(CommentContext);

//     return (
//         <div>
//             <h2>Slider Component</h2>
//             <p>{comment}</p>
//         </div>
//     );
// };

// export default SliderComment;
