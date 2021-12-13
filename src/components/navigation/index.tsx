import { AiOutlineHome, AiOutlinePoweroff } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router';

import { logout } from '../../helpers/user';
import { useAppDispatch } from '../../store/hooks';

const Navigation: React.FC = () => {
    const dispatch = useAppDispatch();
    const navigate = useNavigate();

    return (
        <nav className="navigation">
            <Link className="navigation--link color-light_1" to="/home">
                <AiOutlineHome size={24} />
            </Link>

            <span className="navigation--link color-light_1" onClick={() => logout(dispatch) && navigate("/", { replace: true })}>
                <AiOutlinePoweroff size={24} />
            </span>
        </nav>
    )
}

export default Navigation;