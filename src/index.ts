import { GraphQLClientSDK, PublishInput, SubscribeInput } from './generated'
import { KikstartGraphQLClientConfig } from 'kikstart-graphql-client'

const uri = process.env.GRAPHQL_INTERCOM_URL || 'http://localhost:4567'
const wsUri = process.env.GRAPHQL_INTERCOM_WSURL || 'ws://localhost:4567'

const log = (dir: string, { scope, type, payload }: any) =>
  console.log(`${dir} [${scope}] ${type}: ${JSON.stringify(payload)}`)

export function getSdk(options: KikstartGraphQLClientConfig) {
  return new GraphQLClientSDK(options)
}

export function intercomSubscribe(sdk: GraphQLClientSDK, { scope, type }: SubscribeInput) {
  return sdk.intercom({ filter: { scope, type } })
}

export function intercomPublish(sdk: GraphQLClientSDK, message: PublishInput) {
  return sdk.publish({ message })
}

export enum IntercomScopes {
  TEST = 'TEST',
}

export enum IntercomTypes {
  PING = 'PING',
}

async function main() {
  const sdk = getSdk({ uri, wsUri, log: console })
  const ping = (interval: number, payload?: any) =>
    new Promise((resolve) => {
      setTimeout(async () => {
        const message = {
          scope: IntercomScopes.TEST,
          type: IntercomTypes.PING,
          payload: payload || new Date().toISOString(),
        }
        log('  =>  ', message)
        await intercomPublish(sdk, message)
        resolve()
      }, interval * 1000)
    })

  intercomSubscribe(sdk, { scope: IntercomScopes.TEST }).subscribe((res) => {
    log('  <=  ', res.data.intercom)
  })

  const pings = []

  for (let i = 1; i <= 4; i++) {
    pings.push(ping(i))
  }

  await Promise.all(pings)

  sdk.client.disconnect()
}

main()
