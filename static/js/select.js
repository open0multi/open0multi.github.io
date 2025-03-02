
var my_dataset = ['room0_rgb_gif', 'room0_segment_gif', 'room0_crossagent_gif', 'room0_crossframe_gif',
    'room1_rgb_gif', 'room1_segment_gif', 'room1_crossagent_gif', 'room1_crossframe_gif',
    'office3_rgb_gif', 'office3_segment_gif', 'office3_crossagent_gif', 'office3_crossframe_gif'
];

$(function () {
    $('.partial_label-selector-3D').change(function () {
        var dataset = $('#partial_label-selector1_3D').val();
        var dataset1 = $('#partial_label-selector1_3D_scene').val();
        var final_dataset = dataset1 + '_' + dataset + '_' + 'gif';

        $('.partial_label_3D').hide();


        for (var i = 0; i < my_dataset.length; i++) {

            if (final_dataset == my_dataset[i]) {
                $('.partial_label_3D.' + my_dataset[i]).show();
                break;
            }

        }

        // if (dataset === 'office0') {
        //     // 当选择office0时执行的代码
        //     $('.partial_label_3D.office0').show();
        // } else if (dataset === 'office3') {
        //     // 当选择office3时执行的代码
        //     $('.partial_label_3D.office3').show();
        // } else {
        //     // 当选择room0时执行的代码
        //     $('.partial_label_3D.room0').show();
        // }
        console.log('.partial_label_3D.' + dataset)
    });
});