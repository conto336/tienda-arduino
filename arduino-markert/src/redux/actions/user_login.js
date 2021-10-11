export const type = 'auth_user';

const auth_user = (id, user, token) => {
    return {
        type,
        payload: {
            id,
            user,
            token,
        },
    };
}

export default auth_user;