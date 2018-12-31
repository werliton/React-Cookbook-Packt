import React, { Component } from 'react';
// Let's suppose this response is coming from a service and have
// some XSS attacks in the content...
const response = [
    {
        id: 1,
        title: 'My blog post 1...',
        content: '<p>This is <strong>HTML</strong> code</p>'
    },
    {
        id: 2,
        title: 'My blog post 2...',
        content: `<p>Alert: <script>alert(1);</script></p>`
    },
    {
        id: 3,
        title: 'My blog post 3...',
        content: `
        <p>
        <img onmouseover="alert('This site is not secure');"
        src="attack.jpg" />
        </p>
        `
    }
];
// Let's suppose this is ourinitialState of Redux
// which is injected to the DOM...
const initialState = JSON.stringify(response);
class Xss extends Component {
    render() {
    // Parsing the JSON string to an actual object...
    const posts = JSON.parse(initialState);
    // Rendering our posts...
    return (
        <div className="Xss">
            {posts.map((post, key) => (
                <div key={key}>
                    <h2>{post.title}</h2>
                    <p><strong>Secure Code:</strong></p>
                    <p>{post.content}</p>
                    <p><strong>Insecure Code:</strong></p>
                    <p
                    dangerouslySetInnerHTML={{ __html: post.content }}
                    />
                </div>
            ))}
        </div>
    );
    }
}
export default Xss;