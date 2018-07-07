import { apiRequest } from './home/home.saga';

export function* rootSaga() {
    yield [
        apiRequest()
    ];
}