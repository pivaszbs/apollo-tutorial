exports.typeDefs = `

type Recipe {
    _id: ID
    name: String!
    category: String!
    description: String!
    instructions: String!
    createdDate: String
    likes: Int
    username: String
}

type User {
    _id: ID
    username: String!
    password: String!
    email: String!
    joinDate: String
    favorites: [Recipe]
}

type Token {
    token: String!
}

type Query {
    getAllRecipes: [Recipe]
    
    getCurrentUser: User
}

type Mutation {
    addRecipe(name: String!,
    category: String!,
    description: String!,
    instructions: String!,
    createdDate: String,
    likes: Int,
    username: String): Recipe
    
    signupUser(username: String!, email: String!, password: String!): Token
    
    signinUser(username: String!, password: String): Token
}

`;
