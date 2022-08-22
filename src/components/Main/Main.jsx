import React from 'react'
import './main.css';

const Main = (props) => {
  console.log(props)
  console.log(props.test)
  return (
    <main>
        <section>
            <h2>Bienvenido al Main de {props.test}</h2>
        </section>
    </main>
  )
}

export default Main