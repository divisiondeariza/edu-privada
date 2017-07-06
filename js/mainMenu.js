<script>
    var childrenMenus = {
      'fundacion' : ["95161","95162","95163","95164"],
      'calidad' : ["95165","95166","95167"], //faltan dos nodos: acreditación y distinciones
      'otrosServicios' : ["95169","95171","95172","95173"],
      'basica' : [],//todos los items de básica
      'media' : [],//todos los items de media
      'docentes' : ["95191","95192"], //faltan dos nodos: perfiles y bibliotecas
      'inclusionExtraedad' : ["95180","95181","95182"],
      'inclusionDiscapacidad' : [],//todos los items de inclusion discapacidad
      'comunidadVidaEscolar' : ["95174","95178","95194","95197","95198"],
      'comunidadParticipacion' : ["95199","95200","95201","95202"],
      'organizacion' : ["95183","95186","95187","95189","95190"]
    };

    window.onload = function() {
        var parentMenuLinks = document.querySelectorAll(".expanded.parent_menu > a");
        var childMenuLinks = document.querySelectorAll(".children_menu .expanded > a");
        setLinkAndClass(parentMenuLinks);
        setLinkAndClass(childMenuLinks);
        var parentMenuNodes = buildParentMenuArray();
        putOpenClassByMenu (parentMenuNodes, parentMenuLinks);
        putOpenClassByMenu (childrenMenus, childMenuLinks)
    };

    function setLinkAndClass(elementsArray) {
        for (var i = 0; i < elementsArray.length; i++) {
            elementsArray[i].setAttribute("href", "javascript:void(0)");
            elementsArray[i].onclick = function() { changeClass(this);};
        }
    }

    function isWordInUrl(word) {
      return window.location.href.includes(word);
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

    function buildParentMenuArray() {
      var parentMenuArray = {};
      parentMenuArray['colegiosYJardines'] = childrenMenus.fundacion.concat(childrenMenus.calidad).concat(childrenMenus.otrosServicios);
      parentMenuArray['formacion'] = childrenMenus.basica.concat(childrenMenus.media).concat(childrenMenus.docentes);
      parentMenuArray['inclusion'] = childrenMenus.inclusionExtraedad.concat(childrenMenus.inclusionDiscapacidad);
      parentMenuArray['comunidad'] = childrenMenus.comunidadVidaEscolar.concat(childrenMenus.comunidadParticipacion);
      parentMenuArray['organizacion'] = childrenMenus.organizacion;
      return parentMenuArray;
    }

    function putOpenClassByMenu (arrayNodes, arrayLinks) {
      for(var key in arrayNodes) {
        for (var i = 0; i < arrayNodes[key].length; i++) {
          if (isWordInUrl(arrayNodes[key][i])) {
              var index = Object.keys(arrayNodes).indexOf(key);
              console.log("key " + key);
              changeClass(arrayLinks[index]);
          }
        }
      }
    }
</script>
