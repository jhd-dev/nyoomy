import React from 'react';
import { APP_NAME } from '../@nyoomy/common/constants';
//import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
//import { faEllipsisH, faPlus } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import { useMeQuery, useLogoutMutation } from '../../generated/graphql-hooks';
import { setAccessToken } from '../utils/accessToken';

const Header: React.FC = () => {
    const { data, loading } = useMeQuery({ fetchPolicy: 'network-only' });
    const [logout, { client }] = useLogoutMutation();

    let userStatus: JSX.Element | null;
    if (loading) {
        userStatus = null;
    } else if (data?.currentUser != null) {
        userStatus = (
            <div>
                <div>Logged in as: {data.currentUser.name}</div>
                <button
                    className="btn"
                    onClick={async () => {
                        await logout();
                        setAccessToken('');
                        await client.resetStore();
                    }}
                >
                    Logout
                </button>
            </div>
        );
    } else {
        userStatus = (
            <>
                <button>
                    <Link to="/register">Register</Link>
                </button>
                <button>
                    <Link to="/login">Login</Link>
                </button>
            </>
        );
    }

    return (
        <header>
            <Link to="/">{APP_NAME}</Link>
            {userStatus}
        </header>
    );
};

export default Header;
