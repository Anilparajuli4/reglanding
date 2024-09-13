

const Board = () => {
    const boardSize = 8;
    const squares = [];
  
    for (let i = 0; i < boardSize * boardSize; i++) {
      const isBlack = Math.floor(i / boardSize) % 2 === i % 2;
      squares.push(
        <div
          key={i}
          className={`w-full h-full ${isBlack ? 'bg-gray-200' : 'bg-gray-100'}`}
        ></div>
      );
    }
  
    return (
      <div className="flex items-center justify-center h-screen">
        <div className="grid grid-cols-8 w-[600px] h-[400px] shadow-2xl shadow-gray-600/50 backdrop-blur-md">
          {squares}
        </div>
      </div>
    );
  };

export default Board;
