import { buildGetPromise } from '../../lib/helpers/fetch_helper';
import url from '../../common/config/url';


export const LOAD = 'token/LOAD';
const LOAD_SUCCESS = 'token/LOAD_SUCCESS';
const LOAD_FAIL = 'token/LOAD_FAIL';

function storeToken(token) {
    sessionStorage.setItem('token', token);
}

const initialState = {
    loading: false,
    loaded: false,

    userInfo: null,
    errMsg: '',
    token: null,
};

export default function reducer(state = initialState, action = {}) {
    switch (action.type) {
    case LOAD: {
        return {
            ...state,
            loaded: false,
            loading: true,
            errMsg: '',
        };
    }
    case LOAD_SUCCESS: {
        const { token, user } = action.result;
        storeToken(token);
        return {
            ...state,
            loaded: true,
            loading: false,
            token,
            userInfo: user,
            errMsg: '',
        };
    }

    case LOAD_FAIL: {
        return {
            ...state,
            loaded: false,
            loading: false,
            token: null,
            userInfo: null,
            errMsg: action.error.errMsg,
        };
    }
    default:
        return state;
    }
}

/**
 * 请求token和auth状态时，将当前URL path作为redirect参数传递给服务端；方便登录完成后跳回当前页面
 * 接口返回：
 * 未登录：跳转loginUrl
 * @returns {{types: *[], promise: *}}
 */
export function load() {
    return {
        types: [LOAD, LOAD_SUCCESS, LOAD_FAIL],
        promise: buildGetPromise(url.tokenQuery, {
            redirect: window.location.origin + window.location.pathname,
        }),
    };
}

