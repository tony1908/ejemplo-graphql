const {
    GraphQLInputObjectType,
    GraphQLString,
    GraphQLInt
} = require('graphql');

module.exports = new GraphQLInputObjectType({
    name: 'todoInput',
    fields: () => {
        return {
            id: { type: GraphQLInt },
            todo: { type:  GraphQLString}
        }
    }
});