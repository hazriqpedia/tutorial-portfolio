import React from "react";
import { useSpring, animated } from "react-spring";

function CardInfo(props) {
  const style = useSpring({ opacity: 2, from: { opacity: 0 } });
  // const styleOff = useSpring({ opacity: 0, from: { opacity: 2 } });
  // const isSelected = props.selected;

  console.log(("selected:", props.selected));

  return (
    <animated.div className="h-card-info" style={style}>
      <p className="h-card-title">{props.title}</p>
      <p className="h-card-subtitle">{props.subtitle}</p>
      <a href={props.link} target="_blanks">
        View
      </a>
    </animated.div>
  );
}

export default CardInfo;

// import React from "react";
// import { useSpring, animated } from "react-spring";

// function CardInfo(props) {
//   const style = useSpring({ opacity: 2, from: { opacity: 0 } });
//   const styleOff = useSpring({ opacity: 0, from: { opacity: 2 } });
//   const isSelected = props.selected;

//   console.log(("selected:", props.selected));

//   return (
//     <animated.div className="h-card-info" style={style}>
//       <p className="h-card-title">{props.title}</p>
//       <p className="h-card-subtitle">{props.subtitle}</p>
//       <a href={props.link} target="_blanks">
//         View
//       </a>
//     </animated.div>
//   );
// }

// export default CardInfo;
