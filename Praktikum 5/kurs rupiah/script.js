function konversi() {
    let nilai= document.getElementById('nilai').value;
    let select= document.getElementById('valas').value;
    let rupiah= document.getElementById('rupiah')

    if (select == 'Dollar US') {
        rupiah.value = nilai * 9870;
    } else if (select == 'Dollar Singapore') {
        rupiah.value = nilai * 15673;   
    } else if (select == 'Ringgit Malaysia') {
        rupiah.value = nilai * 890;
    } else if (select == 'Yen Jepan') {
        rupiah.value = nilai * 300;
    } else if (select == 'Euro') {
        rupiah.value = nilai * 18500;
    } else if (select == 'Riyal Arab Saudi') {
        rupiah.value = nilai * 5630;
    }
    return false;
}

