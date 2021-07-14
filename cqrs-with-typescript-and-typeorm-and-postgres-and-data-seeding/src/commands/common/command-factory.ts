import Command from './command'
import CommandConfig from './command-config'

export default interface CommandFactory {
    makeCommand: (config: CommandConfig) => Command
}