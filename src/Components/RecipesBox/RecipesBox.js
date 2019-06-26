import React, { Component } from 'react';

import TechniqueItem from './TechniqueItem';

// Material Ui
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';

import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

// Redux
import { connect } from 'react-redux';

// Action for reducers
import { 
    techniqueListAction,
    repicesListAction,
    ingredientListAction,
    getRecetteAction 
} from '../../Actions';

// ActionCreator for mapDispatchToProps()
import { bindActionCreators } from 'redux';

// Start Class
class RecipesBox extends Component {

    

    
  
    componentWillMount() {
        // request Element construction page with redux
        this.props.techniqueListAction();
        this.props.repicesListAction(null, 0);
        this.props.ingredientListAction();
    }


    onSelectTechnique = (thema, page)=> {
        console.log('page')
    }

    // Load List technique
    renderTechniques() {
        
        if (this.props.techniques) {
          var { techniques } = this.props
          return techniques ?
            techniques.map((item, index) => {
                return <div onClick={() => this.props.repicesListAction(item.tid, 0)} key={item.tid}>{item.name}</div>
            }) : null;
        }
    }

    // Load Repices
    renderRepices() {
        if (this.props.repices) {
            var { repices } = this.props
            let repicesList = repices.results
            let repicesCount = repices.count
            
            return repicesList ?
                repicesList.map((item, index) => {
                    return <div key={item.nid}> {item.title}</div>
                }) : null;
        }
    }

    // Load Ingredients
    renderIngredients() {
        if (this.props.ingredients) {
            var { ingredients } = this.props

            return ingredients ?
                ingredients.map((item, index) => {
                    return <div key={item.tid}> {item.name}</div>
                }) : null;
        }
    }
  
    render() {

        

        return (
            <React.Fragment>
                <CssBaseline />
                <Container maxWidth="lg">
                    <Grid container spacing={3}>
                        <Grid item xs={3} sm={2}>
                            <Paper className={'classes.paper'}>
                                {this.renderTechniques()}
                            </Paper>
                            {/* <Paper className={'nope'}>
                                {this.renderIngredients()}
                            </Paper> */}
                        </Grid>
                        <Grid item xs={3} sm={4}>
                            <Paper className={'nope'}>
                                {this.renderRepices()}
                            </Paper>
                        </Grid>
                        <Grid item xs={6} sm={6}>
                            <Paper className={'nope'}>xs=6 sm=3</Paper>
                        </Grid>
                    </Grid>
                </Container>
            </React.Fragment>
        );
    }
}
  
const mapStateToProps = (state) => {

    return {
        techniques: state.techniquesReducer.techniques,
        repices: state.recettesListReducer.recettes,
        ingredients: state.ingredientReducer.ingredients
    }

}
  
const mapDispatchToProps = (dispatch) => {
  
    return bindActionCreators({
        techniqueListAction,
        repicesListAction,
        ingredientListAction,
        getRecetteAction
    }, dispatch)
}
  
export default connect(mapStateToProps, mapDispatchToProps)(RecipesBox);