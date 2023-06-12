import { Alert } from 'react-bootstrap';


function AlertMessage({ message, bsStyle, show }) {
    return (
        show && (
            <Alert variant={bsStyle === 'danger' ? 'danger' : 'success'}>
                <strong>{message}</strong>
            </Alert>
        )
    );
}

export default AlertMessage;


