<script>
  import Card from "./components/Card.svelte";
  import { fly } from "svelte/transition";
  import api from "./service/api/index.js";

  const movies = (async () => {
    const response = await api.get("/discover/movie", {
      sort_by: "popularity.desc",
    });

    return response;
  })();
</script>

<svelte:head>
  <link
    href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.0/dist/css/bootstrap.min.css"
    rel="stylesheet"
    integrity="sha384-KyZXEAg3QhqLMpG8r+8fhAXLRk2vvoC2f3B09zVXn8CA5QIVfZOJ3BCsw2P0p/We"
    crossorigin="anonymous"
  />
</svelte:head>

<div class="container mt-3">
  <h1>Filmes populares!</h1>
  <div class="row row-cols-1 row-cols-md-2 row-cols-lg-3 row-cols-xl-4 mt-5">
    {#await movies}
      <div class="spinner-grow mr-2" role="status" />
      <div class="spinner-grow mr-2" role="status" />
      <div class="spinner-grow mr-2" role="status" />
    {:then { data }}
      {#each data.results as movie}
        {#if movie.overview !== ""}<div
            in:fly={{ duration: 2000, y: -20 }}
            class="col p-2"
          >
            <Card
              urlImage={movie.poster_path}
              title={movie.title}
              vote={movie.vote_average}
              description={movie.overview}
              release_date={movie.release_date}
            />
          </div>{/if}
      {/each}
    {/await}
  </div>
</div>

<style>
  h1 {
    background-color: #f5f5f5;
    padding-left: 20px;
    border-left: 8px solid red;
	border-spacing: 15px;
  }
</style>
