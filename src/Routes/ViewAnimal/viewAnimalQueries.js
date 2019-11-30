import {gql} from "apollo-boost";


export const MYPET =gql`
    query MyPets{
        id,
        name,
        class,
        createAt,
        updateAt
    }
`;
