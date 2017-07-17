<script>
    var childrenMenus = {
      'fundacion' : ["95161","95162","95163","95164"],
      'calidad' : ["95165","95166","95167"], //faltan dos nodos: acreditación y distinciones
      'otrosServicios' : ["95169","95171","95172","95173"],
      //'preescolar' : [],//todos los items de preescolar
      'basica' : [],//todos los items de básica
      'media' : [],//todos los items de media
      'docentes' : ["95191","95192"], //faltan dos nodos: perfiles y bibliotecas
      'inclusionExtraedad' : ["95180","95181","95182"],
      'comunidadVidaEscolar' : ["95174","95178","95194","95197","95198"],
      'comunidadParticipacion' : ["95199","95200","95201","95202"],
      'organizacionAdministracion' : ["95187","95189","95190"],
    };

    var noChildrenMenus = {
      'inclusionDiscapacidad' : ["105460"],
      'inclusionTalentosos' : ["95321"],
      'comunidadResponsabilidad' : ["105459"],
      'organizacionCalendario' : ["95183","95186"],
    };

    window.onload = function() {
        var parentMenuLinks = document.querySelectorAll(".expanded.parent_menu > a");
        var childMenuLinks = document.querySelectorAll(".children_menu .expanded > a");
        var nodeLinks = document.querySelectorAll(".expanded.parent_menu > a + ul a");
        setLinkAndClass(parentMenuLinks);
        setLinkAndClass(childMenuLinks);
        var parentMenuNodes = buildParentMenuArray();
        putOpenClassByMenu (parentMenuNodes, parentMenuLinks);
        putOpenClassByMenu (childrenMenus, childMenuLinks);
        resetClass(nodeLinks);
    };

    function resetClass(linksArray) {
      if (isFinishWordInUrl("docentes")) {
        for (var i = 0; i < linksArray.length; i++) {
          deleteActiveClass(linksArray[i]);
        }
      }
    }

    function setLinkAndClass(elementsArray) {
        for (var i = 0; i < elementsArray.length; i++) {
            elementsArray[i].setAttribute("href", "javascript:void(0)");
            elementsArray[i].onclick = function() { changeClass(this);};
        }
    }

    function isWordInUrl(word) {
      return window.location.href.includes(word);
    }

    function isFinishWordInUrl(word) {
      return word == window.location.href.substr(window.location.href.lastIndexOf('/') + 1);
    }

    function changeClass(link) {
        if (link != undefined) {
          if (hasClass(link, "open"))
              link.classList.remove("open");
          else
              link.className += " open";
        }
    }

    function hasClass(element, className) {
        return (' ' + element.className + ' ').indexOf(' ' + className + ' ') > -1;
    }

    function buildParentMenuArray() {
      var parentMenuArray = {};
      parentMenuArray['colegiosYJardines'] = childrenMenus.fundacion.concat(childrenMenus.calidad).concat(childrenMenus.otrosServicios);
      parentMenuArray['formacion'] = childrenMenus.basica.concat(childrenMenus.media).concat(childrenMenus.docentes);
      parentMenuArray['inclusion'] = childrenMenus.inclusionExtraedad.concat(noChildrenMenus.inclusionDiscapacidad).concat(noChildrenMenus.inclusionTalentosos);
      parentMenuArray['comunidad'] = childrenMenus.comunidadVidaEscolar.concat(childrenMenus.comunidadParticipacion).concat(noChildrenMenus.comunidadResponsabilidad);
      parentMenuArray['organizacion'] = childrenMenus.organizacionAdministracion.concat(noChildrenMenus.organizacionCalendario);
      return parentMenuArray;
    }

    function putOpenClassByMenu (arrayNodes, arrayLinks) {
      for(var key in arrayNodes) {
        for (var i = 0; i < arrayNodes[key].length; i++) {
          if (isWordInUrl(arrayNodes[key][i])) {
              var index = Object.keys(arrayNodes).indexOf(key);
              console.log("key: " + key + " index: " + index);
              changeClass(arrayLinks[index]);
              break;
          }
        }
      }
    }

    function deleteActiveClass(link) {
      if (link != undefined) {
        link.classList.remove("active");
      }
    }
</script>
