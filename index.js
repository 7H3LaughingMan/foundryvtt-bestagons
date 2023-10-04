Hooks.on("init", function () {
    HexagonalGrid.pixelsToOffset = function ({ x, y }, config, method = "floor") {
        const { columns, even, width, height } = config;
        const fn = Math[method];
        let row, col;

        // Extra variables - It's Mathing Time!
        let gridHeight, gridWidth;
        let halfHeight, halfWidth;
        let relX, relY;
        let c, m;

        if (columns) {
            // Column Orientation
            gridHeight = height;
            gridWidth = (width * 0.75);
            halfHeight = gridHeight / 2;
            c = (width * 0.25);
            m = c / halfHeight;

            // Find Row & Column
            col = fn(x / gridWidth);
            const isEven = (col + 1) % 2 === 0;
            row = fn((y / gridHeight) + (even === isEven ? 0.5 : 0));

            // Get Relative X & Y
            relY = y - (row * gridHeight) + (even === isEven ? halfHeight : 0);
            relX = (x - (col * gridWidth));

            // Check if the relative point is above/below either of the hexagon's left edges
            if (relX < (-m * relY) + c) {
                // Top Edge
                col--;
                row -= (even === isEven ? 1 : 0);
            } else if (relX < (m * relY) - c) {
                // Bottom Edge
                col--;
                row += (even === isEven ? 0 : 1);
            }
        } else {
            // Row Orientation
            gridHeight = (height * 0.75);
            gridWidth = width;
            halfWidth = gridWidth / 2;
            c = (height * 0.25);
            m = c / halfWidth;

            // Find Row & Column
            row = fn(y / gridHeight);
            const isEven = (row + 1) % 2 === 0;
            col = fn((x / gridWidth) + (even === isEven ? 0.5 : 0));

            // Get Relative X & Y
            relY = y - (row * gridHeight);
            relX = (x - (col * gridWidth)) + (even === isEven ? halfWidth : 0);

            // Check if the relative point is above either of the hexagon's top edges
            if (relY < (-m * relX) + c) {
                // Left Edge
                row--;
                col -= (even === isEven ? 1 : 0);
            } else if (relY < (m * relX) - c) {
                // Right Edge
                row--;
                col += (even === isEven ? 0 : 1);
            }
        }

        return { row, col };
    };
});