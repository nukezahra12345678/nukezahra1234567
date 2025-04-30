function kirimPesan(event) {
    event.preventDefault(); // Mencegah reload form

    let name = document.getElementById("name").value;
    alert("Terima kasih, " + name + ". Pesan Anda sudah kami terima. Tim kami akan segera menindaklanjuti pesan Anda.");
}