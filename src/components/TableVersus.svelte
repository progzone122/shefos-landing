<script>
	const headers = ['', 'Arch Linux', 'CachyOS', 'ShefOS'];

	const rows = [
		['Вес образа', '921 600 КилоБАЙТ', '2 670 016 КилоБАЙТ', '320 КилоГРАММ'],
		['Кросс-платформенность', 'только x64', 'только x64', 'Работает на любых мощностях'],
		['Безопасность', 'Systemd-exploited', 'Скомпилирован с GCC-эксплоитом', 'Максимально безопасен'],
		['Медийная известность', 'Топ 1 для долбоёбов', 'noname', 'Его хочет каждый'],
		['Обои', 'Нет', 'Нет', 'Нескучные 320-килограммовые'],
		['Экосистема', 'Минимальная', 'Минимальная', 'От холодильника Haier до суперкомпьютера MOSHNOSTI'],
		['Предустановленые пакеты', 'Базовые', 'Основные', '1660 пакетов общей массой 320 кг'],
		['Оптимизации', 'Никакие', 'Перемудрили', 'Уровень тюнинг-ателье©'],
		['Система инициализации', 'systemd exploit', 'systemd exploit', 'Собственная разработка 320KGinit'],
		['Стабильность', 'Ужасная', 'Ужасная', 'Эталон стабильности'],
	];
</script>

<div class="min-w-[600px] md:min-w-full">
	<table class="w-full table-auto border-collapse overflow-hidden rounded-xl text-center shadow-lg dark:shadow-black">
		<thead>
		<tr class="bg-color2-light text-xl font-bold dark:bg-color2">
			{#each headers as header}
				<th class="px-4 py-3">{header}</th>
			{/each}
		</tr>
		</thead>
		<tbody>
		{#each rows as row}
			<tr class="bg-white text-lg dark:bg-color3">
				{#each row as cell}
					<td class="px-4 py-3">{cell}</td>
				{/each}
			</tr>
		{/each}
		</tbody>
	</table>
</div>