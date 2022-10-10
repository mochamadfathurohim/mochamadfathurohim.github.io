$(document).ready(function(){
    $(".pilih").click(function(){
        let id = $(this).prop('id');
        let split = id.split('_');
        let id_pilih = split[1];

        $(".pilih").removeClass('aktif');
        $("#pilih_"+id_pilih).addClass('aktif');

        

        $("#pindah_1").slideUp();
        $("#pindah_2").slideUp();
        $("#pindah_3").slideUp();
        $("#pindah_"+id_pilih).slideToggle("medium");
    });
});