import { useState, type ReactNode } from "react"

type CounterProps = {
	"counter-slot": ReactNode
}

function Counter(props: CounterProps) {
	const [count, setCount] = useState(0)

	console.log(props)

	const increment = () => {
		setCount(count + 1)
	}

	const decrement = () => {
		setCount(count - 1)
	}

	return (
		<div className="counter">
			<h2>Counter: {count}</h2>
			<div className="counter-buttons">
				<button onClick={decrement}>-</button>
				<button onClick={increment}>+</button>
			</div>

			{props["counter-slot"]}
		</div>
	)
}

export default Counter
