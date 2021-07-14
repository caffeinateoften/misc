import { Command } from './command'
import { CommandConfig } from './command-config'

export interface CommandFactory {
    makeCommand: (config: CommandConfig) => Command
}
