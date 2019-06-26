import React from 'react';
import { Switch, Route } from 'react-router-dom';

import App from './Components/App/App';
import Home from './Components/Home/Home';
import Contact from './Components/Contact/Contact';
import RecipesBox from './Components/RecipesBox/RecipesBox'

const Routes = () => {
    return(
        <div>
            <App/>
            <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/boite-a-recettes" component={RecipesBox} />
                {/* <Route path="/boite-a-recette/:nid" component={Recette} /> */}
                <Route path="/contact" component={Contact} />
            </Switch>
        </div>
    )
}

export default Routes;