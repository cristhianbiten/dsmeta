import NotificationIcon from '../../assets/img/notification-icon.svg';
import './styles.css';
import axios from 'axios';
import { BASE_URL } from '../../utils/requests';

type Props = {
    saleId: number;
}

function handleClick(id: number) {
    axios(`${BASE_URL}/sales/${id}/notification`)
        .then(response => {
            console.log("sucesso");
        })
}

function NotificationButton({ saleId }: Props) {
    return (
        <div className="dsmeta-red-btn" onClick={() => handleClick(saleId)}>
            <img src={NotificationIcon} alt="Notificar" />
        </div>
    )
}

export default NotificationButton;