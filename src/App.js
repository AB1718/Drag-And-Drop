// src/App.js
import React from 'react';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import Canvas from './components/Canvas';
import './App.css'; // Importing CSS for App component

const App = () => (
  <DndProvider backend={HTML5Backend}>
    <div className="app">
      <h1>Drag-and-Drop Canvas</h1>
      <Canvas />
    </div>
  </DndProvider>
);

export default App;
