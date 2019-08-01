export const setScore = data => {
    return {
        type: 'UPDATE_SCORE',
        payload: data
    }
}

export const setSquare = data => {
    return {
        type: 'UPDATE_SQUARE',
        payload: data
    }
}

export const reset = (data) => {
    return {
        type: 'RESET',
        payload: data
    }
}

export const restart = (data) => {
    return {
        type: 'RESTART',
        payload: data
    }
}
