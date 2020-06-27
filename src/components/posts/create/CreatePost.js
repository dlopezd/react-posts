import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { createPost } from '../../../redux/posts/create/ActionCreators'
import Loader from '../../commons/Loader';
import Error from '../../commons/Error';

import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import MuiAlert from '@material-ui/lab/Alert';
import Snackbar from '@material-ui/core/Snackbar';
import { makeStyles } from '@material-ui/core/styles';

const Alert = props => {
    return <MuiAlert elevation={6} variant="filled" {...props} />;
}


const useStyles = makeStyles((theme) => ({
    input: {
        marginBottom: 20,
        width: 500
    },
}));

const CreatePost = props => {
    const classes = useStyles();
    const [userId, setUserId] = useState(2);
    const [title, setTitle] = useState("");
    const [titleTouched, setTitleTouched] = useState(false);
    const [body, setBody] = useState("");
    const [bodyTouched, setBodyTouched] = useState(false);
    const [alertIsOpen, setAlertIsOpen] = React.useState(false);
    const createPostState = useSelector(state => state.createPostState);
    const dispatch = useDispatch();

    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }

        setAlertIsOpen(false);
    };

    const resetFormHandler = _ => {
        setTitle("");
        setTitleTouched(false);
        setBody("");
        setBodyTouched(false);
    }

    const showAlert = _ => {
        setAlertIsOpen(true);
    }

    const submitHandler = (event) => {
        event.preventDefault();
        dispatch(createPost({
            userId,
            title,
            body
        }, resetFormHandler, showAlert));
    }

    const inputChageHandle = event => {
        switch(event.target.id){
            case "title":
                setTitle(event.target.value);
                setTitleTouched(true);
                break;
            case "body":
                setBody(event.target.value);
                setBodyTouched(true);
                break;
            default:
                break;
        }
    }

    return (
        createPostState.isLoading ? <Loader /> :
            createPostState.errMess ? <Error msg="Error al crear el post" /> :
                (
                    <>
                        <Snackbar open={alertIsOpen} autoHideDuration={2000} onClose={handleClose}>
                            <Alert onClose={handleClose} severity="success">
                                El post fue creado con éxito.
                            </Alert>
                        </Snackbar>

                        <form onSubmit={(event) => submitHandler(event)}>
                            <div>
                                <TextField
                                    id="userId"
                                    type="hidden"
                                    value={userId}
                                    variant="outlined"
                                    className={classes.input}
                                />
                            </div>
                            <div>
                                <TextField
                                    id="title"
                                    label="Título"
                                    variant="outlined"
                                    value={title}
                                    error={!title && titleTouched ? true : false}
                                    helperText = {!title && titleTouched? "Este campo es requerido" : null }
                                    onChange={e => inputChageHandle(e)}
                                    className={classes.input} />
                            </div>
                            <div>
                                <TextField
                                    id="body"
                                    label="Cuerpo"
                                    multiline
                                    rows={4}
                                    className={classes.input}
                                    value={body}
                                    error={!body && bodyTouched ? true : false}
                                    helperText = {!body && bodyTouched? "Este campo es requerido" : null }
                                    onChange={e => inputChageHandle(e)}
                                    variant="outlined" />
                            </div>
                            <div>
                                <Button
                                    variant="contained"
                                    type="submit"
                                    disabled={!title || !body}
                                    color="primary">
                                    Crear
                                </Button>
                            </div>
                        </form>
                    </>
                ));
}

export default CreatePost;
