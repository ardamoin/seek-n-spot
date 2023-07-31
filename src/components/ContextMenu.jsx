const ContextMenu = ({ x, y, names, close, removeCharacter }) => {
  function measureDistance(element, cursorX, cursorY) {
    // Measures distance from element to cursor
    // Get the position and size of the element
    const rect = element.getBoundingClientRect();
    const elementX = rect.left;
    const elementY = rect.top;
    const elementWidth = rect.width;
    const elementHeight = rect.height;
    const imgRef = document.getElementById("arena-img");

    // Calculate the center point of the element
    const centerX = elementX + elementWidth / 2;
    const centerY = elementY + elementHeight / 2;

    // Calculate the distance between the element's center and the cursor
    const distanceX = Math.abs(centerX - cursorX);
    const distanceY = Math.abs(centerY - cursorY);

    // Calculate the distance between the element's center and the cursor as a percentage of image height and width
    const realDistanceX = distanceX / imgRef.width;
    const realDistanceY = distanceY / imgRef.height;

    // Calculate the overall distance using the Pythagorean theorem
    const distance = Math.sqrt(realDistanceX ** 2 + realDistanceY ** 2);

    return distance;
  }

  const mouseIsCloseEnoughToCharacter = (mouseX, mouseY, charcterName) => {
    let rect = document.getElementById("arena-img").getBoundingClientRect();
    let x = mouseX - rect.left;
    let y = mouseY + rect.top;
    let targetElement = document.getElementById(charcterName);

    measureDistance(targetElement, x, y);

    if (measureDistance(targetElement, x, y) < 0.02) {
      alert(`Congrats you found ${charcterName}!!!`);
      removeCharacter(charcterName);
    } else {
      alert("Keep looking");
    }
  };

  const mouseClickHandler = (e) => {
    close();
    mouseIsCloseEnoughToCharacter(x, y, e.target.textContent);
  };

  return (
    <div
      className="absolute z-20 rounded border bg-white font-light shadow"
      style={{ left: `${x}px`, top: `${y}px` }}
    >
      <ul>
        {names.map((name) => (
          <li
            key={name}
            className="cursor-pointer p-1 px-4 text-accent hover:bg-purple-100"
            onClick={mouseClickHandler}
          >
            {name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ContextMenu;
