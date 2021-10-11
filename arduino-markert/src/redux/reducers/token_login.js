const defaultState = {undefined};

const token_login = (state = defaultState, { type, payload }) => {

    switch (type) {

        case 'auth_user':
            return payload;
            
        default:
            return state;
    }

}

export default token_login;