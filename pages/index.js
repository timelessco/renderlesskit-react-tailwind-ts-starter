import { useSliderState } from "renderless-components";

export default function Home() {
  const slider = useSliderState();
  console.log("%c slider", "color: #aa00ff", slider);

  return <div>test</div>;
}
