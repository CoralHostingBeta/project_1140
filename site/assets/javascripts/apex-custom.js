var searchInput = document.getElementsByClassName("searchBox")[0];
function handleSearchKeyPress (target) {
    if (target.which === 13 || target.keyCode === 13) {
        window.location = '/dashboard/search?q=' + searchInput.value;
    }
}

