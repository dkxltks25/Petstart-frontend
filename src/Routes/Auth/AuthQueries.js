import {gql} from "apollo-boost";

export const  LOG_IN = gql`
    mutation confirmSecret($password:String!,$email:String!){
        confirmSecret(
           password:$password, email:$email,
        )
    }
`;

export const LOCAL_LOG_IN = gql`
    mutation logUserIn($token:String!){
        logUserIn(token: $token) @client
    }
`;

export const CREATE_ACCOUNT = gql`
    mutation createAccount($email:String!,$password:String!,$username:String!,$name:String!){
        createAccount(email:$email,password:$password,username:$username,name:$name)
    }
`;