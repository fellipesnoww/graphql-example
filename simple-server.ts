import {ApolloServer, gql} from "apollo-server";

const typeDefs = gql`
    type Query {
        helloWorld: String! #O retorno pode ser um texto ou nao existir
    }

    #type Mutation {}
`;


const server = new ApolloServer({
    typeDefs, //Quais seriam as rotas
    resolvers: { //Seria como os controllers do rest
        Query: {
            helloWorld: () => {
                return "hello world";
            }
        }
    }
});

server.listen().then(({url}) => {
    console.log(`HTTP server running... ${url}`);
});