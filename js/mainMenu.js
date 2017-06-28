<script>
    window.onload = function() {
        var parentMenuLinks = document.querySelectorAll(".expanded.parent_menu > a");
        var childMenuLinks = document.querySelectorAll(".children_menu .expanded > a");
        setLinkAndClass(parentMenuLinks);
        setLinkAndClass(childMenuLinks);
    };

    function setLinkAndClass(elementsArray) {
        for (var i = 0; i < elementsArray.length; i++) {
            elementsArray[i].setAttribute("href", "javascript:void(0)");
            elementsArray[i].onclick = function() { changeClass(this);};
            /*var arrowIcon = document.createElement('button');
            arrowIcon.setAttribute("class", "btn arrow-button");
            parentMenuLinks[i].appendChild(arrowIcon);*/
        }
    }

    function changeClass(link) {
        if (hasClass(link, "open"))
            link.classList.remove("open");
        else
            link.className += " open";
    }

    function hasClass(element, className) {
        return (' ' + element.className + ' ').indexOf(' ' + className + ' ') > -1;
    }
</script>
