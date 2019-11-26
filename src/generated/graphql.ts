/* tslint:disable */
import gql from 'graphql-tag'
import { GraphQLClient, KikstartGraphQLClientConfig } from 'kikstart-graphql-client'
export type Maybe<T> = T | null

/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string
  String: string
  Boolean: boolean
  Int: number
  Float: number
  JSON: any
}

export type MessagePayload = {
  __typename?: 'MessagePayload'
  type: Scalars['String']
  scope?: Maybe<Scalars['String']>
  payload?: Maybe<Scalars['JSON']>
}

export type Mutation = {
  __typename?: 'Mutation'
  publish?: Maybe<MessagePayload>
}

export type MutationPublishArgs = {
  message?: Maybe<PublishInput>
}

export type PublishInput = {
  type: Scalars['String']
  scope?: Maybe<Scalars['String']>
  payload?: Maybe<Scalars['JSON']>
}

export type Query = {
  __typename?: 'Query'
  uptime?: Maybe<Scalars['Float']>
}

export type SubscribeInput = {
  type?: Maybe<Scalars['String']>
  scope?: Maybe<Scalars['String']>
}

export type Subscription = {
  __typename?: 'Subscription'
  intercom?: Maybe<MessagePayload>
}

export type SubscriptionIntercomArgs = {
  filter?: Maybe<SubscribeInput>
}

export type IntercomSubscriptionVariables = {
  filter?: Maybe<SubscribeInput>
}

export type IntercomSubscription = { __typename?: 'Subscription' } & {
  intercom: Maybe<{ __typename?: 'MessagePayload' } & Pick<MessagePayload, 'type' | 'scope' | 'payload'>>
}

export type PublishMutationVariables = {
  message?: Maybe<PublishInput>
}

export type PublishMutation = { __typename?: 'Mutation' } & {
  publish: Maybe<{ __typename?: 'MessagePayload' } & Pick<MessagePayload, 'type' | 'scope' | 'payload'>>
}

export type UptimeQueryVariables = {}

export type UptimeQuery = { __typename?: 'Query' } & Pick<Query, 'uptime'>

export const IntercomDocument = gql`
  subscription Intercom($filter: SubscribeInput) {
    intercom(filter: $filter) {
      type
      scope
      payload
    }
  }
`
export const PublishDocument = gql`
  mutation Publish($message: PublishInput) {
    publish(message: $message) {
      type
      scope
      payload
    }
  }
`
export const UptimeDocument = gql`
  query Uptime {
    uptime
  }
`
export class GraphQLClientSDK {
  client: GraphQLClient
  constructor(config: KikstartGraphQLClientConfig) {
    this.client = new GraphQLClient(config)
  }
  intercom(variables?: IntercomSubscriptionVariables) {
    return this.client.runSubscription(IntercomDocument, variables)
  }

  async publish(variables?: PublishMutationVariables) {
    const { data, errors } = await this.client.runMutation(PublishDocument, variables)
    if (errors) {
      throw errors
    }
    return data && data.publish
  }

  async uptime(variables?: UptimeQueryVariables) {
    const { data, errors } = await this.client.runQuery(UptimeDocument, variables)
    if (errors) {
      throw errors
    }
    return data.uptime
  }
}
