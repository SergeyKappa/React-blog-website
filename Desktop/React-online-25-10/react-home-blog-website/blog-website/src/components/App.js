import React from 'react'

const Header = (props) => {
    console.log(props)
    return (
        <h1>
            {props.id}. My first {props.title}
        </h1>
    )
}
const Main = () => {
    return (
        <>
            <h2>Hello world!</h2>
        </>
    )
}

const Text = () => {
    return (
        <>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod
                error totam unde natus assumenda. Delectus voluptates incidunt
                dignissimos libero similique. Lorem ipsum dolor sit amet
                consectetur adipisicing elit.
            </p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
        </>
    )
}

const App = () => {
    return (
        <>
            <Header title="React.js" id={1} />
            <Header title="App.js" id={2} />
            <Main />
            <Text />
        </>
    )
}

export default App
