// apps/d3-app/src/app/app.tsx
import * as d3 from 'd3';
import { useEffect, useRef } from 'react';

function App() {
  const svgRef = useRef(null);

  useEffect(() => {
    const svg = d3.select(svgRef.current)
      .attr('width', 500)
      .attr('height', 500);

    svg.append('circle')
      .attr('cx', 250)
      .attr('cy', 250)
      .attr('r', 50)
      .attr('fill', 'blue');
  }, []);

  return <svg ref={svgRef}></svg>;
}

export default App;
