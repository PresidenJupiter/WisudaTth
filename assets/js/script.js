AOS.init()

lightbox.option({
    'alaySnowNavOnTouchDevices': true,
    'wrapAround': true
})

var musik =''
var audio = document.querySelector('audio') 
if(musik){
    audio.src = musik
}


function mulai()
{
    audio.play()
    window.scrollTo(0, 0);
    var mail_section = $('#mail-section');
    $('#mail').attr('src', 'assets/img/mail.gif');
    setTimeout(function() {
        mail_section.css('opacity', 0)
        $('body').removeClass('overflow-hidden')}, 2000)
        setTimeout(function() {
            mail_section.removeClass('d=flex')
            mail_section.addClass('d-none')
        }, 4000)
}

function wa(isi) 
{
    open("https://wa.me/6285782317315?text=Hatur nuhun pisan bro! Urang mah hayang " + isi + ". Senangnya dalam hati punya adek macem Azki yang amat sangat baik hati😍")
}

async function makeawish(){
    var {
        value: kado
    } = await swal.fire({
        imageUrl: 'assets/img/wish.jpeg',
        title : 'Arek naon yeuh? Silahkan dipilih pesanan anda baginda🧾',
        imageWidth : 400,
        imageHeight : 400,
        confirmButtonColor : '#2fe965',
        confirmButtonText : 'Asli? Oke, Cheek!!✈',
        input : 'text',
        showCancleButton : false
    })
    if(kado) {
        await swal.fire({
            imageUrl :'assets/img/wa.png',
            title : 'Kirim jawabannya ke WA yaaa',
            confirmButtonColor : '#2fe965',
            confirmButtonText : 'Kirim✈'
        })

        wa(kado)
    }else{
        await swal.fire({
            icon : 'error',
            title : 'Jangan dikosongin dong!!!'
        })
        makeawish()
    }
}