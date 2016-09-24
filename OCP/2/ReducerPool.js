export class ReducerPool {
    constructor() {
        this.reducers = [];        
    }
    
    registerReducer(reducer) {
        reducers.push(reducer);
    }

    getNewState(state, action) {
        return reducers.reduce((state, reducer) => {
            return reducer.getNewState(state, action);
        }, state);
    }
}