import React from 'react'
import ReactDOM from 'react-dom'
import PrimaryButton from './components/button'


const App = () => <PrimaryButton>Hello World</PrimaryButton>

ReactDOM.render(<App />, document.querySelector("#root"))

