
import { CommandResponse } from './command-response'

export default interface Command {
    execute: () => CommandResponse
}
