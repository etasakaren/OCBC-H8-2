import { CONSTANTS } from '../actions'
export const addCard = (listID: any, text: any) => {
    return {
        type: CONSTANTS.ADD_CARD,
        payload: { text, listID }
    }
}

export const sort = (
    droppableIdStart: any,
    droppableIdEnd: any,
    droppableIndexStart: any,
    droppableIndexEnd: any,
    draggableId: any,
    type: any
) => {
    return {
        type: CONSTANTS.DRAG_HAPPENED,
        payload: {
            droppableIdStart,
            droppableIdEnd,
            droppableIndexStart,
            droppableIndexEnd,
            draggableId,
            type
        }
    }
}