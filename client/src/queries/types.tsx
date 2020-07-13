import gql from 'graphql-tag';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: any }> = { [K in keyof T]: T[K] };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type Recipe = {
  __typename?: 'Recipe';
  _id?: Maybe<Scalars['ID']>;
  name: Scalars['String'];
  category: Scalars['String'];
  description: Scalars['String'];
  instructions: Scalars['String'];
  createdDate?: Maybe<Scalars['String']>;
  likes?: Maybe<Scalars['Int']>;
  username?: Maybe<Scalars['String']>;
};

export type User = {
  __typename?: 'User';
  _id?: Maybe<Scalars['ID']>;
  username: Scalars['String'];
  password: Scalars['String'];
  email: Scalars['String'];
  joinDate?: Maybe<Scalars['String']>;
  favorites?: Maybe<Array<Maybe<Recipe>>>;
};

export type Token = {
  __typename?: 'Token';
  token: Scalars['String'];
};

export type Query = {
  __typename?: 'Query';
  getAllRecipes?: Maybe<Array<Maybe<Recipe>>>;
  getCurrentUser?: Maybe<User>;
  getRecipe?: Maybe<Recipe>;
  searchRecipes?: Maybe<Array<Maybe<Recipe>>>;
  getUserRecipes?: Maybe<Array<Maybe<Recipe>>>;
};


export type QueryGetRecipeArgs = {
  _id: Scalars['ID'];
};


export type QuerySearchRecipesArgs = {
  searchTerm: Scalars['String'];
};


export type QueryGetUserRecipesArgs = {
  username: Scalars['String'];
};

export type Mutation = {
  __typename?: 'Mutation';
  addRecipe?: Maybe<Recipe>;
  signupUser?: Maybe<Token>;
  signinUser?: Maybe<Token>;
  deleteUserRecipe?: Maybe<Recipe>;
  likeRecipe?: Maybe<Recipe>;
  unlikeRecipe?: Maybe<Recipe>;
};


export type MutationAddRecipeArgs = {
  name: Scalars['String'];
  category: Scalars['String'];
  description: Scalars['String'];
  instructions: Scalars['String'];
  createdDate?: Maybe<Scalars['String']>;
  likes?: Maybe<Scalars['Int']>;
  username?: Maybe<Scalars['String']>;
};


export type MutationSignupUserArgs = {
  username: Scalars['String'];
  email: Scalars['String'];
  password: Scalars['String'];
};


export type MutationSigninUserArgs = {
  username: Scalars['String'];
  password?: Maybe<Scalars['String']>;
};


export type MutationDeleteUserRecipeArgs = {
  _id: Scalars['ID'];
};


export type MutationLikeRecipeArgs = {
  _id: Scalars['ID'];
  username: Scalars['String'];
};


export type MutationUnlikeRecipeArgs = {
  _id: Scalars['ID'];
  username: Scalars['String'];
};


