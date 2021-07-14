import { CommandConfig } from '../../common/command-config';
import { CommandFactory } from '../../common/command-factory';
import { POSTCommand } from './post-persons-command';

export class PersonsCommandFactory implements CommandFactory {
    makeCommand = (config: CommandConfig) => {
        if (config.commandName == POSTCommand.name) {
            return new POSTCommand(config.args)
        } else {
            throw new Error('Command not found!')
        }
    }
}
