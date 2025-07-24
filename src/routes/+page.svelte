<script>
	import PlayerComponent from '../components/PlayerComponent.svelte';
	import ContentWithMedia from '../components/ContentWithMedia.svelte';

	import { contentState } from "$lib/store.svelte.ts"
	import { useInView } from "$lib/useInView.ts"

	import ImageComponent from '../components/ImageComponent.svelte';

	const ecosystem_images = [
		"/community/diablosat-setup.jpg",
		"/community/n900.png",
		"/community/phones.png",
		"/community/watch1.jpg",
		"/community/redminote6pro.jpg",
		"/community/jarkzz-setup.jpg",
		"/community/psp.png",
		"/community/maibenben-setup.jpg",
		"/community/mia2lite.jpg",
		"/community/iphone1.jpg",
		"/community/fortuna1.png",
		"/community/maibenben2.jpg",
	];
</script>

<div class="w-full h-[24em] bg-primary flex flex-col items-center pt-22 mb-[40vw] md:mb-[30vw]">
	<div use:useInView class="bg-black p-2 animate-slide-in">
		<h1 class="text-4xl md:text-5xl font-bold text-white">ShefOS 320KG</h1>
	</div>
	<h4 use:useInView class="text text-white md:text-2xl font-semibold mx-3 text-center animate-slide-in">Дистрибутив, который стал революцией среди Arch-based систем</h4>
	<img use:useInView class="animate-slide-in w-[90%] md:w-[60%] mt-20 shadow-lg dark:shadow-black rounded-xl" src="/screenshot1.jpg">
</div>

<h3 use:useInView class="text-3xl font-bold text-center mb-6 animate-slide-in">Особенности ShefOS 320KG ZGIRNUY PINGVIN</h3>

<div class="flex flex-col gap-12 md:gap-24">
	{#each contentState as item, i}
		<ContentWithMedia
			reverse={i % 2 === 1}
			wrapperClass="px-12"
			mediaClass=""
		>
			<div slot="media">
				{#if item.type === 'image'}
					<div use:useInView class="w-full h-full animate-slide-in transition-transform duration-100 ease-in-out hover:scale-95">
						<ImageComponent
							src={item.media}
							alt={item.header}
							className="w-full h-[54vw] md:h-[32em] shadow-lg dark:shadow-black"
						/>
					</div>
				{:else if item.type === 'video'}
					<div use:useInView class="w-full h-full animate-slide-in">
						<PlayerComponent src={item.media} className="w-full h-full rounded-xl" />
					</div>
				{/if}
			</div>

			<div slot="content">
				<h3 class="text-2xl lg:text-3xl font-bold pb-2">{item.header}</h3>
				<p class="text lg:text-xl leading-relaxed">
					{@html item.text}
				</p>
			</div>
		</ContentWithMedia>
	{/each}
		<div class="w-full flex flex-col items-center bg-color2-light dark:bg-color2 p-6">
			<h2 use:useInView class="text-center font-bold text-2xl mb-8 animate-slide-in">ShefOS является основой для многих других популярных дистрибутивов</h2>
			<div use:useInView class="w-[90%] md:w-[45%] h-[80vw] md:h-[38vw] animate-slide-in">
				<ImageComponent
					src="/shefostree.jpg"
					alt="ShefOS Tree"
					className="w-full h-full shadow-lg dark:shadow-black"
				/>
			</div>
		</div>
		<div class="w-full flex flex-col items-center px-4">
			<h2 use:useInView class="text-center font-bold text-2xl mb-4 animate-slide-in">Экосистема ShefOS</h2>
			<h4 use:useInView class="text-center text-xl mb-16 animate-slide-in">Наши разработчки и сообщество упорно работали над портированием ShefOS на различные устройства</h4>

			<div class="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8">
				{#each ecosystem_images as image, i}
					<ImageComponent
						src={image}
						className="w-[15em] h-[15em] shadow-lg dark:shadow-black"
					/>
				{/each}
			</div>
		</div>

	<div class="w-full px-8 flex flex-col gap-8 items-center">
		<h2 use:useInView class="text-center font-bold text-2xl mb-4 animate-slide-in">Портирование ShefOS на ваше устройство</h2>
		<div use:useInView class="p-6 w-full md:w-[60%] bg-color2-light dark:bg-color2 rounded-2xl shadow-md dark:shadow-black animate-slide-in">
			<h3 class="font-bold text-2xl">Шаг 1</h3>
			<p>Скачайте <a href="https://t.me/aniship/929" target="_blank">унифицированный GSI образ</a> с расширением .jpg</p>
			<div class="space-y-4">
				<div class="flex flex-col md:flex-row gap-4 mt-4">
					<a href="https://t.me/aniship/927" target="_blank"><button type="button" class="btn preset-filled-secondary-500">GSI Desktop</button></a>
					<a href="https://t.me/aniship/929" target="_blank"><button type="button" class="btn preset-filled-primary-500">GSI Mobile</button></a>
				</div>
			</div>
		</div>
		<div use:useInView class="p-6 w-full md:w-[60%] bg-color2-light dark:bg-color2 rounded-2xl shadow-md dark:shadow-black animate-slide-in">
			<h3 class="font-bold text-2xl">Шаг 2</h3>
			<p>Просчитайте вес ShefOS для вашего устройства по формуле:</p>
			<h4 class="text-center text-orange-400 font-bold">РАЗМЕР_ДИСКА + КОЛИЧЕСТВО_ОЗУ * 320 + 42 = ?KG</h4>
		</div>
		<div use:useInView class="p-6 w-full md:w-[60%] bg-color2-light dark:bg-color2 rounded-2xl shadow-md dark:shadow-black animate-slide-in">
			<h3 class="font-bold text-2xl">Шаг 3</h3>
			<p>Переведите киллограмы в гигабайты по формуле:</p>
			<h4 class="text-center text-orange-400 font-bold">(ВЕС_SHEFOS * 320 - 42) * 2 = ?GB</h4>
		</div>
		<div use:useInView class="p-6 w-full md:w-[60%] bg-color2-light dark:bg-color2 rounded-2xl shadow-md dark:shadow-black animate-slide-in">
			<h3 class="font-bold text-2xl">Шаг 4</h3>
			<p>С помощью утилиты ffmpeg создайте образ ShefOS для вашего устройства (Вместо GB - подставьте свое значение):</p>
			<div class="w-full bg-black text-white p-4 rounded-2xl mt-4">
				<p>
					ffmpeg -i shefos_gsi.jpg -vf scale=GB:GB -frames:v 1 shefos_rom.bmp && ffmpeg -i shefos_rom.bmp shefos_rom.png
				</p>
			</div>
		</div>
		<div use:useInView class="p-6 w-full md:w-[60%] bg-color2-light dark:bg-color2 rounded-2xl shadow-md dark:shadow-black animate-slide-in">
			<h3 class="font-bold text-2xl">Шаг 5</h3>
			<p class="mb-6">Перезагрузитесь в UEFI/BIOS или бутлоадер (в зависимости от устройства) и используйте функцию "Сменить обои" для установки ShefOS на ваше устройство</p>
			<PlayerComponent src="/porting.mp4" className="w-full h-[100vw] lg:h-[40em] rounded-xl" />
		</div>
	</div>
	<div class="w-full px-8 flex flex-col items-center bg-color2-light dark:bg-color2 p-8">
		<h2 use:useInView class="text-center font-bold text-2xl mb-2 animate-slide-in">Техподдержка</h2>
		<p use:useInView class="text-center text-xl mb-4 animate-slide-in">Если у вас возникнут вопросы или проблемы, пожалуйста, обратитесь в нашу службу технической поддержки</p>
		<a href="https://linuxshef.code.blog/contact/" target="_blank"><button type="button" class="btn preset-filled-primary-500">Связаться</button></a>

		<div class="w-full flex justify-center gap-4 mt-8">
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

	<div class="w-full px-8 flex flex-col items-center">
		<h2 use:useInView class="text-center font-bold text-2xl mb-2 animate-slide-in">Спасибо контрибьютерам за их вклад в проект!</h2>
		<div class="w-full flex flex-col items-center gap-4 mt-8">
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
		<div class="w-[100%] h-[55vw] mt-[10vw]">
			<PlayerComponent src="/shefosusers.mp4" className="w-full h-full rounded-xl shadow-md dark:shadow-black" />
		</div>
	</div>
</div>