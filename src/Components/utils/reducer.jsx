export const reducer = (state, action) => {
    switch(action.type) {
        case 'LIGHT':
            return {url: action.payload, api: ''}
        case 'DARK':
            return {url: action.payload, api: ''}
        default:
            throw new Error()
    }
}