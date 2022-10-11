const getWeekSectionContent = () => {
  let noteLine = `<h1>This Week</h1>`;

  if (localStorage.length == 0) return "";

  for (let i = 0; i < localStorage.length; i++) {
    const key = localStorage.key(i);
    let value = localStorage.getItem(key).split(",");

    if (typeof value[1] == "undefined") value[1] = "";

    const week = getWeek()
    if (week.includes(value[1])) {
      const lineTemplate = `
        <div class="note-line" id=${key}>
            <i class="fa-regular fa-circle"></i>
            <input type="text" class="edit-text" value="${value[0]}">
            <input type="date" class="date" value="${value[1]}">
            <i class="fa-solid fa-trash-can"></i>
        </div>
      `;
      noteLine = noteLine + lineTemplate;
    }
  }
  return noteLine;
}

const getWeek = () => {
	let curr = new Date();
	let week = [];

	for (let i = 1; i <= 7; i++) {
		let first = curr.getDate() - curr.getDay() + i;
		let day = new Date(curr.setDate(first)).toISOString().slice(0, 10);
		week.push(day);
	}
  return week;
};

const weekContent = `
    ${getWeekSectionContent()}
`;

export { getWeekSectionContent };
