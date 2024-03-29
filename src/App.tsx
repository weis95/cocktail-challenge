import React, { useEffect } from "react"

import axios from 'axios'
import { useDispatch, useSelector } from 'react-redux'
import { bindActionCreators } from 'redux'
import { actionCreators } from './state'
import { RootState } from './state/reducers'

import styles from "./App.module.css"

const App: React.FC = () => {
    
    const dispatch = useDispatch()
    const state = useSelector((state: RootState) => state.cocktail)
    const { editCocktail, deleteCocktail, setCocktail } = bindActionCreators(actionCreators, dispatch)

    useEffect(() => {
        axios.get('https://www.thecocktaildb.com/api/json/v1/1/search.php?f=a')
        .then(function (response) {
            const data = []
            for(const drink of response.data.drinks){
                data.push({
                    name: drink.strDrink, 
                    type: drink.strAlcoholic, 
                    glass: drink.strGlass})
            }
            setCocktail(data)
        })
    },[])

    return (
        <div className={styles.container}>
            <nav>
                <img src="https://logos-marcas.com/wp-content/uploads/2020/12/Lays-Logo.png" alt="lays-logo"/>
            </nav>
            <div className={styles.gridContainer}>
                <div className={styles.leftNavigation} />
                <div className={styles.dataContainer}>
                    {state.map((drink, key) => (
                        <React.Fragment key={key}>
                            <input type="text" onChange={(e) => editCocktail([{name: e.target.value, index: key}])} value={drink.name}/>
                            <p>{drink.type}</p>
                            <p>{drink.glass}</p>
                            <button onClick={() => deleteCocktail(key)}>Delete</button>
                        </React.Fragment>) 
                    )}
                </div>
            </div>
        </div>
    )
}

export default App
