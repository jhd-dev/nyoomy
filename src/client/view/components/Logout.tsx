import React from 'react';
import { useLogoutMutation } from '../../generated/graphql';

interface IProps {}

export const LogoutPage: React.FC<IProps> = () => {
    const [ data, error ] = useLogoutMutation();

    /*if (loading) {
        return <div>Loading...</div>;
    }*/

    if (error) {
        console.error(error);
        return <div>err</div>;
    }

    if (!data) {
        return <div>No data</div>;
    }

    return (
        <div>
            {data}
        </div>
    );
};
