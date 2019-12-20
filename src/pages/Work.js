import React from "react";

//import "../styles/ex.css";
import AbsoluteWrapper from "../components/AbsoluteWrapper";
import AnimatedHomePage from "../components/AnimatedHomePage";

function Work() {
  return <AnimatedHomePage />;
}

// const Work = () => {
//   const ref = useRef([]);
//   const [items, set] = useState([]);
//   const transitions = useTransition(items, null, {
//     from: {
//       opacity: 0,
//       height: 0,
//       innerHeight: 0,
//       transform: "perspective(600px) rotateX(0deg)",
//       color: "#8fa5b6"
//       // linethrough
//     },
//     enter: [
//       { opacity: 1, height: 80, innerHeight: 80 },
//       { transform: "perspective(600px) rotateX(180deg)", color: "#28d79f" },
//       { transform: "perspective(600px) rotateX(0deg)" }
//     ],
//     leave: [
//       { color: "#c23369" },
//       { innerHeight: 0 },
//       { opacity: 0, height: 0 }
//     ],
//     update: { color: "#28b4d7" }
//   });

//   const reset = useCallback(() => {
//     ref.current.map(clearTimeout);
//     ref.current = [];
//     set([]);
//     ref.current.push(
//       setTimeout(() => set(["Apples", "Oranges", "Kiwis"]), 2000)
//     );
//     ref.current.push(setTimeout(() => set(["Apples", "Kiwis"]), 5000));
//     ref.current.push(
//       setTimeout(() => set(["Apples", "Bananas", "Kiwis"]), 8000)
//     );
//   }, []);

//   useEffect(() => void reset(), []);
//   return (
//     <AbsoluteWrapper>
//       <div>
//         {transitions.map(({ item, props: { innerHeight, ...rest }, key }) => (
//           <animated.div
//             className="transitions-item"
//             key={key}
//             style={rest}
//             onClick={reset}
//           >
//             <animated.div style={{ overflow: "hidden", height: innerHeight }}>
//               {item}
//             </animated.div>
//           </animated.div>
//         ))}
//       </div>
//     </AbsoluteWrapper>
//   );
// };

export default Work;
