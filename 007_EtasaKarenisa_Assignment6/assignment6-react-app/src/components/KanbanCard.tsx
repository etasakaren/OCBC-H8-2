import React from "react";
import Card from "@material-ui/core/Card";
import Typography from "@material-ui/core/Typography";
import CardContent from "@material-ui/core/CardContent";
import { Draggable } from "react-beautiful-dnd"
import styled from "styled-components";

const CardContainer = styled.div`
    margin: 5px 5px 5px 5px;   
`

const CardText = styled.div`
    padding: 10px;
    background-color: white;
    border-radius: 3px;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
`

const KanbanCard = ({ text, id, index }: any) => {
    return (
        <Draggable draggableId={String(id)} index={index}>
            {provided => (
                <CardContainer ref={provided.innerRef}
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}
                >
                    <CardText>
                        {/* <CardContent> */}
                            {text}
                        {/* </CardContent> */}
                    </CardText>
                </CardContainer>
            )}
        </Draggable>
    )
}

export default KanbanCard