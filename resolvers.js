exports.resolvers = {
    Query: {
        getAllRecipes: () => {

        }
    },
    Mutation: {
        addRecipe: async (root, { name, description, category, instructions, username }, { Recipe }) => {
            return await new Recipe({
                name,
                description,
                category,
                instructions,
                username
            }).save();
        }
    }
};