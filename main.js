imgTable = [
    "https://picsum.photos/seed/picsum/100/300",
    "https://picsum.photos/seed/picsum/300/400",
    "https://picsum.photos/seed/picsum/200/300",
    "https://picsum.photos/seed/picsum/400/300",
    "https://picsum.photos/seed/picsum/400/350",
    "https://picsum.photos/seed/picsum/300/300",
];
window.onload = ()=>{ 
    const searchToggler = document.getElementById('searchMagnify');
    const searchInput = document.getElementById('naviSearch');
    const submitSearch = document.getElementById('submitSearch');
    const gridOverlay = document.getElementById('gridOverlay');
    const overlayBtn = document.getElementById('overlayBtn');

    // MASONRY
    var grid = document.querySelector('.grid');
    var msnry = new Masonry( grid, {
    itemSelector: '.grid-item',
    columnWidth: '.grid-item',
    percentPosition: true,
    gutter:30,
    
    });
    overlayBtn.addEventListener('click', () => {
        imgTable.forEach((element) => {
            var newGridItem = document.createElement('div');
            newGridItem.className = 'grid-item';
            newGridItem.innerHTML = `<img src="${element}" alt='MasonryGridImage'>`;
    
            // Dodawanie elementu do siatki i informowanie Masonry
            grid.appendChild(newGridItem);
            msnry.appended(newGridItem);
        });
    
        // Po dodaniu wszystkich elementów, wywołaj layout Masonry
        msnry.layout();
    
        //overlay toggle
        gridOverlay.style.background = 'transparent';
    });

    //Functions
    //#Search Magnify
    let showSearch = false;
    console.log(searchToggler);
    let toggleSearch = () =>{
        showSearch = !showSearch;
        if(showSearch){
            searchInput.style.opacity= "1";
            searchInput.style.display= "flex";
            searchInput.style.visibility= "visible";
            showSearch = true;
        }else if(!showSearch){
            searchInput.style.visibility= "hidden";
            searchInput.style.opacity= "0";
            searchInput.style.display= "none";
            showSearch = false;
        }


    }
    searchToggler.addEventListener("click", toggleSearch, true);
}