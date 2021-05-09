import React from "react";

function FormField(props) {
    return (
        <Grid item xs={12} sm={12}>
            <TextField
                fullWidth
                label="Description"
                name="description"
                id="description"
                multiline
                value={newBook.description}
                onChange={(e) => {
                    const { name, value } = e.target;
                    setNewBook({
                        ...newBook,
                        [name]: value,
                    });
                }}
                color="primary"
            />
        </Grid>
    );
}

export default FormField;
