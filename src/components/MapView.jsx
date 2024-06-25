import React, { useState } from "react";
import mapImage from "./../img/test11.svg";

const initialVertices = [
// Start rooms (from 100 - 125)
{ id: 0, x: 133.7, y: 76.5 }, // chill zone 0
{ id: 1, x: 158.7, y: 38 }, // Elev 1 
{ id: 2, x: 233.67, y: 76 }, // сам CaoncertHall (центр)
{ id: 3, x: 298.3, y:59}, // Бар
{ id: 4, x: 363.7, y: 75}, // Палуба
{ id: 20, x: 147.7, y: 38 }, // Точка перехода к лифту
{ id: 100, x: 20.7, y: 21 },
{ id: 101, x: 27.7, y: 21 },
{ id: 102, x: 34.7, y: 21 },
{ id: 103, x: 41.7, y: 21 },
{ id: 104, x: 48.7, y: 21 },
{ id: 105, x: 55.7, y: 21 },
{ id: 106, x: 62.7, y: 21 },
{ id: 107, x: 69.7, y: 21 },
{ id: 108, x: 76.7, y: 21 },
{ id: 109, x: 83.7, y: 21 },
{ id: 110, x: 90.7, y: 21 },
{ id: 111, x: 97.7, y: 21 },
{ id: 112, x: 104.7, y: 21 },
{ id: 113, x: 112.7, y: 21 },
{ id: 114, x: 119.7, y: 21 },
{ id: 115, x: 126.7, y: 21 },
{ id: 116, x: 133.7, y: 21 },
{ id: 117, x: 140.7, y: 21 },
{ id: 118, x: 147.7, y: 21 },
{ id: 119, x: 154.7, y: 21 },
{ id: 120, x: 161.7, y: 21 },
{ id: 121, x: 168.7, y: 21 },
{ id: 122, x: 175.7, y: 21 },
{ id: 123, x: 182.7, y: 21 },
{ id: 124, x: 189.7, y: 21 },
{ id: 125, x: 196.7, y: 21 },
// 126-138
{ id: 126, x: 240.6, y: 21 },
{ id: 127, x: 247.6, y: 21 },
{ id: 128, x: 254.6, y: 21 },
{ id: 129, x: 261.6, y: 21 },
{ id: 130, x: 268.6, y: 21 },
{ id: 131, x: 275.6, y: 21 },
{ id: 132, x: 282.6, y: 21 },
{ id: 133, x: 289.6, y: 21 },
{ id: 134, x: 296.6, y: 21 },
{ id: 135, x: 303.6, y: 21 },
{ id: 136, x: 310.6, y: 21 },
{ id: 137, x: 317.6, y: 21 },
{ id: 138, x: 324.6, y: 21 },
//
  { id: 139, x: 20.7, y: 129.4 },
  { id: 140, x: 27.7, y: 129.4 },
  { id: 141, x: 34.7, y: 129.4 },
  { id: 142, x: 41.7, y: 129.4 },
  { id: 143, x: 48.7, y: 129.4 },
  { id: 144, x: 55.7, y: 129.4 },
  { id: 145, x: 62.7, y: 129.4 },
  { id: 146, x: 69.7, y: 129.4 },
  { id: 147, x: 76.7, y: 129.4 },
  { id: 148, x: 83.7, y: 129.4 },
  { id: 149, x: 90.7, y: 129.4 },
  { id: 150, x: 97.7, y: 129.4 },
  { id: 151, x: 104.7, y: 129.4 },
  { id: 152, x: 112.7, y: 129.4 },
  { id: 153, x: 119.7, y: 129.4 },
  { id: 154, x: 126.7, y: 129.4 },
  { id: 155, x: 133.7, y: 129.4 },
  { id: 156, x: 140.7, y: 129.4 },
  { id: 157, x: 147.7, y: 129.4 },
  { id: 158, x: 154.7, y: 129.4 },
  { id: 159, x: 161.7, y: 129.4 },
  { id: 160, x: 168.7, y: 129.4 },
  { id: 161, x: 175.7, y: 129.4 },
  { id: 162, x: 182.7, y: 129.4 },
  { id: 163, x: 189.7, y: 129.4 },
  { id: 164, x: 196.7, y: 129.4 },
  // 165 - 177
  { id: 165, x: 240.6, y: 129 },
  { id: 166, x: 247.6, y: 129 },
  { id: 167, x: 254.6, y: 129 },
  { id: 168, x: 261.6, y: 129 },
  { id: 169, x: 268.6, y: 129 },
  { id: 170, x: 275.6, y: 129 },
  { id: 171, x: 282.6, y: 129 },
  { id: 172, x: 289.6, y: 129 },
  { id: 173, x: 296.6, y: 129 },
  { id: 174, x: 303.6, y: 129 },
  { id: 175, x: 310.6, y: 129 },
  { id: 176, x: 317.6, y: 129 },
  { id: 177, x: 324.6, y: 129 },
  // ConcertHall
  { id: 30, x: 265.67, y: 41.7 }, // Вход в ConcertHall сверху, убрать из ui
  { id: 40, x: 265.67, y: 109.7 }, // Вход в ConcertHall снизу, убрать из ui
  // Bar
  { id: 50, x: 288.7, y: 59}, // точка около бара, убрать из ui
  // Лестницы
  { id: 60, x: 313.7, y: 96}, // Лестница снизу, убрать из ui
  { id: 70, x: 313.7, y: 54}, // Лестница сверху, убрать из ui
  // Промежуточные вершины от лестниц до палубы (4)
  { id: 80, x: 340.7, y: 96}, // Снизу, убрать из ui
  { id: 90, x: 340.7, y: 54}, // Сверху, убрать из ui
];

const edges = [
  // chill zone верхние
  { from: 0, to: 116, weight: 16 },
  { from: 0, to: 117, weight: 16 },
  { from: 0, to: 118, weight: 17 },
  // chill zone нижние
  { from: 0, to: 155, weight: 16 },
  { from: 0, to: 156, weight: 16 },
  { from: 0, to: 157, weight: 17 },
  { from: 0, to: 158, weight: 17 },
  { from: 0, to: 159, weight: 18 },
  { from: 0, to: 160, weight: 19 },
   // Лифт точка 1
   { from: 1, to: 20, weight: 2 },
   { from: 1, to: 155, weight: 28 },
   { from: 1, to: 156, weight: 27 },
   { from: 1, to: 157, weight: 27 },
   { from: 1, to: 158, weight: 27 },
   { from: 1, to: 159, weight: 27 },
   { from: 1, to: 0, weight: 13 },
   // Точка 2 около лифта
   { from: 20, to: 116, weight: 6 },
   { from: 20, to: 117, weight: 5 },
   { from: 20, to: 118, weight: 5 },
   { from: 20, to: 119, weight: 5 },
   { from: 20, to: 0, weight: 12 },
   { from: 20, to: 155, weight: 27 },
   { from: 20, to: 156, weight: 27 },
   { from: 20, to: 157, weight: 27 },
   { from: 20, to: 158, weight: 27 },
   { from: 20, to: 159, weight: 28 },
    // верхние каюты (шаг 1) 100 - 138 + напротив
    { from: 100, to: 101, weight: 2 },
    { from: 101, to: 102, weight: 2 },
    { from: 102, to: 103, weight: 2 },
    { from: 103, to: 104, weight: 2 },
    { from: 104, to: 105, weight: 2 },
    { from: 105, to: 106, weight: 2 },
    { from: 106, to: 107, weight: 2 },
    { from: 107, to: 108, weight: 2 },
    { from: 108, to: 109, weight: 2 },
    { from: 109, to: 110, weight: 2 },
    { from: 110, to: 111, weight: 2 },
    { from: 111, to: 112, weight: 2 },
    { from: 112, to: 113, weight: 2 },
    { from: 113, to: 114, weight: 2 },
    { from: 114, to: 115, weight: 2 },
    { from: 115, to: 116, weight: 2 },
    { from: 116, to: 117, weight: 2 },
    { from: 116, to: 156, weight: 32 },
    { from: 116, to: 157, weight: 32 },
    { from: 116, to: 158, weight: 32 },
    { from: 116, to: 159, weight: 33 },
    { from: 117, to: 118, weight: 2 },
    { from: 117, to: 155, weight: 32 },
    { from: 117, to: 156, weight: 32 },
    { from: 117, to: 157, weight: 32 },
    { from: 117, to: 158, weight: 32 },
    { from: 117, to: 159, weight: 32 },
    { from: 118, to: 119, weight: 2 },
    { from: 118, to: 155, weight: 32 },
    { from: 119, to: 120, weight: 2 },
    { from: 120, to: 121, weight: 2 },
    { from: 121, to: 122, weight: 2 },
    { from: 122, to: 123, weight: 2 },
    { from: 123, to: 124, weight: 2 },
    { from: 124, to: 125, weight: 2 },
    { from: 125, to: 126, weight: 13 }, // переход
    { from: 126, to: 127, weight: 2 },
    { from: 127, to: 128, weight: 2 },
    { from: 128, to: 129, weight: 2 },
    { from: 129, to: 130, weight: 2 },
    { from: 130, to: 131, weight: 2 },
    { from: 130, to: 169, weight: 32 },
    { from: 130, to: 170, weight: 32 },
    { from: 130, to: 171, weight: 32 },
    { from: 130, to: 172, weight: 33 },
    { from: 130, to: 173, weight: 33 },
    { from: 130, to: 174, weight: 33 },
    { from: 130, to: 175, weight: 34 },
    { from: 131, to: 132, weight: 2 },
    { from: 131, to: 169, weight: 32 },
    { from: 131, to: 170, weight: 32 },
    { from: 131, to: 171, weight: 32 },
    { from: 131, to: 172, weight: 32 },
    { from: 131, to: 173, weight: 32 },
    { from: 131, to: 174, weight: 32 },
    { from: 132, to: 133, weight: 2 },
    { from: 132, to: 169, weight: 32 },
    { from: 132, to: 170, weight: 32 },
    { from: 132, to: 171, weight: 32 },
    { from: 132, to: 172, weight: 32 },
    { from: 132, to: 173, weight: 32 },
    { from: 133, to: 134, weight: 2 },
    { from: 133, to: 169, weight: 32 },
    { from: 133, to: 170, weight: 32 },
    { from: 133, to: 171, weight: 32 },
    { from: 133, to: 172, weight: 32 },
    { from: 133, to: 173, weight: 32 },
    { from: 134, to: 135, weight: 2 },
    { from: 134, to: 169, weight: 31 },
    { from: 134, to: 170, weight: 30 },
    { from: 134, to: 171, weight: 30 },
    { from: 134, to: 172, weight: 30 },
    { from: 135, to: 136, weight: 2 },
    { from: 135, to: 169, weight: 31 },
    { from: 135, to: 170, weight: 31 },
    { from: 136, to: 137, weight: 2 },
    { from: 136, to: 169, weight: 32 },
    { from: 137, to: 138, weight: 2 },
    // нижние каюты (шаг 1) 139 - 177
    { from: 139, to: 140, weight: 2 },
    { from: 140, to: 141, weight: 2 },
    { from: 141, to: 142, weight: 2 },
    { from: 142, to: 143, weight: 2 },
    { from: 143, to: 144, weight: 2 },
    { from: 144, to: 145, weight: 2 },
    { from: 145, to: 146, weight: 2 },
    { from: 146, to: 147, weight: 2 },
    { from: 147, to: 148, weight: 2 },
    { from: 148, to: 149, weight: 2 },
    { from: 149, to: 150, weight: 2 },
    { from: 150, to: 151, weight: 2 },
    { from: 151, to: 152, weight: 2 },
    { from: 152, to: 153, weight: 2 },
    { from: 153, to: 154, weight: 2 },
    { from: 154, to: 155, weight: 2 },
    { from: 155, to: 156, weight: 2 },
    { from: 156, to: 157, weight: 2 },
    { from: 157, to: 158, weight: 2 },
    { from: 158, to: 159, weight: 2 },
    { from: 159, to: 160, weight: 2 },
    { from: 160, to: 161, weight: 2 },
    { from: 161, to: 162, weight: 2 },
    { from: 162, to: 163, weight: 2 },
    { from: 163, to: 164, weight: 2 },
    { from: 164, to: 165, weight: 13 }, // переход
    { from: 165, to: 166, weight: 2 },
    { from: 166, to: 167, weight: 2 },
    { from: 167, to: 168, weight: 2 },
    { from: 168, to: 169, weight: 2 },
    { from: 169, to: 170, weight: 2 },
    { from: 170, to: 171, weight: 2 },
    { from: 171, to: 172, weight: 2 },
    { from: 172, to: 173, weight: 2 },
    { from: 173, to: 174, weight: 2 },
    { from: 174, to: 175, weight: 2 },
    { from: 175, to: 176, weight: 2 },
    { from: 176, to: 177, weight: 2 },
    // От первого входа (сверху) 
    { from: 30, to: 2, weight: 12 },
    { from: 30, to: 3, weight: 10 }, // до бара
    { from: 30, to: 130, weight: 5 },
    { from: 30, to: 131, weight: 6 },
    { from: 30, to: 132, weight: 7 },
    { from: 30, to: 133, weight: 8 },
    { from: 30, to: 134, weight: 10 },
    { from: 30, to: 135, weight: 11 },
    { from: 30, to: 136, weight: 13 },
    { from: 30, to: 137, weight: 15 },
    { from: 30, to: 138, weight: 17 },
    // От второго входа снизу 
    { from: 40, to: 2, weight: 12 },
    { from: 40, to: 169, weight: 5 },
    { from: 40, to: 170, weight: 6 },
    { from: 40, to: 171, weight: 7 },
    { from: 40, to: 172, weight: 8 },
    { from: 40, to: 173, weight: 10 },
    { from: 40, to: 174, weight: 11 },
    { from: 40, to: 175, weight: 13 },
    { from: 40, to: 176, weight: 15 },
    { from: 40, to: 177, weight: 17 },
    // От бара до верхних кают
    { from: 3, to: 138, weight: 12 },
    { from: 3, to: 137, weight: 12 },
    { from: 3, to: 136, weight: 11 },
    { from: 3, to: 135, weight: 10 },
    { from: 3, to: 134, weight: 10 },
    { from: 3, to: 133, weight: 10 },
    { from: 3, to: 132, weight: 11 },
    { from: 3, to: 131, weight: 12 },
    { from: 3, to: 130, weight: 13 },
    { from: 3, to: 129, weight: 14 },
    { from: 50, to: 3, weight: 3 }, // Промежуточная точка около бара
    { from: 50, to: 138, weight: 14 },
    { from: 50, to: 137, weight: 13 },
    { from: 50, to: 136, weight: 12 },
    { from: 50, to: 169, weight: 20 },
    { from: 50, to: 170, weight: 20 },
    { from: 50, to: 171, weight: 19 },
    { from: 50, to: 172, weight: 19 },
    { from: 50, to: 173, weight: 19 },
    { from: 50, to: 173, weight: 20 },
    // Лестница сверху
    { from: 70, to: 3, weight: 4},
    { from: 70, to: 30, weight: 13},
    { from: 70, to: 90, weight: 7},
    { from: 70, to: 129, weight: 17},
    { from: 70, to: 130, weight: 15},
    { from: 70, to: 131, weight: 14},
    { from: 70, to: 132, weight: 12},
    { from: 70, to: 133, weight: 11},
    { from: 70, to: 134, weight: 10},
    { from: 70, to: 135, weight: 9},
    { from: 70, to: 136, weight: 9},
    { from: 70, to: 137, weight: 9},
    { from: 70, to: 138, weight: 10},
     // Лестница снизу
    { from: 60, to: 40, weight: 13},
    { from: 60, to: 80, weight: 7},
    { from: 60, to: 168, weight: 17},
    { from: 60, to: 169, weight: 15},
    { from: 60, to: 170, weight: 14},
    { from: 60, to: 171, weight: 12},
    { from: 60, to: 172, weight: 11},
    { from: 60, to: 173, weight: 10},
    { from: 60, to: 174, weight: 9},
    { from: 60, to: 175, weight: 9},
    { from: 60, to: 176, weight: 9},
    { from: 60, to: 177, weight: 10},
    //
    { from: 80, to: 4, weight: 8},
    { from: 90, to: 4, weight: 8},
];

// Список Iайди вершин, которые не должны отображаться в select. т.к. они яв-ся промежуточными
const excludedVertexIds = [20, 30, 40, 50, 60, 70, 80, 90, 91];

// Создаем обратные ребра для каждого ребра в графе (т.е. граф неориентированный)
const allEdges = edges.flatMap(edge => [
  edge,
  { from: edge.to, to: edge.from, weight: edge.weight } 
]);

const MapView = () => {
  const [startVertex, setStartVertex] = useState(100);
  const [endVertex, setEndVertex] = useState(139);
  const [path, setPath] = useState([]);

  const handleStartVertexChange = (e) => {
    setStartVertex(parseInt(e.target.value));
  };

  const handleEndVertexChange = (e) => {
    setEndVertex(parseInt(e.target.value));
  };

  const dijkstra = (start, end) => {
    const distances = {};
    const previous = {}; // Для вост-я пути
    const queue = new Set(initialVertices.map(v => v.id));

    initialVertices.forEach(v => {
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
    return initialVertices.map(vertex => (
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
      const fromVertex = initialVertices.find(v => v.id === edge.from);
      const toVertex = initialVertices.find(v => v.id === edge.to);

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
          <h3 className="form_label">Choose start and end vertices</h3>
          <label className="startVertex" htmlFor="startVertex">Start Vertex:</label>
          <select
            className="startVertexInput"
            id="startVertex"
            value={startVertex}
            onChange={handleStartVertexChange}
          >
            {initialVertices.filter(vertex => !excludedVertexIds.includes(vertex.id)).map(vertex => (
              <option key={vertex.id} value={vertex.id}>
                {vertex.id}
              </option>
            ))}
          </select>
          <br />
          <label className="endVertex" htmlFor="endVertex">End Vertex:</label>
          <select
            className="endVertexInput"
            id="endVertex"
            value={endVertex}
            onChange={handleEndVertexChange}
          >
            {initialVertices.filter(vertex => !excludedVertexIds.includes(vertex.id)).map(vertex => (
              <option key={vertex.id} value={vertex.id}>
                {vertex.id}
              </option>
            ))}
          </select>
          <button className="form_btn" onClick={handleFindPath}>Find</button>
        </div>
      </div>
    </div>
  );
};

export default MapView;
