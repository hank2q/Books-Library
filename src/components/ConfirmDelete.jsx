import React from "react";
import {
    Button,
    Dialog,
    DialogActions,
    DialogContent,
    DialogContentText,
    DialogTitle,
} from "@material-ui/core";

function ConfirmDelete({ open, title, text, handleConfirm, handleClose }) {
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
                    <div>{text}</div>
                </DialogContentText>
            </DialogContent>
            <DialogActions>
                <Button onClick={handleClose} color="primary">
                    Cancel
                </Button>
                <Button onClick={handleConfirm} color="primary" autoFocus>
                    Confirm
                </Button>
            </DialogActions>
        </Dialog>
    );
}

export default ConfirmDelete;
