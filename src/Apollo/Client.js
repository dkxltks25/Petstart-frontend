import ApolloClient from 'apollo-boost';
import {defaults,resolvers} from "./LocalState";
export default new ApolloClient({
    uri:"https://app.prisma.io/dkxltks25-26db96/services",
    clientState:{
        defaults,
        resolvers
    },
    headers:{
        "Authorization" : `Bearer ${localStorage.getItem("token")}`
    }
});
