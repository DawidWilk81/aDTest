window.onload = ()=>{ 
    const searchToggler = document.getElementById('searchMagnify');
    const searchInput = document.getElementById('naviSearch');
    const submitSearch = document.getElementById('submitSearch');
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