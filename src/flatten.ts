import * as yaml from 'js-yaml'
import {flatten} from 'flat'
import {readFile} from 'fs/promises'

export async function flattenFromYamlFile(
  filename: string
): Promise<{[key: string]: unknown}> {
  const rawData: string = await readFile(filename, 'utf8')
  const yamlObject = yaml.load(rawData)
  return flatten(yamlObject, {delimiter: '_'})
}
