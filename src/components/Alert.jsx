import { Alert } from 'react-bootstrap';


function AlertMessage ({message, bsStyle, show }) {
        if (show) {return ( 
        <Alert className={ `alert-${bsStyle}`}>
            <strong>{message}</strong>
        </Alert>
    )}; 
    return null
};

export default AlertMessage;


