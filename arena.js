const arena = document.querySelector('.arena');

const generateNumberRange = (from, to) => {
  const result = [];
  for (let i = from; i <= to; i++) {
    result.push(i);
  }
  return result;
}

const getLineSeats = () =>  generateNumberRange(1,10)
  .map(seatNumber =>
    `<div class="sector__seat" data-seat-number=${seatNumber}>
    </div>`).join('');


const getSectorLines = () => {
  const seatString = getLineSeats();

  return generateNumberRange(1,10)
    .map(lineNumber =>
      `<div class="sector__line" data-line-number=${lineNumber}>
        ${seatString}
      </div>`).join('');
  }

const renderArena = () => {
  const lineString = getSectorLines();

  const sectors = generateNumberRange(1,3).map(sectorNumber =>
     `<div class="sector" data-sector-number=${sectorNumber}>
     ${lineString}
     </div>`).join('');

     arena.innerHTML = sectors;
}

const onSeatSelect = (event) => {
  const isSeat = event.target.classList.contains('sector__seat');
  if(!isSeat) {
    return;
  }

  const seatNumber = event.target.dataset.seatNumber;
  const lineNumber = event.target.closest('.sector__line').dataset.lineNumber;
  const sectorNumber = event.target.closest('.sector').dataset.sectorNumber;

  const selectedSeatElem = document.querySelector('.board__selecred-seat');
  selectedSeatElem.textContent =  `S ${sectorNumber} -L ${lineNumber} -S ${seatNumber}`
}

arena.addEventListener('click', onSeatSelect)

renderArena();