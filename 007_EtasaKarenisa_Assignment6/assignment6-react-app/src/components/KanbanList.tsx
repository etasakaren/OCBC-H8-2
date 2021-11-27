import React from "react";
import KanbanCard from "./KanbanCard";
import KanbanButton from "./KanbanButton";
import { Droppable, Draggable } from "react-beautiful-dnd";
import styled from "styled-components";

const ListContainer = styled.div`
    background-color: #dfe3e6,
    border-radius: 3px,
    width: 300px,
    padding: 8px,
    margin: 0px 5px 0px 5px;
    height: "100%"
`

const ListCards = styled.div`
    background-color:#dfe3e6;
    margin: 0px 5px 0px 5px;
    border-radius: 3px;
    padding: 10px
`

const Title = styled.h3`
    margin: 0px 5px 0px 5px;
    font-weight: bold
`

const KanbanList = ({ title, cards, listID, index }: any) => {
    return (
        <Draggable draggableId={String(listID)} index={index}>
            {provided => (
                <ListContainer
                    {...provided.draggableProps}
                    ref={provided.innerRef}
                    {...provided.dragHandleProps}
                >
                    <Droppable droppableId={String(listID)}>
                        {provided => (
                            <ListCards {...provided.droppableProps} ref={provided.innerRef}>
                                <Title>{title}</Title>
                                {cards.map((card: any, index: any) => (
                                    <KanbanCard
                                        key={card.id}
                                        text={card.text}
                                        id={card.id}
                                        index={index}>
                                    </KanbanCard>
                                ))}
                                {provided.placeholder}
                                <KanbanButton listID={listID} card></KanbanButton>
                            </ListCards>
                        )}
                    </Droppable>
                </ListContainer>
            )}
        </Draggable>

    )
}

export default KanbanList