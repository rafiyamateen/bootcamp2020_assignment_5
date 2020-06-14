const Reducer = (state, action) => {
    switch (action) {
        case 'increment':
            return ++state
        case 'decrement':
            return --state
        default:
            return state
    }
}
export default Reducer;