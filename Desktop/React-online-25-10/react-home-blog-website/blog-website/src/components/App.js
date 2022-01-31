import React from 'react'

const Header = (props) => {
    console.log(props)
    return (
        <h1>
            {props.id}. My first {props.title}
        </h1>
    )
}

const Text = () => {
    return (
        <>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod
                error totam unde natus assumenda. Delectus voluptates incidunt
                dignissimos libero similique.
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
            <Text />
        </>
    )
}

export default App
