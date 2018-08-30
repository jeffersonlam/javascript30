const checkboxes = [...document.querySelectorAll('.inbox > .item > input')];
let start = null;
let direction = 1;

function handleClick(e) {
  console.log('checked:', e.target.checked);
  if (!e.target.checked) return;
  if (!e.shiftKey) {
    start = checkboxes.indexOf(e.target);
  } else if (e.shiftKey) {
    const end = checkboxes.indexOf(e.target);
    direction = start < end ? 1 : -1;
    for (let i = start; i !== end; i += direction) {
      checkboxes[i].checked = true;
    }
  }
}

checkboxes.forEach(c => c.addEventListener('click', handleClick));
