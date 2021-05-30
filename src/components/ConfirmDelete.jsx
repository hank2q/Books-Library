import React from "react";
import {
    Button,
    Dialog,
    DialogActions,
    DialogContent,
    DialogContentText,
    DialogTitle,
} from "@material-ui/core";

function ConfirmDelete({ open, text, handleConfirm, handleClose, bookTitle }) {
    const defaultText = () => {
        return (
            <div>
                <span>Are you sure you want to delete</span>
                <br />
                <span>
                    <b>{bookTitle}</b>
                </span>

                <span> from your library?</span>
            </div>
        );
    };

    return (
        <Dialog
            open={open}
            onClose={handleClose}
            aria-labelledby="confirm-book-deletion"
            aria-describedby="alert-confirm-delete"
            fullWidth={true}
            maxWidth="sm"
        >
            <DialogTitle id="confirm-delete-title">Confirm Delete</DialogTitle>
            <DialogContent>
                <DialogContentText id="alert-dialog-description">
                    <div>{text || defaultText()}</div>
                </DialogContentText>
            </DialogContent>
            <DialogActions>
                <Button onClick={handleConfirm} color="primary" autoFocus>
                    Confirm
                </Button>
                <Button onClick={handleClose} color="primary">
                    Cancel
                </Button>
            </DialogActions>
        </Dialog>
    );
}

export default ConfirmDelete;
