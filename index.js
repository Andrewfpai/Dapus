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

   


    const format = `${nama_belakang}, ${nama_depan} ${nama_tengah}. ${tahun_terbit}. "${judul_berita}", ${url}, diakses pada ${tanggal} ${bulan} ${tahun} pukul ${waktu_akses}`
    
    display(format)

}

function display(input){
document.getElementById("display").textContent = input;
}



function clear1(){
    var elements = document.getElementsByTagName('input');
    for(var i = 0; i < elements.length; i++){ 
        elements[i].value = "";
    }
  
}


// function copy(){
//     let element = document.getElementById("display"); //select the element
//     let elementText = element.textContent; //get the text content from the element
//     copyText(elementText); //use the copyText function below
  
// }

function copyText(text) {
    navigator.clipboard.writeText(text);
  }