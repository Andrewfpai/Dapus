// const format = `${nama_belakang}, ${nama_depan} ${nama_tengah}. tahun_terbit. ${judul_berita}, ${url}, diakses pada ${tanggal} ${bulan} ${tahun} pukul ${waktu_akses}`


function submit(){
    let judul_berita = document.getElementById("ljudul").value;
    // document.getElementById("display").textContent = judul;

    let nama_depan = document.getElementById("ldepan").value;
    let nama_tengah = document.getElementById("ltengah").value;
    let nama_belakang = document.getElementById("lbelakang").value;
    let tahun_terbit = document.getElementById("ltahun_terbit").value;
    let tanggal = document.getElementById("ltanggal_akses").value;
    let bulan = document.getElementById("lbulan_akses").value;
    let tahun = document.getElementById("ltahun_akses").value;
    let waktu_akses = document.getElementById("ljam_akses").value;
    let url = document.getElementById("lurl").value;

    

    // const format = `${nama_belakang}, ${nama_depan} ${nama_tengah}. ${tahun_terbit}. "${judul_berita}", ${url}, diakses pada ${tanggal} ${bulan} ${tahun} pukul ${waktu_akses}`
    
    document.getElementById("nama_depan").textContent = nama_depan;
    document.getElementById("nama_tengah").textContent = nama_tengah;
    document.getElementById("nama_belakang").textContent = nama_belakang;
    document.getElementById("tahun_terbit").textContent = tahun_terbit;
    document.getElementById("tanggal").textContent = tanggal;
    document.getElementById("bulan_akses").textContent = bulan;
    document.getElementById("tahun_akses").textContent = tahun;
    document.getElementById("waktu_akses").textContent = waktu_akses;
    document.getElementById("url").textContent = url;
    document.getElementById("judul_berita").textContent = judul_berita;

    

    if (url.length == 0 || tahun_terbit.length==0 || tanggal.length==0 || bulan.length==0 || tahun.length==0 || waktu_akses.length==0){
        document.getElementById("display2").textContent = "Format Belum Lengkap, silakan lengkapi kembali!"
        document.getElementById("display").style.display = "none"
        document.getElementById("display2").style.display = "block"

    } else {
        document.getElementById("display").style.display = "block"
        document.getElementById("display2").style.display = "none"
    }
}





function clear1(){
    var elements = document.getElementsByTagName('input');
    for(var i = 0; i < elements.length; i++){ 
        elements[i].value = "";
    }

    document.getElementById("hasil").textContent = " "
  
}


function copy(){

    
    let element = document.getElementById("display"); //select the element
    let elementText = element.textContent; //get the text content from the element
    copyText(elementText); //use the copyText function below

    document.getElementById("copy").textContent = "Copied!"
    
    setTimeout(myFunction, 2000)
  
}

function myFunction() {
    document.getElementById("copy").textContent = "Copy"
  }

function copyText(text) {
    navigator.clipboard.writeText(text);
  }