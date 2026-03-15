import { describe, it, expect, vi, beforeEach } from 'vitest';
import * as core from '@actions/core';

// Mock @actions/core
vi.mock('@actions/core', () => ({
  getInput: vi.fn(),
  setOutput: vi.fn(),
  setFailed: vi.fn(),
  info: vi.fn(),
  debug: vi.fn(),
  warning: vi.fn(),
  error: vi.fn(),
}));

// Mock @actions/github
vi.mock('@actions/github', () => ({
  context: {
    repo: { owner: 'test-owner', repo: 'test-repo' },
    eventName: 'push',
  },
}));

describe('{{ cookiecutter.action_name }}', () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it('should process input correctly', async () => {
    vi.mocked(core.getInput).mockReturnValue('test-value');

    // Import and run the main module
    await import('./main');

    expect(core.getInput).toHaveBeenCalledWith('example-input');
  });

  it('should handle errors gracefully', async () => {
    vi.mocked(core.getInput).mockImplementation(() => {
      throw new Error('Test error');
    });

    // The action should call setFailed on error
    await import('./main');

    expect(core.setFailed).toHaveBeenCalled();
  });
});
