// appear and disappear contents
export function appearModal(formPosition, taskPosition, background, modal) {
  formPosition.style.zIndex = "0";
  taskPosition.style.zIndex = "0";
  background.style.opacity = "1";
  background.style.transition = "all 0.3s ease";
  modal.style.opacity = "1";
  modal.style.transition = "all 0.3s ease";
};

export function disappearThisModal(form, formPosition, taskPosition, background, modal) {
  form.reset();
  form.média.focus();

  formPosition.style.zIndex = "5";
  background.style.opacity = "0";
  taskPosition.style.display = "none";
  background.style.transition = "all 0.3s ease";
  modal.style.opacity = "0";
  modal.style.transition = "all 0.1s ease";
};

export function saveThisCalc(form, formPosition, taskPosition, background, modal) {
  form.reset();
  form.média.focus();

  formPosition.style.zIndex = "5";
  background.style.opacity = "0";
  formPosition.style.display = "none"
  taskPosition.style.display = "block";
  background.style.transition = "all 0.3s ease";
  modal.style.opacity = "0";
  modal.style.transition = "all 0.1s ease";

};

export function appearForm(formPosition, taskPosition) {
  formPosition.style.display = "block";
  taskPosition.style.display = "none";
};

export function appearTask(formPosition, taskPosition) {
  formPosition.style.display = "none";
  taskPosition.style.display = "block";
};