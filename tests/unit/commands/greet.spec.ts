import { test } from '@japa/runner'
import Greet from '#commands/greet'
import ace from '@adonisjs/core/services/ace'

test.group('Commands greet', () => {
  test('should greet the user and finish with exit code 1', async () => {
    /**
     * Create an instance of the Greet command class
     */
    const command = await ace.create(Greet, [])

    /**
     * Execute command
     */
    await command.exec()

    /**
     * Assert command exited with status code 0
     */
    command.assertSucceeded()
  })
})
