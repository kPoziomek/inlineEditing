const testPace = document.getElementById('place-holder');
const mainContent = document.getElementById('main-content');
const createInput = () => {
  const inp = document.createElement('input');

  inp.type = 'text';
  testPace.classList.add('on');

  const clearFN = (e) => {
    const inputValues = e.target.value;
    testPace.className = '';
    testPace.textContent = inputValues;

    inp.remove();
  };

  mainContent.append(inp);

  inp.addEventListener('focusout', (e) => {
    clearFN(e);
  });

  inp.addEventListener('keyup', (e) => {
    if (e.key === 'Enter') {
      clearFN(e);
    }
  });
};

testPace.addEventListener('click', createInput);
