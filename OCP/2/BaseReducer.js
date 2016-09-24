export class BaseReducer {
    getNewState() {
        throw new Error('must be overriten')
    }
}