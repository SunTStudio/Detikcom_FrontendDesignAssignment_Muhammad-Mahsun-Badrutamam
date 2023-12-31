document.getElementById("artikel").addEventListener("click", function () {
  // Mengambil semua elemen myDiv
  var myDivs = document.querySelectorAll("#myDiv");

  // Loop melalui setiap myDiv
  myDivs.forEach(function (myDiv) {
    // Mengambil elemen <i> di dalam myDiv
    var existingIcon = myDiv.querySelector("i.bi");

    if (existingIcon) {
      // Jika ada, hapus elemen <i> dan isinya dari myDiv
      existingIcon.parentNode.removeChild(existingIcon);
    }
  });
  document.getElementById("foto").classList.remove("bg-info");
  document.getElementById("video").classList.remove("bg-info");
  document.getElementById("artikel").classList.add("bg-info");
});

document.getElementById("foto").addEventListener("click", function () {
  // Mengambil semua elemen myDiv
  var myDivs = document.querySelectorAll("#myDiv");

  // Loop melalui setiap myDiv
  myDivs.forEach(function (myDiv) {
    // Periksa apakah tag <i> sudah ada di dalam myDiv
    var existingIcon = myDiv.querySelector("i.bi");

    if (existingIcon) {
      // Jika sudah ada, ubah kelasnya menjadi bg-primary
      existingIcon.classList.replace("bi-camera-video-fill", "bi-camera");
      existingIcon.textContent = " 5 Video"; // Ubah teks menjadi "5 Video"
    } else {
      // Jika tidak ada, buat elemen baru dan tambahkan ke dalam myDiv
      var elemenBaru = document.createElement("i");
      elemenBaru.className = "bi bi-camera bg-white p-1 rounded";
      elemenBaru.textContent = " 5 Foto";
      myDiv.appendChild(elemenBaru);
    }
  });
  document.getElementById("artikel").classList.remove("bg-info");
  document.getElementById("video").classList.remove("bg-info");
  document.getElementById("foto").classList.add("bg-info");
});

document.getElementById("video").addEventListener("click", function () {
  // Mengambil semua elemen myDiv
  var myDivs = document.querySelectorAll("#myDiv");

  // Loop melalui setiap myDiv
  myDivs.forEach(function (myDiv) {
    // Periksa apakah tag <i> sudah ada di dalam myDiv
    var existingIcon = myDiv.querySelector("i.bi");

    if (existingIcon) {
      // Jika sudah ada, ubah kelasnya menjadi bg-primary
      existingIcon.classList.replace("bi-camera", "bi-camera-video-fill");
      existingIcon.textContent = " 5 Video"; // Ubah teks menjadi "5 Video"
    } else {
      // Jika tidak ada, buat elemen baru dan tambahkan ke dalam myDiv
      var elemenBaru = document.createElement("i");
      elemenBaru.className = "bi bi-camera-video-fill bg-white p-1 rounded";
      elemenBaru.textContent = " 5 Video";
      myDiv.appendChild(elemenBaru);
    }
  });
  document.getElementById("foto").classList.remove("bg-info");
  document.getElementById("artikel").classList.remove("bg-info");
  document.getElementById("video").classList.add("bg-info");
});
