import { GraphQLResolveInfo } from 'graphql';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: any }> = { [K in keyof T]: T[K] };
export type RequireFields<T, K extends keyof T> = { [X in Exclude<keyof T, K>]?: T[X] } & { [P in K]-?: NonNullable<T[P]> };
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




export type ResolverTypeWrapper<T> = Promise<T> | T;


export type LegacyStitchingResolver<TResult, TParent, TContext, TArgs> = {
  fragment: string;
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};

export type NewStitchingResolver<TResult, TParent, TContext, TArgs> = {
  selectionSet: string;
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};
export type StitchingResolver<TResult, TParent, TContext, TArgs> = LegacyStitchingResolver<TResult, TParent, TContext, TArgs> | NewStitchingResolver<TResult, TParent, TContext, TArgs>;
export type Resolver<TResult, TParent = {}, TContext = {}, TArgs = {}> =
  | ResolverFn<TResult, TParent, TContext, TArgs>
  | StitchingResolver<TResult, TParent, TContext, TArgs>;

export type ResolverFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => Promise<TResult> | TResult;

export type SubscriptionSubscribeFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => AsyncIterator<TResult> | Promise<AsyncIterator<TResult>>;

export type SubscriptionResolveFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

export interface SubscriptionSubscriberObject<TResult, TKey extends string, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<{ [key in TKey]: TResult }, TParent, TContext, TArgs>;
  resolve?: SubscriptionResolveFn<TResult, { [key in TKey]: TResult }, TContext, TArgs>;
}

export interface SubscriptionResolverObject<TResult, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<any, TParent, TContext, TArgs>;
  resolve: SubscriptionResolveFn<TResult, any, TContext, TArgs>;
}

export type SubscriptionObject<TResult, TKey extends string, TParent, TContext, TArgs> =
  | SubscriptionSubscriberObject<TResult, TKey, TParent, TContext, TArgs>
  | SubscriptionResolverObject<TResult, TParent, TContext, TArgs>;

export type SubscriptionResolver<TResult, TKey extends string, TParent = {}, TContext = {}, TArgs = {}> =
  | ((...args: any[]) => SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>)
  | SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>;

export type TypeResolveFn<TTypes, TParent = {}, TContext = {}> = (
  parent: TParent,
  context: TContext,
  info: GraphQLResolveInfo
) => Maybe<TTypes> | Promise<Maybe<TTypes>>;

export type IsTypeOfResolverFn<T = {}> = (obj: T, info: GraphQLResolveInfo) => boolean | Promise<boolean>;

export type NextResolverFn<T> = () => Promise<T>;

export type DirectiveResolverFn<TResult = {}, TParent = {}, TContext = {}, TArgs = {}> = (
  next: NextResolverFn<TResult>,
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

/** Mapping between all available schema types and the resolvers types */
export type ResolversTypes = {
  Recipe: ResolverTypeWrapper<Recipe>;
  ID: ResolverTypeWrapper<Scalars['ID']>;
  String: ResolverTypeWrapper<Scalars['String']>;
  Int: ResolverTypeWrapper<Scalars['Int']>;
  User: ResolverTypeWrapper<User>;
  Token: ResolverTypeWrapper<Token>;
  Query: ResolverTypeWrapper<{}>;
  Mutation: ResolverTypeWrapper<{}>;
  Boolean: ResolverTypeWrapper<Scalars['Boolean']>;
};

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = {
  Recipe: Recipe;
  ID: Scalars['ID'];
  String: Scalars['String'];
  Int: Scalars['Int'];
  User: User;
  Token: Token;
  Query: {};
  Mutation: {};
  Boolean: Scalars['Boolean'];
};

export type RecipeResolvers<ContextType = any, ParentType extends ResolversParentTypes['Recipe'] = ResolversParentTypes['Recipe']> = {
  _id?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  category?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  description?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  instructions?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  createdDate?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  likes?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  username?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType>;
};

export type UserResolvers<ContextType = any, ParentType extends ResolversParentTypes['User'] = ResolversParentTypes['User']> = {
  _id?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>;
  username?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  password?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  email?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  joinDate?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  favorites?: Resolver<Maybe<Array<Maybe<ResolversTypes['Recipe']>>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType>;
};

export type TokenResolvers<ContextType = any, ParentType extends ResolversParentTypes['Token'] = ResolversParentTypes['Token']> = {
  token?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType>;
};

export type QueryResolvers<ContextType = any, ParentType extends ResolversParentTypes['Query'] = ResolversParentTypes['Query']> = {
  getAllRecipes?: Resolver<Maybe<Array<Maybe<ResolversTypes['Recipe']>>>, ParentType, ContextType>;
  getCurrentUser?: Resolver<Maybe<ResolversTypes['User']>, ParentType, ContextType>;
  getRecipe?: Resolver<Maybe<ResolversTypes['Recipe']>, ParentType, ContextType, RequireFields<QueryGetRecipeArgs, '_id'>>;
  searchRecipes?: Resolver<Maybe<Array<Maybe<ResolversTypes['Recipe']>>>, ParentType, ContextType, RequireFields<QuerySearchRecipesArgs, 'searchTerm'>>;
  getUserRecipes?: Resolver<Maybe<Array<Maybe<ResolversTypes['Recipe']>>>, ParentType, ContextType, RequireFields<QueryGetUserRecipesArgs, 'username'>>;
};

export type MutationResolvers<ContextType = any, ParentType extends ResolversParentTypes['Mutation'] = ResolversParentTypes['Mutation']> = {
  addRecipe?: Resolver<Maybe<ResolversTypes['Recipe']>, ParentType, ContextType, RequireFields<MutationAddRecipeArgs, 'name' | 'category' | 'description' | 'instructions'>>;
  signupUser?: Resolver<Maybe<ResolversTypes['Token']>, ParentType, ContextType, RequireFields<MutationSignupUserArgs, 'username' | 'email' | 'password'>>;
  signinUser?: Resolver<Maybe<ResolversTypes['Token']>, ParentType, ContextType, RequireFields<MutationSigninUserArgs, 'username'>>;
};

export type Resolvers<ContextType = any> = {
  Recipe?: RecipeResolvers<ContextType>;
  User?: UserResolvers<ContextType>;
  Token?: TokenResolvers<ContextType>;
  Query?: QueryResolvers<ContextType>;
  Mutation?: MutationResolvers<ContextType>;
};


/**
 * @deprecated
 * Use "Resolvers" root object instead. If you wish to get "IResolvers", add "typesPrefix: I" to your config.
 */
export type IResolvers<ContextType = any> = Resolvers<ContextType>;


      export interface IntrospectionResultData {
        __schema: {
          types: {
            kind: string;
            name: string;
            possibleTypes: {
              name: string;
            }[];
          }[];
        };
      }
      const result: IntrospectionResultData = {
  "__schema": {
    "types": []
  }
};
      export default result;
    