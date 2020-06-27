import React from 'react';
import MuiAlert from '@material-ui/lab/Alert';
import Snackbar from '@material-ui/core/Snackbar';
import { makeStyles } from '@material-ui/core/styles';

function Alert(props) {
    return <MuiAlert elevation={6} variant="filled" {...props} />;
}

const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
        '& > * + *': {
            marginTop: theme.spacing(2),
        },
    },
}));

export default function Notification() {
    const classes = useStyles();
    const [open, setOpen] = React.useState(true);

    return (
        <div className={classes.root}>
            <Snackbar
                open={open}
                autoHideDuration={6000}
            >
                <Alert severity="success">
                    Cadastro Concluído.
                </Alert>
            </Snackbar>
        </div>
    );
}