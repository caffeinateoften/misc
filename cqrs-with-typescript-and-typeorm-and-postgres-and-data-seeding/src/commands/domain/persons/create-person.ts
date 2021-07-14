import { getManager } from "typeorm";

import { Person } from '../../entity/person.entity'
import { Command } from '../../common/command';

export class CreatePerson implements Command {
    private person: Person;

    constructor(person: Person) {
        this.person = person
    }

    public execute = async () => {
        let person = new Person(this.person.firstName, this.person.lastName, this.person.aliases)

        const status = await getManager().getRepository('Person')
            .save(person)
            .then(person => {
                console.log(`person added success: ${person.id}`)
                return true
            })
            .catch(err => {
                console.log(`error adding person: ${err}`)
                return false
            })

        return { status }
    }
}
