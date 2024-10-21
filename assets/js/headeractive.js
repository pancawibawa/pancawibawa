document.addEventListener("DOMContentLoaded", function () {
    const sections = document.querySelectorAll("section"); // Ambil semua elemen section
    const navLinks = document.querySelectorAll("#navmenu ul li a"); // Ambil semua tautan nav

    window.addEventListener("scroll", () => {
        let current = "";

        // Iterasi melalui setiap section untuk memeriksa posisi scroll
        sections.forEach((section) => {
            const sectionTop = section.offsetTop; // Ambil posisi atas section
            const sectionHeight = section.clientHeight; // Ambil tinggi section

            // Jika scroll berada dalam batas section, set current menjadi id section
            if (pageYOffset >= sectionTop - sectionHeight / 3) {
                current = section.getAttribute("id");
            }
        });

        // Iterasi melalui setiap tautan untuk menandai tautan aktif
        navLinks.forEach((link) => {
            link.classList.remove("active"); // Hapus kelas active
            if (link.getAttribute("href") === `#${current}`) {
                link.classList.add("active"); // Tambahkan kelas active jika cocok
            }
        });
    });
});
