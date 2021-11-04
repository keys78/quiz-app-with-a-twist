import { makeStyles } from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
    button2: {
        background: 'red',
        color: 'white;',

        "&:hover": {
            backgroundColor: 'red'
        }
    },
    button: {
        background: 'aliceblue',
        color: 'purple',
        border: '0.1px solid purple',

        "&:hover": {
            backgroundColor: 'aliceblue'
        }
    },
    startButton: {
        marginTop: '2rem',
        background: 'green',
        color: 'aliceBlue',
        fontSize: '16px',
        padding: '10px 15px',

        // hover: {
            "&:hover": {
                backgroundColor: 'rgb(7, 130, 77, 0.42)'
            }
        // },
    }


    }));



export default useStyles