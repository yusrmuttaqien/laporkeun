import { scrollStateF } from '../configs/states';

export function disableScroll(id) {
  const state = scrollStateF();
  let element;

  if (id) {
    element = specifyList(id);
  } else {
    return;
  }

  if (element) {
    element[0].setAttribute('data-scroll-disabled', 'true');
    state.setActive((prev) => ({ [id]: prev[id] ? prev[id] + 1 : 1 }));
    return;
  }

  return;
}

export function enableScroll(id) {
  const state = scrollStateF();
  let element;

  if (!id && !state.getActive(id)) {
    return;
  }

  state.setActive((prev) => ({ [id]: prev[id] - 1 }));

  if (state.getActive(id) === 0) {
    element = specifyList(id);

    element[0].removeAttribute('data-scroll-disabled');
    state.remove(id);
  }

  return;
}

function specifyList(s) {
  const sFirst = s.toString().charAt(0);

  switch (sFirst) {
    case '<':
      return [document.getElementsByTagName(s.toString().substring(1))[0], s];
    case '#':
      return [document.getElementById(s.toString().substring(1)), s];
    default:
      break;
  }

  return null;
}
