import React from 'react';

import {GET_CURRENT_USER} from "../queries";
import {useQuery} from "@apollo/react-hooks";
import {User} from "../queries/types";

interface Query {
    data: User,
    loading: boolean
}

const withSession = Component => props => {
    const {data, loading}: Query = useQuery(GET_CURRENT_USER);

    if (loading) return null;
    console.log(data);

    return <Component {...props} />

}

export default withSession;