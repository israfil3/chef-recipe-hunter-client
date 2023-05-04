import React from 'react';

const Blog = () => {
    return (
        <div className='bg-red-50 p-20 text-2xl'>
            <h1>
                <span className='text-3xl'> No 1 answer:</span> In React, controlled components refer to components that have their state and behavior controlled by the parent component. These components rely on props passed down from the parent component to update their state and behavior. Uncontrolled components refer to components that manage their own state internally.
            </h1> <br /><br />
            <h1>
            <span className='text-3xl'> No 2 answer:</span>Props and PropTypes are important mechanisms     for  passing read-only   attributes between React components.
                    We can use React props, short for properties, to send data from one component to another. If a component receives the wrong type of props, it can cause bugs and unexpected errors in your app.
            </h1><br /><br />
            <h1>
            <span className='text-3xl'> No 3 answer:</span> NodeJS is the package, which provides the JavaScript run-time environment, whereas Express is a framework that sits on top of NodeJS and helps us to handle requests and responses.
            </h1><br /><br />
            <h1>
            <span className='text-3xl'> No 3 answer:</span>Custom React JS hooks offer reusability as when a custom hook is created, it can be reused easily, which makes the code cleaner and reduces the time to write the code. It also enhances the rendering speed of the code as a custom hook does not need to be rendered again and again while rendering the whole code.
            </h1>
        </div>
    );
};

export default Blog;