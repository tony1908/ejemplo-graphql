const {
    GraphQLList
} = require('graphql');

const Todo = require('../../types/Todo');

module.exports = {
    type: new GraphQLList(Todo),
    args: {

    },
    resolve(root, args) {
        return [
            {
                id: 1,
                todo: "Comer"
            }
        ]
    }
};