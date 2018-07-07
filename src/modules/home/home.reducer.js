export default (state = {loading: false, data: []}, action) => {
    switch (action.type) {
        case 'API_REQUEST':
            return {
                loading: true,
                data: []
            };
        case 'API_RESULT':
            return {
                loading:false,
                data: action.result,
            };
        default:
            return state;
    }
};