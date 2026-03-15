import * as core from '@actions/core';
import * as github from '@actions/github';

async function run(): Promise<void> {
  try {
    // Get inputs
    const exampleInput = core.getInput('example-input');
    core.info(`Received input: ${exampleInput}`);

    // Log context information
    const context = github.context;
    core.info(`Running in repository: ${context.repo.owner}/${context.repo.repo}`);
    core.info(`Event: ${context.eventName}`);

    // Your action logic goes here
    const result = await doSomething(exampleInput);

    // Set outputs
    core.setOutput('example-output', result);

    core.info('{{ cookiecutter.action_name }} completed successfully!');
  } catch (error) {
    if (error instanceof Error) {
      core.setFailed(error.message);
    } else {
      core.setFailed('An unexpected error occurred');
    }
  }
}

async function doSomething(input: string): Promise<string> {
  // Implement your action logic here
  return `Processed: ${input}`;
}

run();
