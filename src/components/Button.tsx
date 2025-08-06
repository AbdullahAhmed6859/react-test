import { useState } from "react";

function Button({ children }: { children: React.ReactNode }) {
  const [count, setCount] = useState(0);
  return (
    <button onClick={() => setCount((c) => c + 1)}>
      {children} {count}
    </button>
  );
}

export default Button;
