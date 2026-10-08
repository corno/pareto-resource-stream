import assert from 'node:assert/strict'
import test from 'node:test'
import { createRequire } from 'node:module'

import { $ as resource } from '../typescript/lib/dist/index.js'

const require = createRequire(new URL('../typescript/lib/package.json', import.meta.url))
const { literal } = require('pareto-core/transformer')
const { pg, ph, sentence } = require('pareto-fountain-pen/modules/paragraph/schemas/paragraph/shorthands/deprecated')
const value = pg.sentences([
    sentence([ph.text('first')]),
    sentence([ph.indent(pg.sentences([sentence([ph.text('nested')])]))]),
    sentence([]),
])
const run = (command, paragraph, indentation, newline) => new Promise((resolve, reject) =>
    command.execute({ paragraph, indentation, newline }, (error) => error).__start(resolve, reject)
)

for (const [key, stream] of [
    ['log paragraph', process.stdout],
    ['log error paragraph', process.stderr],
]) {
    test(key + ' writes paragraphs directly with custom indentation', async (t) => {
        const chunks = []
        t.mock.method(stream, 'write', (chunk) => { chunks.push(chunk); return true })
        await run(resource.commands[key], value, '--', '\n')
        assert.deepEqual(chunks, ['first', '\n', '--', 'nested', '\n', '\n'])
    })
    test(key + ' writes nothing for empty paragraphs', async (t) => {
        const chunks = []
        t.mock.method(stream, 'write', (chunk) => { chunks.push(chunk); return true })
        await run(resource.commands[key], ['composed', literal.list([])], '    ', '\r\n')
        assert.deepEqual(chunks, [])
    })
    test(key + ' honors explicit newline settings', async (t) => {
        const chunks = []
        t.mock.method(stream, 'write', (chunk) => { chunks.push(chunk); return true })
        for (const newline of ['\r\n', '']) {
            chunks.length = 0
            await run(resource.commands[key], value, '\t', newline)
            assert.deepEqual(chunks, ['first', newline, '\t', 'nested', newline, newline])
        }
    })
}

test('raw and single-string commands remain available', () => {
    assert.ok(resource.commands['log error line'])
    assert.ok(resource.commands['write to stdout'])
    assert.ok(resource.commands['write to stderr'])
    assert.equal(resource.commands['log lines'], undefined)
    assert.equal(resource.commands['log error lines'], undefined)
})
