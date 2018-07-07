// export const saveToGlobalStore = (albumsList) => {
//     return {
//         type: 'SAVE',
//         value: albumsList
//     }
// };

export const API_REQUEST = 'API_REQUEST';
export const API_RESULT = 'API_RESULT';

export const apiRequest = () => {
    return {
        type: 'API_REQUEST'
    }};

export const apiResult = (data) => {
    return {
        type: 'API_RESULT',
        result: data,
    }};