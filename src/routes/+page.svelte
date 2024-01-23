<script lang="ts">
    let input = ""
		let is_valid_url = false;

		function parseURL(url: string, flag: string) {
				const parts = url.split('?');

				if (parts.length > 1) {
						const queryString = parts[1];
						const params = queryString.split('&');

						for (const param of params) {
								const [key, value] = param.split('=');
								if (key === flag) {
										return value;
								}
						}
				}
		}

		function parseYoutubeURL(url: string) {
				if (url.startsWith('https://www.youtube.com/watch?v=') || url.startsWith('https://youtu.be/')) {
						is_valid_url = true;
						return parseURL(url, 'v')
				} else if (url.startsWith('https://www.google.com/url?')) {
						const youtube = parseURL(url, 'url');
						const youtube_parsed = decodeURIComponent(youtube!)
						return parseYoutubeURL(youtube_parsed)
				} else {
						is_valid_url = false;
						return;
				}
		}

		$: embed_url = "https://youtube.com/embed/" + parseYoutubeURL(input);
</script>

<main class="w-full text-center flex justify-center">
    <div class="flex flex-col justify-center w-4/5 p-8">
        <h2 class="text-4xl my-2">
            Youtube Embed Generator
        </h2>
        <input
            type="text"
            placeholder="Youtube URL"
            class="input w-full my-2"
            bind:value={input}
        />
				{#if is_valid_url}
        <iframe width="949" height="534" id="embed" class="embed" src="{embed_url}" title="Youtube Embed" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
				{:else if input.length > 0}
				<p class="text-lg text-secondary break-all my-2">Invalid URL!</p>
				{/if}
    </div>
</main>
