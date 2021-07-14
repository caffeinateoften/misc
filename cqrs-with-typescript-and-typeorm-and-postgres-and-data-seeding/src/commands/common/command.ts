
import { CommandResponse } from './command-response'

export interface Command {
    execute: () => Promise<CommandResponse>
}
