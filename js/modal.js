function openPopup(popupId,Section) {
    let popup = document.getElementById(popupId);

    if(Section === 'atras'){
        popup.classList.add("atras-open-popup");
    } else if(Section === 'center'){
        popup.classList.add("center-open-popup");
    }else if (Section === 'final') {
        popup.classList.add("final-open-popup");
    } 
    console.log("Abierto")
}

function closePopup(popupId,Section) {
    let popup = document.getElementById(popupId);
    if(Section === 'atras'){
        popup.classList.remove("atras-open-popup");
    } else if(Section === 'center'){
        popup.classList.remove("center-open-popup");
    }else if (Section === 'final') {
        popup.classList.remove("final-open-popup");
    } 
}
