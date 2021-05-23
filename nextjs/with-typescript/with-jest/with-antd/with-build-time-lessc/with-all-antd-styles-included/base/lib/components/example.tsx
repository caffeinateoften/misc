export interface ExampleProps {
    text: string
}

export const Example: React.FC<ExampleProps> = ({ text }) => <div>{text}</div>
