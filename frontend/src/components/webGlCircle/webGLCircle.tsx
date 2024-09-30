import React, { useEffect, useRef } from 'react';

const WebGLCircle: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const gl = canvas.getContext('webgl');
    if (!gl) {
      console.error('WebGL not supported');
      return;
    }

    // Type definitions for shaders
    const createShader = (type: GLenum, source: string): WebGLShader | null => {
      const shader = gl.createShader(type);
      if (!shader) return null;

      gl.shaderSource(shader, source);
      gl.compileShader(shader);
      if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
        console.error('Shader compile failed:', gl.getShaderInfoLog(shader));
        gl.deleteShader(shader);
        return null;
      }
      return shader;
    };

    // Vertex shader program
    const vertexShaderSource = `
      attribute vec2 a_position;
      void main() {
        gl_Position = vec4(a_position, 0, 1);
      }
    `;

    // Fragment shader program
    const fragmentShaderSource = `
      precision mediump float;
      uniform vec4 u_color;
      void main() {
        gl_FragColor = u_color;
      }
    `;

    // Create and compile the shaders
    const vertexShader = createShader(gl.VERTEX_SHADER, vertexShaderSource);
    const fragmentShader = createShader(gl.FRAGMENT_SHADER, fragmentShaderSource);

    if (!vertexShader || !fragmentShader) return;

    // Create program and attach shaders
    const program = gl.createProgram();
    if (!program) return;

    gl.attachShader(program, vertexShader);
    gl.attachShader(program, fragmentShader);
    gl.linkProgram(program);

    if (!gl.getProgramParameter(program, gl.LINK_STATUS)) {
      console.error('Program link failed:', gl.getProgramInfoLog(program));
      gl.deleteProgram(program);
      return;
    }

    // Get attribute and uniform locations
    const positionLocation = gl.getAttribLocation(program, 'a_position');
    const colorLocation = gl.getUniformLocation(program, 'u_color');

    if (colorLocation === null) {
      console.error('Failed to get uniform location');
      return;
    }

    // Create a buffer to hold the circle vertices
    const buffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, buffer);

    // Generate circle vertices
    const circleVertices: number[] = [];
    const numSegments = 100;
    const radius = 0.5;
    for (let i = 0; i <= numSegments; i++) {
      const angle = (i / numSegments) * Math.PI * 2;
      const x = Math.cos(angle) * radius;
      const y = Math.sin(angle) * radius;
      circleVertices.push(x, y);
    }

    // Pass vertices to the buffer
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(circleVertices), gl.STATIC_DRAW);

    // Setup WebGL to draw
    gl.viewport(0, 0, canvas.width, canvas.height);
    gl.clearColor(0, 0, 0, 0); // Clear the background to black
    gl.clear(gl.COLOR_BUFFER_BIT);
    gl.useProgram(program);

    // Enable the position attribute and point it to the buffer
    gl.enableVertexAttribArray(positionLocation);
    gl.vertexAttribPointer(positionLocation, 2, gl.FLOAT, false, 0, 0);

    // Set the color to red
    gl.uniform4f(colorLocation, 1, 0, 0, 1);

    // Draw the circle using TRIANGLE_FAN
    gl.drawArrays(gl.TRIANGLE_FAN, 0, circleVertices.length / 2);
  }, []);

  return (
    <canvas
    className='relative'
      ref={canvasRef}
      width={500}
      height={500}
      style={{ width: '500px', height: '500px', border: '1px solid black' }}
    />
  );
};

export default WebGLCircle;
