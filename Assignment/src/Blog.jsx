import React from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './footer';

const Blog = () => {
    const navigate = useNavigate();
    const goBack = () => {
        navigate(-1);
    }
    return (
        <div>
            <Navbar/>
            <div className='m-5 p-5 text-slate-600'>
            <div>
                <p className="text-2xl">Write the differences between uncontrolled and controlled components.</p>
                <p className='p-5'>In React, controlled components refer to components that have their state and behavior controlled by the parent component. Uncontrolled components refer to components that manage their own state internally.</p>
            </div>
            <div>
                <p className="text-2xl">How to validate React props using PropTypes?</p>
                <p className='p-5'>We combine components into an app by passing data from parent components to child components. To do this, we pass data with props. Props are like HTML attributes, but they can contain dynamic data.<br /> A parent component passes props down to child components. And child components receive them. We can pass any data as props. Therefore, we need a way to validate their data type so that the child component gets what they expect.<br />
                    {/* Count.propTypes = {
                        name: PropTypes.string,
                    age: PropTypes.number,
                    address: PropTypes.object,
                    friends: PropTypes.array,}; */}
                    <br />
                    In the above code, the name prop is expected to have a value which is a string, age is a number, address is an object, and friends is an array. If any value other than this has been used for the same props as a value, it will show an error in the console.</p>
            </div>
            <div>
                <p className="text-2xl">What is the difference between nodejs and express js?</p>
                <p className='p-5'>NodeJS is an event-driven, non-blocking I/O model using JavaScript as its main language. It helps to build scalable network applications. Express is a minimal and flexible Node. js web application framework that provides a robust set of features for web and mobile applications.</p>
            </div>
            <div>
                <p className="text-2xl">What is a custom hook, and why will you create a custom hook?</p>
                <p className='p-5'>What is a custom hook?
                    A custom Hook is a JavaScript function whose name starts with ”use” and that may call other Hooks. <br />
                    I'll create a custom hook as, it can be reused easily, which makes the code cleaner and reduces the time to write the code. It also enhances the rendering speed of the code as a custom hook does not need to be rendered again and again while rendering the whole code.</p>
            </div>
            <div className="mx-auto w-80">
                <button onClick={()=>goBack()} className="btn btn-ghost mx-auto">Go Back</button>
            </div>
        </div>
        <Footer/>
        </div>
    );
};

export default Blog;