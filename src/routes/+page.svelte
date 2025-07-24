<script>
	import PlayerComponent from '../components/PlayerComponent.svelte';
	import ContentWithMedia from '../components/ContentWithMedia.svelte';

	import { contentState } from '$lib/store.svelte.ts';
	import { useInView } from '$lib/useInView.ts';

	import ImageComponent from '../components/ImageComponent.svelte';

	const ecosystem_images = [
		'/community/diablosat-setup.jpg',
		'/community/n900.png',
		'/community/phones.png',
		'/community/redminote6pro.jpg',
		'/community/watch1.jpg',
		'/community/miband1.jpg',
		'/community/paper.jpg',
		'/community/jarkzz-setup.jpg',
		'/community/nothing1.jpg',
		'/community/lumia532.jpg',
		'/community/calc.png',
		'/community/psp.png',
		'/community/maibenben-setup.jpg',
		'/community/mia2lite.jpg',
		'/community/newyork.jpg',
		'/community/iphone1.jpg',
		'/community/gas.jpg',
		'/community/fortuna1.png',
		'/community/maibenben2.jpg',
		'/community/templeos.jpg'
	];
</script>

<div class="mb-[40vw] flex h-[24em] w-full flex-col items-center bg-primary pt-22 md:mb-[30vw]">
	<div use:useInView class="animate-slide-in bg-black p-2">
		<h1 class="text-4xl font-bold text-white md:text-5xl">ShefOS 320KG</h1>
	</div>
	<h4
		use:useInView
		class="text animate-slide-in mx-3 text-center font-semibold text-white md:text-2xl"
	>
		Дистрибутив, который стал революцией среди Arch-based систем
	</h4>
	<img
		use:useInView
		class="animate-slide-in mt-20 w-[90%] rounded-xl shadow-lg md:w-[60%] dark:shadow-black"
		src="/screenshot1.jpg"
	/>
</div>

<h3 use:useInView class="animate-slide-in mb-6 text-center text-3xl font-bold">
	Особенности ShefOS 320KG ZGIRNUY PINGVIN
</h3>

<div class="flex flex-col gap-12 md:gap-24">
	{#each contentState as item, i}
		<ContentWithMedia reverse={i % 2 === 1} wrapperClass="px-12" mediaClass="">
			<div slot="media">
				{#if item.type === 'image'}
					<div use:useInView class="animate-slide-in h-full w-full">
						<ImageComponent
							src={item.media}
							alt={item.header}
							className="w-full h-[54vw] md:h-[32em] shadow-lg dark:shadow-black"
						/>
					</div>
				{:else if item.type === 'video'}
					<div use:useInView class="animate-slide-in h-full w-full">
						<PlayerComponent src={item.media} className="w-full h-full rounded-xl" />
					</div>
				{/if}
			</div>

			<div slot="content">
				<h3 class="pb-2 text-2xl font-bold lg:text-3xl">{item.header}</h3>
				<p class="text leading-relaxed lg:text-xl">
					{@html item.text}
				</p>
			</div>
		</ContentWithMedia>
	{/each}
	<div class="flex w-full flex-col items-center bg-color2-light p-6 dark:bg-color2">
		<h2 use:useInView class="animate-slide-in mb-8 text-center text-2xl font-bold">
			ShefOS является основой для многих других популярных дистрибутивов
		</h2>
		<div use:useInView class="animate-slide-in h-[80vw] w-[90%] md:h-[38vw] md:w-[45%]">
			<ImageComponent
				src="/shefostree.jpg"
				alt="ShefOS Tree"
				className="w-full h-full shadow-lg dark:shadow-black"
			/>
		</div>
	</div>

	<div class="mb-16 flex w-full flex-col items-center px-4">
		<h2 use:useInView class="animate-slide-in mb-8 text-center text-2xl font-bold">
			Сравнение с отстающими
		</h2>
		<div use:useInView class="animate-slide-in w-[90%] md:w-[60%]">
			<table
				class="w-full table-auto border-collapse overflow-hidden rounded-xl text-center shadow-lg dark:shadow-black"
			>
				<thead>
					<tr class="bg-color2-light text-xl font-bold dark:bg-color2">
						<th class="px-4 py-3"> </th>
						<th class="px-4 py-3">Arch Linux</th>
						<th class="px-4 py-3">CachyOS</th>
						<th class="px-4 py-3">ShefOS</th>
					</tr>
				</thead>
				<tbody>
					<tr class="bg-white text-lg dark:bg-gray-800">
						<td class="px-4 py-3">Вес образа</td>
						<td class="px-4 py-3">921 600 КилоБАЙТ</td>
						<td class="px-4 py-3">2 670 016 КилоБАЙТ</td>
						<td class="px-4 py-3">320 КилоГРАММ</td>
					</tr>
					<tr class="bg-white text-lg dark:bg-gray-800">
						<td class="px-4 py-3">Кросс-платформенность</td>
						<td class="px-4 py-3">только x64</td>
						<td class="px-4 py-3">только x64</td>
						<td class="px-4 py-3">Работает на любых мощностях</td>
					</tr>
					<tr class="bg-white text-lg dark:bg-gray-800">
						<td class="px-4 py-3">Безопасность</td>
						<td class="px-4 py-3">Systemd-exploited</td>
						<td class="px-4 py-3">Скомпилирован с GCC-эксплоитом</td>
						<td class="px-4 py-3">Максимально безопасен</td>
					</tr>
					<tr class="bg-white text-lg dark:bg-gray-800">
						<td class="px-4 py-3">Медийная известность</td>
						<td class="px-4 py-3">Топ 1 для долбоёбов</td>
						<td class="px-4 py-3">noname</td>
						<td class="px-4 py-3">Его хочет каждый</td>
					</tr>
					<tr class="bg-white text-lg dark:bg-gray-800">
						<td class="px-4 py-3">Обои</td>
						<td class="px-4 py-3">Нет</td>
						<td class="px-4 py-3">Нет</td>
						<td class="px-4 py-3">Нескучные 320-килограммовые</td>
					</tr>
					<tr class="bg-white text-lg dark:bg-gray-800">
						<td class="px-4 py-3">Экосистема</td>
						<td class="px-4 py-3">Минимальная</td>
						<td class="px-4 py-3">Минимальная</td>
						<td class="px-4 py-3">От холодильника Haier до суперкомпьютера MOSHNOSTI</td>
					</tr>
					<tr class="bg-white text-lg dark:bg-gray-800">
						<td class="px-4 py-3">Предустановленые пакеты</td>
						<td class="px-4 py-3">Базовые</td>
						<td class="px-4 py-3">Основные</td>
						<td class="px-4 py-3">1660 пакетов общей массой 320 кг</td>
					</tr>
					<tr class="bg-white text-lg dark:bg-gray-800">
						<td class="px-4 py-3">Оптимизации</td>
						<td class="px-4 py-3">Никакие</td>
						<td class="px-4 py-3">Перемудрили</td>
						<td class="px-4 py-3">Уровень тюнинг-ателье©</td>
					</tr>
					<tr class="bg-white text-lg dark:bg-gray-800">
						<td class="px-4 py-3">Система инициализации</td>
						<td class="px-4 py-3">systemd exploit</td>
						<td class="px-4 py-3">systemd exploit</td>
						<td class="px-4 py-3">Собственная разработка 320KGinit</td>
					</tr>
					<tr class="bg-white text-lg dark:bg-gray-800">
						<td class="px-4 py-3">Стабильность</td>
						<td class="px-4 py-3">Ужасная</td>
						<td class="px-4 py-3">Ужасная</td>
						<td class="px-4 py-3">Эталон стабильности</td>
					</tr>
				</tbody>
			</table>
		</div>
	</div>
	<!--  -->
	<div class="flex w-full flex-col items-center px-4">
		<h2 use:useInView class="animate-slide-in mb-4 text-center text-2xl font-bold">
			Экосистема ShefOS
		</h2>
		<h4 use:useInView class="animate-slide-in mb-16 text-center text-xl">
			Наши разработчки и сообщество упорно работали над портированием ShefOS на различные устройства
		</h4>

		<div class="grid grid-cols-1 gap-8 md:grid-cols-3 lg:grid-cols-4">
			{#each ecosystem_images as image, i}
				<ImageComponent src={image} className="w-[15em] h-[15em] shadow-lg dark:shadow-black" />
			{/each}
		</div>
	</div>

	<div class="flex w-full flex-col items-center gap-8 px-8">
		<h2 use:useInView class="animate-slide-in mb-4 text-center text-2xl font-bold">
			Портирование ShefOS на ваше устройство
		</h2>
		<div
			use:useInView
			class="animate-slide-in w-full rounded-2xl bg-color2-light p-6 shadow-md md:w-[60%] dark:bg-color2 dark:shadow-black"
		>
			<h3 class="text-2xl font-bold">Шаг 1</h3>
			<p>
				Скачайте <a href="https://t.me/aniship/929" target="_blank">унифицированный GSI образ</a> с расширением
				.jpg
			</p>
			<div class="space-y-4">
				<div class="mt-4 flex flex-col gap-4 md:flex-row">
					<a href="https://t.me/aniship/927" target="_blank"
						><button type="button" class="btn preset-filled-secondary-500">GSI Desktop</button></a
					>
					<a href="https://t.me/aniship/929" target="_blank"
						><button type="button" class="btn preset-filled-primary-500">GSI Mobile</button></a
					>
				</div>
			</div>
		</div>
		<div
			use:useInView
			class="animate-slide-in w-full rounded-2xl bg-color2-light p-6 shadow-md md:w-[60%] dark:bg-color2 dark:shadow-black"
		>
			<h3 class="text-2xl font-bold">Шаг 2</h3>
			<p>Просчитайте вес ShefOS для вашего устройства по формуле:</p>
			<h4 class="text-center font-bold text-orange-400">
				РАЗМЕР_ДИСКА + КОЛИЧЕСТВО_ОЗУ * 320 + 42 = ?KG
			</h4>
		</div>
		<div
			use:useInView
			class="animate-slide-in w-full rounded-2xl bg-color2-light p-6 shadow-md md:w-[60%] dark:bg-color2 dark:shadow-black"
		>
			<h3 class="text-2xl font-bold">Шаг 3</h3>
			<p>Переведите киллограмы в гигабайты по формуле:</p>
			<h4 class="text-center font-bold text-orange-400">(ВЕС_SHEFOS * 320 - 42) * 2 = ?GB</h4>
		</div>
		<div
			use:useInView
			class="animate-slide-in w-full rounded-2xl bg-color2-light p-6 shadow-md md:w-[60%] dark:bg-color2 dark:shadow-black"
		>
			<h3 class="text-2xl font-bold">Шаг 4</h3>
			<p>
				С помощью утилиты ffmpeg создайте образ ShefOS для вашего устройства (Вместо GB - подставьте
				свое значение):
			</p>
			<div class="mt-4 w-full rounded-2xl bg-black p-4 text-white">
				<p>
					ffmpeg -i shefos_gsi.jpg -vf scale=GB:GB -frames:v 1 shefos_rom.bmp && ffmpeg -i
					shefos_rom.bmp shefos_rom.png
				</p>
			</div>
		</div>
		<div
			use:useInView
			class="animate-slide-in w-full rounded-2xl bg-color2-light p-6 shadow-md md:w-[60%] dark:bg-color2 dark:shadow-black"
		>
			<h3 class="text-2xl font-bold">Шаг 5</h3>
			<p class="mb-6">
				Перезагрузитесь в UEFI/BIOS или бутлоадер (в зависимости от устройства) и используйте
				функцию "Сменить обои" для установки ShefOS на ваше устройство
			</p>
			<PlayerComponent src="/porting.mp4" className="w-full h-[100vw] lg:h-[40em] rounded-xl" />
		</div>
	</div>
	<div class="flex w-full flex-col items-center bg-color2-light p-8 px-8 dark:bg-color2">
		<h2 use:useInView class="animate-slide-in mb-2 text-center text-2xl font-bold">Техподдержка</h2>
		<p use:useInView class="animate-slide-in mb-4 text-center text-xl">
			Если у вас возникнут вопросы или проблемы, пожалуйста, обратитесь в нашу службу технической
			поддержки
		</p>
		<a href="https://linuxshef.code.blog/contact/" target="_blank"
			><button type="button" class="btn preset-filled-primary-500">Связаться</button></a
		>

		<div class="mt-8 flex w-full justify-center gap-4">
			<ImageComponent
				src="/matrix/1.jpg"
				className="w-[15em] h-[32em] shadow-lg dark:shadow-black"
			/>
			<ImageComponent
				src="/matrix/2.jpg"
				className="w-[15em] h-[32em] shadow-lg dark:shadow-black"
			/>
		</div>
	</div>

	<div class="flex w-full flex-col items-center px-8">
		<h2 use:useInView class="animate-slide-in mb-2 text-center text-2xl font-bold">
		    Компании, сделавшие свой выбор в пользу ShefOS
		</h2>
		<div class="mt-8 flex w-full flex-col items-center gap-4">
            <h3 use:useInView class="animate-slide-in mb-2 text-center text-2xl font-bold">
          		    Google. Pixel Watch 3
    		</h3>
			<ImageComponent
				src="/companies/google_sup.png"
				className="w-[100%] lg:w-[65em] h-[50vw] lg:h-[32em] shadow-lg dark:shadow-black"
			/>
			<h3 use:useInView class="animate-slide-in mb-2 text-center text-2xl font-bold">
          		    Apple. Macbook, iMac
    		</h3>
            <ImageComponent
                src="/companies/apple_sup.png"
                className="w-[100%] lg:w-[65em] h-[50vw] lg:h-[50em] shadow-lg dark:shadow-black"
            />
            <h3 use:useInView class="animate-slide-in mb-2 text-center text-2xl font-bold">
                Haier. Линейка холодильников HB25
      		</h3>
            <ImageComponent
                src="/companies/thinkpad_sup.png"
                className="w-[100%] lg:w-[60em] h-[50vw] lg:h-[40em] shadow-lg dark:shadow-black"
            />
            <h3 use:useInView class="animate-slide-in mb-2 text-center text-2xl font-bold">
                Haier. Линейка холодильников HB25
      		</h3>
            <ImageComponent
                src="/companies/haier_sup.png"
                className="w-[100%] lg:w-[93em] h-[50vw] lg:h-[50em] shadow-lg dark:shadow-black"
            />
		</div>
	</div>
	
	<div class="flex w-full flex-col items-center px-8">
		<h2 use:useInView class="animate-slide-in mb-2 text-center text-2xl font-bold">
			Спасибо контрибьютерам за их вклад в проект!
		</h2>
		<div class="mt-8 flex w-full flex-col items-center gap-4">
			<ImageComponent
				src="/contrib/1.jpg"
				className="w-[100%] lg:w-[65em] h-[50vw] lg:h-[30em] shadow-lg dark:shadow-black"
			/>
			<ImageComponent
				src="/contrib/2.jpg"
				className="w-[100%] lg:w-[65em] h-[50vw] shadow-lg dark:shadow-black"
			/>
			<ImageComponent
				src="/contrib/3.jpg"
				className="w-[100%] lg:w-[65em] h-[30vw] shadow-lg dark:shadow-black"
			/>
			<ImageComponent
				src="/contrib/4.jpg"
				className="w-[100%] lg:w-[65em] lg:h-[20em] shadow-lg dark:shadow-black"
			/>
		</div>
		<div class="mt-[10vw] h-[55vw] w-[100%]">
			<PlayerComponent
				src="/shefosusers.mp4"
				className="w-full h-full rounded-xl shadow-md dark:shadow-black"
			/>
		</div>
	</div>
</div>
