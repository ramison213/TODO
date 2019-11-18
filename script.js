const $list = document.querySelector('#list-task');
const $newTask = document.querySelector('#new-task');
const $inputWarning = document.querySelector('.input-warning');
const $hideBtn = document.querySelector('#hide-btn');

document.querySelector('#add-btn').addEventListener('click', function () {
	if ($newTask.value.trim() === '') {
		$inputWarning.style.display = 'block';
		$newTask.focus();
		return;
	}

	const $item = document.createElement('li');
	const $doneBtn = document.createElement('span');
	const $remBtn = document.createElement('span');

	$item.textContent = $newTask.value;
	$inputWarning.style.display = 'none';

	$item.classList.add('task');
	$doneBtn.classList.add('done-btn');
	$remBtn.classList.add('rem-btn');

	$list.appendChild($item);
	$item.appendChild($doneBtn);
	$item.appendChild($remBtn);

	$newTask.value = '';
});

$hideBtn.addEventListener('click', function () {
	this.classList.toggle('hide-btn-active');

	document.querySelectorAll('.done').forEach(function (item) {
		item.classList.toggle('hidden');
	});
})

$list.addEventListener('click', function (ev) {
	const el = ev.target;

	if (el.classList.contains('done-btn')) {
		el.closest('.task').classList.toggle('done');

		if ($hideBtn.classList.contains('hide-btn-active')) {
			el.closest('.task').classList.add('hidden');
		}
	}

	if (el.classList.contains('rem-btn')) {
		el.closest('.task').remove();
	}
});