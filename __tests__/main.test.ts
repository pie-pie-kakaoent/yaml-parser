import {flattenFromYamlFile} from '../src/flatten'
import {expect, test} from '@jest/globals'

test('test', async () => {
  const flattenObject = await flattenFromYamlFile('test.yaml')
  expect(flattenObject.workloadIdentityProvider).toEqual('woooo')
  expect(flattenObject.cloudrun_env_vars_0).toEqual('foo=bar')
  expect(flattenObject.object_key1).toEqual('value')
  expect(flattenObject.object_key2_0).toEqual('a')
  expect(flattenObject.object_key2_1).toEqual(2)
})
