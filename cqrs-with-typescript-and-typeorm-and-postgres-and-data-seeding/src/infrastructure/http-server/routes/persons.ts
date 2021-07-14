import { RouteHandler } from '../../../index';

import * as AppPersonsCommands from '../../../commands/application/persons'
import { Person } from '../../../commands/entity/person.entity'

const personsCommandFactory = new AppPersonsCommands.PersonsCommandFactory()

export const route: RouteHandler = {
    httpMethod: 'post',
    path: '/persons',
    handler: async (ctx) => {

        const person: Person = ctx.request.body as unknown as Person;
        const commandName = 'POSTCommand'

        const commandConfig = {
            commandName,
            args: person
        }

        const command = personsCommandFactory.makeCommand(commandConfig);
        const results = await command.execute();
        const statusCode = results.status ? 200 : 500;

        ctx.status = statusCode;
    }
}
