import AnimatedLoader from "./components/AnimatedLoader";
import DragableCard from "./components/DragableCard";
import ScrollbarIndicator from "./components/ScrollbarIndicator";

const App = () => {
  return (
    <div className="flex items-center justify-center h-screen">
      {/* <ScrollbarIndicator /> */}
      {/* <AnimatedLoader /> */}
      <DragableCard
        style={{
          background: "linear-gradient(135deg,#f093fb 0% , #f5576c 100%)",
        }}
      >
        Card 1
      </DragableCard>
      <DragableCard
        style={{
          background: "linear-gradient(135deg,#5ee7df 0%, #b490ca 100%)",
        }}
      >
        Card 2
      </DragableCard>
      <DragableCard
        style={{
          background: "linear-gradient(135deg, #ff9a9e 0%,#fecfef 100%)",
        }}
      >
        Card 3
      </DragableCard>
    </div>
  );
};

export default App;
