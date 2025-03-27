// PascalCasing -- capitalizes the first letter of every separate word (no space). Used in React.
function Message() {
    // JSX: JavaScript XML: Extensive Markup Language which provides rules to define data
    const name = 'Julie';
    if (name)
        return <h1>Hello {name}</h1>
    return <h1>Hello World</h1>;

}

export default Message; // export this component so that it can be used