interface AwaitThenableProps {
	action: () => void;
	children: React.ReactNode;
}

export function AwaitThenable({ action, children }: AwaitThenableProps) {
	return <button onClick={action}>{children}</button>;
}
