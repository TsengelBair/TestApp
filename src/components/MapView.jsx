import React, { useState } from "react";
import mapImage from "./../img/test12.svg";
import { vertices, edges } from "./datas";

// Список айди вершин, которые не должны отображаться в select (при отображении маршрута), т.к. они яв-ся промежуточными
const excludedVertexIds = [20, 30, 40, 50, 60, 70, 80, 90, 91];

// Создаем обратные ребра для каждого ребра в графе (т.е. граф неориентированный)
const allEdges = edges.flatMap(edge => [
  edge,
  { from: edge.to, to: edge.from, weight: edge.weight } 
]);

const MapView = () => {
  const [startVertex, setStartVertex] = useState(100);
  const [endVertex, setEndVertex] = useState(177);
  const [path, setPath] = useState([]);

  const dijkstra = (start, end) => {
    const distances = {};
    const previous = {}; // Для вост-я пути
    const queue = new Set(vertices.map(v => v.id));

    vertices.forEach(v => {
      distances[v.id] = Infinity;
      previous[v.id] = null;
    });

    distances[start] = 0;

    while (queue.size > 0) {
      // Находим вершину с минимальным расстоянием
      const minVertex = Array.from(queue).reduce((min, vertex) => 
        distances[vertex] < distances[min] ? vertex : min, Array.from(queue)[0]);

      if (minVertex === end) {
        const path = [];
        let current = end;
        while (current !== null) {
          path.unshift(current);
          current = previous[current];
        }
        return path;
      }

      queue.delete(minVertex);

      allEdges.forEach(edge => {
        if (edge.from === minVertex && queue.has(edge.to)) {
          const alt = distances[minVertex] + edge.weight;
          if (alt < distances[edge.to]) {
            distances[edge.to] = alt;
            previous[edge.to] = minVertex;
          }
        }
      });
    }

    return [];
  };

  const handleFindPath = () => {
    const foundPath = dijkstra(startVertex, endVertex);
    setPath(foundPath);
  };

  const renderVertices = () => {
    return vertices.map(vertex => (
      <circle
        key={vertex.id}
        cx={vertex.x}
        cy={vertex.y}
        r="1"
        fill="red"
        opacity={vertex.id === startVertex || vertex.id === endVertex ? "1" : "0"}
      />
    ));
  };

  const renderEdges = () => {
    return allEdges.map((edge, index) => {
      const fromVertex = vertices.find(v => v.id === edge.from);
      const toVertex = vertices.find(v => v.id === edge.to);

      // Проверяем, что вершины существуют
      if (!fromVertex || !toVertex) {
        console.error(`Vertex not found for edge: ${edge.from} -> ${edge.to}`);
        return null; 
      }

      return (
        <line
          key={index}
          x1={fromVertex.x}
          y1={fromVertex.y}
          x2={toVertex.x}
          y2={toVertex.y}
          stroke="black"
          strokeWidth="0.5"
          opacity={path.includes(edge.from) && path.includes(edge.to) ? "1" : "0"}
        />
      );
    }).filter(edge => edge !== null); // null значения когда вершины не найдены
  };

  return (
    <div className="container">
      <div className="wrapper">
        <div style={{ position: 'relative' }}>
          <img src={mapImage} alt="Map" style={{ width: 'auto', height: 'auto' }} />
          <svg style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}>
            {renderEdges()}
            {renderVertices()}
          </svg>
        </div>
        <div className="form">
          <h3 className="form_label">Выберите стартовую и конечную точку</h3>
          <label className="startVertex" htmlFor="startVertex">Стартовая точка:</label>
          <select
            className="startVertexInput"
            id="startVertex"
            value={startVertex}
            onChange={(e) => setStartVertex(parseInt(e.target.value))}
          >
            {vertices.filter(vertex => !excludedVertexIds.includes(vertex.id)).map(vertex => (
              <option key={vertex.id} value={vertex.id}>
                {vertex.id}
              </option>
            ))}
          </select>
          <br />
          <label className="endVertex" htmlFor="endVertex">Конечная точка:</label>
          <select
            className="endVertexInput"
            id="endVertex"
            value={endVertex}
            onChange={(e) => setEndVertex(parseInt(e.target.value))}
          >
            {vertices.filter(vertex => !excludedVertexIds.includes(vertex.id)).map(vertex => (
              <option key={vertex.id} value={vertex.id}>
                {vertex.id}
              </option>
            ))}
          </select>
          <button className="form_btn" onClick={handleFindPath}>Найти</button>
        </div>
      </div>
    </div>
  );
};

export default MapView;
