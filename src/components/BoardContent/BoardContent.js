import Column from "../Column/Column";
import "./BoardContent.css";
import { initData } from "../../actions/initData";
import { useEffect, useState } from "react";
import _, { isEmpty } from "lodash";
import { mapOrder } from "../../utilites/sort";
import { Container, Draggable } from "react-smooth-dnd";

function BoardContent() {
  const [board, setBoard] = useState({});
  const [columns, setColumns] = useState([]);

  useEffect(() => {
    const boardInitData = initData.boards.find((item) => item.id === "board-1");
    if (boardInitData) {
      setBoard(boardInitData);
      setColumns(
        mapOrder(boardInitData.columns, boardInitData.columnOrder, "id")
      );
    }
  }, []);

	const onColumnDrop = (dropResult)=> {
		console.log('dddddddd', dropResult);
	}
	
  if (_.isEmpty(board)) {
    return (
      <>
        <div className="not-found">not found</div>
      </>
    );
  }

  return (
    <>
      <div className="board-columns">
        <Container
          orientation="horizontal"
				  onDrop={onColumnDrop}
				  getChildPayload={index=>columns[index]}
          dragHandleSelector=".column-drag-handle"
          dropPlaceholder={{
            animationDuration: 150,
            showOnTop: true,
            className: "cards-drop-preview",
          }}
        >
          {columns &&
            columns.length > 0 &&
            columns.map((column, index) => {
					return (
						<Draggable key={column.id} >
						<Column
							column={column}
						/>
						</Draggable>
					);
            })}
        </Container>
      </div>
    </>
  );
}

export default BoardContent;
