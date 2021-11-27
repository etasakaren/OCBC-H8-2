import React from "react";
import Icon from "@material-ui/core/Icon";
import TextArea from "react-textarea-autosize";
import Card from "@material-ui/core/Card";
import Button from "@material-ui/core/Button";
import { connect } from "react-redux";
import { addCard } from "../actions";

interface KanbanC {
    card: any,
    dispatch: any,
    listID: any
}

class KanbanButton extends React.Component<KanbanC> {
    state = {
        formOpen: false,
        text: ""
    }

    openForm = () => {
        this.setState({
            formOpen: true
        })
    }

    closeForm = () => {
        this.setState({
            formOpen: false
        })
    }

    handleInputChange = (e: any) => {
        this.setState({
            text: e.target.value
        })
    }

    handleAddCard = () => {
        const { dispatch, listID } = this.props
        const { text } = this.state

        if (text) {
            this.setState({
                text: ""
            })
            dispatch(addCard(listID, text))
        }
        return 
    }

    renderAddButton = () => {
        const { card } = this.props

        const buttonText = "Add another card"
        const buttonTextOpacity = card ? 1 : 0.5
        const buttonTextColor = card ? "white" : "inherit"
        const buttonTextBackground = card ? "rgba(0,0,0,.15)" : "inherit"
        const buttonMargin = "0px 5px 0px 5px"
        const buttonShadow = "0 4px 8px 0 rgba(0, 0, 0, 0.2)"
        return (
            <div
                onClick={this.openForm}
                style={{
                    ...styles.openFormButtonGroup,
                    opacity: buttonTextOpacity,
                    color: buttonTextColor,
                    backgroundColor: buttonTextBackground,
                    margin: buttonMargin,
                    boxShadow: buttonShadow
                }}>
                <p>+ {buttonText}</p>
            </div>
        )
    }



    renderForm = () => {
        const { card } = this.props
        const placeholder = "Enter a text for this card..."

        const buttonTitle = "Add Card"

        return (
            <div>
                <Card style={{
                    overflow: "visible",
                    minHeight: 80,
                    minWidth: 272,
                    margin: "0px 5px 0px 5px",
                    padding: "6px 8px 2px",
                    boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2)"
                }}>
                    <TextArea
                        placeholder={placeholder}
                        autoFocus
                        onBlur={this.closeForm}
                        value={this.state.text}
                        onChange={this.handleInputChange}
                        style={{
                            resize: "none",
                            width: "100%",
                            overflow: "hidden",
                            outline: "none",
                            border: "none",
                            opacity: "0.5"
                        }}
                        maxLength={30} ></TextArea>
                </Card>
                <div style={styles.formButtonGroup}></div>
                <div>
                    <Button
                        onMouseDown={this.handleAddCard}
                        variant="contained"
                        style={{ color: "white", backgroundColor: "#5aac44", boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2)", margin: "0px 5px 0px 5px" }}>
                        {buttonTitle}{" "}
                    </Button>
                    <Icon style={{ marginLeft: 8, cursor: "pointer" }}></Icon>
                </div>
            </div >)
    }
    render() {
        return this.state.formOpen ? this.renderForm() : this.renderAddButton()
    }
}

const styles = {
    openFormButtonGroup: {
        display: "flex",
        alignItems: "center",
        cursor: "pointer",
        borderRadius: 3,
        height: 36,
        width: 272,
        paddingLeft: 10
    },
    formButtonGroup: {
        marginTop: 8,
        display: "flex",
        alignItems: "center"
    }
}
export default connect()(KanbanButton)