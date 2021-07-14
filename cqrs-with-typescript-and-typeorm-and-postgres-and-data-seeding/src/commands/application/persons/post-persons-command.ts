import { Person } from '../../entity/person.entity';
import * as DomainPersonsCommands from '../../domain/persons';
import { Command } from '../../common/command';

export class POSTCommand implements Command {
    private person: Person;

    constructor(person: Person) {
        this.person = person
    }

    public execute = async () => {
        const crudCommandFactory = new DomainPersonsCommands.CRUDCommandFactory()
        const commandName = DomainPersonsCommands.CreatePerson.name

        const config = {
            commandName,
            args: this.person
        }
        const command = crudCommandFactory.makeCommand(config)

        const results = await command.execute()

        return results.status ?
            { status: true } :
            { status: false }
    }
}
