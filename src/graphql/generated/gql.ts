/* eslint-disable */
import * as types from './graphql';
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';

/**
 * Map of all GraphQL operations in the project.
 *
 * This map has several performance disadvantages:
 * 1. It is not tree-shakeable, so it will include all operations in the project.
 * 2. It is not minifiable, so the string of a GraphQL query will be multiple times inside the bundle.
 * 3. It does not support dead code elimination, so it will add unused operations.
 *
 * Therefore it is highly recommended to use the babel or swc plugin for production.
 */
const documents = {
    "\n  query GetPageBySlug($url: String!) {\n    content(url: $url) {\n      ...Hero\n      ...UnigueSellingPoints\n      ...Elements\n    }\n  }\n\n  fragment Hero on HeroComposition {\n    heroTitle\n    heroSubtitle\n    heroImage {\n      cropUrl(width: 1980, height: 430, cropMode: CROP)\n    }\n  }\n\n  fragment Elements on ElementsComposition {\n    elements {\n      ... on TextAndImage {\n        title\n        text\n        showLargeImage\n        image {\n          small: cropUrl(width: 320, height: 240, cropMode: CROP)\n          medium: cropUrl(width: 480, height: 360, cropMode: CROP)\n          large: cropUrl(width: 1024, height: 768, cropMode: CROP)\n        }\n      }\n    }\n  }\n\n  fragment UnigueSellingPoints on UniqueSellingPointsComposition {\n    uniqueSellingPointsTitle\n    uniqueSellingPoints {\n      ... on UniqueSellingPoint {\n        title\n        text\n        link {\n          name\n          target\n          type\n          url\n        }\n        image {\n          url\n        }\n      }\n    }\n  }\n": types.GetPageBySlugDocument,
};

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 *
 *
 * @example
 * ```ts
 * const query = graphql(`query GetUser($id: ID!) { user(id: $id) { name } }`);
 * ```
 *
 * The query argument is unknown!
 * Please regenerate the types.
 */
export function graphql(source: string): unknown;

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query GetPageBySlug($url: String!) {\n    content(url: $url) {\n      ...Hero\n      ...UnigueSellingPoints\n      ...Elements\n    }\n  }\n\n  fragment Hero on HeroComposition {\n    heroTitle\n    heroSubtitle\n    heroImage {\n      cropUrl(width: 1980, height: 430, cropMode: CROP)\n    }\n  }\n\n  fragment Elements on ElementsComposition {\n    elements {\n      ... on TextAndImage {\n        title\n        text\n        showLargeImage\n        image {\n          small: cropUrl(width: 320, height: 240, cropMode: CROP)\n          medium: cropUrl(width: 480, height: 360, cropMode: CROP)\n          large: cropUrl(width: 1024, height: 768, cropMode: CROP)\n        }\n      }\n    }\n  }\n\n  fragment UnigueSellingPoints on UniqueSellingPointsComposition {\n    uniqueSellingPointsTitle\n    uniqueSellingPoints {\n      ... on UniqueSellingPoint {\n        title\n        text\n        link {\n          name\n          target\n          type\n          url\n        }\n        image {\n          url\n        }\n      }\n    }\n  }\n"): (typeof documents)["\n  query GetPageBySlug($url: String!) {\n    content(url: $url) {\n      ...Hero\n      ...UnigueSellingPoints\n      ...Elements\n    }\n  }\n\n  fragment Hero on HeroComposition {\n    heroTitle\n    heroSubtitle\n    heroImage {\n      cropUrl(width: 1980, height: 430, cropMode: CROP)\n    }\n  }\n\n  fragment Elements on ElementsComposition {\n    elements {\n      ... on TextAndImage {\n        title\n        text\n        showLargeImage\n        image {\n          small: cropUrl(width: 320, height: 240, cropMode: CROP)\n          medium: cropUrl(width: 480, height: 360, cropMode: CROP)\n          large: cropUrl(width: 1024, height: 768, cropMode: CROP)\n        }\n      }\n    }\n  }\n\n  fragment UnigueSellingPoints on UniqueSellingPointsComposition {\n    uniqueSellingPointsTitle\n    uniqueSellingPoints {\n      ... on UniqueSellingPoint {\n        title\n        text\n        link {\n          name\n          target\n          type\n          url\n        }\n        image {\n          url\n        }\n      }\n    }\n  }\n"];

export function graphql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> = TDocumentNode extends DocumentNode<  infer TType,  any>  ? TType  : never;