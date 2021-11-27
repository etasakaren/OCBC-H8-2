import { CONSTANTS } from "../actions";

let cardID = 9

const initialState = [
    {
        title: "Backlog",
        id: `list-${1}`,
        cards: [
            {
                id: `card-${1}`,
                text: "Create Template"
            },
            {
                id: `card-${2}`,
                text: "Create Mockup"
            },
            {
                id: `card-${3}`,
                text: "Adjust Web Header"
            },
        ]
    },
    {
        title: "In Progress",
        id: `list-${2}`,
        cards: [
            {
                id: `card-${4}`,
                text: "Initiate Docker for Project"
            },
        ]
    },
    {
        title: "Evaluation",
        id: `list-${3}`,
        cards: [
            {
                id: `card-${5}`,
                text: "Finalize T.O.R"
            },
        ]
    },
    {
        title: "Done",
        id: `list-${4}`,
        cards: [
            {
                id: `card-${6}`,
                text: "Recruit Ruby Developers"
            },
            {
                id: `card-${7}`,
                text: "Recruit FE Developers"
            },
            {
                id: `card-${8}`,
                text: "Recruit Project Manager"
            },
        ]
    }
]

const listsReducer = (state = initialState, action: any) => {
    switch (action.type) {
        case CONSTANTS.ADD_CARD: {
            const newCard = {
                id: `card-${cardID}`,
                text: action.payload.text
            }
            cardID += 1
            const newState = state.map(list => {
                if (list.id === action.payload.listID) {
                    return {
                        ...list,
                        cards: [...list.cards, newCard]
                    }
                } else {
                    return list
                }
            })
            return newState
        }
        case CONSTANTS.DRAG_HAPPENED: {
            const {
                droppableIdStart,
                droppableIdEnd,
                droppableIndexStart,
                droppableIndexEnd,
                droppableId,
                type
            } = action.payload
            const newState = [...state]

            if (type === "list") {
                const list = newState.splice(droppableIndexStart, 1)
                newState.splice(droppableIndexEnd, 0, ...list)
                return newState
            }
            if (droppableIdStart === droppableIdEnd) {
                const list = state.find(list => droppableIdStart === list.id)
                const card = list!.cards.splice(droppableIndexStart, 1)
                list!.cards.splice(droppableIndexEnd, 0, ...card)
            }

            if (droppableIdStart !== droppableIdEnd) {
                const listStart = state.find(list => droppableIdStart === list.id)
                const card = listStart!.cards.splice(droppableIndexStart, 1)
                const listEnd = state.find(list => droppableIdEnd === list.id)
                listEnd!.cards.splice(droppableIndexEnd, 0, ...card)
            }

            return newState
        }
        default:
            return state
    }
}
export default listsReducer