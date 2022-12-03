const loadNews = (categoryId) => {
  fetch(`https://openapi.programming-hero.com/api/news/category/${categoryId}`)
    .then(res => res.json())
    .then(data => displayNews(data.data))
};


const loadNewsBar = () =>{
  fetch('https://openapi.programming-hero.com/api/news/categories')
.then(res => res.json())
.then(data => displayNewsBar(data.data.news_category))

}
const displayNewsBar = (newsBar) =>{
newsBar.forEach(eachBar =>{
  const newsBarDiv = document.getElementById('category');
  const newsBarElement = document.createElement('div');
  newsBarElement.innerHTML = `
  <div>
     <a onclick="loadNews('${eachBar.category_id}')"><h5>${eachBar.category_name}</h5></a>

            </div>
  `
  newsBarDiv.appendChild(newsBarElement);
})

};
loadNewsBar();

const displayNews = (newses) => {
  const searchElement = document.getElementById('search');
  searchElement.innerText =`${newses.length} items found for this category`

  const mainElement = document.getElementById('main');
  
  mainElement.innerHTML =``;
 
  newses.forEach(news => {
    const mainDiv = document.createElement('div');
    mainDiv.innerHTML = `
        <div class="card my-3 p-4">
     <div class="row">
    <div class="col-md-4">
          <img src="${news.thumbnail_url}" class="rounded-start" style="width: 300px; height: 330px;" alt="...">
          </div>
          <div class="col-md-8">
          <div class="card-body">
          <h4 class="card-title fw-bolder">${news.title}</h4>
          <p class="card-text details text-secondary ">${news.details.slice(0,600)}</p>
          <div class="d-flex justify-content-between gap-2 align-items-center"> 
 <div class="d-flex align-items-center gap-2">
 <div>
 <img src="${news.author.img}" style="width:40px;" class="rounded-circle" alt="">
 </div>
 <div>
 <div>
 <p class="m-0">${news.author.name}</p>
 <p class="m-0">${news.author.published_date.slice(0, 11)}</p></div>
 </div>
 </div>
          <div>
          <h6 class="text-secondary">View: ${news.total_view? news.total_view: 'No Data Found' }</h6>
          </div>
          <div class="flex justify-content-end">
          <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
          See More
      </button>
          </div>
          </div>
          
          </div>
      </div>
    </div>
</div>

        `
    mainElement.appendChild(mainDiv)
  });
}
loadNews('01');

