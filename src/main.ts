import * as core from '@actions/core'
import {flattenFromYamlFile} from './flatten'

async function run(): Promise<void> {
  try {
    const filename: string = core.getInput('filename', {required: true})
    const flattenObject = await flattenFromYamlFile(filename)
    Object.entries(flattenObject).forEach(([key, value]) =>
      core.setOutput(key, value)
    )
  } catch (error) {
    if (error instanceof Error) core.setFailed(error.message)
  }
}
run()
