const {
    GraphQLObjectType,
    GraphQLID,
    GraphQLString,
    GraphQLNonNull
} = require('graphql');

module.exports = new GraphQLObjectType({
    name: 'Todo',
    description: 'Lista de todos',
    fields: () => {
        return {
            id: { type: new GraphQLNonNull(GraphQLID) },
            todo: { type: new GraphQLNonNull(GraphQLString) }
        }
    }
});