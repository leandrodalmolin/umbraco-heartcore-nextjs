/* eslint-disable */
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** The `DateTime` scalar type represents a date and time. `DateTime` expects timestamps to be formatted in accordance with the [ISO-8601](https://en.wikipedia.org/wiki/ISO_8601) standard. */
  DateTime: any;
  Decimal: any;
  /** A string containing HTML code. */
  HTML: any;
  /** The `JSON` scalar type represents JSON values as specified by [ECMA-404](http://www.ecma-international.org/publications/files/ECMA-ST/ECMA-404.pdf). */
  JSON: any;
};

export type Ben = Content & {
  __typename?: 'Ben';
  /** The ancestors. */
  ancestors: ContentConnection;
  /** The children. */
  children: ContentConnection;
  /** The Content Type alias. */
  contentTypeAlias: Scalars['String'];
  /** The create date. */
  createDate: Scalars['DateTime'];
  /** The descendants. */
  descendants: ContentConnection;
  /** The unique identifier. */
  id: Scalars['ID'];
  /** The level. */
  level: Scalars['Int'];
  linkPicker?: Maybe<Array<Maybe<Link>>>;
  /** The name. */
  name?: Maybe<Scalars['String']>;
  /** The parent Content, can be null if content is at root. */
  parent?: Maybe<Content>;
  /** The sort order. */
  sortOrder: Scalars['Int'];
  /** The update date. */
  updateDate?: Maybe<Scalars['DateTime']>;
  /** The url. */
  url?: Maybe<Scalars['String']>;
};


export type BenAncestorsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  culture?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<InputMaybe<ContentOrderByInput>>>;
  where?: InputMaybe<ContentFilterInput>;
};


export type BenChildrenArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  culture?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<InputMaybe<ContentOrderByInput>>>;
  where?: InputMaybe<ContentFilterInput>;
};


export type BenDescendantsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  culture?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<InputMaybe<ContentOrderByInput>>>;
  where?: InputMaybe<ContentFilterInput>;
};


export type BenNameArgs = {
  culture?: InputMaybe<Scalars['String']>;
};


export type BenParentArgs = {
  culture?: InputMaybe<Scalars['String']>;
};


export type BenUpdateDateArgs = {
  culture?: InputMaybe<Scalars['String']>;
};


export type BenUrlArgs = {
  culture?: InputMaybe<Scalars['String']>;
};

/** A connection from an object to a list of objects of type `Ben`. */
export type BenConnection = {
  __typename?: 'BenConnection';
  /** A list of edges. */
  edges?: Maybe<Array<Maybe<BenEdge>>>;
  /** A list of all of the objects returned in the connection. This is a convenience field provided for quickly exploring the API; rather than querying for "{ edges { node } }" when no edge data is needed, this field can be used instead. Note that when clients like Relay need to fetch the "cursor" field on the edge to enable efficient pagination, this shortcut cannot be used, and the full "{ edges { node } } " version should be used instead. */
  items: Array<Maybe<Ben>>;
  /** Information to aid in pagination. */
  pageInfo?: Maybe<PageInfo>;
};

/** An edge in a connection from an object to another object of type `Ben` */
export type BenEdge = {
  __typename?: 'BenEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of the edge. */
  node?: Maybe<Ben>;
};

/** A filter input for the type `Ben`. */
export type BenFilterInput = {
  /** All of the filters must match. */
  AND?: InputMaybe<Array<InputMaybe<BenFilterInput>>>;
  /** None of the filters must match. */
  NOT?: InputMaybe<Array<InputMaybe<BenFilterInput>>>;
  /** Some of the filters must match. */
  OR?: InputMaybe<Array<InputMaybe<BenFilterInput>>>;
  /** Field must equal value. */
  contentTypeAlias?: InputMaybe<Scalars['String']>;
  /** Field must match any of the values. */
  contentTypeAlias_any?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Field must contain value. */
  contentTypeAlias_contains?: InputMaybe<Scalars['String']>;
  /** Field must end with value. */
  contentTypeAlias_ends_with?: InputMaybe<Scalars['String']>;
  /** Field must start with value. */
  contentTypeAlias_starts_with?: InputMaybe<Scalars['String']>;
  /** Field must equal value. */
  createDate?: InputMaybe<Scalars['DateTime']>;
  /** Field must be greater than value. */
  createDate_gt?: InputMaybe<Scalars['DateTime']>;
  /** Field must be greater than or equal value. */
  createDate_gte?: InputMaybe<Scalars['DateTime']>;
  /** Field must be less than value. */
  createDate_lt?: InputMaybe<Scalars['DateTime']>;
  /** Field must be less than or equal value. */
  createDate_lte?: InputMaybe<Scalars['DateTime']>;
  /** Field must equal value. */
  id?: InputMaybe<Scalars['ID']>;
  /** Field must match any of the values. */
  id_any?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** Field must equal value. */
  level?: InputMaybe<Scalars['Int']>;
  /** Field must match any of the values. */
  level_any?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  /** Field must be greater than value. */
  level_gt?: InputMaybe<Scalars['Int']>;
  /** Field must be greater than or equal value. */
  level_gte?: InputMaybe<Scalars['Int']>;
  /** Field must be less than value. */
  level_lt?: InputMaybe<Scalars['Int']>;
  /** Field must be less than or equal value. */
  level_lte?: InputMaybe<Scalars['Int']>;
  /** Field must equal value. */
  name?: InputMaybe<Scalars['String']>;
  /** Field must match any of the values. */
  name_any?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Field must contain value. */
  name_contains?: InputMaybe<Scalars['String']>;
  /** Field must end with value. */
  name_ends_with?: InputMaybe<Scalars['String']>;
  /** Field must start with value. */
  name_starts_with?: InputMaybe<Scalars['String']>;
  /** Field must equal value. */
  sortOrder?: InputMaybe<Scalars['Int']>;
  /** Field must match any of the values. */
  sortOrder_any?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  /** Field must be greater than value. */
  sortOrder_gt?: InputMaybe<Scalars['Int']>;
  /** Field must be greater than or equal value. */
  sortOrder_gte?: InputMaybe<Scalars['Int']>;
  /** Field must be less than value. */
  sortOrder_lt?: InputMaybe<Scalars['Int']>;
  /** Field must be less than or equal value. */
  sortOrder_lte?: InputMaybe<Scalars['Int']>;
  /** Field must equal value. */
  updateDate?: InputMaybe<Scalars['DateTime']>;
  /** Field must be greater than value. */
  updateDate_gt?: InputMaybe<Scalars['DateTime']>;
  /** Field must be greater than or equal value. */
  updateDate_gte?: InputMaybe<Scalars['DateTime']>;
  /** Field must be less than value. */
  updateDate_lt?: InputMaybe<Scalars['DateTime']>;
  /** Field must be less than or equal value. */
  updateDate_lte?: InputMaybe<Scalars['DateTime']>;
  /** Field must equal value. */
  url?: InputMaybe<Scalars['String']>;
  /** Field must match any of the values. */
  url_any?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Field must contain value. */
  url_contains?: InputMaybe<Scalars['String']>;
  /** Field must end with value. */
  url_ends_with?: InputMaybe<Scalars['String']>;
  /** Field must start with value. */
  url_starts_with?: InputMaybe<Scalars['String']>;
};

/** An order by input for the type `Ben`. */
export enum BenOrderByInput {
  /** Order by `contentTypeAlias` in ascending order. */
  ContentTypeAliasAsc = 'contentTypeAlias_ASC',
  /** Order by `contentTypeAlias` in descending order. */
  ContentTypeAliasDesc = 'contentTypeAlias_DESC',
  /** Order by `createDate` in ascending order. */
  CreateDateAsc = 'createDate_ASC',
  /** Order by `createDate` in descending order. */
  CreateDateDesc = 'createDate_DESC',
  /** Order by `id` in ascending order. */
  IdAsc = 'id_ASC',
  /** Order by `id` in descending order. */
  IdDesc = 'id_DESC',
  /** Order by `level` in ascending order. */
  LevelAsc = 'level_ASC',
  /** Order by `level` in descending order. */
  LevelDesc = 'level_DESC',
  /** Order by `name` in ascending order. */
  NameAsc = 'name_ASC',
  /** Order by `name` in descending order. */
  NameDesc = 'name_DESC',
  /** Order by `path` in ascending order. */
  PathAsc = 'path_ASC',
  /** Order by `path` in descending order. */
  PathDesc = 'path_DESC',
  /** Order by `sortOrder` in ascending order. */
  SortOrderAsc = 'sortOrder_ASC',
  /** Order by `sortOrder` in descending order. */
  SortOrderDesc = 'sortOrder_DESC',
  /** Order by `updateDate` in ascending order. */
  UpdateDateAsc = 'updateDate_ASC',
  /** Order by `updateDate` in descending order. */
  UpdateDateDesc = 'updateDate_DESC',
  /** Order by `url` in ascending order. */
  UrlAsc = 'url_ASC',
  /** Order by `url` in descending order. */
  UrlDesc = 'url_DESC'
}

export type BlockListItem = {
  __typename?: 'BlockListItem';
  /** The content. */
  content: Element;
  /** The settings. */
  settings?: Maybe<Element>;
};

export type Blog = Content & {
  __typename?: 'Blog';
  /** The ancestors. */
  ancestors: ContentConnection;
  /** The children. */
  children: ContentConnection;
  /** The Content Type alias. */
  contentTypeAlias: Scalars['String'];
  /** The create date. */
  createDate: Scalars['DateTime'];
  /** The descendants. */
  descendants: ContentConnection;
  /** The unique identifier. */
  id: Scalars['ID'];
  image?: Maybe<MediaWithCrops>;
  /** The level. */
  level: Scalars['Int'];
  /** The name. */
  name?: Maybe<Scalars['String']>;
  /** The parent Content, can be null if content is at root. */
  parent?: Maybe<Content>;
  showLargeImage?: Maybe<Scalars['Boolean']>;
  /** The sort order. */
  sortOrder: Scalars['Int'];
  text?: Maybe<Scalars['HTML']>;
  title?: Maybe<Scalars['String']>;
  /** The update date. */
  updateDate?: Maybe<Scalars['DateTime']>;
  /** The url. */
  url?: Maybe<Scalars['String']>;
};


export type BlogAncestorsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  culture?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<InputMaybe<ContentOrderByInput>>>;
  where?: InputMaybe<ContentFilterInput>;
};


export type BlogChildrenArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  culture?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<InputMaybe<ContentOrderByInput>>>;
  where?: InputMaybe<ContentFilterInput>;
};


export type BlogDescendantsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  culture?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<InputMaybe<ContentOrderByInput>>>;
  where?: InputMaybe<ContentFilterInput>;
};


export type BlogNameArgs = {
  culture?: InputMaybe<Scalars['String']>;
};


export type BlogParentArgs = {
  culture?: InputMaybe<Scalars['String']>;
};


export type BlogUpdateDateArgs = {
  culture?: InputMaybe<Scalars['String']>;
};


export type BlogUrlArgs = {
  culture?: InputMaybe<Scalars['String']>;
};

/** A connection from an object to a list of objects of type `Blog`. */
export type BlogConnection = {
  __typename?: 'BlogConnection';
  /** A list of edges. */
  edges?: Maybe<Array<Maybe<BlogEdge>>>;
  /** A list of all of the objects returned in the connection. This is a convenience field provided for quickly exploring the API; rather than querying for "{ edges { node } }" when no edge data is needed, this field can be used instead. Note that when clients like Relay need to fetch the "cursor" field on the edge to enable efficient pagination, this shortcut cannot be used, and the full "{ edges { node } } " version should be used instead. */
  items: Array<Maybe<Blog>>;
  /** Information to aid in pagination. */
  pageInfo?: Maybe<PageInfo>;
};

/** An edge in a connection from an object to another object of type `Blog` */
export type BlogEdge = {
  __typename?: 'BlogEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of the edge. */
  node?: Maybe<Blog>;
};

/** A filter input for the type `Blog`. */
export type BlogFilterInput = {
  /** All of the filters must match. */
  AND?: InputMaybe<Array<InputMaybe<BlogFilterInput>>>;
  /** None of the filters must match. */
  NOT?: InputMaybe<Array<InputMaybe<BlogFilterInput>>>;
  /** Some of the filters must match. */
  OR?: InputMaybe<Array<InputMaybe<BlogFilterInput>>>;
  /** Field must equal value. */
  contentTypeAlias?: InputMaybe<Scalars['String']>;
  /** Field must match any of the values. */
  contentTypeAlias_any?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Field must contain value. */
  contentTypeAlias_contains?: InputMaybe<Scalars['String']>;
  /** Field must end with value. */
  contentTypeAlias_ends_with?: InputMaybe<Scalars['String']>;
  /** Field must start with value. */
  contentTypeAlias_starts_with?: InputMaybe<Scalars['String']>;
  /** Field must equal value. */
  createDate?: InputMaybe<Scalars['DateTime']>;
  /** Field must be greater than value. */
  createDate_gt?: InputMaybe<Scalars['DateTime']>;
  /** Field must be greater than or equal value. */
  createDate_gte?: InputMaybe<Scalars['DateTime']>;
  /** Field must be less than value. */
  createDate_lt?: InputMaybe<Scalars['DateTime']>;
  /** Field must be less than or equal value. */
  createDate_lte?: InputMaybe<Scalars['DateTime']>;
  /** Field must equal value. */
  id?: InputMaybe<Scalars['ID']>;
  /** Field must match any of the values. */
  id_any?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** Field must equal value. */
  level?: InputMaybe<Scalars['Int']>;
  /** Field must match any of the values. */
  level_any?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  /** Field must be greater than value. */
  level_gt?: InputMaybe<Scalars['Int']>;
  /** Field must be greater than or equal value. */
  level_gte?: InputMaybe<Scalars['Int']>;
  /** Field must be less than value. */
  level_lt?: InputMaybe<Scalars['Int']>;
  /** Field must be less than or equal value. */
  level_lte?: InputMaybe<Scalars['Int']>;
  /** Field must equal value. */
  name?: InputMaybe<Scalars['String']>;
  /** Field must match any of the values. */
  name_any?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Field must contain value. */
  name_contains?: InputMaybe<Scalars['String']>;
  /** Field must end with value. */
  name_ends_with?: InputMaybe<Scalars['String']>;
  /** Field must start with value. */
  name_starts_with?: InputMaybe<Scalars['String']>;
  /** Field must equal value. */
  showLargeImage?: InputMaybe<Scalars['Boolean']>;
  /** Field must equal value. */
  sortOrder?: InputMaybe<Scalars['Int']>;
  /** Field must match any of the values. */
  sortOrder_any?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  /** Field must be greater than value. */
  sortOrder_gt?: InputMaybe<Scalars['Int']>;
  /** Field must be greater than or equal value. */
  sortOrder_gte?: InputMaybe<Scalars['Int']>;
  /** Field must be less than value. */
  sortOrder_lt?: InputMaybe<Scalars['Int']>;
  /** Field must be less than or equal value. */
  sortOrder_lte?: InputMaybe<Scalars['Int']>;
  /** Field must equal value. */
  title?: InputMaybe<Scalars['String']>;
  /** Field must match any of the values. */
  title_any?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Field must contain value. */
  title_contains?: InputMaybe<Scalars['String']>;
  /** Field must end with value. */
  title_ends_with?: InputMaybe<Scalars['String']>;
  /** Field must start with value. */
  title_starts_with?: InputMaybe<Scalars['String']>;
  /** Field must equal value. */
  updateDate?: InputMaybe<Scalars['DateTime']>;
  /** Field must be greater than value. */
  updateDate_gt?: InputMaybe<Scalars['DateTime']>;
  /** Field must be greater than or equal value. */
  updateDate_gte?: InputMaybe<Scalars['DateTime']>;
  /** Field must be less than value. */
  updateDate_lt?: InputMaybe<Scalars['DateTime']>;
  /** Field must be less than or equal value. */
  updateDate_lte?: InputMaybe<Scalars['DateTime']>;
  /** Field must equal value. */
  url?: InputMaybe<Scalars['String']>;
  /** Field must match any of the values. */
  url_any?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Field must contain value. */
  url_contains?: InputMaybe<Scalars['String']>;
  /** Field must end with value. */
  url_ends_with?: InputMaybe<Scalars['String']>;
  /** Field must start with value. */
  url_starts_with?: InputMaybe<Scalars['String']>;
};

/** An order by input for the type `Blog`. */
export enum BlogOrderByInput {
  /** Order by `contentTypeAlias` in ascending order. */
  ContentTypeAliasAsc = 'contentTypeAlias_ASC',
  /** Order by `contentTypeAlias` in descending order. */
  ContentTypeAliasDesc = 'contentTypeAlias_DESC',
  /** Order by `createDate` in ascending order. */
  CreateDateAsc = 'createDate_ASC',
  /** Order by `createDate` in descending order. */
  CreateDateDesc = 'createDate_DESC',
  /** Order by `id` in ascending order. */
  IdAsc = 'id_ASC',
  /** Order by `id` in descending order. */
  IdDesc = 'id_DESC',
  /** Order by `level` in ascending order. */
  LevelAsc = 'level_ASC',
  /** Order by `level` in descending order. */
  LevelDesc = 'level_DESC',
  /** Order by `name` in ascending order. */
  NameAsc = 'name_ASC',
  /** Order by `name` in descending order. */
  NameDesc = 'name_DESC',
  /** Order by `path` in ascending order. */
  PathAsc = 'path_ASC',
  /** Order by `path` in descending order. */
  PathDesc = 'path_DESC',
  /** Order by `showLargeImage` in ascending order. */
  ShowLargeImageAsc = 'showLargeImage_ASC',
  /** Order by `showLargeImage` in descending order. */
  ShowLargeImageDesc = 'showLargeImage_DESC',
  /** Order by `sortOrder` in ascending order. */
  SortOrderAsc = 'sortOrder_ASC',
  /** Order by `sortOrder` in descending order. */
  SortOrderDesc = 'sortOrder_DESC',
  /** Order by `title` in ascending order. */
  TitleAsc = 'title_ASC',
  /** Order by `title` in descending order. */
  TitleDesc = 'title_DESC',
  /** Order by `updateDate` in ascending order. */
  UpdateDateAsc = 'updateDate_ASC',
  /** Order by `updateDate` in descending order. */
  UpdateDateDesc = 'updateDate_DESC',
  /** Order by `url` in ascending order. */
  UrlAsc = 'url_ASC',
  /** Order by `url` in descending order. */
  UrlDesc = 'url_DESC'
}

export type BlogPost = Content & {
  __typename?: 'BlogPost';
  /** The ancestors. */
  ancestors: ContentConnection;
  /** The children. */
  children: ContentConnection;
  /** The Content Type alias. */
  contentTypeAlias: Scalars['String'];
  /** The create date. */
  createDate: Scalars['DateTime'];
  /** The descendants. */
  descendants: ContentConnection;
  /** The unique identifier. */
  id: Scalars['ID'];
  image?: Maybe<MediaWithCrops>;
  /** The level. */
  level: Scalars['Int'];
  /** The name. */
  name?: Maybe<Scalars['String']>;
  /** The parent Content, can be null if content is at root. */
  parent?: Maybe<Content>;
  showLargeImage?: Maybe<Scalars['Boolean']>;
  /** The sort order. */
  sortOrder: Scalars['Int'];
  text?: Maybe<Scalars['HTML']>;
  title?: Maybe<Scalars['String']>;
  /** The update date. */
  updateDate?: Maybe<Scalars['DateTime']>;
  /** The url. */
  url?: Maybe<Scalars['String']>;
};


export type BlogPostAncestorsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  culture?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<InputMaybe<ContentOrderByInput>>>;
  where?: InputMaybe<ContentFilterInput>;
};


export type BlogPostChildrenArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  culture?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<InputMaybe<ContentOrderByInput>>>;
  where?: InputMaybe<ContentFilterInput>;
};


export type BlogPostDescendantsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  culture?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<InputMaybe<ContentOrderByInput>>>;
  where?: InputMaybe<ContentFilterInput>;
};


export type BlogPostNameArgs = {
  culture?: InputMaybe<Scalars['String']>;
};


export type BlogPostParentArgs = {
  culture?: InputMaybe<Scalars['String']>;
};


export type BlogPostUpdateDateArgs = {
  culture?: InputMaybe<Scalars['String']>;
};


export type BlogPostUrlArgs = {
  culture?: InputMaybe<Scalars['String']>;
};

/** A connection from an object to a list of objects of type `BlogPost`. */
export type BlogPostConnection = {
  __typename?: 'BlogPostConnection';
  /** A list of edges. */
  edges?: Maybe<Array<Maybe<BlogPostEdge>>>;
  /** A list of all of the objects returned in the connection. This is a convenience field provided for quickly exploring the API; rather than querying for "{ edges { node } }" when no edge data is needed, this field can be used instead. Note that when clients like Relay need to fetch the "cursor" field on the edge to enable efficient pagination, this shortcut cannot be used, and the full "{ edges { node } } " version should be used instead. */
  items: Array<Maybe<BlogPost>>;
  /** Information to aid in pagination. */
  pageInfo?: Maybe<PageInfo>;
};

/** An edge in a connection from an object to another object of type `BlogPost` */
export type BlogPostEdge = {
  __typename?: 'BlogPostEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of the edge. */
  node?: Maybe<BlogPost>;
};

/** A filter input for the type `BlogPost`. */
export type BlogPostFilterInput = {
  /** All of the filters must match. */
  AND?: InputMaybe<Array<InputMaybe<BlogPostFilterInput>>>;
  /** None of the filters must match. */
  NOT?: InputMaybe<Array<InputMaybe<BlogPostFilterInput>>>;
  /** Some of the filters must match. */
  OR?: InputMaybe<Array<InputMaybe<BlogPostFilterInput>>>;
  /** Field must equal value. */
  contentTypeAlias?: InputMaybe<Scalars['String']>;
  /** Field must match any of the values. */
  contentTypeAlias_any?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Field must contain value. */
  contentTypeAlias_contains?: InputMaybe<Scalars['String']>;
  /** Field must end with value. */
  contentTypeAlias_ends_with?: InputMaybe<Scalars['String']>;
  /** Field must start with value. */
  contentTypeAlias_starts_with?: InputMaybe<Scalars['String']>;
  /** Field must equal value. */
  createDate?: InputMaybe<Scalars['DateTime']>;
  /** Field must be greater than value. */
  createDate_gt?: InputMaybe<Scalars['DateTime']>;
  /** Field must be greater than or equal value. */
  createDate_gte?: InputMaybe<Scalars['DateTime']>;
  /** Field must be less than value. */
  createDate_lt?: InputMaybe<Scalars['DateTime']>;
  /** Field must be less than or equal value. */
  createDate_lte?: InputMaybe<Scalars['DateTime']>;
  /** Field must equal value. */
  id?: InputMaybe<Scalars['ID']>;
  /** Field must match any of the values. */
  id_any?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** Field must equal value. */
  level?: InputMaybe<Scalars['Int']>;
  /** Field must match any of the values. */
  level_any?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  /** Field must be greater than value. */
  level_gt?: InputMaybe<Scalars['Int']>;
  /** Field must be greater than or equal value. */
  level_gte?: InputMaybe<Scalars['Int']>;
  /** Field must be less than value. */
  level_lt?: InputMaybe<Scalars['Int']>;
  /** Field must be less than or equal value. */
  level_lte?: InputMaybe<Scalars['Int']>;
  /** Field must equal value. */
  name?: InputMaybe<Scalars['String']>;
  /** Field must match any of the values. */
  name_any?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Field must contain value. */
  name_contains?: InputMaybe<Scalars['String']>;
  /** Field must end with value. */
  name_ends_with?: InputMaybe<Scalars['String']>;
  /** Field must start with value. */
  name_starts_with?: InputMaybe<Scalars['String']>;
  /** Field must equal value. */
  showLargeImage?: InputMaybe<Scalars['Boolean']>;
  /** Field must equal value. */
  sortOrder?: InputMaybe<Scalars['Int']>;
  /** Field must match any of the values. */
  sortOrder_any?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  /** Field must be greater than value. */
  sortOrder_gt?: InputMaybe<Scalars['Int']>;
  /** Field must be greater than or equal value. */
  sortOrder_gte?: InputMaybe<Scalars['Int']>;
  /** Field must be less than value. */
  sortOrder_lt?: InputMaybe<Scalars['Int']>;
  /** Field must be less than or equal value. */
  sortOrder_lte?: InputMaybe<Scalars['Int']>;
  /** Field must equal value. */
  title?: InputMaybe<Scalars['String']>;
  /** Field must match any of the values. */
  title_any?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Field must contain value. */
  title_contains?: InputMaybe<Scalars['String']>;
  /** Field must end with value. */
  title_ends_with?: InputMaybe<Scalars['String']>;
  /** Field must start with value. */
  title_starts_with?: InputMaybe<Scalars['String']>;
  /** Field must equal value. */
  updateDate?: InputMaybe<Scalars['DateTime']>;
  /** Field must be greater than value. */
  updateDate_gt?: InputMaybe<Scalars['DateTime']>;
  /** Field must be greater than or equal value. */
  updateDate_gte?: InputMaybe<Scalars['DateTime']>;
  /** Field must be less than value. */
  updateDate_lt?: InputMaybe<Scalars['DateTime']>;
  /** Field must be less than or equal value. */
  updateDate_lte?: InputMaybe<Scalars['DateTime']>;
  /** Field must equal value. */
  url?: InputMaybe<Scalars['String']>;
  /** Field must match any of the values. */
  url_any?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Field must contain value. */
  url_contains?: InputMaybe<Scalars['String']>;
  /** Field must end with value. */
  url_ends_with?: InputMaybe<Scalars['String']>;
  /** Field must start with value. */
  url_starts_with?: InputMaybe<Scalars['String']>;
};

/** An order by input for the type `BlogPost`. */
export enum BlogPostOrderByInput {
  /** Order by `contentTypeAlias` in ascending order. */
  ContentTypeAliasAsc = 'contentTypeAlias_ASC',
  /** Order by `contentTypeAlias` in descending order. */
  ContentTypeAliasDesc = 'contentTypeAlias_DESC',
  /** Order by `createDate` in ascending order. */
  CreateDateAsc = 'createDate_ASC',
  /** Order by `createDate` in descending order. */
  CreateDateDesc = 'createDate_DESC',
  /** Order by `id` in ascending order. */
  IdAsc = 'id_ASC',
  /** Order by `id` in descending order. */
  IdDesc = 'id_DESC',
  /** Order by `level` in ascending order. */
  LevelAsc = 'level_ASC',
  /** Order by `level` in descending order. */
  LevelDesc = 'level_DESC',
  /** Order by `name` in ascending order. */
  NameAsc = 'name_ASC',
  /** Order by `name` in descending order. */
  NameDesc = 'name_DESC',
  /** Order by `path` in ascending order. */
  PathAsc = 'path_ASC',
  /** Order by `path` in descending order. */
  PathDesc = 'path_DESC',
  /** Order by `showLargeImage` in ascending order. */
  ShowLargeImageAsc = 'showLargeImage_ASC',
  /** Order by `showLargeImage` in descending order. */
  ShowLargeImageDesc = 'showLargeImage_DESC',
  /** Order by `sortOrder` in ascending order. */
  SortOrderAsc = 'sortOrder_ASC',
  /** Order by `sortOrder` in descending order. */
  SortOrderDesc = 'sortOrder_DESC',
  /** Order by `title` in ascending order. */
  TitleAsc = 'title_ASC',
  /** Order by `title` in descending order. */
  TitleDesc = 'title_DESC',
  /** Order by `updateDate` in ascending order. */
  UpdateDateAsc = 'updateDate_ASC',
  /** Order by `updateDate` in descending order. */
  UpdateDateDesc = 'updateDate_DESC',
  /** Order by `url` in ascending order. */
  UrlAsc = 'url_ASC',
  /** Order by `url` in descending order. */
  UrlDesc = 'url_DESC'
}

export type Content = {
  /** The ancestors. */
  ancestors: ContentConnection;
  /** The children. */
  children: ContentConnection;
  /** The Content Type alias. */
  contentTypeAlias: Scalars['String'];
  /** The create date. */
  createDate: Scalars['DateTime'];
  /** The descendants. */
  descendants: ContentConnection;
  /** The unique identifier. */
  id: Scalars['ID'];
  /** The level. */
  level: Scalars['Int'];
  /** The name. */
  name?: Maybe<Scalars['String']>;
  /** The parent Content, can be null if content is at root. */
  parent?: Maybe<Content>;
  /** The sort order. */
  sortOrder: Scalars['Int'];
  /** The update date. */
  updateDate?: Maybe<Scalars['DateTime']>;
  /** The url. */
  url?: Maybe<Scalars['String']>;
};


export type ContentAncestorsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  culture?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<InputMaybe<ContentOrderByInput>>>;
  where?: InputMaybe<ContentFilterInput>;
};


export type ContentChildrenArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  culture?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<InputMaybe<ContentOrderByInput>>>;
  where?: InputMaybe<ContentFilterInput>;
};


export type ContentDescendantsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  culture?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<InputMaybe<ContentOrderByInput>>>;
  where?: InputMaybe<ContentFilterInput>;
};


export type ContentNameArgs = {
  culture?: InputMaybe<Scalars['String']>;
};


export type ContentParentArgs = {
  culture?: InputMaybe<Scalars['String']>;
};


export type ContentUpdateDateArgs = {
  culture?: InputMaybe<Scalars['String']>;
};


export type ContentUrlArgs = {
  culture?: InputMaybe<Scalars['String']>;
};

/** A connection from an object to a list of objects of type `Content`. */
export type ContentConnection = {
  __typename?: 'ContentConnection';
  /** A list of edges. */
  edges: Array<Maybe<ContentEdge>>;
  /**
   * A list of all of the objects returned in the connection.
   * This is a convenience field provided for quickly exploring the API;
   * rather than querying for \"{ edges { node } }\" when no edge data is needed, this field can be used instead.
   * Note that when clients like Relay need to fetch the \"cursor\" field on the edge to enable efficient pagination,
   * this shortcut cannot be used, "and the full \"{ edges { node } } \" version should be used instead.
   */
  items: Array<Maybe<Content>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

/** An edge in a connection from an object to another object of type `Content` */
export type ContentEdge = {
  __typename?: 'ContentEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of the edge. */
  node?: Maybe<Content>;
};

/** A filter input for the type `Content`. */
export type ContentFilterInput = {
  /** All of the filters must match. */
  AND?: InputMaybe<Array<InputMaybe<ContentFilterInput>>>;
  /** None of the filters must match. */
  NOT?: InputMaybe<Array<InputMaybe<ContentFilterInput>>>;
  /** Some of the filters must match. */
  OR?: InputMaybe<Array<InputMaybe<ContentFilterInput>>>;
  /** Field must equal value. */
  contentTypeAlias?: InputMaybe<Scalars['String']>;
  /** Field must match any of the values. */
  contentTypeAlias_any?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Field must contain the value. */
  contentTypeAlias_contains?: InputMaybe<Scalars['String']>;
  /** Field must end with the value. */
  contentTypeAlias_ends_with?: InputMaybe<Scalars['String']>;
  /** Field must start with the value. */
  contentTypeAlias_starts_with?: InputMaybe<Scalars['String']>;
  /** Field must equal value. */
  createDate?: InputMaybe<Scalars['DateTime']>;
  /** Field must be greater than the value. */
  createDate_gt?: InputMaybe<Scalars['DateTime']>;
  /** Field must be greater than or equal the value. */
  createDate_gte?: InputMaybe<Scalars['DateTime']>;
  /** Field must be less than the value. */
  createDate_lt?: InputMaybe<Scalars['DateTime']>;
  /** Field must be less than or equal the value. */
  createDate_lte?: InputMaybe<Scalars['DateTime']>;
  /** Field must equal value. */
  id?: InputMaybe<Scalars['ID']>;
  /** Field must match any of the values. */
  id_any?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** Field must equal value. */
  level?: InputMaybe<Scalars['Int']>;
  /** Field must match any of the values. */
  level_any?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  /** Field must be greater than the value. */
  level_gt?: InputMaybe<Scalars['Int']>;
  /** Field must be greater than or equal the value. */
  level_gte?: InputMaybe<Scalars['Int']>;
  /** Field must be less than the value. */
  level_lt?: InputMaybe<Scalars['Int']>;
  /** Field must be less than or equal the value. */
  level_lte?: InputMaybe<Scalars['Int']>;
  /** Field must equal value. */
  name?: InputMaybe<Scalars['String']>;
  /** Field must match any of the values. */
  name_any?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Field must contain the value. */
  name_contains?: InputMaybe<Scalars['String']>;
  /** Field must end with the value. */
  name_ends_with?: InputMaybe<Scalars['String']>;
  /** Field must start with the value. */
  name_starts_with?: InputMaybe<Scalars['String']>;
  /** Field must equal value. */
  sortOrder?: InputMaybe<Scalars['Int']>;
  /** Field must match any of the values. */
  sortOrder_any?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  /** Field must be greater than the value. */
  sortOrder_gt?: InputMaybe<Scalars['Int']>;
  /** Field must be greater than or equal the value. */
  sortOrder_gte?: InputMaybe<Scalars['Int']>;
  /** Field must be less than the value. */
  sortOrder_lt?: InputMaybe<Scalars['Int']>;
  /** Field must be less than or equal the value. */
  sortOrder_lte?: InputMaybe<Scalars['Int']>;
  /** Field must equal value. */
  updateDate?: InputMaybe<Scalars['DateTime']>;
  /** Field must be greater than the value. */
  updateDate_gt?: InputMaybe<Scalars['DateTime']>;
  /** Field must be greater than or equal the value. */
  updateDate_gte?: InputMaybe<Scalars['DateTime']>;
  /** Field must be less than the value. */
  updateDate_lt?: InputMaybe<Scalars['DateTime']>;
  /** Field must be less than or equal the value. */
  updateDate_lte?: InputMaybe<Scalars['DateTime']>;
};

/** An order input for the type `Content`. */
export enum ContentOrderByInput {
  /** Order by `contentTypeAlias` in ascending order. */
  ContentTypeAliasAsc = 'contentTypeAlias_ASC',
  /** Order by `contentTypeAlias` in descending order. */
  ContentTypeAliasDesc = 'contentTypeAlias_DESC',
  /** Order by `createDate` in ascending order. */
  CreateDateAsc = 'createDate_ASC',
  /** Order by `createDate` in descending order. */
  CreateDateDesc = 'createDate_DESC',
  /** Order by `id` in ascending order. */
  IdAsc = 'id_ASC',
  /** Order by `id` in descending order. */
  IdDesc = 'id_DESC',
  /** Order by `level` in ascending order. */
  LevelAsc = 'level_ASC',
  /** Order by `level` in descending order. */
  LevelDesc = 'level_DESC',
  /** Order by `name` in ascending order. */
  NameAsc = 'name_ASC',
  /** Order by `name` in descending order. */
  NameDesc = 'name_DESC',
  /** Order by `path` in ascending order. */
  PathAsc = 'path_ASC',
  /** Order by `path` in descending order. */
  PathDesc = 'path_DESC',
  /** Order by `sortOrder` in ascending order. */
  SortOrderAsc = 'sortOrder_ASC',
  /** Order by `sortOrder` in descending order. */
  SortOrderDesc = 'sortOrder_DESC',
  /** Order by `updateDate` in ascending order. */
  UpdateDateAsc = 'updateDate_ASC',
  /** Order by `updateDate` in descending order. */
  UpdateDateDesc = 'updateDate_DESC'
}

/** Represents a range of decimals. */
export type DecimalRange = {
  __typename?: 'DecimalRange';
  /** Maximum value of the range. */
  maximum: Scalars['Decimal'];
  /** Minimum value of the range. */
  minimum: Scalars['Decimal'];
};

export type Element = {
  /** The Content Type alias. */
  contentTypeAlias: Scalars['String'];
};

export type ElementsComposition = {
  /** The Content Type alias. */
  contentTypeAlias: Scalars['String'];
  elements?: Maybe<Array<Maybe<Element>>>;
};

export type File = Media & {
  __typename?: 'File';
  /** The ancestors. */
  ancestors: MediaConnection;
  /** The children. */
  children: MediaConnection;
  /** The create date. */
  createDate: Scalars['DateTime'];
  /** The descendants. */
  descendants: MediaConnection;
  /** The unique identifier. */
  id: Scalars['ID'];
  /** The level. */
  level: Scalars['Int'];
  /** The Media Type alias. */
  mediaTypeAlias: Scalars['String'];
  /** The name. */
  name: Scalars['String'];
  /** The parent Media, can be null if media is at root. */
  parent?: Maybe<Media>;
  /** The sort order. */
  sortOrder: Scalars['Int'];
  /** in bytes */
  umbracoBytes?: Maybe<Scalars['String']>;
  umbracoExtension?: Maybe<Scalars['String']>;
  umbracoFile?: Maybe<Scalars['String']>;
  /** The update date. */
  updateDate?: Maybe<Scalars['DateTime']>;
  /** The url. */
  url?: Maybe<Scalars['String']>;
};


export type FileAncestorsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
};


export type FileChildrenArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
};


export type FileDescendantsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
};


export type FileUmbracoFileArgs = {
  backgroundColor?: InputMaybe<Scalars['String']>;
  cropAnchor?: InputMaybe<ImageCropAnchor>;
  cropMode?: InputMaybe<ImageCropMode>;
  format?: InputMaybe<ImageCropFormat>;
  height?: InputMaybe<Scalars['Int']>;
  quality?: InputMaybe<Scalars['Int']>;
  ratioMode?: InputMaybe<ImageCropRatioMode>;
  upscale?: InputMaybe<Scalars['Boolean']>;
  width?: InputMaybe<Scalars['Int']>;
};


export type FileUpdateDateArgs = {
  culture?: InputMaybe<Scalars['String']>;
};


export type FileUrlArgs = {
  backgroundColor?: InputMaybe<Scalars['String']>;
  cropAnchor?: InputMaybe<ImageCropAnchor>;
  cropMode?: InputMaybe<ImageCropMode>;
  culture?: InputMaybe<Scalars['String']>;
  format?: InputMaybe<ImageCropFormat>;
  height?: InputMaybe<Scalars['Int']>;
  quality?: InputMaybe<Scalars['Int']>;
  ratioMode?: InputMaybe<ImageCropRatioMode>;
  upscale?: InputMaybe<Scalars['Boolean']>;
  width?: InputMaybe<Scalars['Int']>;
};

/** A connection from an object to a list of objects of type `File`. */
export type FileConnection = {
  __typename?: 'FileConnection';
  /** A list of edges. */
  edges?: Maybe<Array<Maybe<FileEdge>>>;
  /** A list of all of the objects returned in the connection. This is a convenience field provided for quickly exploring the API; rather than querying for "{ edges { node } }" when no edge data is needed, this field can be used instead. Note that when clients like Relay need to fetch the "cursor" field on the edge to enable efficient pagination, this shortcut cannot be used, and the full "{ edges { node } } " version should be used instead. */
  items: Array<Maybe<File>>;
  /** Information to aid in pagination. */
  pageInfo?: Maybe<PageInfo>;
};

/** An edge in a connection from an object to another object of type `File` */
export type FileEdge = {
  __typename?: 'FileEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of the edge. */
  node?: Maybe<File>;
};

export enum FilterOperator {
  All = 'ALL',
  Any = 'ANY',
  Contains = 'CONTAINS',
  EndsWith = 'ENDS_WITH',
  Equal = 'EQUAL',
  GreaterThan = 'GREATER_THAN',
  GreaterThanEqual = 'GREATER_THAN_EQUAL',
  LessThan = 'LESS_THAN',
  LessThanEqual = 'LESS_THAN_EQUAL',
  None = 'NONE',
  Some = 'SOME',
  StartsWith = 'STARTS_WITH'
}

export type Folder = Media & {
  __typename?: 'Folder';
  /** The ancestors. */
  ancestors: MediaConnection;
  /** The children. */
  children: MediaConnection;
  /** The create date. */
  createDate: Scalars['DateTime'];
  /** The descendants. */
  descendants: MediaConnection;
  /** The unique identifier. */
  id: Scalars['ID'];
  /** The level. */
  level: Scalars['Int'];
  /** The Media Type alias. */
  mediaTypeAlias: Scalars['String'];
  /** The name. */
  name: Scalars['String'];
  /** The parent Media, can be null if media is at root. */
  parent?: Maybe<Media>;
  /** The sort order. */
  sortOrder: Scalars['Int'];
  /** The update date. */
  updateDate?: Maybe<Scalars['DateTime']>;
  /** The url. */
  url?: Maybe<Scalars['String']>;
};


export type FolderAncestorsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
};


export type FolderChildrenArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
};


export type FolderDescendantsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
};


export type FolderUpdateDateArgs = {
  culture?: InputMaybe<Scalars['String']>;
};


export type FolderUrlArgs = {
  backgroundColor?: InputMaybe<Scalars['String']>;
  cropAnchor?: InputMaybe<ImageCropAnchor>;
  cropMode?: InputMaybe<ImageCropMode>;
  culture?: InputMaybe<Scalars['String']>;
  format?: InputMaybe<ImageCropFormat>;
  height?: InputMaybe<Scalars['Int']>;
  quality?: InputMaybe<Scalars['Int']>;
  ratioMode?: InputMaybe<ImageCropRatioMode>;
  upscale?: InputMaybe<Scalars['Boolean']>;
  width?: InputMaybe<Scalars['Int']>;
};

/** A connection from an object to a list of objects of type `Folder`. */
export type FolderConnection = {
  __typename?: 'FolderConnection';
  /** A list of edges. */
  edges?: Maybe<Array<Maybe<FolderEdge>>>;
  /** A list of all of the objects returned in the connection. This is a convenience field provided for quickly exploring the API; rather than querying for "{ edges { node } }" when no edge data is needed, this field can be used instead. Note that when clients like Relay need to fetch the "cursor" field on the edge to enable efficient pagination, this shortcut cannot be used, and the full "{ edges { node } } " version should be used instead. */
  items: Array<Maybe<Folder>>;
  /** Information to aid in pagination. */
  pageInfo?: Maybe<PageInfo>;
};

/** An edge in a connection from an object to another object of type `Folder` */
export type FolderEdge = {
  __typename?: 'FolderEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of the edge. */
  node?: Maybe<Folder>;
};

export type Frontpage = Content & ElementsComposition & HeroComposition & UniqueSellingPointsComposition & {
  __typename?: 'Frontpage';
  /** The ancestors. */
  ancestors: ContentConnection;
  /** The children. */
  children: ContentConnection;
  /** The Content Type alias. */
  contentTypeAlias: Scalars['String'];
  /** The create date. */
  createDate: Scalars['DateTime'];
  /** The descendants. */
  descendants: ContentConnection;
  elements?: Maybe<Array<Maybe<Element>>>;
  footerLinks?: Maybe<Array<Maybe<Link>>>;
  footerTitle?: Maybe<Scalars['String']>;
  heroImage?: Maybe<MediaWithCrops>;
  heroSubtitle?: Maybe<Scalars['String']>;
  heroTitle?: Maybe<Scalars['String']>;
  /** The unique identifier. */
  id: Scalars['ID'];
  /** The level. */
  level: Scalars['Int'];
  /** The name. */
  name?: Maybe<Scalars['String']>;
  /** The parent Content, can be null if content is at root. */
  parent?: Maybe<Content>;
  /** The sort order. */
  sortOrder: Scalars['Int'];
  uniqueSellingPoints?: Maybe<Array<Maybe<Element>>>;
  uniqueSellingPointsTitle?: Maybe<Scalars['String']>;
  /** The update date. */
  updateDate?: Maybe<Scalars['DateTime']>;
  /** The url. */
  url?: Maybe<Scalars['String']>;
};


export type FrontpageAncestorsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  culture?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<InputMaybe<ContentOrderByInput>>>;
  where?: InputMaybe<ContentFilterInput>;
};


export type FrontpageChildrenArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  culture?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<InputMaybe<ContentOrderByInput>>>;
  where?: InputMaybe<ContentFilterInput>;
};


export type FrontpageDescendantsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  culture?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<InputMaybe<ContentOrderByInput>>>;
  where?: InputMaybe<ContentFilterInput>;
};


export type FrontpageNameArgs = {
  culture?: InputMaybe<Scalars['String']>;
};


export type FrontpageParentArgs = {
  culture?: InputMaybe<Scalars['String']>;
};


export type FrontpageUpdateDateArgs = {
  culture?: InputMaybe<Scalars['String']>;
};


export type FrontpageUrlArgs = {
  culture?: InputMaybe<Scalars['String']>;
};

/** A connection from an object to a list of objects of type `Frontpage`. */
export type FrontpageConnection = {
  __typename?: 'FrontpageConnection';
  /** A list of edges. */
  edges?: Maybe<Array<Maybe<FrontpageEdge>>>;
  /** A list of all of the objects returned in the connection. This is a convenience field provided for quickly exploring the API; rather than querying for "{ edges { node } }" when no edge data is needed, this field can be used instead. Note that when clients like Relay need to fetch the "cursor" field on the edge to enable efficient pagination, this shortcut cannot be used, and the full "{ edges { node } } " version should be used instead. */
  items: Array<Maybe<Frontpage>>;
  /** Information to aid in pagination. */
  pageInfo?: Maybe<PageInfo>;
};

/** An edge in a connection from an object to another object of type `Frontpage` */
export type FrontpageEdge = {
  __typename?: 'FrontpageEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of the edge. */
  node?: Maybe<Frontpage>;
};

/** A filter input for the type `Frontpage`. */
export type FrontpageFilterInput = {
  /** All of the filters must match. */
  AND?: InputMaybe<Array<InputMaybe<FrontpageFilterInput>>>;
  /** None of the filters must match. */
  NOT?: InputMaybe<Array<InputMaybe<FrontpageFilterInput>>>;
  /** Some of the filters must match. */
  OR?: InputMaybe<Array<InputMaybe<FrontpageFilterInput>>>;
  /** Field must equal value. */
  contentTypeAlias?: InputMaybe<Scalars['String']>;
  /** Field must match any of the values. */
  contentTypeAlias_any?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Field must contain value. */
  contentTypeAlias_contains?: InputMaybe<Scalars['String']>;
  /** Field must end with value. */
  contentTypeAlias_ends_with?: InputMaybe<Scalars['String']>;
  /** Field must start with value. */
  contentTypeAlias_starts_with?: InputMaybe<Scalars['String']>;
  /** Field must equal value. */
  createDate?: InputMaybe<Scalars['DateTime']>;
  /** Field must be greater than value. */
  createDate_gt?: InputMaybe<Scalars['DateTime']>;
  /** Field must be greater than or equal value. */
  createDate_gte?: InputMaybe<Scalars['DateTime']>;
  /** Field must be less than value. */
  createDate_lt?: InputMaybe<Scalars['DateTime']>;
  /** Field must be less than or equal value. */
  createDate_lte?: InputMaybe<Scalars['DateTime']>;
  /** Field must equal value. */
  footerTitle?: InputMaybe<Scalars['String']>;
  /** Field must match any of the values. */
  footerTitle_any?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Field must contain value. */
  footerTitle_contains?: InputMaybe<Scalars['String']>;
  /** Field must end with value. */
  footerTitle_ends_with?: InputMaybe<Scalars['String']>;
  /** Field must start with value. */
  footerTitle_starts_with?: InputMaybe<Scalars['String']>;
  /** Field must equal value. */
  heroSubtitle?: InputMaybe<Scalars['String']>;
  /** Field must match any of the values. */
  heroSubtitle_any?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Field must contain value. */
  heroSubtitle_contains?: InputMaybe<Scalars['String']>;
  /** Field must end with value. */
  heroSubtitle_ends_with?: InputMaybe<Scalars['String']>;
  /** Field must start with value. */
  heroSubtitle_starts_with?: InputMaybe<Scalars['String']>;
  /** Field must equal value. */
  heroTitle?: InputMaybe<Scalars['String']>;
  /** Field must match any of the values. */
  heroTitle_any?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Field must contain value. */
  heroTitle_contains?: InputMaybe<Scalars['String']>;
  /** Field must end with value. */
  heroTitle_ends_with?: InputMaybe<Scalars['String']>;
  /** Field must start with value. */
  heroTitle_starts_with?: InputMaybe<Scalars['String']>;
  /** Field must equal value. */
  id?: InputMaybe<Scalars['ID']>;
  /** Field must match any of the values. */
  id_any?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** Field must equal value. */
  level?: InputMaybe<Scalars['Int']>;
  /** Field must match any of the values. */
  level_any?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  /** Field must be greater than value. */
  level_gt?: InputMaybe<Scalars['Int']>;
  /** Field must be greater than or equal value. */
  level_gte?: InputMaybe<Scalars['Int']>;
  /** Field must be less than value. */
  level_lt?: InputMaybe<Scalars['Int']>;
  /** Field must be less than or equal value. */
  level_lte?: InputMaybe<Scalars['Int']>;
  /** Field must equal value. */
  name?: InputMaybe<Scalars['String']>;
  /** Field must match any of the values. */
  name_any?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Field must contain value. */
  name_contains?: InputMaybe<Scalars['String']>;
  /** Field must end with value. */
  name_ends_with?: InputMaybe<Scalars['String']>;
  /** Field must start with value. */
  name_starts_with?: InputMaybe<Scalars['String']>;
  /** Field must equal value. */
  sortOrder?: InputMaybe<Scalars['Int']>;
  /** Field must match any of the values. */
  sortOrder_any?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  /** Field must be greater than value. */
  sortOrder_gt?: InputMaybe<Scalars['Int']>;
  /** Field must be greater than or equal value. */
  sortOrder_gte?: InputMaybe<Scalars['Int']>;
  /** Field must be less than value. */
  sortOrder_lt?: InputMaybe<Scalars['Int']>;
  /** Field must be less than or equal value. */
  sortOrder_lte?: InputMaybe<Scalars['Int']>;
  /** Field must equal value. */
  uniqueSellingPointsTitle?: InputMaybe<Scalars['String']>;
  /** Field must match any of the values. */
  uniqueSellingPointsTitle_any?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Field must contain value. */
  uniqueSellingPointsTitle_contains?: InputMaybe<Scalars['String']>;
  /** Field must end with value. */
  uniqueSellingPointsTitle_ends_with?: InputMaybe<Scalars['String']>;
  /** Field must start with value. */
  uniqueSellingPointsTitle_starts_with?: InputMaybe<Scalars['String']>;
  /** Field must equal value. */
  updateDate?: InputMaybe<Scalars['DateTime']>;
  /** Field must be greater than value. */
  updateDate_gt?: InputMaybe<Scalars['DateTime']>;
  /** Field must be greater than or equal value. */
  updateDate_gte?: InputMaybe<Scalars['DateTime']>;
  /** Field must be less than value. */
  updateDate_lt?: InputMaybe<Scalars['DateTime']>;
  /** Field must be less than or equal value. */
  updateDate_lte?: InputMaybe<Scalars['DateTime']>;
  /** Field must equal value. */
  url?: InputMaybe<Scalars['String']>;
  /** Field must match any of the values. */
  url_any?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Field must contain value. */
  url_contains?: InputMaybe<Scalars['String']>;
  /** Field must end with value. */
  url_ends_with?: InputMaybe<Scalars['String']>;
  /** Field must start with value. */
  url_starts_with?: InputMaybe<Scalars['String']>;
};

/** An order by input for the type `Frontpage`. */
export enum FrontpageOrderByInput {
  /** Order by `contentTypeAlias` in ascending order. */
  ContentTypeAliasAsc = 'contentTypeAlias_ASC',
  /** Order by `contentTypeAlias` in descending order. */
  ContentTypeAliasDesc = 'contentTypeAlias_DESC',
  /** Order by `createDate` in ascending order. */
  CreateDateAsc = 'createDate_ASC',
  /** Order by `createDate` in descending order. */
  CreateDateDesc = 'createDate_DESC',
  /** Order by `footerTitle` in ascending order. */
  FooterTitleAsc = 'footerTitle_ASC',
  /** Order by `footerTitle` in descending order. */
  FooterTitleDesc = 'footerTitle_DESC',
  /** Order by `heroSubtitle` in ascending order. */
  HeroSubtitleAsc = 'heroSubtitle_ASC',
  /** Order by `heroSubtitle` in descending order. */
  HeroSubtitleDesc = 'heroSubtitle_DESC',
  /** Order by `heroTitle` in ascending order. */
  HeroTitleAsc = 'heroTitle_ASC',
  /** Order by `heroTitle` in descending order. */
  HeroTitleDesc = 'heroTitle_DESC',
  /** Order by `id` in ascending order. */
  IdAsc = 'id_ASC',
  /** Order by `id` in descending order. */
  IdDesc = 'id_DESC',
  /** Order by `level` in ascending order. */
  LevelAsc = 'level_ASC',
  /** Order by `level` in descending order. */
  LevelDesc = 'level_DESC',
  /** Order by `name` in ascending order. */
  NameAsc = 'name_ASC',
  /** Order by `name` in descending order. */
  NameDesc = 'name_DESC',
  /** Order by `path` in ascending order. */
  PathAsc = 'path_ASC',
  /** Order by `path` in descending order. */
  PathDesc = 'path_DESC',
  /** Order by `sortOrder` in ascending order. */
  SortOrderAsc = 'sortOrder_ASC',
  /** Order by `sortOrder` in descending order. */
  SortOrderDesc = 'sortOrder_DESC',
  /** Order by `uniqueSellingPointsTitle` in ascending order. */
  UniqueSellingPointsTitleAsc = 'uniqueSellingPointsTitle_ASC',
  /** Order by `uniqueSellingPointsTitle` in descending order. */
  UniqueSellingPointsTitleDesc = 'uniqueSellingPointsTitle_DESC',
  /** Order by `updateDate` in ascending order. */
  UpdateDateAsc = 'updateDate_ASC',
  /** Order by `updateDate` in descending order. */
  UpdateDateDesc = 'updateDate_DESC',
  /** Order by `url` in ascending order. */
  UrlAsc = 'url_ASC',
  /** Order by `url` in descending order. */
  UrlDesc = 'url_DESC'
}

export type HeroComposition = {
  /** The Content Type alias. */
  contentTypeAlias: Scalars['String'];
  heroImage?: Maybe<MediaWithCrops>;
  heroSubtitle?: Maybe<Scalars['String']>;
  heroTitle?: Maybe<Scalars['String']>;
};

export type Home = Content & {
  __typename?: 'Home';
  /** The ancestors. */
  ancestors: ContentConnection;
  /** The children. */
  children: ContentConnection;
  /** The Content Type alias. */
  contentTypeAlias: Scalars['String'];
  /** The create date. */
  createDate: Scalars['DateTime'];
  /** The descendants. */
  descendants: ContentConnection;
  /** The unique identifier. */
  id: Scalars['ID'];
  /** The level. */
  level: Scalars['Int'];
  logo?: Maybe<MediaWithCrops>;
  /** The name. */
  name?: Maybe<Scalars['String']>;
  pageBody?: Maybe<Scalars['HTML']>;
  pageTitle?: Maybe<Scalars['String']>;
  /** The parent Content, can be null if content is at root. */
  parent?: Maybe<Content>;
  siteName?: Maybe<Scalars['String']>;
  socialLinksTitle?: Maybe<Scalars['String']>;
  /** The sort order. */
  sortOrder: Scalars['Int'];
  /** The update date. */
  updateDate?: Maybe<Scalars['DateTime']>;
  /** The url. */
  url?: Maybe<Scalars['String']>;
};


export type HomeAncestorsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  culture?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<InputMaybe<ContentOrderByInput>>>;
  where?: InputMaybe<ContentFilterInput>;
};


export type HomeChildrenArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  culture?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<InputMaybe<ContentOrderByInput>>>;
  where?: InputMaybe<ContentFilterInput>;
};


export type HomeDescendantsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  culture?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<InputMaybe<ContentOrderByInput>>>;
  where?: InputMaybe<ContentFilterInput>;
};


export type HomeNameArgs = {
  culture?: InputMaybe<Scalars['String']>;
};


export type HomeParentArgs = {
  culture?: InputMaybe<Scalars['String']>;
};


export type HomeUpdateDateArgs = {
  culture?: InputMaybe<Scalars['String']>;
};


export type HomeUrlArgs = {
  culture?: InputMaybe<Scalars['String']>;
};

/** A connection from an object to a list of objects of type `Home`. */
export type HomeConnection = {
  __typename?: 'HomeConnection';
  /** A list of edges. */
  edges?: Maybe<Array<Maybe<HomeEdge>>>;
  /** A list of all of the objects returned in the connection. This is a convenience field provided for quickly exploring the API; rather than querying for "{ edges { node } }" when no edge data is needed, this field can be used instead. Note that when clients like Relay need to fetch the "cursor" field on the edge to enable efficient pagination, this shortcut cannot be used, and the full "{ edges { node } } " version should be used instead. */
  items: Array<Maybe<Home>>;
  /** Information to aid in pagination. */
  pageInfo?: Maybe<PageInfo>;
};

/** An edge in a connection from an object to another object of type `Home` */
export type HomeEdge = {
  __typename?: 'HomeEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of the edge. */
  node?: Maybe<Home>;
};

/** A filter input for the type `Home`. */
export type HomeFilterInput = {
  /** All of the filters must match. */
  AND?: InputMaybe<Array<InputMaybe<HomeFilterInput>>>;
  /** None of the filters must match. */
  NOT?: InputMaybe<Array<InputMaybe<HomeFilterInput>>>;
  /** Some of the filters must match. */
  OR?: InputMaybe<Array<InputMaybe<HomeFilterInput>>>;
  /** Field must equal value. */
  contentTypeAlias?: InputMaybe<Scalars['String']>;
  /** Field must match any of the values. */
  contentTypeAlias_any?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Field must contain value. */
  contentTypeAlias_contains?: InputMaybe<Scalars['String']>;
  /** Field must end with value. */
  contentTypeAlias_ends_with?: InputMaybe<Scalars['String']>;
  /** Field must start with value. */
  contentTypeAlias_starts_with?: InputMaybe<Scalars['String']>;
  /** Field must equal value. */
  createDate?: InputMaybe<Scalars['DateTime']>;
  /** Field must be greater than value. */
  createDate_gt?: InputMaybe<Scalars['DateTime']>;
  /** Field must be greater than or equal value. */
  createDate_gte?: InputMaybe<Scalars['DateTime']>;
  /** Field must be less than value. */
  createDate_lt?: InputMaybe<Scalars['DateTime']>;
  /** Field must be less than or equal value. */
  createDate_lte?: InputMaybe<Scalars['DateTime']>;
  /** Field must equal value. */
  id?: InputMaybe<Scalars['ID']>;
  /** Field must match any of the values. */
  id_any?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** Field must equal value. */
  level?: InputMaybe<Scalars['Int']>;
  /** Field must match any of the values. */
  level_any?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  /** Field must be greater than value. */
  level_gt?: InputMaybe<Scalars['Int']>;
  /** Field must be greater than or equal value. */
  level_gte?: InputMaybe<Scalars['Int']>;
  /** Field must be less than value. */
  level_lt?: InputMaybe<Scalars['Int']>;
  /** Field must be less than or equal value. */
  level_lte?: InputMaybe<Scalars['Int']>;
  /** Field must equal value. */
  name?: InputMaybe<Scalars['String']>;
  /** Field must match any of the values. */
  name_any?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Field must contain value. */
  name_contains?: InputMaybe<Scalars['String']>;
  /** Field must end with value. */
  name_ends_with?: InputMaybe<Scalars['String']>;
  /** Field must start with value. */
  name_starts_with?: InputMaybe<Scalars['String']>;
  /** Field must equal value. */
  pageTitle?: InputMaybe<Scalars['String']>;
  /** Field must match any of the values. */
  pageTitle_any?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Field must contain value. */
  pageTitle_contains?: InputMaybe<Scalars['String']>;
  /** Field must end with value. */
  pageTitle_ends_with?: InputMaybe<Scalars['String']>;
  /** Field must start with value. */
  pageTitle_starts_with?: InputMaybe<Scalars['String']>;
  /** Field must equal value. */
  siteName?: InputMaybe<Scalars['String']>;
  /** Field must match any of the values. */
  siteName_any?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Field must contain value. */
  siteName_contains?: InputMaybe<Scalars['String']>;
  /** Field must end with value. */
  siteName_ends_with?: InputMaybe<Scalars['String']>;
  /** Field must start with value. */
  siteName_starts_with?: InputMaybe<Scalars['String']>;
  /** Field must equal value. */
  socialLinksTitle?: InputMaybe<Scalars['String']>;
  /** Field must match any of the values. */
  socialLinksTitle_any?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Field must contain value. */
  socialLinksTitle_contains?: InputMaybe<Scalars['String']>;
  /** Field must end with value. */
  socialLinksTitle_ends_with?: InputMaybe<Scalars['String']>;
  /** Field must start with value. */
  socialLinksTitle_starts_with?: InputMaybe<Scalars['String']>;
  /** Field must equal value. */
  sortOrder?: InputMaybe<Scalars['Int']>;
  /** Field must match any of the values. */
  sortOrder_any?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  /** Field must be greater than value. */
  sortOrder_gt?: InputMaybe<Scalars['Int']>;
  /** Field must be greater than or equal value. */
  sortOrder_gte?: InputMaybe<Scalars['Int']>;
  /** Field must be less than value. */
  sortOrder_lt?: InputMaybe<Scalars['Int']>;
  /** Field must be less than or equal value. */
  sortOrder_lte?: InputMaybe<Scalars['Int']>;
  /** Field must equal value. */
  updateDate?: InputMaybe<Scalars['DateTime']>;
  /** Field must be greater than value. */
  updateDate_gt?: InputMaybe<Scalars['DateTime']>;
  /** Field must be greater than or equal value. */
  updateDate_gte?: InputMaybe<Scalars['DateTime']>;
  /** Field must be less than value. */
  updateDate_lt?: InputMaybe<Scalars['DateTime']>;
  /** Field must be less than or equal value. */
  updateDate_lte?: InputMaybe<Scalars['DateTime']>;
  /** Field must equal value. */
  url?: InputMaybe<Scalars['String']>;
  /** Field must match any of the values. */
  url_any?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Field must contain value. */
  url_contains?: InputMaybe<Scalars['String']>;
  /** Field must end with value. */
  url_ends_with?: InputMaybe<Scalars['String']>;
  /** Field must start with value. */
  url_starts_with?: InputMaybe<Scalars['String']>;
};

/** An order by input for the type `Home`. */
export enum HomeOrderByInput {
  /** Order by `contentTypeAlias` in ascending order. */
  ContentTypeAliasAsc = 'contentTypeAlias_ASC',
  /** Order by `contentTypeAlias` in descending order. */
  ContentTypeAliasDesc = 'contentTypeAlias_DESC',
  /** Order by `createDate` in ascending order. */
  CreateDateAsc = 'createDate_ASC',
  /** Order by `createDate` in descending order. */
  CreateDateDesc = 'createDate_DESC',
  /** Order by `id` in ascending order. */
  IdAsc = 'id_ASC',
  /** Order by `id` in descending order. */
  IdDesc = 'id_DESC',
  /** Order by `level` in ascending order. */
  LevelAsc = 'level_ASC',
  /** Order by `level` in descending order. */
  LevelDesc = 'level_DESC',
  /** Order by `name` in ascending order. */
  NameAsc = 'name_ASC',
  /** Order by `name` in descending order. */
  NameDesc = 'name_DESC',
  /** Order by `pageTitle` in ascending order. */
  PageTitleAsc = 'pageTitle_ASC',
  /** Order by `pageTitle` in descending order. */
  PageTitleDesc = 'pageTitle_DESC',
  /** Order by `path` in ascending order. */
  PathAsc = 'path_ASC',
  /** Order by `path` in descending order. */
  PathDesc = 'path_DESC',
  /** Order by `siteName` in ascending order. */
  SiteNameAsc = 'siteName_ASC',
  /** Order by `siteName` in descending order. */
  SiteNameDesc = 'siteName_DESC',
  /** Order by `socialLinksTitle` in ascending order. */
  SocialLinksTitleAsc = 'socialLinksTitle_ASC',
  /** Order by `socialLinksTitle` in descending order. */
  SocialLinksTitleDesc = 'socialLinksTitle_DESC',
  /** Order by `sortOrder` in ascending order. */
  SortOrderAsc = 'sortOrder_ASC',
  /** Order by `sortOrder` in descending order. */
  SortOrderDesc = 'sortOrder_DESC',
  /** Order by `updateDate` in ascending order. */
  UpdateDateAsc = 'updateDate_ASC',
  /** Order by `updateDate` in descending order. */
  UpdateDateDesc = 'updateDate_DESC',
  /** Order by `url` in ascending order. */
  UrlAsc = 'url_ASC',
  /** Order by `url` in descending order. */
  UrlDesc = 'url_DESC'
}

export type Image = Media & {
  __typename?: 'Image';
  /** The ancestors. */
  ancestors: MediaConnection;
  /** The children. */
  children: MediaConnection;
  /** The create date. */
  createDate: Scalars['DateTime'];
  /** The descendants. */
  descendants: MediaConnection;
  /** The unique identifier. */
  id: Scalars['ID'];
  /** The level. */
  level: Scalars['Int'];
  /** The Media Type alias. */
  mediaTypeAlias: Scalars['String'];
  /** The name. */
  name: Scalars['String'];
  /** The parent Media, can be null if media is at root. */
  parent?: Maybe<Media>;
  /** The sort order. */
  sortOrder: Scalars['Int'];
  /** in bytes */
  umbracoBytes?: Maybe<Scalars['String']>;
  umbracoExtension?: Maybe<Scalars['String']>;
  umbracoFile?: Maybe<ImageCropper>;
  /** in pixels */
  umbracoHeight?: Maybe<Scalars['String']>;
  /** in pixels */
  umbracoWidth?: Maybe<Scalars['String']>;
  /** The update date. */
  updateDate?: Maybe<Scalars['DateTime']>;
  /** The url. */
  url?: Maybe<Scalars['String']>;
};


export type ImageAncestorsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
};


export type ImageChildrenArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
};


export type ImageDescendantsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
};


export type ImageUpdateDateArgs = {
  culture?: InputMaybe<Scalars['String']>;
};


export type ImageUrlArgs = {
  backgroundColor?: InputMaybe<Scalars['String']>;
  cropAnchor?: InputMaybe<ImageCropAnchor>;
  cropMode?: InputMaybe<ImageCropMode>;
  culture?: InputMaybe<Scalars['String']>;
  format?: InputMaybe<ImageCropFormat>;
  height?: InputMaybe<Scalars['Int']>;
  quality?: InputMaybe<Scalars['Int']>;
  ratioMode?: InputMaybe<ImageCropRatioMode>;
  upscale?: InputMaybe<Scalars['Boolean']>;
  width?: InputMaybe<Scalars['Int']>;
};

/** A connection from an object to a list of objects of type `Image`. */
export type ImageConnection = {
  __typename?: 'ImageConnection';
  /** A list of edges. */
  edges?: Maybe<Array<Maybe<ImageEdge>>>;
  /** A list of all of the objects returned in the connection. This is a convenience field provided for quickly exploring the API; rather than querying for "{ edges { node } }" when no edge data is needed, this field can be used instead. Note that when clients like Relay need to fetch the "cursor" field on the edge to enable efficient pagination, this shortcut cannot be used, and the full "{ edges { node } } " version should be used instead. */
  items: Array<Maybe<Image>>;
  /** Information to aid in pagination. */
  pageInfo?: Maybe<PageInfo>;
};

export enum ImageCropAnchor {
  /** Anchors the position of the image to the bottom of it's bounding container. */
  Bottom = 'BOTTOM',
  /** Anchors the position of the image to the bottom left side of it's bounding container. */
  BottomLeft = 'BOTTOM_LEFT',
  /** Anchors the position of the image to the bottom right side of it's bounding container. */
  BottomRight = 'BOTTOM_RIGHT',
  /** Anchors the position of the image to the center of it's bounding container. */
  Center = 'CENTER',
  /** Anchors the position of the image to the left of it's bounding container. */
  Left = 'LEFT',
  /** Anchors the position of the image to the right of it's bounding container. */
  Right = 'RIGHT',
  /** Anchors the position of the image to the top of it's bounding container. */
  Top = 'TOP',
  /** Anchors the position of the image to the top left side of it's bounding container. */
  TopLeft = 'TOP_LEFT',
  /** Anchors the position of the image to the top right side of it's bounding container. */
  TopRight = 'TOP_RIGHT'
}

export enum ImageCropFormat {
  Gif = 'GIF',
  Jpg = 'JPG',
  Png = 'PNG',
  Webp = 'WEBP'
}

export enum ImageCropMode {
  /** When upscaling an image the image pixels themselves are not resized, rather the image is padded to fit the given dimensions. */
  BoxPad = 'BOX_PAD',
  /** Resizes the image to the given dimensions. If the set dimensions do not match the aspect ratio of the original image then the output is cropped to match the new aspect ratio. */
  Crop = 'CROP',
  /** Resizes the image to the given dimensions. If the set dimensions do not match the aspect ratio of the original image then the output is resized to the maximum possible value in each direction while maintaining the original aspect ratio. */
  Max = 'MAX',
  /** Resizes the image until the shortest side reaches the set given dimension. This will maintain the aspect ratio of the original image. Upscaling is disabled in this mode and the original image will be returned if attempted. */
  Min = 'MIN',
  /** Passing a single dimension will automatically preserve the aspect ratio of the original image. If the requested aspect ratio is different then the image will be padded to fit. */
  Pad = 'PAD',
  /** Resizes the image to the given dimensions. If the set dimensions do not match the aspect ratio of the original image then the output is stretched to match the new aspect ratio. */
  Stretch = 'STRETCH'
}

export enum ImageCropRatioMode {
  /** Calculate the image ratio based on the height. */
  Height = 'HEIGHT',
  /** Calculate the image ratio based on the width. */
  Width = 'WIDTH'
}

export type ImageCropper = {
  __typename?: 'ImageCropper';
  /** The image url with crop parameters. */
  cropUrl?: Maybe<Scalars['String']>;
  /** The predefined crops. */
  crops: Array<Maybe<ImageCropperCrop>>;
  /** The focal point position. */
  focalPoint: ImageCropperFocalPoint;
  /** The focal point url template. */
  focalPointUrlTemplate: Scalars['String'];
  /** The image url. */
  url: Scalars['String'];
};


export type ImageCropperCropUrlArgs = {
  alias?: InputMaybe<Scalars['String']>;
  backgroundColor?: InputMaybe<Scalars['String']>;
  cropAnchor?: InputMaybe<ImageCropAnchor>;
  cropMode?: InputMaybe<ImageCropMode>;
  format?: InputMaybe<ImageCropFormat>;
  height?: InputMaybe<Scalars['Int']>;
  preferFocalPoint?: InputMaybe<Scalars['Boolean']>;
  quality?: InputMaybe<Scalars['Int']>;
  ratioMode?: InputMaybe<ImageCropRatioMode>;
  upscale?: InputMaybe<Scalars['Boolean']>;
  width?: InputMaybe<Scalars['Int']>;
};

export type ImageCropperCrop = {
  __typename?: 'ImageCropperCrop';
  /** The crop alias. */
  alias: Scalars['String'];
  /** The crop coordinates. */
  coordinates?: Maybe<ImageCropperCropCoordinates>;
  /** The crop height. */
  height: Scalars['Int'];
  /** The crop width. */
  width: Scalars['Int'];
};

export type ImageCropperCropCoordinates = {
  __typename?: 'ImageCropperCropCoordinates';
  x1: Scalars['Decimal'];
  x2: Scalars['Decimal'];
  y1: Scalars['Decimal'];
  y2: Scalars['Decimal'];
};

export type ImageCropperFocalPoint = {
  __typename?: 'ImageCropperFocalPoint';
  /** The left position. */
  left: Scalars['Decimal'];
  /** The top position. */
  top: Scalars['Decimal'];
};

/** An edge in a connection from an object to another object of type `Image` */
export type ImageEdge = {
  __typename?: 'ImageEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of the edge. */
  node?: Maybe<Image>;
};

export type Insight = Content & {
  __typename?: 'Insight';
  /** The ancestors. */
  ancestors: ContentConnection;
  /** The children. */
  children: ContentConnection;
  /** The Content Type alias. */
  contentTypeAlias: Scalars['String'];
  /** The create date. */
  createDate: Scalars['DateTime'];
  /** The descendants. */
  descendants: ContentConnection;
  description?: Maybe<Scalars['HTML']>;
  /** The unique identifier. */
  id: Scalars['ID'];
  /** The level. */
  level: Scalars['Int'];
  /** The name. */
  name?: Maybe<Scalars['String']>;
  /** The parent Content, can be null if content is at root. */
  parent?: Maybe<Content>;
  /** The sort order. */
  sortOrder: Scalars['Int'];
  title?: Maybe<Scalars['String']>;
  /** The update date. */
  updateDate?: Maybe<Scalars['DateTime']>;
  /** The url. */
  url?: Maybe<Scalars['String']>;
};


export type InsightAncestorsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  culture?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<InputMaybe<ContentOrderByInput>>>;
  where?: InputMaybe<ContentFilterInput>;
};


export type InsightChildrenArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  culture?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<InputMaybe<ContentOrderByInput>>>;
  where?: InputMaybe<ContentFilterInput>;
};


export type InsightDescendantsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  culture?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<InputMaybe<ContentOrderByInput>>>;
  where?: InputMaybe<ContentFilterInput>;
};


export type InsightNameArgs = {
  culture?: InputMaybe<Scalars['String']>;
};


export type InsightParentArgs = {
  culture?: InputMaybe<Scalars['String']>;
};


export type InsightUpdateDateArgs = {
  culture?: InputMaybe<Scalars['String']>;
};


export type InsightUrlArgs = {
  culture?: InputMaybe<Scalars['String']>;
};

/** A connection from an object to a list of objects of type `Insight`. */
export type InsightConnection = {
  __typename?: 'InsightConnection';
  /** A list of edges. */
  edges?: Maybe<Array<Maybe<InsightEdge>>>;
  /** A list of all of the objects returned in the connection. This is a convenience field provided for quickly exploring the API; rather than querying for "{ edges { node } }" when no edge data is needed, this field can be used instead. Note that when clients like Relay need to fetch the "cursor" field on the edge to enable efficient pagination, this shortcut cannot be used, and the full "{ edges { node } } " version should be used instead. */
  items: Array<Maybe<Insight>>;
  /** Information to aid in pagination. */
  pageInfo?: Maybe<PageInfo>;
};

/** An edge in a connection from an object to another object of type `Insight` */
export type InsightEdge = {
  __typename?: 'InsightEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of the edge. */
  node?: Maybe<Insight>;
};

/** A filter input for the type `Insight`. */
export type InsightFilterInput = {
  /** All of the filters must match. */
  AND?: InputMaybe<Array<InputMaybe<InsightFilterInput>>>;
  /** None of the filters must match. */
  NOT?: InputMaybe<Array<InputMaybe<InsightFilterInput>>>;
  /** Some of the filters must match. */
  OR?: InputMaybe<Array<InputMaybe<InsightFilterInput>>>;
  /** Field must equal value. */
  contentTypeAlias?: InputMaybe<Scalars['String']>;
  /** Field must match any of the values. */
  contentTypeAlias_any?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Field must contain value. */
  contentTypeAlias_contains?: InputMaybe<Scalars['String']>;
  /** Field must end with value. */
  contentTypeAlias_ends_with?: InputMaybe<Scalars['String']>;
  /** Field must start with value. */
  contentTypeAlias_starts_with?: InputMaybe<Scalars['String']>;
  /** Field must equal value. */
  createDate?: InputMaybe<Scalars['DateTime']>;
  /** Field must be greater than value. */
  createDate_gt?: InputMaybe<Scalars['DateTime']>;
  /** Field must be greater than or equal value. */
  createDate_gte?: InputMaybe<Scalars['DateTime']>;
  /** Field must be less than value. */
  createDate_lt?: InputMaybe<Scalars['DateTime']>;
  /** Field must be less than or equal value. */
  createDate_lte?: InputMaybe<Scalars['DateTime']>;
  /** Field must equal value. */
  id?: InputMaybe<Scalars['ID']>;
  /** Field must match any of the values. */
  id_any?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** Field must equal value. */
  level?: InputMaybe<Scalars['Int']>;
  /** Field must match any of the values. */
  level_any?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  /** Field must be greater than value. */
  level_gt?: InputMaybe<Scalars['Int']>;
  /** Field must be greater than or equal value. */
  level_gte?: InputMaybe<Scalars['Int']>;
  /** Field must be less than value. */
  level_lt?: InputMaybe<Scalars['Int']>;
  /** Field must be less than or equal value. */
  level_lte?: InputMaybe<Scalars['Int']>;
  /** Field must equal value. */
  name?: InputMaybe<Scalars['String']>;
  /** Field must match any of the values. */
  name_any?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Field must contain value. */
  name_contains?: InputMaybe<Scalars['String']>;
  /** Field must end with value. */
  name_ends_with?: InputMaybe<Scalars['String']>;
  /** Field must start with value. */
  name_starts_with?: InputMaybe<Scalars['String']>;
  /** Field must equal value. */
  sortOrder?: InputMaybe<Scalars['Int']>;
  /** Field must match any of the values. */
  sortOrder_any?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  /** Field must be greater than value. */
  sortOrder_gt?: InputMaybe<Scalars['Int']>;
  /** Field must be greater than or equal value. */
  sortOrder_gte?: InputMaybe<Scalars['Int']>;
  /** Field must be less than value. */
  sortOrder_lt?: InputMaybe<Scalars['Int']>;
  /** Field must be less than or equal value. */
  sortOrder_lte?: InputMaybe<Scalars['Int']>;
  /** Field must equal value. */
  title?: InputMaybe<Scalars['String']>;
  /** Field must match any of the values. */
  title_any?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Field must contain value. */
  title_contains?: InputMaybe<Scalars['String']>;
  /** Field must end with value. */
  title_ends_with?: InputMaybe<Scalars['String']>;
  /** Field must start with value. */
  title_starts_with?: InputMaybe<Scalars['String']>;
  /** Field must equal value. */
  updateDate?: InputMaybe<Scalars['DateTime']>;
  /** Field must be greater than value. */
  updateDate_gt?: InputMaybe<Scalars['DateTime']>;
  /** Field must be greater than or equal value. */
  updateDate_gte?: InputMaybe<Scalars['DateTime']>;
  /** Field must be less than value. */
  updateDate_lt?: InputMaybe<Scalars['DateTime']>;
  /** Field must be less than or equal value. */
  updateDate_lte?: InputMaybe<Scalars['DateTime']>;
  /** Field must equal value. */
  url?: InputMaybe<Scalars['String']>;
  /** Field must match any of the values. */
  url_any?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Field must contain value. */
  url_contains?: InputMaybe<Scalars['String']>;
  /** Field must end with value. */
  url_ends_with?: InputMaybe<Scalars['String']>;
  /** Field must start with value. */
  url_starts_with?: InputMaybe<Scalars['String']>;
};

/** An order by input for the type `Insight`. */
export enum InsightOrderByInput {
  /** Order by `contentTypeAlias` in ascending order. */
  ContentTypeAliasAsc = 'contentTypeAlias_ASC',
  /** Order by `contentTypeAlias` in descending order. */
  ContentTypeAliasDesc = 'contentTypeAlias_DESC',
  /** Order by `createDate` in ascending order. */
  CreateDateAsc = 'createDate_ASC',
  /** Order by `createDate` in descending order. */
  CreateDateDesc = 'createDate_DESC',
  /** Order by `id` in ascending order. */
  IdAsc = 'id_ASC',
  /** Order by `id` in descending order. */
  IdDesc = 'id_DESC',
  /** Order by `level` in ascending order. */
  LevelAsc = 'level_ASC',
  /** Order by `level` in descending order. */
  LevelDesc = 'level_DESC',
  /** Order by `name` in ascending order. */
  NameAsc = 'name_ASC',
  /** Order by `name` in descending order. */
  NameDesc = 'name_DESC',
  /** Order by `path` in ascending order. */
  PathAsc = 'path_ASC',
  /** Order by `path` in descending order. */
  PathDesc = 'path_DESC',
  /** Order by `sortOrder` in ascending order. */
  SortOrderAsc = 'sortOrder_ASC',
  /** Order by `sortOrder` in descending order. */
  SortOrderDesc = 'sortOrder_DESC',
  /** Order by `title` in ascending order. */
  TitleAsc = 'title_ASC',
  /** Order by `title` in descending order. */
  TitleDesc = 'title_DESC',
  /** Order by `updateDate` in ascending order. */
  UpdateDateAsc = 'updateDate_ASC',
  /** Order by `updateDate` in descending order. */
  UpdateDateDesc = 'updateDate_DESC',
  /** Order by `url` in ascending order. */
  UrlAsc = 'url_ASC',
  /** Order by `url` in descending order. */
  UrlDesc = 'url_DESC'
}

export type Insights = Content & {
  __typename?: 'Insights';
  /** The ancestors. */
  ancestors: ContentConnection;
  /** The children. */
  children: ContentConnection;
  /** The Content Type alias. */
  contentTypeAlias: Scalars['String'];
  /** The create date. */
  createDate: Scalars['DateTime'];
  /** The descendants. */
  descendants: ContentConnection;
  description?: Maybe<Scalars['String']>;
  /** The unique identifier. */
  id: Scalars['ID'];
  /** The level. */
  level: Scalars['Int'];
  /** The name. */
  name?: Maybe<Scalars['String']>;
  /** The parent Content, can be null if content is at root. */
  parent?: Maybe<Content>;
  /** The sort order. */
  sortOrder: Scalars['Int'];
  title?: Maybe<Scalars['String']>;
  /** The update date. */
  updateDate?: Maybe<Scalars['DateTime']>;
  /** The url. */
  url?: Maybe<Scalars['String']>;
};


export type InsightsAncestorsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  culture?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<InputMaybe<ContentOrderByInput>>>;
  where?: InputMaybe<ContentFilterInput>;
};


export type InsightsChildrenArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  culture?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<InputMaybe<ContentOrderByInput>>>;
  where?: InputMaybe<ContentFilterInput>;
};


export type InsightsDescendantsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  culture?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<InputMaybe<ContentOrderByInput>>>;
  where?: InputMaybe<ContentFilterInput>;
};


export type InsightsNameArgs = {
  culture?: InputMaybe<Scalars['String']>;
};


export type InsightsParentArgs = {
  culture?: InputMaybe<Scalars['String']>;
};


export type InsightsUpdateDateArgs = {
  culture?: InputMaybe<Scalars['String']>;
};


export type InsightsUrlArgs = {
  culture?: InputMaybe<Scalars['String']>;
};

/** A connection from an object to a list of objects of type `Insights`. */
export type InsightsConnection = {
  __typename?: 'InsightsConnection';
  /** A list of edges. */
  edges?: Maybe<Array<Maybe<InsightsEdge>>>;
  /** A list of all of the objects returned in the connection. This is a convenience field provided for quickly exploring the API; rather than querying for "{ edges { node } }" when no edge data is needed, this field can be used instead. Note that when clients like Relay need to fetch the "cursor" field on the edge to enable efficient pagination, this shortcut cannot be used, and the full "{ edges { node } } " version should be used instead. */
  items: Array<Maybe<Insights>>;
  /** Information to aid in pagination. */
  pageInfo?: Maybe<PageInfo>;
};

/** An edge in a connection from an object to another object of type `Insights` */
export type InsightsEdge = {
  __typename?: 'InsightsEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of the edge. */
  node?: Maybe<Insights>;
};

/** A filter input for the type `Insights`. */
export type InsightsFilterInput = {
  /** All of the filters must match. */
  AND?: InputMaybe<Array<InputMaybe<InsightsFilterInput>>>;
  /** None of the filters must match. */
  NOT?: InputMaybe<Array<InputMaybe<InsightsFilterInput>>>;
  /** Some of the filters must match. */
  OR?: InputMaybe<Array<InputMaybe<InsightsFilterInput>>>;
  /** Field must equal value. */
  contentTypeAlias?: InputMaybe<Scalars['String']>;
  /** Field must match any of the values. */
  contentTypeAlias_any?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Field must contain value. */
  contentTypeAlias_contains?: InputMaybe<Scalars['String']>;
  /** Field must end with value. */
  contentTypeAlias_ends_with?: InputMaybe<Scalars['String']>;
  /** Field must start with value. */
  contentTypeAlias_starts_with?: InputMaybe<Scalars['String']>;
  /** Field must equal value. */
  createDate?: InputMaybe<Scalars['DateTime']>;
  /** Field must be greater than value. */
  createDate_gt?: InputMaybe<Scalars['DateTime']>;
  /** Field must be greater than or equal value. */
  createDate_gte?: InputMaybe<Scalars['DateTime']>;
  /** Field must be less than value. */
  createDate_lt?: InputMaybe<Scalars['DateTime']>;
  /** Field must be less than or equal value. */
  createDate_lte?: InputMaybe<Scalars['DateTime']>;
  /** Field must equal value. */
  description?: InputMaybe<Scalars['String']>;
  /** Field must match any of the values. */
  description_any?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Field must contain value. */
  description_contains?: InputMaybe<Scalars['String']>;
  /** Field must end with value. */
  description_ends_with?: InputMaybe<Scalars['String']>;
  /** Field must start with value. */
  description_starts_with?: InputMaybe<Scalars['String']>;
  /** Field must equal value. */
  id?: InputMaybe<Scalars['ID']>;
  /** Field must match any of the values. */
  id_any?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** Field must equal value. */
  level?: InputMaybe<Scalars['Int']>;
  /** Field must match any of the values. */
  level_any?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  /** Field must be greater than value. */
  level_gt?: InputMaybe<Scalars['Int']>;
  /** Field must be greater than or equal value. */
  level_gte?: InputMaybe<Scalars['Int']>;
  /** Field must be less than value. */
  level_lt?: InputMaybe<Scalars['Int']>;
  /** Field must be less than or equal value. */
  level_lte?: InputMaybe<Scalars['Int']>;
  /** Field must equal value. */
  name?: InputMaybe<Scalars['String']>;
  /** Field must match any of the values. */
  name_any?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Field must contain value. */
  name_contains?: InputMaybe<Scalars['String']>;
  /** Field must end with value. */
  name_ends_with?: InputMaybe<Scalars['String']>;
  /** Field must start with value. */
  name_starts_with?: InputMaybe<Scalars['String']>;
  /** Field must equal value. */
  sortOrder?: InputMaybe<Scalars['Int']>;
  /** Field must match any of the values. */
  sortOrder_any?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  /** Field must be greater than value. */
  sortOrder_gt?: InputMaybe<Scalars['Int']>;
  /** Field must be greater than or equal value. */
  sortOrder_gte?: InputMaybe<Scalars['Int']>;
  /** Field must be less than value. */
  sortOrder_lt?: InputMaybe<Scalars['Int']>;
  /** Field must be less than or equal value. */
  sortOrder_lte?: InputMaybe<Scalars['Int']>;
  /** Field must equal value. */
  title?: InputMaybe<Scalars['String']>;
  /** Field must match any of the values. */
  title_any?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Field must contain value. */
  title_contains?: InputMaybe<Scalars['String']>;
  /** Field must end with value. */
  title_ends_with?: InputMaybe<Scalars['String']>;
  /** Field must start with value. */
  title_starts_with?: InputMaybe<Scalars['String']>;
  /** Field must equal value. */
  updateDate?: InputMaybe<Scalars['DateTime']>;
  /** Field must be greater than value. */
  updateDate_gt?: InputMaybe<Scalars['DateTime']>;
  /** Field must be greater than or equal value. */
  updateDate_gte?: InputMaybe<Scalars['DateTime']>;
  /** Field must be less than value. */
  updateDate_lt?: InputMaybe<Scalars['DateTime']>;
  /** Field must be less than or equal value. */
  updateDate_lte?: InputMaybe<Scalars['DateTime']>;
  /** Field must equal value. */
  url?: InputMaybe<Scalars['String']>;
  /** Field must match any of the values. */
  url_any?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Field must contain value. */
  url_contains?: InputMaybe<Scalars['String']>;
  /** Field must end with value. */
  url_ends_with?: InputMaybe<Scalars['String']>;
  /** Field must start with value. */
  url_starts_with?: InputMaybe<Scalars['String']>;
};

/** An order by input for the type `Insights`. */
export enum InsightsOrderByInput {
  /** Order by `contentTypeAlias` in ascending order. */
  ContentTypeAliasAsc = 'contentTypeAlias_ASC',
  /** Order by `contentTypeAlias` in descending order. */
  ContentTypeAliasDesc = 'contentTypeAlias_DESC',
  /** Order by `createDate` in ascending order. */
  CreateDateAsc = 'createDate_ASC',
  /** Order by `createDate` in descending order. */
  CreateDateDesc = 'createDate_DESC',
  /** Order by `description` in ascending order. */
  DescriptionAsc = 'description_ASC',
  /** Order by `description` in descending order. */
  DescriptionDesc = 'description_DESC',
  /** Order by `id` in ascending order. */
  IdAsc = 'id_ASC',
  /** Order by `id` in descending order. */
  IdDesc = 'id_DESC',
  /** Order by `level` in ascending order. */
  LevelAsc = 'level_ASC',
  /** Order by `level` in descending order. */
  LevelDesc = 'level_DESC',
  /** Order by `name` in ascending order. */
  NameAsc = 'name_ASC',
  /** Order by `name` in descending order. */
  NameDesc = 'name_DESC',
  /** Order by `path` in ascending order. */
  PathAsc = 'path_ASC',
  /** Order by `path` in descending order. */
  PathDesc = 'path_DESC',
  /** Order by `sortOrder` in ascending order. */
  SortOrderAsc = 'sortOrder_ASC',
  /** Order by `sortOrder` in descending order. */
  SortOrderDesc = 'sortOrder_DESC',
  /** Order by `title` in ascending order. */
  TitleAsc = 'title_ASC',
  /** Order by `title` in descending order. */
  TitleDesc = 'title_DESC',
  /** Order by `updateDate` in ascending order. */
  UpdateDateAsc = 'updateDate_ASC',
  /** Order by `updateDate` in descending order. */
  UpdateDateDesc = 'updateDate_DESC',
  /** Order by `url` in ascending order. */
  UrlAsc = 'url_ASC',
  /** Order by `url` in descending order. */
  UrlDesc = 'url_DESC'
}

export enum JoinType {
  ArrayManyToMany = 'ARRAY_MANY_TO_MANY',
  Json = 'JSON',
  OneToMany = 'ONE_TO_MANY',
  OneToManyArray = 'ONE_TO_MANY_ARRAY'
}

export enum JsonType {
  JsonElement = 'JSON_ELEMENT',
  JsonElementArray = 'JSON_ELEMENT_ARRAY',
  StringArray = 'STRING_ARRAY'
}

export type Link = {
  __typename?: 'Link';
  /** The name of the Link. */
  name: Scalars['String'];
  /** The link target. */
  target?: Maybe<Scalars['String']>;
  /** The link type. */
  type: LinkType;
  /** The link udi if type is CONTENT or MEDIA. */
  udi?: Maybe<Scalars['String']>;
  /** The url. */
  url: Scalars['String'];
};

export enum LinkType {
  /** The link is a Content link. */
  Content = 'CONTENT',
  /** The link is an external link. */
  External = 'EXTERNAL',
  /** The link is a media link. */
  Media = 'MEDIA'
}

export type Media = {
  /** The ancestors. */
  ancestors: MediaConnection;
  /** The children. */
  children: MediaConnection;
  /** The create date. */
  createDate: Scalars['DateTime'];
  /** The descendants. */
  descendants: MediaConnection;
  /** The unique identifier. */
  id: Scalars['ID'];
  /** The level. */
  level: Scalars['Int'];
  /** The Media Type alias */
  mediaTypeAlias: Scalars['String'];
  /** The name. */
  name: Scalars['String'];
  /** The parent Content, can be null if content is at root. */
  parent?: Maybe<Media>;
  /** The sort order. */
  sortOrder: Scalars['Int'];
  /** The update date. */
  updateDate?: Maybe<Scalars['DateTime']>;
  /** The url. */
  url?: Maybe<Scalars['String']>;
};


export type MediaAncestorsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
};


export type MediaChildrenArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
};


export type MediaDescendantsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
};


export type MediaUrlArgs = {
  backgroundColor?: InputMaybe<Scalars['String']>;
  cropAnchor?: InputMaybe<ImageCropAnchor>;
  cropMode?: InputMaybe<ImageCropMode>;
  format?: InputMaybe<ImageCropFormat>;
  height?: InputMaybe<Scalars['Int']>;
  quality?: InputMaybe<Scalars['Int']>;
  ratioMode?: InputMaybe<ImageCropRatioMode>;
  upscale?: InputMaybe<Scalars['Boolean']>;
  width?: InputMaybe<Scalars['Int']>;
};

/** A connection from an object to a list of objects of type `Media`. */
export type MediaConnection = {
  __typename?: 'MediaConnection';
  /** A list of edges. */
  edges: Array<Maybe<MediaEdge>>;
  /**
   * A list of all of the objects returned in the connection.
   * This is a convenience field provided for quickly exploring the API;
   * rather than querying for \"{ edges { node } }\" when no edge data is needed, this field can be used instead.
   * Note that when clients like Relay need to fetch the \"cursor\" field on the edge to enable efficient pagination,
   * this shortcut cannot be used, "and the full \"{ edges { node } } \" version should be used instead.
   */
  items: Array<Maybe<Media>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

/** An edge in a connection from an object to another object of type `Media` */
export type MediaEdge = {
  __typename?: 'MediaEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of the edge. */
  node?: Maybe<Media>;
};

/** A filter input for the type `Media`. */
export type MediaFilterInput = {
  /** All of the filters must match. */
  AND?: InputMaybe<Array<InputMaybe<MediaFilterInput>>>;
  /** None of the filters must match. */
  NOT?: InputMaybe<Array<InputMaybe<MediaFilterInput>>>;
  /** Some of the filters must match. */
  OR?: InputMaybe<Array<InputMaybe<MediaFilterInput>>>;
  /** Field must equal value. */
  createDate?: InputMaybe<Scalars['DateTime']>;
  /** Field must be greater than the value. */
  createDate_gt?: InputMaybe<Scalars['DateTime']>;
  /** Field must be greater than or equal the value. */
  createDate_gte?: InputMaybe<Scalars['DateTime']>;
  /** Field must be less than the value. */
  createDate_lt?: InputMaybe<Scalars['DateTime']>;
  /** Field must be less than or equal the value. */
  createDate_lte?: InputMaybe<Scalars['DateTime']>;
  /** Field must equal value. */
  id?: InputMaybe<Scalars['ID']>;
  /** Field must match any of the values. */
  id_any?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** Field must equal value. */
  level?: InputMaybe<Scalars['Int']>;
  /** Field must match any of the values. */
  level_any?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  /** Field must be greater than the value. */
  level_gt?: InputMaybe<Scalars['Int']>;
  /** Field must be greater than or equal the value. */
  level_gte?: InputMaybe<Scalars['Int']>;
  /** Field must be less than the value. */
  level_lt?: InputMaybe<Scalars['Int']>;
  /** Field must be less than or equal the value. */
  level_lte?: InputMaybe<Scalars['Int']>;
  /** Field must equal value. */
  mediaTypeAlias?: InputMaybe<Scalars['String']>;
  /** Field must match any of the values. */
  mediaTypeAlias_any?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Field must contain the value. */
  mediaTypeAlias_contains?: InputMaybe<Scalars['String']>;
  /** Field must end with the value. */
  mediaTypeAlias_ends_with?: InputMaybe<Scalars['String']>;
  /** Field must start with the value. */
  mediaTypeAlias_starts_with?: InputMaybe<Scalars['String']>;
  /** Field must equal value. */
  name?: InputMaybe<Scalars['String']>;
  /** Field must match any of the values. */
  name_any?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Field must contain the value. */
  name_contains?: InputMaybe<Scalars['String']>;
  /** Field must end with the value. */
  name_ends_with?: InputMaybe<Scalars['String']>;
  /** Field must start with the value. */
  name_starts_with?: InputMaybe<Scalars['String']>;
  /** Field must equal value. */
  sortOrder?: InputMaybe<Scalars['Int']>;
  /** Field must match any of the values. */
  sortOrder_any?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  /** Field must be greater than the value. */
  sortOrder_gt?: InputMaybe<Scalars['Int']>;
  /** Field must be greater than or equal the value. */
  sortOrder_gte?: InputMaybe<Scalars['Int']>;
  /** Field must be less than the value. */
  sortOrder_lt?: InputMaybe<Scalars['Int']>;
  /** Field must be less than or equal the value. */
  sortOrder_lte?: InputMaybe<Scalars['Int']>;
  /** Field must equal value. */
  updateDate?: InputMaybe<Scalars['DateTime']>;
  /** Field must be greater than the value. */
  updateDate_gt?: InputMaybe<Scalars['DateTime']>;
  /** Field must be greater than or equal the value. */
  updateDate_gte?: InputMaybe<Scalars['DateTime']>;
  /** Field must be less than the value. */
  updateDate_lt?: InputMaybe<Scalars['DateTime']>;
  /** Field must be less than or equal the value. */
  updateDate_lte?: InputMaybe<Scalars['DateTime']>;
};

export type MediaWithCrops = {
  __typename?: 'MediaWithCrops';
  /** The image url with crop parameters. */
  cropUrl?: Maybe<Scalars['String']>;
  /** The predefined crops. */
  crops: Array<Maybe<ImageCropperCrop>>;
  /** The focal point position. */
  focalPoint: ImageCropperFocalPoint;
  /** The focal point url template. */
  focalPointUrlTemplate: Scalars['String'];
  /** The Media */
  media: Media;
  /** The image url. */
  url: Scalars['String'];
};


export type MediaWithCropsCropUrlArgs = {
  alias?: InputMaybe<Scalars['String']>;
  backgroundColor?: InputMaybe<Scalars['String']>;
  cropAnchor?: InputMaybe<ImageCropAnchor>;
  cropMode?: InputMaybe<ImageCropMode>;
  format?: InputMaybe<ImageCropFormat>;
  height?: InputMaybe<Scalars['Int']>;
  preferFocalPoint?: InputMaybe<Scalars['Boolean']>;
  quality?: InputMaybe<Scalars['Int']>;
  ratioMode?: InputMaybe<ImageCropRatioMode>;
  upscale?: InputMaybe<Scalars['Boolean']>;
  width?: InputMaybe<Scalars['Int']>;
};

export type News = Content & {
  __typename?: 'News';
  /** The ancestors. */
  ancestors: ContentConnection;
  /** The children. */
  children: ContentConnection;
  /** The Content Type alias. */
  contentTypeAlias: Scalars['String'];
  /** The create date. */
  createDate: Scalars['DateTime'];
  /** The descendants. */
  descendants: ContentConnection;
  /** The unique identifier. */
  id: Scalars['ID'];
  /** The level. */
  level: Scalars['Int'];
  /** The name. */
  name?: Maybe<Scalars['String']>;
  pageBody?: Maybe<Scalars['HTML']>;
  pageTitle?: Maybe<Scalars['String']>;
  /** The parent Content, can be null if content is at root. */
  parent?: Maybe<Content>;
  /** The sort order. */
  sortOrder: Scalars['Int'];
  /** The update date. */
  updateDate?: Maybe<Scalars['DateTime']>;
  /** The url. */
  url?: Maybe<Scalars['String']>;
};


export type NewsAncestorsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  culture?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<InputMaybe<ContentOrderByInput>>>;
  where?: InputMaybe<ContentFilterInput>;
};


export type NewsChildrenArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  culture?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<InputMaybe<ContentOrderByInput>>>;
  where?: InputMaybe<ContentFilterInput>;
};


export type NewsDescendantsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  culture?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<InputMaybe<ContentOrderByInput>>>;
  where?: InputMaybe<ContentFilterInput>;
};


export type NewsNameArgs = {
  culture?: InputMaybe<Scalars['String']>;
};


export type NewsParentArgs = {
  culture?: InputMaybe<Scalars['String']>;
};


export type NewsUpdateDateArgs = {
  culture?: InputMaybe<Scalars['String']>;
};


export type NewsUrlArgs = {
  culture?: InputMaybe<Scalars['String']>;
};

export type NewsArticle = Content & {
  __typename?: 'NewsArticle';
  /** The ancestors. */
  ancestors: ContentConnection;
  /** The children. */
  children: ContentConnection;
  /** The Content Type alias. */
  contentTypeAlias: Scalars['String'];
  /** The create date. */
  createDate: Scalars['DateTime'];
  /** The descendants. */
  descendants: ContentConnection;
  /** The unique identifier. */
  id: Scalars['ID'];
  /** The level. */
  level: Scalars['Int'];
  /** The name. */
  name?: Maybe<Scalars['String']>;
  pageBody?: Maybe<Scalars['HTML']>;
  pageTitle?: Maybe<Scalars['String']>;
  /** The parent Content, can be null if content is at root. */
  parent?: Maybe<Content>;
  /** The sort order. */
  sortOrder: Scalars['Int'];
  /** The update date. */
  updateDate?: Maybe<Scalars['DateTime']>;
  /** The url. */
  url?: Maybe<Scalars['String']>;
};


export type NewsArticleAncestorsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  culture?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<InputMaybe<ContentOrderByInput>>>;
  where?: InputMaybe<ContentFilterInput>;
};


export type NewsArticleChildrenArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  culture?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<InputMaybe<ContentOrderByInput>>>;
  where?: InputMaybe<ContentFilterInput>;
};


export type NewsArticleDescendantsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  culture?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<InputMaybe<ContentOrderByInput>>>;
  where?: InputMaybe<ContentFilterInput>;
};


export type NewsArticleNameArgs = {
  culture?: InputMaybe<Scalars['String']>;
};


export type NewsArticleParentArgs = {
  culture?: InputMaybe<Scalars['String']>;
};


export type NewsArticleUpdateDateArgs = {
  culture?: InputMaybe<Scalars['String']>;
};


export type NewsArticleUrlArgs = {
  culture?: InputMaybe<Scalars['String']>;
};

/** A connection from an object to a list of objects of type `NewsArticle`. */
export type NewsArticleConnection = {
  __typename?: 'NewsArticleConnection';
  /** A list of edges. */
  edges?: Maybe<Array<Maybe<NewsArticleEdge>>>;
  /** A list of all of the objects returned in the connection. This is a convenience field provided for quickly exploring the API; rather than querying for "{ edges { node } }" when no edge data is needed, this field can be used instead. Note that when clients like Relay need to fetch the "cursor" field on the edge to enable efficient pagination, this shortcut cannot be used, and the full "{ edges { node } } " version should be used instead. */
  items: Array<Maybe<NewsArticle>>;
  /** Information to aid in pagination. */
  pageInfo?: Maybe<PageInfo>;
};

/** An edge in a connection from an object to another object of type `NewsArticle` */
export type NewsArticleEdge = {
  __typename?: 'NewsArticleEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of the edge. */
  node?: Maybe<NewsArticle>;
};

/** A filter input for the type `NewsArticle`. */
export type NewsArticleFilterInput = {
  /** All of the filters must match. */
  AND?: InputMaybe<Array<InputMaybe<NewsArticleFilterInput>>>;
  /** None of the filters must match. */
  NOT?: InputMaybe<Array<InputMaybe<NewsArticleFilterInput>>>;
  /** Some of the filters must match. */
  OR?: InputMaybe<Array<InputMaybe<NewsArticleFilterInput>>>;
  /** Field must equal value. */
  contentTypeAlias?: InputMaybe<Scalars['String']>;
  /** Field must match any of the values. */
  contentTypeAlias_any?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Field must contain value. */
  contentTypeAlias_contains?: InputMaybe<Scalars['String']>;
  /** Field must end with value. */
  contentTypeAlias_ends_with?: InputMaybe<Scalars['String']>;
  /** Field must start with value. */
  contentTypeAlias_starts_with?: InputMaybe<Scalars['String']>;
  /** Field must equal value. */
  createDate?: InputMaybe<Scalars['DateTime']>;
  /** Field must be greater than value. */
  createDate_gt?: InputMaybe<Scalars['DateTime']>;
  /** Field must be greater than or equal value. */
  createDate_gte?: InputMaybe<Scalars['DateTime']>;
  /** Field must be less than value. */
  createDate_lt?: InputMaybe<Scalars['DateTime']>;
  /** Field must be less than or equal value. */
  createDate_lte?: InputMaybe<Scalars['DateTime']>;
  /** Field must equal value. */
  id?: InputMaybe<Scalars['ID']>;
  /** Field must match any of the values. */
  id_any?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** Field must equal value. */
  level?: InputMaybe<Scalars['Int']>;
  /** Field must match any of the values. */
  level_any?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  /** Field must be greater than value. */
  level_gt?: InputMaybe<Scalars['Int']>;
  /** Field must be greater than or equal value. */
  level_gte?: InputMaybe<Scalars['Int']>;
  /** Field must be less than value. */
  level_lt?: InputMaybe<Scalars['Int']>;
  /** Field must be less than or equal value. */
  level_lte?: InputMaybe<Scalars['Int']>;
  /** Field must equal value. */
  name?: InputMaybe<Scalars['String']>;
  /** Field must match any of the values. */
  name_any?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Field must contain value. */
  name_contains?: InputMaybe<Scalars['String']>;
  /** Field must end with value. */
  name_ends_with?: InputMaybe<Scalars['String']>;
  /** Field must start with value. */
  name_starts_with?: InputMaybe<Scalars['String']>;
  /** Field must equal value. */
  pageTitle?: InputMaybe<Scalars['String']>;
  /** Field must match any of the values. */
  pageTitle_any?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Field must contain value. */
  pageTitle_contains?: InputMaybe<Scalars['String']>;
  /** Field must end with value. */
  pageTitle_ends_with?: InputMaybe<Scalars['String']>;
  /** Field must start with value. */
  pageTitle_starts_with?: InputMaybe<Scalars['String']>;
  /** Field must equal value. */
  sortOrder?: InputMaybe<Scalars['Int']>;
  /** Field must match any of the values. */
  sortOrder_any?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  /** Field must be greater than value. */
  sortOrder_gt?: InputMaybe<Scalars['Int']>;
  /** Field must be greater than or equal value. */
  sortOrder_gte?: InputMaybe<Scalars['Int']>;
  /** Field must be less than value. */
  sortOrder_lt?: InputMaybe<Scalars['Int']>;
  /** Field must be less than or equal value. */
  sortOrder_lte?: InputMaybe<Scalars['Int']>;
  /** Field must equal value. */
  updateDate?: InputMaybe<Scalars['DateTime']>;
  /** Field must be greater than value. */
  updateDate_gt?: InputMaybe<Scalars['DateTime']>;
  /** Field must be greater than or equal value. */
  updateDate_gte?: InputMaybe<Scalars['DateTime']>;
  /** Field must be less than value. */
  updateDate_lt?: InputMaybe<Scalars['DateTime']>;
  /** Field must be less than or equal value. */
  updateDate_lte?: InputMaybe<Scalars['DateTime']>;
  /** Field must equal value. */
  url?: InputMaybe<Scalars['String']>;
  /** Field must match any of the values. */
  url_any?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Field must contain value. */
  url_contains?: InputMaybe<Scalars['String']>;
  /** Field must end with value. */
  url_ends_with?: InputMaybe<Scalars['String']>;
  /** Field must start with value. */
  url_starts_with?: InputMaybe<Scalars['String']>;
};

/** An order by input for the type `NewsArticle`. */
export enum NewsArticleOrderByInput {
  /** Order by `contentTypeAlias` in ascending order. */
  ContentTypeAliasAsc = 'contentTypeAlias_ASC',
  /** Order by `contentTypeAlias` in descending order. */
  ContentTypeAliasDesc = 'contentTypeAlias_DESC',
  /** Order by `createDate` in ascending order. */
  CreateDateAsc = 'createDate_ASC',
  /** Order by `createDate` in descending order. */
  CreateDateDesc = 'createDate_DESC',
  /** Order by `id` in ascending order. */
  IdAsc = 'id_ASC',
  /** Order by `id` in descending order. */
  IdDesc = 'id_DESC',
  /** Order by `level` in ascending order. */
  LevelAsc = 'level_ASC',
  /** Order by `level` in descending order. */
  LevelDesc = 'level_DESC',
  /** Order by `name` in ascending order. */
  NameAsc = 'name_ASC',
  /** Order by `name` in descending order. */
  NameDesc = 'name_DESC',
  /** Order by `pageTitle` in ascending order. */
  PageTitleAsc = 'pageTitle_ASC',
  /** Order by `pageTitle` in descending order. */
  PageTitleDesc = 'pageTitle_DESC',
  /** Order by `path` in ascending order. */
  PathAsc = 'path_ASC',
  /** Order by `path` in descending order. */
  PathDesc = 'path_DESC',
  /** Order by `sortOrder` in ascending order. */
  SortOrderAsc = 'sortOrder_ASC',
  /** Order by `sortOrder` in descending order. */
  SortOrderDesc = 'sortOrder_DESC',
  /** Order by `updateDate` in ascending order. */
  UpdateDateAsc = 'updateDate_ASC',
  /** Order by `updateDate` in descending order. */
  UpdateDateDesc = 'updateDate_DESC',
  /** Order by `url` in ascending order. */
  UrlAsc = 'url_ASC',
  /** Order by `url` in descending order. */
  UrlDesc = 'url_DESC'
}

/** A connection from an object to a list of objects of type `News`. */
export type NewsConnection = {
  __typename?: 'NewsConnection';
  /** A list of edges. */
  edges?: Maybe<Array<Maybe<NewsEdge>>>;
  /** A list of all of the objects returned in the connection. This is a convenience field provided for quickly exploring the API; rather than querying for "{ edges { node } }" when no edge data is needed, this field can be used instead. Note that when clients like Relay need to fetch the "cursor" field on the edge to enable efficient pagination, this shortcut cannot be used, and the full "{ edges { node } } " version should be used instead. */
  items: Array<Maybe<News>>;
  /** Information to aid in pagination. */
  pageInfo?: Maybe<PageInfo>;
};

/** An edge in a connection from an object to another object of type `News` */
export type NewsEdge = {
  __typename?: 'NewsEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of the edge. */
  node?: Maybe<News>;
};

/** A filter input for the type `News`. */
export type NewsFilterInput = {
  /** All of the filters must match. */
  AND?: InputMaybe<Array<InputMaybe<NewsFilterInput>>>;
  /** None of the filters must match. */
  NOT?: InputMaybe<Array<InputMaybe<NewsFilterInput>>>;
  /** Some of the filters must match. */
  OR?: InputMaybe<Array<InputMaybe<NewsFilterInput>>>;
  /** Field must equal value. */
  contentTypeAlias?: InputMaybe<Scalars['String']>;
  /** Field must match any of the values. */
  contentTypeAlias_any?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Field must contain value. */
  contentTypeAlias_contains?: InputMaybe<Scalars['String']>;
  /** Field must end with value. */
  contentTypeAlias_ends_with?: InputMaybe<Scalars['String']>;
  /** Field must start with value. */
  contentTypeAlias_starts_with?: InputMaybe<Scalars['String']>;
  /** Field must equal value. */
  createDate?: InputMaybe<Scalars['DateTime']>;
  /** Field must be greater than value. */
  createDate_gt?: InputMaybe<Scalars['DateTime']>;
  /** Field must be greater than or equal value. */
  createDate_gte?: InputMaybe<Scalars['DateTime']>;
  /** Field must be less than value. */
  createDate_lt?: InputMaybe<Scalars['DateTime']>;
  /** Field must be less than or equal value. */
  createDate_lte?: InputMaybe<Scalars['DateTime']>;
  /** Field must equal value. */
  id?: InputMaybe<Scalars['ID']>;
  /** Field must match any of the values. */
  id_any?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** Field must equal value. */
  level?: InputMaybe<Scalars['Int']>;
  /** Field must match any of the values. */
  level_any?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  /** Field must be greater than value. */
  level_gt?: InputMaybe<Scalars['Int']>;
  /** Field must be greater than or equal value. */
  level_gte?: InputMaybe<Scalars['Int']>;
  /** Field must be less than value. */
  level_lt?: InputMaybe<Scalars['Int']>;
  /** Field must be less than or equal value. */
  level_lte?: InputMaybe<Scalars['Int']>;
  /** Field must equal value. */
  name?: InputMaybe<Scalars['String']>;
  /** Field must match any of the values. */
  name_any?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Field must contain value. */
  name_contains?: InputMaybe<Scalars['String']>;
  /** Field must end with value. */
  name_ends_with?: InputMaybe<Scalars['String']>;
  /** Field must start with value. */
  name_starts_with?: InputMaybe<Scalars['String']>;
  /** Field must equal value. */
  pageTitle?: InputMaybe<Scalars['String']>;
  /** Field must match any of the values. */
  pageTitle_any?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Field must contain value. */
  pageTitle_contains?: InputMaybe<Scalars['String']>;
  /** Field must end with value. */
  pageTitle_ends_with?: InputMaybe<Scalars['String']>;
  /** Field must start with value. */
  pageTitle_starts_with?: InputMaybe<Scalars['String']>;
  /** Field must equal value. */
  sortOrder?: InputMaybe<Scalars['Int']>;
  /** Field must match any of the values. */
  sortOrder_any?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  /** Field must be greater than value. */
  sortOrder_gt?: InputMaybe<Scalars['Int']>;
  /** Field must be greater than or equal value. */
  sortOrder_gte?: InputMaybe<Scalars['Int']>;
  /** Field must be less than value. */
  sortOrder_lt?: InputMaybe<Scalars['Int']>;
  /** Field must be less than or equal value. */
  sortOrder_lte?: InputMaybe<Scalars['Int']>;
  /** Field must equal value. */
  updateDate?: InputMaybe<Scalars['DateTime']>;
  /** Field must be greater than value. */
  updateDate_gt?: InputMaybe<Scalars['DateTime']>;
  /** Field must be greater than or equal value. */
  updateDate_gte?: InputMaybe<Scalars['DateTime']>;
  /** Field must be less than value. */
  updateDate_lt?: InputMaybe<Scalars['DateTime']>;
  /** Field must be less than or equal value. */
  updateDate_lte?: InputMaybe<Scalars['DateTime']>;
  /** Field must equal value. */
  url?: InputMaybe<Scalars['String']>;
  /** Field must match any of the values. */
  url_any?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Field must contain value. */
  url_contains?: InputMaybe<Scalars['String']>;
  /** Field must end with value. */
  url_ends_with?: InputMaybe<Scalars['String']>;
  /** Field must start with value. */
  url_starts_with?: InputMaybe<Scalars['String']>;
};

/** An order by input for the type `News`. */
export enum NewsOrderByInput {
  /** Order by `contentTypeAlias` in ascending order. */
  ContentTypeAliasAsc = 'contentTypeAlias_ASC',
  /** Order by `contentTypeAlias` in descending order. */
  ContentTypeAliasDesc = 'contentTypeAlias_DESC',
  /** Order by `createDate` in ascending order. */
  CreateDateAsc = 'createDate_ASC',
  /** Order by `createDate` in descending order. */
  CreateDateDesc = 'createDate_DESC',
  /** Order by `id` in ascending order. */
  IdAsc = 'id_ASC',
  /** Order by `id` in descending order. */
  IdDesc = 'id_DESC',
  /** Order by `level` in ascending order. */
  LevelAsc = 'level_ASC',
  /** Order by `level` in descending order. */
  LevelDesc = 'level_DESC',
  /** Order by `name` in ascending order. */
  NameAsc = 'name_ASC',
  /** Order by `name` in descending order. */
  NameDesc = 'name_DESC',
  /** Order by `pageTitle` in ascending order. */
  PageTitleAsc = 'pageTitle_ASC',
  /** Order by `pageTitle` in descending order. */
  PageTitleDesc = 'pageTitle_DESC',
  /** Order by `path` in ascending order. */
  PathAsc = 'path_ASC',
  /** Order by `path` in descending order. */
  PathDesc = 'path_DESC',
  /** Order by `sortOrder` in ascending order. */
  SortOrderAsc = 'sortOrder_ASC',
  /** Order by `sortOrder` in descending order. */
  SortOrderDesc = 'sortOrder_DESC',
  /** Order by `updateDate` in ascending order. */
  UpdateDateAsc = 'updateDate_ASC',
  /** Order by `updateDate` in descending order. */
  UpdateDateDesc = 'updateDate_DESC',
  /** Order by `url` in ascending order. */
  UrlAsc = 'url_ASC',
  /** Order by `url` in descending order. */
  UrlDesc = 'url_DESC'
}

export type OurUmbracoGMaps = {
  __typename?: 'OurUmbracoGMaps';
  /** The address. */
  address?: Maybe<OurUmbracoGMapsAddress>;
  /** The map configuration. */
  mapconfig?: Maybe<OurUmbracoGMapsConfig>;
};

export type OurUmbracoGMapsAddress = {
  __typename?: 'OurUmbracoGMapsAddress';
  /** The name of the city. */
  city?: Maybe<Scalars['String']>;
  /** The coordinates. */
  coordinates?: Maybe<OurUmbracoGMapsCoordinate>;
  /** The name of the country. */
  country?: Maybe<Scalars['String']>;
  /** The full address. */
  full_address?: Maybe<Scalars['String']>;
  /** The postal code. */
  postalcode?: Maybe<Scalars['String']>;
  /** The name of the state. */
  state?: Maybe<Scalars['String']>;
  /** The name of the street. */
  street?: Maybe<Scalars['String']>;
  /** The street number. */
  streetNumber?: Maybe<Scalars['String']>;
};

export type OurUmbracoGMapsConfig = {
  __typename?: 'OurUmbracoGMapsConfig';
  /** The api key */
  apikey?: Maybe<Scalars['String']>;
  /** The center coordinates. */
  centerCoordinates?: Maybe<OurUmbracoGMapsCoordinate>;
  /** The map style. */
  mapstyle?: Maybe<Scalars['String']>;
  /** The map type. */
  maptype?: Maybe<OurUmbracoGMapsMapType>;
  /** The map style. */
  zoom?: Maybe<Scalars['Int']>;
};

export type OurUmbracoGMapsCoordinate = {
  __typename?: 'OurUmbracoGMapsCoordinate';
  /** The coordinates. */
  coordinates?: Maybe<Scalars['String']>;
  /** True if the coordinates are empty. */
  isEmpty?: Maybe<Scalars['Boolean']>;
  /** The latitude. */
  lat?: Maybe<Scalars['Decimal']>;
  /** The longitude. */
  lng?: Maybe<Scalars['Decimal']>;
};

/** The map type. */
export enum OurUmbracoGMapsMapType {
  Hybrid = 'HYBRID',
  Roadmap = 'ROADMAP',
  Satellite = 'SATELLITE',
  StyledMap = 'STYLED_MAP',
  Terrain = 'TERRAIN'
}

export type PageDetails = Element & {
  __typename?: 'PageDetails';
  /** The Content Type alias. */
  contentTypeAlias: Scalars['String'];
  pageBody?: Maybe<Scalars['HTML']>;
  pageTitle?: Maybe<Scalars['String']>;
};

/** Information about pagination in a connection. */
export type PageInfo = {
  __typename?: 'PageInfo';
  /** When paginating forwards, the cursor to continue. */
  endCursor?: Maybe<Scalars['String']>;
  /** When paginating forwards, are there more items? */
  hasNextPage: Scalars['Boolean'];
  /** When paginating backwards, are there more items? */
  hasPreviousPage: Scalars['Boolean'];
  /** When paginating backwards, the cursor to continue. */
  startCursor?: Maybe<Scalars['String']>;
};

export type PickedColor = {
  __typename?: 'PickedColor';
  /** The color. */
  color: Scalars['String'];
  /** The label. */
  label: Scalars['String'];
};

export type Query = {
  __typename?: 'Query';
  /** Get all Content of type `Ben`. */
  allBen: BenConnection;
  /** Get all Content of type `Blog`. */
  allBlog: BlogConnection;
  /** Get all Content of type `BlogPost`. */
  allBlogPost: BlogPostConnection;
  /** Get all Content. */
  allContent: ContentConnection;
  /** Get all Content of type `Frontpage`. */
  allFrontpage: FrontpageConnection;
  /** Get all Content of type `Home`. */
  allHome: HomeConnection;
  /** Get all Content of type `Insight`. */
  allInsight: InsightConnection;
  /** Get all Content of type `Insights`. */
  allInsights: InsightsConnection;
  /** Get all Content of type `News`. */
  allNews: NewsConnection;
  /** Get all Content of type `NewsArticle`. */
  allNewsArticle: NewsArticleConnection;
  /** Get all Content of type `TextAndImage2`. */
  allTextAndImage2: TextAndImage2Connection;
  /** Get all Content of type `Textpage`. */
  allTextpage: TextpageConnection;
  /** Get `Ben` by its unique identifier or url. Either id or url must be specified but not both. */
  ben?: Maybe<Ben>;
  /** Get `Blog` by its unique identifier or url. Either id or url must be specified but not both. */
  blog?: Maybe<Blog>;
  /** Get `BlogPost` by its unique identifier or url. Either id or url must be specified but not both. */
  blogPost?: Maybe<BlogPost>;
  /** Get Content by its unique identifier or url. Either id or url must be specified but not both. */
  content?: Maybe<Content>;
  /** Get `Frontpage` by its unique identifier or url. Either id or url must be specified but not both. */
  frontpage?: Maybe<Frontpage>;
  /** Get `Home` by its unique identifier or url. Either id or url must be specified but not both. */
  home?: Maybe<Home>;
  /** Get `Insight` by its unique identifier or url. Either id or url must be specified but not both. */
  insight?: Maybe<Insight>;
  /** Get `Insights` by its unique identifier or url. Either id or url must be specified but not both. */
  insights?: Maybe<Insights>;
  /** Get `News` by its unique identifier or url. Either id or url must be specified but not both. */
  news?: Maybe<News>;
  /** Get `NewsArticle` by its unique identifier or url. Either id or url must be specified but not both. */
  newsArticle?: Maybe<NewsArticle>;
  /** Get `TextAndImage2` by its unique identifier or url. Either id or url must be specified but not both. */
  textAndImage2?: Maybe<TextAndImage2>;
  /** Get `Textpage` by its unique identifier or url. Either id or url must be specified but not both. */
  textpage?: Maybe<Textpage>;
};


export type QueryAllBenArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  culture?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<InputMaybe<BenOrderByInput>>>;
  preview?: InputMaybe<Scalars['Boolean']>;
  where?: InputMaybe<BenFilterInput>;
};


export type QueryAllBlogArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  culture?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<InputMaybe<BlogOrderByInput>>>;
  preview?: InputMaybe<Scalars['Boolean']>;
  where?: InputMaybe<BlogFilterInput>;
};


export type QueryAllBlogPostArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  culture?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<InputMaybe<BlogPostOrderByInput>>>;
  preview?: InputMaybe<Scalars['Boolean']>;
  where?: InputMaybe<BlogPostFilterInput>;
};


export type QueryAllContentArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  culture?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<InputMaybe<ContentOrderByInput>>>;
  preview?: InputMaybe<Scalars['Boolean']>;
  where?: InputMaybe<ContentFilterInput>;
};


export type QueryAllFrontpageArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  culture?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<InputMaybe<FrontpageOrderByInput>>>;
  preview?: InputMaybe<Scalars['Boolean']>;
  where?: InputMaybe<FrontpageFilterInput>;
};


export type QueryAllHomeArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  culture?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<InputMaybe<HomeOrderByInput>>>;
  preview?: InputMaybe<Scalars['Boolean']>;
  where?: InputMaybe<HomeFilterInput>;
};


export type QueryAllInsightArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  culture?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<InputMaybe<InsightOrderByInput>>>;
  preview?: InputMaybe<Scalars['Boolean']>;
  where?: InputMaybe<InsightFilterInput>;
};


export type QueryAllInsightsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  culture?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<InputMaybe<InsightsOrderByInput>>>;
  preview?: InputMaybe<Scalars['Boolean']>;
  where?: InputMaybe<InsightsFilterInput>;
};


export type QueryAllNewsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  culture?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<InputMaybe<NewsOrderByInput>>>;
  preview?: InputMaybe<Scalars['Boolean']>;
  where?: InputMaybe<NewsFilterInput>;
};


export type QueryAllNewsArticleArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  culture?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<InputMaybe<NewsArticleOrderByInput>>>;
  preview?: InputMaybe<Scalars['Boolean']>;
  where?: InputMaybe<NewsArticleFilterInput>;
};


export type QueryAllTextAndImage2Args = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  culture?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<InputMaybe<TextAndImage2OrderByInput>>>;
  preview?: InputMaybe<Scalars['Boolean']>;
  where?: InputMaybe<TextAndImage2FilterInput>;
};


export type QueryAllTextpageArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  culture?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<InputMaybe<TextpageOrderByInput>>>;
  preview?: InputMaybe<Scalars['Boolean']>;
  where?: InputMaybe<TextpageFilterInput>;
};


export type QueryBenArgs = {
  culture?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['ID']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  url?: InputMaybe<Scalars['String']>;
};


export type QueryBlogArgs = {
  culture?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['ID']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  url?: InputMaybe<Scalars['String']>;
};


export type QueryBlogPostArgs = {
  culture?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['ID']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  url?: InputMaybe<Scalars['String']>;
};


export type QueryContentArgs = {
  culture?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['ID']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  url?: InputMaybe<Scalars['String']>;
};


export type QueryFrontpageArgs = {
  culture?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['ID']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  url?: InputMaybe<Scalars['String']>;
};


export type QueryHomeArgs = {
  culture?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['ID']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  url?: InputMaybe<Scalars['String']>;
};


export type QueryInsightArgs = {
  culture?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['ID']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  url?: InputMaybe<Scalars['String']>;
};


export type QueryInsightsArgs = {
  culture?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['ID']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  url?: InputMaybe<Scalars['String']>;
};


export type QueryNewsArgs = {
  culture?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['ID']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  url?: InputMaybe<Scalars['String']>;
};


export type QueryNewsArticleArgs = {
  culture?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['ID']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  url?: InputMaybe<Scalars['String']>;
};


export type QueryTextAndImage2Args = {
  culture?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['ID']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  url?: InputMaybe<Scalars['String']>;
};


export type QueryTextpageArgs = {
  culture?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['ID']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  url?: InputMaybe<Scalars['String']>;
};

export type SiteSettings = Element & {
  __typename?: 'SiteSettings';
  /** The Content Type alias. */
  contentTypeAlias: Scalars['String'];
  logo?: Maybe<MediaWithCrops>;
  siteName?: Maybe<Scalars['String']>;
  socialLinksTitle?: Maybe<Scalars['String']>;
};

export enum SortDirection {
  Ascending = 'ASCENDING',
  Descending = 'DESCENDING'
}

export type TextAndImage = Element & {
  __typename?: 'TextAndImage';
  /** The Content Type alias. */
  contentTypeAlias: Scalars['String'];
  image?: Maybe<MediaWithCrops>;
  showLargeImage?: Maybe<Scalars['Boolean']>;
  text?: Maybe<Scalars['HTML']>;
  title?: Maybe<Scalars['String']>;
};

export type TextAndImage2 = Content & {
  __typename?: 'TextAndImage2';
  /** The ancestors. */
  ancestors: ContentConnection;
  /** The children. */
  children: ContentConnection;
  /** The Content Type alias. */
  contentTypeAlias: Scalars['String'];
  /** The create date. */
  createDate: Scalars['DateTime'];
  /** The descendants. */
  descendants: ContentConnection;
  /** The unique identifier. */
  id: Scalars['ID'];
  image?: Maybe<MediaWithCrops>;
  /** The level. */
  level: Scalars['Int'];
  /** The name. */
  name?: Maybe<Scalars['String']>;
  /** The parent Content, can be null if content is at root. */
  parent?: Maybe<Content>;
  /** The sort order. */
  sortOrder: Scalars['Int'];
  text?: Maybe<Scalars['HTML']>;
  title?: Maybe<Scalars['String']>;
  /** The update date. */
  updateDate?: Maybe<Scalars['DateTime']>;
  /** The url. */
  url?: Maybe<Scalars['String']>;
};


export type TextAndImage2AncestorsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  culture?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<InputMaybe<ContentOrderByInput>>>;
  where?: InputMaybe<ContentFilterInput>;
};


export type TextAndImage2ChildrenArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  culture?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<InputMaybe<ContentOrderByInput>>>;
  where?: InputMaybe<ContentFilterInput>;
};


export type TextAndImage2DescendantsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  culture?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<InputMaybe<ContentOrderByInput>>>;
  where?: InputMaybe<ContentFilterInput>;
};


export type TextAndImage2NameArgs = {
  culture?: InputMaybe<Scalars['String']>;
};


export type TextAndImage2ParentArgs = {
  culture?: InputMaybe<Scalars['String']>;
};


export type TextAndImage2UpdateDateArgs = {
  culture?: InputMaybe<Scalars['String']>;
};


export type TextAndImage2UrlArgs = {
  culture?: InputMaybe<Scalars['String']>;
};

/** A connection from an object to a list of objects of type `TextAndImage2`. */
export type TextAndImage2Connection = {
  __typename?: 'TextAndImage2Connection';
  /** A list of edges. */
  edges?: Maybe<Array<Maybe<TextAndImage2Edge>>>;
  /** A list of all of the objects returned in the connection. This is a convenience field provided for quickly exploring the API; rather than querying for "{ edges { node } }" when no edge data is needed, this field can be used instead. Note that when clients like Relay need to fetch the "cursor" field on the edge to enable efficient pagination, this shortcut cannot be used, and the full "{ edges { node } } " version should be used instead. */
  items: Array<Maybe<TextAndImage2>>;
  /** Information to aid in pagination. */
  pageInfo?: Maybe<PageInfo>;
};

/** An edge in a connection from an object to another object of type `TextAndImage2` */
export type TextAndImage2Edge = {
  __typename?: 'TextAndImage2Edge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of the edge. */
  node?: Maybe<TextAndImage2>;
};

/** A filter input for the type `TextAndImage2`. */
export type TextAndImage2FilterInput = {
  /** All of the filters must match. */
  AND?: InputMaybe<Array<InputMaybe<TextAndImage2FilterInput>>>;
  /** None of the filters must match. */
  NOT?: InputMaybe<Array<InputMaybe<TextAndImage2FilterInput>>>;
  /** Some of the filters must match. */
  OR?: InputMaybe<Array<InputMaybe<TextAndImage2FilterInput>>>;
  /** Field must equal value. */
  contentTypeAlias?: InputMaybe<Scalars['String']>;
  /** Field must match any of the values. */
  contentTypeAlias_any?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Field must contain value. */
  contentTypeAlias_contains?: InputMaybe<Scalars['String']>;
  /** Field must end with value. */
  contentTypeAlias_ends_with?: InputMaybe<Scalars['String']>;
  /** Field must start with value. */
  contentTypeAlias_starts_with?: InputMaybe<Scalars['String']>;
  /** Field must equal value. */
  createDate?: InputMaybe<Scalars['DateTime']>;
  /** Field must be greater than value. */
  createDate_gt?: InputMaybe<Scalars['DateTime']>;
  /** Field must be greater than or equal value. */
  createDate_gte?: InputMaybe<Scalars['DateTime']>;
  /** Field must be less than value. */
  createDate_lt?: InputMaybe<Scalars['DateTime']>;
  /** Field must be less than or equal value. */
  createDate_lte?: InputMaybe<Scalars['DateTime']>;
  /** Field must equal value. */
  id?: InputMaybe<Scalars['ID']>;
  /** Field must match any of the values. */
  id_any?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** Field must equal value. */
  level?: InputMaybe<Scalars['Int']>;
  /** Field must match any of the values. */
  level_any?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  /** Field must be greater than value. */
  level_gt?: InputMaybe<Scalars['Int']>;
  /** Field must be greater than or equal value. */
  level_gte?: InputMaybe<Scalars['Int']>;
  /** Field must be less than value. */
  level_lt?: InputMaybe<Scalars['Int']>;
  /** Field must be less than or equal value. */
  level_lte?: InputMaybe<Scalars['Int']>;
  /** Field must equal value. */
  name?: InputMaybe<Scalars['String']>;
  /** Field must match any of the values. */
  name_any?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Field must contain value. */
  name_contains?: InputMaybe<Scalars['String']>;
  /** Field must end with value. */
  name_ends_with?: InputMaybe<Scalars['String']>;
  /** Field must start with value. */
  name_starts_with?: InputMaybe<Scalars['String']>;
  /** Field must equal value. */
  sortOrder?: InputMaybe<Scalars['Int']>;
  /** Field must match any of the values. */
  sortOrder_any?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  /** Field must be greater than value. */
  sortOrder_gt?: InputMaybe<Scalars['Int']>;
  /** Field must be greater than or equal value. */
  sortOrder_gte?: InputMaybe<Scalars['Int']>;
  /** Field must be less than value. */
  sortOrder_lt?: InputMaybe<Scalars['Int']>;
  /** Field must be less than or equal value. */
  sortOrder_lte?: InputMaybe<Scalars['Int']>;
  /** Field must equal value. */
  title?: InputMaybe<Scalars['String']>;
  /** Field must match any of the values. */
  title_any?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Field must contain value. */
  title_contains?: InputMaybe<Scalars['String']>;
  /** Field must end with value. */
  title_ends_with?: InputMaybe<Scalars['String']>;
  /** Field must start with value. */
  title_starts_with?: InputMaybe<Scalars['String']>;
  /** Field must equal value. */
  updateDate?: InputMaybe<Scalars['DateTime']>;
  /** Field must be greater than value. */
  updateDate_gt?: InputMaybe<Scalars['DateTime']>;
  /** Field must be greater than or equal value. */
  updateDate_gte?: InputMaybe<Scalars['DateTime']>;
  /** Field must be less than value. */
  updateDate_lt?: InputMaybe<Scalars['DateTime']>;
  /** Field must be less than or equal value. */
  updateDate_lte?: InputMaybe<Scalars['DateTime']>;
  /** Field must equal value. */
  url?: InputMaybe<Scalars['String']>;
  /** Field must match any of the values. */
  url_any?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Field must contain value. */
  url_contains?: InputMaybe<Scalars['String']>;
  /** Field must end with value. */
  url_ends_with?: InputMaybe<Scalars['String']>;
  /** Field must start with value. */
  url_starts_with?: InputMaybe<Scalars['String']>;
};

/** An order by input for the type `TextAndImage2`. */
export enum TextAndImage2OrderByInput {
  /** Order by `contentTypeAlias` in ascending order. */
  ContentTypeAliasAsc = 'contentTypeAlias_ASC',
  /** Order by `contentTypeAlias` in descending order. */
  ContentTypeAliasDesc = 'contentTypeAlias_DESC',
  /** Order by `createDate` in ascending order. */
  CreateDateAsc = 'createDate_ASC',
  /** Order by `createDate` in descending order. */
  CreateDateDesc = 'createDate_DESC',
  /** Order by `id` in ascending order. */
  IdAsc = 'id_ASC',
  /** Order by `id` in descending order. */
  IdDesc = 'id_DESC',
  /** Order by `level` in ascending order. */
  LevelAsc = 'level_ASC',
  /** Order by `level` in descending order. */
  LevelDesc = 'level_DESC',
  /** Order by `name` in ascending order. */
  NameAsc = 'name_ASC',
  /** Order by `name` in descending order. */
  NameDesc = 'name_DESC',
  /** Order by `path` in ascending order. */
  PathAsc = 'path_ASC',
  /** Order by `path` in descending order. */
  PathDesc = 'path_DESC',
  /** Order by `sortOrder` in ascending order. */
  SortOrderAsc = 'sortOrder_ASC',
  /** Order by `sortOrder` in descending order. */
  SortOrderDesc = 'sortOrder_DESC',
  /** Order by `title` in ascending order. */
  TitleAsc = 'title_ASC',
  /** Order by `title` in descending order. */
  TitleDesc = 'title_DESC',
  /** Order by `updateDate` in ascending order. */
  UpdateDateAsc = 'updateDate_ASC',
  /** Order by `updateDate` in descending order. */
  UpdateDateDesc = 'updateDate_DESC',
  /** Order by `url` in ascending order. */
  UrlAsc = 'url_ASC',
  /** Order by `url` in descending order. */
  UrlDesc = 'url_DESC'
}

export type Textpage = Content & ElementsComposition & HeroComposition & {
  __typename?: 'Textpage';
  /** The ancestors. */
  ancestors: ContentConnection;
  /** The children. */
  children: ContentConnection;
  /** The Content Type alias. */
  contentTypeAlias: Scalars['String'];
  /** The create date. */
  createDate: Scalars['DateTime'];
  /** The descendants. */
  descendants: ContentConnection;
  elements?: Maybe<Array<Maybe<Element>>>;
  heroImage?: Maybe<MediaWithCrops>;
  heroSubtitle?: Maybe<Scalars['String']>;
  heroTitle?: Maybe<Scalars['String']>;
  /** The unique identifier. */
  id: Scalars['ID'];
  /** The level. */
  level: Scalars['Int'];
  /** The name. */
  name?: Maybe<Scalars['String']>;
  /** The parent Content, can be null if content is at root. */
  parent?: Maybe<Content>;
  /** The sort order. */
  sortOrder: Scalars['Int'];
  /** The update date. */
  updateDate?: Maybe<Scalars['DateTime']>;
  /** The url. */
  url?: Maybe<Scalars['String']>;
};


export type TextpageAncestorsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  culture?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<InputMaybe<ContentOrderByInput>>>;
  where?: InputMaybe<ContentFilterInput>;
};


export type TextpageChildrenArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  culture?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<InputMaybe<ContentOrderByInput>>>;
  where?: InputMaybe<ContentFilterInput>;
};


export type TextpageDescendantsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  culture?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<InputMaybe<ContentOrderByInput>>>;
  where?: InputMaybe<ContentFilterInput>;
};


export type TextpageNameArgs = {
  culture?: InputMaybe<Scalars['String']>;
};


export type TextpageParentArgs = {
  culture?: InputMaybe<Scalars['String']>;
};


export type TextpageUpdateDateArgs = {
  culture?: InputMaybe<Scalars['String']>;
};


export type TextpageUrlArgs = {
  culture?: InputMaybe<Scalars['String']>;
};

/** A connection from an object to a list of objects of type `Textpage`. */
export type TextpageConnection = {
  __typename?: 'TextpageConnection';
  /** A list of edges. */
  edges?: Maybe<Array<Maybe<TextpageEdge>>>;
  /** A list of all of the objects returned in the connection. This is a convenience field provided for quickly exploring the API; rather than querying for "{ edges { node } }" when no edge data is needed, this field can be used instead. Note that when clients like Relay need to fetch the "cursor" field on the edge to enable efficient pagination, this shortcut cannot be used, and the full "{ edges { node } } " version should be used instead. */
  items: Array<Maybe<Textpage>>;
  /** Information to aid in pagination. */
  pageInfo?: Maybe<PageInfo>;
};

/** An edge in a connection from an object to another object of type `Textpage` */
export type TextpageEdge = {
  __typename?: 'TextpageEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of the edge. */
  node?: Maybe<Textpage>;
};

/** A filter input for the type `Textpage`. */
export type TextpageFilterInput = {
  /** All of the filters must match. */
  AND?: InputMaybe<Array<InputMaybe<TextpageFilterInput>>>;
  /** None of the filters must match. */
  NOT?: InputMaybe<Array<InputMaybe<TextpageFilterInput>>>;
  /** Some of the filters must match. */
  OR?: InputMaybe<Array<InputMaybe<TextpageFilterInput>>>;
  /** Field must equal value. */
  contentTypeAlias?: InputMaybe<Scalars['String']>;
  /** Field must match any of the values. */
  contentTypeAlias_any?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Field must contain value. */
  contentTypeAlias_contains?: InputMaybe<Scalars['String']>;
  /** Field must end with value. */
  contentTypeAlias_ends_with?: InputMaybe<Scalars['String']>;
  /** Field must start with value. */
  contentTypeAlias_starts_with?: InputMaybe<Scalars['String']>;
  /** Field must equal value. */
  createDate?: InputMaybe<Scalars['DateTime']>;
  /** Field must be greater than value. */
  createDate_gt?: InputMaybe<Scalars['DateTime']>;
  /** Field must be greater than or equal value. */
  createDate_gte?: InputMaybe<Scalars['DateTime']>;
  /** Field must be less than value. */
  createDate_lt?: InputMaybe<Scalars['DateTime']>;
  /** Field must be less than or equal value. */
  createDate_lte?: InputMaybe<Scalars['DateTime']>;
  /** Field must equal value. */
  heroSubtitle?: InputMaybe<Scalars['String']>;
  /** Field must match any of the values. */
  heroSubtitle_any?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Field must contain value. */
  heroSubtitle_contains?: InputMaybe<Scalars['String']>;
  /** Field must end with value. */
  heroSubtitle_ends_with?: InputMaybe<Scalars['String']>;
  /** Field must start with value. */
  heroSubtitle_starts_with?: InputMaybe<Scalars['String']>;
  /** Field must equal value. */
  heroTitle?: InputMaybe<Scalars['String']>;
  /** Field must match any of the values. */
  heroTitle_any?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Field must contain value. */
  heroTitle_contains?: InputMaybe<Scalars['String']>;
  /** Field must end with value. */
  heroTitle_ends_with?: InputMaybe<Scalars['String']>;
  /** Field must start with value. */
  heroTitle_starts_with?: InputMaybe<Scalars['String']>;
  /** Field must equal value. */
  id?: InputMaybe<Scalars['ID']>;
  /** Field must match any of the values. */
  id_any?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** Field must equal value. */
  level?: InputMaybe<Scalars['Int']>;
  /** Field must match any of the values. */
  level_any?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  /** Field must be greater than value. */
  level_gt?: InputMaybe<Scalars['Int']>;
  /** Field must be greater than or equal value. */
  level_gte?: InputMaybe<Scalars['Int']>;
  /** Field must be less than value. */
  level_lt?: InputMaybe<Scalars['Int']>;
  /** Field must be less than or equal value. */
  level_lte?: InputMaybe<Scalars['Int']>;
  /** Field must equal value. */
  name?: InputMaybe<Scalars['String']>;
  /** Field must match any of the values. */
  name_any?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Field must contain value. */
  name_contains?: InputMaybe<Scalars['String']>;
  /** Field must end with value. */
  name_ends_with?: InputMaybe<Scalars['String']>;
  /** Field must start with value. */
  name_starts_with?: InputMaybe<Scalars['String']>;
  /** Field must equal value. */
  sortOrder?: InputMaybe<Scalars['Int']>;
  /** Field must match any of the values. */
  sortOrder_any?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  /** Field must be greater than value. */
  sortOrder_gt?: InputMaybe<Scalars['Int']>;
  /** Field must be greater than or equal value. */
  sortOrder_gte?: InputMaybe<Scalars['Int']>;
  /** Field must be less than value. */
  sortOrder_lt?: InputMaybe<Scalars['Int']>;
  /** Field must be less than or equal value. */
  sortOrder_lte?: InputMaybe<Scalars['Int']>;
  /** Field must equal value. */
  updateDate?: InputMaybe<Scalars['DateTime']>;
  /** Field must be greater than value. */
  updateDate_gt?: InputMaybe<Scalars['DateTime']>;
  /** Field must be greater than or equal value. */
  updateDate_gte?: InputMaybe<Scalars['DateTime']>;
  /** Field must be less than value. */
  updateDate_lt?: InputMaybe<Scalars['DateTime']>;
  /** Field must be less than or equal value. */
  updateDate_lte?: InputMaybe<Scalars['DateTime']>;
  /** Field must equal value. */
  url?: InputMaybe<Scalars['String']>;
  /** Field must match any of the values. */
  url_any?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Field must contain value. */
  url_contains?: InputMaybe<Scalars['String']>;
  /** Field must end with value. */
  url_ends_with?: InputMaybe<Scalars['String']>;
  /** Field must start with value. */
  url_starts_with?: InputMaybe<Scalars['String']>;
};

/** An order by input for the type `Textpage`. */
export enum TextpageOrderByInput {
  /** Order by `contentTypeAlias` in ascending order. */
  ContentTypeAliasAsc = 'contentTypeAlias_ASC',
  /** Order by `contentTypeAlias` in descending order. */
  ContentTypeAliasDesc = 'contentTypeAlias_DESC',
  /** Order by `createDate` in ascending order. */
  CreateDateAsc = 'createDate_ASC',
  /** Order by `createDate` in descending order. */
  CreateDateDesc = 'createDate_DESC',
  /** Order by `heroSubtitle` in ascending order. */
  HeroSubtitleAsc = 'heroSubtitle_ASC',
  /** Order by `heroSubtitle` in descending order. */
  HeroSubtitleDesc = 'heroSubtitle_DESC',
  /** Order by `heroTitle` in ascending order. */
  HeroTitleAsc = 'heroTitle_ASC',
  /** Order by `heroTitle` in descending order. */
  HeroTitleDesc = 'heroTitle_DESC',
  /** Order by `id` in ascending order. */
  IdAsc = 'id_ASC',
  /** Order by `id` in descending order. */
  IdDesc = 'id_DESC',
  /** Order by `level` in ascending order. */
  LevelAsc = 'level_ASC',
  /** Order by `level` in descending order. */
  LevelDesc = 'level_DESC',
  /** Order by `name` in ascending order. */
  NameAsc = 'name_ASC',
  /** Order by `name` in descending order. */
  NameDesc = 'name_DESC',
  /** Order by `path` in ascending order. */
  PathAsc = 'path_ASC',
  /** Order by `path` in descending order. */
  PathDesc = 'path_DESC',
  /** Order by `sortOrder` in ascending order. */
  SortOrderAsc = 'sortOrder_ASC',
  /** Order by `sortOrder` in descending order. */
  SortOrderDesc = 'sortOrder_DESC',
  /** Order by `updateDate` in ascending order. */
  UpdateDateAsc = 'updateDate_ASC',
  /** Order by `updateDate` in descending order. */
  UpdateDateDesc = 'updateDate_DESC',
  /** Order by `url` in ascending order. */
  UrlAsc = 'url_ASC',
  /** Order by `url` in descending order. */
  UrlDesc = 'url_DESC'
}

export type UmbracoMediaArticle = Media & {
  __typename?: 'UmbracoMediaArticle';
  /** The ancestors. */
  ancestors: MediaConnection;
  /** The children. */
  children: MediaConnection;
  /** The create date. */
  createDate: Scalars['DateTime'];
  /** The descendants. */
  descendants: MediaConnection;
  /** The unique identifier. */
  id: Scalars['ID'];
  /** The level. */
  level: Scalars['Int'];
  /** The Media Type alias. */
  mediaTypeAlias: Scalars['String'];
  /** The name. */
  name: Scalars['String'];
  /** The parent Media, can be null if media is at root. */
  parent?: Maybe<Media>;
  /** The sort order. */
  sortOrder: Scalars['Int'];
  /** in bytes */
  umbracoBytes?: Maybe<Scalars['String']>;
  umbracoExtension?: Maybe<Scalars['String']>;
  umbracoFile?: Maybe<Scalars['String']>;
  /** The update date. */
  updateDate?: Maybe<Scalars['DateTime']>;
  /** The url. */
  url?: Maybe<Scalars['String']>;
};


export type UmbracoMediaArticleAncestorsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
};


export type UmbracoMediaArticleChildrenArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
};


export type UmbracoMediaArticleDescendantsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
};


export type UmbracoMediaArticleUmbracoFileArgs = {
  backgroundColor?: InputMaybe<Scalars['String']>;
  cropAnchor?: InputMaybe<ImageCropAnchor>;
  cropMode?: InputMaybe<ImageCropMode>;
  format?: InputMaybe<ImageCropFormat>;
  height?: InputMaybe<Scalars['Int']>;
  quality?: InputMaybe<Scalars['Int']>;
  ratioMode?: InputMaybe<ImageCropRatioMode>;
  upscale?: InputMaybe<Scalars['Boolean']>;
  width?: InputMaybe<Scalars['Int']>;
};


export type UmbracoMediaArticleUpdateDateArgs = {
  culture?: InputMaybe<Scalars['String']>;
};


export type UmbracoMediaArticleUrlArgs = {
  backgroundColor?: InputMaybe<Scalars['String']>;
  cropAnchor?: InputMaybe<ImageCropAnchor>;
  cropMode?: InputMaybe<ImageCropMode>;
  culture?: InputMaybe<Scalars['String']>;
  format?: InputMaybe<ImageCropFormat>;
  height?: InputMaybe<Scalars['Int']>;
  quality?: InputMaybe<Scalars['Int']>;
  ratioMode?: InputMaybe<ImageCropRatioMode>;
  upscale?: InputMaybe<Scalars['Boolean']>;
  width?: InputMaybe<Scalars['Int']>;
};

/** A connection from an object to a list of objects of type `UmbracoMediaArticle`. */
export type UmbracoMediaArticleConnection = {
  __typename?: 'UmbracoMediaArticleConnection';
  /** A list of edges. */
  edges?: Maybe<Array<Maybe<UmbracoMediaArticleEdge>>>;
  /** A list of all of the objects returned in the connection. This is a convenience field provided for quickly exploring the API; rather than querying for "{ edges { node } }" when no edge data is needed, this field can be used instead. Note that when clients like Relay need to fetch the "cursor" field on the edge to enable efficient pagination, this shortcut cannot be used, and the full "{ edges { node } } " version should be used instead. */
  items: Array<Maybe<UmbracoMediaArticle>>;
  /** Information to aid in pagination. */
  pageInfo?: Maybe<PageInfo>;
};

/** An edge in a connection from an object to another object of type `UmbracoMediaArticle` */
export type UmbracoMediaArticleEdge = {
  __typename?: 'UmbracoMediaArticleEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of the edge. */
  node?: Maybe<UmbracoMediaArticle>;
};

export type UmbracoMediaAudio = Media & {
  __typename?: 'UmbracoMediaAudio';
  /** The ancestors. */
  ancestors: MediaConnection;
  /** The children. */
  children: MediaConnection;
  /** The create date. */
  createDate: Scalars['DateTime'];
  /** The descendants. */
  descendants: MediaConnection;
  /** The unique identifier. */
  id: Scalars['ID'];
  /** The level. */
  level: Scalars['Int'];
  /** The Media Type alias. */
  mediaTypeAlias: Scalars['String'];
  /** The name. */
  name: Scalars['String'];
  /** The parent Media, can be null if media is at root. */
  parent?: Maybe<Media>;
  /** The sort order. */
  sortOrder: Scalars['Int'];
  /** in bytes */
  umbracoBytes?: Maybe<Scalars['String']>;
  umbracoExtension?: Maybe<Scalars['String']>;
  umbracoFile?: Maybe<Scalars['String']>;
  /** The update date. */
  updateDate?: Maybe<Scalars['DateTime']>;
  /** The url. */
  url?: Maybe<Scalars['String']>;
};


export type UmbracoMediaAudioAncestorsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
};


export type UmbracoMediaAudioChildrenArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
};


export type UmbracoMediaAudioDescendantsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
};


export type UmbracoMediaAudioUmbracoFileArgs = {
  backgroundColor?: InputMaybe<Scalars['String']>;
  cropAnchor?: InputMaybe<ImageCropAnchor>;
  cropMode?: InputMaybe<ImageCropMode>;
  format?: InputMaybe<ImageCropFormat>;
  height?: InputMaybe<Scalars['Int']>;
  quality?: InputMaybe<Scalars['Int']>;
  ratioMode?: InputMaybe<ImageCropRatioMode>;
  upscale?: InputMaybe<Scalars['Boolean']>;
  width?: InputMaybe<Scalars['Int']>;
};


export type UmbracoMediaAudioUpdateDateArgs = {
  culture?: InputMaybe<Scalars['String']>;
};


export type UmbracoMediaAudioUrlArgs = {
  backgroundColor?: InputMaybe<Scalars['String']>;
  cropAnchor?: InputMaybe<ImageCropAnchor>;
  cropMode?: InputMaybe<ImageCropMode>;
  culture?: InputMaybe<Scalars['String']>;
  format?: InputMaybe<ImageCropFormat>;
  height?: InputMaybe<Scalars['Int']>;
  quality?: InputMaybe<Scalars['Int']>;
  ratioMode?: InputMaybe<ImageCropRatioMode>;
  upscale?: InputMaybe<Scalars['Boolean']>;
  width?: InputMaybe<Scalars['Int']>;
};

/** A connection from an object to a list of objects of type `UmbracoMediaAudio`. */
export type UmbracoMediaAudioConnection = {
  __typename?: 'UmbracoMediaAudioConnection';
  /** A list of edges. */
  edges?: Maybe<Array<Maybe<UmbracoMediaAudioEdge>>>;
  /** A list of all of the objects returned in the connection. This is a convenience field provided for quickly exploring the API; rather than querying for "{ edges { node } }" when no edge data is needed, this field can be used instead. Note that when clients like Relay need to fetch the "cursor" field on the edge to enable efficient pagination, this shortcut cannot be used, and the full "{ edges { node } } " version should be used instead. */
  items: Array<Maybe<UmbracoMediaAudio>>;
  /** Information to aid in pagination. */
  pageInfo?: Maybe<PageInfo>;
};

/** An edge in a connection from an object to another object of type `UmbracoMediaAudio` */
export type UmbracoMediaAudioEdge = {
  __typename?: 'UmbracoMediaAudioEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of the edge. */
  node?: Maybe<UmbracoMediaAudio>;
};

export type UmbracoMediaVectorGraphics = Media & {
  __typename?: 'UmbracoMediaVectorGraphics';
  /** The ancestors. */
  ancestors: MediaConnection;
  /** The children. */
  children: MediaConnection;
  /** The create date. */
  createDate: Scalars['DateTime'];
  /** The descendants. */
  descendants: MediaConnection;
  /** The unique identifier. */
  id: Scalars['ID'];
  /** The level. */
  level: Scalars['Int'];
  /** The Media Type alias. */
  mediaTypeAlias: Scalars['String'];
  /** The name. */
  name: Scalars['String'];
  /** The parent Media, can be null if media is at root. */
  parent?: Maybe<Media>;
  /** The sort order. */
  sortOrder: Scalars['Int'];
  /** in bytes */
  umbracoBytes?: Maybe<Scalars['String']>;
  umbracoExtension?: Maybe<Scalars['String']>;
  umbracoFile?: Maybe<Scalars['String']>;
  /** The update date. */
  updateDate?: Maybe<Scalars['DateTime']>;
  /** The url. */
  url?: Maybe<Scalars['String']>;
};


export type UmbracoMediaVectorGraphicsAncestorsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
};


export type UmbracoMediaVectorGraphicsChildrenArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
};


export type UmbracoMediaVectorGraphicsDescendantsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
};


export type UmbracoMediaVectorGraphicsUmbracoFileArgs = {
  backgroundColor?: InputMaybe<Scalars['String']>;
  cropAnchor?: InputMaybe<ImageCropAnchor>;
  cropMode?: InputMaybe<ImageCropMode>;
  format?: InputMaybe<ImageCropFormat>;
  height?: InputMaybe<Scalars['Int']>;
  quality?: InputMaybe<Scalars['Int']>;
  ratioMode?: InputMaybe<ImageCropRatioMode>;
  upscale?: InputMaybe<Scalars['Boolean']>;
  width?: InputMaybe<Scalars['Int']>;
};


export type UmbracoMediaVectorGraphicsUpdateDateArgs = {
  culture?: InputMaybe<Scalars['String']>;
};


export type UmbracoMediaVectorGraphicsUrlArgs = {
  backgroundColor?: InputMaybe<Scalars['String']>;
  cropAnchor?: InputMaybe<ImageCropAnchor>;
  cropMode?: InputMaybe<ImageCropMode>;
  culture?: InputMaybe<Scalars['String']>;
  format?: InputMaybe<ImageCropFormat>;
  height?: InputMaybe<Scalars['Int']>;
  quality?: InputMaybe<Scalars['Int']>;
  ratioMode?: InputMaybe<ImageCropRatioMode>;
  upscale?: InputMaybe<Scalars['Boolean']>;
  width?: InputMaybe<Scalars['Int']>;
};

/** A connection from an object to a list of objects of type `UmbracoMediaVectorGraphics`. */
export type UmbracoMediaVectorGraphicsConnection = {
  __typename?: 'UmbracoMediaVectorGraphicsConnection';
  /** A list of edges. */
  edges?: Maybe<Array<Maybe<UmbracoMediaVectorGraphicsEdge>>>;
  /** A list of all of the objects returned in the connection. This is a convenience field provided for quickly exploring the API; rather than querying for "{ edges { node } }" when no edge data is needed, this field can be used instead. Note that when clients like Relay need to fetch the "cursor" field on the edge to enable efficient pagination, this shortcut cannot be used, and the full "{ edges { node } } " version should be used instead. */
  items: Array<Maybe<UmbracoMediaVectorGraphics>>;
  /** Information to aid in pagination. */
  pageInfo?: Maybe<PageInfo>;
};

/** An edge in a connection from an object to another object of type `UmbracoMediaVectorGraphics` */
export type UmbracoMediaVectorGraphicsEdge = {
  __typename?: 'UmbracoMediaVectorGraphicsEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of the edge. */
  node?: Maybe<UmbracoMediaVectorGraphics>;
};

export type UmbracoMediaVideo = Media & {
  __typename?: 'UmbracoMediaVideo';
  /** The ancestors. */
  ancestors: MediaConnection;
  /** The children. */
  children: MediaConnection;
  /** The create date. */
  createDate: Scalars['DateTime'];
  /** The descendants. */
  descendants: MediaConnection;
  /** The unique identifier. */
  id: Scalars['ID'];
  /** The level. */
  level: Scalars['Int'];
  /** The Media Type alias. */
  mediaTypeAlias: Scalars['String'];
  /** The name. */
  name: Scalars['String'];
  /** The parent Media, can be null if media is at root. */
  parent?: Maybe<Media>;
  /** The sort order. */
  sortOrder: Scalars['Int'];
  /** in bytes */
  umbracoBytes?: Maybe<Scalars['String']>;
  umbracoExtension?: Maybe<Scalars['String']>;
  umbracoFile?: Maybe<Scalars['String']>;
  /** The update date. */
  updateDate?: Maybe<Scalars['DateTime']>;
  /** The url. */
  url?: Maybe<Scalars['String']>;
};


export type UmbracoMediaVideoAncestorsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
};


export type UmbracoMediaVideoChildrenArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
};


export type UmbracoMediaVideoDescendantsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
};


export type UmbracoMediaVideoUmbracoFileArgs = {
  backgroundColor?: InputMaybe<Scalars['String']>;
  cropAnchor?: InputMaybe<ImageCropAnchor>;
  cropMode?: InputMaybe<ImageCropMode>;
  format?: InputMaybe<ImageCropFormat>;
  height?: InputMaybe<Scalars['Int']>;
  quality?: InputMaybe<Scalars['Int']>;
  ratioMode?: InputMaybe<ImageCropRatioMode>;
  upscale?: InputMaybe<Scalars['Boolean']>;
  width?: InputMaybe<Scalars['Int']>;
};


export type UmbracoMediaVideoUpdateDateArgs = {
  culture?: InputMaybe<Scalars['String']>;
};


export type UmbracoMediaVideoUrlArgs = {
  backgroundColor?: InputMaybe<Scalars['String']>;
  cropAnchor?: InputMaybe<ImageCropAnchor>;
  cropMode?: InputMaybe<ImageCropMode>;
  culture?: InputMaybe<Scalars['String']>;
  format?: InputMaybe<ImageCropFormat>;
  height?: InputMaybe<Scalars['Int']>;
  quality?: InputMaybe<Scalars['Int']>;
  ratioMode?: InputMaybe<ImageCropRatioMode>;
  upscale?: InputMaybe<Scalars['Boolean']>;
  width?: InputMaybe<Scalars['Int']>;
};

/** A connection from an object to a list of objects of type `UmbracoMediaVideo`. */
export type UmbracoMediaVideoConnection = {
  __typename?: 'UmbracoMediaVideoConnection';
  /** A list of edges. */
  edges?: Maybe<Array<Maybe<UmbracoMediaVideoEdge>>>;
  /** A list of all of the objects returned in the connection. This is a convenience field provided for quickly exploring the API; rather than querying for "{ edges { node } }" when no edge data is needed, this field can be used instead. Note that when clients like Relay need to fetch the "cursor" field on the edge to enable efficient pagination, this shortcut cannot be used, and the full "{ edges { node } } " version should be used instead. */
  items: Array<Maybe<UmbracoMediaVideo>>;
  /** Information to aid in pagination. */
  pageInfo?: Maybe<PageInfo>;
};

/** An edge in a connection from an object to another object of type `UmbracoMediaVideo` */
export type UmbracoMediaVideoEdge = {
  __typename?: 'UmbracoMediaVideoEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of the edge. */
  node?: Maybe<UmbracoMediaVideo>;
};

export type UniqueSellingPoint = Element & {
  __typename?: 'UniqueSellingPoint';
  /** The Content Type alias. */
  contentTypeAlias: Scalars['String'];
  image?: Maybe<MediaWithCrops>;
  link?: Maybe<Array<Maybe<Link>>>;
  text?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
};

export type UniqueSellingPointsComposition = {
  /** The Content Type alias. */
  contentTypeAlias: Scalars['String'];
  uniqueSellingPoints?: Maybe<Array<Maybe<Element>>>;
  uniqueSellingPointsTitle?: Maybe<Scalars['String']>;
};

export type GetPageBySlugQueryVariables = Exact<{
  url: Scalars['String'];
}>;


export type GetPageBySlugQuery = { __typename?: 'Query', content?: { __typename?: 'Ben' } | { __typename?: 'Blog' } | { __typename?: 'BlogPost' } | (
    { __typename?: 'Frontpage' }
    & { ' $fragmentRefs'?: { 'Hero_Frontpage_Fragment': Hero_Frontpage_Fragment;'UnigueSellingPointsFragment': UnigueSellingPointsFragment;'Elements_Frontpage_Fragment': Elements_Frontpage_Fragment } }
  ) | { __typename?: 'Home' } | { __typename?: 'Insight' } | { __typename?: 'Insights' } | { __typename?: 'News' } | { __typename?: 'NewsArticle' } | { __typename?: 'TextAndImage2' } | (
    { __typename?: 'Textpage' }
    & { ' $fragmentRefs'?: { 'Hero_Textpage_Fragment': Hero_Textpage_Fragment;'Elements_Textpage_Fragment': Elements_Textpage_Fragment } }
  ) | null };

type Hero_Frontpage_Fragment = { __typename?: 'Frontpage', heroTitle?: string | null, heroSubtitle?: string | null, heroImage?: { __typename?: 'MediaWithCrops', cropUrl?: string | null } | null } & { ' $fragmentName'?: 'Hero_Frontpage_Fragment' };

type Hero_Textpage_Fragment = { __typename?: 'Textpage', heroTitle?: string | null, heroSubtitle?: string | null, heroImage?: { __typename?: 'MediaWithCrops', cropUrl?: string | null } | null } & { ' $fragmentName'?: 'Hero_Textpage_Fragment' };

export type HeroFragment = Hero_Frontpage_Fragment | Hero_Textpage_Fragment;

type Elements_Frontpage_Fragment = { __typename?: 'Frontpage', elements?: Array<{ __typename?: 'PageDetails' } | { __typename?: 'SiteSettings' } | { __typename?: 'TextAndImage', title?: string | null, text?: any | null, showLargeImage?: boolean | null, image?: { __typename?: 'MediaWithCrops', small?: string | null, medium?: string | null, large?: string | null } | null } | { __typename?: 'UniqueSellingPoint' } | null> | null } & { ' $fragmentName'?: 'Elements_Frontpage_Fragment' };

type Elements_Textpage_Fragment = { __typename?: 'Textpage', elements?: Array<{ __typename?: 'PageDetails' } | { __typename?: 'SiteSettings' } | { __typename?: 'TextAndImage', title?: string | null, text?: any | null, showLargeImage?: boolean | null, image?: { __typename?: 'MediaWithCrops', small?: string | null, medium?: string | null, large?: string | null } | null } | { __typename?: 'UniqueSellingPoint' } | null> | null } & { ' $fragmentName'?: 'Elements_Textpage_Fragment' };

export type ElementsFragment = Elements_Frontpage_Fragment | Elements_Textpage_Fragment;

export type UnigueSellingPointsFragment = { __typename?: 'Frontpage', uniqueSellingPointsTitle?: string | null, uniqueSellingPoints?: Array<{ __typename?: 'PageDetails' } | { __typename?: 'SiteSettings' } | { __typename?: 'TextAndImage' } | { __typename?: 'UniqueSellingPoint', title?: string | null, text?: string | null, link?: Array<{ __typename?: 'Link', name: string, target?: string | null, type: LinkType, url: string } | null> | null, image?: { __typename?: 'MediaWithCrops', url: string } | null } | null> | null } & { ' $fragmentName'?: 'UnigueSellingPointsFragment' };

export const HeroFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"Hero"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"HeroComposition"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"heroTitle"}},{"kind":"Field","name":{"kind":"Name","value":"heroSubtitle"}},{"kind":"Field","name":{"kind":"Name","value":"heroImage"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"cropUrl"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"width"},"value":{"kind":"IntValue","value":"1980"}},{"kind":"Argument","name":{"kind":"Name","value":"height"},"value":{"kind":"IntValue","value":"430"}},{"kind":"Argument","name":{"kind":"Name","value":"cropMode"},"value":{"kind":"EnumValue","value":"CROP"}}]}]}}]}}]} as unknown as DocumentNode<HeroFragment, unknown>;
export const ElementsFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"Elements"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ElementsComposition"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"elements"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"TextAndImage"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"text"}},{"kind":"Field","name":{"kind":"Name","value":"showLargeImage"}},{"kind":"Field","name":{"kind":"Name","value":"image"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"small"},"name":{"kind":"Name","value":"cropUrl"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"width"},"value":{"kind":"IntValue","value":"320"}},{"kind":"Argument","name":{"kind":"Name","value":"height"},"value":{"kind":"IntValue","value":"240"}},{"kind":"Argument","name":{"kind":"Name","value":"cropMode"},"value":{"kind":"EnumValue","value":"CROP"}}]},{"kind":"Field","alias":{"kind":"Name","value":"medium"},"name":{"kind":"Name","value":"cropUrl"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"width"},"value":{"kind":"IntValue","value":"480"}},{"kind":"Argument","name":{"kind":"Name","value":"height"},"value":{"kind":"IntValue","value":"360"}},{"kind":"Argument","name":{"kind":"Name","value":"cropMode"},"value":{"kind":"EnumValue","value":"CROP"}}]},{"kind":"Field","alias":{"kind":"Name","value":"large"},"name":{"kind":"Name","value":"cropUrl"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"width"},"value":{"kind":"IntValue","value":"1024"}},{"kind":"Argument","name":{"kind":"Name","value":"height"},"value":{"kind":"IntValue","value":"768"}},{"kind":"Argument","name":{"kind":"Name","value":"cropMode"},"value":{"kind":"EnumValue","value":"CROP"}}]}]}}]}}]}}]}}]} as unknown as DocumentNode<ElementsFragment, unknown>;
export const UnigueSellingPointsFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"UnigueSellingPoints"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"UniqueSellingPointsComposition"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"uniqueSellingPointsTitle"}},{"kind":"Field","name":{"kind":"Name","value":"uniqueSellingPoints"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"UniqueSellingPoint"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"text"}},{"kind":"Field","name":{"kind":"Name","value":"link"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"target"}},{"kind":"Field","name":{"kind":"Name","value":"type"}},{"kind":"Field","name":{"kind":"Name","value":"url"}}]}},{"kind":"Field","name":{"kind":"Name","value":"image"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"url"}}]}}]}}]}}]}}]} as unknown as DocumentNode<UnigueSellingPointsFragment, unknown>;
export const GetPageBySlugDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetPageBySlug"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"url"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"content"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"url"},"value":{"kind":"Variable","name":{"kind":"Name","value":"url"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"Hero"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"UnigueSellingPoints"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"Elements"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"Hero"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"HeroComposition"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"heroTitle"}},{"kind":"Field","name":{"kind":"Name","value":"heroSubtitle"}},{"kind":"Field","name":{"kind":"Name","value":"heroImage"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"cropUrl"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"width"},"value":{"kind":"IntValue","value":"1980"}},{"kind":"Argument","name":{"kind":"Name","value":"height"},"value":{"kind":"IntValue","value":"430"}},{"kind":"Argument","name":{"kind":"Name","value":"cropMode"},"value":{"kind":"EnumValue","value":"CROP"}}]}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"UnigueSellingPoints"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"UniqueSellingPointsComposition"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"uniqueSellingPointsTitle"}},{"kind":"Field","name":{"kind":"Name","value":"uniqueSellingPoints"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"UniqueSellingPoint"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"text"}},{"kind":"Field","name":{"kind":"Name","value":"link"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"target"}},{"kind":"Field","name":{"kind":"Name","value":"type"}},{"kind":"Field","name":{"kind":"Name","value":"url"}}]}},{"kind":"Field","name":{"kind":"Name","value":"image"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"url"}}]}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"Elements"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ElementsComposition"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"elements"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"TextAndImage"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"text"}},{"kind":"Field","name":{"kind":"Name","value":"showLargeImage"}},{"kind":"Field","name":{"kind":"Name","value":"image"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"small"},"name":{"kind":"Name","value":"cropUrl"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"width"},"value":{"kind":"IntValue","value":"320"}},{"kind":"Argument","name":{"kind":"Name","value":"height"},"value":{"kind":"IntValue","value":"240"}},{"kind":"Argument","name":{"kind":"Name","value":"cropMode"},"value":{"kind":"EnumValue","value":"CROP"}}]},{"kind":"Field","alias":{"kind":"Name","value":"medium"},"name":{"kind":"Name","value":"cropUrl"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"width"},"value":{"kind":"IntValue","value":"480"}},{"kind":"Argument","name":{"kind":"Name","value":"height"},"value":{"kind":"IntValue","value":"360"}},{"kind":"Argument","name":{"kind":"Name","value":"cropMode"},"value":{"kind":"EnumValue","value":"CROP"}}]},{"kind":"Field","alias":{"kind":"Name","value":"large"},"name":{"kind":"Name","value":"cropUrl"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"width"},"value":{"kind":"IntValue","value":"1024"}},{"kind":"Argument","name":{"kind":"Name","value":"height"},"value":{"kind":"IntValue","value":"768"}},{"kind":"Argument","name":{"kind":"Name","value":"cropMode"},"value":{"kind":"EnumValue","value":"CROP"}}]}]}}]}}]}}]}}]} as unknown as DocumentNode<GetPageBySlugQuery, GetPageBySlugQueryVariables>;