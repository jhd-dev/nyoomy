
import React from 'react';
import { APP_NAME } from '../../../shared/Constants';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEllipsisH, faPlus } from '@fortawesome/free-solid-svg-icons';

interface IProps {}

const CreateUser: React.FC<IProps> = () => {

    return (
        <nav className="navbar navbar-light bg-light">
            <span className="navbar-brand h1">{APP_NAME}</span>
            <button type="button" className="btn btn-lg" data-toggle="modal" data-target="#AddTrackerModal">
                <FontAwesomeIcon icon={faPlus} />
            </button>
            <button type="button" className="btn btn-lg" data-toggle="modal" data-target="#AddTrackerModal">
                <FontAwesomeIcon icon={faEllipsisH} />
            </button>
        </nav>
    );
};

export default CreateUser;