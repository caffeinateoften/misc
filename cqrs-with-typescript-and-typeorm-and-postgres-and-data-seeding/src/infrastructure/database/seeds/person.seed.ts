import { Factory, Seeder } from "typeorm-seeding";
import { Person } from "../../../commands/entity/person.entity";

export default class CreatePersons implements Seeder {
    public async run(factory: Factory): Promise<void> {
        await factory(Person)().createMany(10)
    }
}
