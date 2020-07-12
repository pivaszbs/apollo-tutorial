import React from 'react';

import {GET_CURRENT_USER} from "../queries";
import {useQuery} from "@apollo/react-hooks";
import {User} from "../queries/types";

interface Query {
    data: User,
    loading: boolean,
    refetch: any,
}

const withSession = Component => props => {
    const { data, loading, refetch }: Query = useQuery(GET_CURRENT_USER);

    if (loading) return null;
    console.log(data);

    return <Component {...props} refetch={refetch} session={data} />

}

export default withSession;