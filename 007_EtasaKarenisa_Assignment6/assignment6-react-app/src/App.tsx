import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import KanbanList from './components/KanbanList';
import { connect } from "react-redux"
import { DragDropContext, Droppable } from "react-beautiful-dnd";
import { sort } from "./actions";
import styled from "styled-components";

interface Lists {
  lists: any,
  dispatch: any
}

const ListContainer = styled.div`
  display: flex;
  flex-direction: row;
`

class App extends Component<Lists>{
  onDragEnd = (result: any) => {
    const { destination, source, draggableId, type } = result
    if (!destination) {
      return
    }
    this.props.dispatch(
      sort(
        source.droppableId,
        destination.droppableId,
        source.index,
        destination.index,
        draggableId,
        type
      )
    )
  }

  render() {
    const { lists } = this.props
    return (
      <>
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bulma@0.9.3/css/bulma.min.css"></link>
        <DragDropContext onDragEnd={this.onDragEnd}>
          <div  className="App">
            <h2 className="KanbanBoard">Kanban Board</h2>
            <Droppable droppableId="all-lists" direction="horizontal" type="list">
              {provided => (
                <ListContainer {...provided.droppableProps} ref={provided.innerRef}>
                  {lists.map((list: any, index:any) => (
                    <KanbanList listID={list.id} key={list.id} title={list.title} cards={list.cards} index={index}></KanbanList>
                  ))}
                </ListContainer>
              )}
            </Droppable>
          </div>
        </DragDropContext>
        <p className="Info">* Drag card or list to move as you like.</p>
      </>
    );
  }
}

const mapStateToProps = (state: any) => ({
  lists: state.lists
})

export default connect(mapStateToProps)(App);
