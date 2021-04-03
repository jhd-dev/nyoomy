
import React from 'react';
import { APP_NAME } from '../../../shared/Constants';
//import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
//import { faEllipsisH, faPlus } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import { useMeQuery } from '../../generated/graphql';

interface IProps {}

const Header: React.FC<IProps> = () => {

    const { data, loading } = useMeQuery({ fetchPolicy: 'network-only' });

    let userStatus: JSX.Element | null;
    if (loading) {
        userStatus = null;
    } else if (data && data?.currentUser) {
        userStatus = <div>Logged in as: {data.currentUser.name}</div>
    } else {
        userStatus = <>
            <Link to="/register">Register</Link>
            <Link to="/login">Login</Link>
        </>;
    }

    return (
        <header>
            <Link to="/">{APP_NAME}</Link>
            {userStatus}
        </header>
    );
};

export default Header;