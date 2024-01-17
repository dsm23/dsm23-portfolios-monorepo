export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  DateTime: { input: any; output: any; }
  Dimension: { input: any; output: any; }
  HexColor: { input: any; output: any; }
  JSON: { input: any; output: any; }
  Quality: { input: any; output: any; }
};

/** Represents a binary file in a space. An asset can be any file type. */
export type Asset = {
  __typename?: 'Asset';
  contentType?: Maybe<Scalars['String']['output']>;
  contentfulMetadata: ContentfulMetadata;
  description?: Maybe<Scalars['String']['output']>;
  fileName?: Maybe<Scalars['String']['output']>;
  height?: Maybe<Scalars['Int']['output']>;
  linkedFrom?: Maybe<AssetLinkingCollections>;
  size?: Maybe<Scalars['Int']['output']>;
  sys: Sys;
  title?: Maybe<Scalars['String']['output']>;
  url?: Maybe<Scalars['String']['output']>;
  width?: Maybe<Scalars['Int']['output']>;
};


/** Represents a binary file in a space. An asset can be any file type. */
export type AssetContentTypeArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** Represents a binary file in a space. An asset can be any file type. */
export type AssetDescriptionArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** Represents a binary file in a space. An asset can be any file type. */
export type AssetFileNameArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** Represents a binary file in a space. An asset can be any file type. */
export type AssetHeightArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** Represents a binary file in a space. An asset can be any file type. */
export type AssetLinkedFromArgs = {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


/** Represents a binary file in a space. An asset can be any file type. */
export type AssetSizeArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** Represents a binary file in a space. An asset can be any file type. */
export type AssetTitleArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** Represents a binary file in a space. An asset can be any file type. */
export type AssetUrlArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
  transform?: InputMaybe<ImageTransformOptions>;
};


/** Represents a binary file in a space. An asset can be any file type. */
export type AssetWidthArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};

export type AssetCollection = {
  __typename?: 'AssetCollection';
  items: Array<Maybe<Asset>>;
  limit: Scalars['Int']['output'];
  skip: Scalars['Int']['output'];
  total: Scalars['Int']['output'];
};

export type AssetFilter = {
  AND?: InputMaybe<Array<InputMaybe<AssetFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<AssetFilter>>>;
  contentType?: InputMaybe<Scalars['String']['input']>;
  contentType_contains?: InputMaybe<Scalars['String']['input']>;
  contentType_exists?: InputMaybe<Scalars['Boolean']['input']>;
  contentType_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contentType_not?: InputMaybe<Scalars['String']['input']>;
  contentType_not_contains?: InputMaybe<Scalars['String']['input']>;
  contentType_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  description?: InputMaybe<Scalars['String']['input']>;
  description_contains?: InputMaybe<Scalars['String']['input']>;
  description_exists?: InputMaybe<Scalars['Boolean']['input']>;
  description_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  description_not?: InputMaybe<Scalars['String']['input']>;
  description_not_contains?: InputMaybe<Scalars['String']['input']>;
  description_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  fileName?: InputMaybe<Scalars['String']['input']>;
  fileName_contains?: InputMaybe<Scalars['String']['input']>;
  fileName_exists?: InputMaybe<Scalars['Boolean']['input']>;
  fileName_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  fileName_not?: InputMaybe<Scalars['String']['input']>;
  fileName_not_contains?: InputMaybe<Scalars['String']['input']>;
  fileName_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  height?: InputMaybe<Scalars['Int']['input']>;
  height_exists?: InputMaybe<Scalars['Boolean']['input']>;
  height_gt?: InputMaybe<Scalars['Int']['input']>;
  height_gte?: InputMaybe<Scalars['Int']['input']>;
  height_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  height_lt?: InputMaybe<Scalars['Int']['input']>;
  height_lte?: InputMaybe<Scalars['Int']['input']>;
  height_not?: InputMaybe<Scalars['Int']['input']>;
  height_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  size?: InputMaybe<Scalars['Int']['input']>;
  size_exists?: InputMaybe<Scalars['Boolean']['input']>;
  size_gt?: InputMaybe<Scalars['Int']['input']>;
  size_gte?: InputMaybe<Scalars['Int']['input']>;
  size_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  size_lt?: InputMaybe<Scalars['Int']['input']>;
  size_lte?: InputMaybe<Scalars['Int']['input']>;
  size_not?: InputMaybe<Scalars['Int']['input']>;
  size_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  sys?: InputMaybe<SysFilter>;
  title?: InputMaybe<Scalars['String']['input']>;
  title_contains?: InputMaybe<Scalars['String']['input']>;
  title_exists?: InputMaybe<Scalars['Boolean']['input']>;
  title_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  title_not?: InputMaybe<Scalars['String']['input']>;
  title_not_contains?: InputMaybe<Scalars['String']['input']>;
  title_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  url?: InputMaybe<Scalars['String']['input']>;
  url_contains?: InputMaybe<Scalars['String']['input']>;
  url_exists?: InputMaybe<Scalars['Boolean']['input']>;
  url_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  url_not?: InputMaybe<Scalars['String']['input']>;
  url_not_contains?: InputMaybe<Scalars['String']['input']>;
  url_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  width?: InputMaybe<Scalars['Int']['input']>;
  width_exists?: InputMaybe<Scalars['Boolean']['input']>;
  width_gt?: InputMaybe<Scalars['Int']['input']>;
  width_gte?: InputMaybe<Scalars['Int']['input']>;
  width_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  width_lt?: InputMaybe<Scalars['Int']['input']>;
  width_lte?: InputMaybe<Scalars['Int']['input']>;
  width_not?: InputMaybe<Scalars['Int']['input']>;
  width_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
};

export type AssetLinkingCollections = {
  __typename?: 'AssetLinkingCollections';
  blogPostCollection?: Maybe<BlogPostCollection>;
  entryCollection?: Maybe<EntryCollection>;
  personCollection?: Maybe<PersonCollection>;
  skillCollection?: Maybe<SkillCollection>;
};


export type AssetLinkingCollectionsBlogPostCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};


export type AssetLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};


export type AssetLinkingCollectionsPersonCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};


export type AssetLinkingCollectionsSkillCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};

export enum AssetOrder {
  ContentTypeAsc = 'contentType_ASC',
  ContentTypeDesc = 'contentType_DESC',
  FileNameAsc = 'fileName_ASC',
  FileNameDesc = 'fileName_DESC',
  HeightAsc = 'height_ASC',
  HeightDesc = 'height_DESC',
  SizeAsc = 'size_ASC',
  SizeDesc = 'size_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
  UrlAsc = 'url_ASC',
  UrlDesc = 'url_DESC',
  WidthAsc = 'width_ASC',
  WidthDesc = 'width_DESC'
}

/** [See type definition](https://app.contentful.com/spaces/74rjj85nq0nk/content_types/blogPost) */
export type BlogPost = Entry & {
  __typename?: 'BlogPost';
  author?: Maybe<Person>;
  body?: Maybe<Scalars['String']['output']>;
  contentfulMetadata: ContentfulMetadata;
  description?: Maybe<Scalars['String']['output']>;
  heroImage?: Maybe<Asset>;
  linkedFrom?: Maybe<BlogPostLinkingCollections>;
  publishDate?: Maybe<Scalars['DateTime']['output']>;
  slug?: Maybe<Scalars['String']['output']>;
  sys: Sys;
  tags?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  title?: Maybe<Scalars['String']['output']>;
};


/** [See type definition](https://app.contentful.com/spaces/74rjj85nq0nk/content_types/blogPost) */
export type BlogPostAuthorArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  where?: InputMaybe<PersonFilter>;
};


/** [See type definition](https://app.contentful.com/spaces/74rjj85nq0nk/content_types/blogPost) */
export type BlogPostBodyArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/74rjj85nq0nk/content_types/blogPost) */
export type BlogPostDescriptionArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/74rjj85nq0nk/content_types/blogPost) */
export type BlogPostHeroImageArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/74rjj85nq0nk/content_types/blogPost) */
export type BlogPostLinkedFromArgs = {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


/** [See type definition](https://app.contentful.com/spaces/74rjj85nq0nk/content_types/blogPost) */
export type BlogPostPublishDateArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/74rjj85nq0nk/content_types/blogPost) */
export type BlogPostSlugArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/74rjj85nq0nk/content_types/blogPost) */
export type BlogPostTagsArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/74rjj85nq0nk/content_types/blogPost) */
export type BlogPostTitleArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};

export type BlogPostCollection = {
  __typename?: 'BlogPostCollection';
  items: Array<Maybe<BlogPost>>;
  limit: Scalars['Int']['output'];
  skip: Scalars['Int']['output'];
  total: Scalars['Int']['output'];
};

export type BlogPostFilter = {
  AND?: InputMaybe<Array<InputMaybe<BlogPostFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<BlogPostFilter>>>;
  author?: InputMaybe<CfPersonNestedFilter>;
  author_exists?: InputMaybe<Scalars['Boolean']['input']>;
  body?: InputMaybe<Scalars['String']['input']>;
  body_contains?: InputMaybe<Scalars['String']['input']>;
  body_exists?: InputMaybe<Scalars['Boolean']['input']>;
  body_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  body_not?: InputMaybe<Scalars['String']['input']>;
  body_not_contains?: InputMaybe<Scalars['String']['input']>;
  body_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  description?: InputMaybe<Scalars['String']['input']>;
  description_contains?: InputMaybe<Scalars['String']['input']>;
  description_exists?: InputMaybe<Scalars['Boolean']['input']>;
  description_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  description_not?: InputMaybe<Scalars['String']['input']>;
  description_not_contains?: InputMaybe<Scalars['String']['input']>;
  description_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  heroImage_exists?: InputMaybe<Scalars['Boolean']['input']>;
  publishDate?: InputMaybe<Scalars['DateTime']['input']>;
  publishDate_exists?: InputMaybe<Scalars['Boolean']['input']>;
  publishDate_gt?: InputMaybe<Scalars['DateTime']['input']>;
  publishDate_gte?: InputMaybe<Scalars['DateTime']['input']>;
  publishDate_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  publishDate_lt?: InputMaybe<Scalars['DateTime']['input']>;
  publishDate_lte?: InputMaybe<Scalars['DateTime']['input']>;
  publishDate_not?: InputMaybe<Scalars['DateTime']['input']>;
  publishDate_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  slug?: InputMaybe<Scalars['String']['input']>;
  slug_contains?: InputMaybe<Scalars['String']['input']>;
  slug_exists?: InputMaybe<Scalars['Boolean']['input']>;
  slug_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  slug_not?: InputMaybe<Scalars['String']['input']>;
  slug_not_contains?: InputMaybe<Scalars['String']['input']>;
  slug_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  sys?: InputMaybe<SysFilter>;
  tags_contains_all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  tags_contains_none?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  tags_contains_some?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  tags_exists?: InputMaybe<Scalars['Boolean']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
  title_contains?: InputMaybe<Scalars['String']['input']>;
  title_exists?: InputMaybe<Scalars['Boolean']['input']>;
  title_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  title_not?: InputMaybe<Scalars['String']['input']>;
  title_not_contains?: InputMaybe<Scalars['String']['input']>;
  title_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type BlogPostLinkingCollections = {
  __typename?: 'BlogPostLinkingCollections';
  entryCollection?: Maybe<EntryCollection>;
};


export type BlogPostLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};

export enum BlogPostOrder {
  PublishDateAsc = 'publishDate_ASC',
  PublishDateDesc = 'publishDate_DESC',
  SlugAsc = 'slug_ASC',
  SlugDesc = 'slug_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC'
}

export type ContentfulMetadata = {
  __typename?: 'ContentfulMetadata';
  tags: Array<Maybe<ContentfulTag>>;
};

export type ContentfulMetadataFilter = {
  tags?: InputMaybe<ContentfulMetadataTagsFilter>;
  tags_exists?: InputMaybe<Scalars['Boolean']['input']>;
};

export type ContentfulMetadataTagsFilter = {
  id_contains_all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  id_contains_none?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  id_contains_some?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

/**
 * Represents a tag entity for finding and organizing content easily.
 *     Find out more here: https://www.contentful.com/developers/docs/references/content-delivery-api/#/reference/content-tags
 */
export type ContentfulTag = {
  __typename?: 'ContentfulTag';
  id?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
};

/** description of places I have been educated at [See type definition](https://app.contentful.com/spaces/74rjj85nq0nk/content_types/educationSchool) */
export type EducationSchool = Entry & {
  __typename?: 'EducationSchool';
  contentfulMetadata: ContentfulMetadata;
  description?: Maybe<EducationSchoolDescription>;
  endDate?: Maybe<Scalars['String']['output']>;
  linkedFrom?: Maybe<EducationSchoolLinkingCollections>;
  schoolName?: Maybe<Scalars['String']['output']>;
  startDate?: Maybe<Scalars['String']['output']>;
  sys: Sys;
};


/** description of places I have been educated at [See type definition](https://app.contentful.com/spaces/74rjj85nq0nk/content_types/educationSchool) */
export type EducationSchoolDescriptionArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** description of places I have been educated at [See type definition](https://app.contentful.com/spaces/74rjj85nq0nk/content_types/educationSchool) */
export type EducationSchoolEndDateArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** description of places I have been educated at [See type definition](https://app.contentful.com/spaces/74rjj85nq0nk/content_types/educationSchool) */
export type EducationSchoolLinkedFromArgs = {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


/** description of places I have been educated at [See type definition](https://app.contentful.com/spaces/74rjj85nq0nk/content_types/educationSchool) */
export type EducationSchoolSchoolNameArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** description of places I have been educated at [See type definition](https://app.contentful.com/spaces/74rjj85nq0nk/content_types/educationSchool) */
export type EducationSchoolStartDateArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};

export type EducationSchoolCollection = {
  __typename?: 'EducationSchoolCollection';
  items: Array<Maybe<EducationSchool>>;
  limit: Scalars['Int']['output'];
  skip: Scalars['Int']['output'];
  total: Scalars['Int']['output'];
};

export type EducationSchoolDescription = {
  __typename?: 'EducationSchoolDescription';
  json: Scalars['JSON']['output'];
  links: EducationSchoolDescriptionLinks;
};

export type EducationSchoolDescriptionAssets = {
  __typename?: 'EducationSchoolDescriptionAssets';
  block: Array<Maybe<Asset>>;
  hyperlink: Array<Maybe<Asset>>;
};

export type EducationSchoolDescriptionEntries = {
  __typename?: 'EducationSchoolDescriptionEntries';
  block: Array<Maybe<Entry>>;
  hyperlink: Array<Maybe<Entry>>;
  inline: Array<Maybe<Entry>>;
};

export type EducationSchoolDescriptionLinks = {
  __typename?: 'EducationSchoolDescriptionLinks';
  assets: EducationSchoolDescriptionAssets;
  entries: EducationSchoolDescriptionEntries;
  resources: EducationSchoolDescriptionResources;
};

export type EducationSchoolDescriptionResources = {
  __typename?: 'EducationSchoolDescriptionResources';
  block: Array<ResourceLink>;
  hyperlink: Array<ResourceLink>;
  inline: Array<ResourceLink>;
};

export type EducationSchoolFilter = {
  AND?: InputMaybe<Array<InputMaybe<EducationSchoolFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<EducationSchoolFilter>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  description_contains?: InputMaybe<Scalars['String']['input']>;
  description_exists?: InputMaybe<Scalars['Boolean']['input']>;
  description_not_contains?: InputMaybe<Scalars['String']['input']>;
  endDate?: InputMaybe<Scalars['String']['input']>;
  endDate_contains?: InputMaybe<Scalars['String']['input']>;
  endDate_exists?: InputMaybe<Scalars['Boolean']['input']>;
  endDate_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  endDate_not?: InputMaybe<Scalars['String']['input']>;
  endDate_not_contains?: InputMaybe<Scalars['String']['input']>;
  endDate_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  schoolName?: InputMaybe<Scalars['String']['input']>;
  schoolName_contains?: InputMaybe<Scalars['String']['input']>;
  schoolName_exists?: InputMaybe<Scalars['Boolean']['input']>;
  schoolName_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  schoolName_not?: InputMaybe<Scalars['String']['input']>;
  schoolName_not_contains?: InputMaybe<Scalars['String']['input']>;
  schoolName_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  startDate?: InputMaybe<Scalars['String']['input']>;
  startDate_contains?: InputMaybe<Scalars['String']['input']>;
  startDate_exists?: InputMaybe<Scalars['Boolean']['input']>;
  startDate_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  startDate_not?: InputMaybe<Scalars['String']['input']>;
  startDate_not_contains?: InputMaybe<Scalars['String']['input']>;
  startDate_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  sys?: InputMaybe<SysFilter>;
};

export type EducationSchoolLinkingCollections = {
  __typename?: 'EducationSchoolLinkingCollections';
  entryCollection?: Maybe<EntryCollection>;
};


export type EducationSchoolLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};

export enum EducationSchoolOrder {
  EndDateAsc = 'endDate_ASC',
  EndDateDesc = 'endDate_DESC',
  SchoolNameAsc = 'schoolName_ASC',
  SchoolNameDesc = 'schoolName_DESC',
  StartDateAsc = 'startDate_ASC',
  StartDateDesc = 'startDate_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

export type Entry = {
  contentfulMetadata: ContentfulMetadata;
  sys: Sys;
};

export type EntryCollection = {
  __typename?: 'EntryCollection';
  items: Array<Maybe<Entry>>;
  limit: Scalars['Int']['output'];
  skip: Scalars['Int']['output'];
  total: Scalars['Int']['output'];
};

export type EntryFilter = {
  AND?: InputMaybe<Array<InputMaybe<EntryFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<EntryFilter>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  sys?: InputMaybe<SysFilter>;
};

export enum EntryOrder {
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

/** description of individual companies I have worked at [See type definition](https://app.contentful.com/spaces/74rjj85nq0nk/content_types/experienceCompany) */
export type ExperienceCompany = Entry & {
  __typename?: 'ExperienceCompany';
  city?: Maybe<Scalars['String']['output']>;
  companyName?: Maybe<Scalars['String']['output']>;
  contentfulMetadata: ContentfulMetadata;
  description?: Maybe<ExperienceCompanyDescription>;
  endDate?: Maybe<Scalars['String']['output']>;
  endDateTime?: Maybe<Scalars['DateTime']['output']>;
  linkedFrom?: Maybe<ExperienceCompanyLinkingCollections>;
  startDate?: Maybe<Scalars['String']['output']>;
  sys: Sys;
};


/** description of individual companies I have worked at [See type definition](https://app.contentful.com/spaces/74rjj85nq0nk/content_types/experienceCompany) */
export type ExperienceCompanyCityArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** description of individual companies I have worked at [See type definition](https://app.contentful.com/spaces/74rjj85nq0nk/content_types/experienceCompany) */
export type ExperienceCompanyCompanyNameArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** description of individual companies I have worked at [See type definition](https://app.contentful.com/spaces/74rjj85nq0nk/content_types/experienceCompany) */
export type ExperienceCompanyDescriptionArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** description of individual companies I have worked at [See type definition](https://app.contentful.com/spaces/74rjj85nq0nk/content_types/experienceCompany) */
export type ExperienceCompanyEndDateArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** description of individual companies I have worked at [See type definition](https://app.contentful.com/spaces/74rjj85nq0nk/content_types/experienceCompany) */
export type ExperienceCompanyEndDateTimeArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** description of individual companies I have worked at [See type definition](https://app.contentful.com/spaces/74rjj85nq0nk/content_types/experienceCompany) */
export type ExperienceCompanyLinkedFromArgs = {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


/** description of individual companies I have worked at [See type definition](https://app.contentful.com/spaces/74rjj85nq0nk/content_types/experienceCompany) */
export type ExperienceCompanyStartDateArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};

export type ExperienceCompanyCollection = {
  __typename?: 'ExperienceCompanyCollection';
  items: Array<Maybe<ExperienceCompany>>;
  limit: Scalars['Int']['output'];
  skip: Scalars['Int']['output'];
  total: Scalars['Int']['output'];
};

export type ExperienceCompanyDescription = {
  __typename?: 'ExperienceCompanyDescription';
  json: Scalars['JSON']['output'];
  links: ExperienceCompanyDescriptionLinks;
};

export type ExperienceCompanyDescriptionAssets = {
  __typename?: 'ExperienceCompanyDescriptionAssets';
  block: Array<Maybe<Asset>>;
  hyperlink: Array<Maybe<Asset>>;
};

export type ExperienceCompanyDescriptionEntries = {
  __typename?: 'ExperienceCompanyDescriptionEntries';
  block: Array<Maybe<Entry>>;
  hyperlink: Array<Maybe<Entry>>;
  inline: Array<Maybe<Entry>>;
};

export type ExperienceCompanyDescriptionLinks = {
  __typename?: 'ExperienceCompanyDescriptionLinks';
  assets: ExperienceCompanyDescriptionAssets;
  entries: ExperienceCompanyDescriptionEntries;
  resources: ExperienceCompanyDescriptionResources;
};

export type ExperienceCompanyDescriptionResources = {
  __typename?: 'ExperienceCompanyDescriptionResources';
  block: Array<ResourceLink>;
  hyperlink: Array<ResourceLink>;
  inline: Array<ResourceLink>;
};

export type ExperienceCompanyFilter = {
  AND?: InputMaybe<Array<InputMaybe<ExperienceCompanyFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<ExperienceCompanyFilter>>>;
  city?: InputMaybe<Scalars['String']['input']>;
  city_contains?: InputMaybe<Scalars['String']['input']>;
  city_exists?: InputMaybe<Scalars['Boolean']['input']>;
  city_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  city_not?: InputMaybe<Scalars['String']['input']>;
  city_not_contains?: InputMaybe<Scalars['String']['input']>;
  city_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  companyName?: InputMaybe<Scalars['String']['input']>;
  companyName_contains?: InputMaybe<Scalars['String']['input']>;
  companyName_exists?: InputMaybe<Scalars['Boolean']['input']>;
  companyName_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  companyName_not?: InputMaybe<Scalars['String']['input']>;
  companyName_not_contains?: InputMaybe<Scalars['String']['input']>;
  companyName_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  description_contains?: InputMaybe<Scalars['String']['input']>;
  description_exists?: InputMaybe<Scalars['Boolean']['input']>;
  description_not_contains?: InputMaybe<Scalars['String']['input']>;
  endDate?: InputMaybe<Scalars['String']['input']>;
  endDateTime?: InputMaybe<Scalars['DateTime']['input']>;
  endDateTime_exists?: InputMaybe<Scalars['Boolean']['input']>;
  endDateTime_gt?: InputMaybe<Scalars['DateTime']['input']>;
  endDateTime_gte?: InputMaybe<Scalars['DateTime']['input']>;
  endDateTime_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  endDateTime_lt?: InputMaybe<Scalars['DateTime']['input']>;
  endDateTime_lte?: InputMaybe<Scalars['DateTime']['input']>;
  endDateTime_not?: InputMaybe<Scalars['DateTime']['input']>;
  endDateTime_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  endDate_contains?: InputMaybe<Scalars['String']['input']>;
  endDate_exists?: InputMaybe<Scalars['Boolean']['input']>;
  endDate_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  endDate_not?: InputMaybe<Scalars['String']['input']>;
  endDate_not_contains?: InputMaybe<Scalars['String']['input']>;
  endDate_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  startDate?: InputMaybe<Scalars['String']['input']>;
  startDate_contains?: InputMaybe<Scalars['String']['input']>;
  startDate_exists?: InputMaybe<Scalars['Boolean']['input']>;
  startDate_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  startDate_not?: InputMaybe<Scalars['String']['input']>;
  startDate_not_contains?: InputMaybe<Scalars['String']['input']>;
  startDate_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  sys?: InputMaybe<SysFilter>;
};

export type ExperienceCompanyLinkingCollections = {
  __typename?: 'ExperienceCompanyLinkingCollections';
  entryCollection?: Maybe<EntryCollection>;
};


export type ExperienceCompanyLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};

export enum ExperienceCompanyOrder {
  CityAsc = 'city_ASC',
  CityDesc = 'city_DESC',
  CompanyNameAsc = 'companyName_ASC',
  CompanyNameDesc = 'companyName_DESC',
  EndDateTimeAsc = 'endDateTime_ASC',
  EndDateTimeDesc = 'endDateTime_DESC',
  EndDateAsc = 'endDate_ASC',
  EndDateDesc = 'endDate_DESC',
  StartDateAsc = 'startDate_ASC',
  StartDateDesc = 'startDate_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

export enum ImageFormat {
  Avif = 'AVIF',
  /** JPG image format. */
  Jpg = 'JPG',
  /**
   * Progressive JPG format stores multiple passes of an image in progressively higher detail.
   *         When a progressive image is loading, the viewer will first see a lower quality pixelated version which
   *         will gradually improve in detail, until the image is fully downloaded. This is to display an image as
   *         early as possible to make the layout look as designed.
   */
  JpgProgressive = 'JPG_PROGRESSIVE',
  /** PNG image format */
  Png = 'PNG',
  /**
   * 8-bit PNG images support up to 256 colors and weigh less than the standard 24-bit PNG equivalent.
   *         The 8-bit PNG format is mostly used for simple images, such as icons or logos.
   */
  Png8 = 'PNG8',
  /** WebP image format. */
  Webp = 'WEBP'
}

export enum ImageResizeFocus {
  /** Focus the resizing on the bottom. */
  Bottom = 'BOTTOM',
  /** Focus the resizing on the bottom left. */
  BottomLeft = 'BOTTOM_LEFT',
  /** Focus the resizing on the bottom right. */
  BottomRight = 'BOTTOM_RIGHT',
  /** Focus the resizing on the center. */
  Center = 'CENTER',
  /** Focus the resizing on the largest face. */
  Face = 'FACE',
  /** Focus the resizing on the area containing all the faces. */
  Faces = 'FACES',
  /** Focus the resizing on the left. */
  Left = 'LEFT',
  /** Focus the resizing on the right. */
  Right = 'RIGHT',
  /** Focus the resizing on the top. */
  Top = 'TOP',
  /** Focus the resizing on the top left. */
  TopLeft = 'TOP_LEFT',
  /** Focus the resizing on the top right. */
  TopRight = 'TOP_RIGHT'
}

export enum ImageResizeStrategy {
  /** Crops a part of the original image to fit into the specified dimensions. */
  Crop = 'CROP',
  /** Resizes the image to the specified dimensions, cropping the image if needed. */
  Fill = 'FILL',
  /** Resizes the image to fit into the specified dimensions. */
  Fit = 'FIT',
  /**
   * Resizes the image to the specified dimensions, padding the image if needed.
   *         Uses desired background color as padding color.
   */
  Pad = 'PAD',
  /** Resizes the image to the specified dimensions, changing the original aspect ratio if needed. */
  Scale = 'SCALE',
  /** Creates a thumbnail from the image. */
  Thumb = 'THUMB'
}

export type ImageTransformOptions = {
  /**
   * Desired background color, used with corner radius or `PAD` resize strategy.
   *         Defaults to transparent (for `PNG`, `PNG8` and `WEBP`) or white (for `JPG` and `JPG_PROGRESSIVE`).
   */
  backgroundColor?: InputMaybe<Scalars['HexColor']['input']>;
  /**
   * Desired corner radius in pixels.
   *         Results in an image with rounded corners (pass `-1` for a full circle/ellipse).
   *         Defaults to `0`. Uses desired background color as padding color,
   *         unless the format is `JPG` or `JPG_PROGRESSIVE` and resize strategy is `PAD`, then defaults to white.
   */
  cornerRadius?: InputMaybe<Scalars['Int']['input']>;
  /** Desired image format. Defaults to the original image format. */
  format?: InputMaybe<ImageFormat>;
  /** Desired height in pixels. Defaults to the original image height. */
  height?: InputMaybe<Scalars['Dimension']['input']>;
  /**
   * Desired quality of the image in percents.
   *         Used for `PNG8`, `JPG`, `JPG_PROGRESSIVE` and `WEBP` formats.
   */
  quality?: InputMaybe<Scalars['Quality']['input']>;
  /** Desired resize focus area. Defaults to `CENTER`. */
  resizeFocus?: InputMaybe<ImageResizeFocus>;
  /** Desired resize strategy. Defaults to `FIT`. */
  resizeStrategy?: InputMaybe<ImageResizeStrategy>;
  /** Desired width in pixels. Defaults to the original image width. */
  width?: InputMaybe<Scalars['Dimension']['input']>;
};

/** The activities that vaguely make me interesting [See type definition](https://app.contentful.com/spaces/74rjj85nq0nk/content_types/interests) */
export type Interests = Entry & {
  __typename?: 'Interests';
  contentfulMetadata: ContentfulMetadata;
  interest?: Maybe<Scalars['String']['output']>;
  linkedFrom?: Maybe<InterestsLinkingCollections>;
  sys: Sys;
};


/** The activities that vaguely make me interesting [See type definition](https://app.contentful.com/spaces/74rjj85nq0nk/content_types/interests) */
export type InterestsInterestArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** The activities that vaguely make me interesting [See type definition](https://app.contentful.com/spaces/74rjj85nq0nk/content_types/interests) */
export type InterestsLinkedFromArgs = {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type InterestsCollection = {
  __typename?: 'InterestsCollection';
  items: Array<Maybe<Interests>>;
  limit: Scalars['Int']['output'];
  skip: Scalars['Int']['output'];
  total: Scalars['Int']['output'];
};

export type InterestsFilter = {
  AND?: InputMaybe<Array<InputMaybe<InterestsFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<InterestsFilter>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  interest?: InputMaybe<Scalars['String']['input']>;
  interest_contains?: InputMaybe<Scalars['String']['input']>;
  interest_exists?: InputMaybe<Scalars['Boolean']['input']>;
  interest_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  interest_not?: InputMaybe<Scalars['String']['input']>;
  interest_not_contains?: InputMaybe<Scalars['String']['input']>;
  interest_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  sys?: InputMaybe<SysFilter>;
};

export type InterestsLinkingCollections = {
  __typename?: 'InterestsLinkingCollections';
  entryCollection?: Maybe<EntryCollection>;
};


export type InterestsLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};

export enum InterestsOrder {
  InterestAsc = 'interest_ASC',
  InterestDesc = 'interest_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

/** [See type definition](https://app.contentful.com/spaces/74rjj85nq0nk/content_types/person) */
export type Person = Entry & {
  __typename?: 'Person';
  codesandbox?: Maybe<Scalars['String']['output']>;
  company?: Maybe<Scalars['String']['output']>;
  contentfulMetadata: ContentfulMetadata;
  email?: Maybe<Scalars['String']['output']>;
  facebook?: Maybe<Scalars['String']['output']>;
  firstName?: Maybe<Scalars['String']['output']>;
  github?: Maybe<Scalars['String']['output']>;
  image?: Maybe<Asset>;
  lastName?: Maybe<Scalars['String']['output']>;
  linkedFrom?: Maybe<PersonLinkingCollections>;
  name?: Maybe<Scalars['String']['output']>;
  phone?: Maybe<Scalars['String']['output']>;
  shortBio?: Maybe<Scalars['String']['output']>;
  sys: Sys;
  title?: Maybe<Scalars['String']['output']>;
  twitter?: Maybe<Scalars['String']['output']>;
};


/** [See type definition](https://app.contentful.com/spaces/74rjj85nq0nk/content_types/person) */
export type PersonCodesandboxArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/74rjj85nq0nk/content_types/person) */
export type PersonCompanyArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/74rjj85nq0nk/content_types/person) */
export type PersonEmailArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/74rjj85nq0nk/content_types/person) */
export type PersonFacebookArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/74rjj85nq0nk/content_types/person) */
export type PersonFirstNameArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/74rjj85nq0nk/content_types/person) */
export type PersonGithubArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/74rjj85nq0nk/content_types/person) */
export type PersonImageArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/74rjj85nq0nk/content_types/person) */
export type PersonLastNameArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/74rjj85nq0nk/content_types/person) */
export type PersonLinkedFromArgs = {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


/** [See type definition](https://app.contentful.com/spaces/74rjj85nq0nk/content_types/person) */
export type PersonNameArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/74rjj85nq0nk/content_types/person) */
export type PersonPhoneArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/74rjj85nq0nk/content_types/person) */
export type PersonShortBioArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/74rjj85nq0nk/content_types/person) */
export type PersonTitleArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/74rjj85nq0nk/content_types/person) */
export type PersonTwitterArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};

export type PersonCollection = {
  __typename?: 'PersonCollection';
  items: Array<Maybe<Person>>;
  limit: Scalars['Int']['output'];
  skip: Scalars['Int']['output'];
  total: Scalars['Int']['output'];
};

export type PersonFilter = {
  AND?: InputMaybe<Array<InputMaybe<PersonFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<PersonFilter>>>;
  codesandbox?: InputMaybe<Scalars['String']['input']>;
  codesandbox_contains?: InputMaybe<Scalars['String']['input']>;
  codesandbox_exists?: InputMaybe<Scalars['Boolean']['input']>;
  codesandbox_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  codesandbox_not?: InputMaybe<Scalars['String']['input']>;
  codesandbox_not_contains?: InputMaybe<Scalars['String']['input']>;
  codesandbox_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  company?: InputMaybe<Scalars['String']['input']>;
  company_contains?: InputMaybe<Scalars['String']['input']>;
  company_exists?: InputMaybe<Scalars['Boolean']['input']>;
  company_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  company_not?: InputMaybe<Scalars['String']['input']>;
  company_not_contains?: InputMaybe<Scalars['String']['input']>;
  company_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  email?: InputMaybe<Scalars['String']['input']>;
  email_contains?: InputMaybe<Scalars['String']['input']>;
  email_exists?: InputMaybe<Scalars['Boolean']['input']>;
  email_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  email_not?: InputMaybe<Scalars['String']['input']>;
  email_not_contains?: InputMaybe<Scalars['String']['input']>;
  email_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  facebook?: InputMaybe<Scalars['String']['input']>;
  facebook_contains?: InputMaybe<Scalars['String']['input']>;
  facebook_exists?: InputMaybe<Scalars['Boolean']['input']>;
  facebook_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  facebook_not?: InputMaybe<Scalars['String']['input']>;
  facebook_not_contains?: InputMaybe<Scalars['String']['input']>;
  facebook_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  firstName?: InputMaybe<Scalars['String']['input']>;
  firstName_contains?: InputMaybe<Scalars['String']['input']>;
  firstName_exists?: InputMaybe<Scalars['Boolean']['input']>;
  firstName_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  firstName_not?: InputMaybe<Scalars['String']['input']>;
  firstName_not_contains?: InputMaybe<Scalars['String']['input']>;
  firstName_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  github?: InputMaybe<Scalars['String']['input']>;
  github_contains?: InputMaybe<Scalars['String']['input']>;
  github_exists?: InputMaybe<Scalars['Boolean']['input']>;
  github_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  github_not?: InputMaybe<Scalars['String']['input']>;
  github_not_contains?: InputMaybe<Scalars['String']['input']>;
  github_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  image_exists?: InputMaybe<Scalars['Boolean']['input']>;
  lastName?: InputMaybe<Scalars['String']['input']>;
  lastName_contains?: InputMaybe<Scalars['String']['input']>;
  lastName_exists?: InputMaybe<Scalars['Boolean']['input']>;
  lastName_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  lastName_not?: InputMaybe<Scalars['String']['input']>;
  lastName_not_contains?: InputMaybe<Scalars['String']['input']>;
  lastName_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  name?: InputMaybe<Scalars['String']['input']>;
  name_contains?: InputMaybe<Scalars['String']['input']>;
  name_exists?: InputMaybe<Scalars['Boolean']['input']>;
  name_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  name_not?: InputMaybe<Scalars['String']['input']>;
  name_not_contains?: InputMaybe<Scalars['String']['input']>;
  name_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  phone?: InputMaybe<Scalars['String']['input']>;
  phone_contains?: InputMaybe<Scalars['String']['input']>;
  phone_exists?: InputMaybe<Scalars['Boolean']['input']>;
  phone_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  phone_not?: InputMaybe<Scalars['String']['input']>;
  phone_not_contains?: InputMaybe<Scalars['String']['input']>;
  phone_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  shortBio?: InputMaybe<Scalars['String']['input']>;
  shortBio_contains?: InputMaybe<Scalars['String']['input']>;
  shortBio_exists?: InputMaybe<Scalars['Boolean']['input']>;
  shortBio_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  shortBio_not?: InputMaybe<Scalars['String']['input']>;
  shortBio_not_contains?: InputMaybe<Scalars['String']['input']>;
  shortBio_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  sys?: InputMaybe<SysFilter>;
  title?: InputMaybe<Scalars['String']['input']>;
  title_contains?: InputMaybe<Scalars['String']['input']>;
  title_exists?: InputMaybe<Scalars['Boolean']['input']>;
  title_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  title_not?: InputMaybe<Scalars['String']['input']>;
  title_not_contains?: InputMaybe<Scalars['String']['input']>;
  title_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  twitter?: InputMaybe<Scalars['String']['input']>;
  twitter_contains?: InputMaybe<Scalars['String']['input']>;
  twitter_exists?: InputMaybe<Scalars['Boolean']['input']>;
  twitter_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  twitter_not?: InputMaybe<Scalars['String']['input']>;
  twitter_not_contains?: InputMaybe<Scalars['String']['input']>;
  twitter_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type PersonLinkingCollections = {
  __typename?: 'PersonLinkingCollections';
  blogPostCollection?: Maybe<BlogPostCollection>;
  entryCollection?: Maybe<EntryCollection>;
};


export type PersonLinkingCollectionsBlogPostCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<PersonLinkingCollectionsBlogPostCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};


export type PersonLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};

export enum PersonLinkingCollectionsBlogPostCollectionOrder {
  PublishDateAsc = 'publishDate_ASC',
  PublishDateDesc = 'publishDate_DESC',
  SlugAsc = 'slug_ASC',
  SlugDesc = 'slug_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC'
}

export enum PersonOrder {
  CodesandboxAsc = 'codesandbox_ASC',
  CodesandboxDesc = 'codesandbox_DESC',
  CompanyAsc = 'company_ASC',
  CompanyDesc = 'company_DESC',
  EmailAsc = 'email_ASC',
  EmailDesc = 'email_DESC',
  FacebookAsc = 'facebook_ASC',
  FacebookDesc = 'facebook_DESC',
  FirstNameAsc = 'firstName_ASC',
  FirstNameDesc = 'firstName_DESC',
  GithubAsc = 'github_ASC',
  GithubDesc = 'github_DESC',
  LastNameAsc = 'lastName_ASC',
  LastNameDesc = 'lastName_DESC',
  NameAsc = 'name_ASC',
  NameDesc = 'name_DESC',
  PhoneAsc = 'phone_ASC',
  PhoneDesc = 'phone_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC',
  TwitterAsc = 'twitter_ASC',
  TwitterDesc = 'twitter_DESC'
}

export type Query = {
  __typename?: 'Query';
  asset?: Maybe<Asset>;
  assetCollection?: Maybe<AssetCollection>;
  blogPost?: Maybe<BlogPost>;
  blogPostCollection?: Maybe<BlogPostCollection>;
  educationSchool?: Maybe<EducationSchool>;
  educationSchoolCollection?: Maybe<EducationSchoolCollection>;
  entryCollection?: Maybe<EntryCollection>;
  experienceCompany?: Maybe<ExperienceCompany>;
  experienceCompanyCollection?: Maybe<ExperienceCompanyCollection>;
  interests?: Maybe<Interests>;
  interestsCollection?: Maybe<InterestsCollection>;
  person?: Maybe<Person>;
  personCollection?: Maybe<PersonCollection>;
  skill?: Maybe<Skill>;
  skillCollection?: Maybe<SkillCollection>;
};


export type QueryAssetArgs = {
  id: Scalars['String']['input'];
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
};


export type QueryAssetCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<AssetOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<AssetFilter>;
};


export type QueryBlogPostArgs = {
  id: Scalars['String']['input'];
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
};


export type QueryBlogPostCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<BlogPostOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<BlogPostFilter>;
};


export type QueryEducationSchoolArgs = {
  id: Scalars['String']['input'];
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
};


export type QueryEducationSchoolCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<EducationSchoolOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<EducationSchoolFilter>;
};


export type QueryEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<EntryOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<EntryFilter>;
};


export type QueryExperienceCompanyArgs = {
  id: Scalars['String']['input'];
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
};


export type QueryExperienceCompanyCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<ExperienceCompanyOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<ExperienceCompanyFilter>;
};


export type QueryInterestsArgs = {
  id: Scalars['String']['input'];
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
};


export type QueryInterestsCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<InterestsOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<InterestsFilter>;
};


export type QueryPersonArgs = {
  id: Scalars['String']['input'];
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
};


export type QueryPersonCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<PersonOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<PersonFilter>;
};


export type QuerySkillArgs = {
  id: Scalars['String']['input'];
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
};


export type QuerySkillCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<SkillOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<SkillFilter>;
};

export type ResourceLink = {
  __typename?: 'ResourceLink';
  sys: ResourceSys;
};

export type ResourceSys = {
  __typename?: 'ResourceSys';
  linkType: Scalars['String']['output'];
  type: Scalars['String']['output'];
  urn: Scalars['String']['output'];
};

/** familiarity with tech stack [See type definition](https://app.contentful.com/spaces/74rjj85nq0nk/content_types/skill) */
export type Skill = Entry & {
  __typename?: 'Skill';
  content?: Maybe<SkillContent>;
  contentfulMetadata: ContentfulMetadata;
  icon?: Maybe<Asset>;
  linkedFrom?: Maybe<SkillLinkingCollections>;
  order?: Maybe<Scalars['Int']['output']>;
  rating?: Maybe<Scalars['Int']['output']>;
  skillName?: Maybe<Scalars['String']['output']>;
  slug?: Maybe<Scalars['String']['output']>;
  sys: Sys;
};


/** familiarity with tech stack [See type definition](https://app.contentful.com/spaces/74rjj85nq0nk/content_types/skill) */
export type SkillContentArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** familiarity with tech stack [See type definition](https://app.contentful.com/spaces/74rjj85nq0nk/content_types/skill) */
export type SkillIconArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
};


/** familiarity with tech stack [See type definition](https://app.contentful.com/spaces/74rjj85nq0nk/content_types/skill) */
export type SkillLinkedFromArgs = {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


/** familiarity with tech stack [See type definition](https://app.contentful.com/spaces/74rjj85nq0nk/content_types/skill) */
export type SkillOrderArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** familiarity with tech stack [See type definition](https://app.contentful.com/spaces/74rjj85nq0nk/content_types/skill) */
export type SkillRatingArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** familiarity with tech stack [See type definition](https://app.contentful.com/spaces/74rjj85nq0nk/content_types/skill) */
export type SkillSkillNameArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** familiarity with tech stack [See type definition](https://app.contentful.com/spaces/74rjj85nq0nk/content_types/skill) */
export type SkillSlugArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};

export type SkillCollection = {
  __typename?: 'SkillCollection';
  items: Array<Maybe<Skill>>;
  limit: Scalars['Int']['output'];
  skip: Scalars['Int']['output'];
  total: Scalars['Int']['output'];
};

export type SkillContent = {
  __typename?: 'SkillContent';
  json: Scalars['JSON']['output'];
  links: SkillContentLinks;
};

export type SkillContentAssets = {
  __typename?: 'SkillContentAssets';
  block: Array<Maybe<Asset>>;
  hyperlink: Array<Maybe<Asset>>;
};

export type SkillContentEntries = {
  __typename?: 'SkillContentEntries';
  block: Array<Maybe<Entry>>;
  hyperlink: Array<Maybe<Entry>>;
  inline: Array<Maybe<Entry>>;
};

export type SkillContentLinks = {
  __typename?: 'SkillContentLinks';
  assets: SkillContentAssets;
  entries: SkillContentEntries;
  resources: SkillContentResources;
};

export type SkillContentResources = {
  __typename?: 'SkillContentResources';
  block: Array<ResourceLink>;
  hyperlink: Array<ResourceLink>;
  inline: Array<ResourceLink>;
};

export type SkillFilter = {
  AND?: InputMaybe<Array<InputMaybe<SkillFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<SkillFilter>>>;
  content_contains?: InputMaybe<Scalars['String']['input']>;
  content_exists?: InputMaybe<Scalars['Boolean']['input']>;
  content_not_contains?: InputMaybe<Scalars['String']['input']>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  icon_exists?: InputMaybe<Scalars['Boolean']['input']>;
  order?: InputMaybe<Scalars['Int']['input']>;
  order_exists?: InputMaybe<Scalars['Boolean']['input']>;
  order_gt?: InputMaybe<Scalars['Int']['input']>;
  order_gte?: InputMaybe<Scalars['Int']['input']>;
  order_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  order_lt?: InputMaybe<Scalars['Int']['input']>;
  order_lte?: InputMaybe<Scalars['Int']['input']>;
  order_not?: InputMaybe<Scalars['Int']['input']>;
  order_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  rating?: InputMaybe<Scalars['Int']['input']>;
  rating_exists?: InputMaybe<Scalars['Boolean']['input']>;
  rating_gt?: InputMaybe<Scalars['Int']['input']>;
  rating_gte?: InputMaybe<Scalars['Int']['input']>;
  rating_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  rating_lt?: InputMaybe<Scalars['Int']['input']>;
  rating_lte?: InputMaybe<Scalars['Int']['input']>;
  rating_not?: InputMaybe<Scalars['Int']['input']>;
  rating_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  skillName?: InputMaybe<Scalars['String']['input']>;
  skillName_contains?: InputMaybe<Scalars['String']['input']>;
  skillName_exists?: InputMaybe<Scalars['Boolean']['input']>;
  skillName_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  skillName_not?: InputMaybe<Scalars['String']['input']>;
  skillName_not_contains?: InputMaybe<Scalars['String']['input']>;
  skillName_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  slug?: InputMaybe<Scalars['String']['input']>;
  slug_contains?: InputMaybe<Scalars['String']['input']>;
  slug_exists?: InputMaybe<Scalars['Boolean']['input']>;
  slug_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  slug_not?: InputMaybe<Scalars['String']['input']>;
  slug_not_contains?: InputMaybe<Scalars['String']['input']>;
  slug_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  sys?: InputMaybe<SysFilter>;
};

export type SkillLinkingCollections = {
  __typename?: 'SkillLinkingCollections';
  entryCollection?: Maybe<EntryCollection>;
};


export type SkillLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};

export enum SkillOrder {
  OrderAsc = 'order_ASC',
  OrderDesc = 'order_DESC',
  RatingAsc = 'rating_ASC',
  RatingDesc = 'rating_DESC',
  SkillNameAsc = 'skillName_ASC',
  SkillNameDesc = 'skillName_DESC',
  SlugAsc = 'slug_ASC',
  SlugDesc = 'slug_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

export type Sys = {
  __typename?: 'Sys';
  environmentId: Scalars['String']['output'];
  firstPublishedAt?: Maybe<Scalars['DateTime']['output']>;
  id: Scalars['String']['output'];
  publishedAt?: Maybe<Scalars['DateTime']['output']>;
  publishedVersion?: Maybe<Scalars['Int']['output']>;
  spaceId: Scalars['String']['output'];
};

export type SysFilter = {
  firstPublishedAt?: InputMaybe<Scalars['DateTime']['input']>;
  firstPublishedAt_exists?: InputMaybe<Scalars['Boolean']['input']>;
  firstPublishedAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  firstPublishedAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  firstPublishedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  firstPublishedAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  firstPublishedAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  firstPublishedAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  firstPublishedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  id?: InputMaybe<Scalars['String']['input']>;
  id_contains?: InputMaybe<Scalars['String']['input']>;
  id_exists?: InputMaybe<Scalars['Boolean']['input']>;
  id_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  id_not?: InputMaybe<Scalars['String']['input']>;
  id_not_contains?: InputMaybe<Scalars['String']['input']>;
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  publishedAt?: InputMaybe<Scalars['DateTime']['input']>;
  publishedAt_exists?: InputMaybe<Scalars['Boolean']['input']>;
  publishedAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  publishedAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  publishedAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  publishedAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  publishedAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  publishedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  publishedVersion?: InputMaybe<Scalars['Float']['input']>;
  publishedVersion_exists?: InputMaybe<Scalars['Boolean']['input']>;
  publishedVersion_gt?: InputMaybe<Scalars['Float']['input']>;
  publishedVersion_gte?: InputMaybe<Scalars['Float']['input']>;
  publishedVersion_in?: InputMaybe<Array<InputMaybe<Scalars['Float']['input']>>>;
  publishedVersion_lt?: InputMaybe<Scalars['Float']['input']>;
  publishedVersion_lte?: InputMaybe<Scalars['Float']['input']>;
  publishedVersion_not?: InputMaybe<Scalars['Float']['input']>;
  publishedVersion_not_in?: InputMaybe<Array<InputMaybe<Scalars['Float']['input']>>>;
};

export type CfPersonNestedFilter = {
  AND?: InputMaybe<Array<InputMaybe<CfPersonNestedFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<CfPersonNestedFilter>>>;
  codesandbox?: InputMaybe<Scalars['String']['input']>;
  codesandbox_contains?: InputMaybe<Scalars['String']['input']>;
  codesandbox_exists?: InputMaybe<Scalars['Boolean']['input']>;
  codesandbox_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  codesandbox_not?: InputMaybe<Scalars['String']['input']>;
  codesandbox_not_contains?: InputMaybe<Scalars['String']['input']>;
  codesandbox_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  company?: InputMaybe<Scalars['String']['input']>;
  company_contains?: InputMaybe<Scalars['String']['input']>;
  company_exists?: InputMaybe<Scalars['Boolean']['input']>;
  company_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  company_not?: InputMaybe<Scalars['String']['input']>;
  company_not_contains?: InputMaybe<Scalars['String']['input']>;
  company_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  email?: InputMaybe<Scalars['String']['input']>;
  email_contains?: InputMaybe<Scalars['String']['input']>;
  email_exists?: InputMaybe<Scalars['Boolean']['input']>;
  email_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  email_not?: InputMaybe<Scalars['String']['input']>;
  email_not_contains?: InputMaybe<Scalars['String']['input']>;
  email_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  facebook?: InputMaybe<Scalars['String']['input']>;
  facebook_contains?: InputMaybe<Scalars['String']['input']>;
  facebook_exists?: InputMaybe<Scalars['Boolean']['input']>;
  facebook_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  facebook_not?: InputMaybe<Scalars['String']['input']>;
  facebook_not_contains?: InputMaybe<Scalars['String']['input']>;
  facebook_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  firstName?: InputMaybe<Scalars['String']['input']>;
  firstName_contains?: InputMaybe<Scalars['String']['input']>;
  firstName_exists?: InputMaybe<Scalars['Boolean']['input']>;
  firstName_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  firstName_not?: InputMaybe<Scalars['String']['input']>;
  firstName_not_contains?: InputMaybe<Scalars['String']['input']>;
  firstName_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  github?: InputMaybe<Scalars['String']['input']>;
  github_contains?: InputMaybe<Scalars['String']['input']>;
  github_exists?: InputMaybe<Scalars['Boolean']['input']>;
  github_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  github_not?: InputMaybe<Scalars['String']['input']>;
  github_not_contains?: InputMaybe<Scalars['String']['input']>;
  github_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  image_exists?: InputMaybe<Scalars['Boolean']['input']>;
  lastName?: InputMaybe<Scalars['String']['input']>;
  lastName_contains?: InputMaybe<Scalars['String']['input']>;
  lastName_exists?: InputMaybe<Scalars['Boolean']['input']>;
  lastName_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  lastName_not?: InputMaybe<Scalars['String']['input']>;
  lastName_not_contains?: InputMaybe<Scalars['String']['input']>;
  lastName_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  name?: InputMaybe<Scalars['String']['input']>;
  name_contains?: InputMaybe<Scalars['String']['input']>;
  name_exists?: InputMaybe<Scalars['Boolean']['input']>;
  name_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  name_not?: InputMaybe<Scalars['String']['input']>;
  name_not_contains?: InputMaybe<Scalars['String']['input']>;
  name_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  phone?: InputMaybe<Scalars['String']['input']>;
  phone_contains?: InputMaybe<Scalars['String']['input']>;
  phone_exists?: InputMaybe<Scalars['Boolean']['input']>;
  phone_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  phone_not?: InputMaybe<Scalars['String']['input']>;
  phone_not_contains?: InputMaybe<Scalars['String']['input']>;
  phone_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  shortBio?: InputMaybe<Scalars['String']['input']>;
  shortBio_contains?: InputMaybe<Scalars['String']['input']>;
  shortBio_exists?: InputMaybe<Scalars['Boolean']['input']>;
  shortBio_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  shortBio_not?: InputMaybe<Scalars['String']['input']>;
  shortBio_not_contains?: InputMaybe<Scalars['String']['input']>;
  shortBio_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  sys?: InputMaybe<SysFilter>;
  title?: InputMaybe<Scalars['String']['input']>;
  title_contains?: InputMaybe<Scalars['String']['input']>;
  title_exists?: InputMaybe<Scalars['Boolean']['input']>;
  title_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  title_not?: InputMaybe<Scalars['String']['input']>;
  title_not_contains?: InputMaybe<Scalars['String']['input']>;
  title_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  twitter?: InputMaybe<Scalars['String']['input']>;
  twitter_contains?: InputMaybe<Scalars['String']['input']>;
  twitter_exists?: InputMaybe<Scalars['Boolean']['input']>;
  twitter_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  twitter_not?: InputMaybe<Scalars['String']['input']>;
  twitter_not_contains?: InputMaybe<Scalars['String']['input']>;
  twitter_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};
