<template>
    <div>
        <nuxt-link
			id="logo"
			class="block sm:inline-block w-40 py-5 px-5"
			to="/"
			rel="home"
		>
			<img src="https://www.dataline.fi/images/dataline-logo.png"/>
		</nuxt-link>

        <main
            id="content"
            class="flex flex-col mx-auto"
        >
            <Nuxt keep-alive class="flex-grow" />
		</main>
        <Footer/>
    </div>
</template>

<script>
    import Footer from "@/components/footer";

    export default {
        components: {
            Footer,
        },
    };
</script>