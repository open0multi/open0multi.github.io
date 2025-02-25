$(function() {
    $('.partial_label-selector-3D').change(function(){
        var dataset = $('#partial_label-selector1_3D').val();

        $('.partial_label_3D').hide();
        if (dataset === 'office0') {
            // 当选择office0时执行的代码
            $('.partial_label_3D.office0').show();
        } else if (dataset === 'office3') {
            // 当选择office3时执行的代码
            $('.partial_label_3D.office3').show();
        } else{
            // 当选择room0时执行的代码
            $('.partial_label_3D.room0').show();
        }
        console.log('.partial_label_3D.' + dataset)
    });
});