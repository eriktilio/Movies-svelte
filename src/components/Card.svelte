<script>
  export let urlImage;
  export let title;
  export let vote;
  export let description;
  export let release_date;

  $: image = `https://image.tmdb.org/t/p/w500${urlImage}`;
</script>

<div class="card shadow h-100">
  <img src={image} class="card-img-top img-fluid" alt={title} />
  <h2><span class="badge bg-warning text-dark mt-1">{vote}</span></h2>
  <div class="card-body">
    <h5 class="card-title">
      {title}
    </h5>
    <p class="card-text">
      {description}
    </p>
    <p class="card-text">
      <small class="text-muted">{release_date}</small>
    </p>
  </div>
</div>

<style>
  .card:hover {
    cursor: pointer;
    border: 1px solid red;
  }
  h2 {
    position: absolute;
    top: 0;
    right: 5px;
  }
</style>
