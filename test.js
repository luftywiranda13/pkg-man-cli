'use strict';

const execa = require('execa');

describe('CLI', () => {
  test('foo', async () => {
    const log = await execa('./cli.js', ['fixtures/foo']);
    expect(log.stdout).toBe('npm');
  });

  test('bar', async () => {
    const log = await execa('./cli.js', ['fixtures/bar']);
    expect(log.stdout).toBe('yarn');
  });

  test('default', async () => {
    const log = await execa('./cli.js', ['fixtures', '-d', 'yarn']);
    expect(log.stdout).toBe('yarn');
  });
});
