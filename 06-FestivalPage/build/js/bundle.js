function scrollNav(){document.querySelectorAll(".navbar-principal").forEach((function(e){e.addEventListener("click",(function(e){e.preventDefault();document.querySelector(e.target.attributes.href.value).scrollIntoView({behavior:"smooth"})}))}))}function navFixed(){const e=document.querySelector("header");new IntersectionObserver((function(t){t[0].isIntersecting?e.classList.remove("fijo"):e.classList.add("fijo")})).observe(document.querySelector(".sobre-festival"))}function crearGaleria(){const e=document.querySelector(".galeria-imagenes");for(let t=1;t<=12;t++){const n=document.createElement("img");n.src=`build/img/thumb/${t}.webp`,n.dataset.imagenId=t,n.onclick=mostrarImagen;const o=document.createElement("li");o.appendChild(n),e.appendChild(o)}}function mostrarImagen(e){const t=parseInt(e.target.dataset.imagenId);console.log(t);const n=document.createElement("img");n.src=`build/img/grande/${t}.webp`;const o=document.createElement("div");o.appendChild(n),o.classList.add("overlay");const c=document.createElement("p");c.textContent="X",c.classList.add("btn-cerrar"),c.onclick,o.onclick=function(e){o.remove(e),a.classList.remove("fijar-body")},o.appendChild(c);const a=document.querySelector("body");a.appendChild(o),a.classList.add("fijar-body")}document.addEventListener("DOMContentLoaded",(function(){scrollNav(),navFixed()})),document.addEventListener("DOMContentLoaded",(function(){crearGaleria()}));
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5qcyIsImdhbGVyaWEuanMiXSwibmFtZXMiOlsic2Nyb2xsTmF2IiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yQWxsIiwiZm9yRWFjaCIsImVubGFjZSIsImFkZEV2ZW50TGlzdGVuZXIiLCJlIiwicHJldmVudERlZmF1bHQiLCJxdWVyeVNlbGVjdG9yIiwidGFyZ2V0IiwiYXR0cmlidXRlcyIsImhyZWYiLCJ2YWx1ZSIsInNjcm9sbEludG9WaWV3IiwiYmVoYXZpb3IiLCJuYXZGaXhlZCIsImJhcnJhIiwiSW50ZXJzZWN0aW9uT2JzZXJ2ZXIiLCJlbnRyaWVzIiwiaXNJbnRlcnNlY3RpbmciLCJjbGFzc0xpc3QiLCJyZW1vdmUiLCJhZGQiLCJvYnNlcnZlIiwiY3JlYXJHYWxlcmlhIiwiZ2FsZXJpYSIsImkiLCJpbWFnZW4iLCJjcmVhdGVFbGVtZW50Iiwic3JjIiwiZGF0YXNldCIsImltYWdlbklkIiwib25jbGljayIsIm1vc3RyYXJJbWFnZW4iLCJsaXN0YSIsImFwcGVuZENoaWxkIiwiaWQiLCJwYXJzZUludCIsImNvbnNvbGUiLCJsb2ciLCJvdmVybGF5IiwiY2VycmFySW1hZ2VuIiwidGV4dENvbnRlbnQiLCJib2R5Il0sIm1hcHBpbmdzIjoiQUFNQSxTQUFBQSxZQUNBQyxTQUFBQyxpQkFBQSxxQkFFQUMsU0FBQSxTQUFBQyxHQUNBQSxFQUFBQyxpQkFBQSxTQUFBLFNBQUFDLEdBQ0FBLEVBQUFDLGlCQUVBTixTQUFBTyxjQUFBRixFQUFBRyxPQUFBQyxXQUFBQyxLQUFBQyxPQUNBQyxlQUFBLENBQ0FDLFNBQUEsaUJBTUEsU0FBQUMsV0FDQSxNQUFBQyxFQUFBZixTQUFBTyxjQUFBLFVBQ0EsSUFBQVMsc0JBQUEsU0FBQUMsR0FDQUEsRUFBQSxHQUFBQyxlQUNBSCxFQUFBSSxVQUFBQyxPQUFBLFFBR0FMLEVBQUFJLFVBQUFFLElBQUEsV0FHQUMsUUFBQXRCLFNBQUFPLGNBQUEsb0JDM0JBLFNBQUFnQixlQUNBLE1BQUFDLEVBQUF4QixTQUFBTyxjQUFBLHFCQUVBLElBQUEsSUFBQWtCLEVBQUEsRUFBQUEsR0FBQSxHQUFBQSxJQUFBLENBQ0EsTUFBQUMsRUFBQTFCLFNBQUEyQixjQUFBLE9BQ0FELEVBQUFFLElBQUEsbUJBQUFILFNBQ0FDLEVBQUFHLFFBQUFDLFNBQUFMLEVBRUFDLEVBQUFLLFFBQUFDLGNBRUEsTUFBQUMsRUFBQWpDLFNBQUEyQixjQUFBLE1BQ0FNLEVBQUFDLFlBQUFSLEdBQ0FGLEVBQUFVLFlBQUFELElBSUEsU0FBQUQsY0FBQTNCLEdBQ0EsTUFBQThCLEVBQUFDLFNBQUEvQixFQUFBRyxPQUFBcUIsUUFBQUMsVUFDQU8sUUFBQUMsSUFBQUgsR0FHQSxNQUFBVCxFQUFBMUIsU0FBQTJCLGNBQUEsT0FDQUQsRUFBQUUsSUFBQSxvQkFBQU8sU0FDQSxNQUFBSSxFQUFBdkMsU0FBQTJCLGNBQUEsT0FDQVksRUFBQUwsWUFBQVIsR0FDQWEsRUFBQXBCLFVBQUFFLElBQUEsV0FHQSxNQUFBbUIsRUFBQXhDLFNBQUEyQixjQUFBLEtBQ0FhLEVBQUFDLFlBQUEsSUFDQUQsRUFBQXJCLFVBQUFFLElBQUEsY0FHQW1CLEVBQUFULFFBQ0FRLEVBQUFSLFFBQUEsU0FBQTFCLEdBQ0FrQyxFQUFBbkIsT0FBQWYsR0FDQXFDLEVBQUF2QixVQUFBQyxPQUFBLGVBR0FtQixFQUFBTCxZQUFBTSxHQUVBLE1BQUFFLEVBQUExQyxTQUFBTyxjQUFBLFFBQ0FtQyxFQUFBUixZQUFBSyxHQUNBRyxFQUFBdkIsVUFBQUUsSUFBQSxjRC9DQXJCLFNBQUFJLGlCQUFBLG9CQUFBLFdBQ0FMLFlBRUFlLGNDSEFkLFNBQUFJLGlCQUFBLG9CQUFBLFdBQ0FtQiIsImZpbGUiOiJidW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdET01Db250ZW50TG9hZGVkJywgZnVuY3Rpb24oKSB7XHJcbiAgICBzY3JvbGxOYXYoKTtcclxuXHJcbiAgICBuYXZGaXhlZCgpO1xyXG59KTtcclxuXHJcbmZ1bmN0aW9uIHNjcm9sbE5hdigpIHtcclxuICAgICAgICBjb25zdCBlbmxhY2VzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLm5hdmJhci1wcmluY2lwYWwnKTtcclxuICAgIFxyXG4gICAgICAgIGVubGFjZXMuZm9yRWFjaChmdW5jdGlvbihlbmxhY2UpIHtcclxuICAgICAgICAgICAgZW5sYWNlLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oZSkge1xyXG4gICAgICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cclxuICAgICAgICAgICAgY29uc3Qgc2VjY2lvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoZS50YXJnZXQuYXR0cmlidXRlcy5ocmVmLnZhbHVlKTtcclxuICAgICAgICAgICAgc2VjY2lvbi5zY3JvbGxJbnRvVmlldyh7XHJcbiAgICAgICAgICAgICAgICBiZWhhdmlvcjogJ3Ntb290aCcsXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfSk7XHJcbn07ICAgICAgIFxyXG5cclxuZnVuY3Rpb24gbmF2Rml4ZWQoKSB7XHJcbiAgICBjb25zdCBiYXJyYSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2hlYWRlcicpO1xyXG4gICAgY29uc3Qgb2JzZXJ2ZXIgPSBuZXcgSW50ZXJzZWN0aW9uT2JzZXJ2ZXIoZnVuY3Rpb24oZW50cmllcykge1xyXG4gICAgICAgIGlmIChlbnRyaWVzWzBdLmlzSW50ZXJzZWN0aW5nKSB7XHJcbiAgICAgICAgICAgIGJhcnJhLmNsYXNzTGlzdC5yZW1vdmUoJ2Zpam8nKVxyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgYmFycmEuY2xhc3NMaXN0LmFkZCgnZmlqbycpXHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcbiAgICBvYnNlcnZlci5vYnNlcnZlKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zb2JyZS1mZXN0aXZhbCcpKVxyXG59IiwiZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignRE9NQ29udGVudExvYWRlZCcsIGZ1bmN0aW9uKCkge1xyXG4gICAgY3JlYXJHYWxlcmlhKCk7XHJcbn0pO1xyXG5cclxuZnVuY3Rpb24gY3JlYXJHYWxlcmlhKCkge1xyXG4gICAgY29uc3QgZ2FsZXJpYSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5nYWxlcmlhLWltYWdlbmVzJyk7XHJcblxyXG4gICAgZm9yKGxldCBpPTEgOyBpPD0xMiA7IGkrKykge1xyXG4gICAgY29uc3QgaW1hZ2VuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XHJcbiAgICBpbWFnZW4uc3JjID0gYGJ1aWxkL2ltZy90aHVtYi8ke2l9LndlYnBgO1xyXG4gICAgaW1hZ2VuLmRhdGFzZXQuaW1hZ2VuSWQgPSBpO1xyXG4gICAgXHJcbiAgICBpbWFnZW4ub25jbGljayA9IG1vc3RyYXJJbWFnZW47XHJcbiAgICBcclxuICAgIGNvbnN0IGxpc3RhID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcclxuICAgIGxpc3RhLmFwcGVuZENoaWxkKGltYWdlbik7XHJcbiAgICBnYWxlcmlhLmFwcGVuZENoaWxkKGxpc3RhKTtcclxuICAgIH1cclxufVxyXG5cclxuZnVuY3Rpb24gbW9zdHJhckltYWdlbihlKSB7XHJcbiAgICBjb25zdCBpZCA9IHBhcnNlSW50KGUudGFyZ2V0LmRhdGFzZXQuaW1hZ2VuSWQpO1xyXG4gICAgY29uc29sZS5sb2coaWQpO1xyXG4gICAgXHJcbiAgICAvL0dlbmVyYSAgbGEgaW1hZ2VuXHJcbiAgICBjb25zdCBpbWFnZW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcclxuICAgIGltYWdlbi5zcmMgPSBgYnVpbGQvaW1nL2dyYW5kZS8ke2lkfS53ZWJwYDtcclxuICAgIGNvbnN0IG92ZXJsYXkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIG92ZXJsYXkuYXBwZW5kQ2hpbGQoaW1hZ2VuKTtcclxuICAgIG92ZXJsYXkuY2xhc3NMaXN0LmFkZCgnb3ZlcmxheScpO1xyXG5cclxuICAgIC8vQm90b24gcGFyYSBjZXJyYXIgbGEgaW1hZ2VuXHJcbiAgICBjb25zdCBjZXJyYXJJbWFnZW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XHJcbiAgICBjZXJyYXJJbWFnZW4udGV4dENvbnRlbnQgPSAnWCc7XHJcbiAgICBjZXJyYXJJbWFnZW4uY2xhc3NMaXN0LmFkZCgnYnRuLWNlcnJhcicpO1xyXG5cclxuICAgIC8vRnVuY2lvbmFsaWRhZCBwYXJhIGNlcnJhciBcclxuICAgIGNlcnJhckltYWdlbi5vbmNsaWNrLFxyXG4gICAgb3ZlcmxheS5vbmNsaWNrID0gZnVuY3Rpb24oZSkge1xyXG4gICAgICAgIG92ZXJsYXkucmVtb3ZlKGUpO1xyXG4gICAgICAgIGJvZHkuY2xhc3NMaXN0LnJlbW92ZSgnZmlqYXItYm9keScpO1xyXG4gICAgfVxyXG5cclxuICAgIG92ZXJsYXkuYXBwZW5kQ2hpbGQoY2VycmFySW1hZ2VuKTtcclxuICAgIC8vTW9zdHJhciBlbiBlbCBodG1sXHJcbiAgICBjb25zdCBib2R5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignYm9keScpO1xyXG4gICAgYm9keS5hcHBlbmRDaGlsZChvdmVybGF5KTtcclxuICAgIGJvZHkuY2xhc3NMaXN0LmFkZCgnZmlqYXItYm9keScpO1xyXG59Il19
