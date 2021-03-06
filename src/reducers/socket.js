/**
 * Created by bear on 2018/3/8.
 */
import {socketTypes} from '../config/constant';
const init = {
    socketService: null
}
const io = (state = init, action) => {
    switch (action.type) {
        case socketTypes.SOCKET_CONNECTION:
            return {...state, socketService: action.socketService}
        case socketTypes.SOCKET_CONNECTION_FAIL:
            return {...state}
        default:
            return state
    }
}
export  default io