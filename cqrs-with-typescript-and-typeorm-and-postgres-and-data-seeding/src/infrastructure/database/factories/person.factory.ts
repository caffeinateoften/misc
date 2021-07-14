import Faker from 'faker'
import { define } from 'typeorm-seeding'
import { Person } from '../../../commands/entity/person.entity'

define(Person, (faker: typeof Faker) => {
    const firstName = faker.name.firstName()
    const lastName = faker.name.lastName()
    const aliases = [faker.internet.userName(), faker.internet.userName(firstName)]
    const person = new Person(firstName, lastName, aliases)
    return person;
})
