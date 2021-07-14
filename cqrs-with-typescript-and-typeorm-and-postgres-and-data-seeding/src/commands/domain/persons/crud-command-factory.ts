import { CommandConfig } from '../../common/command-config';
import { CommandFactory } from '../../common/command-factory';

import { CreatePerson } from './'

export class CRUDCommandFactory implements CommandFactory {
    makeCommand = (config: CommandConfig) => {
        if (config.commandName == CreatePerson.name) {
            return new CreatePerson(config.args)
        } else {
            throw new Error('Command not found!')
        }
    }
}
