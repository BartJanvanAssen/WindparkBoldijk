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
  Date: { input: any; output: any; }
  DateTime: { input: any; output: any; }
  Hex: { input: any; output: any; }
  Json: { input: any; output: any; }
  Long: { input: any; output: any; }
  RGBAHue: { input: any; output: any; }
  RGBATransparency: { input: any; output: any; }
  RichTextAST: { input: any; output: any; }
};

export type Afbeelding = Entity & {
  __typename?: 'Afbeelding';
  afbeelding?: Maybe<Asset>;
  /** The unique identifier */
  id: Scalars['ID']['output'];
  /** System stage field */
  stage: Stage;
};


export type AfbeeldingAfbeeldingArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>;
  locales?: InputMaybe<Array<Locale>>;
  where?: InputMaybe<AssetSingleRelationWhereInput>;
};

export type AfbeeldingConnectInput = {
  /** Allow to specify document position in list of connected documents, will default to appending at end of list */
  position?: InputMaybe<ConnectPositionInput>;
  /** Document to connect */
  where: AfbeeldingWhereUniqueInput;
};

/** A connection to a list of items. */
export type AfbeeldingConnection = {
  __typename?: 'AfbeeldingConnection';
  aggregate: Aggregate;
  /** A list of edges. */
  edges: Array<AfbeeldingEdge>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

export type AfbeeldingCreateInput = {
  afbeelding?: InputMaybe<AssetCreateOneInlineInput>;
};

export type AfbeeldingCreateManyInlineInput = {
  /** Create and connect multiple existing Afbeelding documents */
  create?: InputMaybe<Array<AfbeeldingCreateInput>>;
};

export type AfbeeldingCreateOneInlineInput = {
  /** Create and connect one Afbeelding document */
  create?: InputMaybe<AfbeeldingCreateInput>;
};

export type AfbeeldingCreateWithPositionInput = {
  /** Document to create */
  data: AfbeeldingCreateInput;
  /** Position in the list of existing component instances, will default to appending at the end of list */
  position?: InputMaybe<ConnectPositionInput>;
};

/** An edge in a connection. */
export type AfbeeldingEdge = {
  __typename?: 'AfbeeldingEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge. */
  node: Afbeelding;
};

/** Identifies documents */
export type AfbeeldingManyWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<AfbeeldingWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<AfbeeldingWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<AfbeeldingWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']['input']>;
  afbeelding?: InputMaybe<AssetWhereInput>;
  id?: InputMaybe<Scalars['ID']['input']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  id_not?: InputMaybe<Scalars['ID']['input']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']['input']>;
};

export enum AfbeeldingOrderByInput {
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC'
}

export type AfbeeldingParent = Content;

export type AfbeeldingParentConnectInput = {
  Content?: InputMaybe<ContentConnectInput>;
};

export type AfbeeldingParentCreateInput = {
  Content?: InputMaybe<ContentCreateInput>;
};

export type AfbeeldingParentCreateManyInlineInput = {
  /** Create and connect multiple existing AfbeeldingParent documents */
  create?: InputMaybe<Array<AfbeeldingParentCreateInput>>;
};

export type AfbeeldingParentCreateOneInlineInput = {
  /** Create and connect one AfbeeldingParent document */
  create?: InputMaybe<AfbeeldingParentCreateInput>;
};

export type AfbeeldingParentCreateWithPositionInput = {
  Content?: InputMaybe<ContentCreateWithPositionInput>;
};

export type AfbeeldingParentUpdateInput = {
  Content?: InputMaybe<ContentUpdateInput>;
};

export type AfbeeldingParentUpdateManyInlineInput = {
  /** Create and connect multiple AfbeeldingParent component instances */
  create?: InputMaybe<Array<AfbeeldingParentCreateWithPositionInput>>;
  /** Delete multiple AfbeeldingParent documents */
  delete?: InputMaybe<Array<AfbeeldingParentWhereUniqueInput>>;
  /** Update multiple AfbeeldingParent component instances */
  update?: InputMaybe<Array<AfbeeldingParentUpdateWithNestedWhereUniqueAndPositionInput>>;
  /** Upsert multiple AfbeeldingParent component instances */
  upsert?: InputMaybe<Array<AfbeeldingParentUpsertWithNestedWhereUniqueAndPositionInput>>;
};

export type AfbeeldingParentUpdateManyWithNestedWhereInput = {
  Content?: InputMaybe<ContentUpdateManyWithNestedWhereInput>;
};

export type AfbeeldingParentUpdateOneInlineInput = {
  /** Create and connect one AfbeeldingParent document */
  create?: InputMaybe<AfbeeldingParentCreateInput>;
  /** Delete currently connected AfbeeldingParent document */
  delete?: InputMaybe<Scalars['Boolean']['input']>;
  /** Update single AfbeeldingParent document */
  update?: InputMaybe<AfbeeldingParentUpdateWithNestedWhereUniqueInput>;
  /** Upsert single AfbeeldingParent document */
  upsert?: InputMaybe<AfbeeldingParentUpsertWithNestedWhereUniqueInput>;
};

export type AfbeeldingParentUpdateWithNestedWhereUniqueAndPositionInput = {
  Content?: InputMaybe<ContentUpdateWithNestedWhereUniqueAndPositionInput>;
};

export type AfbeeldingParentUpdateWithNestedWhereUniqueInput = {
  Content?: InputMaybe<ContentUpdateWithNestedWhereUniqueInput>;
};

export type AfbeeldingParentUpsertWithNestedWhereUniqueAndPositionInput = {
  Content?: InputMaybe<ContentUpsertWithNestedWhereUniqueAndPositionInput>;
};

export type AfbeeldingParentUpsertWithNestedWhereUniqueInput = {
  Content?: InputMaybe<ContentUpsertWithNestedWhereUniqueInput>;
};

export type AfbeeldingParentWhereInput = {
  Content?: InputMaybe<ContentWhereInput>;
};

export type AfbeeldingParentWhereUniqueInput = {
  Content?: InputMaybe<ContentWhereUniqueInput>;
};

export type AfbeeldingUpdateInput = {
  afbeelding?: InputMaybe<AssetUpdateOneInlineInput>;
};

export type AfbeeldingUpdateManyInlineInput = {
  /** Create and connect multiple Afbeelding component instances */
  create?: InputMaybe<Array<AfbeeldingCreateWithPositionInput>>;
  /** Delete multiple Afbeelding documents */
  delete?: InputMaybe<Array<AfbeeldingWhereUniqueInput>>;
  /** Update multiple Afbeelding component instances */
  update?: InputMaybe<Array<AfbeeldingUpdateWithNestedWhereUniqueAndPositionInput>>;
  /** Upsert multiple Afbeelding component instances */
  upsert?: InputMaybe<Array<AfbeeldingUpsertWithNestedWhereUniqueAndPositionInput>>;
};

export type AfbeeldingUpdateManyInput = {
  /** No fields in updateMany data input */
  _?: InputMaybe<Scalars['String']['input']>;
};

export type AfbeeldingUpdateManyWithNestedWhereInput = {
  /** Update many input */
  data: AfbeeldingUpdateManyInput;
  /** Document search */
  where: AfbeeldingWhereInput;
};

export type AfbeeldingUpdateOneInlineInput = {
  /** Create and connect one Afbeelding document */
  create?: InputMaybe<AfbeeldingCreateInput>;
  /** Delete currently connected Afbeelding document */
  delete?: InputMaybe<Scalars['Boolean']['input']>;
  /** Update single Afbeelding document */
  update?: InputMaybe<AfbeeldingUpdateWithNestedWhereUniqueInput>;
  /** Upsert single Afbeelding document */
  upsert?: InputMaybe<AfbeeldingUpsertWithNestedWhereUniqueInput>;
};

export type AfbeeldingUpdateWithNestedWhereUniqueAndPositionInput = {
  /** Document to update */
  data?: InputMaybe<AfbeeldingUpdateInput>;
  /** Position in the list of existing component instances, will default to appending at the end of list */
  position?: InputMaybe<ConnectPositionInput>;
  /** Unique component instance search */
  where: AfbeeldingWhereUniqueInput;
};

export type AfbeeldingUpdateWithNestedWhereUniqueInput = {
  /** Document to update */
  data: AfbeeldingUpdateInput;
  /** Unique document search */
  where: AfbeeldingWhereUniqueInput;
};

export type AfbeeldingUpsertInput = {
  /** Create document if it didn't exist */
  create: AfbeeldingCreateInput;
  /** Update document if it exists */
  update: AfbeeldingUpdateInput;
};

export type AfbeeldingUpsertWithNestedWhereUniqueAndPositionInput = {
  /** Document to upsert */
  data?: InputMaybe<AfbeeldingUpsertInput>;
  /** Position in the list of existing component instances, will default to appending at the end of list */
  position?: InputMaybe<ConnectPositionInput>;
  /** Unique component instance search */
  where: AfbeeldingWhereUniqueInput;
};

export type AfbeeldingUpsertWithNestedWhereUniqueInput = {
  /** Upsert data */
  data: AfbeeldingUpsertInput;
  /** Unique document search */
  where: AfbeeldingWhereUniqueInput;
};

/** Identifies documents */
export type AfbeeldingWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<AfbeeldingWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<AfbeeldingWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<AfbeeldingWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']['input']>;
  afbeelding?: InputMaybe<AssetWhereInput>;
  id?: InputMaybe<Scalars['ID']['input']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  id_not?: InputMaybe<Scalars['ID']['input']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']['input']>;
};

/** References Afbeelding record uniquely */
export type AfbeeldingWhereUniqueInput = {
  id?: InputMaybe<Scalars['ID']['input']>;
};

export type Aggregate = {
  __typename?: 'Aggregate';
  count: Scalars['Int']['output'];
};

/** Asset system model */
export type Asset = Entity & Node & {
  __typename?: 'Asset';
  bestandenBlogPost: Array<BlogPost>;
  bestandenProject: Array<Project>;
  /** The time the document was created */
  createdAt: Scalars['DateTime']['output'];
  /** User that created this document */
  createdBy?: Maybe<User>;
  /** Get the document in other stages */
  documentInStages: Array<Asset>;
  /** The file name */
  fileName: Scalars['String']['output'];
  fotoBestuur: Array<Bestuur>;
  fotoBlogPost: Array<BlogPost>;
  fotosProject: Array<Project>;
  /** The file handle */
  handle: Scalars['String']['output'];
  /** The height of the file */
  height?: Maybe<Scalars['Float']['output']>;
  /** List of Asset versions */
  history: Array<Version>;
  /** The unique identifier */
  id: Scalars['ID']['output'];
  /** System Locale field */
  locale: Locale;
  /** Get the other localizations for this document */
  localizations: Array<Asset>;
  /** The mime type of the file */
  mimeType?: Maybe<Scalars['String']['output']>;
  /** The time the document was published. Null on documents in draft stage. */
  publishedAt?: Maybe<Scalars['DateTime']['output']>;
  /** User that last published this document */
  publishedBy?: Maybe<User>;
  scheduledIn: Array<ScheduledOperation>;
  /** The file size */
  size?: Maybe<Scalars['Float']['output']>;
  /** System stage field */
  stage: Stage;
  /** The time the document was updated */
  updatedAt: Scalars['DateTime']['output'];
  /** User that last updated this document */
  updatedBy?: Maybe<User>;
  /** Returns information you need to upload the asset. The type of upload is dependant on what you pass into asset creations as upload type. */
  upload?: Maybe<AssetUpload>;
  /** Get the url for the asset with provided transformations applied. */
  url: Scalars['String']['output'];
  /** The file width */
  width?: Maybe<Scalars['Float']['output']>;
};


/** Asset system model */
export type AssetBestandenBlogPostArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  locales?: InputMaybe<Array<Locale>>;
  orderBy?: InputMaybe<BlogPostOrderByInput>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<BlogPostWhereInput>;
};


/** Asset system model */
export type AssetBestandenProjectArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  locales?: InputMaybe<Array<Locale>>;
  orderBy?: InputMaybe<ProjectOrderByInput>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<ProjectWhereInput>;
};


/** Asset system model */
export type AssetCreatedAtArgs = {
  variation?: SystemDateTimeFieldVariation;
};


/** Asset system model */
export type AssetCreatedByArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>;
  locales?: InputMaybe<Array<Locale>>;
};


/** Asset system model */
export type AssetDocumentInStagesArgs = {
  includeCurrent?: Scalars['Boolean']['input'];
  inheritLocale?: Scalars['Boolean']['input'];
  stages?: Array<Stage>;
};


/** Asset system model */
export type AssetFotoBestuurArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  locales?: InputMaybe<Array<Locale>>;
  orderBy?: InputMaybe<BestuurOrderByInput>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<BestuurWhereInput>;
};


/** Asset system model */
export type AssetFotoBlogPostArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  locales?: InputMaybe<Array<Locale>>;
  orderBy?: InputMaybe<BlogPostOrderByInput>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<BlogPostWhereInput>;
};


/** Asset system model */
export type AssetFotosProjectArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  locales?: InputMaybe<Array<Locale>>;
  orderBy?: InputMaybe<ProjectOrderByInput>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<ProjectWhereInput>;
};


/** Asset system model */
export type AssetHistoryArgs = {
  limit?: Scalars['Int']['input'];
  skip?: Scalars['Int']['input'];
  stageOverride?: InputMaybe<Stage>;
};


/** Asset system model */
export type AssetLocalizationsArgs = {
  includeCurrent?: Scalars['Boolean']['input'];
  locales?: Array<Locale>;
};


/** Asset system model */
export type AssetPublishedAtArgs = {
  variation?: SystemDateTimeFieldVariation;
};


/** Asset system model */
export type AssetPublishedByArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>;
  locales?: InputMaybe<Array<Locale>>;
};


/** Asset system model */
export type AssetScheduledInArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  locales?: InputMaybe<Array<Locale>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<ScheduledOperationWhereInput>;
};


/** Asset system model */
export type AssetUpdatedAtArgs = {
  variation?: SystemDateTimeFieldVariation;
};


/** Asset system model */
export type AssetUpdatedByArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>;
  locales?: InputMaybe<Array<Locale>>;
};


/** Asset system model */
export type AssetUrlArgs = {
  transformation?: InputMaybe<AssetTransformationInput>;
};

export type AssetConnectInput = {
  /** Allow to specify document position in list of connected documents, will default to appending at end of list */
  position?: InputMaybe<ConnectPositionInput>;
  /** Document to connect */
  where: AssetWhereUniqueInput;
};

/** A connection to a list of items. */
export type AssetConnection = {
  __typename?: 'AssetConnection';
  aggregate: Aggregate;
  /** A list of edges. */
  edges: Array<AssetEdge>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

export type AssetCreateInput = {
  afbeelding2Hero?: InputMaybe<HeroCreateManyInlineInput>;
  afbeelding3Hero?: InputMaybe<HeroCreateManyInlineInput>;
  afbeelding4Hero?: InputMaybe<HeroCreateManyInlineInput>;
  afbeelding5Hero?: InputMaybe<HeroCreateManyInlineInput>;
  afbeeldingAfbeelding?: InputMaybe<AfbeeldingCreateManyInlineInput>;
  afbeeldingContentBlok?: InputMaybe<ContentBlokCreateManyInlineInput>;
  afbeeldingFormulier?: InputMaybe<FormulierCreateManyInlineInput>;
  afbeeldingHero?: InputMaybe<HeroCreateManyInlineInput>;
  afbeeldingTekstMetAfbeelding?: InputMaybe<TekstMetAfbeeldingCreateManyInlineInput>;
  bestandenBlogPost?: InputMaybe<BlogPostCreateManyInlineInput>;
  bestandenProject?: InputMaybe<ProjectCreateManyInlineInput>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  fileName?: InputMaybe<Scalars['String']['input']>;
  fotoBestuur?: InputMaybe<BestuurCreateManyInlineInput>;
  fotoBlogPost?: InputMaybe<BlogPostCreateManyInlineInput>;
  fotosProject?: InputMaybe<ProjectCreateManyInlineInput>;
  imageQuote?: InputMaybe<QuoteCreateManyInlineInput>;
  /** Inline mutations for managing document localizations excluding the default locale */
  localizations?: InputMaybe<AssetCreateLocalizationsInput>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** Optionally the system can upload a file for you, for that you need to provide a publicly accessible url */
  uploadUrl?: InputMaybe<Scalars['String']['input']>;
};

export type AssetCreateLocalizationDataInput = {
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  fileName?: InputMaybe<Scalars['String']['input']>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** Optionally the system can upload a file for you, for that you need to provide a publicly accessible url */
  uploadUrl?: InputMaybe<Scalars['String']['input']>;
};

export type AssetCreateLocalizationInput = {
  /** Localization input */
  data: AssetCreateLocalizationDataInput;
  locale: Locale;
};

export type AssetCreateLocalizationsInput = {
  /** Create localizations for the newly-created document */
  create?: InputMaybe<Array<AssetCreateLocalizationInput>>;
};

export type AssetCreateManyInlineInput = {
  /** Connect multiple existing Asset documents */
  connect?: InputMaybe<Array<AssetWhereUniqueInput>>;
  /** Create and connect multiple existing Asset documents */
  create?: InputMaybe<Array<AssetCreateInput>>;
};

export type AssetCreateOneInlineInput = {
  /** Connect one existing Asset document */
  connect?: InputMaybe<AssetWhereUniqueInput>;
  /** Create and connect one Asset document */
  create?: InputMaybe<AssetCreateInput>;
};

/** An edge in a connection. */
export type AssetEdge = {
  __typename?: 'AssetEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge. */
  node: Asset;
};

/** Identifies documents */
export type AssetManyWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<AssetWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<AssetWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<AssetWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']['input']>;
  bestandenBlogPost_every?: InputMaybe<BlogPostWhereInput>;
  bestandenBlogPost_none?: InputMaybe<BlogPostWhereInput>;
  bestandenBlogPost_some?: InputMaybe<BlogPostWhereInput>;
  bestandenProject_every?: InputMaybe<ProjectWhereInput>;
  bestandenProject_none?: InputMaybe<ProjectWhereInput>;
  bestandenProject_some?: InputMaybe<ProjectWhereInput>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  createdAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  createdBy?: InputMaybe<UserWhereInput>;
  documentInStages_every?: InputMaybe<AssetWhereStageInput>;
  documentInStages_none?: InputMaybe<AssetWhereStageInput>;
  documentInStages_some?: InputMaybe<AssetWhereStageInput>;
  fotoBestuur_every?: InputMaybe<BestuurWhereInput>;
  fotoBestuur_none?: InputMaybe<BestuurWhereInput>;
  fotoBestuur_some?: InputMaybe<BestuurWhereInput>;
  fotoBlogPost_every?: InputMaybe<BlogPostWhereInput>;
  fotoBlogPost_none?: InputMaybe<BlogPostWhereInput>;
  fotoBlogPost_some?: InputMaybe<BlogPostWhereInput>;
  fotosProject_every?: InputMaybe<ProjectWhereInput>;
  fotosProject_none?: InputMaybe<ProjectWhereInput>;
  fotosProject_some?: InputMaybe<ProjectWhereInput>;
  id?: InputMaybe<Scalars['ID']['input']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  id_not?: InputMaybe<Scalars['ID']['input']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']['input']>;
  publishedAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  publishedAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  publishedBy?: InputMaybe<UserWhereInput>;
  scheduledIn_every?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_none?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_some?: InputMaybe<ScheduledOperationWhereInput>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  updatedAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  updatedBy?: InputMaybe<UserWhereInput>;
  upload?: InputMaybe<AssetUploadWhereInput>;
};

export enum AssetOrderByInput {
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  FileNameAsc = 'fileName_ASC',
  FileNameDesc = 'fileName_DESC',
  HandleAsc = 'handle_ASC',
  HandleDesc = 'handle_DESC',
  HeightAsc = 'height_ASC',
  HeightDesc = 'height_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  MimeTypeAsc = 'mimeType_ASC',
  MimeTypeDesc = 'mimeType_DESC',
  PublishedAtAsc = 'publishedAt_ASC',
  PublishedAtDesc = 'publishedAt_DESC',
  SizeAsc = 'size_ASC',
  SizeDesc = 'size_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC',
  WidthAsc = 'width_ASC',
  WidthDesc = 'width_DESC'
}

/** Identifies documents */
export type AssetSingleRelationWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<AssetSingleRelationWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<AssetSingleRelationWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<AssetSingleRelationWhereInput>>;
  upload?: InputMaybe<AssetUploadWhereInput>;
};

/** Transformations for Assets */
export type AssetTransformationInput = {
  document?: InputMaybe<DocumentTransformationInput>;
  image?: InputMaybe<ImageTransformationInput>;
  /** Pass true if you want to validate the passed transformation parameters */
  validateOptions?: InputMaybe<Scalars['Boolean']['input']>;
};

export type AssetUpdateInput = {
  afbeelding2Hero?: InputMaybe<HeroUpdateManyInlineInput>;
  afbeelding3Hero?: InputMaybe<HeroUpdateManyInlineInput>;
  afbeelding4Hero?: InputMaybe<HeroUpdateManyInlineInput>;
  afbeelding5Hero?: InputMaybe<HeroUpdateManyInlineInput>;
  afbeeldingAfbeelding?: InputMaybe<AfbeeldingUpdateManyInlineInput>;
  afbeeldingContentBlok?: InputMaybe<ContentBlokUpdateManyInlineInput>;
  afbeeldingFormulier?: InputMaybe<FormulierUpdateManyInlineInput>;
  afbeeldingHero?: InputMaybe<HeroUpdateManyInlineInput>;
  afbeeldingTekstMetAfbeelding?: InputMaybe<TekstMetAfbeeldingUpdateManyInlineInput>;
  bestandenBlogPost?: InputMaybe<BlogPostUpdateManyInlineInput>;
  bestandenProject?: InputMaybe<ProjectUpdateManyInlineInput>;
  fileName?: InputMaybe<Scalars['String']['input']>;
  fotoBestuur?: InputMaybe<BestuurUpdateManyInlineInput>;
  fotoBlogPost?: InputMaybe<BlogPostUpdateManyInlineInput>;
  fotosProject?: InputMaybe<ProjectUpdateManyInlineInput>;
  imageQuote?: InputMaybe<QuoteUpdateManyInlineInput>;
  /** Manage document localizations */
  localizations?: InputMaybe<AssetUpdateLocalizationsInput>;
  /** Use this to define if its a reupload for the asset */
  reUpload?: InputMaybe<Scalars['Boolean']['input']>;
  /** Optionally the system can upload a file for you, for that you need to provide a publicly accessible url */
  uploadUrl?: InputMaybe<Scalars['String']['input']>;
};

export type AssetUpdateLocalizationDataInput = {
  fileName?: InputMaybe<Scalars['String']['input']>;
  /** Use this to define if its a reupload for the asset */
  reUpload?: InputMaybe<Scalars['Boolean']['input']>;
  /** Optionally the system can upload a file for you, for that you need to provide a publicly accessible url */
  uploadUrl?: InputMaybe<Scalars['String']['input']>;
};

export type AssetUpdateLocalizationInput = {
  data: AssetUpdateLocalizationDataInput;
  locale: Locale;
};

export type AssetUpdateLocalizationsInput = {
  /** Localizations to create */
  create?: InputMaybe<Array<AssetCreateLocalizationInput>>;
  /** Localizations to delete */
  delete?: InputMaybe<Array<Locale>>;
  /** Localizations to update */
  update?: InputMaybe<Array<AssetUpdateLocalizationInput>>;
  upsert?: InputMaybe<Array<AssetUpsertLocalizationInput>>;
};

export type AssetUpdateManyInlineInput = {
  /** Connect multiple existing Asset documents */
  connect?: InputMaybe<Array<AssetConnectInput>>;
  /** Create and connect multiple Asset documents */
  create?: InputMaybe<Array<AssetCreateInput>>;
  /** Delete multiple Asset documents */
  delete?: InputMaybe<Array<AssetWhereUniqueInput>>;
  /** Disconnect multiple Asset documents */
  disconnect?: InputMaybe<Array<AssetWhereUniqueInput>>;
  /** Override currently-connected documents with multiple existing Asset documents */
  set?: InputMaybe<Array<AssetWhereUniqueInput>>;
  /** Update multiple Asset documents */
  update?: InputMaybe<Array<AssetUpdateWithNestedWhereUniqueInput>>;
  /** Upsert multiple Asset documents */
  upsert?: InputMaybe<Array<AssetUpsertWithNestedWhereUniqueInput>>;
};

export type AssetUpdateManyInput = {
  /** No fields in updateMany data input */
  _?: InputMaybe<Scalars['String']['input']>;
};

export type AssetUpdateManyWithNestedWhereInput = {
  /** Update many input */
  data: AssetUpdateManyInput;
  /** Document search */
  where: AssetWhereInput;
};

export type AssetUpdateOneInlineInput = {
  /** Connect existing Asset document */
  connect?: InputMaybe<AssetWhereUniqueInput>;
  /** Create and connect one Asset document */
  create?: InputMaybe<AssetCreateInput>;
  /** Delete currently connected Asset document */
  delete?: InputMaybe<Scalars['Boolean']['input']>;
  /** Disconnect currently connected Asset document */
  disconnect?: InputMaybe<Scalars['Boolean']['input']>;
  /** Update single Asset document */
  update?: InputMaybe<AssetUpdateWithNestedWhereUniqueInput>;
  /** Upsert single Asset document */
  upsert?: InputMaybe<AssetUpsertWithNestedWhereUniqueInput>;
};

export type AssetUpdateWithNestedWhereUniqueInput = {
  /** Document to update */
  data: AssetUpdateInput;
  /** Unique document search */
  where: AssetWhereUniqueInput;
};

/** Asset Upload */
export type AssetUpload = {
  __typename?: 'AssetUpload';
  /** Asset Upload Error */
  error?: Maybe<AssetUploadError>;
  /** Expiry Timestamp */
  expiresAt?: Maybe<Scalars['DateTime']['output']>;
  /** Asset Request Data for upload */
  requestPostData?: Maybe<AssetUploadRequestPostData>;
  /** Asset Request Data for upload */
  status?: Maybe<AssetUploadStatus>;
};

/** Represents asset upload error */
export type AssetUploadError = {
  __typename?: 'AssetUploadError';
  code: Scalars['String']['output'];
  message: Scalars['String']['output'];
};

/** Asset Upload Request Post Data */
export type AssetUploadRequestPostData = {
  __typename?: 'AssetUploadRequestPostData';
  /** The algorithm to use in the form field. This value should be passed in the `X-Amz-Algorithm` form field. */
  algorithm: Scalars['String']['output'];
  /** The credential to use in the form field. This value should be passed in the `X-Amz-Credential` form field. */
  credential: Scalars['String']['output'];
  /** The date the request was signed, formatted as YYYYMMDDTHHMMSSZ. This value should be passed in the `X-Amz-Date` header. */
  date: Scalars['String']['output'];
  /** The key to use in the form field. This value should be passed in the `Key` form field. */
  key: Scalars['String']['output'];
  /** The policy to use in the form field. This value should be passed in the `Policy` form field. */
  policy: Scalars['String']['output'];
  /** The security token to use in the form field. This field is optional only pass it if its not null. This value should be passed in the `X-Amz-Security-Token` form field if not null. */
  securityToken?: Maybe<Scalars['String']['output']>;
  /** The signature to use in the form field. This value should be passed in the `X-Amz-Signature` form field. */
  signature: Scalars['String']['output'];
  /** The URL to which the file should be uploaded with a POST request. */
  url: Scalars['String']['output'];
};

/** System Asset Upload Status */
export enum AssetUploadStatus {
  AssetCreatePending = 'ASSET_CREATE_PENDING',
  AssetErrorUpload = 'ASSET_ERROR_UPLOAD',
  AssetUpdatePending = 'ASSET_UPDATE_PENDING',
  AssetUploadComplete = 'ASSET_UPLOAD_COMPLETE'
}

/** Identifies documents */
export type AssetUploadWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<AssetUploadWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<AssetUploadWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<AssetUploadWhereInput>>;
  expiresAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  expiresAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  expiresAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  expiresAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  expiresAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  expiresAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  expiresAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  expiresAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  status?: InputMaybe<AssetUploadStatus>;
  /** All values that are contained in given list. */
  status_in?: InputMaybe<Array<InputMaybe<AssetUploadStatus>>>;
  /** Any other value that exists and is not equal to the given value. */
  status_not?: InputMaybe<AssetUploadStatus>;
  /** All values that are not contained in given list. */
  status_not_in?: InputMaybe<Array<InputMaybe<AssetUploadStatus>>>;
};

/** Identifies documents */
export type AssetUploadWhereStageInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<AssetUploadWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<AssetUploadWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<AssetUploadWhereInput>>;
  expiresAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  expiresAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  expiresAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  expiresAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  expiresAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  expiresAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  expiresAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  expiresAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  status?: InputMaybe<AssetUploadStatus>;
  /** All values that are contained in given list. */
  status_in?: InputMaybe<Array<InputMaybe<AssetUploadStatus>>>;
  /** Any other value that exists and is not equal to the given value. */
  status_not?: InputMaybe<AssetUploadStatus>;
  /** All values that are not contained in given list. */
  status_not_in?: InputMaybe<Array<InputMaybe<AssetUploadStatus>>>;
};

export type AssetUpsertInput = {
  /** Create document if it didn't exist */
  create: AssetCreateInput;
  /** Update document if it exists */
  update: AssetUpdateInput;
};

export type AssetUpsertLocalizationInput = {
  create: AssetCreateLocalizationDataInput;
  locale: Locale;
  update: AssetUpdateLocalizationDataInput;
};

export type AssetUpsertWithNestedWhereUniqueInput = {
  /** Upsert data */
  data: AssetUpsertInput;
  /** Unique document search */
  where: AssetWhereUniqueInput;
};

/** This contains a set of filters that can be used to compare values internally */
export type AssetWhereComparatorInput = {
  /** This field can be used to request to check if the entry is outdated by internal comparison */
  outdated_to?: InputMaybe<Scalars['Boolean']['input']>;
};

/** Identifies documents */
export type AssetWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<AssetWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<AssetWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<AssetWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']['input']>;
  bestandenBlogPost_every?: InputMaybe<BlogPostWhereInput>;
  bestandenBlogPost_none?: InputMaybe<BlogPostWhereInput>;
  bestandenBlogPost_some?: InputMaybe<BlogPostWhereInput>;
  bestandenProject_every?: InputMaybe<ProjectWhereInput>;
  bestandenProject_none?: InputMaybe<ProjectWhereInput>;
  bestandenProject_some?: InputMaybe<ProjectWhereInput>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  createdAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  createdBy?: InputMaybe<UserWhereInput>;
  documentInStages_every?: InputMaybe<AssetWhereStageInput>;
  documentInStages_none?: InputMaybe<AssetWhereStageInput>;
  documentInStages_some?: InputMaybe<AssetWhereStageInput>;
  fileName?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  fileName_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  fileName_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  fileName_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  fileName_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  fileName_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  fileName_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  fileName_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  fileName_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  fileName_starts_with?: InputMaybe<Scalars['String']['input']>;
  fotoBestuur_every?: InputMaybe<BestuurWhereInput>;
  fotoBestuur_none?: InputMaybe<BestuurWhereInput>;
  fotoBestuur_some?: InputMaybe<BestuurWhereInput>;
  fotoBlogPost_every?: InputMaybe<BlogPostWhereInput>;
  fotoBlogPost_none?: InputMaybe<BlogPostWhereInput>;
  fotoBlogPost_some?: InputMaybe<BlogPostWhereInput>;
  fotosProject_every?: InputMaybe<ProjectWhereInput>;
  fotosProject_none?: InputMaybe<ProjectWhereInput>;
  fotosProject_some?: InputMaybe<ProjectWhereInput>;
  handle?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  handle_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  handle_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  handle_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  handle_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  handle_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  handle_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  handle_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  handle_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  handle_starts_with?: InputMaybe<Scalars['String']['input']>;
  height?: InputMaybe<Scalars['Float']['input']>;
  /** All values greater than the given value. */
  height_gt?: InputMaybe<Scalars['Float']['input']>;
  /** All values greater than or equal the given value. */
  height_gte?: InputMaybe<Scalars['Float']['input']>;
  /** All values that are contained in given list. */
  height_in?: InputMaybe<Array<InputMaybe<Scalars['Float']['input']>>>;
  /** All values less than the given value. */
  height_lt?: InputMaybe<Scalars['Float']['input']>;
  /** All values less than or equal the given value. */
  height_lte?: InputMaybe<Scalars['Float']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  height_not?: InputMaybe<Scalars['Float']['input']>;
  /** All values that are not contained in given list. */
  height_not_in?: InputMaybe<Array<InputMaybe<Scalars['Float']['input']>>>;
  id?: InputMaybe<Scalars['ID']['input']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  id_not?: InputMaybe<Scalars['ID']['input']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']['input']>;
  mimeType?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  mimeType_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  mimeType_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  mimeType_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  mimeType_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  mimeType_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  mimeType_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  mimeType_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  mimeType_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  mimeType_starts_with?: InputMaybe<Scalars['String']['input']>;
  publishedAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  publishedAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  publishedBy?: InputMaybe<UserWhereInput>;
  scheduledIn_every?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_none?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_some?: InputMaybe<ScheduledOperationWhereInput>;
  size?: InputMaybe<Scalars['Float']['input']>;
  /** All values greater than the given value. */
  size_gt?: InputMaybe<Scalars['Float']['input']>;
  /** All values greater than or equal the given value. */
  size_gte?: InputMaybe<Scalars['Float']['input']>;
  /** All values that are contained in given list. */
  size_in?: InputMaybe<Array<InputMaybe<Scalars['Float']['input']>>>;
  /** All values less than the given value. */
  size_lt?: InputMaybe<Scalars['Float']['input']>;
  /** All values less than or equal the given value. */
  size_lte?: InputMaybe<Scalars['Float']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  size_not?: InputMaybe<Scalars['Float']['input']>;
  /** All values that are not contained in given list. */
  size_not_in?: InputMaybe<Array<InputMaybe<Scalars['Float']['input']>>>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  updatedAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  updatedBy?: InputMaybe<UserWhereInput>;
  upload?: InputMaybe<AssetUploadWhereInput>;
  width?: InputMaybe<Scalars['Float']['input']>;
  /** All values greater than the given value. */
  width_gt?: InputMaybe<Scalars['Float']['input']>;
  /** All values greater than or equal the given value. */
  width_gte?: InputMaybe<Scalars['Float']['input']>;
  /** All values that are contained in given list. */
  width_in?: InputMaybe<Array<InputMaybe<Scalars['Float']['input']>>>;
  /** All values less than the given value. */
  width_lt?: InputMaybe<Scalars['Float']['input']>;
  /** All values less than or equal the given value. */
  width_lte?: InputMaybe<Scalars['Float']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  width_not?: InputMaybe<Scalars['Float']['input']>;
  /** All values that are not contained in given list. */
  width_not_in?: InputMaybe<Array<InputMaybe<Scalars['Float']['input']>>>;
};

/** The document in stages filter allows specifying a stage entry to cross compare the same document between different stages */
export type AssetWhereStageInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<AssetWhereStageInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<AssetWhereStageInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<AssetWhereStageInput>>;
  /** This field contains fields which can be set as true or false to specify an internal comparison */
  compareWithParent?: InputMaybe<AssetWhereComparatorInput>;
  /** Specify the stage to compare with */
  stage?: InputMaybe<Stage>;
};

/** References Asset record uniquely */
export type AssetWhereUniqueInput = {
  id?: InputMaybe<Scalars['ID']['input']>;
};

export type BatchPayload = {
  __typename?: 'BatchPayload';
  /** The number of nodes that have been affected by the Batch operation. */
  count: Scalars['Long']['output'];
};

/** Dit zijn leden die op de website kunnen berichten. */
export type Bestuur = Entity & Node & {
  __typename?: 'Bestuur';
  bio?: Maybe<Scalars['String']['output']>;
  /** The time the document was created */
  createdAt: Scalars['DateTime']['output'];
  /** User that created this document */
  createdBy?: Maybe<User>;
  /** Get the document in other stages */
  documentInStages: Array<Bestuur>;
  foto?: Maybe<Asset>;
  /** List of Bestuur versions */
  history: Array<Version>;
  /** The unique identifier */
  id: Scalars['ID']['output'];
  naam?: Maybe<Scalars['String']['output']>;
  /** The time the document was published. Null on documents in draft stage. */
  publishedAt?: Maybe<Scalars['DateTime']['output']>;
  /** User that last published this document */
  publishedBy?: Maybe<User>;
  rol?: Maybe<Rol>;
  scheduledIn: Array<ScheduledOperation>;
  /** System stage field */
  stage: Stage;
  /** The time the document was updated */
  updatedAt: Scalars['DateTime']['output'];
  /** User that last updated this document */
  updatedBy?: Maybe<User>;
};


/** Dit zijn leden die op de website kunnen berichten. */
export type BestuurCreatedByArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>;
  locales?: InputMaybe<Array<Locale>>;
};


/** Dit zijn leden die op de website kunnen berichten. */
export type BestuurDocumentInStagesArgs = {
  includeCurrent?: Scalars['Boolean']['input'];
  inheritLocale?: Scalars['Boolean']['input'];
  stages?: Array<Stage>;
};


/** Dit zijn leden die op de website kunnen berichten. */
export type BestuurFotoArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>;
  locales?: InputMaybe<Array<Locale>>;
  where?: InputMaybe<AssetSingleRelationWhereInput>;
};


/** Dit zijn leden die op de website kunnen berichten. */
export type BestuurHistoryArgs = {
  limit?: Scalars['Int']['input'];
  skip?: Scalars['Int']['input'];
  stageOverride?: InputMaybe<Stage>;
};


/** Dit zijn leden die op de website kunnen berichten. */
export type BestuurPublishedByArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>;
  locales?: InputMaybe<Array<Locale>>;
};


/** Dit zijn leden die op de website kunnen berichten. */
export type BestuurScheduledInArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  locales?: InputMaybe<Array<Locale>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<ScheduledOperationWhereInput>;
};


/** Dit zijn leden die op de website kunnen berichten. */
export type BestuurUpdatedByArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>;
  locales?: InputMaybe<Array<Locale>>;
};

export type BestuurConnectInput = {
  /** Allow to specify document position in list of connected documents, will default to appending at end of list */
  position?: InputMaybe<ConnectPositionInput>;
  /** Document to connect */
  where: BestuurWhereUniqueInput;
};

/** A connection to a list of items. */
export type BestuurConnection = {
  __typename?: 'BestuurConnection';
  aggregate: Aggregate;
  /** A list of edges. */
  edges: Array<BestuurEdge>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

export type BestuurCreateInput = {
  bio?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  foto?: InputMaybe<AssetCreateOneInlineInput>;
  naam?: InputMaybe<Scalars['String']['input']>;
  rol?: InputMaybe<Rol>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
};

export type BestuurCreateManyInlineInput = {
  /** Connect multiple existing Bestuur documents */
  connect?: InputMaybe<Array<BestuurWhereUniqueInput>>;
  /** Create and connect multiple existing Bestuur documents */
  create?: InputMaybe<Array<BestuurCreateInput>>;
};

export type BestuurCreateOneInlineInput = {
  /** Connect one existing Bestuur document */
  connect?: InputMaybe<BestuurWhereUniqueInput>;
  /** Create and connect one Bestuur document */
  create?: InputMaybe<BestuurCreateInput>;
};

/** An edge in a connection. */
export type BestuurEdge = {
  __typename?: 'BestuurEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge. */
  node: Bestuur;
};

/** Identifies documents */
export type BestuurManyWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<BestuurWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<BestuurWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<BestuurWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']['input']>;
  bio?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  bio_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  bio_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  bio_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  bio_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  bio_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  bio_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  bio_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  bio_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  bio_starts_with?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  createdAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  createdBy?: InputMaybe<UserWhereInput>;
  documentInStages_every?: InputMaybe<BestuurWhereStageInput>;
  documentInStages_none?: InputMaybe<BestuurWhereStageInput>;
  documentInStages_some?: InputMaybe<BestuurWhereStageInput>;
  foto?: InputMaybe<AssetWhereInput>;
  id?: InputMaybe<Scalars['ID']['input']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  id_not?: InputMaybe<Scalars['ID']['input']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']['input']>;
  naam?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  naam_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  naam_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  naam_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  naam_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  naam_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  naam_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  naam_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  naam_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  naam_starts_with?: InputMaybe<Scalars['String']['input']>;
  publishedAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  publishedAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  publishedBy?: InputMaybe<UserWhereInput>;
  rol?: InputMaybe<Rol>;
  /** All values that are contained in given list. */
  rol_in?: InputMaybe<Array<InputMaybe<Rol>>>;
  /** Any other value that exists and is not equal to the given value. */
  rol_not?: InputMaybe<Rol>;
  /** All values that are not contained in given list. */
  rol_not_in?: InputMaybe<Array<InputMaybe<Rol>>>;
  scheduledIn_every?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_none?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_some?: InputMaybe<ScheduledOperationWhereInput>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  updatedAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  updatedBy?: InputMaybe<UserWhereInput>;
};

export enum BestuurOrderByInput {
  BioAsc = 'bio_ASC',
  BioDesc = 'bio_DESC',
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  NaamAsc = 'naam_ASC',
  NaamDesc = 'naam_DESC',
  PublishedAtAsc = 'publishedAt_ASC',
  PublishedAtDesc = 'publishedAt_DESC',
  RolAsc = 'rol_ASC',
  RolDesc = 'rol_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC'
}

export type BestuurUpdateInput = {
  bio?: InputMaybe<Scalars['String']['input']>;
  foto?: InputMaybe<AssetUpdateOneInlineInput>;
  naam?: InputMaybe<Scalars['String']['input']>;
  rol?: InputMaybe<Rol>;
};

export type BestuurUpdateManyInlineInput = {
  /** Connect multiple existing Bestuur documents */
  connect?: InputMaybe<Array<BestuurConnectInput>>;
  /** Create and connect multiple Bestuur documents */
  create?: InputMaybe<Array<BestuurCreateInput>>;
  /** Delete multiple Bestuur documents */
  delete?: InputMaybe<Array<BestuurWhereUniqueInput>>;
  /** Disconnect multiple Bestuur documents */
  disconnect?: InputMaybe<Array<BestuurWhereUniqueInput>>;
  /** Override currently-connected documents with multiple existing Bestuur documents */
  set?: InputMaybe<Array<BestuurWhereUniqueInput>>;
  /** Update multiple Bestuur documents */
  update?: InputMaybe<Array<BestuurUpdateWithNestedWhereUniqueInput>>;
  /** Upsert multiple Bestuur documents */
  upsert?: InputMaybe<Array<BestuurUpsertWithNestedWhereUniqueInput>>;
};

export type BestuurUpdateManyInput = {
  bio?: InputMaybe<Scalars['String']['input']>;
  naam?: InputMaybe<Scalars['String']['input']>;
  rol?: InputMaybe<Rol>;
};

export type BestuurUpdateManyWithNestedWhereInput = {
  /** Update many input */
  data: BestuurUpdateManyInput;
  /** Document search */
  where: BestuurWhereInput;
};

export type BestuurUpdateOneInlineInput = {
  /** Connect existing Bestuur document */
  connect?: InputMaybe<BestuurWhereUniqueInput>;
  /** Create and connect one Bestuur document */
  create?: InputMaybe<BestuurCreateInput>;
  /** Delete currently connected Bestuur document */
  delete?: InputMaybe<Scalars['Boolean']['input']>;
  /** Disconnect currently connected Bestuur document */
  disconnect?: InputMaybe<Scalars['Boolean']['input']>;
  /** Update single Bestuur document */
  update?: InputMaybe<BestuurUpdateWithNestedWhereUniqueInput>;
  /** Upsert single Bestuur document */
  upsert?: InputMaybe<BestuurUpsertWithNestedWhereUniqueInput>;
};

export type BestuurUpdateWithNestedWhereUniqueInput = {
  /** Document to update */
  data: BestuurUpdateInput;
  /** Unique document search */
  where: BestuurWhereUniqueInput;
};

export type BestuurUpsertInput = {
  /** Create document if it didn't exist */
  create: BestuurCreateInput;
  /** Update document if it exists */
  update: BestuurUpdateInput;
};

export type BestuurUpsertWithNestedWhereUniqueInput = {
  /** Upsert data */
  data: BestuurUpsertInput;
  /** Unique document search */
  where: BestuurWhereUniqueInput;
};

/** This contains a set of filters that can be used to compare values internally */
export type BestuurWhereComparatorInput = {
  /** This field can be used to request to check if the entry is outdated by internal comparison */
  outdated_to?: InputMaybe<Scalars['Boolean']['input']>;
};

/** Identifies documents */
export type BestuurWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<BestuurWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<BestuurWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<BestuurWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']['input']>;
  bio?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  bio_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  bio_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  bio_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  bio_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  bio_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  bio_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  bio_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  bio_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  bio_starts_with?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  createdAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  createdBy?: InputMaybe<UserWhereInput>;
  documentInStages_every?: InputMaybe<BestuurWhereStageInput>;
  documentInStages_none?: InputMaybe<BestuurWhereStageInput>;
  documentInStages_some?: InputMaybe<BestuurWhereStageInput>;
  foto?: InputMaybe<AssetWhereInput>;
  id?: InputMaybe<Scalars['ID']['input']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  id_not?: InputMaybe<Scalars['ID']['input']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']['input']>;
  naam?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  naam_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  naam_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  naam_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  naam_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  naam_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  naam_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  naam_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  naam_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  naam_starts_with?: InputMaybe<Scalars['String']['input']>;
  publishedAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  publishedAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  publishedBy?: InputMaybe<UserWhereInput>;
  rol?: InputMaybe<Rol>;
  /** All values that are contained in given list. */
  rol_in?: InputMaybe<Array<InputMaybe<Rol>>>;
  /** Any other value that exists and is not equal to the given value. */
  rol_not?: InputMaybe<Rol>;
  /** All values that are not contained in given list. */
  rol_not_in?: InputMaybe<Array<InputMaybe<Rol>>>;
  scheduledIn_every?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_none?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_some?: InputMaybe<ScheduledOperationWhereInput>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  updatedAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  updatedBy?: InputMaybe<UserWhereInput>;
};

/** The document in stages filter allows specifying a stage entry to cross compare the same document between different stages */
export type BestuurWhereStageInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<BestuurWhereStageInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<BestuurWhereStageInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<BestuurWhereStageInput>>;
  /** This field contains fields which can be set as true or false to specify an internal comparison */
  compareWithParent?: InputMaybe<BestuurWhereComparatorInput>;
  /** Specify the stage to compare with */
  stage?: InputMaybe<Stage>;
};

/** References Bestuur record uniquely */
export type BestuurWhereUniqueInput = {
  id?: InputMaybe<Scalars['ID']['input']>;
};

export type BlogPost = Entity & Node & {
  __typename?: 'BlogPost';
  bericht?: Maybe<BlogPostBerichtRichText>;
  bestanden: Array<Asset>;
  /** The time the document was created */
  createdAt: Scalars['DateTime']['output'];
  /** User that created this document */
  createdBy?: Maybe<User>;
  datum?: Maybe<Scalars['Date']['output']>;
  /** Get the document in other stages */
  documentInStages: Array<BlogPost>;
  foto?: Maybe<Asset>;
  /** List of BlogPost versions */
  history: Array<Version>;
  /** The unique identifier */
  id: Scalars['ID']['output'];
  introductie: Scalars['String']['output'];
  /** Dit gebruiken we op de blog overzicht pagina */
  korteSamenvatting: Scalars['String']['output'];
  project?: Maybe<Project>;
  /** The time the document was published. Null on documents in draft stage. */
  publishedAt?: Maybe<Scalars['DateTime']['output']>;
  /** User that last published this document */
  publishedBy?: Maybe<User>;
  scheduledIn: Array<ScheduledOperation>;
  slug?: Maybe<Scalars['String']['output']>;
  /** System stage field */
  stage: Stage;
  titel?: Maybe<Scalars['String']['output']>;
  /** The time the document was updated */
  updatedAt: Scalars['DateTime']['output'];
  /** User that last updated this document */
  updatedBy?: Maybe<User>;
};


export type BlogPostBestandenArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  locales?: InputMaybe<Array<Locale>>;
  orderBy?: InputMaybe<AssetOrderByInput>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<AssetWhereInput>;
};


export type BlogPostCreatedByArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>;
  locales?: InputMaybe<Array<Locale>>;
};


export type BlogPostDocumentInStagesArgs = {
  includeCurrent?: Scalars['Boolean']['input'];
  inheritLocale?: Scalars['Boolean']['input'];
  stages?: Array<Stage>;
};


export type BlogPostFotoArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>;
  locales?: InputMaybe<Array<Locale>>;
  where?: InputMaybe<AssetSingleRelationWhereInput>;
};


export type BlogPostHistoryArgs = {
  limit?: Scalars['Int']['input'];
  skip?: Scalars['Int']['input'];
  stageOverride?: InputMaybe<Stage>;
};


export type BlogPostProjectArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>;
  locales?: InputMaybe<Array<Locale>>;
};


export type BlogPostPublishedByArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>;
  locales?: InputMaybe<Array<Locale>>;
};


export type BlogPostScheduledInArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  locales?: InputMaybe<Array<Locale>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<ScheduledOperationWhereInput>;
};


export type BlogPostUpdatedByArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>;
  locales?: InputMaybe<Array<Locale>>;
};

export type BlogPostBerichtRichText = {
  __typename?: 'BlogPostBerichtRichText';
  /** Returns HTMl representation */
  html: Scalars['String']['output'];
  json: Scalars['RichTextAST']['output'];
  /** Returns Markdown representation */
  markdown: Scalars['String']['output'];
  /** @deprecated Please use the 'json' field */
  raw: Scalars['RichTextAST']['output'];
  references: Array<BlogPostBerichtRichTextEmbeddedTypes>;
  /** Returns plain-text contents of RichText */
  text: Scalars['String']['output'];
};


export type BlogPostBerichtRichTextReferencesArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};

export type BlogPostBerichtRichTextEmbeddedTypes = Asset;

export type BlogPostConnectInput = {
  /** Allow to specify document position in list of connected documents, will default to appending at end of list */
  position?: InputMaybe<ConnectPositionInput>;
  /** Document to connect */
  where: BlogPostWhereUniqueInput;
};

/** A connection to a list of items. */
export type BlogPostConnection = {
  __typename?: 'BlogPostConnection';
  aggregate: Aggregate;
  /** A list of edges. */
  edges: Array<BlogPostEdge>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

export type BlogPostCreateInput = {
  bericht?: InputMaybe<Scalars['RichTextAST']['input']>;
  bestanden?: InputMaybe<AssetCreateManyInlineInput>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  datum?: InputMaybe<Scalars['Date']['input']>;
  foto?: InputMaybe<AssetCreateOneInlineInput>;
  introductie: Scalars['String']['input'];
  korteSamenvatting: Scalars['String']['input'];
  project?: InputMaybe<ProjectCreateOneInlineInput>;
  slug?: InputMaybe<Scalars['String']['input']>;
  titel?: InputMaybe<Scalars['String']['input']>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
};

export type BlogPostCreateManyInlineInput = {
  /** Connect multiple existing BlogPost documents */
  connect?: InputMaybe<Array<BlogPostWhereUniqueInput>>;
  /** Create and connect multiple existing BlogPost documents */
  create?: InputMaybe<Array<BlogPostCreateInput>>;
};

export type BlogPostCreateOneInlineInput = {
  /** Connect one existing BlogPost document */
  connect?: InputMaybe<BlogPostWhereUniqueInput>;
  /** Create and connect one BlogPost document */
  create?: InputMaybe<BlogPostCreateInput>;
};

/** An edge in a connection. */
export type BlogPostEdge = {
  __typename?: 'BlogPostEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge. */
  node: BlogPost;
};

/** Identifies documents */
export type BlogPostManyWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<BlogPostWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<BlogPostWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<BlogPostWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']['input']>;
  bestanden_every?: InputMaybe<AssetWhereInput>;
  bestanden_none?: InputMaybe<AssetWhereInput>;
  bestanden_some?: InputMaybe<AssetWhereInput>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  createdAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  createdBy?: InputMaybe<UserWhereInput>;
  datum?: InputMaybe<Scalars['Date']['input']>;
  /** All values greater than the given value. */
  datum_gt?: InputMaybe<Scalars['Date']['input']>;
  /** All values greater than or equal the given value. */
  datum_gte?: InputMaybe<Scalars['Date']['input']>;
  /** All values that are contained in given list. */
  datum_in?: InputMaybe<Array<InputMaybe<Scalars['Date']['input']>>>;
  /** All values less than the given value. */
  datum_lt?: InputMaybe<Scalars['Date']['input']>;
  /** All values less than or equal the given value. */
  datum_lte?: InputMaybe<Scalars['Date']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  datum_not?: InputMaybe<Scalars['Date']['input']>;
  /** All values that are not contained in given list. */
  datum_not_in?: InputMaybe<Array<InputMaybe<Scalars['Date']['input']>>>;
  documentInStages_every?: InputMaybe<BlogPostWhereStageInput>;
  documentInStages_none?: InputMaybe<BlogPostWhereStageInput>;
  documentInStages_some?: InputMaybe<BlogPostWhereStageInput>;
  foto?: InputMaybe<AssetWhereInput>;
  id?: InputMaybe<Scalars['ID']['input']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  id_not?: InputMaybe<Scalars['ID']['input']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']['input']>;
  introductie?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  introductie_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  introductie_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  introductie_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  introductie_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  introductie_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  introductie_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  introductie_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  introductie_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  introductie_starts_with?: InputMaybe<Scalars['String']['input']>;
  korteSamenvatting?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  korteSamenvatting_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  korteSamenvatting_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  korteSamenvatting_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  korteSamenvatting_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  korteSamenvatting_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  korteSamenvatting_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  korteSamenvatting_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  korteSamenvatting_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  korteSamenvatting_starts_with?: InputMaybe<Scalars['String']['input']>;
  project?: InputMaybe<ProjectWhereInput>;
  publishedAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  publishedAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  publishedBy?: InputMaybe<UserWhereInput>;
  scheduledIn_every?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_none?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_some?: InputMaybe<ScheduledOperationWhereInput>;
  slug?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  slug_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  slug_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  slug_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  slug_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  slug_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  slug_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  slug_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  slug_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  slug_starts_with?: InputMaybe<Scalars['String']['input']>;
  titel?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  titel_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  titel_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  titel_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  titel_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  titel_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  titel_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  titel_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  titel_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  titel_starts_with?: InputMaybe<Scalars['String']['input']>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  updatedAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  updatedBy?: InputMaybe<UserWhereInput>;
};

export enum BlogPostOrderByInput {
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  DatumAsc = 'datum_ASC',
  DatumDesc = 'datum_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  IntroductieAsc = 'introductie_ASC',
  IntroductieDesc = 'introductie_DESC',
  KorteSamenvattingAsc = 'korteSamenvatting_ASC',
  KorteSamenvattingDesc = 'korteSamenvatting_DESC',
  PublishedAtAsc = 'publishedAt_ASC',
  PublishedAtDesc = 'publishedAt_DESC',
  SlugAsc = 'slug_ASC',
  SlugDesc = 'slug_DESC',
  TitelAsc = 'titel_ASC',
  TitelDesc = 'titel_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC'
}

export type BlogPostUpdateInput = {
  bericht?: InputMaybe<Scalars['RichTextAST']['input']>;
  bestanden?: InputMaybe<AssetUpdateManyInlineInput>;
  datum?: InputMaybe<Scalars['Date']['input']>;
  foto?: InputMaybe<AssetUpdateOneInlineInput>;
  introductie?: InputMaybe<Scalars['String']['input']>;
  korteSamenvatting?: InputMaybe<Scalars['String']['input']>;
  project?: InputMaybe<ProjectUpdateOneInlineInput>;
  slug?: InputMaybe<Scalars['String']['input']>;
  titel?: InputMaybe<Scalars['String']['input']>;
};

export type BlogPostUpdateManyInlineInput = {
  /** Connect multiple existing BlogPost documents */
  connect?: InputMaybe<Array<BlogPostConnectInput>>;
  /** Create and connect multiple BlogPost documents */
  create?: InputMaybe<Array<BlogPostCreateInput>>;
  /** Delete multiple BlogPost documents */
  delete?: InputMaybe<Array<BlogPostWhereUniqueInput>>;
  /** Disconnect multiple BlogPost documents */
  disconnect?: InputMaybe<Array<BlogPostWhereUniqueInput>>;
  /** Override currently-connected documents with multiple existing BlogPost documents */
  set?: InputMaybe<Array<BlogPostWhereUniqueInput>>;
  /** Update multiple BlogPost documents */
  update?: InputMaybe<Array<BlogPostUpdateWithNestedWhereUniqueInput>>;
  /** Upsert multiple BlogPost documents */
  upsert?: InputMaybe<Array<BlogPostUpsertWithNestedWhereUniqueInput>>;
};

export type BlogPostUpdateManyInput = {
  bericht?: InputMaybe<Scalars['RichTextAST']['input']>;
  datum?: InputMaybe<Scalars['Date']['input']>;
  introductie?: InputMaybe<Scalars['String']['input']>;
  korteSamenvatting?: InputMaybe<Scalars['String']['input']>;
  titel?: InputMaybe<Scalars['String']['input']>;
};

export type BlogPostUpdateManyWithNestedWhereInput = {
  /** Update many input */
  data: BlogPostUpdateManyInput;
  /** Document search */
  where: BlogPostWhereInput;
};

export type BlogPostUpdateOneInlineInput = {
  /** Connect existing BlogPost document */
  connect?: InputMaybe<BlogPostWhereUniqueInput>;
  /** Create and connect one BlogPost document */
  create?: InputMaybe<BlogPostCreateInput>;
  /** Delete currently connected BlogPost document */
  delete?: InputMaybe<Scalars['Boolean']['input']>;
  /** Disconnect currently connected BlogPost document */
  disconnect?: InputMaybe<Scalars['Boolean']['input']>;
  /** Update single BlogPost document */
  update?: InputMaybe<BlogPostUpdateWithNestedWhereUniqueInput>;
  /** Upsert single BlogPost document */
  upsert?: InputMaybe<BlogPostUpsertWithNestedWhereUniqueInput>;
};

export type BlogPostUpdateWithNestedWhereUniqueInput = {
  /** Document to update */
  data: BlogPostUpdateInput;
  /** Unique document search */
  where: BlogPostWhereUniqueInput;
};

export type BlogPostUpsertInput = {
  /** Create document if it didn't exist */
  create: BlogPostCreateInput;
  /** Update document if it exists */
  update: BlogPostUpdateInput;
};

export type BlogPostUpsertWithNestedWhereUniqueInput = {
  /** Upsert data */
  data: BlogPostUpsertInput;
  /** Unique document search */
  where: BlogPostWhereUniqueInput;
};

/** This contains a set of filters that can be used to compare values internally */
export type BlogPostWhereComparatorInput = {
  /** This field can be used to request to check if the entry is outdated by internal comparison */
  outdated_to?: InputMaybe<Scalars['Boolean']['input']>;
};

/** Identifies documents */
export type BlogPostWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<BlogPostWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<BlogPostWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<BlogPostWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']['input']>;
  bestanden_every?: InputMaybe<AssetWhereInput>;
  bestanden_none?: InputMaybe<AssetWhereInput>;
  bestanden_some?: InputMaybe<AssetWhereInput>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  createdAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  createdBy?: InputMaybe<UserWhereInput>;
  datum?: InputMaybe<Scalars['Date']['input']>;
  /** All values greater than the given value. */
  datum_gt?: InputMaybe<Scalars['Date']['input']>;
  /** All values greater than or equal the given value. */
  datum_gte?: InputMaybe<Scalars['Date']['input']>;
  /** All values that are contained in given list. */
  datum_in?: InputMaybe<Array<InputMaybe<Scalars['Date']['input']>>>;
  /** All values less than the given value. */
  datum_lt?: InputMaybe<Scalars['Date']['input']>;
  /** All values less than or equal the given value. */
  datum_lte?: InputMaybe<Scalars['Date']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  datum_not?: InputMaybe<Scalars['Date']['input']>;
  /** All values that are not contained in given list. */
  datum_not_in?: InputMaybe<Array<InputMaybe<Scalars['Date']['input']>>>;
  documentInStages_every?: InputMaybe<BlogPostWhereStageInput>;
  documentInStages_none?: InputMaybe<BlogPostWhereStageInput>;
  documentInStages_some?: InputMaybe<BlogPostWhereStageInput>;
  foto?: InputMaybe<AssetWhereInput>;
  id?: InputMaybe<Scalars['ID']['input']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  id_not?: InputMaybe<Scalars['ID']['input']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']['input']>;
  introductie?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  introductie_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  introductie_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  introductie_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  introductie_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  introductie_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  introductie_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  introductie_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  introductie_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  introductie_starts_with?: InputMaybe<Scalars['String']['input']>;
  korteSamenvatting?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  korteSamenvatting_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  korteSamenvatting_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  korteSamenvatting_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  korteSamenvatting_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  korteSamenvatting_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  korteSamenvatting_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  korteSamenvatting_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  korteSamenvatting_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  korteSamenvatting_starts_with?: InputMaybe<Scalars['String']['input']>;
  project?: InputMaybe<ProjectWhereInput>;
  publishedAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  publishedAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  publishedBy?: InputMaybe<UserWhereInput>;
  scheduledIn_every?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_none?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_some?: InputMaybe<ScheduledOperationWhereInput>;
  slug?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  slug_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  slug_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  slug_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  slug_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  slug_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  slug_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  slug_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  slug_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  slug_starts_with?: InputMaybe<Scalars['String']['input']>;
  titel?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  titel_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  titel_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  titel_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  titel_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  titel_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  titel_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  titel_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  titel_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  titel_starts_with?: InputMaybe<Scalars['String']['input']>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  updatedAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  updatedBy?: InputMaybe<UserWhereInput>;
};

/** The document in stages filter allows specifying a stage entry to cross compare the same document between different stages */
export type BlogPostWhereStageInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<BlogPostWhereStageInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<BlogPostWhereStageInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<BlogPostWhereStageInput>>;
  /** This field contains fields which can be set as true or false to specify an internal comparison */
  compareWithParent?: InputMaybe<BlogPostWhereComparatorInput>;
  /** Specify the stage to compare with */
  stage?: InputMaybe<Stage>;
};

/** References BlogPost record uniquely */
export type BlogPostWhereUniqueInput = {
  id?: InputMaybe<Scalars['ID']['input']>;
  slug?: InputMaybe<Scalars['String']['input']>;
};

export type Button = Entity & {
  __typename?: 'Button';
  /** The unique identifier */
  id: Scalars['ID']['output'];
  link?: Maybe<Scalars['String']['output']>;
  /** System stage field */
  stage: Stage;
  tekst?: Maybe<Scalars['String']['output']>;
};

export type ButtonConnectInput = {
  /** Allow to specify document position in list of connected documents, will default to appending at end of list */
  position?: InputMaybe<ConnectPositionInput>;
  /** Document to connect */
  where: ButtonWhereUniqueInput;
};

/** A connection to a list of items. */
export type ButtonConnection = {
  __typename?: 'ButtonConnection';
  aggregate: Aggregate;
  /** A list of edges. */
  edges: Array<ButtonEdge>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

export type ButtonCreateInput = {
  link?: InputMaybe<Scalars['String']['input']>;
  tekst?: InputMaybe<Scalars['String']['input']>;
};

export type ButtonCreateManyInlineInput = {
  /** Create and connect multiple existing Button documents */
  create?: InputMaybe<Array<ButtonCreateInput>>;
};

export type ButtonCreateOneInlineInput = {
  /** Create and connect one Button document */
  create?: InputMaybe<ButtonCreateInput>;
};

export type ButtonCreateWithPositionInput = {
  /** Document to create */
  data: ButtonCreateInput;
  /** Position in the list of existing component instances, will default to appending at the end of list */
  position?: InputMaybe<ConnectPositionInput>;
};

/** An edge in a connection. */
export type ButtonEdge = {
  __typename?: 'ButtonEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge. */
  node: Button;
};

/** Identifies documents */
export type ButtonManyWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<ButtonWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<ButtonWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<ButtonWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  id_not?: InputMaybe<Scalars['ID']['input']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']['input']>;
  link?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  link_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  link_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  link_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  link_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  link_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  link_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  link_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  link_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  link_starts_with?: InputMaybe<Scalars['String']['input']>;
  tekst?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  tekst_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  tekst_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  tekst_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  tekst_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  tekst_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  tekst_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  tekst_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  tekst_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  tekst_starts_with?: InputMaybe<Scalars['String']['input']>;
};

export enum ButtonOrderByInput {
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  LinkAsc = 'link_ASC',
  LinkDesc = 'link_DESC',
  TekstAsc = 'tekst_ASC',
  TekstDesc = 'tekst_DESC'
}

export type ButtonParent = Hero;

export type ButtonParentConnectInput = {
  Hero?: InputMaybe<HeroConnectInput>;
};

export type ButtonParentCreateInput = {
  Hero?: InputMaybe<HeroCreateInput>;
};

export type ButtonParentCreateManyInlineInput = {
  /** Create and connect multiple existing ButtonParent documents */
  create?: InputMaybe<Array<ButtonParentCreateInput>>;
};

export type ButtonParentCreateOneInlineInput = {
  /** Create and connect one ButtonParent document */
  create?: InputMaybe<ButtonParentCreateInput>;
};

export type ButtonParentCreateWithPositionInput = {
  Hero?: InputMaybe<HeroCreateWithPositionInput>;
};

export type ButtonParentUpdateInput = {
  Hero?: InputMaybe<HeroUpdateInput>;
};

export type ButtonParentUpdateManyInlineInput = {
  /** Create and connect multiple ButtonParent component instances */
  create?: InputMaybe<Array<ButtonParentCreateWithPositionInput>>;
  /** Delete multiple ButtonParent documents */
  delete?: InputMaybe<Array<ButtonParentWhereUniqueInput>>;
  /** Update multiple ButtonParent component instances */
  update?: InputMaybe<Array<ButtonParentUpdateWithNestedWhereUniqueAndPositionInput>>;
  /** Upsert multiple ButtonParent component instances */
  upsert?: InputMaybe<Array<ButtonParentUpsertWithNestedWhereUniqueAndPositionInput>>;
};

export type ButtonParentUpdateManyWithNestedWhereInput = {
  Hero?: InputMaybe<HeroUpdateManyWithNestedWhereInput>;
};

export type ButtonParentUpdateOneInlineInput = {
  /** Create and connect one ButtonParent document */
  create?: InputMaybe<ButtonParentCreateInput>;
  /** Delete currently connected ButtonParent document */
  delete?: InputMaybe<Scalars['Boolean']['input']>;
  /** Update single ButtonParent document */
  update?: InputMaybe<ButtonParentUpdateWithNestedWhereUniqueInput>;
  /** Upsert single ButtonParent document */
  upsert?: InputMaybe<ButtonParentUpsertWithNestedWhereUniqueInput>;
};

export type ButtonParentUpdateWithNestedWhereUniqueAndPositionInput = {
  Hero?: InputMaybe<HeroUpdateWithNestedWhereUniqueAndPositionInput>;
};

export type ButtonParentUpdateWithNestedWhereUniqueInput = {
  Hero?: InputMaybe<HeroUpdateWithNestedWhereUniqueInput>;
};

export type ButtonParentUpsertWithNestedWhereUniqueAndPositionInput = {
  Hero?: InputMaybe<HeroUpsertWithNestedWhereUniqueAndPositionInput>;
};

export type ButtonParentUpsertWithNestedWhereUniqueInput = {
  Hero?: InputMaybe<HeroUpsertWithNestedWhereUniqueInput>;
};

export type ButtonParentWhereInput = {
  Hero?: InputMaybe<HeroWhereInput>;
};

export type ButtonParentWhereUniqueInput = {
  Hero?: InputMaybe<HeroWhereUniqueInput>;
};

export enum ButtonType {
  Gevuld = 'Gevuld',
  Tekst = 'Tekst'
}

export type ButtonUpdateInput = {
  link?: InputMaybe<Scalars['String']['input']>;
  tekst?: InputMaybe<Scalars['String']['input']>;
};

export type ButtonUpdateManyInlineInput = {
  /** Create and connect multiple Button component instances */
  create?: InputMaybe<Array<ButtonCreateWithPositionInput>>;
  /** Delete multiple Button documents */
  delete?: InputMaybe<Array<ButtonWhereUniqueInput>>;
  /** Update multiple Button component instances */
  update?: InputMaybe<Array<ButtonUpdateWithNestedWhereUniqueAndPositionInput>>;
  /** Upsert multiple Button component instances */
  upsert?: InputMaybe<Array<ButtonUpsertWithNestedWhereUniqueAndPositionInput>>;
};

export type ButtonUpdateManyInput = {
  link?: InputMaybe<Scalars['String']['input']>;
  tekst?: InputMaybe<Scalars['String']['input']>;
};

export type ButtonUpdateManyWithNestedWhereInput = {
  /** Update many input */
  data: ButtonUpdateManyInput;
  /** Document search */
  where: ButtonWhereInput;
};

export type ButtonUpdateOneInlineInput = {
  /** Create and connect one Button document */
  create?: InputMaybe<ButtonCreateInput>;
  /** Delete currently connected Button document */
  delete?: InputMaybe<Scalars['Boolean']['input']>;
  /** Update single Button document */
  update?: InputMaybe<ButtonUpdateWithNestedWhereUniqueInput>;
  /** Upsert single Button document */
  upsert?: InputMaybe<ButtonUpsertWithNestedWhereUniqueInput>;
};

export type ButtonUpdateWithNestedWhereUniqueAndPositionInput = {
  /** Document to update */
  data?: InputMaybe<ButtonUpdateInput>;
  /** Position in the list of existing component instances, will default to appending at the end of list */
  position?: InputMaybe<ConnectPositionInput>;
  /** Unique component instance search */
  where: ButtonWhereUniqueInput;
};

export type ButtonUpdateWithNestedWhereUniqueInput = {
  /** Document to update */
  data: ButtonUpdateInput;
  /** Unique document search */
  where: ButtonWhereUniqueInput;
};

export type ButtonUpsertInput = {
  /** Create document if it didn't exist */
  create: ButtonCreateInput;
  /** Update document if it exists */
  update: ButtonUpdateInput;
};

export type ButtonUpsertWithNestedWhereUniqueAndPositionInput = {
  /** Document to upsert */
  data?: InputMaybe<ButtonUpsertInput>;
  /** Position in the list of existing component instances, will default to appending at the end of list */
  position?: InputMaybe<ConnectPositionInput>;
  /** Unique component instance search */
  where: ButtonWhereUniqueInput;
};

export type ButtonUpsertWithNestedWhereUniqueInput = {
  /** Upsert data */
  data: ButtonUpsertInput;
  /** Unique document search */
  where: ButtonWhereUniqueInput;
};

/** Identifies documents */
export type ButtonWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<ButtonWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<ButtonWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<ButtonWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  id_not?: InputMaybe<Scalars['ID']['input']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']['input']>;
  link?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  link_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  link_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  link_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  link_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  link_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  link_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  link_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  link_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  link_starts_with?: InputMaybe<Scalars['String']['input']>;
  tekst?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  tekst_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  tekst_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  tekst_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  tekst_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  tekst_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  tekst_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  tekst_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  tekst_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  tekst_starts_with?: InputMaybe<Scalars['String']['input']>;
};

/** References Button record uniquely */
export type ButtonWhereUniqueInput = {
  id?: InputMaybe<Scalars['ID']['input']>;
};

/** Representing a color value comprising of HEX, RGBA and css color values */
export type Color = {
  __typename?: 'Color';
  css: Scalars['String']['output'];
  hex: Scalars['Hex']['output'];
  rgba: Rgba;
};

/** Accepts either HEX or RGBA color value. At least one of hex or rgba value should be passed. If both are passed RGBA is used. */
export type ColorInput = {
  hex?: InputMaybe<Scalars['Hex']['input']>;
  rgba?: InputMaybe<RgbaInput>;
};

export type ConnectPositionInput = {
  /** Connect document after specified document */
  after?: InputMaybe<Scalars['ID']['input']>;
  /** Connect document before specified document */
  before?: InputMaybe<Scalars['ID']['input']>;
  /** Connect document at last position */
  end?: InputMaybe<Scalars['Boolean']['input']>;
  /** Connect document at first position */
  start?: InputMaybe<Scalars['Boolean']['input']>;
};

export type Content = Entity & {
  __typename?: 'Content';
  /** Als centreren aan staat word er geen zij element getekend. */
  centreren?: Maybe<Scalars['Boolean']['output']>;
  /** The unique identifier */
  id: Scalars['ID']['output'];
  inhoud: RichText;
  introductie?: Maybe<Scalars['String']['output']>;
  /** System stage field */
  stage: Stage;
  subtitel?: Maybe<Scalars['String']['output']>;
  titel: Scalars['String']['output'];
  zijElement?: Maybe<ContentzijElementUnion>;
};


export type ContentZijElementArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>;
  locales?: InputMaybe<Array<Locale>>;
};

export type ContentBlok = Entity & {
  __typename?: 'ContentBlok';
  afbeelding?: Maybe<Asset>;
  beschijving?: Maybe<Scalars['String']['output']>;
  contact?: Maybe<Scalars['String']['output']>;
  /** The unique identifier */
  id: Scalars['ID']['output'];
  /** System stage field */
  stage: Stage;
  titel?: Maybe<Scalars['String']['output']>;
};


export type ContentBlokAfbeeldingArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>;
  locales?: InputMaybe<Array<Locale>>;
  where?: InputMaybe<AssetSingleRelationWhereInput>;
};

export type ContentBlokConnectInput = {
  /** Allow to specify document position in list of connected documents, will default to appending at end of list */
  position?: InputMaybe<ConnectPositionInput>;
  /** Document to connect */
  where: ContentBlokWhereUniqueInput;
};

/** A connection to a list of items. */
export type ContentBlokConnection = {
  __typename?: 'ContentBlokConnection';
  aggregate: Aggregate;
  /** A list of edges. */
  edges: Array<ContentBlokEdge>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

export type ContentBlokCreateInput = {
  afbeelding?: InputMaybe<AssetCreateOneInlineInput>;
  beschijving?: InputMaybe<Scalars['String']['input']>;
  contact?: InputMaybe<Scalars['String']['input']>;
  titel?: InputMaybe<Scalars['String']['input']>;
};

export type ContentBlokCreateManyInlineInput = {
  /** Create and connect multiple existing ContentBlok documents */
  create?: InputMaybe<Array<ContentBlokCreateInput>>;
};

export type ContentBlokCreateOneInlineInput = {
  /** Create and connect one ContentBlok document */
  create?: InputMaybe<ContentBlokCreateInput>;
};

export type ContentBlokCreateWithPositionInput = {
  /** Document to create */
  data: ContentBlokCreateInput;
  /** Position in the list of existing component instances, will default to appending at the end of list */
  position?: InputMaybe<ConnectPositionInput>;
};

/** An edge in a connection. */
export type ContentBlokEdge = {
  __typename?: 'ContentBlokEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge. */
  node: ContentBlok;
};

/** Identifies documents */
export type ContentBlokManyWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<ContentBlokWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<ContentBlokWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<ContentBlokWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']['input']>;
  afbeelding?: InputMaybe<AssetWhereInput>;
  beschijving?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  beschijving_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  beschijving_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  beschijving_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  beschijving_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  beschijving_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  beschijving_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  beschijving_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  beschijving_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  beschijving_starts_with?: InputMaybe<Scalars['String']['input']>;
  contact?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  contact_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  contact_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  contact_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  contact_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  contact_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  contact_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  contact_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  contact_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  contact_starts_with?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  id_not?: InputMaybe<Scalars['ID']['input']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']['input']>;
  titel?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  titel_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  titel_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  titel_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  titel_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  titel_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  titel_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  titel_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  titel_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  titel_starts_with?: InputMaybe<Scalars['String']['input']>;
};

export enum ContentBlokOrderByInput {
  BeschijvingAsc = 'beschijving_ASC',
  BeschijvingDesc = 'beschijving_DESC',
  ContactAsc = 'contact_ASC',
  ContactDesc = 'contact_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  TitelAsc = 'titel_ASC',
  TitelDesc = 'titel_DESC'
}

export type ContentBlokParent = Partner;

export type ContentBlokParentConnectInput = {
  Partner?: InputMaybe<PartnerConnectInput>;
};

export type ContentBlokParentCreateInput = {
  Partner?: InputMaybe<PartnerCreateInput>;
};

export type ContentBlokParentCreateManyInlineInput = {
  /** Create and connect multiple existing ContentBlokParent documents */
  create?: InputMaybe<Array<ContentBlokParentCreateInput>>;
};

export type ContentBlokParentCreateOneInlineInput = {
  /** Create and connect one ContentBlokParent document */
  create?: InputMaybe<ContentBlokParentCreateInput>;
};

export type ContentBlokParentCreateWithPositionInput = {
  Partner?: InputMaybe<PartnerCreateWithPositionInput>;
};

export type ContentBlokParentUpdateInput = {
  Partner?: InputMaybe<PartnerUpdateInput>;
};

export type ContentBlokParentUpdateManyInlineInput = {
  /** Create and connect multiple ContentBlokParent component instances */
  create?: InputMaybe<Array<ContentBlokParentCreateWithPositionInput>>;
  /** Delete multiple ContentBlokParent documents */
  delete?: InputMaybe<Array<ContentBlokParentWhereUniqueInput>>;
  /** Update multiple ContentBlokParent component instances */
  update?: InputMaybe<Array<ContentBlokParentUpdateWithNestedWhereUniqueAndPositionInput>>;
  /** Upsert multiple ContentBlokParent component instances */
  upsert?: InputMaybe<Array<ContentBlokParentUpsertWithNestedWhereUniqueAndPositionInput>>;
};

export type ContentBlokParentUpdateManyWithNestedWhereInput = {
  Partner?: InputMaybe<PartnerUpdateManyWithNestedWhereInput>;
};

export type ContentBlokParentUpdateOneInlineInput = {
  /** Create and connect one ContentBlokParent document */
  create?: InputMaybe<ContentBlokParentCreateInput>;
  /** Delete currently connected ContentBlokParent document */
  delete?: InputMaybe<Scalars['Boolean']['input']>;
  /** Update single ContentBlokParent document */
  update?: InputMaybe<ContentBlokParentUpdateWithNestedWhereUniqueInput>;
  /** Upsert single ContentBlokParent document */
  upsert?: InputMaybe<ContentBlokParentUpsertWithNestedWhereUniqueInput>;
};

export type ContentBlokParentUpdateWithNestedWhereUniqueAndPositionInput = {
  Partner?: InputMaybe<PartnerUpdateWithNestedWhereUniqueAndPositionInput>;
};

export type ContentBlokParentUpdateWithNestedWhereUniqueInput = {
  Partner?: InputMaybe<PartnerUpdateWithNestedWhereUniqueInput>;
};

export type ContentBlokParentUpsertWithNestedWhereUniqueAndPositionInput = {
  Partner?: InputMaybe<PartnerUpsertWithNestedWhereUniqueAndPositionInput>;
};

export type ContentBlokParentUpsertWithNestedWhereUniqueInput = {
  Partner?: InputMaybe<PartnerUpsertWithNestedWhereUniqueInput>;
};

export type ContentBlokParentWhereInput = {
  Partner?: InputMaybe<PartnerWhereInput>;
};

export type ContentBlokParentWhereUniqueInput = {
  Partner?: InputMaybe<PartnerWhereUniqueInput>;
};

export type ContentBlokUpdateInput = {
  afbeelding?: InputMaybe<AssetUpdateOneInlineInput>;
  beschijving?: InputMaybe<Scalars['String']['input']>;
  contact?: InputMaybe<Scalars['String']['input']>;
  titel?: InputMaybe<Scalars['String']['input']>;
};

export type ContentBlokUpdateManyInlineInput = {
  /** Create and connect multiple ContentBlok component instances */
  create?: InputMaybe<Array<ContentBlokCreateWithPositionInput>>;
  /** Delete multiple ContentBlok documents */
  delete?: InputMaybe<Array<ContentBlokWhereUniqueInput>>;
  /** Update multiple ContentBlok component instances */
  update?: InputMaybe<Array<ContentBlokUpdateWithNestedWhereUniqueAndPositionInput>>;
  /** Upsert multiple ContentBlok component instances */
  upsert?: InputMaybe<Array<ContentBlokUpsertWithNestedWhereUniqueAndPositionInput>>;
};

export type ContentBlokUpdateManyInput = {
  beschijving?: InputMaybe<Scalars['String']['input']>;
  contact?: InputMaybe<Scalars['String']['input']>;
  titel?: InputMaybe<Scalars['String']['input']>;
};

export type ContentBlokUpdateManyWithNestedWhereInput = {
  /** Update many input */
  data: ContentBlokUpdateManyInput;
  /** Document search */
  where: ContentBlokWhereInput;
};

export type ContentBlokUpdateOneInlineInput = {
  /** Create and connect one ContentBlok document */
  create?: InputMaybe<ContentBlokCreateInput>;
  /** Delete currently connected ContentBlok document */
  delete?: InputMaybe<Scalars['Boolean']['input']>;
  /** Update single ContentBlok document */
  update?: InputMaybe<ContentBlokUpdateWithNestedWhereUniqueInput>;
  /** Upsert single ContentBlok document */
  upsert?: InputMaybe<ContentBlokUpsertWithNestedWhereUniqueInput>;
};

export type ContentBlokUpdateWithNestedWhereUniqueAndPositionInput = {
  /** Document to update */
  data?: InputMaybe<ContentBlokUpdateInput>;
  /** Position in the list of existing component instances, will default to appending at the end of list */
  position?: InputMaybe<ConnectPositionInput>;
  /** Unique component instance search */
  where: ContentBlokWhereUniqueInput;
};

export type ContentBlokUpdateWithNestedWhereUniqueInput = {
  /** Document to update */
  data: ContentBlokUpdateInput;
  /** Unique document search */
  where: ContentBlokWhereUniqueInput;
};

export type ContentBlokUpsertInput = {
  /** Create document if it didn't exist */
  create: ContentBlokCreateInput;
  /** Update document if it exists */
  update: ContentBlokUpdateInput;
};

export type ContentBlokUpsertWithNestedWhereUniqueAndPositionInput = {
  /** Document to upsert */
  data?: InputMaybe<ContentBlokUpsertInput>;
  /** Position in the list of existing component instances, will default to appending at the end of list */
  position?: InputMaybe<ConnectPositionInput>;
  /** Unique component instance search */
  where: ContentBlokWhereUniqueInput;
};

export type ContentBlokUpsertWithNestedWhereUniqueInput = {
  /** Upsert data */
  data: ContentBlokUpsertInput;
  /** Unique document search */
  where: ContentBlokWhereUniqueInput;
};

/** Identifies documents */
export type ContentBlokWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<ContentBlokWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<ContentBlokWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<ContentBlokWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']['input']>;
  afbeelding?: InputMaybe<AssetWhereInput>;
  beschijving?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  beschijving_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  beschijving_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  beschijving_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  beschijving_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  beschijving_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  beschijving_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  beschijving_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  beschijving_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  beschijving_starts_with?: InputMaybe<Scalars['String']['input']>;
  contact?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  contact_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  contact_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  contact_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  contact_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  contact_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  contact_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  contact_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  contact_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  contact_starts_with?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  id_not?: InputMaybe<Scalars['ID']['input']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']['input']>;
  titel?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  titel_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  titel_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  titel_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  titel_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  titel_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  titel_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  titel_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  titel_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  titel_starts_with?: InputMaybe<Scalars['String']['input']>;
};

/** References ContentBlok record uniquely */
export type ContentBlokWhereUniqueInput = {
  id?: InputMaybe<Scalars['ID']['input']>;
};

export type ContentConnectInput = {
  /** Allow to specify document position in list of connected documents, will default to appending at end of list */
  position?: InputMaybe<ConnectPositionInput>;
  /** Document to connect */
  where: ContentWhereUniqueInput;
};

/** A connection to a list of items. */
export type ContentConnection = {
  __typename?: 'ContentConnection';
  aggregate: Aggregate;
  /** A list of edges. */
  edges: Array<ContentEdge>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

export type ContentCreateInput = {
  centreren?: InputMaybe<Scalars['Boolean']['input']>;
  inhoud: Scalars['RichTextAST']['input'];
  introductie?: InputMaybe<Scalars['String']['input']>;
  subtitel?: InputMaybe<Scalars['String']['input']>;
  titel: Scalars['String']['input'];
  zijElement?: InputMaybe<ContentzijElementUnionCreateOneInlineInput>;
};

export type ContentCreateManyInlineInput = {
  /** Create and connect multiple existing Content documents */
  create?: InputMaybe<Array<ContentCreateInput>>;
};

export type ContentCreateOneInlineInput = {
  /** Create and connect one Content document */
  create?: InputMaybe<ContentCreateInput>;
};

export type ContentCreateWithPositionInput = {
  /** Document to create */
  data: ContentCreateInput;
  /** Position in the list of existing component instances, will default to appending at the end of list */
  position?: InputMaybe<ConnectPositionInput>;
};

/** An edge in a connection. */
export type ContentEdge = {
  __typename?: 'ContentEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge. */
  node: Content;
};

/** Identifies documents */
export type ContentManyWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<ContentWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<ContentWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<ContentWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']['input']>;
  centreren?: InputMaybe<Scalars['Boolean']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  centreren_not?: InputMaybe<Scalars['Boolean']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  id_not?: InputMaybe<Scalars['ID']['input']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']['input']>;
  introductie?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  introductie_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  introductie_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  introductie_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  introductie_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  introductie_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  introductie_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  introductie_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  introductie_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  introductie_starts_with?: InputMaybe<Scalars['String']['input']>;
  subtitel?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  subtitel_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  subtitel_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  subtitel_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  subtitel_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  subtitel_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  subtitel_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  subtitel_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  subtitel_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  subtitel_starts_with?: InputMaybe<Scalars['String']['input']>;
  titel?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  titel_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  titel_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  titel_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  titel_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  titel_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  titel_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  titel_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  titel_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  titel_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values in which the modular component is connected to the given models */
  zijElement?: InputMaybe<ContentzijElementUnionWhereInput>;
  /** All values in which the union is empty. */
  zijElement_empty?: InputMaybe<Scalars['Boolean']['input']>;
};

export enum ContentOrderByInput {
  CentrerenAsc = 'centreren_ASC',
  CentrerenDesc = 'centreren_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  IntroductieAsc = 'introductie_ASC',
  IntroductieDesc = 'introductie_DESC',
  SubtitelAsc = 'subtitel_ASC',
  SubtitelDesc = 'subtitel_DESC',
  TitelAsc = 'titel_ASC',
  TitelDesc = 'titel_DESC'
}

export type ContentParent = Pagina;

export type ContentParentConnectInput = {
  Pagina?: InputMaybe<PaginaConnectInput>;
};

export type ContentParentCreateInput = {
  Pagina?: InputMaybe<PaginaCreateInput>;
};

export type ContentParentCreateManyInlineInput = {
  /** Connect multiple existing ContentParent documents */
  connect?: InputMaybe<Array<ContentParentWhereUniqueInput>>;
  /** Create and connect multiple existing ContentParent documents */
  create?: InputMaybe<Array<ContentParentCreateInput>>;
};

export type ContentParentCreateOneInlineInput = {
  /** Connect one existing ContentParent document */
  connect?: InputMaybe<ContentParentWhereUniqueInput>;
  /** Create and connect one ContentParent document */
  create?: InputMaybe<ContentParentCreateInput>;
};

export type ContentParentUpdateInput = {
  Pagina?: InputMaybe<PaginaUpdateInput>;
};

export type ContentParentUpdateManyInlineInput = {
  /** Connect multiple existing ContentParent documents */
  connect?: InputMaybe<Array<ContentParentConnectInput>>;
  /** Create and connect multiple ContentParent documents */
  create?: InputMaybe<Array<ContentParentCreateInput>>;
  /** Delete multiple ContentParent documents */
  delete?: InputMaybe<Array<ContentParentWhereUniqueInput>>;
  /** Disconnect multiple ContentParent documents */
  disconnect?: InputMaybe<Array<ContentParentWhereUniqueInput>>;
  /** Override currently-connected documents with multiple existing ContentParent documents */
  set?: InputMaybe<Array<ContentParentWhereUniqueInput>>;
  /** Update multiple ContentParent documents */
  update?: InputMaybe<Array<ContentParentUpdateWithNestedWhereUniqueInput>>;
  /** Upsert multiple ContentParent documents */
  upsert?: InputMaybe<Array<ContentParentUpsertWithNestedWhereUniqueInput>>;
};

export type ContentParentUpdateManyWithNestedWhereInput = {
  Pagina?: InputMaybe<PaginaUpdateManyWithNestedWhereInput>;
};

export type ContentParentUpdateOneInlineInput = {
  /** Connect existing ContentParent document */
  connect?: InputMaybe<ContentParentWhereUniqueInput>;
  /** Create and connect one ContentParent document */
  create?: InputMaybe<ContentParentCreateInput>;
  /** Delete currently connected ContentParent document */
  delete?: InputMaybe<Scalars['Boolean']['input']>;
  /** Disconnect currently connected ContentParent document */
  disconnect?: InputMaybe<Scalars['Boolean']['input']>;
  /** Update single ContentParent document */
  update?: InputMaybe<ContentParentUpdateWithNestedWhereUniqueInput>;
  /** Upsert single ContentParent document */
  upsert?: InputMaybe<ContentParentUpsertWithNestedWhereUniqueInput>;
};

export type ContentParentUpdateWithNestedWhereUniqueInput = {
  Pagina?: InputMaybe<PaginaUpdateWithNestedWhereUniqueInput>;
};

export type ContentParentUpsertWithNestedWhereUniqueInput = {
  Pagina?: InputMaybe<PaginaUpsertWithNestedWhereUniqueInput>;
};

export type ContentParentWhereInput = {
  Pagina?: InputMaybe<PaginaWhereInput>;
};

export type ContentParentWhereUniqueInput = {
  Pagina?: InputMaybe<PaginaWhereUniqueInput>;
};

export type ContentUpdateInput = {
  centreren?: InputMaybe<Scalars['Boolean']['input']>;
  inhoud?: InputMaybe<Scalars['RichTextAST']['input']>;
  introductie?: InputMaybe<Scalars['String']['input']>;
  subtitel?: InputMaybe<Scalars['String']['input']>;
  titel?: InputMaybe<Scalars['String']['input']>;
  zijElement?: InputMaybe<ContentzijElementUnionUpdateOneInlineInput>;
};

export type ContentUpdateManyInlineInput = {
  /** Create and connect multiple Content component instances */
  create?: InputMaybe<Array<ContentCreateWithPositionInput>>;
  /** Delete multiple Content documents */
  delete?: InputMaybe<Array<ContentWhereUniqueInput>>;
  /** Update multiple Content component instances */
  update?: InputMaybe<Array<ContentUpdateWithNestedWhereUniqueAndPositionInput>>;
  /** Upsert multiple Content component instances */
  upsert?: InputMaybe<Array<ContentUpsertWithNestedWhereUniqueAndPositionInput>>;
};

export type ContentUpdateManyInput = {
  centreren?: InputMaybe<Scalars['Boolean']['input']>;
  inhoud?: InputMaybe<Scalars['RichTextAST']['input']>;
  introductie?: InputMaybe<Scalars['String']['input']>;
  subtitel?: InputMaybe<Scalars['String']['input']>;
  titel?: InputMaybe<Scalars['String']['input']>;
};

export type ContentUpdateManyWithNestedWhereInput = {
  /** Update many input */
  data: ContentUpdateManyInput;
  /** Document search */
  where: ContentWhereInput;
};

export type ContentUpdateOneInlineInput = {
  /** Create and connect one Content document */
  create?: InputMaybe<ContentCreateInput>;
  /** Delete currently connected Content document */
  delete?: InputMaybe<Scalars['Boolean']['input']>;
  /** Update single Content document */
  update?: InputMaybe<ContentUpdateWithNestedWhereUniqueInput>;
  /** Upsert single Content document */
  upsert?: InputMaybe<ContentUpsertWithNestedWhereUniqueInput>;
};

export type ContentUpdateWithNestedWhereUniqueAndPositionInput = {
  /** Document to update */
  data?: InputMaybe<ContentUpdateInput>;
  /** Position in the list of existing component instances, will default to appending at the end of list */
  position?: InputMaybe<ConnectPositionInput>;
  /** Unique component instance search */
  where: ContentWhereUniqueInput;
};

export type ContentUpdateWithNestedWhereUniqueInput = {
  /** Document to update */
  data: ContentUpdateInput;
  /** Unique document search */
  where: ContentWhereUniqueInput;
};

export type ContentUpsertInput = {
  /** Create document if it didn't exist */
  create: ContentCreateInput;
  /** Update document if it exists */
  update: ContentUpdateInput;
};

export type ContentUpsertWithNestedWhereUniqueAndPositionInput = {
  /** Document to upsert */
  data?: InputMaybe<ContentUpsertInput>;
  /** Position in the list of existing component instances, will default to appending at the end of list */
  position?: InputMaybe<ConnectPositionInput>;
  /** Unique component instance search */
  where: ContentWhereUniqueInput;
};

export type ContentUpsertWithNestedWhereUniqueInput = {
  /** Upsert data */
  data: ContentUpsertInput;
  /** Unique document search */
  where: ContentWhereUniqueInput;
};

/** Identifies documents */
export type ContentWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<ContentWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<ContentWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<ContentWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']['input']>;
  centreren?: InputMaybe<Scalars['Boolean']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  centreren_not?: InputMaybe<Scalars['Boolean']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  id_not?: InputMaybe<Scalars['ID']['input']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']['input']>;
  introductie?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  introductie_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  introductie_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  introductie_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  introductie_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  introductie_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  introductie_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  introductie_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  introductie_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  introductie_starts_with?: InputMaybe<Scalars['String']['input']>;
  subtitel?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  subtitel_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  subtitel_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  subtitel_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  subtitel_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  subtitel_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  subtitel_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  subtitel_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  subtitel_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  subtitel_starts_with?: InputMaybe<Scalars['String']['input']>;
  titel?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  titel_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  titel_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  titel_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  titel_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  titel_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  titel_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  titel_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  titel_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  titel_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values in which the modular component is connected to the given models */
  zijElement?: InputMaybe<ContentzijElementUnionWhereInput>;
  /** All values in which the union is empty. */
  zijElement_empty?: InputMaybe<Scalars['Boolean']['input']>;
};

/** References Content record uniquely */
export type ContentWhereUniqueInput = {
  id?: InputMaybe<Scalars['ID']['input']>;
};

export type ContentzijElementUnion = Afbeelding | Faq | Formulier | Quote;

export type ContentzijElementUnionConnectInput = {
  Afbeelding?: InputMaybe<AfbeeldingConnectInput>;
  Faq?: InputMaybe<FaqConnectInput>;
  Formulier?: InputMaybe<FormulierConnectInput>;
  Quote?: InputMaybe<QuoteConnectInput>;
};

export type ContentzijElementUnionCreateInput = {
  Afbeelding?: InputMaybe<AfbeeldingCreateInput>;
  Faq?: InputMaybe<FaqCreateInput>;
  Formulier?: InputMaybe<FormulierCreateInput>;
  Quote?: InputMaybe<QuoteCreateInput>;
};

export type ContentzijElementUnionCreateManyInlineInput = {
  /** Create and connect multiple existing ContentzijElementUnion documents */
  create?: InputMaybe<Array<ContentzijElementUnionCreateInput>>;
};

export type ContentzijElementUnionCreateOneInlineInput = {
  /** Create and connect one ContentzijElementUnion document */
  create?: InputMaybe<ContentzijElementUnionCreateInput>;
};

export type ContentzijElementUnionCreateWithPositionInput = {
  Afbeelding?: InputMaybe<AfbeeldingCreateWithPositionInput>;
  Faq?: InputMaybe<FaqCreateWithPositionInput>;
  Formulier?: InputMaybe<FormulierCreateWithPositionInput>;
  Quote?: InputMaybe<QuoteCreateWithPositionInput>;
};

export type ContentzijElementUnionUpdateInput = {
  Afbeelding?: InputMaybe<AfbeeldingUpdateInput>;
  Faq?: InputMaybe<FaqUpdateInput>;
  Formulier?: InputMaybe<FormulierUpdateInput>;
  Quote?: InputMaybe<QuoteUpdateInput>;
};

export type ContentzijElementUnionUpdateManyInlineInput = {
  /** Create and connect multiple ContentzijElementUnion component instances */
  create?: InputMaybe<Array<ContentzijElementUnionCreateWithPositionInput>>;
  /** Delete multiple ContentzijElementUnion documents */
  delete?: InputMaybe<Array<ContentzijElementUnionWhereUniqueInput>>;
  /** Update multiple ContentzijElementUnion component instances */
  update?: InputMaybe<Array<ContentzijElementUnionUpdateWithNestedWhereUniqueAndPositionInput>>;
  /** Upsert multiple ContentzijElementUnion component instances */
  upsert?: InputMaybe<Array<ContentzijElementUnionUpsertWithNestedWhereUniqueAndPositionInput>>;
};

export type ContentzijElementUnionUpdateManyWithNestedWhereInput = {
  Afbeelding?: InputMaybe<AfbeeldingUpdateManyWithNestedWhereInput>;
  Faq?: InputMaybe<FaqUpdateManyWithNestedWhereInput>;
  Formulier?: InputMaybe<FormulierUpdateManyWithNestedWhereInput>;
  Quote?: InputMaybe<QuoteUpdateManyWithNestedWhereInput>;
};

export type ContentzijElementUnionUpdateOneInlineInput = {
  /** Create and connect one ContentzijElementUnion document */
  create?: InputMaybe<ContentzijElementUnionCreateInput>;
  /** Delete currently connected ContentzijElementUnion document */
  delete?: InputMaybe<Scalars['Boolean']['input']>;
  /** Update single ContentzijElementUnion document */
  update?: InputMaybe<ContentzijElementUnionUpdateWithNestedWhereUniqueInput>;
  /** Upsert single ContentzijElementUnion document */
  upsert?: InputMaybe<ContentzijElementUnionUpsertWithNestedWhereUniqueInput>;
};

export type ContentzijElementUnionUpdateWithNestedWhereUniqueAndPositionInput = {
  Afbeelding?: InputMaybe<AfbeeldingUpdateWithNestedWhereUniqueAndPositionInput>;
  Faq?: InputMaybe<FaqUpdateWithNestedWhereUniqueAndPositionInput>;
  Formulier?: InputMaybe<FormulierUpdateWithNestedWhereUniqueAndPositionInput>;
  Quote?: InputMaybe<QuoteUpdateWithNestedWhereUniqueAndPositionInput>;
};

export type ContentzijElementUnionUpdateWithNestedWhereUniqueInput = {
  Afbeelding?: InputMaybe<AfbeeldingUpdateWithNestedWhereUniqueInput>;
  Faq?: InputMaybe<FaqUpdateWithNestedWhereUniqueInput>;
  Formulier?: InputMaybe<FormulierUpdateWithNestedWhereUniqueInput>;
  Quote?: InputMaybe<QuoteUpdateWithNestedWhereUniqueInput>;
};

export type ContentzijElementUnionUpsertWithNestedWhereUniqueAndPositionInput = {
  Afbeelding?: InputMaybe<AfbeeldingUpsertWithNestedWhereUniqueAndPositionInput>;
  Faq?: InputMaybe<FaqUpsertWithNestedWhereUniqueAndPositionInput>;
  Formulier?: InputMaybe<FormulierUpsertWithNestedWhereUniqueAndPositionInput>;
  Quote?: InputMaybe<QuoteUpsertWithNestedWhereUniqueAndPositionInput>;
};

export type ContentzijElementUnionUpsertWithNestedWhereUniqueInput = {
  Afbeelding?: InputMaybe<AfbeeldingUpsertWithNestedWhereUniqueInput>;
  Faq?: InputMaybe<FaqUpsertWithNestedWhereUniqueInput>;
  Formulier?: InputMaybe<FormulierUpsertWithNestedWhereUniqueInput>;
  Quote?: InputMaybe<QuoteUpsertWithNestedWhereUniqueInput>;
};

export type ContentzijElementUnionWhereInput = {
  Afbeelding?: InputMaybe<AfbeeldingWhereInput>;
  Faq?: InputMaybe<FaqWhereInput>;
  Formulier?: InputMaybe<FormulierWhereInput>;
  Quote?: InputMaybe<QuoteWhereInput>;
};

export type ContentzijElementUnionWhereUniqueInput = {
  Afbeelding?: InputMaybe<AfbeeldingWhereUniqueInput>;
  Faq?: InputMaybe<FaqWhereUniqueInput>;
  Formulier?: InputMaybe<FormulierWhereUniqueInput>;
  Quote?: InputMaybe<QuoteWhereUniqueInput>;
};

export enum DocumentFileTypes {
  /** Automatically selects the best format for the image based on the browser's capabilities. */
  AutoImage = 'autoImage',
  Avif = 'avif',
  Bmp = 'bmp',
  Gif = 'gif',
  Heic = 'heic',
  Jpg = 'jpg',
  Png = 'png',
  Svg = 'svg',
  Tiff = 'tiff',
  Webp = 'webp'
}

export type DocumentOutputInput = {
  /**
   * Transforms a document into a desired file type.
   * See this matrix for format support:
   *
   * JPG:	autoImage, bmp, gif, jpg, png, webp, tiff
   * PNG:	autoImage, bmp, gif, jpg, png, webp, tiff, svg
   * SVG:	autoImage, bmp, gif, jpg, png, webp, tiff
   * WEBP:	autoImage, bmp, gif, jpg, png, webp, tiff, svg
   * GIF:	autoImage, bmp, gif, jpg, png, webp, tiff, svg
   * TIFF:	autoImage, bmp, gif, jpg, png, webp, tiff, svg
   * AVIF:	autoImage, bmp, gif, jpg, png, webp, tiff, svg
   * PDF: 	autoImage, gif, jpg, png, webp, tiff
   *
   */
  format?: InputMaybe<DocumentFileTypes>;
};

/** Transformations for Documents */
export type DocumentTransformationInput = {
  /** Changes the output for the file. */
  output?: InputMaybe<DocumentOutputInput>;
};

export type DocumentVersion = {
  __typename?: 'DocumentVersion';
  createdAt: Scalars['DateTime']['output'];
  data?: Maybe<Scalars['Json']['output']>;
  id: Scalars['ID']['output'];
  revision: Scalars['Int']['output'];
  stage: Stage;
};

/** An object with an ID */
export type Entity = {
  /** The id of the object. */
  id: Scalars['ID']['output'];
  /** The Stage of an object */
  stage: Stage;
};

/** This enumeration holds all typenames that implement the Entity interface. Components and models implement the Entity interface. */
export enum EntityTypeName {
  Afbeelding = 'Afbeelding',
  /** Asset system model */
  Asset = 'Asset',
  /** Dit zijn leden die op de website kunnen berichten. */
  Bestuur = 'Bestuur',
  BlogPost = 'BlogPost',
  Button = 'Button',
  Content = 'Content',
  ContentBlok = 'ContentBlok',
  Faq = 'Faq',
  Formulier = 'Formulier',
  Hero = 'Hero',
  Moment = 'Moment',
  Pagina = 'Pagina',
  Partner = 'Partner',
  Project = 'Project',
  Quote = 'Quote',
  /** Scheduled Operation system model */
  ScheduledOperation = 'ScheduledOperation',
  /** Scheduled Release system model */
  ScheduledRelease = 'ScheduledRelease',
  TekstMetAfbeelding = 'TekstMetAfbeelding',
  Timeline = 'Timeline',
  /** User system model */
  User = 'User',
  VraagAntwoord = 'VraagAntwoord'
}

/** Allows to specify input to query models and components directly */
export type EntityWhereInput = {
  /** The ID of an object */
  id: Scalars['ID']['input'];
  locale?: InputMaybe<Locale>;
  stage: Stage;
  /** The Type name of an object */
  typename: EntityTypeName;
};

export type Faq = Entity & {
  __typename?: 'Faq';
  /** The unique identifier */
  id: Scalars['ID']['output'];
  /** System stage field */
  stage: Stage;
  /** de titel van het blok */
  titel?: Maybe<Scalars['String']['output']>;
  /** Selecteer de vraag antwoorden die van toepassing zijn op dit blok. */
  vragen: Array<FaqVragen>;
};


export type FaqVragenArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  locales?: InputMaybe<Array<Locale>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};

export type FaqConnectInput = {
  /** Allow to specify document position in list of connected documents, will default to appending at end of list */
  position?: InputMaybe<ConnectPositionInput>;
  /** Document to connect */
  where: FaqWhereUniqueInput;
};

/** A connection to a list of items. */
export type FaqConnection = {
  __typename?: 'FaqConnection';
  aggregate: Aggregate;
  /** A list of edges. */
  edges: Array<FaqEdge>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

export type FaqCreateInput = {
  titel?: InputMaybe<Scalars['String']['input']>;
  vragen?: InputMaybe<FaqVragenCreateManyInlineInput>;
};

export type FaqCreateManyInlineInput = {
  /** Create and connect multiple existing Faq documents */
  create?: InputMaybe<Array<FaqCreateInput>>;
};

export type FaqCreateOneInlineInput = {
  /** Create and connect one Faq document */
  create?: InputMaybe<FaqCreateInput>;
};

export type FaqCreateWithPositionInput = {
  /** Document to create */
  data: FaqCreateInput;
  /** Position in the list of existing component instances, will default to appending at the end of list */
  position?: InputMaybe<ConnectPositionInput>;
};

/** An edge in a connection. */
export type FaqEdge = {
  __typename?: 'FaqEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge. */
  node: Faq;
};

/** Identifies documents */
export type FaqManyWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<FaqWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<FaqWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<FaqWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  id_not?: InputMaybe<Scalars['ID']['input']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']['input']>;
  titel?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  titel_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  titel_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  titel_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  titel_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  titel_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  titel_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  titel_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  titel_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  titel_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values in which the union is empty */
  vragen_empty?: InputMaybe<Scalars['Boolean']['input']>;
  /** Matches if the union contains at least one connection to the provided item to the filter */
  vragen_some?: InputMaybe<FaqVragenWhereInput>;
};

export enum FaqOrderByInput {
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  TitelAsc = 'titel_ASC',
  TitelDesc = 'titel_DESC'
}

export type FaqParent = Content | Pagina | Project;

export type FaqParentConnectInput = {
  Content?: InputMaybe<ContentConnectInput>;
  Pagina?: InputMaybe<PaginaConnectInput>;
  Project?: InputMaybe<ProjectConnectInput>;
};

export type FaqParentCreateInput = {
  Content?: InputMaybe<ContentCreateInput>;
  Pagina?: InputMaybe<PaginaCreateInput>;
  Project?: InputMaybe<ProjectCreateInput>;
};

export type FaqParentCreateManyInlineInput = {
  /** Connect multiple existing FaqParent documents */
  connect?: InputMaybe<Array<FaqParentWhereUniqueInput>>;
  /** Create and connect multiple existing FaqParent documents */
  create?: InputMaybe<Array<FaqParentCreateInput>>;
};

export type FaqParentCreateOneInlineInput = {
  /** Connect one existing FaqParent document */
  connect?: InputMaybe<FaqParentWhereUniqueInput>;
  /** Create and connect one FaqParent document */
  create?: InputMaybe<FaqParentCreateInput>;
};

export type FaqParentUpdateInput = {
  Content?: InputMaybe<ContentUpdateInput>;
  Pagina?: InputMaybe<PaginaUpdateInput>;
  Project?: InputMaybe<ProjectUpdateInput>;
};

export type FaqParentUpdateManyInlineInput = {
  /** Connect multiple existing FaqParent documents */
  connect?: InputMaybe<Array<FaqParentConnectInput>>;
  /** Create and connect multiple FaqParent documents */
  create?: InputMaybe<Array<FaqParentCreateInput>>;
  /** Delete multiple FaqParent documents */
  delete?: InputMaybe<Array<FaqParentWhereUniqueInput>>;
  /** Disconnect multiple FaqParent documents */
  disconnect?: InputMaybe<Array<FaqParentWhereUniqueInput>>;
  /** Override currently-connected documents with multiple existing FaqParent documents */
  set?: InputMaybe<Array<FaqParentWhereUniqueInput>>;
  /** Update multiple FaqParent documents */
  update?: InputMaybe<Array<FaqParentUpdateWithNestedWhereUniqueInput>>;
  /** Upsert multiple FaqParent documents */
  upsert?: InputMaybe<Array<FaqParentUpsertWithNestedWhereUniqueInput>>;
};

export type FaqParentUpdateManyWithNestedWhereInput = {
  Content?: InputMaybe<ContentUpdateManyWithNestedWhereInput>;
  Pagina?: InputMaybe<PaginaUpdateManyWithNestedWhereInput>;
  Project?: InputMaybe<ProjectUpdateManyWithNestedWhereInput>;
};

export type FaqParentUpdateOneInlineInput = {
  /** Connect existing FaqParent document */
  connect?: InputMaybe<FaqParentWhereUniqueInput>;
  /** Create and connect one FaqParent document */
  create?: InputMaybe<FaqParentCreateInput>;
  /** Delete currently connected FaqParent document */
  delete?: InputMaybe<Scalars['Boolean']['input']>;
  /** Disconnect currently connected FaqParent document */
  disconnect?: InputMaybe<Scalars['Boolean']['input']>;
  /** Update single FaqParent document */
  update?: InputMaybe<FaqParentUpdateWithNestedWhereUniqueInput>;
  /** Upsert single FaqParent document */
  upsert?: InputMaybe<FaqParentUpsertWithNestedWhereUniqueInput>;
};

export type FaqParentUpdateWithNestedWhereUniqueInput = {
  Content?: InputMaybe<ContentUpdateWithNestedWhereUniqueInput>;
  Pagina?: InputMaybe<PaginaUpdateWithNestedWhereUniqueInput>;
  Project?: InputMaybe<ProjectUpdateWithNestedWhereUniqueInput>;
};

export type FaqParentUpsertWithNestedWhereUniqueInput = {
  Content?: InputMaybe<ContentUpsertWithNestedWhereUniqueInput>;
  Pagina?: InputMaybe<PaginaUpsertWithNestedWhereUniqueInput>;
  Project?: InputMaybe<ProjectUpsertWithNestedWhereUniqueInput>;
};

export type FaqParentWhereInput = {
  Content?: InputMaybe<ContentWhereInput>;
  Pagina?: InputMaybe<PaginaWhereInput>;
  Project?: InputMaybe<ProjectWhereInput>;
};

export type FaqParentWhereUniqueInput = {
  Content?: InputMaybe<ContentWhereUniqueInput>;
  Pagina?: InputMaybe<PaginaWhereUniqueInput>;
  Project?: InputMaybe<ProjectWhereUniqueInput>;
};

export type FaqUpdateInput = {
  titel?: InputMaybe<Scalars['String']['input']>;
  vragen?: InputMaybe<FaqVragenUpdateManyInlineInput>;
};

export type FaqUpdateManyInlineInput = {
  /** Create and connect multiple Faq component instances */
  create?: InputMaybe<Array<FaqCreateWithPositionInput>>;
  /** Delete multiple Faq documents */
  delete?: InputMaybe<Array<FaqWhereUniqueInput>>;
  /** Update multiple Faq component instances */
  update?: InputMaybe<Array<FaqUpdateWithNestedWhereUniqueAndPositionInput>>;
  /** Upsert multiple Faq component instances */
  upsert?: InputMaybe<Array<FaqUpsertWithNestedWhereUniqueAndPositionInput>>;
};

export type FaqUpdateManyInput = {
  titel?: InputMaybe<Scalars['String']['input']>;
};

export type FaqUpdateManyWithNestedWhereInput = {
  /** Update many input */
  data: FaqUpdateManyInput;
  /** Document search */
  where: FaqWhereInput;
};

export type FaqUpdateOneInlineInput = {
  /** Create and connect one Faq document */
  create?: InputMaybe<FaqCreateInput>;
  /** Delete currently connected Faq document */
  delete?: InputMaybe<Scalars['Boolean']['input']>;
  /** Update single Faq document */
  update?: InputMaybe<FaqUpdateWithNestedWhereUniqueInput>;
  /** Upsert single Faq document */
  upsert?: InputMaybe<FaqUpsertWithNestedWhereUniqueInput>;
};

export type FaqUpdateWithNestedWhereUniqueAndPositionInput = {
  /** Document to update */
  data?: InputMaybe<FaqUpdateInput>;
  /** Position in the list of existing component instances, will default to appending at the end of list */
  position?: InputMaybe<ConnectPositionInput>;
  /** Unique component instance search */
  where: FaqWhereUniqueInput;
};

export type FaqUpdateWithNestedWhereUniqueInput = {
  /** Document to update */
  data: FaqUpdateInput;
  /** Unique document search */
  where: FaqWhereUniqueInput;
};

export type FaqUpsertInput = {
  /** Create document if it didn't exist */
  create: FaqCreateInput;
  /** Update document if it exists */
  update: FaqUpdateInput;
};

export type FaqUpsertWithNestedWhereUniqueAndPositionInput = {
  /** Document to upsert */
  data?: InputMaybe<FaqUpsertInput>;
  /** Position in the list of existing component instances, will default to appending at the end of list */
  position?: InputMaybe<ConnectPositionInput>;
  /** Unique component instance search */
  where: FaqWhereUniqueInput;
};

export type FaqUpsertWithNestedWhereUniqueInput = {
  /** Upsert data */
  data: FaqUpsertInput;
  /** Unique document search */
  where: FaqWhereUniqueInput;
};

export type FaqVragen = VraagAntwoord;

export type FaqVragenConnectInput = {
  VraagAntwoord?: InputMaybe<VraagAntwoordConnectInput>;
};

export type FaqVragenCreateInput = {
  VraagAntwoord?: InputMaybe<VraagAntwoordCreateInput>;
};

export type FaqVragenCreateManyInlineInput = {
  /** Connect multiple existing FaqVragen documents */
  connect?: InputMaybe<Array<FaqVragenWhereUniqueInput>>;
  /** Create and connect multiple existing FaqVragen documents */
  create?: InputMaybe<Array<FaqVragenCreateInput>>;
};

export type FaqVragenCreateOneInlineInput = {
  /** Connect one existing FaqVragen document */
  connect?: InputMaybe<FaqVragenWhereUniqueInput>;
  /** Create and connect one FaqVragen document */
  create?: InputMaybe<FaqVragenCreateInput>;
};

export type FaqVragenUpdateInput = {
  VraagAntwoord?: InputMaybe<VraagAntwoordUpdateInput>;
};

export type FaqVragenUpdateManyInlineInput = {
  /** Connect multiple existing FaqVragen documents */
  connect?: InputMaybe<Array<FaqVragenConnectInput>>;
  /** Create and connect multiple FaqVragen documents */
  create?: InputMaybe<Array<FaqVragenCreateInput>>;
  /** Delete multiple FaqVragen documents */
  delete?: InputMaybe<Array<FaqVragenWhereUniqueInput>>;
  /** Disconnect multiple FaqVragen documents */
  disconnect?: InputMaybe<Array<FaqVragenWhereUniqueInput>>;
  /** Override currently-connected documents with multiple existing FaqVragen documents */
  set?: InputMaybe<Array<FaqVragenWhereUniqueInput>>;
  /** Update multiple FaqVragen documents */
  update?: InputMaybe<Array<FaqVragenUpdateWithNestedWhereUniqueInput>>;
  /** Upsert multiple FaqVragen documents */
  upsert?: InputMaybe<Array<FaqVragenUpsertWithNestedWhereUniqueInput>>;
};

export type FaqVragenUpdateManyWithNestedWhereInput = {
  VraagAntwoord?: InputMaybe<VraagAntwoordUpdateManyWithNestedWhereInput>;
};

export type FaqVragenUpdateOneInlineInput = {
  /** Connect existing FaqVragen document */
  connect?: InputMaybe<FaqVragenWhereUniqueInput>;
  /** Create and connect one FaqVragen document */
  create?: InputMaybe<FaqVragenCreateInput>;
  /** Delete currently connected FaqVragen document */
  delete?: InputMaybe<Scalars['Boolean']['input']>;
  /** Disconnect currently connected FaqVragen document */
  disconnect?: InputMaybe<Scalars['Boolean']['input']>;
  /** Update single FaqVragen document */
  update?: InputMaybe<FaqVragenUpdateWithNestedWhereUniqueInput>;
  /** Upsert single FaqVragen document */
  upsert?: InputMaybe<FaqVragenUpsertWithNestedWhereUniqueInput>;
};

export type FaqVragenUpdateWithNestedWhereUniqueInput = {
  VraagAntwoord?: InputMaybe<VraagAntwoordUpdateWithNestedWhereUniqueInput>;
};

export type FaqVragenUpsertWithNestedWhereUniqueInput = {
  VraagAntwoord?: InputMaybe<VraagAntwoordUpsertWithNestedWhereUniqueInput>;
};

export type FaqVragenWhereInput = {
  VraagAntwoord?: InputMaybe<VraagAntwoordWhereInput>;
};

export type FaqVragenWhereUniqueInput = {
  VraagAntwoord?: InputMaybe<VraagAntwoordWhereUniqueInput>;
};

/** Identifies documents */
export type FaqWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<FaqWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<FaqWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<FaqWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  id_not?: InputMaybe<Scalars['ID']['input']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']['input']>;
  titel?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  titel_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  titel_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  titel_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  titel_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  titel_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  titel_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  titel_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  titel_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  titel_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values in which the union is empty */
  vragen_empty?: InputMaybe<Scalars['Boolean']['input']>;
  /** Matches if the union contains at least one connection to the provided item to the filter */
  vragen_some?: InputMaybe<FaqVragenWhereInput>;
};

/** References Faq record uniquely */
export type FaqWhereUniqueInput = {
  id?: InputMaybe<Scalars['ID']['input']>;
};

export type Formulier = Entity & {
  __typename?: 'Formulier';
  /** afbeelding ter verduidelijking. Bijvoorbeeld een AFM banner. */
  afbeelding?: Maybe<Asset>;
  beschijving?: Maybe<Scalars['String']['output']>;
  formulierTitel: Scalars['String']['output'];
  /** The unique identifier */
  id: Scalars['ID']['output'];
  /** Formulieren zijn lastig te maken, en lastig te beheren. Voor nu heb ik gekozen voor een Google form embed. Je maakt gemakkelijk een fomulier op google forms, en stuurt die dan door naar je mail. Op dit veld vul je de embed link van google forms in. (verzenden dan de <> en dan de HTML Insluiten) */
  iframe?: Maybe<Scalars['String']['output']>;
  /** System stage field */
  stage: Stage;
};


export type FormulierAfbeeldingArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>;
  locales?: InputMaybe<Array<Locale>>;
  where?: InputMaybe<AssetSingleRelationWhereInput>;
};

export type FormulierConnectInput = {
  /** Allow to specify document position in list of connected documents, will default to appending at end of list */
  position?: InputMaybe<ConnectPositionInput>;
  /** Document to connect */
  where: FormulierWhereUniqueInput;
};

/** A connection to a list of items. */
export type FormulierConnection = {
  __typename?: 'FormulierConnection';
  aggregate: Aggregate;
  /** A list of edges. */
  edges: Array<FormulierEdge>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

export type FormulierCreateInput = {
  afbeelding?: InputMaybe<AssetCreateOneInlineInput>;
  beschijving?: InputMaybe<Scalars['String']['input']>;
  formulierTitel: Scalars['String']['input'];
  iframe?: InputMaybe<Scalars['String']['input']>;
};

export type FormulierCreateManyInlineInput = {
  /** Create and connect multiple existing Formulier documents */
  create?: InputMaybe<Array<FormulierCreateInput>>;
};

export type FormulierCreateOneInlineInput = {
  /** Create and connect one Formulier document */
  create?: InputMaybe<FormulierCreateInput>;
};

export type FormulierCreateWithPositionInput = {
  /** Document to create */
  data: FormulierCreateInput;
  /** Position in the list of existing component instances, will default to appending at the end of list */
  position?: InputMaybe<ConnectPositionInput>;
};

/** An edge in a connection. */
export type FormulierEdge = {
  __typename?: 'FormulierEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge. */
  node: Formulier;
};

/** Identifies documents */
export type FormulierManyWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<FormulierWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<FormulierWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<FormulierWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']['input']>;
  afbeelding?: InputMaybe<AssetWhereInput>;
  beschijving?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  beschijving_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  beschijving_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  beschijving_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  beschijving_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  beschijving_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  beschijving_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  beschijving_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  beschijving_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  beschijving_starts_with?: InputMaybe<Scalars['String']['input']>;
  formulierTitel?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  formulierTitel_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  formulierTitel_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  formulierTitel_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  formulierTitel_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  formulierTitel_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  formulierTitel_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  formulierTitel_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  formulierTitel_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  formulierTitel_starts_with?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  id_not?: InputMaybe<Scalars['ID']['input']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']['input']>;
  iframe?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  iframe_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  iframe_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  iframe_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  iframe_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  iframe_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  iframe_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  iframe_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  iframe_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  iframe_starts_with?: InputMaybe<Scalars['String']['input']>;
};

export enum FormulierOrderByInput {
  BeschijvingAsc = 'beschijving_ASC',
  BeschijvingDesc = 'beschijving_DESC',
  FormulierTitelAsc = 'formulierTitel_ASC',
  FormulierTitelDesc = 'formulierTitel_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  IframeAsc = 'iframe_ASC',
  IframeDesc = 'iframe_DESC'
}

export type FormulierParent = Content | Pagina | Project;

export type FormulierParentConnectInput = {
  Content?: InputMaybe<ContentConnectInput>;
  Pagina?: InputMaybe<PaginaConnectInput>;
  Project?: InputMaybe<ProjectConnectInput>;
};

export type FormulierParentCreateInput = {
  Content?: InputMaybe<ContentCreateInput>;
  Pagina?: InputMaybe<PaginaCreateInput>;
  Project?: InputMaybe<ProjectCreateInput>;
};

export type FormulierParentCreateManyInlineInput = {
  /** Connect multiple existing FormulierParent documents */
  connect?: InputMaybe<Array<FormulierParentWhereUniqueInput>>;
  /** Create and connect multiple existing FormulierParent documents */
  create?: InputMaybe<Array<FormulierParentCreateInput>>;
};

export type FormulierParentCreateOneInlineInput = {
  /** Connect one existing FormulierParent document */
  connect?: InputMaybe<FormulierParentWhereUniqueInput>;
  /** Create and connect one FormulierParent document */
  create?: InputMaybe<FormulierParentCreateInput>;
};

export type FormulierParentUpdateInput = {
  Content?: InputMaybe<ContentUpdateInput>;
  Pagina?: InputMaybe<PaginaUpdateInput>;
  Project?: InputMaybe<ProjectUpdateInput>;
};

export type FormulierParentUpdateManyInlineInput = {
  /** Connect multiple existing FormulierParent documents */
  connect?: InputMaybe<Array<FormulierParentConnectInput>>;
  /** Create and connect multiple FormulierParent documents */
  create?: InputMaybe<Array<FormulierParentCreateInput>>;
  /** Delete multiple FormulierParent documents */
  delete?: InputMaybe<Array<FormulierParentWhereUniqueInput>>;
  /** Disconnect multiple FormulierParent documents */
  disconnect?: InputMaybe<Array<FormulierParentWhereUniqueInput>>;
  /** Override currently-connected documents with multiple existing FormulierParent documents */
  set?: InputMaybe<Array<FormulierParentWhereUniqueInput>>;
  /** Update multiple FormulierParent documents */
  update?: InputMaybe<Array<FormulierParentUpdateWithNestedWhereUniqueInput>>;
  /** Upsert multiple FormulierParent documents */
  upsert?: InputMaybe<Array<FormulierParentUpsertWithNestedWhereUniqueInput>>;
};

export type FormulierParentUpdateManyWithNestedWhereInput = {
  Content?: InputMaybe<ContentUpdateManyWithNestedWhereInput>;
  Pagina?: InputMaybe<PaginaUpdateManyWithNestedWhereInput>;
  Project?: InputMaybe<ProjectUpdateManyWithNestedWhereInput>;
};

export type FormulierParentUpdateOneInlineInput = {
  /** Connect existing FormulierParent document */
  connect?: InputMaybe<FormulierParentWhereUniqueInput>;
  /** Create and connect one FormulierParent document */
  create?: InputMaybe<FormulierParentCreateInput>;
  /** Delete currently connected FormulierParent document */
  delete?: InputMaybe<Scalars['Boolean']['input']>;
  /** Disconnect currently connected FormulierParent document */
  disconnect?: InputMaybe<Scalars['Boolean']['input']>;
  /** Update single FormulierParent document */
  update?: InputMaybe<FormulierParentUpdateWithNestedWhereUniqueInput>;
  /** Upsert single FormulierParent document */
  upsert?: InputMaybe<FormulierParentUpsertWithNestedWhereUniqueInput>;
};

export type FormulierParentUpdateWithNestedWhereUniqueInput = {
  Content?: InputMaybe<ContentUpdateWithNestedWhereUniqueInput>;
  Pagina?: InputMaybe<PaginaUpdateWithNestedWhereUniqueInput>;
  Project?: InputMaybe<ProjectUpdateWithNestedWhereUniqueInput>;
};

export type FormulierParentUpsertWithNestedWhereUniqueInput = {
  Content?: InputMaybe<ContentUpsertWithNestedWhereUniqueInput>;
  Pagina?: InputMaybe<PaginaUpsertWithNestedWhereUniqueInput>;
  Project?: InputMaybe<ProjectUpsertWithNestedWhereUniqueInput>;
};

export type FormulierParentWhereInput = {
  Content?: InputMaybe<ContentWhereInput>;
  Pagina?: InputMaybe<PaginaWhereInput>;
  Project?: InputMaybe<ProjectWhereInput>;
};

export type FormulierParentWhereUniqueInput = {
  Content?: InputMaybe<ContentWhereUniqueInput>;
  Pagina?: InputMaybe<PaginaWhereUniqueInput>;
  Project?: InputMaybe<ProjectWhereUniqueInput>;
};

export type FormulierUpdateInput = {
  afbeelding?: InputMaybe<AssetUpdateOneInlineInput>;
  beschijving?: InputMaybe<Scalars['String']['input']>;
  formulierTitel?: InputMaybe<Scalars['String']['input']>;
  iframe?: InputMaybe<Scalars['String']['input']>;
};

export type FormulierUpdateManyInlineInput = {
  /** Create and connect multiple Formulier component instances */
  create?: InputMaybe<Array<FormulierCreateWithPositionInput>>;
  /** Delete multiple Formulier documents */
  delete?: InputMaybe<Array<FormulierWhereUniqueInput>>;
  /** Update multiple Formulier component instances */
  update?: InputMaybe<Array<FormulierUpdateWithNestedWhereUniqueAndPositionInput>>;
  /** Upsert multiple Formulier component instances */
  upsert?: InputMaybe<Array<FormulierUpsertWithNestedWhereUniqueAndPositionInput>>;
};

export type FormulierUpdateManyInput = {
  beschijving?: InputMaybe<Scalars['String']['input']>;
  formulierTitel?: InputMaybe<Scalars['String']['input']>;
  iframe?: InputMaybe<Scalars['String']['input']>;
};

export type FormulierUpdateManyWithNestedWhereInput = {
  /** Update many input */
  data: FormulierUpdateManyInput;
  /** Document search */
  where: FormulierWhereInput;
};

export type FormulierUpdateOneInlineInput = {
  /** Create and connect one Formulier document */
  create?: InputMaybe<FormulierCreateInput>;
  /** Delete currently connected Formulier document */
  delete?: InputMaybe<Scalars['Boolean']['input']>;
  /** Update single Formulier document */
  update?: InputMaybe<FormulierUpdateWithNestedWhereUniqueInput>;
  /** Upsert single Formulier document */
  upsert?: InputMaybe<FormulierUpsertWithNestedWhereUniqueInput>;
};

export type FormulierUpdateWithNestedWhereUniqueAndPositionInput = {
  /** Document to update */
  data?: InputMaybe<FormulierUpdateInput>;
  /** Position in the list of existing component instances, will default to appending at the end of list */
  position?: InputMaybe<ConnectPositionInput>;
  /** Unique component instance search */
  where: FormulierWhereUniqueInput;
};

export type FormulierUpdateWithNestedWhereUniqueInput = {
  /** Document to update */
  data: FormulierUpdateInput;
  /** Unique document search */
  where: FormulierWhereUniqueInput;
};

export type FormulierUpsertInput = {
  /** Create document if it didn't exist */
  create: FormulierCreateInput;
  /** Update document if it exists */
  update: FormulierUpdateInput;
};

export type FormulierUpsertWithNestedWhereUniqueAndPositionInput = {
  /** Document to upsert */
  data?: InputMaybe<FormulierUpsertInput>;
  /** Position in the list of existing component instances, will default to appending at the end of list */
  position?: InputMaybe<ConnectPositionInput>;
  /** Unique component instance search */
  where: FormulierWhereUniqueInput;
};

export type FormulierUpsertWithNestedWhereUniqueInput = {
  /** Upsert data */
  data: FormulierUpsertInput;
  /** Unique document search */
  where: FormulierWhereUniqueInput;
};

/** Identifies documents */
export type FormulierWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<FormulierWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<FormulierWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<FormulierWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']['input']>;
  afbeelding?: InputMaybe<AssetWhereInput>;
  beschijving?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  beschijving_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  beschijving_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  beschijving_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  beschijving_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  beschijving_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  beschijving_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  beschijving_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  beschijving_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  beschijving_starts_with?: InputMaybe<Scalars['String']['input']>;
  formulierTitel?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  formulierTitel_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  formulierTitel_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  formulierTitel_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  formulierTitel_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  formulierTitel_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  formulierTitel_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  formulierTitel_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  formulierTitel_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  formulierTitel_starts_with?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  id_not?: InputMaybe<Scalars['ID']['input']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']['input']>;
  iframe?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  iframe_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  iframe_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  iframe_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  iframe_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  iframe_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  iframe_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  iframe_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  iframe_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  iframe_starts_with?: InputMaybe<Scalars['String']['input']>;
};

/** References Formulier record uniquely */
export type FormulierWhereUniqueInput = {
  id?: InputMaybe<Scalars['ID']['input']>;
};

export type Hero = Entity & {
  __typename?: 'Hero';
  afbeelding?: Maybe<Asset>;
  afbeelding2?: Maybe<Asset>;
  afbeelding3?: Maybe<Asset>;
  afbeelding4?: Maybe<Asset>;
  afbeelding5?: Maybe<Asset>;
  center?: Maybe<Scalars['Boolean']['output']>;
  /** The unique identifier */
  id: Scalars['ID']['output'];
  primareActie?: Maybe<Button>;
  secondaireActie?: Maybe<Button>;
  small?: Maybe<Scalars['Boolean']['output']>;
  /** System stage field */
  stage: Stage;
  subtitel?: Maybe<Scalars['String']['output']>;
  title?: Maybe<Scalars['String']['output']>;
};


export type HeroAfbeeldingArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>;
  locales?: InputMaybe<Array<Locale>>;
  where?: InputMaybe<AssetSingleRelationWhereInput>;
};


export type HeroAfbeelding2Args = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>;
  locales?: InputMaybe<Array<Locale>>;
  where?: InputMaybe<AssetSingleRelationWhereInput>;
};


export type HeroAfbeelding3Args = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>;
  locales?: InputMaybe<Array<Locale>>;
  where?: InputMaybe<AssetSingleRelationWhereInput>;
};


export type HeroAfbeelding4Args = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>;
  locales?: InputMaybe<Array<Locale>>;
  where?: InputMaybe<AssetSingleRelationWhereInput>;
};


export type HeroAfbeelding5Args = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>;
  locales?: InputMaybe<Array<Locale>>;
  where?: InputMaybe<AssetSingleRelationWhereInput>;
};


export type HeroPrimareActieArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>;
  locales?: InputMaybe<Array<Locale>>;
};


export type HeroSecondaireActieArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>;
  locales?: InputMaybe<Array<Locale>>;
};

export type HeroConnectInput = {
  /** Allow to specify document position in list of connected documents, will default to appending at end of list */
  position?: InputMaybe<ConnectPositionInput>;
  /** Document to connect */
  where: HeroWhereUniqueInput;
};

/** A connection to a list of items. */
export type HeroConnection = {
  __typename?: 'HeroConnection';
  aggregate: Aggregate;
  /** A list of edges. */
  edges: Array<HeroEdge>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

export type HeroCreateInput = {
  afbeelding?: InputMaybe<AssetCreateOneInlineInput>;
  afbeelding2?: InputMaybe<AssetCreateOneInlineInput>;
  afbeelding3?: InputMaybe<AssetCreateOneInlineInput>;
  afbeelding4?: InputMaybe<AssetCreateOneInlineInput>;
  afbeelding5?: InputMaybe<AssetCreateOneInlineInput>;
  center?: InputMaybe<Scalars['Boolean']['input']>;
  primareActie?: InputMaybe<ButtonCreateOneInlineInput>;
  secondaireActie?: InputMaybe<ButtonCreateOneInlineInput>;
  small?: InputMaybe<Scalars['Boolean']['input']>;
  subtitel?: InputMaybe<Scalars['String']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
};

export type HeroCreateManyInlineInput = {
  /** Create and connect multiple existing Hero documents */
  create?: InputMaybe<Array<HeroCreateInput>>;
};

export type HeroCreateOneInlineInput = {
  /** Create and connect one Hero document */
  create?: InputMaybe<HeroCreateInput>;
};

export type HeroCreateWithPositionInput = {
  /** Document to create */
  data: HeroCreateInput;
  /** Position in the list of existing component instances, will default to appending at the end of list */
  position?: InputMaybe<ConnectPositionInput>;
};

/** An edge in a connection. */
export type HeroEdge = {
  __typename?: 'HeroEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge. */
  node: Hero;
};

/** Identifies documents */
export type HeroManyWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<HeroWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<HeroWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<HeroWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']['input']>;
  afbeelding?: InputMaybe<AssetWhereInput>;
  afbeelding2?: InputMaybe<AssetWhereInput>;
  afbeelding3?: InputMaybe<AssetWhereInput>;
  afbeelding4?: InputMaybe<AssetWhereInput>;
  afbeelding5?: InputMaybe<AssetWhereInput>;
  center?: InputMaybe<Scalars['Boolean']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  center_not?: InputMaybe<Scalars['Boolean']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  id_not?: InputMaybe<Scalars['ID']['input']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']['input']>;
  primareActie?: InputMaybe<ButtonWhereInput>;
  secondaireActie?: InputMaybe<ButtonWhereInput>;
  small?: InputMaybe<Scalars['Boolean']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  small_not?: InputMaybe<Scalars['Boolean']['input']>;
  subtitel?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  subtitel_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  subtitel_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  subtitel_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  subtitel_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  subtitel_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  subtitel_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  subtitel_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  subtitel_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  subtitel_starts_with?: InputMaybe<Scalars['String']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  title_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  title_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  title_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  title_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  title_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  title_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  title_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  title_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  title_starts_with?: InputMaybe<Scalars['String']['input']>;
};

export enum HeroOrderByInput {
  CenterAsc = 'center_ASC',
  CenterDesc = 'center_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  SmallAsc = 'small_ASC',
  SmallDesc = 'small_DESC',
  SubtitelAsc = 'subtitel_ASC',
  SubtitelDesc = 'subtitel_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC'
}

export type HeroParent = Pagina;

export type HeroParentConnectInput = {
  Pagina?: InputMaybe<PaginaConnectInput>;
};

export type HeroParentCreateInput = {
  Pagina?: InputMaybe<PaginaCreateInput>;
};

export type HeroParentCreateManyInlineInput = {
  /** Connect multiple existing HeroParent documents */
  connect?: InputMaybe<Array<HeroParentWhereUniqueInput>>;
  /** Create and connect multiple existing HeroParent documents */
  create?: InputMaybe<Array<HeroParentCreateInput>>;
};

export type HeroParentCreateOneInlineInput = {
  /** Connect one existing HeroParent document */
  connect?: InputMaybe<HeroParentWhereUniqueInput>;
  /** Create and connect one HeroParent document */
  create?: InputMaybe<HeroParentCreateInput>;
};

export type HeroParentUpdateInput = {
  Pagina?: InputMaybe<PaginaUpdateInput>;
};

export type HeroParentUpdateManyInlineInput = {
  /** Connect multiple existing HeroParent documents */
  connect?: InputMaybe<Array<HeroParentConnectInput>>;
  /** Create and connect multiple HeroParent documents */
  create?: InputMaybe<Array<HeroParentCreateInput>>;
  /** Delete multiple HeroParent documents */
  delete?: InputMaybe<Array<HeroParentWhereUniqueInput>>;
  /** Disconnect multiple HeroParent documents */
  disconnect?: InputMaybe<Array<HeroParentWhereUniqueInput>>;
  /** Override currently-connected documents with multiple existing HeroParent documents */
  set?: InputMaybe<Array<HeroParentWhereUniqueInput>>;
  /** Update multiple HeroParent documents */
  update?: InputMaybe<Array<HeroParentUpdateWithNestedWhereUniqueInput>>;
  /** Upsert multiple HeroParent documents */
  upsert?: InputMaybe<Array<HeroParentUpsertWithNestedWhereUniqueInput>>;
};

export type HeroParentUpdateManyWithNestedWhereInput = {
  Pagina?: InputMaybe<PaginaUpdateManyWithNestedWhereInput>;
};

export type HeroParentUpdateOneInlineInput = {
  /** Connect existing HeroParent document */
  connect?: InputMaybe<HeroParentWhereUniqueInput>;
  /** Create and connect one HeroParent document */
  create?: InputMaybe<HeroParentCreateInput>;
  /** Delete currently connected HeroParent document */
  delete?: InputMaybe<Scalars['Boolean']['input']>;
  /** Disconnect currently connected HeroParent document */
  disconnect?: InputMaybe<Scalars['Boolean']['input']>;
  /** Update single HeroParent document */
  update?: InputMaybe<HeroParentUpdateWithNestedWhereUniqueInput>;
  /** Upsert single HeroParent document */
  upsert?: InputMaybe<HeroParentUpsertWithNestedWhereUniqueInput>;
};

export type HeroParentUpdateWithNestedWhereUniqueInput = {
  Pagina?: InputMaybe<PaginaUpdateWithNestedWhereUniqueInput>;
};

export type HeroParentUpsertWithNestedWhereUniqueInput = {
  Pagina?: InputMaybe<PaginaUpsertWithNestedWhereUniqueInput>;
};

export type HeroParentWhereInput = {
  Pagina?: InputMaybe<PaginaWhereInput>;
};

export type HeroParentWhereUniqueInput = {
  Pagina?: InputMaybe<PaginaWhereUniqueInput>;
};

export type HeroUpdateInput = {
  afbeelding?: InputMaybe<AssetUpdateOneInlineInput>;
  afbeelding2?: InputMaybe<AssetUpdateOneInlineInput>;
  afbeelding3?: InputMaybe<AssetUpdateOneInlineInput>;
  afbeelding4?: InputMaybe<AssetUpdateOneInlineInput>;
  afbeelding5?: InputMaybe<AssetUpdateOneInlineInput>;
  center?: InputMaybe<Scalars['Boolean']['input']>;
  primareActie?: InputMaybe<ButtonUpdateOneInlineInput>;
  secondaireActie?: InputMaybe<ButtonUpdateOneInlineInput>;
  small?: InputMaybe<Scalars['Boolean']['input']>;
  subtitel?: InputMaybe<Scalars['String']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
};

export type HeroUpdateManyInlineInput = {
  /** Create and connect multiple Hero component instances */
  create?: InputMaybe<Array<HeroCreateWithPositionInput>>;
  /** Delete multiple Hero documents */
  delete?: InputMaybe<Array<HeroWhereUniqueInput>>;
  /** Update multiple Hero component instances */
  update?: InputMaybe<Array<HeroUpdateWithNestedWhereUniqueAndPositionInput>>;
  /** Upsert multiple Hero component instances */
  upsert?: InputMaybe<Array<HeroUpsertWithNestedWhereUniqueAndPositionInput>>;
};

export type HeroUpdateManyInput = {
  center?: InputMaybe<Scalars['Boolean']['input']>;
  small?: InputMaybe<Scalars['Boolean']['input']>;
  subtitel?: InputMaybe<Scalars['String']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
};

export type HeroUpdateManyWithNestedWhereInput = {
  /** Update many input */
  data: HeroUpdateManyInput;
  /** Document search */
  where: HeroWhereInput;
};

export type HeroUpdateOneInlineInput = {
  /** Create and connect one Hero document */
  create?: InputMaybe<HeroCreateInput>;
  /** Delete currently connected Hero document */
  delete?: InputMaybe<Scalars['Boolean']['input']>;
  /** Update single Hero document */
  update?: InputMaybe<HeroUpdateWithNestedWhereUniqueInput>;
  /** Upsert single Hero document */
  upsert?: InputMaybe<HeroUpsertWithNestedWhereUniqueInput>;
};

export type HeroUpdateWithNestedWhereUniqueAndPositionInput = {
  /** Document to update */
  data?: InputMaybe<HeroUpdateInput>;
  /** Position in the list of existing component instances, will default to appending at the end of list */
  position?: InputMaybe<ConnectPositionInput>;
  /** Unique component instance search */
  where: HeroWhereUniqueInput;
};

export type HeroUpdateWithNestedWhereUniqueInput = {
  /** Document to update */
  data: HeroUpdateInput;
  /** Unique document search */
  where: HeroWhereUniqueInput;
};

export type HeroUpsertInput = {
  /** Create document if it didn't exist */
  create: HeroCreateInput;
  /** Update document if it exists */
  update: HeroUpdateInput;
};

export type HeroUpsertWithNestedWhereUniqueAndPositionInput = {
  /** Document to upsert */
  data?: InputMaybe<HeroUpsertInput>;
  /** Position in the list of existing component instances, will default to appending at the end of list */
  position?: InputMaybe<ConnectPositionInput>;
  /** Unique component instance search */
  where: HeroWhereUniqueInput;
};

export type HeroUpsertWithNestedWhereUniqueInput = {
  /** Upsert data */
  data: HeroUpsertInput;
  /** Unique document search */
  where: HeroWhereUniqueInput;
};

/** Identifies documents */
export type HeroWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<HeroWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<HeroWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<HeroWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']['input']>;
  afbeelding?: InputMaybe<AssetWhereInput>;
  afbeelding2?: InputMaybe<AssetWhereInput>;
  afbeelding3?: InputMaybe<AssetWhereInput>;
  afbeelding4?: InputMaybe<AssetWhereInput>;
  afbeelding5?: InputMaybe<AssetWhereInput>;
  center?: InputMaybe<Scalars['Boolean']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  center_not?: InputMaybe<Scalars['Boolean']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  id_not?: InputMaybe<Scalars['ID']['input']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']['input']>;
  primareActie?: InputMaybe<ButtonWhereInput>;
  secondaireActie?: InputMaybe<ButtonWhereInput>;
  small?: InputMaybe<Scalars['Boolean']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  small_not?: InputMaybe<Scalars['Boolean']['input']>;
  subtitel?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  subtitel_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  subtitel_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  subtitel_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  subtitel_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  subtitel_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  subtitel_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  subtitel_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  subtitel_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  subtitel_starts_with?: InputMaybe<Scalars['String']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  title_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  title_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  title_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  title_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  title_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  title_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  title_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  title_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  title_starts_with?: InputMaybe<Scalars['String']['input']>;
};

/** References Hero record uniquely */
export type HeroWhereUniqueInput = {
  id?: InputMaybe<Scalars['ID']['input']>;
};

export type ImageBlurInput = {
  /** The amount of blurring to apply to the image. The value must be an integer from 1 to 20. */
  amount: Scalars['Int']['input'];
};

/** Adds a border to the image. */
export type ImageBorderInput = {
  /** The background color of the border. The value must be a valid hex color code. Or one of the supported color names. */
  background: Scalars['String']['input'];
  /** The color of the border. The value must be a valid hex color code. Or one of the supported color names. */
  color: Scalars['String']['input'];
  /** The width of the border in pixels. The value must be an integer from 1 to 1000. */
  width: Scalars['Int']['input'];
};

export type ImageCompressInput = {
  /** Preserves the metadata of the image. */
  metadata: Scalars['Boolean']['input'];
};

/**
 * Crops the image to the specified dimensions.
 * The starting points for X and Y coordinates are [0,0], aligning with the top-left corner of the image.
 * The width and height parameters determine the size in pixels of the cropping rectangle.
 * The output will include only the portion of the image within the designated crop area.
 */
export type ImageCropInput = {
  /** The height in pixels to resize the image to. The value must be an integer from 1 to 10000. */
  height: Scalars['Int']['input'];
  /** The width in pixels to resize the image to. The value must be an integer from 1 to 10000. */
  width: Scalars['Int']['input'];
  /** The x coordinate of the image. The value must be an integer from 0 to 10000. */
  x: Scalars['Int']['input'];
  /** The y coordinate of the image. The value must be an integer from 0 to 10000. */
  y: Scalars['Int']['input'];
};

export enum ImageFit {
  /** Resizes the image to fit within the specified parameters without distorting, cropping, or changing the aspect ratio. */
  Clip = 'clip',
  /** Resizes the image to fit the specified parameters exactly by removing any parts of the image that don't fit within the boundaries. */
  Crop = 'crop',
  /** Resizes the image to fit within the parameters, but as opposed to 'fit:clip' will not scale the image if the image is smaller than the output size. */
  Max = 'max',
  /** Resizes the image to fit the specified parameters exactly by scaling the image to the desired size. The aspect ratio of the image is not respected and the image can be distorted using this method. */
  Scale = 'scale'
}

export type ImageQualityInput = {
  /** The quality of the image. The value must be an integer from 1 to 100. */
  value: Scalars['Int']['input'];
};

export type ImageResizeInput = {
  /** The default value for the fit parameter is fit:clip. */
  fit?: InputMaybe<ImageFit>;
  /** The height in pixels to resize the image to. The value must be an integer from 1 to 10000. */
  height?: InputMaybe<Scalars['Int']['input']>;
  /** The width in pixels to resize the image to. The value must be an integer from 1 to 10000. */
  width?: InputMaybe<Scalars['Int']['input']>;
};

export type ImageSharpenInput = {
  /** The amount of sharpening to apply to the image. The value must be an integer from 1 to 20. */
  amount: Scalars['Int']['input'];
};

/** Transformations for Images */
export type ImageTransformationInput = {
  /** Blurs the image. */
  blur?: InputMaybe<ImageBlurInput>;
  /** Adds a border to the image. */
  border?: InputMaybe<ImageBorderInput>;
  /** Compresses the image. */
  compress?: InputMaybe<ImageCompressInput>;
  /** Crops the image to the specified dimensions. */
  crop?: InputMaybe<ImageCropInput>;
  /**
   * Changes the quality of the image. The value must be an integer from 1 to 100.
   * Only supported for the following formats jpeg, jpg, webp, gif, heif, tiff, avif.
   */
  quality?: InputMaybe<ImageQualityInput>;
  /** Resizes the image */
  resize?: InputMaybe<ImageResizeInput>;
  /** Sharpens the image. */
  sharpen?: InputMaybe<ImageSharpenInput>;
};

/** Locale system enumeration */
export enum Locale {
  /** System locale */
  En = 'en'
}

/** Representing a geolocation point with latitude and longitude */
export type Location = {
  __typename?: 'Location';
  distance: Scalars['Float']['output'];
  latitude: Scalars['Float']['output'];
  longitude: Scalars['Float']['output'];
};


/** Representing a geolocation point with latitude and longitude */
export type LocationDistanceArgs = {
  from: LocationInput;
};

/** Input for a geolocation point with latitude and longitude */
export type LocationInput = {
  latitude: Scalars['Float']['input'];
  longitude: Scalars['Float']['input'];
};

export type Moment = Entity & Node & {
  __typename?: 'Moment';
  beschijving?: Maybe<Scalars['String']['output']>;
  /** The time the document was created */
  createdAt: Scalars['DateTime']['output'];
  /** User that created this document */
  createdBy?: Maybe<User>;
  datum?: Maybe<Scalars['Date']['output']>;
  /** Get the document in other stages */
  documentInStages: Array<Moment>;
  /** List of Moment versions */
  history: Array<Version>;
  /** The unique identifier */
  id: Scalars['ID']['output'];
  /** The time the document was published. Null on documents in draft stage. */
  publishedAt?: Maybe<Scalars['DateTime']['output']>;
  /** User that last published this document */
  publishedBy?: Maybe<User>;
  scheduledIn: Array<ScheduledOperation>;
  /** System stage field */
  stage: Stage;
  titel?: Maybe<Scalars['String']['output']>;
  /** The time the document was updated */
  updatedAt: Scalars['DateTime']['output'];
  /** User that last updated this document */
  updatedBy?: Maybe<User>;
};


export type MomentCreatedByArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>;
  locales?: InputMaybe<Array<Locale>>;
};


export type MomentDocumentInStagesArgs = {
  includeCurrent?: Scalars['Boolean']['input'];
  inheritLocale?: Scalars['Boolean']['input'];
  stages?: Array<Stage>;
};


export type MomentHistoryArgs = {
  limit?: Scalars['Int']['input'];
  skip?: Scalars['Int']['input'];
  stageOverride?: InputMaybe<Stage>;
};


export type MomentPublishedByArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>;
  locales?: InputMaybe<Array<Locale>>;
};


export type MomentScheduledInArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  locales?: InputMaybe<Array<Locale>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<ScheduledOperationWhereInput>;
};


export type MomentUpdatedByArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>;
  locales?: InputMaybe<Array<Locale>>;
};

export type MomentConnectInput = {
  /** Allow to specify document position in list of connected documents, will default to appending at end of list */
  position?: InputMaybe<ConnectPositionInput>;
  /** Document to connect */
  where: MomentWhereUniqueInput;
};

/** A connection to a list of items. */
export type MomentConnection = {
  __typename?: 'MomentConnection';
  aggregate: Aggregate;
  /** A list of edges. */
  edges: Array<MomentEdge>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

export type MomentCreateInput = {
  beschijving?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  datum?: InputMaybe<Scalars['Date']['input']>;
  titel?: InputMaybe<Scalars['String']['input']>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
};

export type MomentCreateManyInlineInput = {
  /** Connect multiple existing Moment documents */
  connect?: InputMaybe<Array<MomentWhereUniqueInput>>;
  /** Create and connect multiple existing Moment documents */
  create?: InputMaybe<Array<MomentCreateInput>>;
};

export type MomentCreateOneInlineInput = {
  /** Connect one existing Moment document */
  connect?: InputMaybe<MomentWhereUniqueInput>;
  /** Create and connect one Moment document */
  create?: InputMaybe<MomentCreateInput>;
};

/** An edge in a connection. */
export type MomentEdge = {
  __typename?: 'MomentEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge. */
  node: Moment;
};

/** Identifies documents */
export type MomentManyWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<MomentWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<MomentWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<MomentWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']['input']>;
  beschijving?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  beschijving_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  beschijving_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  beschijving_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  beschijving_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  beschijving_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  beschijving_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  beschijving_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  beschijving_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  beschijving_starts_with?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  createdAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  createdBy?: InputMaybe<UserWhereInput>;
  datum?: InputMaybe<Scalars['Date']['input']>;
  /** All values greater than the given value. */
  datum_gt?: InputMaybe<Scalars['Date']['input']>;
  /** All values greater than or equal the given value. */
  datum_gte?: InputMaybe<Scalars['Date']['input']>;
  /** All values that are contained in given list. */
  datum_in?: InputMaybe<Array<InputMaybe<Scalars['Date']['input']>>>;
  /** All values less than the given value. */
  datum_lt?: InputMaybe<Scalars['Date']['input']>;
  /** All values less than or equal the given value. */
  datum_lte?: InputMaybe<Scalars['Date']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  datum_not?: InputMaybe<Scalars['Date']['input']>;
  /** All values that are not contained in given list. */
  datum_not_in?: InputMaybe<Array<InputMaybe<Scalars['Date']['input']>>>;
  documentInStages_every?: InputMaybe<MomentWhereStageInput>;
  documentInStages_none?: InputMaybe<MomentWhereStageInput>;
  documentInStages_some?: InputMaybe<MomentWhereStageInput>;
  id?: InputMaybe<Scalars['ID']['input']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  id_not?: InputMaybe<Scalars['ID']['input']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']['input']>;
  publishedAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  publishedAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  publishedBy?: InputMaybe<UserWhereInput>;
  scheduledIn_every?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_none?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_some?: InputMaybe<ScheduledOperationWhereInput>;
  titel?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  titel_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  titel_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  titel_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  titel_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  titel_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  titel_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  titel_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  titel_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  titel_starts_with?: InputMaybe<Scalars['String']['input']>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  updatedAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  updatedBy?: InputMaybe<UserWhereInput>;
};

export enum MomentOrderByInput {
  BeschijvingAsc = 'beschijving_ASC',
  BeschijvingDesc = 'beschijving_DESC',
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  DatumAsc = 'datum_ASC',
  DatumDesc = 'datum_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  PublishedAtAsc = 'publishedAt_ASC',
  PublishedAtDesc = 'publishedAt_DESC',
  TitelAsc = 'titel_ASC',
  TitelDesc = 'titel_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC'
}

export type MomentUpdateInput = {
  beschijving?: InputMaybe<Scalars['String']['input']>;
  datum?: InputMaybe<Scalars['Date']['input']>;
  titel?: InputMaybe<Scalars['String']['input']>;
};

export type MomentUpdateManyInlineInput = {
  /** Connect multiple existing Moment documents */
  connect?: InputMaybe<Array<MomentConnectInput>>;
  /** Create and connect multiple Moment documents */
  create?: InputMaybe<Array<MomentCreateInput>>;
  /** Delete multiple Moment documents */
  delete?: InputMaybe<Array<MomentWhereUniqueInput>>;
  /** Disconnect multiple Moment documents */
  disconnect?: InputMaybe<Array<MomentWhereUniqueInput>>;
  /** Override currently-connected documents with multiple existing Moment documents */
  set?: InputMaybe<Array<MomentWhereUniqueInput>>;
  /** Update multiple Moment documents */
  update?: InputMaybe<Array<MomentUpdateWithNestedWhereUniqueInput>>;
  /** Upsert multiple Moment documents */
  upsert?: InputMaybe<Array<MomentUpsertWithNestedWhereUniqueInput>>;
};

export type MomentUpdateManyInput = {
  beschijving?: InputMaybe<Scalars['String']['input']>;
  datum?: InputMaybe<Scalars['Date']['input']>;
  titel?: InputMaybe<Scalars['String']['input']>;
};

export type MomentUpdateManyWithNestedWhereInput = {
  /** Update many input */
  data: MomentUpdateManyInput;
  /** Document search */
  where: MomentWhereInput;
};

export type MomentUpdateOneInlineInput = {
  /** Connect existing Moment document */
  connect?: InputMaybe<MomentWhereUniqueInput>;
  /** Create and connect one Moment document */
  create?: InputMaybe<MomentCreateInput>;
  /** Delete currently connected Moment document */
  delete?: InputMaybe<Scalars['Boolean']['input']>;
  /** Disconnect currently connected Moment document */
  disconnect?: InputMaybe<Scalars['Boolean']['input']>;
  /** Update single Moment document */
  update?: InputMaybe<MomentUpdateWithNestedWhereUniqueInput>;
  /** Upsert single Moment document */
  upsert?: InputMaybe<MomentUpsertWithNestedWhereUniqueInput>;
};

export type MomentUpdateWithNestedWhereUniqueInput = {
  /** Document to update */
  data: MomentUpdateInput;
  /** Unique document search */
  where: MomentWhereUniqueInput;
};

export type MomentUpsertInput = {
  /** Create document if it didn't exist */
  create: MomentCreateInput;
  /** Update document if it exists */
  update: MomentUpdateInput;
};

export type MomentUpsertWithNestedWhereUniqueInput = {
  /** Upsert data */
  data: MomentUpsertInput;
  /** Unique document search */
  where: MomentWhereUniqueInput;
};

/** This contains a set of filters that can be used to compare values internally */
export type MomentWhereComparatorInput = {
  /** This field can be used to request to check if the entry is outdated by internal comparison */
  outdated_to?: InputMaybe<Scalars['Boolean']['input']>;
};

/** Identifies documents */
export type MomentWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<MomentWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<MomentWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<MomentWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']['input']>;
  beschijving?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  beschijving_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  beschijving_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  beschijving_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  beschijving_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  beschijving_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  beschijving_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  beschijving_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  beschijving_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  beschijving_starts_with?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  createdAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  createdBy?: InputMaybe<UserWhereInput>;
  datum?: InputMaybe<Scalars['Date']['input']>;
  /** All values greater than the given value. */
  datum_gt?: InputMaybe<Scalars['Date']['input']>;
  /** All values greater than or equal the given value. */
  datum_gte?: InputMaybe<Scalars['Date']['input']>;
  /** All values that are contained in given list. */
  datum_in?: InputMaybe<Array<InputMaybe<Scalars['Date']['input']>>>;
  /** All values less than the given value. */
  datum_lt?: InputMaybe<Scalars['Date']['input']>;
  /** All values less than or equal the given value. */
  datum_lte?: InputMaybe<Scalars['Date']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  datum_not?: InputMaybe<Scalars['Date']['input']>;
  /** All values that are not contained in given list. */
  datum_not_in?: InputMaybe<Array<InputMaybe<Scalars['Date']['input']>>>;
  documentInStages_every?: InputMaybe<MomentWhereStageInput>;
  documentInStages_none?: InputMaybe<MomentWhereStageInput>;
  documentInStages_some?: InputMaybe<MomentWhereStageInput>;
  id?: InputMaybe<Scalars['ID']['input']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  id_not?: InputMaybe<Scalars['ID']['input']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']['input']>;
  publishedAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  publishedAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  publishedBy?: InputMaybe<UserWhereInput>;
  scheduledIn_every?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_none?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_some?: InputMaybe<ScheduledOperationWhereInput>;
  titel?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  titel_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  titel_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  titel_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  titel_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  titel_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  titel_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  titel_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  titel_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  titel_starts_with?: InputMaybe<Scalars['String']['input']>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  updatedAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  updatedBy?: InputMaybe<UserWhereInput>;
};

/** The document in stages filter allows specifying a stage entry to cross compare the same document between different stages */
export type MomentWhereStageInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<MomentWhereStageInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<MomentWhereStageInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<MomentWhereStageInput>>;
  /** This field contains fields which can be set as true or false to specify an internal comparison */
  compareWithParent?: InputMaybe<MomentWhereComparatorInput>;
  /** Specify the stage to compare with */
  stage?: InputMaybe<Stage>;
};

/** References Moment record uniquely */
export type MomentWhereUniqueInput = {
  id?: InputMaybe<Scalars['ID']['input']>;
};

export type Mutation = {
  __typename?: 'Mutation';
  /** Create an asset. Use the returned info to finish the creation process by uploading the asset. */
  createAsset?: Maybe<Asset>;
  /** Create one bestuur */
  createBestuur?: Maybe<Bestuur>;
  /** Create one blogPost */
  createBlogPost?: Maybe<BlogPost>;
  /** Create one moment */
  createMoment?: Maybe<Moment>;
  /** Create one pagina */
  createPagina?: Maybe<Pagina>;
  /** Create one project */
  createProject?: Maybe<Project>;
  /** Create one scheduledRelease */
  createScheduledRelease?: Maybe<ScheduledRelease>;
  /** Create one vraagAntwoord */
  createVraagAntwoord?: Maybe<VraagAntwoord>;
  /** Delete one asset from _all_ existing stages. Returns deleted document. */
  deleteAsset?: Maybe<Asset>;
  /** Delete one bestuur from _all_ existing stages. Returns deleted document. */
  deleteBestuur?: Maybe<Bestuur>;
  /** Delete one blogPost from _all_ existing stages. Returns deleted document. */
  deleteBlogPost?: Maybe<BlogPost>;
  /**
   * Delete many Asset documents
   * @deprecated Please use the new paginated many mutation (deleteManyAssetsConnection)
   */
  deleteManyAssets: BatchPayload;
  /** Delete many Asset documents, return deleted documents */
  deleteManyAssetsConnection: AssetConnection;
  /**
   * Delete many Bestuur documents
   * @deprecated Please use the new paginated many mutation (deleteManyBestuursConnection)
   */
  deleteManyBestuurs: BatchPayload;
  /** Delete many Bestuur documents, return deleted documents */
  deleteManyBestuursConnection: BestuurConnection;
  /**
   * Delete many BlogPost documents
   * @deprecated Please use the new paginated many mutation (deleteManyBlogPostsConnection)
   */
  deleteManyBlogPosts: BatchPayload;
  /** Delete many BlogPost documents, return deleted documents */
  deleteManyBlogPostsConnection: BlogPostConnection;
  /**
   * Delete many Moment documents
   * @deprecated Please use the new paginated many mutation (deleteManyMomentsConnection)
   */
  deleteManyMoments: BatchPayload;
  /** Delete many Moment documents, return deleted documents */
  deleteManyMomentsConnection: MomentConnection;
  /**
   * Delete many Pagina documents
   * @deprecated Please use the new paginated many mutation (deleteManyPaginasConnection)
   */
  deleteManyPaginas: BatchPayload;
  /** Delete many Pagina documents, return deleted documents */
  deleteManyPaginasConnection: PaginaConnection;
  /**
   * Delete many Project documents
   * @deprecated Please use the new paginated many mutation (deleteManyProjectsConnection)
   */
  deleteManyProjects: BatchPayload;
  /** Delete many Project documents, return deleted documents */
  deleteManyProjectsConnection: ProjectConnection;
  /**
   * Delete many VraagAntwoord documents
   * @deprecated Please use the new paginated many mutation (deleteManyVraagAntwoordsConnection)
   */
  deleteManyVraagAntwoords: BatchPayload;
  /** Delete many VraagAntwoord documents, return deleted documents */
  deleteManyVraagAntwoordsConnection: VraagAntwoordConnection;
  /** Delete one moment from _all_ existing stages. Returns deleted document. */
  deleteMoment?: Maybe<Moment>;
  /** Delete one pagina from _all_ existing stages. Returns deleted document. */
  deletePagina?: Maybe<Pagina>;
  /** Delete one project from _all_ existing stages. Returns deleted document. */
  deleteProject?: Maybe<Project>;
  /** Delete and return scheduled operation */
  deleteScheduledOperation?: Maybe<ScheduledOperation>;
  /** Delete one scheduledRelease from _all_ existing stages. Returns deleted document. */
  deleteScheduledRelease?: Maybe<ScheduledRelease>;
  /** Delete one vraagAntwoord from _all_ existing stages. Returns deleted document. */
  deleteVraagAntwoord?: Maybe<VraagAntwoord>;
  /** Publish one asset */
  publishAsset?: Maybe<Asset>;
  /** Publish one bestuur */
  publishBestuur?: Maybe<Bestuur>;
  /** Publish one blogPost */
  publishBlogPost?: Maybe<BlogPost>;
  /**
   * Publish many Asset documents
   * @deprecated Please use the new paginated many mutation (publishManyAssetsConnection)
   */
  publishManyAssets: BatchPayload;
  /** Publish many Asset documents */
  publishManyAssetsConnection: AssetConnection;
  /**
   * Publish many Bestuur documents
   * @deprecated Please use the new paginated many mutation (publishManyBestuursConnection)
   */
  publishManyBestuurs: BatchPayload;
  /** Publish many Bestuur documents */
  publishManyBestuursConnection: BestuurConnection;
  /**
   * Publish many BlogPost documents
   * @deprecated Please use the new paginated many mutation (publishManyBlogPostsConnection)
   */
  publishManyBlogPosts: BatchPayload;
  /** Publish many BlogPost documents */
  publishManyBlogPostsConnection: BlogPostConnection;
  /**
   * Publish many Moment documents
   * @deprecated Please use the new paginated many mutation (publishManyMomentsConnection)
   */
  publishManyMoments: BatchPayload;
  /** Publish many Moment documents */
  publishManyMomentsConnection: MomentConnection;
  /**
   * Publish many Pagina documents
   * @deprecated Please use the new paginated many mutation (publishManyPaginasConnection)
   */
  publishManyPaginas: BatchPayload;
  /** Publish many Pagina documents */
  publishManyPaginasConnection: PaginaConnection;
  /**
   * Publish many Project documents
   * @deprecated Please use the new paginated many mutation (publishManyProjectsConnection)
   */
  publishManyProjects: BatchPayload;
  /** Publish many Project documents */
  publishManyProjectsConnection: ProjectConnection;
  /**
   * Publish many VraagAntwoord documents
   * @deprecated Please use the new paginated many mutation (publishManyVraagAntwoordsConnection)
   */
  publishManyVraagAntwoords: BatchPayload;
  /** Publish many VraagAntwoord documents */
  publishManyVraagAntwoordsConnection: VraagAntwoordConnection;
  /** Publish one moment */
  publishMoment?: Maybe<Moment>;
  /** Publish one pagina */
  publishPagina?: Maybe<Pagina>;
  /** Publish one project */
  publishProject?: Maybe<Project>;
  /** Publish one vraagAntwoord */
  publishVraagAntwoord?: Maybe<VraagAntwoord>;
  /** Schedule to publish one asset */
  schedulePublishAsset?: Maybe<Asset>;
  /** Schedule to publish one bestuur */
  schedulePublishBestuur?: Maybe<Bestuur>;
  /** Schedule to publish one blogPost */
  schedulePublishBlogPost?: Maybe<BlogPost>;
  /** Schedule to publish one moment */
  schedulePublishMoment?: Maybe<Moment>;
  /** Schedule to publish one pagina */
  schedulePublishPagina?: Maybe<Pagina>;
  /** Schedule to publish one project */
  schedulePublishProject?: Maybe<Project>;
  /** Schedule to publish one vraagAntwoord */
  schedulePublishVraagAntwoord?: Maybe<VraagAntwoord>;
  /** Unpublish one asset from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
  scheduleUnpublishAsset?: Maybe<Asset>;
  /** Unpublish one bestuur from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
  scheduleUnpublishBestuur?: Maybe<Bestuur>;
  /** Unpublish one blogPost from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
  scheduleUnpublishBlogPost?: Maybe<BlogPost>;
  /** Unpublish one moment from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
  scheduleUnpublishMoment?: Maybe<Moment>;
  /** Unpublish one pagina from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
  scheduleUnpublishPagina?: Maybe<Pagina>;
  /** Unpublish one project from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
  scheduleUnpublishProject?: Maybe<Project>;
  /** Unpublish one vraagAntwoord from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
  scheduleUnpublishVraagAntwoord?: Maybe<VraagAntwoord>;
  /** Unpublish one asset from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
  unpublishAsset?: Maybe<Asset>;
  /** Unpublish one bestuur from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
  unpublishBestuur?: Maybe<Bestuur>;
  /** Unpublish one blogPost from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
  unpublishBlogPost?: Maybe<BlogPost>;
  /**
   * Unpublish many Asset documents
   * @deprecated Please use the new paginated many mutation (unpublishManyAssetsConnection)
   */
  unpublishManyAssets: BatchPayload;
  /** Find many Asset documents that match criteria in specified stage and unpublish from target stages */
  unpublishManyAssetsConnection: AssetConnection;
  /**
   * Unpublish many Bestuur documents
   * @deprecated Please use the new paginated many mutation (unpublishManyBestuursConnection)
   */
  unpublishManyBestuurs: BatchPayload;
  /** Find many Bestuur documents that match criteria in specified stage and unpublish from target stages */
  unpublishManyBestuursConnection: BestuurConnection;
  /**
   * Unpublish many BlogPost documents
   * @deprecated Please use the new paginated many mutation (unpublishManyBlogPostsConnection)
   */
  unpublishManyBlogPosts: BatchPayload;
  /** Find many BlogPost documents that match criteria in specified stage and unpublish from target stages */
  unpublishManyBlogPostsConnection: BlogPostConnection;
  /**
   * Unpublish many Moment documents
   * @deprecated Please use the new paginated many mutation (unpublishManyMomentsConnection)
   */
  unpublishManyMoments: BatchPayload;
  /** Find many Moment documents that match criteria in specified stage and unpublish from target stages */
  unpublishManyMomentsConnection: MomentConnection;
  /**
   * Unpublish many Pagina documents
   * @deprecated Please use the new paginated many mutation (unpublishManyPaginasConnection)
   */
  unpublishManyPaginas: BatchPayload;
  /** Find many Pagina documents that match criteria in specified stage and unpublish from target stages */
  unpublishManyPaginasConnection: PaginaConnection;
  /**
   * Unpublish many Project documents
   * @deprecated Please use the new paginated many mutation (unpublishManyProjectsConnection)
   */
  unpublishManyProjects: BatchPayload;
  /** Find many Project documents that match criteria in specified stage and unpublish from target stages */
  unpublishManyProjectsConnection: ProjectConnection;
  /**
   * Unpublish many VraagAntwoord documents
   * @deprecated Please use the new paginated many mutation (unpublishManyVraagAntwoordsConnection)
   */
  unpublishManyVraagAntwoords: BatchPayload;
  /** Find many VraagAntwoord documents that match criteria in specified stage and unpublish from target stages */
  unpublishManyVraagAntwoordsConnection: VraagAntwoordConnection;
  /** Unpublish one moment from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
  unpublishMoment?: Maybe<Moment>;
  /** Unpublish one pagina from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
  unpublishPagina?: Maybe<Pagina>;
  /** Unpublish one project from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
  unpublishProject?: Maybe<Project>;
  /** Unpublish one vraagAntwoord from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
  unpublishVraagAntwoord?: Maybe<VraagAntwoord>;
  /** Update one asset */
  updateAsset?: Maybe<Asset>;
  /** Update one bestuur */
  updateBestuur?: Maybe<Bestuur>;
  /** Update one blogPost */
  updateBlogPost?: Maybe<BlogPost>;
  /**
   * Update many assets
   * @deprecated Please use the new paginated many mutation (updateManyAssetsConnection)
   */
  updateManyAssets: BatchPayload;
  /** Update many Asset documents */
  updateManyAssetsConnection: AssetConnection;
  /**
   * Update many bestuurs
   * @deprecated Please use the new paginated many mutation (updateManyBestuursConnection)
   */
  updateManyBestuurs: BatchPayload;
  /** Update many Bestuur documents */
  updateManyBestuursConnection: BestuurConnection;
  /**
   * Update many blogPosts
   * @deprecated Please use the new paginated many mutation (updateManyBlogPostsConnection)
   */
  updateManyBlogPosts: BatchPayload;
  /** Update many BlogPost documents */
  updateManyBlogPostsConnection: BlogPostConnection;
  /**
   * Update many moments
   * @deprecated Please use the new paginated many mutation (updateManyMomentsConnection)
   */
  updateManyMoments: BatchPayload;
  /** Update many Moment documents */
  updateManyMomentsConnection: MomentConnection;
  /**
   * Update many paginas
   * @deprecated Please use the new paginated many mutation (updateManyPaginasConnection)
   */
  updateManyPaginas: BatchPayload;
  /** Update many Pagina documents */
  updateManyPaginasConnection: PaginaConnection;
  /**
   * Update many projects
   * @deprecated Please use the new paginated many mutation (updateManyProjectsConnection)
   */
  updateManyProjects: BatchPayload;
  /** Update many Project documents */
  updateManyProjectsConnection: ProjectConnection;
  /**
   * Update many vraagAntwoords
   * @deprecated Please use the new paginated many mutation (updateManyVraagAntwoordsConnection)
   */
  updateManyVraagAntwoords: BatchPayload;
  /** Update many VraagAntwoord documents */
  updateManyVraagAntwoordsConnection: VraagAntwoordConnection;
  /** Update one moment */
  updateMoment?: Maybe<Moment>;
  /** Update one pagina */
  updatePagina?: Maybe<Pagina>;
  /** Update one project */
  updateProject?: Maybe<Project>;
  /** Update one scheduledRelease */
  updateScheduledRelease?: Maybe<ScheduledRelease>;
  /** Update one vraagAntwoord */
  updateVraagAntwoord?: Maybe<VraagAntwoord>;
  /** Upsert one asset */
  upsertAsset?: Maybe<Asset>;
  /** Upsert one bestuur */
  upsertBestuur?: Maybe<Bestuur>;
  /** Upsert one blogPost */
  upsertBlogPost?: Maybe<BlogPost>;
  /** Upsert one moment */
  upsertMoment?: Maybe<Moment>;
  /** Upsert one pagina */
  upsertPagina?: Maybe<Pagina>;
  /** Upsert one project */
  upsertProject?: Maybe<Project>;
  /** Upsert one vraagAntwoord */
  upsertVraagAntwoord?: Maybe<VraagAntwoord>;
};


export type MutationCreateAssetArgs = {
  data: AssetCreateInput;
};


export type MutationCreateBestuurArgs = {
  data: BestuurCreateInput;
};


export type MutationCreateBlogPostArgs = {
  data: BlogPostCreateInput;
};


export type MutationCreateMomentArgs = {
  data: MomentCreateInput;
};


export type MutationCreatePaginaArgs = {
  data: PaginaCreateInput;
};


export type MutationCreateProjectArgs = {
  data: ProjectCreateInput;
};


export type MutationCreateScheduledReleaseArgs = {
  data: ScheduledReleaseCreateInput;
};


export type MutationCreateVraagAntwoordArgs = {
  data: VraagAntwoordCreateInput;
};


export type MutationDeleteAssetArgs = {
  where: AssetWhereUniqueInput;
};


export type MutationDeleteBestuurArgs = {
  where: BestuurWhereUniqueInput;
};


export type MutationDeleteBlogPostArgs = {
  where: BlogPostWhereUniqueInput;
};


export type MutationDeleteManyAssetsArgs = {
  where?: InputMaybe<AssetManyWhereInput>;
};


export type MutationDeleteManyAssetsConnectionArgs = {
  after?: InputMaybe<Scalars['ID']['input']>;
  before?: InputMaybe<Scalars['ID']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<AssetManyWhereInput>;
};


export type MutationDeleteManyBestuursArgs = {
  where?: InputMaybe<BestuurManyWhereInput>;
};


export type MutationDeleteManyBestuursConnectionArgs = {
  after?: InputMaybe<Scalars['ID']['input']>;
  before?: InputMaybe<Scalars['ID']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<BestuurManyWhereInput>;
};


export type MutationDeleteManyBlogPostsArgs = {
  where?: InputMaybe<BlogPostManyWhereInput>;
};


export type MutationDeleteManyBlogPostsConnectionArgs = {
  after?: InputMaybe<Scalars['ID']['input']>;
  before?: InputMaybe<Scalars['ID']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<BlogPostManyWhereInput>;
};


export type MutationDeleteManyMomentsArgs = {
  where?: InputMaybe<MomentManyWhereInput>;
};


export type MutationDeleteManyMomentsConnectionArgs = {
  after?: InputMaybe<Scalars['ID']['input']>;
  before?: InputMaybe<Scalars['ID']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<MomentManyWhereInput>;
};


export type MutationDeleteManyPaginasArgs = {
  where?: InputMaybe<PaginaManyWhereInput>;
};


export type MutationDeleteManyPaginasConnectionArgs = {
  after?: InputMaybe<Scalars['ID']['input']>;
  before?: InputMaybe<Scalars['ID']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<PaginaManyWhereInput>;
};


export type MutationDeleteManyProjectsArgs = {
  where?: InputMaybe<ProjectManyWhereInput>;
};


export type MutationDeleteManyProjectsConnectionArgs = {
  after?: InputMaybe<Scalars['ID']['input']>;
  before?: InputMaybe<Scalars['ID']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<ProjectManyWhereInput>;
};


export type MutationDeleteManyVraagAntwoordsArgs = {
  where?: InputMaybe<VraagAntwoordManyWhereInput>;
};


export type MutationDeleteManyVraagAntwoordsConnectionArgs = {
  after?: InputMaybe<Scalars['ID']['input']>;
  before?: InputMaybe<Scalars['ID']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<VraagAntwoordManyWhereInput>;
};


export type MutationDeleteMomentArgs = {
  where: MomentWhereUniqueInput;
};


export type MutationDeletePaginaArgs = {
  where: PaginaWhereUniqueInput;
};


export type MutationDeleteProjectArgs = {
  where: ProjectWhereUniqueInput;
};


export type MutationDeleteScheduledOperationArgs = {
  where: ScheduledOperationWhereUniqueInput;
};


export type MutationDeleteScheduledReleaseArgs = {
  where: ScheduledReleaseWhereUniqueInput;
};


export type MutationDeleteVraagAntwoordArgs = {
  where: VraagAntwoordWhereUniqueInput;
};


export type MutationPublishAssetArgs = {
  locales?: InputMaybe<Array<Locale>>;
  publishBase?: InputMaybe<Scalars['Boolean']['input']>;
  to?: Array<Stage>;
  where: AssetWhereUniqueInput;
  withDefaultLocale?: InputMaybe<Scalars['Boolean']['input']>;
};


export type MutationPublishBestuurArgs = {
  to?: Array<Stage>;
  where: BestuurWhereUniqueInput;
};


export type MutationPublishBlogPostArgs = {
  to?: Array<Stage>;
  where: BlogPostWhereUniqueInput;
};


export type MutationPublishManyAssetsArgs = {
  locales?: InputMaybe<Array<Locale>>;
  publishBase?: InputMaybe<Scalars['Boolean']['input']>;
  to?: Array<Stage>;
  where?: InputMaybe<AssetManyWhereInput>;
  withDefaultLocale?: InputMaybe<Scalars['Boolean']['input']>;
};


export type MutationPublishManyAssetsConnectionArgs = {
  after?: InputMaybe<Scalars['ID']['input']>;
  before?: InputMaybe<Scalars['ID']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  from?: InputMaybe<Stage>;
  last?: InputMaybe<Scalars['Int']['input']>;
  locales?: InputMaybe<Array<Locale>>;
  publishBase?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  to?: Array<Stage>;
  where?: InputMaybe<AssetManyWhereInput>;
  withDefaultLocale?: InputMaybe<Scalars['Boolean']['input']>;
};


export type MutationPublishManyBestuursArgs = {
  to?: Array<Stage>;
  where?: InputMaybe<BestuurManyWhereInput>;
};


export type MutationPublishManyBestuursConnectionArgs = {
  after?: InputMaybe<Scalars['ID']['input']>;
  before?: InputMaybe<Scalars['ID']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  from?: InputMaybe<Stage>;
  last?: InputMaybe<Scalars['Int']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  to?: Array<Stage>;
  where?: InputMaybe<BestuurManyWhereInput>;
};


export type MutationPublishManyBlogPostsArgs = {
  to?: Array<Stage>;
  where?: InputMaybe<BlogPostManyWhereInput>;
};


export type MutationPublishManyBlogPostsConnectionArgs = {
  after?: InputMaybe<Scalars['ID']['input']>;
  before?: InputMaybe<Scalars['ID']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  from?: InputMaybe<Stage>;
  last?: InputMaybe<Scalars['Int']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  to?: Array<Stage>;
  where?: InputMaybe<BlogPostManyWhereInput>;
};


export type MutationPublishManyMomentsArgs = {
  to?: Array<Stage>;
  where?: InputMaybe<MomentManyWhereInput>;
};


export type MutationPublishManyMomentsConnectionArgs = {
  after?: InputMaybe<Scalars['ID']['input']>;
  before?: InputMaybe<Scalars['ID']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  from?: InputMaybe<Stage>;
  last?: InputMaybe<Scalars['Int']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  to?: Array<Stage>;
  where?: InputMaybe<MomentManyWhereInput>;
};


export type MutationPublishManyPaginasArgs = {
  to?: Array<Stage>;
  where?: InputMaybe<PaginaManyWhereInput>;
};


export type MutationPublishManyPaginasConnectionArgs = {
  after?: InputMaybe<Scalars['ID']['input']>;
  before?: InputMaybe<Scalars['ID']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  from?: InputMaybe<Stage>;
  last?: InputMaybe<Scalars['Int']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  to?: Array<Stage>;
  where?: InputMaybe<PaginaManyWhereInput>;
};


export type MutationPublishManyProjectsArgs = {
  to?: Array<Stage>;
  where?: InputMaybe<ProjectManyWhereInput>;
};


export type MutationPublishManyProjectsConnectionArgs = {
  after?: InputMaybe<Scalars['ID']['input']>;
  before?: InputMaybe<Scalars['ID']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  from?: InputMaybe<Stage>;
  last?: InputMaybe<Scalars['Int']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  to?: Array<Stage>;
  where?: InputMaybe<ProjectManyWhereInput>;
};


export type MutationPublishManyVraagAntwoordsArgs = {
  to?: Array<Stage>;
  where?: InputMaybe<VraagAntwoordManyWhereInput>;
};


export type MutationPublishManyVraagAntwoordsConnectionArgs = {
  after?: InputMaybe<Scalars['ID']['input']>;
  before?: InputMaybe<Scalars['ID']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  from?: InputMaybe<Stage>;
  last?: InputMaybe<Scalars['Int']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  to?: Array<Stage>;
  where?: InputMaybe<VraagAntwoordManyWhereInput>;
};


export type MutationPublishMomentArgs = {
  to?: Array<Stage>;
  where: MomentWhereUniqueInput;
};


export type MutationPublishPaginaArgs = {
  to?: Array<Stage>;
  where: PaginaWhereUniqueInput;
};


export type MutationPublishProjectArgs = {
  to?: Array<Stage>;
  where: ProjectWhereUniqueInput;
};


export type MutationPublishVraagAntwoordArgs = {
  to?: Array<Stage>;
  where: VraagAntwoordWhereUniqueInput;
};


export type MutationSchedulePublishAssetArgs = {
  locales?: InputMaybe<Array<Locale>>;
  publishBase?: InputMaybe<Scalars['Boolean']['input']>;
  releaseAt?: InputMaybe<Scalars['DateTime']['input']>;
  releaseId?: InputMaybe<Scalars['String']['input']>;
  to?: Array<Stage>;
  where: AssetWhereUniqueInput;
  withDefaultLocale?: InputMaybe<Scalars['Boolean']['input']>;
};


export type MutationSchedulePublishBestuurArgs = {
  releaseAt?: InputMaybe<Scalars['DateTime']['input']>;
  releaseId?: InputMaybe<Scalars['String']['input']>;
  to?: Array<Stage>;
  where: BestuurWhereUniqueInput;
};


export type MutationSchedulePublishBlogPostArgs = {
  releaseAt?: InputMaybe<Scalars['DateTime']['input']>;
  releaseId?: InputMaybe<Scalars['String']['input']>;
  to?: Array<Stage>;
  where: BlogPostWhereUniqueInput;
};


export type MutationSchedulePublishMomentArgs = {
  releaseAt?: InputMaybe<Scalars['DateTime']['input']>;
  releaseId?: InputMaybe<Scalars['String']['input']>;
  to?: Array<Stage>;
  where: MomentWhereUniqueInput;
};


export type MutationSchedulePublishPaginaArgs = {
  releaseAt?: InputMaybe<Scalars['DateTime']['input']>;
  releaseId?: InputMaybe<Scalars['String']['input']>;
  to?: Array<Stage>;
  where: PaginaWhereUniqueInput;
};


export type MutationSchedulePublishProjectArgs = {
  releaseAt?: InputMaybe<Scalars['DateTime']['input']>;
  releaseId?: InputMaybe<Scalars['String']['input']>;
  to?: Array<Stage>;
  where: ProjectWhereUniqueInput;
};


export type MutationSchedulePublishVraagAntwoordArgs = {
  releaseAt?: InputMaybe<Scalars['DateTime']['input']>;
  releaseId?: InputMaybe<Scalars['String']['input']>;
  to?: Array<Stage>;
  where: VraagAntwoordWhereUniqueInput;
};


export type MutationScheduleUnpublishAssetArgs = {
  from?: Array<Stage>;
  locales?: InputMaybe<Array<Locale>>;
  releaseAt?: InputMaybe<Scalars['DateTime']['input']>;
  releaseId?: InputMaybe<Scalars['String']['input']>;
  unpublishBase?: InputMaybe<Scalars['Boolean']['input']>;
  where: AssetWhereUniqueInput;
};


export type MutationScheduleUnpublishBestuurArgs = {
  from?: Array<Stage>;
  releaseAt?: InputMaybe<Scalars['DateTime']['input']>;
  releaseId?: InputMaybe<Scalars['String']['input']>;
  where: BestuurWhereUniqueInput;
};


export type MutationScheduleUnpublishBlogPostArgs = {
  from?: Array<Stage>;
  releaseAt?: InputMaybe<Scalars['DateTime']['input']>;
  releaseId?: InputMaybe<Scalars['String']['input']>;
  where: BlogPostWhereUniqueInput;
};


export type MutationScheduleUnpublishMomentArgs = {
  from?: Array<Stage>;
  releaseAt?: InputMaybe<Scalars['DateTime']['input']>;
  releaseId?: InputMaybe<Scalars['String']['input']>;
  where: MomentWhereUniqueInput;
};


export type MutationScheduleUnpublishPaginaArgs = {
  from?: Array<Stage>;
  releaseAt?: InputMaybe<Scalars['DateTime']['input']>;
  releaseId?: InputMaybe<Scalars['String']['input']>;
  where: PaginaWhereUniqueInput;
};


export type MutationScheduleUnpublishProjectArgs = {
  from?: Array<Stage>;
  releaseAt?: InputMaybe<Scalars['DateTime']['input']>;
  releaseId?: InputMaybe<Scalars['String']['input']>;
  where: ProjectWhereUniqueInput;
};


export type MutationScheduleUnpublishVraagAntwoordArgs = {
  from?: Array<Stage>;
  releaseAt?: InputMaybe<Scalars['DateTime']['input']>;
  releaseId?: InputMaybe<Scalars['String']['input']>;
  where: VraagAntwoordWhereUniqueInput;
};


export type MutationUnpublishAssetArgs = {
  from?: Array<Stage>;
  locales?: InputMaybe<Array<Locale>>;
  unpublishBase?: InputMaybe<Scalars['Boolean']['input']>;
  where: AssetWhereUniqueInput;
};


export type MutationUnpublishBestuurArgs = {
  from?: Array<Stage>;
  where: BestuurWhereUniqueInput;
};


export type MutationUnpublishBlogPostArgs = {
  from?: Array<Stage>;
  where: BlogPostWhereUniqueInput;
};


export type MutationUnpublishManyAssetsArgs = {
  from?: Array<Stage>;
  locales?: InputMaybe<Array<Locale>>;
  unpublishBase?: InputMaybe<Scalars['Boolean']['input']>;
  where?: InputMaybe<AssetManyWhereInput>;
};


export type MutationUnpublishManyAssetsConnectionArgs = {
  after?: InputMaybe<Scalars['ID']['input']>;
  before?: InputMaybe<Scalars['ID']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  from?: Array<Stage>;
  last?: InputMaybe<Scalars['Int']['input']>;
  locales?: InputMaybe<Array<Locale>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  stage?: InputMaybe<Stage>;
  unpublishBase?: InputMaybe<Scalars['Boolean']['input']>;
  where?: InputMaybe<AssetManyWhereInput>;
};


export type MutationUnpublishManyBestuursArgs = {
  from?: Array<Stage>;
  where?: InputMaybe<BestuurManyWhereInput>;
};


export type MutationUnpublishManyBestuursConnectionArgs = {
  after?: InputMaybe<Scalars['ID']['input']>;
  before?: InputMaybe<Scalars['ID']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  from?: Array<Stage>;
  last?: InputMaybe<Scalars['Int']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  stage?: InputMaybe<Stage>;
  where?: InputMaybe<BestuurManyWhereInput>;
};


export type MutationUnpublishManyBlogPostsArgs = {
  from?: Array<Stage>;
  where?: InputMaybe<BlogPostManyWhereInput>;
};


export type MutationUnpublishManyBlogPostsConnectionArgs = {
  after?: InputMaybe<Scalars['ID']['input']>;
  before?: InputMaybe<Scalars['ID']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  from?: Array<Stage>;
  last?: InputMaybe<Scalars['Int']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  stage?: InputMaybe<Stage>;
  where?: InputMaybe<BlogPostManyWhereInput>;
};


export type MutationUnpublishManyMomentsArgs = {
  from?: Array<Stage>;
  where?: InputMaybe<MomentManyWhereInput>;
};


export type MutationUnpublishManyMomentsConnectionArgs = {
  after?: InputMaybe<Scalars['ID']['input']>;
  before?: InputMaybe<Scalars['ID']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  from?: Array<Stage>;
  last?: InputMaybe<Scalars['Int']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  stage?: InputMaybe<Stage>;
  where?: InputMaybe<MomentManyWhereInput>;
};


export type MutationUnpublishManyPaginasArgs = {
  from?: Array<Stage>;
  where?: InputMaybe<PaginaManyWhereInput>;
};


export type MutationUnpublishManyPaginasConnectionArgs = {
  after?: InputMaybe<Scalars['ID']['input']>;
  before?: InputMaybe<Scalars['ID']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  from?: Array<Stage>;
  last?: InputMaybe<Scalars['Int']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  stage?: InputMaybe<Stage>;
  where?: InputMaybe<PaginaManyWhereInput>;
};


export type MutationUnpublishManyProjectsArgs = {
  from?: Array<Stage>;
  where?: InputMaybe<ProjectManyWhereInput>;
};


export type MutationUnpublishManyProjectsConnectionArgs = {
  after?: InputMaybe<Scalars['ID']['input']>;
  before?: InputMaybe<Scalars['ID']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  from?: Array<Stage>;
  last?: InputMaybe<Scalars['Int']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  stage?: InputMaybe<Stage>;
  where?: InputMaybe<ProjectManyWhereInput>;
};


export type MutationUnpublishManyVraagAntwoordsArgs = {
  from?: Array<Stage>;
  where?: InputMaybe<VraagAntwoordManyWhereInput>;
};


export type MutationUnpublishManyVraagAntwoordsConnectionArgs = {
  after?: InputMaybe<Scalars['ID']['input']>;
  before?: InputMaybe<Scalars['ID']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  from?: Array<Stage>;
  last?: InputMaybe<Scalars['Int']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  stage?: InputMaybe<Stage>;
  where?: InputMaybe<VraagAntwoordManyWhereInput>;
};


export type MutationUnpublishMomentArgs = {
  from?: Array<Stage>;
  where: MomentWhereUniqueInput;
};


export type MutationUnpublishPaginaArgs = {
  from?: Array<Stage>;
  where: PaginaWhereUniqueInput;
};


export type MutationUnpublishProjectArgs = {
  from?: Array<Stage>;
  where: ProjectWhereUniqueInput;
};


export type MutationUnpublishVraagAntwoordArgs = {
  from?: Array<Stage>;
  where: VraagAntwoordWhereUniqueInput;
};


export type MutationUpdateAssetArgs = {
  data: AssetUpdateInput;
  where: AssetWhereUniqueInput;
};


export type MutationUpdateBestuurArgs = {
  data: BestuurUpdateInput;
  where: BestuurWhereUniqueInput;
};


export type MutationUpdateBlogPostArgs = {
  data: BlogPostUpdateInput;
  where: BlogPostWhereUniqueInput;
};


export type MutationUpdateManyAssetsArgs = {
  data: AssetUpdateManyInput;
  where?: InputMaybe<AssetManyWhereInput>;
};


export type MutationUpdateManyAssetsConnectionArgs = {
  after?: InputMaybe<Scalars['ID']['input']>;
  before?: InputMaybe<Scalars['ID']['input']>;
  data: AssetUpdateManyInput;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<AssetManyWhereInput>;
};


export type MutationUpdateManyBestuursArgs = {
  data: BestuurUpdateManyInput;
  where?: InputMaybe<BestuurManyWhereInput>;
};


export type MutationUpdateManyBestuursConnectionArgs = {
  after?: InputMaybe<Scalars['ID']['input']>;
  before?: InputMaybe<Scalars['ID']['input']>;
  data: BestuurUpdateManyInput;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<BestuurManyWhereInput>;
};


export type MutationUpdateManyBlogPostsArgs = {
  data: BlogPostUpdateManyInput;
  where?: InputMaybe<BlogPostManyWhereInput>;
};


export type MutationUpdateManyBlogPostsConnectionArgs = {
  after?: InputMaybe<Scalars['ID']['input']>;
  before?: InputMaybe<Scalars['ID']['input']>;
  data: BlogPostUpdateManyInput;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<BlogPostManyWhereInput>;
};


export type MutationUpdateManyMomentsArgs = {
  data: MomentUpdateManyInput;
  where?: InputMaybe<MomentManyWhereInput>;
};


export type MutationUpdateManyMomentsConnectionArgs = {
  after?: InputMaybe<Scalars['ID']['input']>;
  before?: InputMaybe<Scalars['ID']['input']>;
  data: MomentUpdateManyInput;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<MomentManyWhereInput>;
};


export type MutationUpdateManyPaginasArgs = {
  data: PaginaUpdateManyInput;
  where?: InputMaybe<PaginaManyWhereInput>;
};


export type MutationUpdateManyPaginasConnectionArgs = {
  after?: InputMaybe<Scalars['ID']['input']>;
  before?: InputMaybe<Scalars['ID']['input']>;
  data: PaginaUpdateManyInput;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<PaginaManyWhereInput>;
};


export type MutationUpdateManyProjectsArgs = {
  data: ProjectUpdateManyInput;
  where?: InputMaybe<ProjectManyWhereInput>;
};


export type MutationUpdateManyProjectsConnectionArgs = {
  after?: InputMaybe<Scalars['ID']['input']>;
  before?: InputMaybe<Scalars['ID']['input']>;
  data: ProjectUpdateManyInput;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<ProjectManyWhereInput>;
};


export type MutationUpdateManyVraagAntwoordsArgs = {
  data: VraagAntwoordUpdateManyInput;
  where?: InputMaybe<VraagAntwoordManyWhereInput>;
};


export type MutationUpdateManyVraagAntwoordsConnectionArgs = {
  after?: InputMaybe<Scalars['ID']['input']>;
  before?: InputMaybe<Scalars['ID']['input']>;
  data: VraagAntwoordUpdateManyInput;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<VraagAntwoordManyWhereInput>;
};


export type MutationUpdateMomentArgs = {
  data: MomentUpdateInput;
  where: MomentWhereUniqueInput;
};


export type MutationUpdatePaginaArgs = {
  data: PaginaUpdateInput;
  where: PaginaWhereUniqueInput;
};


export type MutationUpdateProjectArgs = {
  data: ProjectUpdateInput;
  where: ProjectWhereUniqueInput;
};


export type MutationUpdateScheduledReleaseArgs = {
  data: ScheduledReleaseUpdateInput;
  where: ScheduledReleaseWhereUniqueInput;
};


export type MutationUpdateVraagAntwoordArgs = {
  data: VraagAntwoordUpdateInput;
  where: VraagAntwoordWhereUniqueInput;
};


export type MutationUpsertAssetArgs = {
  upsert: AssetUpsertInput;
  where: AssetWhereUniqueInput;
};


export type MutationUpsertBestuurArgs = {
  upsert: BestuurUpsertInput;
  where: BestuurWhereUniqueInput;
};


export type MutationUpsertBlogPostArgs = {
  upsert: BlogPostUpsertInput;
  where: BlogPostWhereUniqueInput;
};


export type MutationUpsertMomentArgs = {
  upsert: MomentUpsertInput;
  where: MomentWhereUniqueInput;
};


export type MutationUpsertPaginaArgs = {
  upsert: PaginaUpsertInput;
  where: PaginaWhereUniqueInput;
};


export type MutationUpsertProjectArgs = {
  upsert: ProjectUpsertInput;
  where: ProjectWhereUniqueInput;
};


export type MutationUpsertVraagAntwoordArgs = {
  upsert: VraagAntwoordUpsertInput;
  where: VraagAntwoordWhereUniqueInput;
};

/** An object with an ID */
export type Node = {
  /** The id of the object. */
  id: Scalars['ID']['output'];
  /** The Stage of an object */
  stage: Stage;
};

export enum Orientatie {
  Links = 'Links',
  Rechts = 'Rechts'
}

/** Information about pagination in a connection. */
export type PageInfo = {
  __typename?: 'PageInfo';
  /** When paginating forwards, the cursor to continue. */
  endCursor?: Maybe<Scalars['String']['output']>;
  /** When paginating forwards, are there more items? */
  hasNextPage: Scalars['Boolean']['output'];
  /** When paginating backwards, are there more items? */
  hasPreviousPage: Scalars['Boolean']['output'];
  /** Number of items in the current page. */
  pageSize?: Maybe<Scalars['Int']['output']>;
  /** When paginating backwards, the cursor to continue. */
  startCursor?: Maybe<Scalars['String']['output']>;
};

export type Pagina = Entity & Node & {
  __typename?: 'Pagina';
  /** The time the document was created */
  createdAt: Scalars['DateTime']['output'];
  /** User that created this document */
  createdBy?: Maybe<User>;
  /** Get the document in other stages */
  documentInStages: Array<Pagina>;
  /** List of Pagina versions */
  history: Array<Version>;
  /** The unique identifier */
  id: Scalars['ID']['output'];
  /** The time the document was published. Null on documents in draft stage. */
  publishedAt?: Maybe<Scalars['DateTime']['output']>;
  /** User that last published this document */
  publishedBy?: Maybe<User>;
  scheduledIn: Array<ScheduledOperation>;
  sections: Array<PaginasectionsUnion>;
  slug?: Maybe<Scalars['String']['output']>;
  /** System stage field */
  stage: Stage;
  titel: Scalars['String']['output'];
  /** The time the document was updated */
  updatedAt: Scalars['DateTime']['output'];
  /** User that last updated this document */
  updatedBy?: Maybe<User>;
};


export type PaginaCreatedByArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>;
  locales?: InputMaybe<Array<Locale>>;
};


export type PaginaDocumentInStagesArgs = {
  includeCurrent?: Scalars['Boolean']['input'];
  inheritLocale?: Scalars['Boolean']['input'];
  stages?: Array<Stage>;
};


export type PaginaHistoryArgs = {
  limit?: Scalars['Int']['input'];
  skip?: Scalars['Int']['input'];
  stageOverride?: InputMaybe<Stage>;
};


export type PaginaPublishedByArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>;
  locales?: InputMaybe<Array<Locale>>;
};


export type PaginaScheduledInArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  locales?: InputMaybe<Array<Locale>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<ScheduledOperationWhereInput>;
};


export type PaginaSectionsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  locales?: InputMaybe<Array<Locale>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};


export type PaginaUpdatedByArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>;
  locales?: InputMaybe<Array<Locale>>;
};

export type PaginaConnectInput = {
  /** Allow to specify document position in list of connected documents, will default to appending at end of list */
  position?: InputMaybe<ConnectPositionInput>;
  /** Document to connect */
  where: PaginaWhereUniqueInput;
};

/** A connection to a list of items. */
export type PaginaConnection = {
  __typename?: 'PaginaConnection';
  aggregate: Aggregate;
  /** A list of edges. */
  edges: Array<PaginaEdge>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

export type PaginaCreateInput = {
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  sections?: InputMaybe<PaginasectionsUnionCreateManyInlineInput>;
  slug?: InputMaybe<Scalars['String']['input']>;
  titel: Scalars['String']['input'];
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
};

export type PaginaCreateManyInlineInput = {
  /** Connect multiple existing Pagina documents */
  connect?: InputMaybe<Array<PaginaWhereUniqueInput>>;
  /** Create and connect multiple existing Pagina documents */
  create?: InputMaybe<Array<PaginaCreateInput>>;
};

export type PaginaCreateOneInlineInput = {
  /** Connect one existing Pagina document */
  connect?: InputMaybe<PaginaWhereUniqueInput>;
  /** Create and connect one Pagina document */
  create?: InputMaybe<PaginaCreateInput>;
};

/** An edge in a connection. */
export type PaginaEdge = {
  __typename?: 'PaginaEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge. */
  node: Pagina;
};

/** Identifies documents */
export type PaginaManyWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<PaginaWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<PaginaWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<PaginaWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  createdAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  createdBy?: InputMaybe<UserWhereInput>;
  documentInStages_every?: InputMaybe<PaginaWhereStageInput>;
  documentInStages_none?: InputMaybe<PaginaWhereStageInput>;
  documentInStages_some?: InputMaybe<PaginaWhereStageInput>;
  id?: InputMaybe<Scalars['ID']['input']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  id_not?: InputMaybe<Scalars['ID']['input']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']['input']>;
  publishedAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  publishedAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  publishedBy?: InputMaybe<UserWhereInput>;
  scheduledIn_every?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_none?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_some?: InputMaybe<ScheduledOperationWhereInput>;
  /** All values in which the union is empty. */
  sections_empty?: InputMaybe<Scalars['Boolean']['input']>;
  /** Matches if the modular component contains at least one connection to the item provided to the filter */
  sections_some?: InputMaybe<PaginasectionsUnionWhereInput>;
  slug?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  slug_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  slug_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  slug_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  slug_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  slug_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  slug_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  slug_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  slug_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  slug_starts_with?: InputMaybe<Scalars['String']['input']>;
  titel?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  titel_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  titel_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  titel_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  titel_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  titel_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  titel_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  titel_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  titel_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  titel_starts_with?: InputMaybe<Scalars['String']['input']>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  updatedAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  updatedBy?: InputMaybe<UserWhereInput>;
};

export enum PaginaOrderByInput {
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  PublishedAtAsc = 'publishedAt_ASC',
  PublishedAtDesc = 'publishedAt_DESC',
  SlugAsc = 'slug_ASC',
  SlugDesc = 'slug_DESC',
  TitelAsc = 'titel_ASC',
  TitelDesc = 'titel_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC'
}

export type PaginaUpdateInput = {
  sections?: InputMaybe<PaginasectionsUnionUpdateManyInlineInput>;
  slug?: InputMaybe<Scalars['String']['input']>;
  titel?: InputMaybe<Scalars['String']['input']>;
};

export type PaginaUpdateManyInlineInput = {
  /** Connect multiple existing Pagina documents */
  connect?: InputMaybe<Array<PaginaConnectInput>>;
  /** Create and connect multiple Pagina documents */
  create?: InputMaybe<Array<PaginaCreateInput>>;
  /** Delete multiple Pagina documents */
  delete?: InputMaybe<Array<PaginaWhereUniqueInput>>;
  /** Disconnect multiple Pagina documents */
  disconnect?: InputMaybe<Array<PaginaWhereUniqueInput>>;
  /** Override currently-connected documents with multiple existing Pagina documents */
  set?: InputMaybe<Array<PaginaWhereUniqueInput>>;
  /** Update multiple Pagina documents */
  update?: InputMaybe<Array<PaginaUpdateWithNestedWhereUniqueInput>>;
  /** Upsert multiple Pagina documents */
  upsert?: InputMaybe<Array<PaginaUpsertWithNestedWhereUniqueInput>>;
};

export type PaginaUpdateManyInput = {
  /** No fields in updateMany data input */
  _?: InputMaybe<Scalars['String']['input']>;
};

export type PaginaUpdateManyWithNestedWhereInput = {
  /** Update many input */
  data: PaginaUpdateManyInput;
  /** Document search */
  where: PaginaWhereInput;
};

export type PaginaUpdateOneInlineInput = {
  /** Connect existing Pagina document */
  connect?: InputMaybe<PaginaWhereUniqueInput>;
  /** Create and connect one Pagina document */
  create?: InputMaybe<PaginaCreateInput>;
  /** Delete currently connected Pagina document */
  delete?: InputMaybe<Scalars['Boolean']['input']>;
  /** Disconnect currently connected Pagina document */
  disconnect?: InputMaybe<Scalars['Boolean']['input']>;
  /** Update single Pagina document */
  update?: InputMaybe<PaginaUpdateWithNestedWhereUniqueInput>;
  /** Upsert single Pagina document */
  upsert?: InputMaybe<PaginaUpsertWithNestedWhereUniqueInput>;
};

export type PaginaUpdateWithNestedWhereUniqueInput = {
  /** Document to update */
  data: PaginaUpdateInput;
  /** Unique document search */
  where: PaginaWhereUniqueInput;
};

export type PaginaUpsertInput = {
  /** Create document if it didn't exist */
  create: PaginaCreateInput;
  /** Update document if it exists */
  update: PaginaUpdateInput;
};

export type PaginaUpsertWithNestedWhereUniqueInput = {
  /** Upsert data */
  data: PaginaUpsertInput;
  /** Unique document search */
  where: PaginaWhereUniqueInput;
};

/** This contains a set of filters that can be used to compare values internally */
export type PaginaWhereComparatorInput = {
  /** This field can be used to request to check if the entry is outdated by internal comparison */
  outdated_to?: InputMaybe<Scalars['Boolean']['input']>;
};

/** Identifies documents */
export type PaginaWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<PaginaWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<PaginaWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<PaginaWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  createdAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  createdBy?: InputMaybe<UserWhereInput>;
  documentInStages_every?: InputMaybe<PaginaWhereStageInput>;
  documentInStages_none?: InputMaybe<PaginaWhereStageInput>;
  documentInStages_some?: InputMaybe<PaginaWhereStageInput>;
  id?: InputMaybe<Scalars['ID']['input']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  id_not?: InputMaybe<Scalars['ID']['input']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']['input']>;
  publishedAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  publishedAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  publishedBy?: InputMaybe<UserWhereInput>;
  scheduledIn_every?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_none?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_some?: InputMaybe<ScheduledOperationWhereInput>;
  /** All values in which the union is empty. */
  sections_empty?: InputMaybe<Scalars['Boolean']['input']>;
  /** Matches if the modular component contains at least one connection to the item provided to the filter */
  sections_some?: InputMaybe<PaginasectionsUnionWhereInput>;
  slug?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  slug_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  slug_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  slug_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  slug_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  slug_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  slug_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  slug_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  slug_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  slug_starts_with?: InputMaybe<Scalars['String']['input']>;
  titel?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  titel_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  titel_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  titel_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  titel_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  titel_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  titel_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  titel_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  titel_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  titel_starts_with?: InputMaybe<Scalars['String']['input']>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  updatedAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  updatedBy?: InputMaybe<UserWhereInput>;
};

/** The document in stages filter allows specifying a stage entry to cross compare the same document between different stages */
export type PaginaWhereStageInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<PaginaWhereStageInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<PaginaWhereStageInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<PaginaWhereStageInput>>;
  /** This field contains fields which can be set as true or false to specify an internal comparison */
  compareWithParent?: InputMaybe<PaginaWhereComparatorInput>;
  /** Specify the stage to compare with */
  stage?: InputMaybe<Stage>;
};

/** References Pagina record uniquely */
export type PaginaWhereUniqueInput = {
  id?: InputMaybe<Scalars['ID']['input']>;
  slug?: InputMaybe<Scalars['String']['input']>;
  titel?: InputMaybe<Scalars['String']['input']>;
};

export type PaginasectionsUnion = Content | Faq | Formulier | Hero | Partner | Timeline;

export type PaginasectionsUnionConnectInput = {
  Content?: InputMaybe<ContentConnectInput>;
  Faq?: InputMaybe<FaqConnectInput>;
  Formulier?: InputMaybe<FormulierConnectInput>;
  Hero?: InputMaybe<HeroConnectInput>;
  Partner?: InputMaybe<PartnerConnectInput>;
  Timeline?: InputMaybe<TimelineConnectInput>;
};

export type PaginasectionsUnionCreateInput = {
  Content?: InputMaybe<ContentCreateInput>;
  Faq?: InputMaybe<FaqCreateInput>;
  Formulier?: InputMaybe<FormulierCreateInput>;
  Hero?: InputMaybe<HeroCreateInput>;
  Partner?: InputMaybe<PartnerCreateInput>;
  Timeline?: InputMaybe<TimelineCreateInput>;
};

export type PaginasectionsUnionCreateManyInlineInput = {
  /** Create and connect multiple existing PaginasectionsUnion documents */
  create?: InputMaybe<Array<PaginasectionsUnionCreateInput>>;
};

export type PaginasectionsUnionCreateOneInlineInput = {
  /** Create and connect one PaginasectionsUnion document */
  create?: InputMaybe<PaginasectionsUnionCreateInput>;
};

export type PaginasectionsUnionCreateWithPositionInput = {
  Content?: InputMaybe<ContentCreateWithPositionInput>;
  Faq?: InputMaybe<FaqCreateWithPositionInput>;
  Formulier?: InputMaybe<FormulierCreateWithPositionInput>;
  Hero?: InputMaybe<HeroCreateWithPositionInput>;
  Partner?: InputMaybe<PartnerCreateWithPositionInput>;
  Timeline?: InputMaybe<TimelineCreateWithPositionInput>;
};

export type PaginasectionsUnionUpdateInput = {
  Content?: InputMaybe<ContentUpdateInput>;
  Faq?: InputMaybe<FaqUpdateInput>;
  Formulier?: InputMaybe<FormulierUpdateInput>;
  Hero?: InputMaybe<HeroUpdateInput>;
  Partner?: InputMaybe<PartnerUpdateInput>;
  Timeline?: InputMaybe<TimelineUpdateInput>;
};

export type PaginasectionsUnionUpdateManyInlineInput = {
  /** Create and connect multiple PaginasectionsUnion component instances */
  create?: InputMaybe<Array<PaginasectionsUnionCreateWithPositionInput>>;
  /** Delete multiple PaginasectionsUnion documents */
  delete?: InputMaybe<Array<PaginasectionsUnionWhereUniqueInput>>;
  /** Update multiple PaginasectionsUnion component instances */
  update?: InputMaybe<Array<PaginasectionsUnionUpdateWithNestedWhereUniqueAndPositionInput>>;
  /** Upsert multiple PaginasectionsUnion component instances */
  upsert?: InputMaybe<Array<PaginasectionsUnionUpsertWithNestedWhereUniqueAndPositionInput>>;
};

export type PaginasectionsUnionUpdateManyWithNestedWhereInput = {
  Content?: InputMaybe<ContentUpdateManyWithNestedWhereInput>;
  Faq?: InputMaybe<FaqUpdateManyWithNestedWhereInput>;
  Formulier?: InputMaybe<FormulierUpdateManyWithNestedWhereInput>;
  Hero?: InputMaybe<HeroUpdateManyWithNestedWhereInput>;
  Partner?: InputMaybe<PartnerUpdateManyWithNestedWhereInput>;
  Timeline?: InputMaybe<TimelineUpdateManyWithNestedWhereInput>;
};

export type PaginasectionsUnionUpdateOneInlineInput = {
  /** Create and connect one PaginasectionsUnion document */
  create?: InputMaybe<PaginasectionsUnionCreateInput>;
  /** Delete currently connected PaginasectionsUnion document */
  delete?: InputMaybe<Scalars['Boolean']['input']>;
  /** Update single PaginasectionsUnion document */
  update?: InputMaybe<PaginasectionsUnionUpdateWithNestedWhereUniqueInput>;
  /** Upsert single PaginasectionsUnion document */
  upsert?: InputMaybe<PaginasectionsUnionUpsertWithNestedWhereUniqueInput>;
};

export type PaginasectionsUnionUpdateWithNestedWhereUniqueAndPositionInput = {
  Content?: InputMaybe<ContentUpdateWithNestedWhereUniqueAndPositionInput>;
  Faq?: InputMaybe<FaqUpdateWithNestedWhereUniqueAndPositionInput>;
  Formulier?: InputMaybe<FormulierUpdateWithNestedWhereUniqueAndPositionInput>;
  Hero?: InputMaybe<HeroUpdateWithNestedWhereUniqueAndPositionInput>;
  Partner?: InputMaybe<PartnerUpdateWithNestedWhereUniqueAndPositionInput>;
  Timeline?: InputMaybe<TimelineUpdateWithNestedWhereUniqueAndPositionInput>;
};

export type PaginasectionsUnionUpdateWithNestedWhereUniqueInput = {
  Content?: InputMaybe<ContentUpdateWithNestedWhereUniqueInput>;
  Faq?: InputMaybe<FaqUpdateWithNestedWhereUniqueInput>;
  Formulier?: InputMaybe<FormulierUpdateWithNestedWhereUniqueInput>;
  Hero?: InputMaybe<HeroUpdateWithNestedWhereUniqueInput>;
  Partner?: InputMaybe<PartnerUpdateWithNestedWhereUniqueInput>;
  Timeline?: InputMaybe<TimelineUpdateWithNestedWhereUniqueInput>;
};

export type PaginasectionsUnionUpsertWithNestedWhereUniqueAndPositionInput = {
  Content?: InputMaybe<ContentUpsertWithNestedWhereUniqueAndPositionInput>;
  Faq?: InputMaybe<FaqUpsertWithNestedWhereUniqueAndPositionInput>;
  Formulier?: InputMaybe<FormulierUpsertWithNestedWhereUniqueAndPositionInput>;
  Hero?: InputMaybe<HeroUpsertWithNestedWhereUniqueAndPositionInput>;
  Partner?: InputMaybe<PartnerUpsertWithNestedWhereUniqueAndPositionInput>;
  Timeline?: InputMaybe<TimelineUpsertWithNestedWhereUniqueAndPositionInput>;
};

export type PaginasectionsUnionUpsertWithNestedWhereUniqueInput = {
  Content?: InputMaybe<ContentUpsertWithNestedWhereUniqueInput>;
  Faq?: InputMaybe<FaqUpsertWithNestedWhereUniqueInput>;
  Formulier?: InputMaybe<FormulierUpsertWithNestedWhereUniqueInput>;
  Hero?: InputMaybe<HeroUpsertWithNestedWhereUniqueInput>;
  Partner?: InputMaybe<PartnerUpsertWithNestedWhereUniqueInput>;
  Timeline?: InputMaybe<TimelineUpsertWithNestedWhereUniqueInput>;
};

export type PaginasectionsUnionWhereInput = {
  Content?: InputMaybe<ContentWhereInput>;
  Faq?: InputMaybe<FaqWhereInput>;
  Formulier?: InputMaybe<FormulierWhereInput>;
  Hero?: InputMaybe<HeroWhereInput>;
  Partner?: InputMaybe<PartnerWhereInput>;
  Timeline?: InputMaybe<TimelineWhereInput>;
};

export type PaginasectionsUnionWhereUniqueInput = {
  Content?: InputMaybe<ContentWhereUniqueInput>;
  Faq?: InputMaybe<FaqWhereUniqueInput>;
  Formulier?: InputMaybe<FormulierWhereUniqueInput>;
  Hero?: InputMaybe<HeroWhereUniqueInput>;
  Partner?: InputMaybe<PartnerWhereUniqueInput>;
  Timeline?: InputMaybe<TimelineWhereUniqueInput>;
};

export type Partner = Entity & {
  __typename?: 'Partner';
  beschijving?: Maybe<Scalars['String']['output']>;
  blokken: Array<PartnerblokkenUnion>;
  /** The unique identifier */
  id: Scalars['ID']['output'];
  /** System stage field */
  stage: Stage;
  titel: Scalars['String']['output'];
};


export type PartnerBlokkenArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  locales?: InputMaybe<Array<Locale>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};

export type PartnerConnectInput = {
  /** Allow to specify document position in list of connected documents, will default to appending at end of list */
  position?: InputMaybe<ConnectPositionInput>;
  /** Document to connect */
  where: PartnerWhereUniqueInput;
};

/** A connection to a list of items. */
export type PartnerConnection = {
  __typename?: 'PartnerConnection';
  aggregate: Aggregate;
  /** A list of edges. */
  edges: Array<PartnerEdge>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

export type PartnerCreateInput = {
  beschijving?: InputMaybe<Scalars['String']['input']>;
  blokken?: InputMaybe<PartnerblokkenUnionCreateManyInlineInput>;
  titel: Scalars['String']['input'];
};

export type PartnerCreateManyInlineInput = {
  /** Create and connect multiple existing Partner documents */
  create?: InputMaybe<Array<PartnerCreateInput>>;
};

export type PartnerCreateOneInlineInput = {
  /** Create and connect one Partner document */
  create?: InputMaybe<PartnerCreateInput>;
};

export type PartnerCreateWithPositionInput = {
  /** Document to create */
  data: PartnerCreateInput;
  /** Position in the list of existing component instances, will default to appending at the end of list */
  position?: InputMaybe<ConnectPositionInput>;
};

/** An edge in a connection. */
export type PartnerEdge = {
  __typename?: 'PartnerEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge. */
  node: Partner;
};

/** Identifies documents */
export type PartnerManyWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<PartnerWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<PartnerWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<PartnerWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']['input']>;
  beschijving?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  beschijving_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  beschijving_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  beschijving_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  beschijving_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  beschijving_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  beschijving_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  beschijving_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  beschijving_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  beschijving_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values in which the union is empty. */
  blokken_empty?: InputMaybe<Scalars['Boolean']['input']>;
  /** Matches if the modular component contains at least one connection to the item provided to the filter */
  blokken_some?: InputMaybe<PartnerblokkenUnionWhereInput>;
  id?: InputMaybe<Scalars['ID']['input']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  id_not?: InputMaybe<Scalars['ID']['input']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']['input']>;
  titel?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  titel_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  titel_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  titel_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  titel_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  titel_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  titel_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  titel_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  titel_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  titel_starts_with?: InputMaybe<Scalars['String']['input']>;
};

export enum PartnerOrderByInput {
  BeschijvingAsc = 'beschijving_ASC',
  BeschijvingDesc = 'beschijving_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  TitelAsc = 'titel_ASC',
  TitelDesc = 'titel_DESC'
}

export type PartnerParent = Pagina;

export type PartnerParentConnectInput = {
  Pagina?: InputMaybe<PaginaConnectInput>;
};

export type PartnerParentCreateInput = {
  Pagina?: InputMaybe<PaginaCreateInput>;
};

export type PartnerParentCreateManyInlineInput = {
  /** Connect multiple existing PartnerParent documents */
  connect?: InputMaybe<Array<PartnerParentWhereUniqueInput>>;
  /** Create and connect multiple existing PartnerParent documents */
  create?: InputMaybe<Array<PartnerParentCreateInput>>;
};

export type PartnerParentCreateOneInlineInput = {
  /** Connect one existing PartnerParent document */
  connect?: InputMaybe<PartnerParentWhereUniqueInput>;
  /** Create and connect one PartnerParent document */
  create?: InputMaybe<PartnerParentCreateInput>;
};

export type PartnerParentUpdateInput = {
  Pagina?: InputMaybe<PaginaUpdateInput>;
};

export type PartnerParentUpdateManyInlineInput = {
  /** Connect multiple existing PartnerParent documents */
  connect?: InputMaybe<Array<PartnerParentConnectInput>>;
  /** Create and connect multiple PartnerParent documents */
  create?: InputMaybe<Array<PartnerParentCreateInput>>;
  /** Delete multiple PartnerParent documents */
  delete?: InputMaybe<Array<PartnerParentWhereUniqueInput>>;
  /** Disconnect multiple PartnerParent documents */
  disconnect?: InputMaybe<Array<PartnerParentWhereUniqueInput>>;
  /** Override currently-connected documents with multiple existing PartnerParent documents */
  set?: InputMaybe<Array<PartnerParentWhereUniqueInput>>;
  /** Update multiple PartnerParent documents */
  update?: InputMaybe<Array<PartnerParentUpdateWithNestedWhereUniqueInput>>;
  /** Upsert multiple PartnerParent documents */
  upsert?: InputMaybe<Array<PartnerParentUpsertWithNestedWhereUniqueInput>>;
};

export type PartnerParentUpdateManyWithNestedWhereInput = {
  Pagina?: InputMaybe<PaginaUpdateManyWithNestedWhereInput>;
};

export type PartnerParentUpdateOneInlineInput = {
  /** Connect existing PartnerParent document */
  connect?: InputMaybe<PartnerParentWhereUniqueInput>;
  /** Create and connect one PartnerParent document */
  create?: InputMaybe<PartnerParentCreateInput>;
  /** Delete currently connected PartnerParent document */
  delete?: InputMaybe<Scalars['Boolean']['input']>;
  /** Disconnect currently connected PartnerParent document */
  disconnect?: InputMaybe<Scalars['Boolean']['input']>;
  /** Update single PartnerParent document */
  update?: InputMaybe<PartnerParentUpdateWithNestedWhereUniqueInput>;
  /** Upsert single PartnerParent document */
  upsert?: InputMaybe<PartnerParentUpsertWithNestedWhereUniqueInput>;
};

export type PartnerParentUpdateWithNestedWhereUniqueInput = {
  Pagina?: InputMaybe<PaginaUpdateWithNestedWhereUniqueInput>;
};

export type PartnerParentUpsertWithNestedWhereUniqueInput = {
  Pagina?: InputMaybe<PaginaUpsertWithNestedWhereUniqueInput>;
};

export type PartnerParentWhereInput = {
  Pagina?: InputMaybe<PaginaWhereInput>;
};

export type PartnerParentWhereUniqueInput = {
  Pagina?: InputMaybe<PaginaWhereUniqueInput>;
};

export type PartnerUpdateInput = {
  beschijving?: InputMaybe<Scalars['String']['input']>;
  blokken?: InputMaybe<PartnerblokkenUnionUpdateManyInlineInput>;
  titel?: InputMaybe<Scalars['String']['input']>;
};

export type PartnerUpdateManyInlineInput = {
  /** Create and connect multiple Partner component instances */
  create?: InputMaybe<Array<PartnerCreateWithPositionInput>>;
  /** Delete multiple Partner documents */
  delete?: InputMaybe<Array<PartnerWhereUniqueInput>>;
  /** Update multiple Partner component instances */
  update?: InputMaybe<Array<PartnerUpdateWithNestedWhereUniqueAndPositionInput>>;
  /** Upsert multiple Partner component instances */
  upsert?: InputMaybe<Array<PartnerUpsertWithNestedWhereUniqueAndPositionInput>>;
};

export type PartnerUpdateManyInput = {
  beschijving?: InputMaybe<Scalars['String']['input']>;
  titel?: InputMaybe<Scalars['String']['input']>;
};

export type PartnerUpdateManyWithNestedWhereInput = {
  /** Update many input */
  data: PartnerUpdateManyInput;
  /** Document search */
  where: PartnerWhereInput;
};

export type PartnerUpdateOneInlineInput = {
  /** Create and connect one Partner document */
  create?: InputMaybe<PartnerCreateInput>;
  /** Delete currently connected Partner document */
  delete?: InputMaybe<Scalars['Boolean']['input']>;
  /** Update single Partner document */
  update?: InputMaybe<PartnerUpdateWithNestedWhereUniqueInput>;
  /** Upsert single Partner document */
  upsert?: InputMaybe<PartnerUpsertWithNestedWhereUniqueInput>;
};

export type PartnerUpdateWithNestedWhereUniqueAndPositionInput = {
  /** Document to update */
  data?: InputMaybe<PartnerUpdateInput>;
  /** Position in the list of existing component instances, will default to appending at the end of list */
  position?: InputMaybe<ConnectPositionInput>;
  /** Unique component instance search */
  where: PartnerWhereUniqueInput;
};

export type PartnerUpdateWithNestedWhereUniqueInput = {
  /** Document to update */
  data: PartnerUpdateInput;
  /** Unique document search */
  where: PartnerWhereUniqueInput;
};

export type PartnerUpsertInput = {
  /** Create document if it didn't exist */
  create: PartnerCreateInput;
  /** Update document if it exists */
  update: PartnerUpdateInput;
};

export type PartnerUpsertWithNestedWhereUniqueAndPositionInput = {
  /** Document to upsert */
  data?: InputMaybe<PartnerUpsertInput>;
  /** Position in the list of existing component instances, will default to appending at the end of list */
  position?: InputMaybe<ConnectPositionInput>;
  /** Unique component instance search */
  where: PartnerWhereUniqueInput;
};

export type PartnerUpsertWithNestedWhereUniqueInput = {
  /** Upsert data */
  data: PartnerUpsertInput;
  /** Unique document search */
  where: PartnerWhereUniqueInput;
};

/** Identifies documents */
export type PartnerWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<PartnerWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<PartnerWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<PartnerWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']['input']>;
  beschijving?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  beschijving_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  beschijving_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  beschijving_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  beschijving_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  beschijving_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  beschijving_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  beschijving_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  beschijving_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  beschijving_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values in which the union is empty. */
  blokken_empty?: InputMaybe<Scalars['Boolean']['input']>;
  /** Matches if the modular component contains at least one connection to the item provided to the filter */
  blokken_some?: InputMaybe<PartnerblokkenUnionWhereInput>;
  id?: InputMaybe<Scalars['ID']['input']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  id_not?: InputMaybe<Scalars['ID']['input']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']['input']>;
  titel?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  titel_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  titel_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  titel_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  titel_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  titel_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  titel_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  titel_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  titel_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  titel_starts_with?: InputMaybe<Scalars['String']['input']>;
};

/** References Partner record uniquely */
export type PartnerWhereUniqueInput = {
  id?: InputMaybe<Scalars['ID']['input']>;
};

export type PartnerblokkenUnion = ContentBlok;

export type PartnerblokkenUnionConnectInput = {
  ContentBlok?: InputMaybe<ContentBlokConnectInput>;
};

export type PartnerblokkenUnionCreateInput = {
  ContentBlok?: InputMaybe<ContentBlokCreateInput>;
};

export type PartnerblokkenUnionCreateManyInlineInput = {
  /** Create and connect multiple existing PartnerblokkenUnion documents */
  create?: InputMaybe<Array<PartnerblokkenUnionCreateInput>>;
};

export type PartnerblokkenUnionCreateOneInlineInput = {
  /** Create and connect one PartnerblokkenUnion document */
  create?: InputMaybe<PartnerblokkenUnionCreateInput>;
};

export type PartnerblokkenUnionCreateWithPositionInput = {
  ContentBlok?: InputMaybe<ContentBlokCreateWithPositionInput>;
};

export type PartnerblokkenUnionUpdateInput = {
  ContentBlok?: InputMaybe<ContentBlokUpdateInput>;
};

export type PartnerblokkenUnionUpdateManyInlineInput = {
  /** Create and connect multiple PartnerblokkenUnion component instances */
  create?: InputMaybe<Array<PartnerblokkenUnionCreateWithPositionInput>>;
  /** Delete multiple PartnerblokkenUnion documents */
  delete?: InputMaybe<Array<PartnerblokkenUnionWhereUniqueInput>>;
  /** Update multiple PartnerblokkenUnion component instances */
  update?: InputMaybe<Array<PartnerblokkenUnionUpdateWithNestedWhereUniqueAndPositionInput>>;
  /** Upsert multiple PartnerblokkenUnion component instances */
  upsert?: InputMaybe<Array<PartnerblokkenUnionUpsertWithNestedWhereUniqueAndPositionInput>>;
};

export type PartnerblokkenUnionUpdateManyWithNestedWhereInput = {
  ContentBlok?: InputMaybe<ContentBlokUpdateManyWithNestedWhereInput>;
};

export type PartnerblokkenUnionUpdateOneInlineInput = {
  /** Create and connect one PartnerblokkenUnion document */
  create?: InputMaybe<PartnerblokkenUnionCreateInput>;
  /** Delete currently connected PartnerblokkenUnion document */
  delete?: InputMaybe<Scalars['Boolean']['input']>;
  /** Update single PartnerblokkenUnion document */
  update?: InputMaybe<PartnerblokkenUnionUpdateWithNestedWhereUniqueInput>;
  /** Upsert single PartnerblokkenUnion document */
  upsert?: InputMaybe<PartnerblokkenUnionUpsertWithNestedWhereUniqueInput>;
};

export type PartnerblokkenUnionUpdateWithNestedWhereUniqueAndPositionInput = {
  ContentBlok?: InputMaybe<ContentBlokUpdateWithNestedWhereUniqueAndPositionInput>;
};

export type PartnerblokkenUnionUpdateWithNestedWhereUniqueInput = {
  ContentBlok?: InputMaybe<ContentBlokUpdateWithNestedWhereUniqueInput>;
};

export type PartnerblokkenUnionUpsertWithNestedWhereUniqueAndPositionInput = {
  ContentBlok?: InputMaybe<ContentBlokUpsertWithNestedWhereUniqueAndPositionInput>;
};

export type PartnerblokkenUnionUpsertWithNestedWhereUniqueInput = {
  ContentBlok?: InputMaybe<ContentBlokUpsertWithNestedWhereUniqueInput>;
};

export type PartnerblokkenUnionWhereInput = {
  ContentBlok?: InputMaybe<ContentBlokWhereInput>;
};

export type PartnerblokkenUnionWhereUniqueInput = {
  ContentBlok?: InputMaybe<ContentBlokWhereUniqueInput>;
};

export type Project = Entity & Node & {
  __typename?: 'Project';
  bestanden: Array<Asset>;
  /** The time the document was created */
  createdAt: Scalars['DateTime']['output'];
  /** User that created this document */
  createdBy?: Maybe<User>;
  /** Get the document in other stages */
  documentInStages: Array<Project>;
  fotos: Array<Asset>;
  /** List of Project versions */
  history: Array<Version>;
  /** The unique identifier */
  id: Scalars['ID']['output'];
  participatieRond?: Maybe<Scalars['Boolean']['output']>;
  projectBeschijving?: Maybe<RichText>;
  projectNaam?: Maybe<Scalars['String']['output']>;
  /** Deze tekst word gebruikt op de lijstweergave */
  projectSamenvatting?: Maybe<Scalars['String']['output']>;
  /** De status waar een project zich in bevind */
  projectStatus?: Maybe<ProjectStatus>;
  projectType?: Maybe<ProjectTypes>;
  /** The time the document was published. Null on documents in draft stage. */
  publishedAt?: Maybe<Scalars['DateTime']['output']>;
  /** User that last published this document */
  publishedBy?: Maybe<User>;
  scheduledIn: Array<ScheduledOperation>;
  secties: Array<ProjectsectiesUnion>;
  slug?: Maybe<Scalars['String']['output']>;
  /** System stage field */
  stage: Stage;
  startDatum?: Maybe<Scalars['Date']['output']>;
  /** The time the document was updated */
  updatedAt: Scalars['DateTime']['output'];
  /** User that last updated this document */
  updatedBy?: Maybe<User>;
};


export type ProjectBestandenArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  locales?: InputMaybe<Array<Locale>>;
  orderBy?: InputMaybe<AssetOrderByInput>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<AssetWhereInput>;
};


export type ProjectCreatedByArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>;
  locales?: InputMaybe<Array<Locale>>;
};


export type ProjectDocumentInStagesArgs = {
  includeCurrent?: Scalars['Boolean']['input'];
  inheritLocale?: Scalars['Boolean']['input'];
  stages?: Array<Stage>;
};


export type ProjectFotosArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  locales?: InputMaybe<Array<Locale>>;
  orderBy?: InputMaybe<AssetOrderByInput>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<AssetWhereInput>;
};


export type ProjectHistoryArgs = {
  limit?: Scalars['Int']['input'];
  skip?: Scalars['Int']['input'];
  stageOverride?: InputMaybe<Stage>;
};


export type ProjectPublishedByArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>;
  locales?: InputMaybe<Array<Locale>>;
};


export type ProjectScheduledInArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  locales?: InputMaybe<Array<Locale>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<ScheduledOperationWhereInput>;
};


export type ProjectSectiesArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  locales?: InputMaybe<Array<Locale>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};


export type ProjectUpdatedByArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>;
  locales?: InputMaybe<Array<Locale>>;
};

export type ProjectConnectInput = {
  /** Allow to specify document position in list of connected documents, will default to appending at end of list */
  position?: InputMaybe<ConnectPositionInput>;
  /** Document to connect */
  where: ProjectWhereUniqueInput;
};

/** A connection to a list of items. */
export type ProjectConnection = {
  __typename?: 'ProjectConnection';
  aggregate: Aggregate;
  /** A list of edges. */
  edges: Array<ProjectEdge>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

export type ProjectCreateInput = {
  bestanden?: InputMaybe<AssetCreateManyInlineInput>;
  clp3169cr1b9b01t60zyn5jfo?: InputMaybe<BlogPostCreateManyInlineInput>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  fotos?: InputMaybe<AssetCreateManyInlineInput>;
  participatieRond?: InputMaybe<Scalars['Boolean']['input']>;
  projectBeschijving?: InputMaybe<Scalars['RichTextAST']['input']>;
  projectNaam?: InputMaybe<Scalars['String']['input']>;
  projectSamenvatting?: InputMaybe<Scalars['String']['input']>;
  projectStatus?: InputMaybe<ProjectStatus>;
  projectType?: InputMaybe<ProjectTypes>;
  secties?: InputMaybe<ProjectsectiesUnionCreateManyInlineInput>;
  slug?: InputMaybe<Scalars['String']['input']>;
  startDatum?: InputMaybe<Scalars['Date']['input']>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
};

export type ProjectCreateManyInlineInput = {
  /** Connect multiple existing Project documents */
  connect?: InputMaybe<Array<ProjectWhereUniqueInput>>;
  /** Create and connect multiple existing Project documents */
  create?: InputMaybe<Array<ProjectCreateInput>>;
};

export type ProjectCreateOneInlineInput = {
  /** Connect one existing Project document */
  connect?: InputMaybe<ProjectWhereUniqueInput>;
  /** Create and connect one Project document */
  create?: InputMaybe<ProjectCreateInput>;
};

/** An edge in a connection. */
export type ProjectEdge = {
  __typename?: 'ProjectEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge. */
  node: Project;
};

/** Identifies documents */
export type ProjectManyWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<ProjectWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<ProjectWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<ProjectWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']['input']>;
  bestanden_every?: InputMaybe<AssetWhereInput>;
  bestanden_none?: InputMaybe<AssetWhereInput>;
  bestanden_some?: InputMaybe<AssetWhereInput>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  createdAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  createdBy?: InputMaybe<UserWhereInput>;
  documentInStages_every?: InputMaybe<ProjectWhereStageInput>;
  documentInStages_none?: InputMaybe<ProjectWhereStageInput>;
  documentInStages_some?: InputMaybe<ProjectWhereStageInput>;
  fotos_every?: InputMaybe<AssetWhereInput>;
  fotos_none?: InputMaybe<AssetWhereInput>;
  fotos_some?: InputMaybe<AssetWhereInput>;
  id?: InputMaybe<Scalars['ID']['input']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  id_not?: InputMaybe<Scalars['ID']['input']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']['input']>;
  participatieRond?: InputMaybe<Scalars['Boolean']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  participatieRond_not?: InputMaybe<Scalars['Boolean']['input']>;
  projectNaam?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  projectNaam_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  projectNaam_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  projectNaam_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  projectNaam_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  projectNaam_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  projectNaam_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  projectNaam_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  projectNaam_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  projectNaam_starts_with?: InputMaybe<Scalars['String']['input']>;
  projectSamenvatting?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  projectSamenvatting_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  projectSamenvatting_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  projectSamenvatting_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  projectSamenvatting_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  projectSamenvatting_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  projectSamenvatting_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  projectSamenvatting_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  projectSamenvatting_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  projectSamenvatting_starts_with?: InputMaybe<Scalars['String']['input']>;
  projectStatus?: InputMaybe<ProjectStatus>;
  /** All values that are contained in given list. */
  projectStatus_in?: InputMaybe<Array<InputMaybe<ProjectStatus>>>;
  /** Any other value that exists and is not equal to the given value. */
  projectStatus_not?: InputMaybe<ProjectStatus>;
  /** All values that are not contained in given list. */
  projectStatus_not_in?: InputMaybe<Array<InputMaybe<ProjectStatus>>>;
  projectType?: InputMaybe<ProjectTypes>;
  /** All values that are contained in given list. */
  projectType_in?: InputMaybe<Array<InputMaybe<ProjectTypes>>>;
  /** Any other value that exists and is not equal to the given value. */
  projectType_not?: InputMaybe<ProjectTypes>;
  /** All values that are not contained in given list. */
  projectType_not_in?: InputMaybe<Array<InputMaybe<ProjectTypes>>>;
  publishedAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  publishedAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  publishedBy?: InputMaybe<UserWhereInput>;
  scheduledIn_every?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_none?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_some?: InputMaybe<ScheduledOperationWhereInput>;
  /** All values in which the union is empty. */
  secties_empty?: InputMaybe<Scalars['Boolean']['input']>;
  /** Matches if the modular component contains at least one connection to the item provided to the filter */
  secties_some?: InputMaybe<ProjectsectiesUnionWhereInput>;
  slug?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  slug_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  slug_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  slug_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  slug_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  slug_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  slug_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  slug_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  slug_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  slug_starts_with?: InputMaybe<Scalars['String']['input']>;
  startDatum?: InputMaybe<Scalars['Date']['input']>;
  /** All values greater than the given value. */
  startDatum_gt?: InputMaybe<Scalars['Date']['input']>;
  /** All values greater than or equal the given value. */
  startDatum_gte?: InputMaybe<Scalars['Date']['input']>;
  /** All values that are contained in given list. */
  startDatum_in?: InputMaybe<Array<InputMaybe<Scalars['Date']['input']>>>;
  /** All values less than the given value. */
  startDatum_lt?: InputMaybe<Scalars['Date']['input']>;
  /** All values less than or equal the given value. */
  startDatum_lte?: InputMaybe<Scalars['Date']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  startDatum_not?: InputMaybe<Scalars['Date']['input']>;
  /** All values that are not contained in given list. */
  startDatum_not_in?: InputMaybe<Array<InputMaybe<Scalars['Date']['input']>>>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  updatedAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  updatedBy?: InputMaybe<UserWhereInput>;
};

export enum ProjectOrderByInput {
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  ParticipatieRondAsc = 'participatieRond_ASC',
  ParticipatieRondDesc = 'participatieRond_DESC',
  ProjectNaamAsc = 'projectNaam_ASC',
  ProjectNaamDesc = 'projectNaam_DESC',
  ProjectSamenvattingAsc = 'projectSamenvatting_ASC',
  ProjectSamenvattingDesc = 'projectSamenvatting_DESC',
  ProjectStatusAsc = 'projectStatus_ASC',
  ProjectStatusDesc = 'projectStatus_DESC',
  ProjectTypeAsc = 'projectType_ASC',
  ProjectTypeDesc = 'projectType_DESC',
  PublishedAtAsc = 'publishedAt_ASC',
  PublishedAtDesc = 'publishedAt_DESC',
  SlugAsc = 'slug_ASC',
  SlugDesc = 'slug_DESC',
  StartDatumAsc = 'startDatum_ASC',
  StartDatumDesc = 'startDatum_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC'
}

export enum ProjectStatus {
  ParticipatieOpen = 'ParticipatieOpen',
  ParticipatieRond = 'ParticipatieRond',
  ProjectDraait = 'ProjectDraait',
  ProjectLoopt = 'ProjectLoopt',
  Voorbereiding = 'Voorbereiding'
}

export enum ProjectTypes {
  Besparing = 'besparing',
  Sociaal = 'sociaal',
  Wind = 'wind',
  Zon = 'zon',
  Zonopdak = 'zonopdak'
}

export type ProjectUpdateInput = {
  bestanden?: InputMaybe<AssetUpdateManyInlineInput>;
  clp3169cr1b9b01t60zyn5jfo?: InputMaybe<BlogPostUpdateManyInlineInput>;
  fotos?: InputMaybe<AssetUpdateManyInlineInput>;
  participatieRond?: InputMaybe<Scalars['Boolean']['input']>;
  projectBeschijving?: InputMaybe<Scalars['RichTextAST']['input']>;
  projectNaam?: InputMaybe<Scalars['String']['input']>;
  projectSamenvatting?: InputMaybe<Scalars['String']['input']>;
  projectStatus?: InputMaybe<ProjectStatus>;
  projectType?: InputMaybe<ProjectTypes>;
  secties?: InputMaybe<ProjectsectiesUnionUpdateManyInlineInput>;
  slug?: InputMaybe<Scalars['String']['input']>;
  startDatum?: InputMaybe<Scalars['Date']['input']>;
};

export type ProjectUpdateManyInlineInput = {
  /** Connect multiple existing Project documents */
  connect?: InputMaybe<Array<ProjectConnectInput>>;
  /** Create and connect multiple Project documents */
  create?: InputMaybe<Array<ProjectCreateInput>>;
  /** Delete multiple Project documents */
  delete?: InputMaybe<Array<ProjectWhereUniqueInput>>;
  /** Disconnect multiple Project documents */
  disconnect?: InputMaybe<Array<ProjectWhereUniqueInput>>;
  /** Override currently-connected documents with multiple existing Project documents */
  set?: InputMaybe<Array<ProjectWhereUniqueInput>>;
  /** Update multiple Project documents */
  update?: InputMaybe<Array<ProjectUpdateWithNestedWhereUniqueInput>>;
  /** Upsert multiple Project documents */
  upsert?: InputMaybe<Array<ProjectUpsertWithNestedWhereUniqueInput>>;
};

export type ProjectUpdateManyInput = {
  participatieRond?: InputMaybe<Scalars['Boolean']['input']>;
  projectBeschijving?: InputMaybe<Scalars['RichTextAST']['input']>;
  projectNaam?: InputMaybe<Scalars['String']['input']>;
  projectSamenvatting?: InputMaybe<Scalars['String']['input']>;
  projectStatus?: InputMaybe<ProjectStatus>;
  projectType?: InputMaybe<ProjectTypes>;
  startDatum?: InputMaybe<Scalars['Date']['input']>;
};

export type ProjectUpdateManyWithNestedWhereInput = {
  /** Update many input */
  data: ProjectUpdateManyInput;
  /** Document search */
  where: ProjectWhereInput;
};

export type ProjectUpdateOneInlineInput = {
  /** Connect existing Project document */
  connect?: InputMaybe<ProjectWhereUniqueInput>;
  /** Create and connect one Project document */
  create?: InputMaybe<ProjectCreateInput>;
  /** Delete currently connected Project document */
  delete?: InputMaybe<Scalars['Boolean']['input']>;
  /** Disconnect currently connected Project document */
  disconnect?: InputMaybe<Scalars['Boolean']['input']>;
  /** Update single Project document */
  update?: InputMaybe<ProjectUpdateWithNestedWhereUniqueInput>;
  /** Upsert single Project document */
  upsert?: InputMaybe<ProjectUpsertWithNestedWhereUniqueInput>;
};

export type ProjectUpdateWithNestedWhereUniqueInput = {
  /** Document to update */
  data: ProjectUpdateInput;
  /** Unique document search */
  where: ProjectWhereUniqueInput;
};

export type ProjectUpsertInput = {
  /** Create document if it didn't exist */
  create: ProjectCreateInput;
  /** Update document if it exists */
  update: ProjectUpdateInput;
};

export type ProjectUpsertWithNestedWhereUniqueInput = {
  /** Upsert data */
  data: ProjectUpsertInput;
  /** Unique document search */
  where: ProjectWhereUniqueInput;
};

/** This contains a set of filters that can be used to compare values internally */
export type ProjectWhereComparatorInput = {
  /** This field can be used to request to check if the entry is outdated by internal comparison */
  outdated_to?: InputMaybe<Scalars['Boolean']['input']>;
};

/** Identifies documents */
export type ProjectWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<ProjectWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<ProjectWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<ProjectWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']['input']>;
  bestanden_every?: InputMaybe<AssetWhereInput>;
  bestanden_none?: InputMaybe<AssetWhereInput>;
  bestanden_some?: InputMaybe<AssetWhereInput>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  createdAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  createdBy?: InputMaybe<UserWhereInput>;
  documentInStages_every?: InputMaybe<ProjectWhereStageInput>;
  documentInStages_none?: InputMaybe<ProjectWhereStageInput>;
  documentInStages_some?: InputMaybe<ProjectWhereStageInput>;
  fotos_every?: InputMaybe<AssetWhereInput>;
  fotos_none?: InputMaybe<AssetWhereInput>;
  fotos_some?: InputMaybe<AssetWhereInput>;
  id?: InputMaybe<Scalars['ID']['input']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  id_not?: InputMaybe<Scalars['ID']['input']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']['input']>;
  participatieRond?: InputMaybe<Scalars['Boolean']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  participatieRond_not?: InputMaybe<Scalars['Boolean']['input']>;
  projectNaam?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  projectNaam_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  projectNaam_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  projectNaam_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  projectNaam_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  projectNaam_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  projectNaam_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  projectNaam_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  projectNaam_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  projectNaam_starts_with?: InputMaybe<Scalars['String']['input']>;
  projectSamenvatting?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  projectSamenvatting_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  projectSamenvatting_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  projectSamenvatting_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  projectSamenvatting_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  projectSamenvatting_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  projectSamenvatting_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  projectSamenvatting_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  projectSamenvatting_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  projectSamenvatting_starts_with?: InputMaybe<Scalars['String']['input']>;
  projectStatus?: InputMaybe<ProjectStatus>;
  /** All values that are contained in given list. */
  projectStatus_in?: InputMaybe<Array<InputMaybe<ProjectStatus>>>;
  /** Any other value that exists and is not equal to the given value. */
  projectStatus_not?: InputMaybe<ProjectStatus>;
  /** All values that are not contained in given list. */
  projectStatus_not_in?: InputMaybe<Array<InputMaybe<ProjectStatus>>>;
  projectType?: InputMaybe<ProjectTypes>;
  /** All values that are contained in given list. */
  projectType_in?: InputMaybe<Array<InputMaybe<ProjectTypes>>>;
  /** Any other value that exists and is not equal to the given value. */
  projectType_not?: InputMaybe<ProjectTypes>;
  /** All values that are not contained in given list. */
  projectType_not_in?: InputMaybe<Array<InputMaybe<ProjectTypes>>>;
  publishedAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  publishedAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  publishedBy?: InputMaybe<UserWhereInput>;
  scheduledIn_every?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_none?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_some?: InputMaybe<ScheduledOperationWhereInput>;
  /** All values in which the union is empty. */
  secties_empty?: InputMaybe<Scalars['Boolean']['input']>;
  /** Matches if the modular component contains at least one connection to the item provided to the filter */
  secties_some?: InputMaybe<ProjectsectiesUnionWhereInput>;
  slug?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  slug_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  slug_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  slug_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  slug_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  slug_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  slug_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  slug_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  slug_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  slug_starts_with?: InputMaybe<Scalars['String']['input']>;
  startDatum?: InputMaybe<Scalars['Date']['input']>;
  /** All values greater than the given value. */
  startDatum_gt?: InputMaybe<Scalars['Date']['input']>;
  /** All values greater than or equal the given value. */
  startDatum_gte?: InputMaybe<Scalars['Date']['input']>;
  /** All values that are contained in given list. */
  startDatum_in?: InputMaybe<Array<InputMaybe<Scalars['Date']['input']>>>;
  /** All values less than the given value. */
  startDatum_lt?: InputMaybe<Scalars['Date']['input']>;
  /** All values less than or equal the given value. */
  startDatum_lte?: InputMaybe<Scalars['Date']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  startDatum_not?: InputMaybe<Scalars['Date']['input']>;
  /** All values that are not contained in given list. */
  startDatum_not_in?: InputMaybe<Array<InputMaybe<Scalars['Date']['input']>>>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  updatedAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  updatedBy?: InputMaybe<UserWhereInput>;
};

/** The document in stages filter allows specifying a stage entry to cross compare the same document between different stages */
export type ProjectWhereStageInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<ProjectWhereStageInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<ProjectWhereStageInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<ProjectWhereStageInput>>;
  /** This field contains fields which can be set as true or false to specify an internal comparison */
  compareWithParent?: InputMaybe<ProjectWhereComparatorInput>;
  /** Specify the stage to compare with */
  stage?: InputMaybe<Stage>;
};

/** References Project record uniquely */
export type ProjectWhereUniqueInput = {
  id?: InputMaybe<Scalars['ID']['input']>;
  slug?: InputMaybe<Scalars['String']['input']>;
};

export type ProjectsectiesUnion = Faq | Formulier | TekstMetAfbeelding | Timeline;

export type ProjectsectiesUnionConnectInput = {
  Faq?: InputMaybe<FaqConnectInput>;
  Formulier?: InputMaybe<FormulierConnectInput>;
  TekstMetAfbeelding?: InputMaybe<TekstMetAfbeeldingConnectInput>;
  Timeline?: InputMaybe<TimelineConnectInput>;
};

export type ProjectsectiesUnionCreateInput = {
  Faq?: InputMaybe<FaqCreateInput>;
  Formulier?: InputMaybe<FormulierCreateInput>;
  TekstMetAfbeelding?: InputMaybe<TekstMetAfbeeldingCreateInput>;
  Timeline?: InputMaybe<TimelineCreateInput>;
};

export type ProjectsectiesUnionCreateManyInlineInput = {
  /** Create and connect multiple existing ProjectsectiesUnion documents */
  create?: InputMaybe<Array<ProjectsectiesUnionCreateInput>>;
};

export type ProjectsectiesUnionCreateOneInlineInput = {
  /** Create and connect one ProjectsectiesUnion document */
  create?: InputMaybe<ProjectsectiesUnionCreateInput>;
};

export type ProjectsectiesUnionCreateWithPositionInput = {
  Faq?: InputMaybe<FaqCreateWithPositionInput>;
  Formulier?: InputMaybe<FormulierCreateWithPositionInput>;
  TekstMetAfbeelding?: InputMaybe<TekstMetAfbeeldingCreateWithPositionInput>;
  Timeline?: InputMaybe<TimelineCreateWithPositionInput>;
};

export type ProjectsectiesUnionUpdateInput = {
  Faq?: InputMaybe<FaqUpdateInput>;
  Formulier?: InputMaybe<FormulierUpdateInput>;
  TekstMetAfbeelding?: InputMaybe<TekstMetAfbeeldingUpdateInput>;
  Timeline?: InputMaybe<TimelineUpdateInput>;
};

export type ProjectsectiesUnionUpdateManyInlineInput = {
  /** Create and connect multiple ProjectsectiesUnion component instances */
  create?: InputMaybe<Array<ProjectsectiesUnionCreateWithPositionInput>>;
  /** Delete multiple ProjectsectiesUnion documents */
  delete?: InputMaybe<Array<ProjectsectiesUnionWhereUniqueInput>>;
  /** Update multiple ProjectsectiesUnion component instances */
  update?: InputMaybe<Array<ProjectsectiesUnionUpdateWithNestedWhereUniqueAndPositionInput>>;
  /** Upsert multiple ProjectsectiesUnion component instances */
  upsert?: InputMaybe<Array<ProjectsectiesUnionUpsertWithNestedWhereUniqueAndPositionInput>>;
};

export type ProjectsectiesUnionUpdateManyWithNestedWhereInput = {
  Faq?: InputMaybe<FaqUpdateManyWithNestedWhereInput>;
  Formulier?: InputMaybe<FormulierUpdateManyWithNestedWhereInput>;
  TekstMetAfbeelding?: InputMaybe<TekstMetAfbeeldingUpdateManyWithNestedWhereInput>;
  Timeline?: InputMaybe<TimelineUpdateManyWithNestedWhereInput>;
};

export type ProjectsectiesUnionUpdateOneInlineInput = {
  /** Create and connect one ProjectsectiesUnion document */
  create?: InputMaybe<ProjectsectiesUnionCreateInput>;
  /** Delete currently connected ProjectsectiesUnion document */
  delete?: InputMaybe<Scalars['Boolean']['input']>;
  /** Update single ProjectsectiesUnion document */
  update?: InputMaybe<ProjectsectiesUnionUpdateWithNestedWhereUniqueInput>;
  /** Upsert single ProjectsectiesUnion document */
  upsert?: InputMaybe<ProjectsectiesUnionUpsertWithNestedWhereUniqueInput>;
};

export type ProjectsectiesUnionUpdateWithNestedWhereUniqueAndPositionInput = {
  Faq?: InputMaybe<FaqUpdateWithNestedWhereUniqueAndPositionInput>;
  Formulier?: InputMaybe<FormulierUpdateWithNestedWhereUniqueAndPositionInput>;
  TekstMetAfbeelding?: InputMaybe<TekstMetAfbeeldingUpdateWithNestedWhereUniqueAndPositionInput>;
  Timeline?: InputMaybe<TimelineUpdateWithNestedWhereUniqueAndPositionInput>;
};

export type ProjectsectiesUnionUpdateWithNestedWhereUniqueInput = {
  Faq?: InputMaybe<FaqUpdateWithNestedWhereUniqueInput>;
  Formulier?: InputMaybe<FormulierUpdateWithNestedWhereUniqueInput>;
  TekstMetAfbeelding?: InputMaybe<TekstMetAfbeeldingUpdateWithNestedWhereUniqueInput>;
  Timeline?: InputMaybe<TimelineUpdateWithNestedWhereUniqueInput>;
};

export type ProjectsectiesUnionUpsertWithNestedWhereUniqueAndPositionInput = {
  Faq?: InputMaybe<FaqUpsertWithNestedWhereUniqueAndPositionInput>;
  Formulier?: InputMaybe<FormulierUpsertWithNestedWhereUniqueAndPositionInput>;
  TekstMetAfbeelding?: InputMaybe<TekstMetAfbeeldingUpsertWithNestedWhereUniqueAndPositionInput>;
  Timeline?: InputMaybe<TimelineUpsertWithNestedWhereUniqueAndPositionInput>;
};

export type ProjectsectiesUnionUpsertWithNestedWhereUniqueInput = {
  Faq?: InputMaybe<FaqUpsertWithNestedWhereUniqueInput>;
  Formulier?: InputMaybe<FormulierUpsertWithNestedWhereUniqueInput>;
  TekstMetAfbeelding?: InputMaybe<TekstMetAfbeeldingUpsertWithNestedWhereUniqueInput>;
  Timeline?: InputMaybe<TimelineUpsertWithNestedWhereUniqueInput>;
};

export type ProjectsectiesUnionWhereInput = {
  Faq?: InputMaybe<FaqWhereInput>;
  Formulier?: InputMaybe<FormulierWhereInput>;
  TekstMetAfbeelding?: InputMaybe<TekstMetAfbeeldingWhereInput>;
  Timeline?: InputMaybe<TimelineWhereInput>;
};

export type ProjectsectiesUnionWhereUniqueInput = {
  Faq?: InputMaybe<FaqWhereUniqueInput>;
  Formulier?: InputMaybe<FormulierWhereUniqueInput>;
  TekstMetAfbeelding?: InputMaybe<TekstMetAfbeeldingWhereUniqueInput>;
  Timeline?: InputMaybe<TimelineWhereUniqueInput>;
};

export type PublishLocaleInput = {
  /** Locales to publish */
  locale: Locale;
  /** Stages to publish selected locales to */
  stages: Array<Stage>;
};

export type Query = {
  __typename?: 'Query';
  /** Retrieve a single asset */
  asset?: Maybe<Asset>;
  /** Retrieve document version */
  assetVersion?: Maybe<DocumentVersion>;
  /** Retrieve multiple assets */
  assets: Array<Asset>;
  /** Retrieve multiple assets using the Relay connection interface */
  assetsConnection: AssetConnection;
  /** Retrieve a single bestuur */
  bestuur?: Maybe<Bestuur>;
  /** Retrieve document version */
  bestuurVersion?: Maybe<DocumentVersion>;
  /** Retrieve multiple bestuurs */
  bestuurs: Array<Bestuur>;
  /** Retrieve multiple bestuurs using the Relay connection interface */
  bestuursConnection: BestuurConnection;
  /** Retrieve a single blogPost */
  blogPost?: Maybe<BlogPost>;
  /** Retrieve document version */
  blogPostVersion?: Maybe<DocumentVersion>;
  /** Retrieve multiple blogPosts */
  blogPosts: Array<BlogPost>;
  /** Retrieve multiple blogPosts using the Relay connection interface */
  blogPostsConnection: BlogPostConnection;
  /** Fetches an object given its ID */
  entities?: Maybe<Array<Entity>>;
  /** Retrieve a single moment */
  moment?: Maybe<Moment>;
  /** Retrieve document version */
  momentVersion?: Maybe<DocumentVersion>;
  /** Retrieve multiple moments */
  moments: Array<Moment>;
  /** Retrieve multiple moments using the Relay connection interface */
  momentsConnection: MomentConnection;
  /** Fetches an object given its ID */
  node?: Maybe<Node>;
  /** Retrieve a single pagina */
  pagina?: Maybe<Pagina>;
  /** Retrieve document version */
  paginaVersion?: Maybe<DocumentVersion>;
  /** Retrieve multiple paginas */
  paginas: Array<Pagina>;
  /** Retrieve multiple paginas using the Relay connection interface */
  paginasConnection: PaginaConnection;
  /** Retrieve a single project */
  project?: Maybe<Project>;
  /** Retrieve document version */
  projectVersion?: Maybe<DocumentVersion>;
  /** Retrieve multiple projects */
  projects: Array<Project>;
  /** Retrieve multiple projects using the Relay connection interface */
  projectsConnection: ProjectConnection;
  /** Retrieve a single scheduledOperation */
  scheduledOperation?: Maybe<ScheduledOperation>;
  /** Retrieve multiple scheduledOperations */
  scheduledOperations: Array<ScheduledOperation>;
  /** Retrieve multiple scheduledOperations using the Relay connection interface */
  scheduledOperationsConnection: ScheduledOperationConnection;
  /** Retrieve a single scheduledRelease */
  scheduledRelease?: Maybe<ScheduledRelease>;
  /** Retrieve multiple scheduledReleases */
  scheduledReleases: Array<ScheduledRelease>;
  /** Retrieve multiple scheduledReleases using the Relay connection interface */
  scheduledReleasesConnection: ScheduledReleaseConnection;
  /** Retrieve a single user */
  user?: Maybe<User>;
  /** Retrieve multiple users */
  users: Array<User>;
  /** Retrieve multiple users using the Relay connection interface */
  usersConnection: UserConnection;
  /** Retrieve a single vraagAntwoord */
  vraagAntwoord?: Maybe<VraagAntwoord>;
  /** Retrieve document version */
  vraagAntwoordVersion?: Maybe<DocumentVersion>;
  /** Retrieve multiple vraagAntwoords */
  vraagAntwoords: Array<VraagAntwoord>;
  /** Retrieve multiple vraagAntwoords using the Relay connection interface */
  vraagAntwoordsConnection: VraagAntwoordConnection;
};


export type QueryAssetArgs = {
  locales?: Array<Locale>;
  stage?: Stage;
  where: AssetWhereUniqueInput;
};


export type QueryAssetVersionArgs = {
  where: VersionWhereInput;
};


export type QueryAssetsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  locales?: Array<Locale>;
  orderBy?: InputMaybe<AssetOrderByInput>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  stage?: Stage;
  where?: InputMaybe<AssetWhereInput>;
};


export type QueryAssetsConnectionArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  locales?: Array<Locale>;
  orderBy?: InputMaybe<AssetOrderByInput>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  stage?: Stage;
  where?: InputMaybe<AssetWhereInput>;
};


export type QueryBestuurArgs = {
  locales?: Array<Locale>;
  stage?: Stage;
  where: BestuurWhereUniqueInput;
};


export type QueryBestuurVersionArgs = {
  where: VersionWhereInput;
};


export type QueryBestuursArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  locales?: Array<Locale>;
  orderBy?: InputMaybe<BestuurOrderByInput>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  stage?: Stage;
  where?: InputMaybe<BestuurWhereInput>;
};


export type QueryBestuursConnectionArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  locales?: Array<Locale>;
  orderBy?: InputMaybe<BestuurOrderByInput>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  stage?: Stage;
  where?: InputMaybe<BestuurWhereInput>;
};


export type QueryBlogPostArgs = {
  locales?: Array<Locale>;
  stage?: Stage;
  where: BlogPostWhereUniqueInput;
};


export type QueryBlogPostVersionArgs = {
  where: VersionWhereInput;
};


export type QueryBlogPostsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  locales?: Array<Locale>;
  orderBy?: InputMaybe<BlogPostOrderByInput>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  stage?: Stage;
  where?: InputMaybe<BlogPostWhereInput>;
};


export type QueryBlogPostsConnectionArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  locales?: Array<Locale>;
  orderBy?: InputMaybe<BlogPostOrderByInput>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  stage?: Stage;
  where?: InputMaybe<BlogPostWhereInput>;
};


export type QueryEntitiesArgs = {
  locales?: InputMaybe<Array<Locale>>;
  where: Array<EntityWhereInput>;
};


export type QueryMomentArgs = {
  locales?: Array<Locale>;
  stage?: Stage;
  where: MomentWhereUniqueInput;
};


export type QueryMomentVersionArgs = {
  where: VersionWhereInput;
};


export type QueryMomentsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  locales?: Array<Locale>;
  orderBy?: InputMaybe<MomentOrderByInput>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  stage?: Stage;
  where?: InputMaybe<MomentWhereInput>;
};


export type QueryMomentsConnectionArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  locales?: Array<Locale>;
  orderBy?: InputMaybe<MomentOrderByInput>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  stage?: Stage;
  where?: InputMaybe<MomentWhereInput>;
};


export type QueryNodeArgs = {
  id: Scalars['ID']['input'];
  locales?: Array<Locale>;
  stage?: Stage;
};


export type QueryPaginaArgs = {
  locales?: Array<Locale>;
  stage?: Stage;
  where: PaginaWhereUniqueInput;
};


export type QueryPaginaVersionArgs = {
  where: VersionWhereInput;
};


export type QueryPaginasArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  locales?: Array<Locale>;
  orderBy?: InputMaybe<PaginaOrderByInput>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  stage?: Stage;
  where?: InputMaybe<PaginaWhereInput>;
};


export type QueryPaginasConnectionArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  locales?: Array<Locale>;
  orderBy?: InputMaybe<PaginaOrderByInput>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  stage?: Stage;
  where?: InputMaybe<PaginaWhereInput>;
};


export type QueryProjectArgs = {
  locales?: Array<Locale>;
  stage?: Stage;
  where: ProjectWhereUniqueInput;
};


export type QueryProjectVersionArgs = {
  where: VersionWhereInput;
};


export type QueryProjectsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  locales?: Array<Locale>;
  orderBy?: InputMaybe<ProjectOrderByInput>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  stage?: Stage;
  where?: InputMaybe<ProjectWhereInput>;
};


export type QueryProjectsConnectionArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  locales?: Array<Locale>;
  orderBy?: InputMaybe<ProjectOrderByInput>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  stage?: Stage;
  where?: InputMaybe<ProjectWhereInput>;
};


export type QueryScheduledOperationArgs = {
  locales?: Array<Locale>;
  stage?: Stage;
  where: ScheduledOperationWhereUniqueInput;
};


export type QueryScheduledOperationsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  locales?: Array<Locale>;
  orderBy?: InputMaybe<ScheduledOperationOrderByInput>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  stage?: Stage;
  where?: InputMaybe<ScheduledOperationWhereInput>;
};


export type QueryScheduledOperationsConnectionArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  locales?: Array<Locale>;
  orderBy?: InputMaybe<ScheduledOperationOrderByInput>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  stage?: Stage;
  where?: InputMaybe<ScheduledOperationWhereInput>;
};


export type QueryScheduledReleaseArgs = {
  locales?: Array<Locale>;
  stage?: Stage;
  where: ScheduledReleaseWhereUniqueInput;
};


export type QueryScheduledReleasesArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  locales?: Array<Locale>;
  orderBy?: InputMaybe<ScheduledReleaseOrderByInput>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  stage?: Stage;
  where?: InputMaybe<ScheduledReleaseWhereInput>;
};


export type QueryScheduledReleasesConnectionArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  locales?: Array<Locale>;
  orderBy?: InputMaybe<ScheduledReleaseOrderByInput>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  stage?: Stage;
  where?: InputMaybe<ScheduledReleaseWhereInput>;
};


export type QueryUserArgs = {
  locales?: Array<Locale>;
  stage?: Stage;
  where: UserWhereUniqueInput;
};


export type QueryUsersArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  locales?: Array<Locale>;
  orderBy?: InputMaybe<UserOrderByInput>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  stage?: Stage;
  where?: InputMaybe<UserWhereInput>;
};


export type QueryUsersConnectionArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  locales?: Array<Locale>;
  orderBy?: InputMaybe<UserOrderByInput>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  stage?: Stage;
  where?: InputMaybe<UserWhereInput>;
};


export type QueryVraagAntwoordArgs = {
  locales?: Array<Locale>;
  stage?: Stage;
  where: VraagAntwoordWhereUniqueInput;
};


export type QueryVraagAntwoordVersionArgs = {
  where: VersionWhereInput;
};


export type QueryVraagAntwoordsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  locales?: Array<Locale>;
  orderBy?: InputMaybe<VraagAntwoordOrderByInput>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  stage?: Stage;
  where?: InputMaybe<VraagAntwoordWhereInput>;
};


export type QueryVraagAntwoordsConnectionArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  locales?: Array<Locale>;
  orderBy?: InputMaybe<VraagAntwoordOrderByInput>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  stage?: Stage;
  where?: InputMaybe<VraagAntwoordWhereInput>;
};

export type Quote = Entity & {
  __typename?: 'Quote';
  /** The unique identifier */
  id: Scalars['ID']['output'];
  image?: Maybe<Asset>;
  inhoud?: Maybe<Scalars['String']['output']>;
  naam?: Maybe<Scalars['String']['output']>;
  /** System stage field */
  stage: Stage;
  titel?: Maybe<Scalars['String']['output']>;
};


export type QuoteImageArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>;
  locales?: InputMaybe<Array<Locale>>;
  where?: InputMaybe<AssetSingleRelationWhereInput>;
};

export type QuoteConnectInput = {
  /** Allow to specify document position in list of connected documents, will default to appending at end of list */
  position?: InputMaybe<ConnectPositionInput>;
  /** Document to connect */
  where: QuoteWhereUniqueInput;
};

/** A connection to a list of items. */
export type QuoteConnection = {
  __typename?: 'QuoteConnection';
  aggregate: Aggregate;
  /** A list of edges. */
  edges: Array<QuoteEdge>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

export type QuoteCreateInput = {
  image?: InputMaybe<AssetCreateOneInlineInput>;
  inhoud?: InputMaybe<Scalars['String']['input']>;
  naam?: InputMaybe<Scalars['String']['input']>;
  titel?: InputMaybe<Scalars['String']['input']>;
};

export type QuoteCreateManyInlineInput = {
  /** Create and connect multiple existing Quote documents */
  create?: InputMaybe<Array<QuoteCreateInput>>;
};

export type QuoteCreateOneInlineInput = {
  /** Create and connect one Quote document */
  create?: InputMaybe<QuoteCreateInput>;
};

export type QuoteCreateWithPositionInput = {
  /** Document to create */
  data: QuoteCreateInput;
  /** Position in the list of existing component instances, will default to appending at the end of list */
  position?: InputMaybe<ConnectPositionInput>;
};

/** An edge in a connection. */
export type QuoteEdge = {
  __typename?: 'QuoteEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge. */
  node: Quote;
};

/** Identifies documents */
export type QuoteManyWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<QuoteWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<QuoteWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<QuoteWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  id_not?: InputMaybe<Scalars['ID']['input']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']['input']>;
  image?: InputMaybe<AssetWhereInput>;
  inhoud?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  inhoud_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  inhoud_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  inhoud_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  inhoud_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  inhoud_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  inhoud_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  inhoud_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  inhoud_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  inhoud_starts_with?: InputMaybe<Scalars['String']['input']>;
  naam?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  naam_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  naam_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  naam_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  naam_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  naam_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  naam_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  naam_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  naam_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  naam_starts_with?: InputMaybe<Scalars['String']['input']>;
  titel?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  titel_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  titel_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  titel_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  titel_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  titel_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  titel_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  titel_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  titel_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  titel_starts_with?: InputMaybe<Scalars['String']['input']>;
};

export enum QuoteOrderByInput {
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  InhoudAsc = 'inhoud_ASC',
  InhoudDesc = 'inhoud_DESC',
  NaamAsc = 'naam_ASC',
  NaamDesc = 'naam_DESC',
  TitelAsc = 'titel_ASC',
  TitelDesc = 'titel_DESC'
}

export type QuoteParent = Content;

export type QuoteParentConnectInput = {
  Content?: InputMaybe<ContentConnectInput>;
};

export type QuoteParentCreateInput = {
  Content?: InputMaybe<ContentCreateInput>;
};

export type QuoteParentCreateManyInlineInput = {
  /** Create and connect multiple existing QuoteParent documents */
  create?: InputMaybe<Array<QuoteParentCreateInput>>;
};

export type QuoteParentCreateOneInlineInput = {
  /** Create and connect one QuoteParent document */
  create?: InputMaybe<QuoteParentCreateInput>;
};

export type QuoteParentCreateWithPositionInput = {
  Content?: InputMaybe<ContentCreateWithPositionInput>;
};

export type QuoteParentUpdateInput = {
  Content?: InputMaybe<ContentUpdateInput>;
};

export type QuoteParentUpdateManyInlineInput = {
  /** Create and connect multiple QuoteParent component instances */
  create?: InputMaybe<Array<QuoteParentCreateWithPositionInput>>;
  /** Delete multiple QuoteParent documents */
  delete?: InputMaybe<Array<QuoteParentWhereUniqueInput>>;
  /** Update multiple QuoteParent component instances */
  update?: InputMaybe<Array<QuoteParentUpdateWithNestedWhereUniqueAndPositionInput>>;
  /** Upsert multiple QuoteParent component instances */
  upsert?: InputMaybe<Array<QuoteParentUpsertWithNestedWhereUniqueAndPositionInput>>;
};

export type QuoteParentUpdateManyWithNestedWhereInput = {
  Content?: InputMaybe<ContentUpdateManyWithNestedWhereInput>;
};

export type QuoteParentUpdateOneInlineInput = {
  /** Create and connect one QuoteParent document */
  create?: InputMaybe<QuoteParentCreateInput>;
  /** Delete currently connected QuoteParent document */
  delete?: InputMaybe<Scalars['Boolean']['input']>;
  /** Update single QuoteParent document */
  update?: InputMaybe<QuoteParentUpdateWithNestedWhereUniqueInput>;
  /** Upsert single QuoteParent document */
  upsert?: InputMaybe<QuoteParentUpsertWithNestedWhereUniqueInput>;
};

export type QuoteParentUpdateWithNestedWhereUniqueAndPositionInput = {
  Content?: InputMaybe<ContentUpdateWithNestedWhereUniqueAndPositionInput>;
};

export type QuoteParentUpdateWithNestedWhereUniqueInput = {
  Content?: InputMaybe<ContentUpdateWithNestedWhereUniqueInput>;
};

export type QuoteParentUpsertWithNestedWhereUniqueAndPositionInput = {
  Content?: InputMaybe<ContentUpsertWithNestedWhereUniqueAndPositionInput>;
};

export type QuoteParentUpsertWithNestedWhereUniqueInput = {
  Content?: InputMaybe<ContentUpsertWithNestedWhereUniqueInput>;
};

export type QuoteParentWhereInput = {
  Content?: InputMaybe<ContentWhereInput>;
};

export type QuoteParentWhereUniqueInput = {
  Content?: InputMaybe<ContentWhereUniqueInput>;
};

export type QuoteUpdateInput = {
  image?: InputMaybe<AssetUpdateOneInlineInput>;
  inhoud?: InputMaybe<Scalars['String']['input']>;
  naam?: InputMaybe<Scalars['String']['input']>;
  titel?: InputMaybe<Scalars['String']['input']>;
};

export type QuoteUpdateManyInlineInput = {
  /** Create and connect multiple Quote component instances */
  create?: InputMaybe<Array<QuoteCreateWithPositionInput>>;
  /** Delete multiple Quote documents */
  delete?: InputMaybe<Array<QuoteWhereUniqueInput>>;
  /** Update multiple Quote component instances */
  update?: InputMaybe<Array<QuoteUpdateWithNestedWhereUniqueAndPositionInput>>;
  /** Upsert multiple Quote component instances */
  upsert?: InputMaybe<Array<QuoteUpsertWithNestedWhereUniqueAndPositionInput>>;
};

export type QuoteUpdateManyInput = {
  inhoud?: InputMaybe<Scalars['String']['input']>;
  naam?: InputMaybe<Scalars['String']['input']>;
  titel?: InputMaybe<Scalars['String']['input']>;
};

export type QuoteUpdateManyWithNestedWhereInput = {
  /** Update many input */
  data: QuoteUpdateManyInput;
  /** Document search */
  where: QuoteWhereInput;
};

export type QuoteUpdateOneInlineInput = {
  /** Create and connect one Quote document */
  create?: InputMaybe<QuoteCreateInput>;
  /** Delete currently connected Quote document */
  delete?: InputMaybe<Scalars['Boolean']['input']>;
  /** Update single Quote document */
  update?: InputMaybe<QuoteUpdateWithNestedWhereUniqueInput>;
  /** Upsert single Quote document */
  upsert?: InputMaybe<QuoteUpsertWithNestedWhereUniqueInput>;
};

export type QuoteUpdateWithNestedWhereUniqueAndPositionInput = {
  /** Document to update */
  data?: InputMaybe<QuoteUpdateInput>;
  /** Position in the list of existing component instances, will default to appending at the end of list */
  position?: InputMaybe<ConnectPositionInput>;
  /** Unique component instance search */
  where: QuoteWhereUniqueInput;
};

export type QuoteUpdateWithNestedWhereUniqueInput = {
  /** Document to update */
  data: QuoteUpdateInput;
  /** Unique document search */
  where: QuoteWhereUniqueInput;
};

export type QuoteUpsertInput = {
  /** Create document if it didn't exist */
  create: QuoteCreateInput;
  /** Update document if it exists */
  update: QuoteUpdateInput;
};

export type QuoteUpsertWithNestedWhereUniqueAndPositionInput = {
  /** Document to upsert */
  data?: InputMaybe<QuoteUpsertInput>;
  /** Position in the list of existing component instances, will default to appending at the end of list */
  position?: InputMaybe<ConnectPositionInput>;
  /** Unique component instance search */
  where: QuoteWhereUniqueInput;
};

export type QuoteUpsertWithNestedWhereUniqueInput = {
  /** Upsert data */
  data: QuoteUpsertInput;
  /** Unique document search */
  where: QuoteWhereUniqueInput;
};

/** Identifies documents */
export type QuoteWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<QuoteWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<QuoteWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<QuoteWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  id_not?: InputMaybe<Scalars['ID']['input']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']['input']>;
  image?: InputMaybe<AssetWhereInput>;
  inhoud?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  inhoud_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  inhoud_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  inhoud_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  inhoud_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  inhoud_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  inhoud_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  inhoud_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  inhoud_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  inhoud_starts_with?: InputMaybe<Scalars['String']['input']>;
  naam?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  naam_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  naam_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  naam_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  naam_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  naam_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  naam_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  naam_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  naam_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  naam_starts_with?: InputMaybe<Scalars['String']['input']>;
  titel?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  titel_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  titel_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  titel_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  titel_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  titel_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  titel_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  titel_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  titel_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  titel_starts_with?: InputMaybe<Scalars['String']['input']>;
};

/** References Quote record uniquely */
export type QuoteWhereUniqueInput = {
  id?: InputMaybe<Scalars['ID']['input']>;
};

/** Representing a RGBA color value: https://developer.mozilla.org/en-US/docs/Web/CSS/color_value#rgb()_and_rgba() */
export type Rgba = {
  __typename?: 'RGBA';
  a: Scalars['RGBATransparency']['output'];
  b: Scalars['RGBAHue']['output'];
  g: Scalars['RGBAHue']['output'];
  r: Scalars['RGBAHue']['output'];
};

/** Input type representing a RGBA color value: https://developer.mozilla.org/en-US/docs/Web/CSS/color_value#rgb()_and_rgba() */
export type RgbaInput = {
  a: Scalars['RGBATransparency']['input'];
  b: Scalars['RGBAHue']['input'];
  g: Scalars['RGBAHue']['input'];
  r: Scalars['RGBAHue']['input'];
};

/** Custom type representing a rich text value comprising of raw rich text ast, html, markdown and text values */
export type RichText = {
  __typename?: 'RichText';
  /** Returns HTMl representation */
  html: Scalars['String']['output'];
  /** Returns Markdown representation */
  markdown: Scalars['String']['output'];
  /** Returns AST representation */
  raw: Scalars['RichTextAST']['output'];
  /** Returns plain-text contents of RichText */
  text: Scalars['String']['output'];
};

export enum Rol {
  BestuursLid = 'BestuursLid',
  Bestuursvoorzitter = 'Bestuursvoorzitter',
  CommissieLid = 'CommissieLid',
  Penningmeester = 'Penningmeester',
  Secretaris = 'Secretaris'
}

/** Scheduled Operation system model */
export type ScheduledOperation = Entity & Node & {
  __typename?: 'ScheduledOperation';
  affectedDocuments: Array<ScheduledOperationAffectedDocument>;
  /** The time the document was created */
  createdAt: Scalars['DateTime']['output'];
  /** User that created this document */
  createdBy?: Maybe<User>;
  /** Operation description */
  description?: Maybe<Scalars['String']['output']>;
  /** Get the document in other stages */
  documentInStages: Array<ScheduledOperation>;
  /** Operation error message */
  errorMessage?: Maybe<Scalars['String']['output']>;
  /** The unique identifier */
  id: Scalars['ID']['output'];
  /** The time the document was published. Null on documents in draft stage. */
  publishedAt?: Maybe<Scalars['DateTime']['output']>;
  /** User that last published this document */
  publishedBy?: Maybe<User>;
  /** Raw operation payload including all details, this field is subject to change */
  rawPayload: Scalars['Json']['output'];
  /** The release this operation is scheduled for */
  release?: Maybe<ScheduledRelease>;
  /** System stage field */
  stage: Stage;
  /** operation Status */
  status: ScheduledOperationStatus;
  /** The time the document was updated */
  updatedAt: Scalars['DateTime']['output'];
  /** User that last updated this document */
  updatedBy?: Maybe<User>;
};


/** Scheduled Operation system model */
export type ScheduledOperationAffectedDocumentsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  locales?: InputMaybe<Array<Locale>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};


/** Scheduled Operation system model */
export type ScheduledOperationCreatedByArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>;
  locales?: InputMaybe<Array<Locale>>;
};


/** Scheduled Operation system model */
export type ScheduledOperationDocumentInStagesArgs = {
  includeCurrent?: Scalars['Boolean']['input'];
  inheritLocale?: Scalars['Boolean']['input'];
  stages?: Array<Stage>;
};


/** Scheduled Operation system model */
export type ScheduledOperationPublishedByArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>;
  locales?: InputMaybe<Array<Locale>>;
};


/** Scheduled Operation system model */
export type ScheduledOperationReleaseArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>;
  locales?: InputMaybe<Array<Locale>>;
};


/** Scheduled Operation system model */
export type ScheduledOperationUpdatedByArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>;
  locales?: InputMaybe<Array<Locale>>;
};

export type ScheduledOperationAffectedDocument = Asset | Bestuur | BlogPost | Moment | Pagina | Project | VraagAntwoord;

export type ScheduledOperationConnectInput = {
  /** Allow to specify document position in list of connected documents, will default to appending at end of list */
  position?: InputMaybe<ConnectPositionInput>;
  /** Document to connect */
  where: ScheduledOperationWhereUniqueInput;
};

/** A connection to a list of items. */
export type ScheduledOperationConnection = {
  __typename?: 'ScheduledOperationConnection';
  aggregate: Aggregate;
  /** A list of edges. */
  edges: Array<ScheduledOperationEdge>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

export type ScheduledOperationCreateManyInlineInput = {
  /** Connect multiple existing ScheduledOperation documents */
  connect?: InputMaybe<Array<ScheduledOperationWhereUniqueInput>>;
};

export type ScheduledOperationCreateOneInlineInput = {
  /** Connect one existing ScheduledOperation document */
  connect?: InputMaybe<ScheduledOperationWhereUniqueInput>;
};

/** An edge in a connection. */
export type ScheduledOperationEdge = {
  __typename?: 'ScheduledOperationEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge. */
  node: ScheduledOperation;
};

/** Identifies documents */
export type ScheduledOperationManyWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<ScheduledOperationWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<ScheduledOperationWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<ScheduledOperationWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  createdAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  createdBy?: InputMaybe<UserWhereInput>;
  description?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  description_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  description_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  description_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  description_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  description_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  description_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  description_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  description_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  description_starts_with?: InputMaybe<Scalars['String']['input']>;
  errorMessage?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  errorMessage_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  errorMessage_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  errorMessage_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  errorMessage_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  errorMessage_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  errorMessage_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  errorMessage_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  errorMessage_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  errorMessage_starts_with?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  id_not?: InputMaybe<Scalars['ID']['input']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']['input']>;
  publishedAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  publishedAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  publishedBy?: InputMaybe<UserWhereInput>;
  /** All values containing the given json path. */
  rawPayload_json_path_exists?: InputMaybe<Scalars['String']['input']>;
  /**
   * Recursively tries to find the provided JSON scalar value inside the field.
   * It does use an exact match when comparing values.
   * If you pass `null` as value the filter will be ignored.
   * Note: This filter fails if you try to look for a non scalar JSON value!
   */
  rawPayload_value_recursive?: InputMaybe<Scalars['Json']['input']>;
  release?: InputMaybe<ScheduledReleaseWhereInput>;
  status?: InputMaybe<ScheduledOperationStatus>;
  /** All values that are contained in given list. */
  status_in?: InputMaybe<Array<InputMaybe<ScheduledOperationStatus>>>;
  /** Any other value that exists and is not equal to the given value. */
  status_not?: InputMaybe<ScheduledOperationStatus>;
  /** All values that are not contained in given list. */
  status_not_in?: InputMaybe<Array<InputMaybe<ScheduledOperationStatus>>>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  updatedAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  updatedBy?: InputMaybe<UserWhereInput>;
};

export enum ScheduledOperationOrderByInput {
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  DescriptionAsc = 'description_ASC',
  DescriptionDesc = 'description_DESC',
  ErrorMessageAsc = 'errorMessage_ASC',
  ErrorMessageDesc = 'errorMessage_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  PublishedAtAsc = 'publishedAt_ASC',
  PublishedAtDesc = 'publishedAt_DESC',
  StatusAsc = 'status_ASC',
  StatusDesc = 'status_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC'
}

/** System Scheduled Operation Status */
export enum ScheduledOperationStatus {
  Canceled = 'CANCELED',
  Completed = 'COMPLETED',
  Failed = 'FAILED',
  InProgress = 'IN_PROGRESS',
  Pending = 'PENDING'
}

export type ScheduledOperationUpdateManyInlineInput = {
  /** Connect multiple existing ScheduledOperation documents */
  connect?: InputMaybe<Array<ScheduledOperationConnectInput>>;
  /** Disconnect multiple ScheduledOperation documents */
  disconnect?: InputMaybe<Array<ScheduledOperationWhereUniqueInput>>;
  /** Override currently-connected documents with multiple existing ScheduledOperation documents */
  set?: InputMaybe<Array<ScheduledOperationWhereUniqueInput>>;
};

export type ScheduledOperationUpdateOneInlineInput = {
  /** Connect existing ScheduledOperation document */
  connect?: InputMaybe<ScheduledOperationWhereUniqueInput>;
  /** Disconnect currently connected ScheduledOperation document */
  disconnect?: InputMaybe<Scalars['Boolean']['input']>;
};

/** Identifies documents */
export type ScheduledOperationWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<ScheduledOperationWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<ScheduledOperationWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<ScheduledOperationWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  createdAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  createdBy?: InputMaybe<UserWhereInput>;
  description?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  description_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  description_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  description_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  description_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  description_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  description_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  description_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  description_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  description_starts_with?: InputMaybe<Scalars['String']['input']>;
  errorMessage?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  errorMessage_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  errorMessage_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  errorMessage_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  errorMessage_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  errorMessage_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  errorMessage_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  errorMessage_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  errorMessage_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  errorMessage_starts_with?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  id_not?: InputMaybe<Scalars['ID']['input']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']['input']>;
  publishedAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  publishedAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  publishedBy?: InputMaybe<UserWhereInput>;
  /** All values containing the given json path. */
  rawPayload_json_path_exists?: InputMaybe<Scalars['String']['input']>;
  /**
   * Recursively tries to find the provided JSON scalar value inside the field.
   * It does use an exact match when comparing values.
   * If you pass `null` as value the filter will be ignored.
   * Note: This filter fails if you try to look for a non scalar JSON value!
   */
  rawPayload_value_recursive?: InputMaybe<Scalars['Json']['input']>;
  release?: InputMaybe<ScheduledReleaseWhereInput>;
  status?: InputMaybe<ScheduledOperationStatus>;
  /** All values that are contained in given list. */
  status_in?: InputMaybe<Array<InputMaybe<ScheduledOperationStatus>>>;
  /** Any other value that exists and is not equal to the given value. */
  status_not?: InputMaybe<ScheduledOperationStatus>;
  /** All values that are not contained in given list. */
  status_not_in?: InputMaybe<Array<InputMaybe<ScheduledOperationStatus>>>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  updatedAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  updatedBy?: InputMaybe<UserWhereInput>;
};

/** References ScheduledOperation record uniquely */
export type ScheduledOperationWhereUniqueInput = {
  id?: InputMaybe<Scalars['ID']['input']>;
};

/** Scheduled Release system model */
export type ScheduledRelease = Entity & Node & {
  __typename?: 'ScheduledRelease';
  /** The time the document was created */
  createdAt: Scalars['DateTime']['output'];
  /** User that created this document */
  createdBy?: Maybe<User>;
  /** Release description */
  description?: Maybe<Scalars['String']['output']>;
  /** Get the document in other stages */
  documentInStages: Array<ScheduledRelease>;
  /** Release error message */
  errorMessage?: Maybe<Scalars['String']['output']>;
  /** The unique identifier */
  id: Scalars['ID']['output'];
  /** Whether scheduled release should be run */
  isActive: Scalars['Boolean']['output'];
  /** Whether scheduled release is implicit */
  isImplicit: Scalars['Boolean']['output'];
  /** Operations to run with this release */
  operations: Array<ScheduledOperation>;
  /** The time the document was published. Null on documents in draft stage. */
  publishedAt?: Maybe<Scalars['DateTime']['output']>;
  /** User that last published this document */
  publishedBy?: Maybe<User>;
  /** Release date and time */
  releaseAt?: Maybe<Scalars['DateTime']['output']>;
  /** System stage field */
  stage: Stage;
  /** Release Status */
  status: ScheduledReleaseStatus;
  /** Release Title */
  title?: Maybe<Scalars['String']['output']>;
  /** The time the document was updated */
  updatedAt: Scalars['DateTime']['output'];
  /** User that last updated this document */
  updatedBy?: Maybe<User>;
};


/** Scheduled Release system model */
export type ScheduledReleaseCreatedByArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>;
  locales?: InputMaybe<Array<Locale>>;
};


/** Scheduled Release system model */
export type ScheduledReleaseDocumentInStagesArgs = {
  includeCurrent?: Scalars['Boolean']['input'];
  inheritLocale?: Scalars['Boolean']['input'];
  stages?: Array<Stage>;
};


/** Scheduled Release system model */
export type ScheduledReleaseOperationsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  locales?: InputMaybe<Array<Locale>>;
  orderBy?: InputMaybe<ScheduledOperationOrderByInput>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<ScheduledOperationWhereInput>;
};


/** Scheduled Release system model */
export type ScheduledReleasePublishedByArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>;
  locales?: InputMaybe<Array<Locale>>;
};


/** Scheduled Release system model */
export type ScheduledReleaseUpdatedByArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>;
  locales?: InputMaybe<Array<Locale>>;
};

export type ScheduledReleaseConnectInput = {
  /** Allow to specify document position in list of connected documents, will default to appending at end of list */
  position?: InputMaybe<ConnectPositionInput>;
  /** Document to connect */
  where: ScheduledReleaseWhereUniqueInput;
};

/** A connection to a list of items. */
export type ScheduledReleaseConnection = {
  __typename?: 'ScheduledReleaseConnection';
  aggregate: Aggregate;
  /** A list of edges. */
  edges: Array<ScheduledReleaseEdge>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

export type ScheduledReleaseCreateInput = {
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  errorMessage?: InputMaybe<Scalars['String']['input']>;
  isActive?: InputMaybe<Scalars['Boolean']['input']>;
  releaseAt?: InputMaybe<Scalars['DateTime']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
};

export type ScheduledReleaseCreateManyInlineInput = {
  /** Connect multiple existing ScheduledRelease documents */
  connect?: InputMaybe<Array<ScheduledReleaseWhereUniqueInput>>;
  /** Create and connect multiple existing ScheduledRelease documents */
  create?: InputMaybe<Array<ScheduledReleaseCreateInput>>;
};

export type ScheduledReleaseCreateOneInlineInput = {
  /** Connect one existing ScheduledRelease document */
  connect?: InputMaybe<ScheduledReleaseWhereUniqueInput>;
  /** Create and connect one ScheduledRelease document */
  create?: InputMaybe<ScheduledReleaseCreateInput>;
};

/** An edge in a connection. */
export type ScheduledReleaseEdge = {
  __typename?: 'ScheduledReleaseEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge. */
  node: ScheduledRelease;
};

/** Identifies documents */
export type ScheduledReleaseManyWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<ScheduledReleaseWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<ScheduledReleaseWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<ScheduledReleaseWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  createdAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  createdBy?: InputMaybe<UserWhereInput>;
  description?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  description_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  description_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  description_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  description_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  description_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  description_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  description_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  description_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  description_starts_with?: InputMaybe<Scalars['String']['input']>;
  errorMessage?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  errorMessage_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  errorMessage_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  errorMessage_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  errorMessage_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  errorMessage_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  errorMessage_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  errorMessage_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  errorMessage_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  errorMessage_starts_with?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  id_not?: InputMaybe<Scalars['ID']['input']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']['input']>;
  isActive?: InputMaybe<Scalars['Boolean']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  isActive_not?: InputMaybe<Scalars['Boolean']['input']>;
  isImplicit?: InputMaybe<Scalars['Boolean']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  isImplicit_not?: InputMaybe<Scalars['Boolean']['input']>;
  operations_every?: InputMaybe<ScheduledOperationWhereInput>;
  operations_none?: InputMaybe<ScheduledOperationWhereInput>;
  operations_some?: InputMaybe<ScheduledOperationWhereInput>;
  publishedAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  publishedAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  publishedBy?: InputMaybe<UserWhereInput>;
  releaseAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  releaseAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  releaseAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  releaseAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  releaseAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  releaseAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  releaseAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  releaseAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  status?: InputMaybe<ScheduledReleaseStatus>;
  /** All values that are contained in given list. */
  status_in?: InputMaybe<Array<InputMaybe<ScheduledReleaseStatus>>>;
  /** Any other value that exists and is not equal to the given value. */
  status_not?: InputMaybe<ScheduledReleaseStatus>;
  /** All values that are not contained in given list. */
  status_not_in?: InputMaybe<Array<InputMaybe<ScheduledReleaseStatus>>>;
  title?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  title_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  title_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  title_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  title_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  title_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  title_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  title_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  title_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  title_starts_with?: InputMaybe<Scalars['String']['input']>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  updatedAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  updatedBy?: InputMaybe<UserWhereInput>;
};

export enum ScheduledReleaseOrderByInput {
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  DescriptionAsc = 'description_ASC',
  DescriptionDesc = 'description_DESC',
  ErrorMessageAsc = 'errorMessage_ASC',
  ErrorMessageDesc = 'errorMessage_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  IsActiveAsc = 'isActive_ASC',
  IsActiveDesc = 'isActive_DESC',
  IsImplicitAsc = 'isImplicit_ASC',
  IsImplicitDesc = 'isImplicit_DESC',
  PublishedAtAsc = 'publishedAt_ASC',
  PublishedAtDesc = 'publishedAt_DESC',
  ReleaseAtAsc = 'releaseAt_ASC',
  ReleaseAtDesc = 'releaseAt_DESC',
  StatusAsc = 'status_ASC',
  StatusDesc = 'status_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC'
}

/** System Scheduled Release Status */
export enum ScheduledReleaseStatus {
  Completed = 'COMPLETED',
  Failed = 'FAILED',
  InProgress = 'IN_PROGRESS',
  Pending = 'PENDING'
}

export type ScheduledReleaseUpdateInput = {
  description?: InputMaybe<Scalars['String']['input']>;
  errorMessage?: InputMaybe<Scalars['String']['input']>;
  isActive?: InputMaybe<Scalars['Boolean']['input']>;
  releaseAt?: InputMaybe<Scalars['DateTime']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
};

export type ScheduledReleaseUpdateManyInlineInput = {
  /** Connect multiple existing ScheduledRelease documents */
  connect?: InputMaybe<Array<ScheduledReleaseConnectInput>>;
  /** Create and connect multiple ScheduledRelease documents */
  create?: InputMaybe<Array<ScheduledReleaseCreateInput>>;
  /** Delete multiple ScheduledRelease documents */
  delete?: InputMaybe<Array<ScheduledReleaseWhereUniqueInput>>;
  /** Disconnect multiple ScheduledRelease documents */
  disconnect?: InputMaybe<Array<ScheduledReleaseWhereUniqueInput>>;
  /** Override currently-connected documents with multiple existing ScheduledRelease documents */
  set?: InputMaybe<Array<ScheduledReleaseWhereUniqueInput>>;
  /** Update multiple ScheduledRelease documents */
  update?: InputMaybe<Array<ScheduledReleaseUpdateWithNestedWhereUniqueInput>>;
  /** Upsert multiple ScheduledRelease documents */
  upsert?: InputMaybe<Array<ScheduledReleaseUpsertWithNestedWhereUniqueInput>>;
};

export type ScheduledReleaseUpdateManyInput = {
  description?: InputMaybe<Scalars['String']['input']>;
  errorMessage?: InputMaybe<Scalars['String']['input']>;
  isActive?: InputMaybe<Scalars['Boolean']['input']>;
  releaseAt?: InputMaybe<Scalars['DateTime']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
};

export type ScheduledReleaseUpdateManyWithNestedWhereInput = {
  /** Update many input */
  data: ScheduledReleaseUpdateManyInput;
  /** Document search */
  where: ScheduledReleaseWhereInput;
};

export type ScheduledReleaseUpdateOneInlineInput = {
  /** Connect existing ScheduledRelease document */
  connect?: InputMaybe<ScheduledReleaseWhereUniqueInput>;
  /** Create and connect one ScheduledRelease document */
  create?: InputMaybe<ScheduledReleaseCreateInput>;
  /** Delete currently connected ScheduledRelease document */
  delete?: InputMaybe<Scalars['Boolean']['input']>;
  /** Disconnect currently connected ScheduledRelease document */
  disconnect?: InputMaybe<Scalars['Boolean']['input']>;
  /** Update single ScheduledRelease document */
  update?: InputMaybe<ScheduledReleaseUpdateWithNestedWhereUniqueInput>;
  /** Upsert single ScheduledRelease document */
  upsert?: InputMaybe<ScheduledReleaseUpsertWithNestedWhereUniqueInput>;
};

export type ScheduledReleaseUpdateWithNestedWhereUniqueInput = {
  /** Document to update */
  data: ScheduledReleaseUpdateInput;
  /** Unique document search */
  where: ScheduledReleaseWhereUniqueInput;
};

export type ScheduledReleaseUpsertInput = {
  /** Create document if it didn't exist */
  create: ScheduledReleaseCreateInput;
  /** Update document if it exists */
  update: ScheduledReleaseUpdateInput;
};

export type ScheduledReleaseUpsertWithNestedWhereUniqueInput = {
  /** Upsert data */
  data: ScheduledReleaseUpsertInput;
  /** Unique document search */
  where: ScheduledReleaseWhereUniqueInput;
};

/** Identifies documents */
export type ScheduledReleaseWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<ScheduledReleaseWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<ScheduledReleaseWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<ScheduledReleaseWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  createdAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  createdBy?: InputMaybe<UserWhereInput>;
  description?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  description_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  description_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  description_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  description_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  description_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  description_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  description_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  description_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  description_starts_with?: InputMaybe<Scalars['String']['input']>;
  errorMessage?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  errorMessage_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  errorMessage_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  errorMessage_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  errorMessage_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  errorMessage_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  errorMessage_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  errorMessage_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  errorMessage_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  errorMessage_starts_with?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  id_not?: InputMaybe<Scalars['ID']['input']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']['input']>;
  isActive?: InputMaybe<Scalars['Boolean']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  isActive_not?: InputMaybe<Scalars['Boolean']['input']>;
  isImplicit?: InputMaybe<Scalars['Boolean']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  isImplicit_not?: InputMaybe<Scalars['Boolean']['input']>;
  operations_every?: InputMaybe<ScheduledOperationWhereInput>;
  operations_none?: InputMaybe<ScheduledOperationWhereInput>;
  operations_some?: InputMaybe<ScheduledOperationWhereInput>;
  publishedAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  publishedAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  publishedBy?: InputMaybe<UserWhereInput>;
  releaseAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  releaseAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  releaseAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  releaseAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  releaseAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  releaseAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  releaseAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  releaseAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  status?: InputMaybe<ScheduledReleaseStatus>;
  /** All values that are contained in given list. */
  status_in?: InputMaybe<Array<InputMaybe<ScheduledReleaseStatus>>>;
  /** Any other value that exists and is not equal to the given value. */
  status_not?: InputMaybe<ScheduledReleaseStatus>;
  /** All values that are not contained in given list. */
  status_not_in?: InputMaybe<Array<InputMaybe<ScheduledReleaseStatus>>>;
  title?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  title_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  title_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  title_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  title_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  title_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  title_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  title_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  title_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  title_starts_with?: InputMaybe<Scalars['String']['input']>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  updatedAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  updatedBy?: InputMaybe<UserWhereInput>;
};

/** References ScheduledRelease record uniquely */
export type ScheduledReleaseWhereUniqueInput = {
  id?: InputMaybe<Scalars['ID']['input']>;
};

/** Stage system enumeration */
export enum Stage {
  /** The Draft is the default stage for all your content. */
  Draft = 'DRAFT',
  /** The Published stage is where you can publish your content to. */
  Published = 'PUBLISHED'
}

export enum SystemDateTimeFieldVariation {
  Base = 'BASE',
  Combined = 'COMBINED',
  Localization = 'LOCALIZATION'
}

export type TekstMetAfbeelding = Entity & {
  __typename?: 'TekstMetAfbeelding';
  afbeelding?: Maybe<Asset>;
  /** The unique identifier */
  id: Scalars['ID']['output'];
  inhoud?: Maybe<RichText>;
  orientatieAfbeelding?: Maybe<Orientatie>;
  /** System stage field */
  stage: Stage;
  titel?: Maybe<Scalars['String']['output']>;
};


export type TekstMetAfbeeldingAfbeeldingArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>;
  locales?: InputMaybe<Array<Locale>>;
  where?: InputMaybe<AssetSingleRelationWhereInput>;
};

export type TekstMetAfbeeldingConnectInput = {
  /** Allow to specify document position in list of connected documents, will default to appending at end of list */
  position?: InputMaybe<ConnectPositionInput>;
  /** Document to connect */
  where: TekstMetAfbeeldingWhereUniqueInput;
};

/** A connection to a list of items. */
export type TekstMetAfbeeldingConnection = {
  __typename?: 'TekstMetAfbeeldingConnection';
  aggregate: Aggregate;
  /** A list of edges. */
  edges: Array<TekstMetAfbeeldingEdge>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

export type TekstMetAfbeeldingCreateInput = {
  afbeelding?: InputMaybe<AssetCreateOneInlineInput>;
  inhoud?: InputMaybe<Scalars['RichTextAST']['input']>;
  orientatieAfbeelding?: InputMaybe<Orientatie>;
  titel?: InputMaybe<Scalars['String']['input']>;
};

export type TekstMetAfbeeldingCreateManyInlineInput = {
  /** Create and connect multiple existing TekstMetAfbeelding documents */
  create?: InputMaybe<Array<TekstMetAfbeeldingCreateInput>>;
};

export type TekstMetAfbeeldingCreateOneInlineInput = {
  /** Create and connect one TekstMetAfbeelding document */
  create?: InputMaybe<TekstMetAfbeeldingCreateInput>;
};

export type TekstMetAfbeeldingCreateWithPositionInput = {
  /** Document to create */
  data: TekstMetAfbeeldingCreateInput;
  /** Position in the list of existing component instances, will default to appending at the end of list */
  position?: InputMaybe<ConnectPositionInput>;
};

/** An edge in a connection. */
export type TekstMetAfbeeldingEdge = {
  __typename?: 'TekstMetAfbeeldingEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge. */
  node: TekstMetAfbeelding;
};

/** Identifies documents */
export type TekstMetAfbeeldingManyWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<TekstMetAfbeeldingWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<TekstMetAfbeeldingWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<TekstMetAfbeeldingWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']['input']>;
  afbeelding?: InputMaybe<AssetWhereInput>;
  id?: InputMaybe<Scalars['ID']['input']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  id_not?: InputMaybe<Scalars['ID']['input']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']['input']>;
  orientatieAfbeelding?: InputMaybe<Orientatie>;
  /** All values that are contained in given list. */
  orientatieAfbeelding_in?: InputMaybe<Array<InputMaybe<Orientatie>>>;
  /** Any other value that exists and is not equal to the given value. */
  orientatieAfbeelding_not?: InputMaybe<Orientatie>;
  /** All values that are not contained in given list. */
  orientatieAfbeelding_not_in?: InputMaybe<Array<InputMaybe<Orientatie>>>;
  titel?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  titel_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  titel_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  titel_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  titel_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  titel_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  titel_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  titel_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  titel_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  titel_starts_with?: InputMaybe<Scalars['String']['input']>;
};

export enum TekstMetAfbeeldingOrderByInput {
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  OrientatieAfbeeldingAsc = 'orientatieAfbeelding_ASC',
  OrientatieAfbeeldingDesc = 'orientatieAfbeelding_DESC',
  TitelAsc = 'titel_ASC',
  TitelDesc = 'titel_DESC'
}

export type TekstMetAfbeeldingParent = Project;

export type TekstMetAfbeeldingParentConnectInput = {
  Project?: InputMaybe<ProjectConnectInput>;
};

export type TekstMetAfbeeldingParentCreateInput = {
  Project?: InputMaybe<ProjectCreateInput>;
};

export type TekstMetAfbeeldingParentCreateManyInlineInput = {
  /** Connect multiple existing TekstMetAfbeeldingParent documents */
  connect?: InputMaybe<Array<TekstMetAfbeeldingParentWhereUniqueInput>>;
  /** Create and connect multiple existing TekstMetAfbeeldingParent documents */
  create?: InputMaybe<Array<TekstMetAfbeeldingParentCreateInput>>;
};

export type TekstMetAfbeeldingParentCreateOneInlineInput = {
  /** Connect one existing TekstMetAfbeeldingParent document */
  connect?: InputMaybe<TekstMetAfbeeldingParentWhereUniqueInput>;
  /** Create and connect one TekstMetAfbeeldingParent document */
  create?: InputMaybe<TekstMetAfbeeldingParentCreateInput>;
};

export type TekstMetAfbeeldingParentUpdateInput = {
  Project?: InputMaybe<ProjectUpdateInput>;
};

export type TekstMetAfbeeldingParentUpdateManyInlineInput = {
  /** Connect multiple existing TekstMetAfbeeldingParent documents */
  connect?: InputMaybe<Array<TekstMetAfbeeldingParentConnectInput>>;
  /** Create and connect multiple TekstMetAfbeeldingParent documents */
  create?: InputMaybe<Array<TekstMetAfbeeldingParentCreateInput>>;
  /** Delete multiple TekstMetAfbeeldingParent documents */
  delete?: InputMaybe<Array<TekstMetAfbeeldingParentWhereUniqueInput>>;
  /** Disconnect multiple TekstMetAfbeeldingParent documents */
  disconnect?: InputMaybe<Array<TekstMetAfbeeldingParentWhereUniqueInput>>;
  /** Override currently-connected documents with multiple existing TekstMetAfbeeldingParent documents */
  set?: InputMaybe<Array<TekstMetAfbeeldingParentWhereUniqueInput>>;
  /** Update multiple TekstMetAfbeeldingParent documents */
  update?: InputMaybe<Array<TekstMetAfbeeldingParentUpdateWithNestedWhereUniqueInput>>;
  /** Upsert multiple TekstMetAfbeeldingParent documents */
  upsert?: InputMaybe<Array<TekstMetAfbeeldingParentUpsertWithNestedWhereUniqueInput>>;
};

export type TekstMetAfbeeldingParentUpdateManyWithNestedWhereInput = {
  Project?: InputMaybe<ProjectUpdateManyWithNestedWhereInput>;
};

export type TekstMetAfbeeldingParentUpdateOneInlineInput = {
  /** Connect existing TekstMetAfbeeldingParent document */
  connect?: InputMaybe<TekstMetAfbeeldingParentWhereUniqueInput>;
  /** Create and connect one TekstMetAfbeeldingParent document */
  create?: InputMaybe<TekstMetAfbeeldingParentCreateInput>;
  /** Delete currently connected TekstMetAfbeeldingParent document */
  delete?: InputMaybe<Scalars['Boolean']['input']>;
  /** Disconnect currently connected TekstMetAfbeeldingParent document */
  disconnect?: InputMaybe<Scalars['Boolean']['input']>;
  /** Update single TekstMetAfbeeldingParent document */
  update?: InputMaybe<TekstMetAfbeeldingParentUpdateWithNestedWhereUniqueInput>;
  /** Upsert single TekstMetAfbeeldingParent document */
  upsert?: InputMaybe<TekstMetAfbeeldingParentUpsertWithNestedWhereUniqueInput>;
};

export type TekstMetAfbeeldingParentUpdateWithNestedWhereUniqueInput = {
  Project?: InputMaybe<ProjectUpdateWithNestedWhereUniqueInput>;
};

export type TekstMetAfbeeldingParentUpsertWithNestedWhereUniqueInput = {
  Project?: InputMaybe<ProjectUpsertWithNestedWhereUniqueInput>;
};

export type TekstMetAfbeeldingParentWhereInput = {
  Project?: InputMaybe<ProjectWhereInput>;
};

export type TekstMetAfbeeldingParentWhereUniqueInput = {
  Project?: InputMaybe<ProjectWhereUniqueInput>;
};

export type TekstMetAfbeeldingUpdateInput = {
  afbeelding?: InputMaybe<AssetUpdateOneInlineInput>;
  inhoud?: InputMaybe<Scalars['RichTextAST']['input']>;
  orientatieAfbeelding?: InputMaybe<Orientatie>;
  titel?: InputMaybe<Scalars['String']['input']>;
};

export type TekstMetAfbeeldingUpdateManyInlineInput = {
  /** Create and connect multiple TekstMetAfbeelding component instances */
  create?: InputMaybe<Array<TekstMetAfbeeldingCreateWithPositionInput>>;
  /** Delete multiple TekstMetAfbeelding documents */
  delete?: InputMaybe<Array<TekstMetAfbeeldingWhereUniqueInput>>;
  /** Update multiple TekstMetAfbeelding component instances */
  update?: InputMaybe<Array<TekstMetAfbeeldingUpdateWithNestedWhereUniqueAndPositionInput>>;
  /** Upsert multiple TekstMetAfbeelding component instances */
  upsert?: InputMaybe<Array<TekstMetAfbeeldingUpsertWithNestedWhereUniqueAndPositionInput>>;
};

export type TekstMetAfbeeldingUpdateManyInput = {
  inhoud?: InputMaybe<Scalars['RichTextAST']['input']>;
  orientatieAfbeelding?: InputMaybe<Orientatie>;
  titel?: InputMaybe<Scalars['String']['input']>;
};

export type TekstMetAfbeeldingUpdateManyWithNestedWhereInput = {
  /** Update many input */
  data: TekstMetAfbeeldingUpdateManyInput;
  /** Document search */
  where: TekstMetAfbeeldingWhereInput;
};

export type TekstMetAfbeeldingUpdateOneInlineInput = {
  /** Create and connect one TekstMetAfbeelding document */
  create?: InputMaybe<TekstMetAfbeeldingCreateInput>;
  /** Delete currently connected TekstMetAfbeelding document */
  delete?: InputMaybe<Scalars['Boolean']['input']>;
  /** Update single TekstMetAfbeelding document */
  update?: InputMaybe<TekstMetAfbeeldingUpdateWithNestedWhereUniqueInput>;
  /** Upsert single TekstMetAfbeelding document */
  upsert?: InputMaybe<TekstMetAfbeeldingUpsertWithNestedWhereUniqueInput>;
};

export type TekstMetAfbeeldingUpdateWithNestedWhereUniqueAndPositionInput = {
  /** Document to update */
  data?: InputMaybe<TekstMetAfbeeldingUpdateInput>;
  /** Position in the list of existing component instances, will default to appending at the end of list */
  position?: InputMaybe<ConnectPositionInput>;
  /** Unique component instance search */
  where: TekstMetAfbeeldingWhereUniqueInput;
};

export type TekstMetAfbeeldingUpdateWithNestedWhereUniqueInput = {
  /** Document to update */
  data: TekstMetAfbeeldingUpdateInput;
  /** Unique document search */
  where: TekstMetAfbeeldingWhereUniqueInput;
};

export type TekstMetAfbeeldingUpsertInput = {
  /** Create document if it didn't exist */
  create: TekstMetAfbeeldingCreateInput;
  /** Update document if it exists */
  update: TekstMetAfbeeldingUpdateInput;
};

export type TekstMetAfbeeldingUpsertWithNestedWhereUniqueAndPositionInput = {
  /** Document to upsert */
  data?: InputMaybe<TekstMetAfbeeldingUpsertInput>;
  /** Position in the list of existing component instances, will default to appending at the end of list */
  position?: InputMaybe<ConnectPositionInput>;
  /** Unique component instance search */
  where: TekstMetAfbeeldingWhereUniqueInput;
};

export type TekstMetAfbeeldingUpsertWithNestedWhereUniqueInput = {
  /** Upsert data */
  data: TekstMetAfbeeldingUpsertInput;
  /** Unique document search */
  where: TekstMetAfbeeldingWhereUniqueInput;
};

/** Identifies documents */
export type TekstMetAfbeeldingWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<TekstMetAfbeeldingWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<TekstMetAfbeeldingWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<TekstMetAfbeeldingWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']['input']>;
  afbeelding?: InputMaybe<AssetWhereInput>;
  id?: InputMaybe<Scalars['ID']['input']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  id_not?: InputMaybe<Scalars['ID']['input']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']['input']>;
  orientatieAfbeelding?: InputMaybe<Orientatie>;
  /** All values that are contained in given list. */
  orientatieAfbeelding_in?: InputMaybe<Array<InputMaybe<Orientatie>>>;
  /** Any other value that exists and is not equal to the given value. */
  orientatieAfbeelding_not?: InputMaybe<Orientatie>;
  /** All values that are not contained in given list. */
  orientatieAfbeelding_not_in?: InputMaybe<Array<InputMaybe<Orientatie>>>;
  titel?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  titel_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  titel_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  titel_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  titel_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  titel_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  titel_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  titel_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  titel_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  titel_starts_with?: InputMaybe<Scalars['String']['input']>;
};

/** References TekstMetAfbeelding record uniquely */
export type TekstMetAfbeeldingWhereUniqueInput = {
  id?: InputMaybe<Scalars['ID']['input']>;
};

export type Timeline = Entity & {
  __typename?: 'Timeline';
  beschijving?: Maybe<Scalars['String']['output']>;
  /** The unique identifier */
  id: Scalars['ID']['output'];
  moments: Array<TimelineMoments>;
  /** System stage field */
  stage: Stage;
  tijdslijnTitel?: Maybe<Scalars['String']['output']>;
};


export type TimelineMomentsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  locales?: InputMaybe<Array<Locale>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};

export type TimelineConnectInput = {
  /** Allow to specify document position in list of connected documents, will default to appending at end of list */
  position?: InputMaybe<ConnectPositionInput>;
  /** Document to connect */
  where: TimelineWhereUniqueInput;
};

/** A connection to a list of items. */
export type TimelineConnection = {
  __typename?: 'TimelineConnection';
  aggregate: Aggregate;
  /** A list of edges. */
  edges: Array<TimelineEdge>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

export type TimelineCreateInput = {
  beschijving?: InputMaybe<Scalars['String']['input']>;
  moments?: InputMaybe<TimelineMomentsCreateManyInlineInput>;
  tijdslijnTitel?: InputMaybe<Scalars['String']['input']>;
};

export type TimelineCreateManyInlineInput = {
  /** Create and connect multiple existing Timeline documents */
  create?: InputMaybe<Array<TimelineCreateInput>>;
};

export type TimelineCreateOneInlineInput = {
  /** Create and connect one Timeline document */
  create?: InputMaybe<TimelineCreateInput>;
};

export type TimelineCreateWithPositionInput = {
  /** Document to create */
  data: TimelineCreateInput;
  /** Position in the list of existing component instances, will default to appending at the end of list */
  position?: InputMaybe<ConnectPositionInput>;
};

/** An edge in a connection. */
export type TimelineEdge = {
  __typename?: 'TimelineEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge. */
  node: Timeline;
};

/** Identifies documents */
export type TimelineManyWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<TimelineWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<TimelineWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<TimelineWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']['input']>;
  beschijving?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  beschijving_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  beschijving_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  beschijving_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  beschijving_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  beschijving_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  beschijving_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  beschijving_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  beschijving_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  beschijving_starts_with?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  id_not?: InputMaybe<Scalars['ID']['input']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values in which the union is empty */
  moments_empty?: InputMaybe<Scalars['Boolean']['input']>;
  /** Matches if the union contains at least one connection to the provided item to the filter */
  moments_some?: InputMaybe<TimelineMomentsWhereInput>;
  tijdslijnTitel?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  tijdslijnTitel_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  tijdslijnTitel_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  tijdslijnTitel_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  tijdslijnTitel_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  tijdslijnTitel_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  tijdslijnTitel_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  tijdslijnTitel_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  tijdslijnTitel_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  tijdslijnTitel_starts_with?: InputMaybe<Scalars['String']['input']>;
};

export type TimelineMoments = Moment;

export type TimelineMomentsConnectInput = {
  Moment?: InputMaybe<MomentConnectInput>;
};

export type TimelineMomentsCreateInput = {
  Moment?: InputMaybe<MomentCreateInput>;
};

export type TimelineMomentsCreateManyInlineInput = {
  /** Connect multiple existing TimelineMoments documents */
  connect?: InputMaybe<Array<TimelineMomentsWhereUniqueInput>>;
  /** Create and connect multiple existing TimelineMoments documents */
  create?: InputMaybe<Array<TimelineMomentsCreateInput>>;
};

export type TimelineMomentsCreateOneInlineInput = {
  /** Connect one existing TimelineMoments document */
  connect?: InputMaybe<TimelineMomentsWhereUniqueInput>;
  /** Create and connect one TimelineMoments document */
  create?: InputMaybe<TimelineMomentsCreateInput>;
};

export type TimelineMomentsUpdateInput = {
  Moment?: InputMaybe<MomentUpdateInput>;
};

export type TimelineMomentsUpdateManyInlineInput = {
  /** Connect multiple existing TimelineMoments documents */
  connect?: InputMaybe<Array<TimelineMomentsConnectInput>>;
  /** Create and connect multiple TimelineMoments documents */
  create?: InputMaybe<Array<TimelineMomentsCreateInput>>;
  /** Delete multiple TimelineMoments documents */
  delete?: InputMaybe<Array<TimelineMomentsWhereUniqueInput>>;
  /** Disconnect multiple TimelineMoments documents */
  disconnect?: InputMaybe<Array<TimelineMomentsWhereUniqueInput>>;
  /** Override currently-connected documents with multiple existing TimelineMoments documents */
  set?: InputMaybe<Array<TimelineMomentsWhereUniqueInput>>;
  /** Update multiple TimelineMoments documents */
  update?: InputMaybe<Array<TimelineMomentsUpdateWithNestedWhereUniqueInput>>;
  /** Upsert multiple TimelineMoments documents */
  upsert?: InputMaybe<Array<TimelineMomentsUpsertWithNestedWhereUniqueInput>>;
};

export type TimelineMomentsUpdateManyWithNestedWhereInput = {
  Moment?: InputMaybe<MomentUpdateManyWithNestedWhereInput>;
};

export type TimelineMomentsUpdateOneInlineInput = {
  /** Connect existing TimelineMoments document */
  connect?: InputMaybe<TimelineMomentsWhereUniqueInput>;
  /** Create and connect one TimelineMoments document */
  create?: InputMaybe<TimelineMomentsCreateInput>;
  /** Delete currently connected TimelineMoments document */
  delete?: InputMaybe<Scalars['Boolean']['input']>;
  /** Disconnect currently connected TimelineMoments document */
  disconnect?: InputMaybe<Scalars['Boolean']['input']>;
  /** Update single TimelineMoments document */
  update?: InputMaybe<TimelineMomentsUpdateWithNestedWhereUniqueInput>;
  /** Upsert single TimelineMoments document */
  upsert?: InputMaybe<TimelineMomentsUpsertWithNestedWhereUniqueInput>;
};

export type TimelineMomentsUpdateWithNestedWhereUniqueInput = {
  Moment?: InputMaybe<MomentUpdateWithNestedWhereUniqueInput>;
};

export type TimelineMomentsUpsertWithNestedWhereUniqueInput = {
  Moment?: InputMaybe<MomentUpsertWithNestedWhereUniqueInput>;
};

export type TimelineMomentsWhereInput = {
  Moment?: InputMaybe<MomentWhereInput>;
};

export type TimelineMomentsWhereUniqueInput = {
  Moment?: InputMaybe<MomentWhereUniqueInput>;
};

export enum TimelineOrderByInput {
  BeschijvingAsc = 'beschijving_ASC',
  BeschijvingDesc = 'beschijving_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  TijdslijnTitelAsc = 'tijdslijnTitel_ASC',
  TijdslijnTitelDesc = 'tijdslijnTitel_DESC'
}

export type TimelineParent = Pagina | Project;

export type TimelineParentConnectInput = {
  Pagina?: InputMaybe<PaginaConnectInput>;
  Project?: InputMaybe<ProjectConnectInput>;
};

export type TimelineParentCreateInput = {
  Pagina?: InputMaybe<PaginaCreateInput>;
  Project?: InputMaybe<ProjectCreateInput>;
};

export type TimelineParentCreateManyInlineInput = {
  /** Connect multiple existing TimelineParent documents */
  connect?: InputMaybe<Array<TimelineParentWhereUniqueInput>>;
  /** Create and connect multiple existing TimelineParent documents */
  create?: InputMaybe<Array<TimelineParentCreateInput>>;
};

export type TimelineParentCreateOneInlineInput = {
  /** Connect one existing TimelineParent document */
  connect?: InputMaybe<TimelineParentWhereUniqueInput>;
  /** Create and connect one TimelineParent document */
  create?: InputMaybe<TimelineParentCreateInput>;
};

export type TimelineParentUpdateInput = {
  Pagina?: InputMaybe<PaginaUpdateInput>;
  Project?: InputMaybe<ProjectUpdateInput>;
};

export type TimelineParentUpdateManyInlineInput = {
  /** Connect multiple existing TimelineParent documents */
  connect?: InputMaybe<Array<TimelineParentConnectInput>>;
  /** Create and connect multiple TimelineParent documents */
  create?: InputMaybe<Array<TimelineParentCreateInput>>;
  /** Delete multiple TimelineParent documents */
  delete?: InputMaybe<Array<TimelineParentWhereUniqueInput>>;
  /** Disconnect multiple TimelineParent documents */
  disconnect?: InputMaybe<Array<TimelineParentWhereUniqueInput>>;
  /** Override currently-connected documents with multiple existing TimelineParent documents */
  set?: InputMaybe<Array<TimelineParentWhereUniqueInput>>;
  /** Update multiple TimelineParent documents */
  update?: InputMaybe<Array<TimelineParentUpdateWithNestedWhereUniqueInput>>;
  /** Upsert multiple TimelineParent documents */
  upsert?: InputMaybe<Array<TimelineParentUpsertWithNestedWhereUniqueInput>>;
};

export type TimelineParentUpdateManyWithNestedWhereInput = {
  Pagina?: InputMaybe<PaginaUpdateManyWithNestedWhereInput>;
  Project?: InputMaybe<ProjectUpdateManyWithNestedWhereInput>;
};

export type TimelineParentUpdateOneInlineInput = {
  /** Connect existing TimelineParent document */
  connect?: InputMaybe<TimelineParentWhereUniqueInput>;
  /** Create and connect one TimelineParent document */
  create?: InputMaybe<TimelineParentCreateInput>;
  /** Delete currently connected TimelineParent document */
  delete?: InputMaybe<Scalars['Boolean']['input']>;
  /** Disconnect currently connected TimelineParent document */
  disconnect?: InputMaybe<Scalars['Boolean']['input']>;
  /** Update single TimelineParent document */
  update?: InputMaybe<TimelineParentUpdateWithNestedWhereUniqueInput>;
  /** Upsert single TimelineParent document */
  upsert?: InputMaybe<TimelineParentUpsertWithNestedWhereUniqueInput>;
};

export type TimelineParentUpdateWithNestedWhereUniqueInput = {
  Pagina?: InputMaybe<PaginaUpdateWithNestedWhereUniqueInput>;
  Project?: InputMaybe<ProjectUpdateWithNestedWhereUniqueInput>;
};

export type TimelineParentUpsertWithNestedWhereUniqueInput = {
  Pagina?: InputMaybe<PaginaUpsertWithNestedWhereUniqueInput>;
  Project?: InputMaybe<ProjectUpsertWithNestedWhereUniqueInput>;
};

export type TimelineParentWhereInput = {
  Pagina?: InputMaybe<PaginaWhereInput>;
  Project?: InputMaybe<ProjectWhereInput>;
};

export type TimelineParentWhereUniqueInput = {
  Pagina?: InputMaybe<PaginaWhereUniqueInput>;
  Project?: InputMaybe<ProjectWhereUniqueInput>;
};

export type TimelineUpdateInput = {
  beschijving?: InputMaybe<Scalars['String']['input']>;
  moments?: InputMaybe<TimelineMomentsUpdateManyInlineInput>;
  tijdslijnTitel?: InputMaybe<Scalars['String']['input']>;
};

export type TimelineUpdateManyInlineInput = {
  /** Create and connect multiple Timeline component instances */
  create?: InputMaybe<Array<TimelineCreateWithPositionInput>>;
  /** Delete multiple Timeline documents */
  delete?: InputMaybe<Array<TimelineWhereUniqueInput>>;
  /** Update multiple Timeline component instances */
  update?: InputMaybe<Array<TimelineUpdateWithNestedWhereUniqueAndPositionInput>>;
  /** Upsert multiple Timeline component instances */
  upsert?: InputMaybe<Array<TimelineUpsertWithNestedWhereUniqueAndPositionInput>>;
};

export type TimelineUpdateManyInput = {
  beschijving?: InputMaybe<Scalars['String']['input']>;
  tijdslijnTitel?: InputMaybe<Scalars['String']['input']>;
};

export type TimelineUpdateManyWithNestedWhereInput = {
  /** Update many input */
  data: TimelineUpdateManyInput;
  /** Document search */
  where: TimelineWhereInput;
};

export type TimelineUpdateOneInlineInput = {
  /** Create and connect one Timeline document */
  create?: InputMaybe<TimelineCreateInput>;
  /** Delete currently connected Timeline document */
  delete?: InputMaybe<Scalars['Boolean']['input']>;
  /** Update single Timeline document */
  update?: InputMaybe<TimelineUpdateWithNestedWhereUniqueInput>;
  /** Upsert single Timeline document */
  upsert?: InputMaybe<TimelineUpsertWithNestedWhereUniqueInput>;
};

export type TimelineUpdateWithNestedWhereUniqueAndPositionInput = {
  /** Document to update */
  data?: InputMaybe<TimelineUpdateInput>;
  /** Position in the list of existing component instances, will default to appending at the end of list */
  position?: InputMaybe<ConnectPositionInput>;
  /** Unique component instance search */
  where: TimelineWhereUniqueInput;
};

export type TimelineUpdateWithNestedWhereUniqueInput = {
  /** Document to update */
  data: TimelineUpdateInput;
  /** Unique document search */
  where: TimelineWhereUniqueInput;
};

export type TimelineUpsertInput = {
  /** Create document if it didn't exist */
  create: TimelineCreateInput;
  /** Update document if it exists */
  update: TimelineUpdateInput;
};

export type TimelineUpsertWithNestedWhereUniqueAndPositionInput = {
  /** Document to upsert */
  data?: InputMaybe<TimelineUpsertInput>;
  /** Position in the list of existing component instances, will default to appending at the end of list */
  position?: InputMaybe<ConnectPositionInput>;
  /** Unique component instance search */
  where: TimelineWhereUniqueInput;
};

export type TimelineUpsertWithNestedWhereUniqueInput = {
  /** Upsert data */
  data: TimelineUpsertInput;
  /** Unique document search */
  where: TimelineWhereUniqueInput;
};

/** Identifies documents */
export type TimelineWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<TimelineWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<TimelineWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<TimelineWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']['input']>;
  beschijving?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  beschijving_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  beschijving_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  beschijving_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  beschijving_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  beschijving_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  beschijving_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  beschijving_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  beschijving_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  beschijving_starts_with?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  id_not?: InputMaybe<Scalars['ID']['input']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values in which the union is empty */
  moments_empty?: InputMaybe<Scalars['Boolean']['input']>;
  /** Matches if the union contains at least one connection to the provided item to the filter */
  moments_some?: InputMaybe<TimelineMomentsWhereInput>;
  tijdslijnTitel?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  tijdslijnTitel_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  tijdslijnTitel_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  tijdslijnTitel_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  tijdslijnTitel_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  tijdslijnTitel_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  tijdslijnTitel_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  tijdslijnTitel_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  tijdslijnTitel_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  tijdslijnTitel_starts_with?: InputMaybe<Scalars['String']['input']>;
};

/** References Timeline record uniquely */
export type TimelineWhereUniqueInput = {
  id?: InputMaybe<Scalars['ID']['input']>;
};

export type UnpublishLocaleInput = {
  /** Locales to unpublish */
  locale: Locale;
  /** Stages to unpublish selected locales from */
  stages: Array<Stage>;
};

/** User system model */
export type User = Entity & Node & {
  __typename?: 'User';
  /** The time the document was created */
  createdAt: Scalars['DateTime']['output'];
  /** Get the document in other stages */
  documentInStages: Array<User>;
  /** The unique identifier */
  id: Scalars['ID']['output'];
  /** Flag to determine if user is active or not */
  isActive: Scalars['Boolean']['output'];
  /** User Kind. Can be either MEMBER, PAT or PUBLIC */
  kind: UserKind;
  /** The username */
  name: Scalars['String']['output'];
  /** Profile Picture url */
  picture?: Maybe<Scalars['String']['output']>;
  /** The time the document was published. Null on documents in draft stage. */
  publishedAt?: Maybe<Scalars['DateTime']['output']>;
  /** System stage field */
  stage: Stage;
  /** The time the document was updated */
  updatedAt: Scalars['DateTime']['output'];
};


/** User system model */
export type UserDocumentInStagesArgs = {
  includeCurrent?: Scalars['Boolean']['input'];
  inheritLocale?: Scalars['Boolean']['input'];
  stages?: Array<Stage>;
};

export type UserConnectInput = {
  /** Allow to specify document position in list of connected documents, will default to appending at end of list */
  position?: InputMaybe<ConnectPositionInput>;
  /** Document to connect */
  where: UserWhereUniqueInput;
};

/** A connection to a list of items. */
export type UserConnection = {
  __typename?: 'UserConnection';
  aggregate: Aggregate;
  /** A list of edges. */
  edges: Array<UserEdge>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

export type UserCreateManyInlineInput = {
  /** Connect multiple existing User documents */
  connect?: InputMaybe<Array<UserWhereUniqueInput>>;
};

export type UserCreateOneInlineInput = {
  /** Connect one existing User document */
  connect?: InputMaybe<UserWhereUniqueInput>;
};

/** An edge in a connection. */
export type UserEdge = {
  __typename?: 'UserEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge. */
  node: User;
};

/** System User Kind */
export enum UserKind {
  AppToken = 'APP_TOKEN',
  Member = 'MEMBER',
  Pat = 'PAT',
  Public = 'PUBLIC',
  Webhook = 'WEBHOOK'
}

/** Identifies documents */
export type UserManyWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<UserWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<UserWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<UserWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  createdAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  documentInStages_every?: InputMaybe<UserWhereStageInput>;
  documentInStages_none?: InputMaybe<UserWhereStageInput>;
  documentInStages_some?: InputMaybe<UserWhereStageInput>;
  id?: InputMaybe<Scalars['ID']['input']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  id_not?: InputMaybe<Scalars['ID']['input']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']['input']>;
  isActive?: InputMaybe<Scalars['Boolean']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  isActive_not?: InputMaybe<Scalars['Boolean']['input']>;
  kind?: InputMaybe<UserKind>;
  /** All values that are contained in given list. */
  kind_in?: InputMaybe<Array<InputMaybe<UserKind>>>;
  /** Any other value that exists and is not equal to the given value. */
  kind_not?: InputMaybe<UserKind>;
  /** All values that are not contained in given list. */
  kind_not_in?: InputMaybe<Array<InputMaybe<UserKind>>>;
  name?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  name_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  name_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  name_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  name_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  name_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  name_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  name_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  name_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  name_starts_with?: InputMaybe<Scalars['String']['input']>;
  picture?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  picture_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  picture_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  picture_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  picture_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  picture_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  picture_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  picture_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  picture_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  picture_starts_with?: InputMaybe<Scalars['String']['input']>;
  publishedAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  publishedAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  updatedAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
};

export enum UserOrderByInput {
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  IsActiveAsc = 'isActive_ASC',
  IsActiveDesc = 'isActive_DESC',
  KindAsc = 'kind_ASC',
  KindDesc = 'kind_DESC',
  NameAsc = 'name_ASC',
  NameDesc = 'name_DESC',
  PictureAsc = 'picture_ASC',
  PictureDesc = 'picture_DESC',
  PublishedAtAsc = 'publishedAt_ASC',
  PublishedAtDesc = 'publishedAt_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC'
}

export type UserUpdateManyInlineInput = {
  /** Connect multiple existing User documents */
  connect?: InputMaybe<Array<UserConnectInput>>;
  /** Disconnect multiple User documents */
  disconnect?: InputMaybe<Array<UserWhereUniqueInput>>;
  /** Override currently-connected documents with multiple existing User documents */
  set?: InputMaybe<Array<UserWhereUniqueInput>>;
};

export type UserUpdateOneInlineInput = {
  /** Connect existing User document */
  connect?: InputMaybe<UserWhereUniqueInput>;
  /** Disconnect currently connected User document */
  disconnect?: InputMaybe<Scalars['Boolean']['input']>;
};

/** This contains a set of filters that can be used to compare values internally */
export type UserWhereComparatorInput = {
  /** This field can be used to request to check if the entry is outdated by internal comparison */
  outdated_to?: InputMaybe<Scalars['Boolean']['input']>;
};

/** Identifies documents */
export type UserWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<UserWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<UserWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<UserWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  createdAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  documentInStages_every?: InputMaybe<UserWhereStageInput>;
  documentInStages_none?: InputMaybe<UserWhereStageInput>;
  documentInStages_some?: InputMaybe<UserWhereStageInput>;
  id?: InputMaybe<Scalars['ID']['input']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  id_not?: InputMaybe<Scalars['ID']['input']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']['input']>;
  isActive?: InputMaybe<Scalars['Boolean']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  isActive_not?: InputMaybe<Scalars['Boolean']['input']>;
  kind?: InputMaybe<UserKind>;
  /** All values that are contained in given list. */
  kind_in?: InputMaybe<Array<InputMaybe<UserKind>>>;
  /** Any other value that exists and is not equal to the given value. */
  kind_not?: InputMaybe<UserKind>;
  /** All values that are not contained in given list. */
  kind_not_in?: InputMaybe<Array<InputMaybe<UserKind>>>;
  name?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  name_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  name_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  name_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  name_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  name_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  name_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  name_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  name_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  name_starts_with?: InputMaybe<Scalars['String']['input']>;
  picture?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  picture_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  picture_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  picture_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  picture_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  picture_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  picture_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  picture_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  picture_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  picture_starts_with?: InputMaybe<Scalars['String']['input']>;
  publishedAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  publishedAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  updatedAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
};

/** The document in stages filter allows specifying a stage entry to cross compare the same document between different stages */
export type UserWhereStageInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<UserWhereStageInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<UserWhereStageInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<UserWhereStageInput>>;
  /** This field contains fields which can be set as true or false to specify an internal comparison */
  compareWithParent?: InputMaybe<UserWhereComparatorInput>;
  /** Specify the stage to compare with */
  stage?: InputMaybe<Stage>;
};

/** References User record uniquely */
export type UserWhereUniqueInput = {
  id?: InputMaybe<Scalars['ID']['input']>;
};

export type Version = {
  __typename?: 'Version';
  createdAt: Scalars['DateTime']['output'];
  id: Scalars['ID']['output'];
  revision: Scalars['Int']['output'];
  stage: Stage;
};

export type VersionWhereInput = {
  id: Scalars['ID']['input'];
  revision: Scalars['Int']['input'];
  stage: Stage;
};

export type VraagAntwoord = Entity & Node & {
  __typename?: 'VraagAntwoord';
  antwoord?: Maybe<RichText>;
  /** The time the document was created */
  createdAt: Scalars['DateTime']['output'];
  /** User that created this document */
  createdBy?: Maybe<User>;
  /** Get the document in other stages */
  documentInStages: Array<VraagAntwoord>;
  /** List of VraagAntwoord versions */
  history: Array<Version>;
  /** The unique identifier */
  id: Scalars['ID']['output'];
  /** The time the document was published. Null on documents in draft stage. */
  publishedAt?: Maybe<Scalars['DateTime']['output']>;
  /** User that last published this document */
  publishedBy?: Maybe<User>;
  scheduledIn: Array<ScheduledOperation>;
  /** System stage field */
  stage: Stage;
  /** The time the document was updated */
  updatedAt: Scalars['DateTime']['output'];
  /** User that last updated this document */
  updatedBy?: Maybe<User>;
  vraag?: Maybe<Scalars['String']['output']>;
};


export type VraagAntwoordCreatedByArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>;
  locales?: InputMaybe<Array<Locale>>;
};


export type VraagAntwoordDocumentInStagesArgs = {
  includeCurrent?: Scalars['Boolean']['input'];
  inheritLocale?: Scalars['Boolean']['input'];
  stages?: Array<Stage>;
};


export type VraagAntwoordHistoryArgs = {
  limit?: Scalars['Int']['input'];
  skip?: Scalars['Int']['input'];
  stageOverride?: InputMaybe<Stage>;
};


export type VraagAntwoordPublishedByArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>;
  locales?: InputMaybe<Array<Locale>>;
};


export type VraagAntwoordScheduledInArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  locales?: InputMaybe<Array<Locale>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<ScheduledOperationWhereInput>;
};


export type VraagAntwoordUpdatedByArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>;
  locales?: InputMaybe<Array<Locale>>;
};

export type VraagAntwoordConnectInput = {
  /** Allow to specify document position in list of connected documents, will default to appending at end of list */
  position?: InputMaybe<ConnectPositionInput>;
  /** Document to connect */
  where: VraagAntwoordWhereUniqueInput;
};

/** A connection to a list of items. */
export type VraagAntwoordConnection = {
  __typename?: 'VraagAntwoordConnection';
  aggregate: Aggregate;
  /** A list of edges. */
  edges: Array<VraagAntwoordEdge>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

export type VraagAntwoordCreateInput = {
  antwoord?: InputMaybe<Scalars['RichTextAST']['input']>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  vraag?: InputMaybe<Scalars['String']['input']>;
};

export type VraagAntwoordCreateManyInlineInput = {
  /** Connect multiple existing VraagAntwoord documents */
  connect?: InputMaybe<Array<VraagAntwoordWhereUniqueInput>>;
  /** Create and connect multiple existing VraagAntwoord documents */
  create?: InputMaybe<Array<VraagAntwoordCreateInput>>;
};

export type VraagAntwoordCreateOneInlineInput = {
  /** Connect one existing VraagAntwoord document */
  connect?: InputMaybe<VraagAntwoordWhereUniqueInput>;
  /** Create and connect one VraagAntwoord document */
  create?: InputMaybe<VraagAntwoordCreateInput>;
};

/** An edge in a connection. */
export type VraagAntwoordEdge = {
  __typename?: 'VraagAntwoordEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge. */
  node: VraagAntwoord;
};

/** Identifies documents */
export type VraagAntwoordManyWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<VraagAntwoordWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<VraagAntwoordWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<VraagAntwoordWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  createdAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  createdBy?: InputMaybe<UserWhereInput>;
  documentInStages_every?: InputMaybe<VraagAntwoordWhereStageInput>;
  documentInStages_none?: InputMaybe<VraagAntwoordWhereStageInput>;
  documentInStages_some?: InputMaybe<VraagAntwoordWhereStageInput>;
  id?: InputMaybe<Scalars['ID']['input']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  id_not?: InputMaybe<Scalars['ID']['input']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']['input']>;
  publishedAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  publishedAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  publishedBy?: InputMaybe<UserWhereInput>;
  scheduledIn_every?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_none?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_some?: InputMaybe<ScheduledOperationWhereInput>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  updatedAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  updatedBy?: InputMaybe<UserWhereInput>;
  vraag?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  vraag_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  vraag_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  vraag_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  vraag_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  vraag_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  vraag_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  vraag_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  vraag_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  vraag_starts_with?: InputMaybe<Scalars['String']['input']>;
};

export enum VraagAntwoordOrderByInput {
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  PublishedAtAsc = 'publishedAt_ASC',
  PublishedAtDesc = 'publishedAt_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC',
  VraagAsc = 'vraag_ASC',
  VraagDesc = 'vraag_DESC'
}

export type VraagAntwoordUpdateInput = {
  antwoord?: InputMaybe<Scalars['RichTextAST']['input']>;
  vraag?: InputMaybe<Scalars['String']['input']>;
};

export type VraagAntwoordUpdateManyInlineInput = {
  /** Connect multiple existing VraagAntwoord documents */
  connect?: InputMaybe<Array<VraagAntwoordConnectInput>>;
  /** Create and connect multiple VraagAntwoord documents */
  create?: InputMaybe<Array<VraagAntwoordCreateInput>>;
  /** Delete multiple VraagAntwoord documents */
  delete?: InputMaybe<Array<VraagAntwoordWhereUniqueInput>>;
  /** Disconnect multiple VraagAntwoord documents */
  disconnect?: InputMaybe<Array<VraagAntwoordWhereUniqueInput>>;
  /** Override currently-connected documents with multiple existing VraagAntwoord documents */
  set?: InputMaybe<Array<VraagAntwoordWhereUniqueInput>>;
  /** Update multiple VraagAntwoord documents */
  update?: InputMaybe<Array<VraagAntwoordUpdateWithNestedWhereUniqueInput>>;
  /** Upsert multiple VraagAntwoord documents */
  upsert?: InputMaybe<Array<VraagAntwoordUpsertWithNestedWhereUniqueInput>>;
};

export type VraagAntwoordUpdateManyInput = {
  antwoord?: InputMaybe<Scalars['RichTextAST']['input']>;
  vraag?: InputMaybe<Scalars['String']['input']>;
};

export type VraagAntwoordUpdateManyWithNestedWhereInput = {
  /** Update many input */
  data: VraagAntwoordUpdateManyInput;
  /** Document search */
  where: VraagAntwoordWhereInput;
};

export type VraagAntwoordUpdateOneInlineInput = {
  /** Connect existing VraagAntwoord document */
  connect?: InputMaybe<VraagAntwoordWhereUniqueInput>;
  /** Create and connect one VraagAntwoord document */
  create?: InputMaybe<VraagAntwoordCreateInput>;
  /** Delete currently connected VraagAntwoord document */
  delete?: InputMaybe<Scalars['Boolean']['input']>;
  /** Disconnect currently connected VraagAntwoord document */
  disconnect?: InputMaybe<Scalars['Boolean']['input']>;
  /** Update single VraagAntwoord document */
  update?: InputMaybe<VraagAntwoordUpdateWithNestedWhereUniqueInput>;
  /** Upsert single VraagAntwoord document */
  upsert?: InputMaybe<VraagAntwoordUpsertWithNestedWhereUniqueInput>;
};

export type VraagAntwoordUpdateWithNestedWhereUniqueInput = {
  /** Document to update */
  data: VraagAntwoordUpdateInput;
  /** Unique document search */
  where: VraagAntwoordWhereUniqueInput;
};

export type VraagAntwoordUpsertInput = {
  /** Create document if it didn't exist */
  create: VraagAntwoordCreateInput;
  /** Update document if it exists */
  update: VraagAntwoordUpdateInput;
};

export type VraagAntwoordUpsertWithNestedWhereUniqueInput = {
  /** Upsert data */
  data: VraagAntwoordUpsertInput;
  /** Unique document search */
  where: VraagAntwoordWhereUniqueInput;
};

/** This contains a set of filters that can be used to compare values internally */
export type VraagAntwoordWhereComparatorInput = {
  /** This field can be used to request to check if the entry is outdated by internal comparison */
  outdated_to?: InputMaybe<Scalars['Boolean']['input']>;
};

/** Identifies documents */
export type VraagAntwoordWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<VraagAntwoordWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<VraagAntwoordWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<VraagAntwoordWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  createdAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  createdBy?: InputMaybe<UserWhereInput>;
  documentInStages_every?: InputMaybe<VraagAntwoordWhereStageInput>;
  documentInStages_none?: InputMaybe<VraagAntwoordWhereStageInput>;
  documentInStages_some?: InputMaybe<VraagAntwoordWhereStageInput>;
  id?: InputMaybe<Scalars['ID']['input']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  id_not?: InputMaybe<Scalars['ID']['input']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']['input']>;
  publishedAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  publishedAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  publishedBy?: InputMaybe<UserWhereInput>;
  scheduledIn_every?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_none?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_some?: InputMaybe<ScheduledOperationWhereInput>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  updatedAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  updatedBy?: InputMaybe<UserWhereInput>;
  vraag?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  vraag_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  vraag_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  vraag_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  vraag_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  vraag_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  vraag_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  vraag_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  vraag_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  vraag_starts_with?: InputMaybe<Scalars['String']['input']>;
};

/** The document in stages filter allows specifying a stage entry to cross compare the same document between different stages */
export type VraagAntwoordWhereStageInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<VraagAntwoordWhereStageInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<VraagAntwoordWhereStageInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<VraagAntwoordWhereStageInput>>;
  /** This field contains fields which can be set as true or false to specify an internal comparison */
  compareWithParent?: InputMaybe<VraagAntwoordWhereComparatorInput>;
  /** Specify the stage to compare with */
  stage?: InputMaybe<Stage>;
};

/** References VraagAntwoord record uniquely */
export type VraagAntwoordWhereUniqueInput = {
  id?: InputMaybe<Scalars['ID']['input']>;
};

export enum _FilterKind {
  And = 'AND',
  Not = 'NOT',
  Or = 'OR',
  Contains = 'contains',
  ContainsAll = 'contains_all',
  ContainsNone = 'contains_none',
  ContainsSome = 'contains_some',
  EndsWith = 'ends_with',
  Eq = 'eq',
  EqNot = 'eq_not',
  Gt = 'gt',
  Gte = 'gte',
  In = 'in',
  JsonPathExists = 'json_path_exists',
  JsonValueRecursive = 'json_value_recursive',
  Lt = 'lt',
  Lte = 'lte',
  NotContains = 'not_contains',
  NotEndsWith = 'not_ends_with',
  NotIn = 'not_in',
  NotStartsWith = 'not_starts_with',
  RelationalEvery = 'relational_every',
  RelationalNone = 'relational_none',
  RelationalSingle = 'relational_single',
  RelationalSome = 'relational_some',
  Search = 'search',
  StartsWith = 'starts_with',
  UnionEmpty = 'union_empty',
  UnionEvery = 'union_every',
  UnionNone = 'union_none',
  UnionSingle = 'union_single',
  UnionSome = 'union_some'
}

export enum _MutationInputFieldKind {
  Enum = 'enum',
  Relation = 'relation',
  RichText = 'richText',
  RichTextWithEmbeds = 'richTextWithEmbeds',
  Scalar = 'scalar',
  Union = 'union',
  Virtual = 'virtual'
}

export enum _MutationKind {
  Create = 'create',
  Delete = 'delete',
  DeleteMany = 'deleteMany',
  Publish = 'publish',
  PublishMany = 'publishMany',
  SchedulePublish = 'schedulePublish',
  ScheduleUnpublish = 'scheduleUnpublish',
  Unpublish = 'unpublish',
  UnpublishMany = 'unpublishMany',
  Update = 'update',
  UpdateMany = 'updateMany',
  Upsert = 'upsert'
}

export enum _OrderDirection {
  Asc = 'asc',
  Desc = 'desc'
}

export enum _RelationInputCardinality {
  Many = 'many',
  One = 'one'
}

export enum _RelationInputKind {
  Create = 'create',
  Update = 'update'
}

export enum _RelationKind {
  Regular = 'regular',
  Union = 'union'
}

export enum _SystemDateTimeFieldVariation {
  Base = 'base',
  Combined = 'combined',
  Localization = 'localization'
}
