import React from 'react';

import {GET_CURRENT_USER} from "../queries";
import {useQuery} from "@apollo/react-hooks";

const withSession = Component => props => {
    const {data, loading} = useQuery(GET_CURRENT_USER);

    if (loading) return null;
    console.log(data);

    return <Component {...props} />

}

export default withSession;